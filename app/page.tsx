import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Demo from '@/components/Demo'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Page content - PhotoAI style with seamless sections */}
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
