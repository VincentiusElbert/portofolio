"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32">
        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between min-h-[80vh]">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl pr-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-0.5 bg-white"></div>
                <span className="text-gray-300 text-sm">Hi, I am Vincentius Elbert Frontend Developer</span>
              </div>

              <h1 className="text-6xl xl:text-7xl font-bold mb-8 leading-tight">
                BUILDING FAST & <br />
                <span className="text-[#91FF02]">INTERACTIVE</span> WEB <br />
                EXPERIENCES.
              </h1>

              <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
                Bridging creativity and functionality to deliver stunning, user-friendly web applications
              </p>

              <Button className="bg-[#91FF02] text-black hover:bg-[#91FF02]/90 px-10 py-6 text-lg font-semibold rounded-full transition-all duration-300">
                HIRE ME
              </Button>
            </motion.div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center items-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-[500px] h-[600px]">
                <Image
                  src="/images/profile-green-overlay.png"
                  alt="Vincentius Elbert"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col items-center text-center space-y-8 min-h-[80vh] justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <h2 className="text-[#91FF02] text-xl font-semibold mb-2">Vincentius Elbert</h2>

            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              BUILDING FAST & <br />
              <span className="text-[#91FF02]">INTERACTIVE</span> WEB <br />
              EXPERIENCES.
            </h1>

            <p className="text-gray-400 text-base mb-8 max-w-sm mx-auto leading-relaxed">
              Bridging creativity and functionality to deliver stunning, user-friendly web applications
            </p>

            <Button className="bg-[#91FF02] text-black hover:bg-[#91FF02]/90 px-8 py-4 text-base font-semibold rounded-full w-full max-w-xs">
              HIRE ME
            </Button>
          </motion.div>

          {/* Mobile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-8"
          >
            <div className="relative w-80 h-96 mx-auto">
              <Image
                src="/images/profile-green-overlay.png"
                alt="Vincentius Elbert"
                fill
                className="object-cover object-center rounded-lg"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Left Decorative Squares */}
      <div className="absolute bottom-8 left-8 hidden lg:block">
        <div className="grid grid-cols-3 gap-2">
          <div className="w-4 h-4 bg-[#91FF02]"></div>
          <div className="w-4 h-4 bg-[#91FF02]"></div>
          <div className="w-4 h-4 bg-transparent border border-[#91FF02]"></div>
          <div className="w-4 h-4 bg-[#91FF02]"></div>
          <div className="w-4 h-4 bg-transparent border border-[#91FF02]"></div>
          <div className="w-4 h-4 bg-[#91FF02]"></div>
        </div>
      </div>

      {/* Top Right Decorative Squares */}
      <div className="absolute top-24 right-8 hidden lg:block">
        <div className="grid grid-cols-2 gap-2">
          <div className="w-6 h-6 bg-[#91FF02]"></div>
          <div className="w-6 h-6 bg-transparent"></div>
          <div className="w-6 h-6 bg-transparent"></div>
          <div className="w-6 h-6 bg-[#91FF02]"></div>
        </div>
      </div>

      {/* Mobile Decorative Elements */}
      <div className="absolute bottom-4 left-4 lg:hidden">
        <div className="grid grid-cols-2 gap-1">
          <div className="w-3 h-3 bg-[#91FF02]"></div>
          <div className="w-3 h-3 bg-transparent border border-[#91FF02]"></div>
          <div className="w-3 h-3 bg-transparent border border-[#91FF02]"></div>
          <div className="w-3 h-3 bg-[#91FF02]"></div>
        </div>
      </div>
    </section>
  )
}
