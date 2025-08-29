"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { Instagram, Linkedin } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    const mailtoLink = `mailto:vincentiuselbert@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(emailBody)}`
    window.location.href = mailtoLink

    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="absolute inset-0 z-0">
        <Image src="/images/contact-background.png" alt="" fill className="object-cover opacity-20" />
      </div>

      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
        <Image src="/icons/decorative-squares.svg" alt="" width={94} height={92} className="opacity-80" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-20"
      >
        <div className="text-center mb-16">
          <h2 className="text-[#91FF02] text-lg font-semibold mb-4">CONTACT</h2>
          <h1 className="text-white text-4xl md:text-5xl font-bold">LET'S GET IN TOUCH</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Profile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <Image
                src="/images/vincentius-bw.png"
                alt="Vincentius Elbert"
                width={400}
                height={500}
                className="w-full h-auto rounded-lg"
              />

              <div className="mt-6 text-center">
                <h3 className="text-white text-xl font-semibold mb-2">Vincentius Elbert</h3>
                <div className="flex items-center justify-center space-x-2 mb-6">
                  <div className="w-2 h-2 bg-[#91FF02] rounded-full"></div>
                  <span className="text-gray-300 text-sm">Available for Work</span>
                </div>

                <div className="flex justify-center space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-gray-600 hover:border-[#91FF02] bg-transparent"
                    onClick={() => window.open("https://wa.me/6285311900833", "_blank")}
                  >
                    <Image src="/icons/whatsapp.png" alt="WhatsApp" width={16} height={16} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-gray-600 hover:border-[#91FF02] bg-transparent"
                    onClick={() => window.open("https://www.instagram.com/v.elbert/", "_blank")}
                  >
                    <Instagram className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-gray-600 hover:border-[#91FF02] bg-transparent"
                    onClick={() => window.open("https://www.linkedin.com/in/vincentius-elbert-lambertus", "_blank")}
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="bg-black border-gray-800 text-white placeholder:text-gray-500 h-14 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Email</label>
                  <Input
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    type="email"
                    className="bg-black border-gray-800 text-white placeholder:text-gray-500 h-14 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows={6}
                    className="bg-black border-gray-800 text-white placeholder:text-gray-500 rounded-lg resize-none"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#91FF02] text-black hover:bg-[#91FF02]/90 h-14 text-lg font-semibold rounded-lg"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
