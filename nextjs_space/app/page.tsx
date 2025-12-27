import Header from '@/components/header'
import Hero from '@/components/hero'
import Features from '@/components/features'
import HowItWorks from '@/components/how-it-works'
import Demo from '@/components/demo'
import Testimonials from '@/components/testimonials'
import Pricing from '@/components/pricing'
import CTA from '@/components/cta'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Demo />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}
