"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    company: "Upwork",
    role: "Project Manager",
    logo: "upwork",
    rating: 5,
  },
  {
    company: "Microsoft",
    role: "Head of Product",
    logo: "microsoft",
    rating: 5,
  },
  {
    company: "Zapier",
    role: "Engineering Manager",
    logo: "zapier",
    rating: 5,
  },
  {
    company: "Zoom",
    role: "Lead Developer",
    logo: "zoom",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-center text-green-accent text-lg font-semibold mb-16">TESTIMONIALS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 text-black"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-gray-600 text-sm mb-1">{testimonial.role}</h3>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-orange-400 text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-2xl font-bold text-green-500">
                  {testimonial.company === "Upwork" && "upwork"}
                  {testimonial.company === "Microsoft" && "⊞"}
                  {testimonial.company === "Zapier" && "zapier"}
                  {testimonial.company === "Zoom" && "zoom"}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="rounded-full border-gray-600 text-gray-400 hover:text-white hover:border-green-accent bg-transparent"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="rounded-full border-gray-600 text-gray-400 hover:text-white hover:border-green-accent bg-transparent"
          >
            <ChevronRight className="h-4 w-4 text-green-accent" />
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
