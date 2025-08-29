"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function WhyChooseSection() {
  const comparisons = [
    {
      client: "Basic React Knowledge",
      solution: "React Expert",
    },
    {
      client: "Inconsistent Design Translation",
      solution: "Precise Website Implementation",
    },
    {
      client: "Little to No TypeScript Knowledge",
      solution: "TypeScript Proficiency",
    },
    {
      client: "Unstructured Code",
      solution: "Clean, Maintainable Code",
    },
    {
      client: "Inconsistent Responsiveness",
      solution: "Responsive Website Development",
    },
    {
      client: "No Design Skills",
      solution: "UI Design Proficiency (Figma)",
    },
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

        <div className="grid md:grid-cols-2 gap-12">
          {/* Working with Me */}
          <motion.div
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
          <button className="bg-[#91FF02] text-black px-8 py-3 rounded-full font-medium hover:bg-[#7de002] transition-colors">
            HIRE ME
          </button>
        </motion.div>
      </div>
    </section>
  )
}
