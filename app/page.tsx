import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServiceExpertiseSection } from "@/components/service-expertise-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { CaseStudySection } from "@/components/case-study-section"
import { ProfessionalWorkSection } from "@/components/professional-work-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

// Each section component renders its own <section id="..."> used by the navigation
export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-clip">
      <Navigation />
      <HeroSection />
      <ServiceExpertiseSection />
      <AboutSection />
      <SkillsSection />
      <CaseStudySection />
      <ProfessionalWorkSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
