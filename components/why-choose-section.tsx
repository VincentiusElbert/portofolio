"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function WhyChooseSection() {
  const comparisons = [
    { client: "Only Knows One Side of the Stack", solution: "Full-Stack Delivery, API to UI" },
    { client: "Waits for Fully Specified Tasks", solution: "Turns Business Requests into Specs" },
    { client: "Little to No TypeScript Knowledge", solution: "TypeScript Across Web & Mobile" },
    { client: "Inconsistent Design Translation", solution: "Pixel-Precise Builds from Figma" },
    { client: "Web Only", solution: "Web, Mobile & Admin Dashboards" },
    { client: "No Production Experience", solution: "Live Products with Thousands of Users" },
  ]

  return (
    <section id="why-choose" className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Decorative squares */}
      <div className="absolute top-20 right-10 w-6 h-6 bg-[#91FF02] opacity-30"></div>
      <div className="absolute bottom-10 left-20 w-10 h-10 bg-[#91FF02] opacity-15"></div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-[#91FF02] text-sm font-medium mb-2 tracking-wider">WORKING</h3>
          <h2 className="text-white text-4xl font-bold mb-4">WHY CHOOSE ME?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Compare the difference between working with me versus other talents in the industry
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12">
          {/* Working with Me */}
          <motion.div
            className="rounded-2xl border border-[#91FF02]/40 bg-[#91FF02]/[0.04] p-8 shadow-[0_0_80px_-30px_#91FF02]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-8">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src="/images/vincentius-red-bg.jpeg"
                  alt="Vincentius Elbert"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white text-xl font-medium">WORKING WITH ME</h3>
            </div>

            <div className="space-y-6">
              {comparisons.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center"
                >
                  <Image src="/icons/star-solid.svg" alt="Star" width={16} height={16} className="mr-4 flex-shrink-0" />
                  <span className="text-white text-center">{item.solution}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Another Talent */}
          <motion.div
            className="rounded-2xl border border-white/10 p-8 opacity-80"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-8">
              <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center mr-4">
                <Image src="/icons/profile.svg" alt="Profile" width={24} height={24} className="text-white" />
              </div>
              <h3 className="text-white text-xl font-medium">ANOTHER TALENT</h3>
            </div>

            <div className="space-y-6">
              {comparisons.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center"
                >
                  <Image src="/icons/star-blur.svg" alt="Star" width={16} height={16} className="mr-4 flex-shrink-0" />
                  <span className="text-gray-400 text-center">{item.client}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#91FF02] text-black px-8 py-3 rounded-full font-medium hover:bg-[#7de002] transition-colors shadow-[0_0_40px_-10px_#91FF02]"
          >
            HIRE ME
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
