import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { FeaturesSection } from "@/components/features-section"
import { BusinessSection } from "@/components/business-section"
import { MediaSection } from "@/components/media-section"
import { ContactForm } from "@/components/contact-form"
import { ChatSection } from "@/components/chat-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-purple-950">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <BusinessSection />
        <MediaSection />
        <ContactForm />
        <ChatSection />
      </main>
      <SiteFooter />
    </div>
  )
}

