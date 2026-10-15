"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion"
import Image from "next/image"
import { ArrowDown, Download } from "lucide-react"

const headline = [
  { text: "BUILDING", accent: false },
  { text: "FAST", accent: false },
  { text: "&", accent: false },
  { text: "INTERACTIVE", accent: true },
  { text: "WEB", accent: false },
  { text: "EXPERIENCES.", accent: false },
]

const roles = ["Frontend Developer", "Full-Stack Developer", "React Native Developer"]

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  // Mouse position normalised to -0.5..0.5, used for tilt + parallax
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 })
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 })
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-8, 8])

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] })
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const glowLeft = useTransform(smoothX, [-0.5, 0.5], ["10%", "60%"])
  const glowTop = useTransform(smoothY, [-0.5, 0.5], ["0%", "40%"])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const resetMouse = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetMouse}
      className="min-h-screen bg-black text-white relative overflow-hidden"
    >
      {/* Soft green glow following the cursor */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -z-0 h-[600px] w-[600px] rounded-full bg-[#91FF02]/10 blur-[120px]"
        style={{ left: glowLeft, top: glowTop }}
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[80vh]">
          {/* Text */}
          <motion.div style={{ y: textY, opacity: fade }} className="flex-1 max-w-2xl text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <motion.span
                className="hidden sm:block h-0.5 bg-white"
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <span className="text-gray-300 text-sm">
                Hi, I am <span className="text-white font-medium">Vincentius Elbert</span>,{" "}
                <RotatingRole />
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl xl:text-7xl font-bold mb-8 leading-tight">
              {headline.map((word, i) => (
                <span key={word.text} className="inline-block overflow-hidden align-bottom mr-[0.25em]">
                  <motion.span
                    className={`inline-block ${word.accent ? "text-[#91FF02]" : ""}`}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {word.text}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-gray-400 text-base sm:text-lg mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Frontend-focused full-stack developer specializing in React, Next.js and TypeScript, shipping web apps,
              mobile apps and the APIs behind them.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.05 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <MagneticButton
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-[#91FF02] text-black px-10 py-4 text-lg font-semibold rounded-full w-full max-w-xs sm:w-auto"
              >
                HIRE ME
              </MagneticButton>
              <a
                href="/Vincentius_Elbert_CV.pdf"
                download
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white hover:border-[#91FF02] hover:text-[#91FF02] transition-colors w-full max-w-xs sm:w-auto"
              >
                <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div
            style={{ y: imageY }}
            className="flex-1 flex justify-center items-center relative [perspective:1000px]"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, clipPath: "inset(100% 0 0 0)" }}
              animate={{ opacity: 1, scale: 1, clipPath: "inset(0% 0 0 0)" }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative"
            >
              {/* Mask fades the photo's dark left/bottom edges into the background glow */}
              <div
                className="relative w-72 h-[22rem] sm:w-96 sm:h-[30rem] xl:w-[500px] xl:h-[600px]"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, black 65%, transparent 95%), linear-gradient(to right, transparent, black 25%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 65%, transparent 95%), linear-gradient(to right, transparent, black 25%)",
                  maskComposite: "intersect",
                  WebkitMaskComposite: "source-in",
                }}
              >
                <Image
                  src="/images/profile-green-overlay.png"
                  alt="Vincentius Elbert"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating decorative squares with mouse parallax */}
      <FloatingSquares x={smoothX} y={smoothY} />

      {/* Scroll indicator */}
      <motion.button
        onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
        style={{ opacity: fade }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-gray-500 hover:text-[#91FF02] transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-[0.3em]">SCROLL</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.button>
    </section>
  )
}

function RotatingRole() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="relative inline-flex overflow-hidden align-bottom text-[#91FF02]">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

function MagneticButton({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}) {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useSpring(0, { stiffness: 200, damping: 15 })
  const y = useSpring(0, { stiffness: 200, damping: 15 })

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left - rect.width / 2) * 0.35)
    y.set((e.clientY - rect.top - rect.height / 2) * 0.35)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x, y }}
      whileTap={{ scale: 0.95 }}
      className={`relative overflow-hidden shadow-[0_0_40px_-10px_#91FF02] hover:shadow-[0_0_60px_-5px_#91FF02] transition-shadow ${className}`}
    >
      {children}
    </motion.button>
  )
}

function FloatingSquares({ x, y }: { x: MotionValue<number>; y: MotionValue<number> }) {
  const nearX = useTransform(x, [-0.5, 0.5], [-30, 30])
  const nearY = useTransform(y, [-0.5, 0.5], [-30, 30])
  const farX = useTransform(x, [-0.5, 0.5], [15, -15])
  const farY = useTransform(y, [-0.5, 0.5], [15, -15])

  const bottomLeft = [true, true, false, true, false, true]
  const topRight = [true, false, false, true]

  return (
    <>
      <motion.div style={{ x: nearX, y: nearY }} className="absolute bottom-16 left-8 hidden lg:block">
        <div className="grid grid-cols-3 gap-2">
          {bottomLeft.map((filled, i) => (
            <motion.div
              key={i}
              className={`w-4 h-4 ${filled ? "bg-[#91FF02]" : "border border-[#91FF02]"}`}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div style={{ x: farX, y: farY }} className="absolute top-24 right-8 hidden lg:block">
        <motion.div
          className="grid grid-cols-2 gap-2"
          animate={{ rotate: [0, 90, 90, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          {topRight.map((filled, i) => (
            <div key={i} className={`w-6 h-6 ${filled ? "bg-[#91FF02]" : "bg-transparent"}`} />
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute bottom-4 left-4 lg:hidden">
        <div className="grid grid-cols-2 gap-1">
          {topRight.map((filled, i) => (
            <div key={i} className={`w-3 h-3 ${filled ? "bg-[#91FF02]" : "border border-[#91FF02]"}`} />
          ))}
        </div>
      </div>
    </>
  )
}
