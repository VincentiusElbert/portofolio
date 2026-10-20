import { NextResponse } from "next/server"
import { validateContact } from "@/lib/contact"

// Sends contact form messages to my inbox through Resend's REST API.
// Env: RESEND_API_KEY (required), CONTACT_TO_EMAIL (defaults to my address), CONTACT_FROM_EMAIL (optional).

const TO = process.env.CONTACT_TO_EMAIL ?? "vincentiuselbert@gmail.com"
// onboarding@resend.dev works without a verified domain, but can only deliver to the Resend account's own email
const FROM = process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>"

// Best-effort rate limit per IP. Serverless instances don't share memory, so this only slows down bursts.
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5
const hits = new Map<string, number[]>()

function rateLimited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > MAX_PER_WINDOW
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!)

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 })
  }

  const name = String(body.name ?? "")
  const email = String(body.email ?? "")
  const message = String(body.message ?? "")
  const honeypot = String(body.hp_check ?? "") // hidden field real visitors never fill
  const elapsed = Number(body.elapsedMs ?? 0) // time the visitor spent on the form, measured in their browser

  // Bots: pretend it worked so they don't retry, but send nothing (logged so false positives are visible)
  if (honeypot || elapsed < 3000) {
    console.warn("Contact form: dropped as bot", { honeypot: Boolean(honeypot), elapsedMs: elapsed })
    return NextResponse.json({ ok: true })
  }

  const errors = validateContact({ name, email, message })
  if (Object.keys(errors).length) return NextResponse.json({ error: "Please check the form.", errors }, { status: 422 })

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many messages. Please try again in a few minutes." }, { status: 429 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not set")
    return NextResponse.json({ error: "The contact form isn't configured yet." }, { status: 503 })
  }

  const safe = { name: escapeHtml(name.trim()), email: escapeHtml(email.trim()), message: escapeHtml(message.trim()) }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: email.trim(), // hitting Reply in Gmail answers the visitor directly
      subject: `Portfolio message from ${name.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:560px">
          <h2 style="margin:0 0 4px">New message from your portfolio</h2>
          <p style="margin:0 0 16px;color:#666">Reply to this email to answer ${safe.name} directly.</p>
          <p style="margin:0"><strong>Name:</strong> ${safe.name}</p>
          <p style="margin:0 0 16px"><strong>Email:</strong> ${safe.email}</p>
          <div style="white-space:pre-wrap;padding:16px;background:#f5f5f5;border-radius:8px">${safe.message}</div>
        </div>`,
    }),
  })

  if (!res.ok) {
    console.error("Contact form: Resend error", res.status, await res.text())
    return NextResponse.json({ error: "Couldn't send your message right now." }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
