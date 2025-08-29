"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function SkillsSection() {
  const skills = [
    { name: "React JS", level: 90 },
    { name: "HTML", level: 95 },
    { name: "Tailwind CSS", level: 88 },
    { name: "JavaScript", level: 85 },
    { name: "Framer Motion", level: 75 },
    { name: "TypeScript", level: 80 },
  ]

  const techIcons = [
    { name: "JavaScript", icon: "/icons/javascript.png" },
    { name: "CSS3", icon: "/icons/css.png" },
    { name: "HTML5", icon: "/icons/html.png" },
    { name: "React", icon: "/icons/react.png" },
    { name: "Radix UI", icon: "/icons/radix.png" },
    { name: "TypeScript", icon: "/icons/typescript.png" },
    { name: "Framer Motion", icon: "/icons/framer-motion.svg" },
    { name: "Tailwind", icon: "/icons/tailwind.png" },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="absolute bottom-10 right-8">
        <div className="grid grid-cols-3 gap-2">
          <div className="w-4 h-4 bg-[#91FF02]"></div>
          <div className="w-4 h-4 bg-transparent"></div>
          <div className="w-4 h-4 bg-[#91FF02]"></div>
          <div className="w-4 h-4 bg-transparent"></div>
          <div className="w-4 h-4 bg-[#91FF02]"></div>
          <div className="w-4 h-4 bg-transparent"></div>
        </div>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[#91FF02] text-lg font-semibold mb-4"
      >
        SKILLS
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-white text-4xl md:text-5xl font-bold mb-16"
      >
        SKILLS THAT BRING IDEAS TO LIFE
      </motion.h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Tech Icons */}
        <div>
          <div className="grid grid-cols-4 gap-6 mb-8">
            {techIcons.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center border-2 border-gray-700 hover:border-[#91FF02] transition-colors"
              >
                <Image
                  src={tech.icon || "/placeholder.svg"}
                  alt={tech.name}
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skill Bars */}
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-white text-sm">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  className="bg-[#91FF02] h-3 rounded-full"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
