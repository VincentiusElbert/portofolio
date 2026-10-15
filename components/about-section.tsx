"use client"

import { useEffect, useRef } from "react"
import { animate, motion, useInView, useScroll, useTransform, type MotionValue } from "framer-motion"
import Image from "next/image"

const floatingShots = [
  { src: "/images/pokemon-api.png", className: "left-0 top-10 w-72 h-44", speed: -80 },
  { src: "/images/movie-website.png", className: "left-12 top-64 w-60 h-36", speed: 60 },
  { src: "/images/journal-website.png", className: "right-0 top-6 w-64 h-40", speed: 90 },
  { src: "/images/ecommerce-website.png", className: "-right-4 top-60 w-72 h-44", speed: -60 },
  { src: "/images/home-market.png", className: "right-1/4 bottom-0 w-56 h-36", speed: 40 },
]

const stats = [
  { value: 3, suffix: "+", label: "Years in software" },
  { value: 2, suffix: "+", label: "Years professional dev" },
  { value: 1000, suffix: "+", label: "Active app users" },
  { value: 4, suffix: "", label: "Companies worked with" },
]

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Floating project screenshots (desktop) */}
          <div className="hidden lg:block">
            {floatingShots.map((shot, i) => (
              <FloatingShot key={shot.src} {...shot} index={i} progress={scrollYProgress} />
            ))}
          </div>

          <div className="text-center py-16 lg:py-32 relative z-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-[#91FF02] text-lg font-medium mb-8 tracking-wider"
            >
              ABOUT ME
            </motion.h2>

            <h3 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-12 leading-tight">
              {[
                <span key="1" className="text-white">FRONTEND-FOCUSED</span>,
                <span key="2" className="text-[#91FF02]">FULL-STACK</span>,
                <span key="3">
                  <span className="text-[#91FF02]">PRODUCT</span> <span className="text-white">BUILDER</span>
                </span>,
              ].map((line, i) => (
                <span key={i} className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-gray-400 text-base lg:text-lg max-w-3xl mx-auto leading-relaxed lg:bg-black/60 lg:backdrop-blur-sm lg:rounded-2xl lg:p-4"
            >
              I specialize in the React ecosystem (React, Next.js) with TypeScript and Tailwind CSS, backed by hands-on
              Laravel and SQL Server experience. At IRIS Worldwide I build loyalty products for FMCG brands end to end: a
              React Native mobile app, admin dashboards, and the APIs and campaign logic behind them. I'm comfortable
              owning a feature from requirements to API contract to UI.
            </motion.p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 relative z-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center hover:border-[#91FF02]/50 transition-colors"
            >
              <div className="text-3xl lg:text-5xl font-bold text-[#91FF02] mb-2">
                <Counter to={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Mobile project screenshots */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:hidden grid grid-cols-2 gap-4 mt-12"
        >
          {floatingShots.slice(0, 4).map((shot) => (
            <div key={shot.src} className="w-full h-28 sm:h-40 bg-gray-800 rounded-lg overflow-hidden">
              <Image src={shot.src} alt="Project screenshot" width={400} height={250} className="w-full h-full object-cover" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function FloatingShot({
  src,
  className,
  speed,
  index,
  progress,
}: {
  src: string
  className: string
  speed: number
  index: number
  progress: MotionValue<number>
}) {
  const y = useTransform(progress, [0, 1], [speed, -speed])

  return (
    <motion.div style={{ y }} className={`absolute z-10 ${className}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.55, scale: 1 }}
        whileHover={{ opacity: 1, scale: 1.05, rotate: index % 2 ? 2 : -2, zIndex: 30 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="w-full h-full bg-gray-800 rounded-lg overflow-hidden border border-white/10 shadow-2xl"
      >
        <Image src={src} alt="Project screenshot" width={320} height={200} className="w-full h-full object-cover" />
      </motion.div>
    </motion.div>
  )
}

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView || !ref.current) return
    const node = ref.current
    const controls = animate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => {
        node.textContent = Math.round(v).toLocaleString("en-US")
      },
    })
    return () => controls.stop()
  }, [inView, to])

  return <span ref={ref}>0</span>
}
