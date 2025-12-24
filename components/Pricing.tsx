'use client'

import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  CheckIcon,
  LightningIcon,
  StarFilledIcon,
  TrophyIcon,
  ArrowRightIcon,
} from '@/components/icons/BasketballIcons'

// Sparkles icon for Pro plan
const SparklesIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3 L13 8 L18 9 L13 10 L12 15 L11 10 L6 9 L11 8 Z" />
    <path d="M18 16 L18.3 17.2 L19.5 17.5 L18.3 17.8 L18 19 L17.7 17.8 L16.5 17.5 L17.7 17.2 Z" />
  </svg>
);

// Crown icon for Team plan
const CrownIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 18 L4 8 L8 12 L12 4 L16 12 L20 8 L22 18 Z" />
    <path d="M2 18 L22 18" strokeWidth="2.5" />
    <circle cx="4" cy="8" r="1" fill="currentColor" />
    <circle cx="12" cy="4" r="1" fill="currentColor" />
    <circle cx="20" cy="8" r="1" fill="currentColor" />
  </svg>
);

const plans = [
  {
    name: 'Free',
    description: 'Perfect for getting started',
    price: '$0',
    period: 'forever',
    icon: LightningIcon,
    features: [
      '5 shot analyses per month',
      'Basic biomechanical metrics',
      'Single session history',
      'Community support',
    ],
    cta: 'Start Free',
    popular: false,
    gradient: 'from-gray-500 to-gray-600',
  },
  {
    name: 'Pro',
    description: 'For serious players',
    price: '$19',
    period: '/month',
    icon: SparklesIcon,
    features: [
      'Unlimited shot analyses',
      'Advanced 12+ metrics',
      'Full progress history',
      'Pro player comparisons',
      'AI coaching recommendations',
      'Priority support',
      'Export reports (PDF)',
    ],
    cta: 'Go Pro',
    popular: true,
    gradient: 'from-basketball-orange to-basketball-glow',
  },
  {
    name: 'Team',
    description: 'For coaches & teams',
    price: '$79',
    period: '/month',
    icon: CrownIcon,
    features: [
      'Everything in Pro',
      'Up to 25 team members',
      'Team analytics dashboard',
      'Bulk video analysis',
      'Custom training programs',
      'White-label reports',
      'Dedicated account manager',
      'API access',
    ],
    cta: 'Contact Sales',
    popular: false,
    gradient: 'from-purple-500 to-pink-500',
  },
]

const PricingCard = ({ plan, index }: { plan: typeof plans[0]; index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        'relative h-full',
        plan.popular && 'z-10'
      )}
    >
      {/* Popular badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
          <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-basketball-orange to-basketball-glow text-white text-sm font-semibold shadow-lg shadow-basketball-orange/30">
            Most Popular
          </div>
        </div>
      )}

      <div
        className={cn(
          'h-full glass rounded-2xl p-6 md:p-8 transition-all duration-300',
          plan.popular
            ? 'border-basketball-orange/50 shadow-xl shadow-basketball-orange/10 scale-105'
            : 'hover:border-basketball-orange/20'
        )}
      >
        {/* Icon */}
        <div className={cn(
          'w-12 h-12 rounded-xl flex items-center justify-center mb-4',
          'bg-gradient-to-br',
          plan.gradient
        )}>
          <plan.icon className="w-6 h-6 text-white" />
        </div>

        {/* Plan Info */}
        <h3 className="text-xl font-semibold text-white mb-1">{plan.name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>

        {/* Price */}
        <div className="flex items-baseline gap-1 mb-6">
          <span className="text-4xl md:text-5xl font-display text-white">{plan.price}</span>
          <span className="text-muted-foreground">{plan.period}</span>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <CheckIcon className={cn(
                'w-5 h-5 flex-shrink-0 mt-0.5',
                plan.popular ? 'text-basketball-orange' : 'text-muted-foreground'
              )} />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button
          variant={plan.popular ? 'glow' : 'outline'}
          className="w-full"
          size="lg"
        >
          {plan.cta}
          <ArrowRightIcon className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </motion.div>
  )
}

export default function Pricing() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly')

  return (
    <section id="pricing" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-basketball-orange/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-[120px]" />

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
              Simple Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display tracking-tight mb-4 md:mb-6">
              <span className="text-white">CHOOSE YOUR</span>
              <br />
              <span className="gradient-text">GAME PLAN</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Start free and upgrade as you grow. No hidden fees, cancel anytime.
            </p>
          </motion.div>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <span className={cn(
              'text-sm transition-colors',
              billingPeriod === 'monthly' ? 'text-white' : 'text-muted-foreground'
            )}>
              Monthly
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-14 h-7 rounded-full bg-muted/50 transition-colors"
            >
              <motion.div
                className="absolute top-1 w-5 h-5 rounded-full bg-basketball-orange"
                animate={{ left: billingPeriod === 'monthly' ? '4px' : '32px' }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={cn(
              'text-sm transition-colors',
              billingPeriod === 'yearly' ? 'text-white' : 'text-muted-foreground'
            )}>
              Yearly
              <span className="ml-2 px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 text-xs">
                Save 20%
              </span>
            </span>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-6 max-w-5xl mx-auto items-stretch">
            {plans.map((plan, index) => (
              <PricingCard key={plan.name} plan={plan} index={index} />
            ))}
          </div>

          {/* Bottom note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center text-sm text-muted-foreground mt-12"
          >
            All plans include a 14-day free trial. No credit card required to start.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
