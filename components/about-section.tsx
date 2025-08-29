"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden lg:block relative">
          {/* Left portfolio images */}
          <div className="absolute left-0 top-16 z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="w-80 h-48 bg-gray-800 rounded-lg overflow-hidden">
                <Image
                  src="/modern-architecture-website-design.png"
                  alt="Portfolio project"
                  width={320}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-64 h-40 bg-gray-800 rounded-lg overflow-hidden ml-8">
                <Image
                  src="/creative-agency-portfolio.png"
                  alt="Portfolio project"
                  width={256}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Right portfolio images */}
          <div className="absolute right-0 top-16 z-10">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="w-72 h-44 bg-gray-800 rounded-lg overflow-hidden">
                <Image
                  src="/digital-agency-website.png"
                  alt="Portfolio project"
                  width={288}
                  height={176}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-80 h-48 bg-gray-800 rounded-lg overflow-hidden -mr-8">
                <Image
                  src="/modern-web-application.png"
                  alt="Portfolio project"
                  width={320}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Bottom scattered image */}
          <div className="absolute bottom-8 right-1/4 z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-56 h-36 bg-gray-800 rounded-lg overflow-hidden">
                <Image
                  src="/creative-portfolio-design.png"
                  alt="Portfolio project"
                  width={224}
                  height={144}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Center content with proper z-index */}
          <div className="text-center py-32 relative z-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-[#91FF02] text-lg font-medium mb-8 tracking-wider"
            >
              ABOUT ME
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-7xl font-bold mb-12 leading-tight"
            >
              <div className="text-white">CRAFTING SEAMLESS</div>
              <div className="text-[#91FF02]">HIGH-PERFORMANCE</div>
              <div>
                <span className="text-[#91FF02]">WEB</span> <span className="text-white">EXPERIENCES</span>
              </div>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed"
            >
              I love turning designs into interactive, high-performance websites. With a keen eye for detail and a deep
              understanding of frontend technologies, I create smooth and visually appealing user experiences.
            </motion.p>
          </div>

          {/* Decorative square */}
          <div className="absolute bottom-8 left-8">
            <div className="w-8 h-8 bg-[#91FF02]"></div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="text-center py-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-[#91FF02] text-lg font-medium mb-8 tracking-wider"
            >
              ABOUT ME
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-8 leading-tight"
            >
              <div className="text-white">CRAFTING SEAMLESS</div>
              <div className="text-[#91FF02]">HIGH-PERFORMANCE</div>
              <div>
                <span className="text-[#91FF02]">WEB</span> <span className="text-white">EXPERIENCES</span>
              </div>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-400 text-base leading-relaxed px-4"
            >
              I love turning designs into interactive, high-performance websites. With a keen eye for detail and a deep
              understanding of frontend technologies, I create smooth and visually appealing user experiences.
            </motion.p>
          </div>

          {/* Mobile portfolio images */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 px-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="w-full h-32 bg-gray-800 rounded-lg overflow-hidden">
                <Image
                  src="/modern-architecture-website-design.png"
                  alt="Portfolio project"
                  width={200}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-32 bg-gray-800 rounded-lg overflow-hidden">
                <Image
                  src="/digital-agency-website.png"
                  alt="Portfolio project"
                  width={200}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full h-40 bg-gray-800 rounded-lg overflow-hidden">
              <Image
                src="/creative-portfolio-design.png"
                alt="Portfolio project"
                width={400}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Mobile decorative squares */}
          <div className="flex justify-center mt-8 space-x-2">
            <div className="w-4 h-4 bg-[#91FF02]"></div>
            <div className="w-4 h-4 bg-[#91FF02]"></div>
            <div className="w-4 h-4 bg-[#91FF02]"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
