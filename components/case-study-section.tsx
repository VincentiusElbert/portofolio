"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useInView } from "framer-motion"
import {
  Ban,
  Check,
  FileJson,
  Gift,
  Lock,
  Package,
  ShieldCheck,
  Sparkles,
  Star,
  Ticket,
  Truck,
  UserRound,
  Zap,
} from "lucide-react"

type Step = { label: string; title: string; body: string }

type CaseStudy = {
  id: string
  index: string
  title: string
  role: string
  stack: string[]
  steps: Step[]
  Visual: (props: { step: number }) => React.ReactElement
}

const caseStudies: CaseStudy[] = [
  {
    id: "loyalty-app",
    index: "01",
    title: "Loyalty Mobile App",
    role: "Frontend Developer · IRIS Worldwide",
    stack: ["Expo", "React Native", "TypeScript", "Tailwind CSS", "Laravel API"],
    steps: [
      {
        label: "Context",
        title: "A loyalty program for two FMCG nutrition brands",
        body: "Members of two consumer brands needed one place to collect points, follow campaigns and redeem rewards from their phone.",
      },
      {
        label: "Challenge",
        title: "Thousands of real members, live campaigns",
        body: "The app had to run on live production data, stay fast on everyday devices, and let marketing launch promotions without waiting for a release.",
      },
      {
        label: "What I built",
        title: "Architected the app end to end",
        body: "I architected and developed the app with Expo (React Native), React, TypeScript and Tailwind CSS. On the backend I made campaign bonus rules configurable, so marketing can switch promotions on or off without a code deployment.",
      },
      {
        label: "Impact",
        title: "In production, serving thousands of active users",
        body: "The app is live for both brands. Centralized logging of all incoming API traffic, with sensitive data masked, gives the team a full audit trail for debugging.",
      },
    ],
    Visual: PhoneMockup,
  },
  {
    id: "flash-sale",
    index: "02",
    title: "Flash Sale Rewards System",
    role: "Admin CMS & API · IRIS Worldwide",
    stack: ["Laravel", "REST API", "SQL Server", "Admin CMS"],
    steps: [
      {
        label: "Context",
        title: "Spend points on limited-time rewards",
        body: "Marketing wanted Flash Sales where members exchange their points for e-vouchers or physical rewards, with limited stock and a fixed window.",
      },
      {
        label: "Challenge",
        title: "Fair, safe redemption under pressure",
        body: "Each member may redeem only once, eligibility rules decide who can join, and a double tap or retried request must never redeem the same reward twice.",
      },
      {
        label: "What I built",
        title: "Admin CMS + redemption API",
        body: "I built the admin CMS for configuring Flash Sales and the API behind it: eligibility rules, one-redeem-per-member limits and duplicate-safe redemption. I also defined the API contract used by a separate Drupal frontend team.",
      },
      {
        label: "Impact",
        title: "Fulfilment for both reward types",
        body: "Successful redemptions flow straight into fulfilment, with e-vouchers issued digitally and physical rewards prepared for delivery, while the partner team builds against a clear contract.",
      },
    ],
    Visual: FlashSaleFlow,
  },
]

