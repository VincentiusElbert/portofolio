"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { AlertCircle, Check, Copy, Loader2, Send } from "lucide-react"
import { MESSAGE_MAX, validateContact, type ContactErrors, type ContactInput } from "@/lib/contact"

const EMAIL = "vincentiuselbert@gmail.com"
const EMPTY: ContactInput = { name: "", email: "", message: "" }

type Status = "idle" | "sending" | "sent" | "error"

export function ContactForm() {
  const [values, setValues] = useState<ContactInput>(EMPTY)
  const [touched, setTouched] = useState<Partial<Record<keyof ContactInput, boolean>>>({})
  const [serverErrors, setServerErrors] = useState<ContactErrors>({})
  const [status, setStatus] = useState<Status>("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [copied, setCopied] = useState(false)
  const honeypot = useRef<HTMLInputElement>(null)
  const startedAt = useRef(0)

  // When the form became usable, so the server can reject instant bot submissions
  useEffect(() => {
    startedAt.current = Date.now()
  }, [status])

  const clientErrors = validateContact(values)
  const errorFor = (field: keyof ContactInput) => serverErrors[field] ?? (touched[field] ? clientErrors[field] : undefined)

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = e.target.name as keyof ContactInput
    setValues((v) => ({ ...v, [field]: e.target.value }))
    setServerErrors((s) => ({ ...s, [field]: undefined }))
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setTouched({ name: true, email: true, message: true })
    if (Object.keys(clientErrors).length) return

    setStatus("sending")
    setErrorMessage("")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, company: honeypot.current?.value ?? "", startedAt: startedAt.current }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setServerErrors(data.errors ?? {})
        setErrorMessage(data.error ?? "Something went wrong.")
        setStatus("error")
        return
      }
      setStatus("sent")
      setValues(EMPTY)
      setTouched({})
    } catch {
      setErrorMessage("Couldn't reach the server. Check your connection and try again.")
      setStatus("error")
    }
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            role="status"
            className="flex min-h-[460px] flex-col items-center justify-center rounded-2xl border border-[#91FF02]/30 bg-[#91FF02]/5 p-8 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 15, delay: 0.1 }}
              className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#91FF02]"
            >
              <Check className="h-8 w-8 text-black" strokeWidth={3} />
            </motion.div>
            <h4 className="mb-2 text-2xl font-bold text-white">Message sent!</h4>
            <p className="mb-8 max-w-sm text-gray-400">
              Thanks for reaching out. I usually reply within a day or two, so keep an eye on your inbox.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="text-sm font-medium text-[#91FF02] hover:underline"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={submit}
            noValidate
            className="space-y-5"
          >
            <Field label="Name" id="contact-name" error={errorFor("name")}>
              <input
                id="contact-name"
                name="name"
                autoComplete="name"
                value={values.name}
                onChange={update}
                onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                placeholder="Your name"
                aria-invalid={!!errorFor("name")}
                aria-describedby={errorFor("name") ? "contact-name-error" : undefined}
                className={inputClass(!!errorFor("name"))}
              />
            </Field>

            <Field label="Email" id="contact-email" error={errorFor("email")}>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={update}
                onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                placeholder="you@company.com"
                aria-invalid={!!errorFor("email")}
                aria-describedby={errorFor("email") ? "contact-email-error" : undefined}
                className={inputClass(!!errorFor("email"))}
              />
            </Field>

            <Field
              label="Message"
              id="contact-message"
              error={errorFor("message")}
              hint={
                <span className={values.message.length > MESSAGE_MAX ? "text-red-400" : ""}>
                  {values.message.length}/{MESSAGE_MAX}
                </span>
              }
            >
              <textarea
                id="contact-message"
                name="message"
                rows={6}
                value={values.message}
                onChange={update}
                onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                placeholder="Tell me about the role or project…"
                aria-invalid={!!errorFor("message")}
                aria-describedby={errorFor("message") ? "contact-message-error" : undefined}
                className={`${inputClass(!!errorFor("message"))} h-auto resize-none py-3`}
              />
            </Field>

            {/* Honeypot: hidden from people, tempting for bots */}
            <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
              <label htmlFor="contact-company">Company</label>
              <input id="contact-company" ref={honeypot} name="company" tabIndex={-1} autoComplete="off" />
            </div>

            <AnimatePresence>
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  role="alert"
                  className="overflow-hidden"
                >
                  <div className="flex gap-3 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm">
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                    <div className="text-gray-300">
                      <p className="font-medium text-white">{errorMessage}</p>
                      <p className="mt-1">
                        You can also email me directly at{" "}
                        <button type="button" onClick={copyEmail} className="inline-flex items-center gap-1 font-medium text-[#91FF02] hover:underline">
                          {EMAIL} {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                        </button>
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex h-14 w-full items-center justify-center gap-2 rounded-lg bg-[#91FF02] text-lg font-semibold text-black transition-colors hover:bg-[#91FF02]/90 disabled:cursor-wait disabled:opacity-70"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" /> Sending…
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" /> Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

const inputClass = (invalid: boolean) =>
  `h-14 w-full rounded-lg border bg-black px-4 text-white placeholder:text-gray-500 transition-colors focus:outline-none focus:ring-2 ${
    invalid ? "border-red-500/70 focus:ring-red-500/30" : "border-gray-800 focus:border-[#91FF02]/60 focus:ring-[#91FF02]/20"
  }`

function Field({
  label,
  id,
  error,
  hint,
  children,
}: {
  label: string
  id: string
  error?: string
  hint?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <label htmlFor={id} className="text-sm font-medium text-white">
          {label}
        </label>
        {hint && <span className="text-xs text-gray-500">{hint}</span>}
      </div>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${id}-error`}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-1.5 text-sm text-red-400"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}
