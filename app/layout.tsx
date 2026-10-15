import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { MotionProvider } from "@/components/motion-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "Vincentius Elbert - Frontend / Full-Stack Developer",
  description:
    "Frontend-focused full-stack developer from Jakarta specializing in React, Next.js, TypeScript and Tailwind CSS, with hands-on Laravel, React Native and SQL Server experience.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} bg-black text-white antialiased`}>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  )
}
