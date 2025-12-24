'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'
import {
  VideoIcon,
  TargetIcon,
  AnglesIcon,
  ReleasePointIcon,
  AIBrainIcon,
  ChartIcon,
  CompareIcon,
  BadgeIcon,
} from '@/components/icons/BasketballIcons'

const features = [
  {
    icon: VideoIcon,
    title: 'Video Upload & Processing',
    description: 'Upload your shooting footage in any format. Our AI processes videos in real-time using advanced MediaPipe pose detection.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: TargetIcon,
    title: 'Shot Arc Analysis',
    description: 'Measure your release angle, entry angle, and trajectory. Get the perfect 45-55° arc for optimal shooting percentage.',
    gradient: 'from-basketball-orange to-basketball-glow',
  },
  {
    icon: AnglesIcon,
    title: 'Joint Angle Metrics',
    description: 'Track shoulder, elbow, hip, knee, and ankle angles. Compare your form to professional standards.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: ReleasePointIcon,
    title: 'Release Point Detection',
    description: 'Identify your exact release height and timing. Optimize your release for maximum consistency.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: AIBrainIcon,
    title: 'AI Recommendations',
    description: 'Receive personalized coaching tips based on your unique shooting mechanics and areas for improvement.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: ChartIcon,
    title: 'Progress Tracking',
    description: 'Monitor your improvement over time with detailed session history, charts, and milestone achievements.',
    gradient: 'from-indigo-500 to-violet-500',
  },
  {
    icon: CompareIcon,
    title: 'Pro Comparison',
    description: 'See which NBA player your shooting form matches most closely. Learn from the best shooters in the game.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: BadgeIcon,
    title: 'Gamification & Badges',
    description: 'Earn XP, unlock badges, maintain daily streaks, and climb the leaderboard as you improve your shot.',
    gradient: 'from-pink-500 to-rose-500',
  },
]

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="feature-card group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"
        style={{
          backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
        }}
      />
      <div className="relative glass rounded-2xl p-6 md:p-8 h-full">
        {/* Icon */}
        <div className={cn(
          'w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-4 md:mb-6',
          'bg-gradient-to-br',
          feature.gradient
        )}>
          <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
        </div>

        {/* Content */}
        <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">
          {feature.title}
        </h3>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
          {feature.description}
        </p>

        {/* Hover decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"
          style={{
            backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
          }}
        />
      </div>
    </motion.div>
  )
}

export default function Features() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="features" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-basketball-orange/5 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />

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
              Powerful Features
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display tracking-tight mb-4 md:mb-6">
              <span className="text-white">EVERYTHING YOU NEED TO</span>
              <br />
              <span className="gradient-text">PERFECT YOUR SHOT</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Our comprehensive analysis platform provides all the tools you need to understand, 
              improve, and master your basketball shooting technique.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
