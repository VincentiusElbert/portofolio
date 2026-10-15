"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import Image from "next/image"

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "My core is the React ecosystem: React, Next.js and TypeScript with Tailwind CSS, Shadcn/UI and Framer Motion. I also work with Vue.js and Inertia.js, build mobile apps with Expo (React Native), and write backends in PHP/Laravel with SQL Server.",
  },
  {
    question: "Do you work on both frontend and backend?",
    answer:
      "Yes. I'm frontend-focused but ship features end to end: database queries, Laravel REST APIs with role-based access control, and the UI on top. I also write API contracts that other teams build against.",
  },
  {
    question: "Can you build mobile apps too?",
    answer:
      "Yes. I architected and built a loyalty mobile app with Expo (React Native), React, TypeScript and Tailwind CSS that serves thousands of active users.",
  },
  {
    question: "Are you open to remote work?",
    answer:
      "Yes! I'm based in Jakarta and actively looking for remote opportunities with international teams. I'm comfortable with async, written communication and Agile workflows.",
  },
  {
    question: "What's your development process?",
    answer:
      "I start by turning the business request into a clear technical spec and API contract, then build from the design prototype, test, and deploy, working in Agile sprints with PMs, designers and partner teams.",
  },
  {
    question: "How can I get in touch with you?",
    answer:
      "Use the contact form below, email vincentiuselbert@gmail.com, or reach me on LinkedIn or WhatsApp. You can also download my CV from the top of the page.",
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
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">FREQUENTLY ASKED QUESTIONS</h2>
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
