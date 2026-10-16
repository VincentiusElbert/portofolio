"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import Image from "next/image"
import { Download, Instagram, Linkedin, Mail } from "lucide-react"

export function ContactSection() {
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
          <h3 className="text-white text-4xl md:text-5xl font-bold">LET'S GET IN TOUCH</h3>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Open to remote roles with international teams. Reach out and I'll get back to you soon.
          </p>
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
                <h3 className="text-white text-xl font-semibold mb-1">Vincentius Elbert Lambertus</h3>
                <p className="text-gray-400 text-sm mb-2">Frontend / Full-Stack Developer · Jakarta, Indonesia</p>
                <div className="flex items-center justify-center space-x-2 mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#91FF02] opacity-75 animate-ping"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#91FF02]"></span>
                  </span>
                  <span className="text-gray-300 text-sm">Available for remote work</span>
                </div>

                <div className="flex justify-center space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Email"
                    className="rounded-full border-gray-600 hover:border-[#91FF02] bg-transparent"
                    onClick={() => (window.location.href = "mailto:vincentiuselbert@gmail.com")}
                  >
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-gray-600 hover:border-[#91FF02] bg-transparent"
                    aria-label="WhatsApp"
                    onClick={() => window.open("https://wa.me/6285311900833", "_blank")}
                  >
                    <Image src="/icons/whatsapp.png" alt="WhatsApp" width={16} height={16} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-gray-600 hover:border-[#91FF02] bg-transparent"
                    aria-label="Instagram"
                    onClick={() => window.open("https://www.instagram.com/v.elbert/", "_blank")}
                  >
                    <Instagram className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-gray-600 hover:border-[#91FF02] bg-transparent"
                    aria-label="LinkedIn"
                    onClick={() => window.open("https://www.linkedin.com/in/vincentius-elbert-lambertus", "_blank")}
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
                <div className="mt-6">
                  <a
                    href="/Vincentius_Elbert_CV.pdf"
                    download
                    className="inline-flex items-center gap-2 text-sm text-[#91FF02] hover:underline"
                  >
                    <Download className="h-4 w-4" /> Download CV (PDF)
                  </a>
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
            <ContactForm />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
