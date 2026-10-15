"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Code2, Database, Palette, Smartphone, Wrench, type LucideIcon } from "lucide-react"

const techIcons = [
  { name: "React", icon: "/icons/react.png" },
  { name: "TypeScript", icon: "/icons/typescript.png" },
  { name: "JavaScript", icon: "/icons/javascript.png" },
  { name: "Tailwind CSS", icon: "/icons/tailwind.png" },
  { name: "Framer Motion", icon: "/icons/framer-motion.svg" },
  { name: "Radix UI", icon: "/icons/radix.png" },
  { name: "HTML5", icon: "/icons/html.png" },
  { name: "CSS3", icon: "/icons/css.png" },
]

const textTech = ["Next.js", "Vue.js", "Inertia.js", "Expo", "React Native", "Laravel", "PHP", "ASP.NET", "SQL Server", "Shadcn/UI", "Figma", "Vercel", "Git"]

const skillGroups: { title: string; icon: LucideIcon; items: string[] }[] = [
  { title: "Frontend Core", icon: Code2, items: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Vue.js", "Inertia.js"] },
  { title: "Styling & UI", icon: Palette, items: ["Tailwind CSS", "Shadcn/UI", "Radix UI", "Framer Motion", "Responsive Design"] },
  { title: "Mobile", icon: Smartphone, items: ["Expo (React Native)", "Cross-platform Development"] },
  {
    title: "Backend & Database",
    icon: Database,
    items: ["PHP / Laravel", "REST API Design", "ASP.NET", "SQL Server (T-SQL)", "Role-Based Access Control"],
  },
  { title: "Tools & Workflow", icon: Wrench, items: ["Git", "Figma", "VS Code", "Vercel", "npm / yarn", "Agile / Scrum"] },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[#91FF02] text-lg font-semibold mb-4"
        >
          SKILLS
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-white text-3xl md:text-5xl font-bold mb-12"
        >
          SKILLS THAT BRING IDEAS TO LIFE
        </motion.h3>
      </div>

      {/* Marquee rows */}
      <div className="marquee-group relative mb-16 space-y-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-4">
          {[...techIcons, ...techIcons].map((tech, i) => (
            <div
              key={i}
              data-cursor="hover"
              className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 hover:border-[#91FF02] transition-colors"
            >
              <Image src={tech.icon} alt="" width={28} height={28} className="w-7 h-7 object-contain" />
              <span className="text-white whitespace-nowrap">{tech.name}</span>
            </div>
          ))}
        </div>
        <div className="flex w-max animate-marquee-reverse gap-4">
          {[...textTech, ...textTech].map((name, i) => (
            <span
              key={i}
              className="rounded-full border border-white/10 px-5 py-3 text-gray-400 whitespace-nowrap hover:text-[#91FF02] hover:border-[#91FF02] transition-colors"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* Skill groups */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, i) => {
          const Icon = group.icon
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className={`rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-[#91FF02]/50 transition-colors ${
                i === skillGroups.length - 1 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-[#91FF02]/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#91FF02]" />
                </div>
                <h4 className="text-white font-semibold text-lg">{group.title}</h4>
              </div>
              <motion.div
                className="flex flex-wrap gap-2"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{ show: { transition: { staggerChildren: 0.05, delayChildren: 0.2 + i * 0.1 } } }}
              >
                {group.items.map((item) => (
                  <motion.span
                    key={item}
                    variants={{ hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } }}
                    className="px-3 py-1.5 text-sm rounded-full bg-white/5 text-gray-300"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
