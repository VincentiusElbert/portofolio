"use client"

import { useRef, useState } from "react"
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion"
import Image from "next/image"
import { ChevronDown, GraduationCap } from "lucide-react"

const experiences = [
  {
    period: "Aug 2025 - Present",
    title: "Frontend Developer",
    company: "IRIS Worldwide (NAVA+)",
    location: "Jakarta, Indonesia",
    summary: "Build and maintain the loyalty CRM platform and member-facing products for two FMCG nutrition brands.",
    highlights: [
      "Architected and developed a loyalty mobile application using Expo (React Native), React, TypeScript and Tailwind CSS, serving thousands of active users.",
      "Built the admin CMS and API for a Flash Sale points-to-rewards feature, with eligibility rules, one-redeem-per-member limits, duplicate-safe redemption, and e-voucher and physical reward fulfilment. Defined the API contract used by a separate Drupal frontend team.",
      "Developing a new Member-Get-Member referral platform shared across both brands, with multi-program support, role-based access control, CSV import of uplines, and an admin dashboard built from a design prototype.",
      "Built a Data Leads analytics dashboard (Vue.js, Inertia.js, Tailwind CSS) with user-customisable columns discovered from JSON data, filters, KPI cards and export.",
      "Delivered a WhatsApp chatbot registration API for a national children's colouring competition, integrated with an OCR receipt-verification pipeline that issues entry codes automatically.",
      "Implemented centralized logging of all incoming API traffic across both brand applications, with masking of sensitive data, giving the team a full audit trail for debugging.",
      "Made campaign bonus rules configurable, so marketing can switch promotions on or off without a code deployment.",
    ],
    tech: ["React Native", "Expo", "TypeScript", "Laravel", "Vue.js", "Inertia.js", "SQL Server"],
    image: "/images/nava-logo.png",
  },
  {
    period: "Dec 2024 - May 2025",
    title: "Microsoft Technical Consultant",
    company: "HAND Global Solutions",
    location: "Jakarta, Indonesia",
    summary: "Custom solutions and automation on the Microsoft Dynamics 365 and Power Platform stack.",
    highlights: [
      "Developed custom solutions within Microsoft Dynamics 365 using JavaScript, .NET C# and SQL.",
      "Created automated workflows and interactive dashboards using Microsoft Power Platform (Power Apps, Power BI, Power Automate).",
      "Enhanced user interfaces and improved system performance through optimization techniques.",
    ],
    tech: ["Dynamics 365", "JavaScript", ".NET C#", "SQL", "Power Platform"],
    image: "/images/microsoft-logo.png",
  },
  {
    period: "Jan 2024 - Jun 2024",
    title: "Software Developer",
    company: "Indo Mobil Sukses Internasional",
    location: "Jakarta, Indonesia",
    summary: "Frontend features for the After-Sales module of a dealer management system (DMS).",
    highlights: [
      "Developed frontend features for a DMS platform using ASP.NET/VB.NET, focusing on user interface improvements.",
      "Implemented new menus and functionality for the After-Sales module, enhancing user experience.",
      "Collaborated with Business Analysts and cross-functional teams to translate requirements into technical solutions.",
    ],
    tech: ["ASP.NET", "VB.NET", "SQL Server"],
    image: "/images/indomobil-logo.png",
  },
  {
    period: "Feb 2022 - Feb 2023",
    title: "Coding Instructor",
    company: "KodeKiddo",
    location: "Bali, Indonesia",
    summary: "Taught programming and trained teachers nationwide.",
    highlights: [
      "Taught programming fundamentals to students from Kindergarten to Senior High School.",
      "Trained teachers nationwide in coding education as part of the Kominfo government program.",
      "Developed teaching materials and conducted workshops, improving communication and mentoring skills.",
    ],
    tech: ["Teaching", "Mentoring", "Workshops"],
    image: "/images/kode-kiddo-logo.png",
  },
]

