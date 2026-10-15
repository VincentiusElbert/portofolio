"use client"

import type React from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { LayoutDashboard, Monitor, Smartphone, type LucideIcon } from "lucide-react"

const services: { number: string; title: string; description: string; tags: string[]; icon: LucideIcon }[] = [
  {
    number: "01",
    title: "Web App Development",
    description:
      "Fast, responsive and accessible web applications built with React and Next.js, from design prototype to production.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    icon: Monitor,
  },
  {
    number: "02",
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps with Expo (React Native), like the loyalty app I built that serves thousands of active users.",
    tags: ["Expo", "React Native", "TypeScript"],
    icon: Smartphone,
  },
  {
    number: "03",
    title: "Admin Dashboards & APIs",
    description:
      "Admin CMS, analytics dashboards and the REST APIs behind them, with role-based access control and clear API contracts.",
    tags: ["Laravel", "REST API", "SQL Server", "Vue.js"],
    icon: LayoutDashboard,
  },
]

export function ServiceExpertiseSection() {
  return (
    <section id="services" className="py-20 px-4 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#91FF02] text-lg font-medium tracking-wider">SERVICE</h2>
            <h3 className="text-white text-3xl lg:text-4xl font-bold mt-4 leading-tight">
              MY SERVICE
              <br />
              EXPERTISE
            </h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-base lg:text-lg leading-relaxed lg:max-w-xl lg:text-right"
          >
            Owning features end to end, from requirements to API contract to UI, across web, mobile and the admin tools
            that run them.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.number} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index }: { service: (typeof services)[number]; index: number }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const spotlight = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, rgba(145,255,2,0.12), transparent 80%)`
  const Icon = service.icon

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      whileHover="hover"
      onMouseMove={handleMouseMove}
      data-cursor="hover"
      className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 overflow-hidden"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: spotlight }}
      />

      <div className="relative">
        <div className="flex items-start justify-between mb-8">
          <span className="text-6xl font-light text-gray-700 group-hover:text-[#91FF02] transition-colors duration-500">
            {service.number}
          </span>
          <motion.div
            variants={{ hover: { rotate: -10, scale: 1.1 } }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-12 h-12 rounded-xl bg-[#91FF02]/10 border border-[#91FF02]/30 flex items-center justify-center"
          >
            <Icon className="w-6 h-6 text-[#91FF02]" />
          </motion.div>
        </div>

        <div className="relative h-px bg-gray-800 mb-6 overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-[#91FF02]"
            initial={{ width: "0%" }}
            variants={{ hover: { width: "100%" } }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <h4 className="text-white text-xl font-semibold mb-3">{service.title}</h4>
        <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>

        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-xs rounded-full border border-white/10 text-gray-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
