import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServiceExpertiseSection } from "@/components/service-expertise-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { ProfessionalWorkSection } from "@/components/professional-work-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navigation />
      <section id="home">
        <HeroSection />
      </section>
      <ServiceExpertiseSection />
      <section id="about">
        <AboutSection />
      </section>
      <section id="skills">
        <SkillsSection />
      </section>
      <WhyChooseSection />
      <ProfessionalWorkSection />
      <section id="portfolio">
        <PortfolioSection />
      </section>
      <section id="faq">
        <FaqSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </main>
  )
}
