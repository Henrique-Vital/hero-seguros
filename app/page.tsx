import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { FeaturesSection } from "@/components/features-section"
import { BusinessSection } from "@/components/business-section"
import { MediaSection } from "@/components/media-section"
import { ContactForm } from "@/components/contact-form"
import { ChatSection } from "@/components/chat-section"
import { SiteFooter } from "@/components/site-footer"
import Head from "next/head";  // Importando o Head do Next.js

export default function Home() {
  return (
    <div className="min-h-screen bg-purple-950">
      <Head>
        {/* Definindo o favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
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

