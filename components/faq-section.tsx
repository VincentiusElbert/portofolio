"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import Image from "next/image"

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in React.js, Next.js, Vue.js, Tailwind CSS, and TypeScript, ensuring high-performance, scalable, and maintainable web applications.",
  },
  {
    question: "Do you work on both frontend and backend?",
    answer:
      "I focus primarily on frontend development, translating UI/UX designs into responsive and interactive web experiences. However, I collaborate closely with designers to ensure a seamless user experience.",
  },
  {
    question: "Can you optimize existing websites?",
    answer:
      "Yes! I can analyze, debug, and optimize websites to improve speed, accessibility, and SEO, using best practices like lazy loading, code splitting, and performance monitoring.",
  },
  {
    question: "Are you available for freelance work?",
    answer:
      "Yes! I am open to freelance, contract, and full-time opportunities, depending on the project scope and requirements. Feel free to reach out!",
  },
  {
    question: "What's your development process?",
    answer:
      "I start by understanding the project goals and requirements, followed by wireframing or UI implementation, then development, testing, and deployment—ensuring a smooth and efficient workflow.",
  },
  {
    question: "How can I get in touch with you?",
    answer:
      "You can contact me via email, LinkedIn, or GitHub. I usually begin with a consultation to discuss your needs, then propose a plan to bring your vision to life. Let's create something awesome together!",
  },
]

export function FaqSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section id="faq" className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Decorative squares */}
      <div className="absolute top-10 right-10 w-8 h-8 bg-[#91FF02] opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-12 h-12 bg-[#91FF02] opacity-10"></div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-[#91FF02] text-lg font-medium mb-2 tracking-wider">FAQ</h3>
          <h2 className="text-white text-4xl font-bold mb-4">FREQUENTLY ASKED QUESTIONS</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-b border-gray-800 pb-6"
            >
              <div className="flex items-start space-x-4">
                <Image src="/icons/faq-star.svg" alt="FAQ Star" width={24} height={24} className="mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <button
                    onClick={() => toggleItem(index)}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <h3 className="text-white font-medium mb-3 pr-4">{faq.question}</h3>
                    {openItems.includes(index) ? (
                      <Minus className="h-5 w-5 text-[#91FF02] flex-shrink-0" />
                    ) : (
                      <Plus className="h-5 w-5 text-[#91FF02] flex-shrink-0" />
                    )}
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: openItems.includes(index) ? "auto" : 0,
                      opacity: openItems.includes(index) ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-400 leading-relaxed pb-3">{faq.answer}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
