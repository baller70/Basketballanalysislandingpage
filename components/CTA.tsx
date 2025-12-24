'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
  ArrowRightIcon,
  CheckIcon,
} from '@/components/icons/BasketballIcons'

// Sparkles icon
const SparklesIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3 L13 8 L18 9 L13 10 L12 15 L11 10 L6 9 L11 8 Z" />
    <path d="M18 16 L18.3 17.2 L19.5 17.5 L18.3 17.8 L18 19 L17.7 17.8 L16.5 17.5 L17.7 17.2 Z" />
  </svg>
);

// Play icon
const PlayIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />
  </svg>
);

const benefits = [
  'No credit card required',
  '5 free analyses',
  'Cancel anytime',
  'Instant results',
]

export default function CTA() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/5 via-background to-background" />
      
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(ellipse at 20% 50%, rgba(255, 107, 53, 0.15) 0%, transparent 50%)',
            'radial-gradient(ellipse at 80% 50%, rgba(255, 107, 53, 0.15) 0%, transparent 50%)',
            'radial-gradient(ellipse at 20% 50%, rgba(255, 107, 53, 0.15) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10 section-centered">
        <div className="section-content">
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* CTA Card */}
            <div className="relative glass rounded-3xl p-8 md:p-12 lg:p-16 text-center overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-basketball-orange/10 rounded-full blur-[60px]" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-basketball-glow/10 rounded-full blur-[80px]" />

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative z-10"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-basketball-orange to-basketball-glow mb-6 md:mb-8">
                  <span className="text-4xl">🏀</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display tracking-tight mb-4 md:mb-6">
                  <span className="text-white">READY TO ELEVATE</span>
                  <br />
                  <span className="gradient-text">YOUR GAME?</span>
                </h2>

                <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Join thousands of players who have transformed their shooting with AI-powered analysis. 
                  Start your journey to becoming a better shooter today.
                </p>

                {/* Benefits */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 md:mb-10">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckIcon className="w-4 h-4 text-basketball-orange" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button variant="glow" size="xl" className="group w-full sm:w-auto">
                    <SparklesIcon className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                    Get Started Free
                    <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" size="xl" className="w-full sm:w-auto">
                    <PlayIcon className="w-5 h-5 mr-2" />
                    Watch Demo
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