const education = [
  { title: "Bachelor of Computer Science", place: "Binus University", period: "2019 - 2023" },
  {
    title: "Web Programming Hack - Frontend Specialist",
    place: "AHADEMY",
    period: "Completed Jul 2025",
  },
]

const VISIBLE_HIGHLIGHTS = 3

export function ProfessionalWorkSection() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start 70%", "end 60%"] })
  const lineScale = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <section id="experience" className="py-20 px-4 bg-black relative overflow-hidden">
      <div className="absolute top-10 right-10 w-8 h-8 bg-[#91FF02] opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-12 h-12 bg-[#91FF02] opacity-10"></div>

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-[#91FF02] text-lg font-medium mb-2 tracking-wider">EXPERIENCE</h3>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">PROFESSIONAL WORK</h2>
        </motion.div>

        <div ref={timelineRef} className="relative">
          {/* Timeline track + progress */}
          <div className="absolute left-5 md:left-10 top-0 bottom-0 w-px bg-gray-800" />
          <motion.div
            className="absolute left-5 md:left-10 top-0 bottom-0 w-px bg-[#91FF02] origin-top shadow-[0_0_12px_#91FF02]"
            style={{ scaleY: lineScale }}
          />

          <div className="space-y-12">
            {experiences.map((exp) => (
              <ExperienceItem key={exp.company} exp={exp} />
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white text-2xl font-bold mt-20 mb-8 text-center"
        >
          EDUCATION & CERTIFICATIONS
        </motion.h3>
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-[#91FF02]/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[#91FF02]/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-[#91FF02]" />
              </div>
              <div>
                <h4 className="text-white font-semibold">{edu.title}</h4>
                <p className="text-[#91FF02] text-sm">{edu.place}</p>
                <p className="text-gray-500 text-sm mt-1">{edu.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceItem({ exp }: { exp: (typeof experiences)[number] }) {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? exp.highlights : exp.highlights.slice(0, VISIBLE_HIGHLIGHTS)
  const hiddenCount = exp.highlights.length - VISIBLE_HIGHLIGHTS

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative pl-14 md:pl-24"
    >
      {/* Timeline node */}
      <motion.div
        className="absolute left-5 md:left-10 top-6 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-[#91FF02] bg-black"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1, backgroundColor: "#91FF02" }}
        transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
        viewport={{ once: true, margin: "-40% 0px -40% 0px" }}
      />

      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 hover:border-[#91FF02]/40 transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 mb-4">
          <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center flex-shrink-0">
            <Image src={exp.image} alt={exp.company} width={52} height={52} className="object-contain" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
              <div>
                <h3 className="text-white text-xl font-semibold">{exp.title}</h3>
                <p className="text-[#91FF02] font-medium">{exp.company}</p>
              </div>
              <div className="md:text-right">
                <span className="inline-block text-xs px-3 py-1 rounded-full border border-white/10 text-gray-300">
                  {exp.period}
                </span>
                <p className="text-gray-500 text-xs mt-1">{exp.location}</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-300 mb-4">{exp.summary}</p>

        <ul className="space-y-2 mb-4">
          <AnimatePresence initial={false}>
            {visible.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, delay: i >= VISIBLE_HIGHLIGHTS ? (i - VISIBLE_HIGHLIGHTS) * 0.05 : 0 }}
                className="flex gap-3 text-gray-400 leading-relaxed overflow-hidden"
              >
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#91FF02] flex-shrink-0" />
                <span>{item}</span>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>

        {hiddenCount > 0 && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="flex items-center gap-1 text-sm text-[#91FF02] hover:underline mb-4"
          >
            {expanded ? "Show less" : `Show ${hiddenCount} more`}
            <motion.span animate={{ rotate: expanded ? 180 : 0 }}>
              <ChevronDown className="w-4 h-4" />
            </motion.span>
          </button>
        )}

        <div className="flex flex-wrap gap-2">
          {exp.tech.map((t) => (
            <span key={t} className="px-3 py-1 text-xs rounded-full bg-[#91FF02]/10 text-[#91FF02]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
