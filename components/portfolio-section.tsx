"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function PortfolioSection() {
  const projects = [
    {
      title: "Pokemon-API",
      category: "Web App",
      description:
        "A Pokémon API-powered Pokedex web app to search, discover, and explore Pokémon with an interactive and fun UI.",
      image: "/images/pokemon-api.png",
      tags: ["React", "Node.js", "Tailwind", "Framer Motion"],
      link: "https://pokemon-api-lilac-beta.vercel.app/",
    },
    {
      title: "Movie Website",
      category: "Web App",
      description:
        "A movie web app powered by an API to search, explore, and save your favorite films with trailers and details.",
      image: "/images/movie-website.png",
      tags: ["React", "Node.js", "Tailwind", "Framer Motion"],
      link: "https://movie-website-lemon-two.vercel.app/",
    },
    {
      title: "Journal Website",
      category: "Web App",
      description:
        "A modern journal/blog web app where users can explore articles, view recommendations, and engage with trending posts.",
      image: "/images/journal-website.png",
      tags: ["React", "Node.js", "Tailwind", "Framer Motion"],
      link: "https://journal-website-posting.vercel.app/",
    },
    {
      title: "Bootcamp Website",
      category: "Web App",
      description:
        "A modern bootcamp landing page showcasing courses, modules, and mentorship to help aspiring developers get hired.",
      image: "/images/bootcamp-website.png",
      tags: ["React", "Node.js", "Tailwind", "Framer Motion"],
      link: "https://bootcamp-web-eight.vercel.app/",
    },
    {
      title: "E-commerce Website",
      category: "Web App",
      description: "A modern e-commerce web app with product listings, promos, and a smooth shopping experience.",
      image: "/images/ecommerce-website.png",
      tags: ["React", "Node.js", "Tailwind", "Framer Motion"],
      link: "https://ecommerce-web-green-nu.vercel.app/",
    },
    {
      title: "Home Market",
      category: "Web App",
      description: "A real estate website to find, buy, or rent dream homes from trusted sources.",
      image: "/images/home-market.png",
      tags: ["React", "Node.js", "Tailwind", "Framer Motion"],
      link: "https://home-market-blond.vercel.app/",
    },
  ]

  return (
    <section id="portfolio" className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Decorative squares */}
      <div className="absolute top-20 left-10 w-6 h-6 bg-[#91FF02] opacity-30"></div>
      <div className="absolute bottom-10 right-20 w-10 h-10 bg-[#91FF02] opacity-15"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[#91FF02] text-lg font-medium mb-4 tracking-wider">SELECTED WORK</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent projects demonstrating expertise in modern web development and user experience
            design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => window.open(project.link, "_blank")}
            >
              <div className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#91FF02] text-sm font-medium">{project.category}</span>
                    <div className="w-8 h-8 rounded-full bg-[#91FF02] flex items-center justify-center group-hover:bg-white transition-colors">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-white text-lg font-medium mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
