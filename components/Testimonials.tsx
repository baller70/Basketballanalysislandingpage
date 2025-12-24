'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    name: 'Marcus Johnson',
    role: 'High School Varsity Player',
    avatar: '🏀',
    rating: 5,
    content: "ShotIQ completely changed my shooting game. I went from a 32% three-point shooter to 41% in just two months. The AI recommendations were spot-on for fixing my elbow flare.",
  },
  {
    name: 'Coach Williams',
    role: 'AAU Basketball Coach',
    avatar: '🎯',
    rating: 5,
    content: "I use this with all my players now. Being able to compare their form to pros and track progress over time has made my coaching so much more effective. Worth every penny.",
  },
  {
    name: 'Sarah Chen',
    role: 'College Basketball Player',
    avatar: '⭐',
    rating: 5,
    content: "The biomechanical analysis is incredible. I never knew my release point was too low until I saw the data. The visual overlays make it so easy to understand what to fix.",
  },
  {
    name: 'David Park',
    role: 'Recreational Player',
    avatar: '🔥',
    rating: 5,
    content: "Even as a weekend warrior, this app has helped me dominate at the gym. My friends can't believe the improvement in my shot. The gamification keeps me coming back!",
  },
  {
    name: 'Lisa Thompson',
    role: 'Youth Basketball Parent',
    avatar: '💪',
    rating: 5,
    content: "My daughter loves earning badges and seeing her progress. It's made practice fun for her, and I can see real improvement in her games. Great tool for young players.",
  },
  {
    name: 'Mike Rodriguez',
    role: 'Semi-Pro Player',
    avatar: '🏆',
    rating: 5,
    content: "The pro comparison feature is amazing. Knowing my form matches Kevin Durant's style gave me so much confidence. The detailed metrics help me fine-tune every aspect.",
  },
]

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-2xl p-6 h-full flex flex-col hover:border-basketball-orange/20 transition-colors"
    >
      {/* Quote icon */}
      <Quote className="w-8 h-8 text-basketball-orange/30 mb-4" />

      {/* Content */}
      <p className="text-muted-foreground leading-relaxed flex-grow mb-6">
        "{testimonial.content}"
      </p>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-basketball-orange text-basketball-orange" />
        ))}
      </div>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-basketball-orange/20 to-basketball-glow/20 flex items-center justify-center text-2xl">
          {testimonial.avatar}
        </div>
        <div>
          <div className="font-medium text-white">{testimonial.name}</div>
          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/5" />

      <div className="relative z-10 section-centered">
        <div className="section-content">
          {/* Section Header */}
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-basketball-orange/10 border border-basketball-orange/20 text-basketball-orange text-sm font-medium mb-4 md:mb-6">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display tracking-tight mb-4 md:mb-6">
              <span className="text-white">TRUSTED BY</span>
              <br />
              <span className="gradient-text">THOUSANDS</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Join the community of players and coaches who have transformed their shooting game with ShotIQ.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
            ))}
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { value: '50,000+', label: 'Active Users' },
              { value: '1M+', label: 'Shots Analyzed' },
              { value: '4.9/5', label: 'App Store Rating' },
              { value: '89%', label: 'Improvement Rate' },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-display text-basketball-orange mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

