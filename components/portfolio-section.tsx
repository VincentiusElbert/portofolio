"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight, Code2, X } from "lucide-react"

type Project = {
  title: string
  category: string
  description: string
  image: string
  tags: string[]
  link?: string
  repo?: string
}

const projects: Project[] = [
  {
    title: "Leadboard",
    category: "Analytics Dashboard",
    description:
      "A lead analytics dashboard with KPI cards, interactive charts, URL-synced filters, a sortable table with CSV export, and columns discovered at runtime from JSON data. Light and dark themes with color-blind-safe charts.",
    image: "/images/leadboard.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "Framer Motion"],
    link: "https://leadboard-six.vercel.app/",
    repo: "https://github.com/VincentiusElbert/leadboard",
  },
  {
    title: "Pokemon-API",
    category: "API App",
    description:
      "A Pokémon API-powered Pokedex web app to search, discover, and explore Pokémon with an interactive and fun UI.",
    image: "/images/pokemon-api.png",
    tags: ["React", "Node.js", "Tailwind", "Framer Motion"],
    link: "https://pokemon-api-lilac-beta.vercel.app/",
  },
  {
    title: "Movie Website",
    category: "API App",
    description:
      "A movie web app powered by an API to search, explore, and save your favorite films with trailers and details.",
    image: "/images/movie-website.png",
    tags: ["React", "Node.js", "Tailwind", "Framer Motion"],
    link: "https://movie-website-lemon-two.vercel.app/",
  },
  {
    title: "This Portfolio",
    category: "Motion Design",
    description:
      "The site you're on: scroll-driven storytelling, shared-element transitions, 3D tilt and magnetic interactions, built with accessibility in mind (respects reduced motion).",
    image: "/images/portfolio-site.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    repo: "https://github.com/VincentiusElbert/portofolio",
  },
]


export function PortfolioSection() {
  const [selected, setSelected] = useState<Project | null>(null)


  useEffect(() => {
    if (!selected) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null)
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [selected])

  return (
    <section id="portfolio" className="py-20 px-4 bg-black relative overflow-hidden">
      <div className="absolute top-20 left-10 w-6 h-6 bg-[#91FF02] opacity-30"></div>
      <div className="absolute bottom-10 right-20 w-10 h-10 bg-[#91FF02] opacity-15"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[#91FF02] text-lg font-medium mb-2 tracking-wider">PLAYGROUND</h2>
          <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">SIDE PROJECTS</h3>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Things I build for fun, to explore new APIs, interaction ideas and animation techniques.
          </p>
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <AnimatePresence mode="popLayout">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} onOpen={() => setSelected(project)} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 20 })

  const handleMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="[perspective:1000px]"
    >
      <motion.button
        type="button"
        onClick={onOpen}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group block w-full text-left bg-gray-900 rounded-2xl overflow-hidden border border-white/5 hover:border-[#91FF02]/40 transition-colors"
      >
        <motion.div layoutId={`project-image-${project.title}`} className="aspect-video overflow-hidden relative">
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={340}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />
          <span className="absolute bottom-3 left-3 text-xs px-3 py-1 rounded-full bg-black/70 text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
            View details
          </span>
        </motion.div>

        <div className="p-6" style={{ transform: "translateZ(30px)" }}>
          <div className="flex items-center justify-between mb-3">
            <span className="text-[#91FF02] text-sm font-medium">{project.category}</span>
            <div className="w-8 h-8 rounded-full bg-[#91FF02] flex items-center justify-center group-hover:bg-white group-hover:rotate-45 transition-all duration-300">
              <ArrowUpRight className="w-4 h-4 text-black" />
            </div>
          </div>

          <h3 className="text-white text-lg font-medium mb-2">{project.title}</h3>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.button>
    </motion.div>
  )
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[70] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-gray-950 border border-white/10"
      >
        <motion.div layoutId={`project-image-${project.title}`} className="aspect-video overflow-hidden relative">
          <Image src={project.image} alt={project.title} width={1200} height={680} className="w-full h-full object-cover" />
        </motion.div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 flex items-center justify-center text-white hover:text-[#91FF02]"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } } }}
          className="p-6 md:p-8"
        >
          <motion.span variants={item} className="text-[#91FF02] text-sm font-medium">
            {project.category}
          </motion.span>
          <motion.h3 variants={item} className="text-white text-2xl md:text-3xl font-bold mt-2 mb-4">
            {project.title}
          </motion.h3>
          <motion.p variants={item} className="text-gray-400 leading-relaxed mb-6">
            {project.description}
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-[#91FF02]/10 text-[#91FF02] text-sm">
                {tag}
              </span>
            ))}
          </motion.div>
          <motion.div variants={item} className="flex flex-wrap items-center gap-3">
            {project.link ? (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-[#91FF02] text-black font-semibold px-6 py-3 rounded-full"
              >
                Visit live site <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            ) : (
              <p className="inline-flex items-center gap-2 text-[#91FF02] font-medium">
                <span className="w-2 h-2 rounded-full bg-[#91FF02] animate-pulse" /> You're looking at it right now
              </p>
            )}
            {project.repo && (
              <motion.a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 border border-white/20 text-white hover:border-[#91FF02] hover:text-[#91FF02] font-semibold px-6 py-3 rounded-full transition-colors"
              >
                <Code2 className="w-4 h-4" /> View code
              </motion.a>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

const item = { hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } }
