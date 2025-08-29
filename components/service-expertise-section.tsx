"use client"

import { motion } from "framer-motion"

export function ServiceExpertiseSection() {
  const services = [
    {
      number: "01",
      title: "Custom Website Development",
      description: "Building responsive, fast, and scalable websites tailored to your needs.",
      icon: "/icons/monitor.svg",
    },
    {
      number: "02",
      title: "Web Performance Optimization",
      description: "Enhancing website speed, SEO, and overall performance for better",
      icon: "/icons/monitor.svg",
    },
    {
      number: "03",
      title: "Website Maintenance & Debugging",
      description: "Fixing bugs, improving UI, and ensuring smooth performance over time.",
      icon: "/icons/monitor.svg",
    },
  ]

  return (
    <section id="services" className="py-20 px-4 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="flex justify-between items-start mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-1/3"
            >
              <h2 className="text-[#91FF02] text-lg font-medium tracking-wider">SERVICE</h2>
              <h3 className="text-white text-4xl font-bold mt-4 leading-tight">
                MY SERVICE
                <br />
                EXPERTISE
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="w-2/3 text-right"
            >
              <p className="text-gray-400 text-lg leading-relaxed">
                Creating modern, intuitive, and visually consistent web experiences that align with industry trends and
                user expectations.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-3 gap-16">
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-left"
              >
                <div className="mb-8">
                  <span className="text-6xl font-light text-gray-600">{service.number}</span>
                  <div className="w-full h-px bg-gray-800 my-6"></div>
                </div>

                <div className="mb-6">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#91FF02]">
                      <rect x="2" y="4" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M8 20h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M12 16v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed text-base">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-[#91FF02] text-lg font-medium tracking-wider mb-6">SERVICE</h2>
            <h3 className="text-white text-3xl font-bold mb-6 leading-tight">
              MY SERVICE
              <br />
              EXPERTISE
            </h3>
            <p className="text-gray-400 text-base leading-relaxed">
              Creating modern, intuitive, and visually consistent web experiences that align with industry trends and
              user expectations.
            </p>
          </motion.div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="border-b border-gray-800 pb-8"
              >
                <div className="mb-4">
                  <span className="text-4xl font-light text-gray-600">{service.number}</span>
                </div>

                <div className="mb-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#91FF02]">
                      <rect x="2" y="4" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M8 20h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M12 16v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                <h4 className="text-white text-xl font-semibold mb-3">{service.title}</h4>
                <p className="text-gray-400 leading-relaxed text-base">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
