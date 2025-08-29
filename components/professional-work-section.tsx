"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function ProfessionalWorkSection() {
  const experiences = [
    {
      period: "Aug 2025 - Present",
      title: "PHP Developer",
      company: "NAVA+",
      description:
        "Develop and maintain web applications using PHP, Laravel, sql and related framework. Collaborate with designers, project managers, and other developers to implement system features. Write clean, secure, and efficient code following best practices. Troubleshoot, debug, and optimize application performance. Integrate third-party APIs and internal systems to support business needs.",
      image: "/images/nava-logo.png",
    },
    {
      period: "Dec 2024 – May 2025",
      title: "Microsoft Technical Consultant",
      company: "Hand Global Solutions",
      description:
        "Using Microsoft Dynamics 365 environment (Javascript, .Net C#, Microsoft SQL, CRM Entity & Fields). Experience with Power Environments (Apps, BI, Automate)",
      image: "/images/microsoft-logo.png",
    },
    {
      period: "Jan 2024 – Jun 2024",
      title: "Software Developer",
      company: "Indomobil Group",
      description:
        "Develop division After Sales for website DMS (Create New Menu, Feature, and Bug Fixing). Create BL,BO,DA(Business Logic, Business Object, Data Access), and Stored Procedure using Microsoft SQL Server. Develop website DMS using ASP.NET/ Visual Basic .NET. Experienced working with Business Analysts, Implementers, Database Admins, and Publishers",
      image: "/images/indomobil-logo.png",
    },
    {
      period: "Feb 2022 – Feb 2023",
      title: "Coding Instructor",
      company: "Kode Kiddo",
      description:
        "Regularly teaching basic coding for student from Kindergarten to Senior High School. Guides teachers throughout Indonesia on how to use simple coding applications through the Kominfo program. Make reports on student activities after teaching. Participating in exhibition activities held by the company in schools and conducting extracurricular teaching",
      image: "/images/kode-kiddo-logo.png",
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-black relative overflow-hidden">
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
          <h3 className="text-[#91FF02] text-lg font-medium mb-2 tracking-wider">EXPERIENCE</h3>
          <h2 className="text-white text-4xl font-bold mb-4">PROFESSIONAL WORK</h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-start gap-8 border-b border-gray-800 pb-12 last:border-b-0"
            >
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center">
                  <Image
                    src={exp.image || "/placeholder.svg"}
                    alt={exp.company}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-white text-xl font-medium mb-1">{exp.title}</h3>
                    <p className="text-[#91FF02] font-medium">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 text-sm mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-gray-400 leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
