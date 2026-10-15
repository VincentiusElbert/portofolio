"use client"

import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Vincentius Elbert. All rights reserved.</p>
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#91FF02] transition-colors"
        >
          Back to top <ArrowUp className="w-4 h-4" />
        </motion.button>
      </div>
    </footer>
  )
}
