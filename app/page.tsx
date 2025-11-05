import { StickyHeader } from "@/components/sticky-header"
import { HeroSection } from "@/components/hero-section"
import { ProductCards } from "@/components/product-cards"
import { FeaturesSection } from "@/components/features-section"
import { ErgonomicsSection } from "@/components/ergonomics-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <StickyHeader />
      <HeroSection />
      <ProductCards />
      <FeaturesSection />
      <ErgonomicsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
