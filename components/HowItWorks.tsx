'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'
import {
  UploadIcon,
  AIBrainIcon,
  ClipboardIcon,
  ChartIcon,
  ArrowRightIcon,
  CheckIcon,
} from '@/components/icons/BasketballIcons'

const steps = [
  {
    number: '01',
    icon: UploadIcon,
    title: 'Upload Your Shot',
    description: 'Record yourself shooting and upload the video or image. We support MP4, MOV, JPG, and PNG formats.',
    features: ['Any angle works', 'Multiple shots per upload', 'Mobile-friendly'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    number: '02',
    icon: AIBrainIcon,
    title: 'AI Analyzes Form',
    description: 'Our advanced AI uses MediaPipe pose detection to analyze 12+ biomechanical measurements in seconds.',
    features: ['Real-time processing', '33 body landmarks', 'Sub-second analysis'],
    color: 'from-basketball-orange to-basketball-glow',
  },
  {
    number: '03',
    icon: ClipboardIcon,
    title: 'Get Detailed Feedback',
    description: 'Receive comprehensive reports on your shot arc, release point, balance, and joint angles with pro comparisons.',
    features: ['Visual overlays', 'Score breakdown', 'Pro player match'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    number: '04',
    icon: ChartIcon,
    title: 'Track & Improve',
    description: 'Follow personalized recommendations, track your progress over time, and watch your shooting percentage climb.',
    features: ['Progress charts', 'Custom drills', 'Achievement badges'],
    color: 'from-green-500 to-emerald-500',
  },
]

const StepCard = ({ step, index, totalSteps }: { step: typeof steps[0]; index: number; totalSteps: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      {/* Connection line (except for last item) */}
      {index < totalSteps - 1 && (
        <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-border to-transparent z-0" />
      )}

      <div className="relative glass rounded-2xl p-6 md:p-8 h-full group hover:border-basketball-orange/30 transition-colors">
        {/* Step number */}
        <div className={cn(
          'absolute -top-4 -left-4 w-12 h-12 rounded-xl flex items-center justify-center font-display text-lg',
          'bg-gradient-to-br shadow-lg',
          step.color
        )}>
          {step.number}
        </div>

        {/* Icon */}
        <div className="flex justify-end mb-6">
          <div className={cn(
            'w-14 h-14 rounded-2xl flex items-center justify-center',
            'bg-gradient-to-br opacity-80',
            step.color
          )}>
            <step.icon className="w-7 h-7 text-white" />
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
          {step.title}
        </h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {step.description}
        </p>

        {/* Features list */}
        <ul className="space-y-2">
          {step.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckIcon className="w-4 h-4 text-basketball-orange flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Arrow indicator */}
        {index < totalSteps - 1 && (
          <div className="lg:hidden flex justify-center mt-6">
            <ArrowRightIcon className="w-6 h-6 text-muted-foreground rotate-90" />
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function HowItWorks() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="how-it-works" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/5" />
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-basketball-orange/5 rounded-full blur-[150px]" />

      <div className="relative z-10 section-centered">
        <div className="section-content">
          {/* Section Header */}
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12 md:mb-20"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-basketball-orange/10 border border-basketball-orange/20 text-basketball-orange text-sm font-medium mb-4 md:mb-6">
              Simple Process
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display tracking-tight mb-4 md:mb-6">
              <span className="text-white">FROM UPLOAD TO</span>
              <br />
              <span className="gradient-text">IMPROVEMENT</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Get professional-level shooting analysis in four simple steps. 
              No complicated setup, no expensive equipment—just your phone and your shot.
            </p>
          </motion.div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <StepCard
                key={step.title}
                step={step}
                index={index}
                totalSteps={steps.length}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12 md:mt-16"
          >
            <p className="text-muted-foreground mb-4">
              Ready to transform your shooting game?
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-basketball-orange to-basketball-glow text-white font-semibold shadow-lg shadow-basketball-orange/30 hover:shadow-basketball-orange/50 transition-shadow"
            >
              Start Your Analysis
              <ArrowRightIcon className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