export function CaseStudySection() {
  return (
    <section id="case-studies" className="py-20 px-4 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-[#91FF02] text-lg font-medium mb-2 tracking-wider">CASE STUDIES</h2>
          <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">PRODUCTION WORK, UP CLOSE</h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            How I build loyalty products used by real members. Client work is confidential, so the visuals below are
            illustrative mockups, not screenshots.
          </p>
        </motion.div>

        <div className="space-y-32">
          {caseStudies.map((cs) => (
            <CaseStudyBlock key={cs.id} cs={cs} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseStudyBlock({ cs }: { cs: CaseStudy }) {
  const [activeStep, setActiveStep] = useState(0)
  const Visual = cs.Visual

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 border-b border-gray-800 pb-6"
      >
        <div className="flex items-baseline gap-4">
          <span className="text-5xl font-light text-gray-700">{cs.index}</span>
          <div>
            <h4 className="text-white text-2xl md:text-3xl font-bold">{cs.title}</h4>
            <p className="text-[#91FF02] text-sm mt-1">{cs.role}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {cs.stack.map((s) => (
            <span key={s} className="px-3 py-1 text-xs rounded-full border border-white/10 text-gray-300">
              {s}
            </span>
          ))}
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Visual: sticky on desktop so it reacts while the story scrolls */}
        <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)] flex items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-6 min-h-[420px]">
          <Visual step={activeStep} />
        </div>

        <div className="lg:py-[20vh]">
          {cs.steps.map((step, i) => (
            <StoryStep key={step.label} step={step} index={i} active={activeStep === i} onActive={() => setActiveStep(i)} />
          ))}
        </div>
      </div>
    </div>
  )
}

function StoryStep({
  step,
  index,
  active,
  onActive,
}: {
  step: Step
  index: number
  active: boolean
  onActive: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" })

  useEffect(() => {
    if (inView) onActive()
  }, [inView, onActive])

  return (
    <motion.div
      ref={ref}
      animate={{ opacity: active ? 1 : 0.35 }}
      transition={{ duration: 0.4 }}
      className="relative pl-8 py-8 lg:min-h-[45vh] flex flex-col justify-center border-l border-gray-800"
    >
      <motion.span
        className="absolute -left-px top-8 bottom-8 w-0.5 bg-[#91FF02] origin-top"
        animate={{ scaleY: active ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />
      <span className="text-[#91FF02] text-xs font-semibold tracking-[0.2em] mb-3">
        {String(index + 1).padStart(2, "0")} · {step.label.toUpperCase()}
      </span>
      <h5 className="text-white text-xl md:text-2xl font-semibold mb-3">{step.title}</h5>
      <p className="text-gray-400 leading-relaxed">{step.body}</p>
    </motion.div>
  )
}

/* ---------------- Visual 1: phone mockup ---------------- */

function PhoneMockup({ step }: { step: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: -4 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 80, damping: 15 }}
      className="relative"
    >
      <div className="absolute -inset-10 bg-[#91FF02]/10 blur-3xl rounded-full" />
      <div className="relative w-[260px] h-[520px] rounded-[2.5rem] border-[10px] border-gray-800 bg-gray-950 shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-800 rounded-b-xl z-20" />
        <div className="h-full pt-8 px-4 pb-4 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-[10px] text-gray-500">Welcome back</p>
              <p className="text-white text-sm font-semibold">Member</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
              <UserRound className="w-4 h-4 text-gray-400" />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              className="flex-1 flex flex-col"
            >
              {step === 0 && <ScreenHome />}
              {step === 1 && <ScreenRewards />}
              {step === 2 && <ScreenCampaign />}
              {step === 3 && <ScreenRedeemed />}
            </motion.div>
          </AnimatePresence>

          {/* Tab bar */}
          <div className="mt-3 grid grid-cols-4 gap-1 border-t border-gray-800 pt-3">
            {[Star, Gift, Sparkles, Ticket].map((Icon, i) => (
              <div key={i} className="flex justify-center">
                <Icon className={`w-4 h-4 ${i === step ? "text-[#91FF02]" : "text-gray-600"}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ScreenHome() {
  return (
    <>
      <div className="rounded-2xl bg-gradient-to-br from-[#91FF02] to-[#5fa800] p-4 text-black mb-4">
        <p className="text-[10px] font-medium opacity-70">Your points</p>
        <motion.p className="text-3xl font-bold" initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
          12,450
        </motion.p>
        <p className="text-[10px] mt-1 opacity-70">Gold tier · 550 pts to Platinum</p>
        <div className="h-1.5 bg-black/20 rounded-full mt-2 overflow-hidden">
          <motion.div className="h-full bg-black/70" initial={{ width: 0 }} animate={{ width: "78%" }} transition={{ duration: 1 }} />
        </div>
      </div>
      <p className="text-white text-xs font-semibold mb-2">Recent activity</p>
      {["Purchase verified", "Referral bonus", "Weekly check-in"].map((t, i) => (
        <motion.div
          key={t}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.1 }}
          className="flex items-center justify-between rounded-xl bg-gray-900 px-3 py-2.5 mb-2"
        >
          <span className="text-gray-300 text-[11px]">{t}</span>
          <span className="text-[#91FF02] text-[11px] font-semibold">+{[200, 500, 50][i]}</span>
        </motion.div>
      ))}
    </>
  )
}

function ScreenRewards() {
  return (
    <>
      <p className="text-white text-xs font-semibold mb-3">Rewards catalog</p>
      <div className="grid grid-cols-2 gap-2">
        {[
          { name: "E-voucher", pts: "2,000", Icon: Ticket },
          { name: "Tumbler", pts: "5,500", Icon: Gift },
          { name: "Shopping credit", pts: "8,000", Icon: Zap },
          { name: "Merch pack", pts: "10,000", Icon: Package },
        ].map(({ name, pts, Icon }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08 }}
            className="rounded-xl bg-gray-900 p-3"
          >
            <div className="h-14 rounded-lg bg-gray-800 flex items-center justify-center mb-2">
              <Icon className="w-6 h-6 text-[#91FF02]" />
            </div>
            <p className="text-white text-[11px] font-medium">{name}</p>
            <p className="text-gray-500 text-[10px]">{pts} pts</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

function ScreenCampaign() {
  return (
    <>
      <motion.div
        className="rounded-2xl border border-[#91FF02]/50 bg-[#91FF02]/10 p-4 mb-4"
        animate={{ boxShadow: ["0 0 0px #91FF02", "0 0 24px #91FF0266", "0 0 0px #91FF02"] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex items-center gap-2 mb-1">
          <Sparkles className="w-4 h-4 text-[#91FF02]" />
          <p className="text-[#91FF02] text-xs font-bold">2X POINTS WEEKEND</p>
        </div>
        <p className="text-gray-300 text-[11px]">Bonus campaign switched on from the admin panel, no app release needed.</p>
      </motion.div>
      <p className="text-white text-xs font-semibold mb-2">Campaign rules</p>
      {["Double points on purchases", "Referral bonus +500", "Birthday reward"].map((rule, i) => (
        <div key={rule} className="flex items-center justify-between rounded-xl bg-gray-900 px-3 py-2.5 mb-2">
          <span className="text-gray-300 text-[11px]">{rule}</span>
          <motion.span
            className={`w-8 h-4 rounded-full p-0.5 flex ${i < 2 ? "bg-[#91FF02] justify-end" : "bg-gray-700 justify-start"}`}
            layout
          >
            <motion.span layout className="w-3 h-3 rounded-full bg-black" />
          </motion.span>
        </div>
      ))}
    </>
  )
}

function ScreenRedeemed() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 12 }}
        className="w-16 h-16 rounded-full bg-[#91FF02] flex items-center justify-center mb-4"
      >
        <Check className="w-8 h-8 text-black" strokeWidth={3} />
      </motion.div>
      <p className="text-white font-semibold mb-1">Reward redeemed!</p>
      <p className="text-gray-500 text-[11px] mb-4">Your e-voucher is ready to use</p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="w-full rounded-xl border border-dashed border-gray-700 p-3"
      >
        <p className="text-[10px] text-gray-500">Voucher code</p>
        <p className="text-[#91FF02] font-mono font-bold tracking-widest">LYL-7Q2K-91FF</p>
      </motion.div>
    </div>
  )
}

/* ---------------- Visual 2: redemption flow ---------------- */

function FlashSaleFlow({ step }: { step: number }) {
  // Which nodes light up for each story step
  const lit: Record<number, string[]> = {
    0: ["cms", "member"],
    1: ["eligibility", "lock"],
    2: ["cms", "member", "eligibility", "lock", "contract"],
    3: ["voucher", "physical"],
  }
  const on = (id: string) => lit[step]?.includes(id)

  return (
    <div className="w-full max-w-md">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-[#91FF02]" />
          <span className="text-white text-sm font-semibold">Flash Sale · Redemption flow</span>
        </div>
        <span className="text-[10px] px-2 py-1 rounded-full bg-red-500/15 text-red-400 font-mono">LIVE 00:14:59</span>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <FlowNode id="cms" on={on("cms")} Icon={FileJson} title="Admin CMS" sub="Configure sale & stock" />
        <FlowNode id="member" on={on("member")} Icon={UserRound} title="Member taps Redeem" sub="Drupal frontend" />
      </div>

      <FlowArrow on={step >= 1} />

      <FlowNode id="eligibility" on={on("eligibility")} Icon={ShieldCheck} title="Eligibility rules" sub="Rules configured per sale in the CMS" />

      <FlowArrow on={step >= 1} />

      <div className="relative">
        <FlowNode id="lock" on={on("lock")} Icon={Lock} title="One per member · duplicate-safe" sub="Retries and double taps are rejected" />
        <AnimatePresence>
          {step === 1 && <DuplicateRequestDemo />}
        </AnimatePresence>
      </div>

      <FlowArrow on={step >= 2} />

      <div className="grid grid-cols-2 gap-3">
        <FlowNode id="voucher" on={on("voucher")} Icon={Ticket} title="E-voucher" sub="Issued instantly" />
        <FlowNode id="physical" on={on("physical")} Icon={Truck} title="Physical reward" sub="Sent to fulfilment" />
      </div>

      <motion.div
        animate={{ opacity: on("contract") ? 1 : 0.35, borderColor: on("contract") ? "#91FF02" : "rgba(255,255,255,0.1)" }}
        className="mt-4 rounded-xl border border-dashed px-4 py-2.5 flex items-center gap-2"
      >
        <FileJson className="w-4 h-4 text-[#91FF02] flex-shrink-0" />
        <span className="text-[11px] text-gray-300">
          API contract I defined, used by the separate Drupal frontend team
        </span>
      </motion.div>
    </div>
  )
}

function FlowNode({
  on,
  Icon,
  title,
  sub,
}: {
  id: string
  on?: boolean
  Icon: typeof Zap
  title: string
  sub: string
}) {
  return (
    <motion.div
      animate={{
        borderColor: on ? "#91FF02" : "rgba(255,255,255,0.1)",
        backgroundColor: on ? "rgba(145,255,2,0.08)" : "rgba(255,255,255,0.02)",
        scale: on ? 1.02 : 1,
      }}
      transition={{ duration: 0.4 }}
      className="rounded-xl border px-4 py-3 flex items-center gap-3"
    >
      <div
        className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
          on ? "bg-[#91FF02] text-black" : "bg-gray-800 text-gray-400"
        }`}
      >
        <Icon className="w-4 h-4" />
      </div>
      <div className="min-w-0">
        <p className={`text-sm font-medium transition-colors ${on ? "text-white" : "text-gray-400"}`}>{title}</p>
        <p className="text-[11px] text-gray-500 truncate">{sub}</p>
      </div>
    </motion.div>
  )
}

function FlowArrow({ on }: { on: boolean }) {
  return (
    <div className="flex justify-center py-1.5">
      <div className="relative w-px h-6 bg-gray-800 overflow-hidden">
        {on && (
          <motion.span
            className="absolute left-0 w-px h-3 bg-[#91FF02]"
            animate={{ top: ["-12px", "24px"] }}
            transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
          />
        )}
      </div>
    </div>
  )
}

function DuplicateRequestDemo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      className="absolute -right-2 -top-3 flex flex-col gap-1"
    >
      <span className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-[#91FF02] text-black font-semibold">
        <Check className="w-3 h-3" /> req #1 OK
      </span>
      <motion.span
        animate={{ x: [0, -3, 3, -3, 0] }}
        transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 1.2 }}
        className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 font-semibold"
      >
        <Ban className="w-3 h-3" /> req #2 duplicate
      </motion.span>
    </motion.div>
  )
}
