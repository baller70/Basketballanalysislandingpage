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
      '1 shot analysis per month',
      'Image only (no video)',
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
      className={cn('pricing-card-wrap', plan.popular && 'popular')}
    >
      {/* Popular badge */}
      {plan.popular && (
        <div className="pricing-popular-badge">
            Most Popular
        </div>
      )}

      <div className={cn('pricing-card', plan.popular && 'popular')}>
        {/* Icon */}
        <div className={cn('pricing-icon', `bg-gradient-to-br ${plan.gradient}`)}>
          <plan.icon className="w-6 h-6 text-white" />
        </div>

        {/* Plan Info */}
        <h3 className="pricing-plan-name">{plan.name}</h3>
        <p className="pricing-plan-desc">{plan.description}</p>

        {/* Price */}
        <div className="pricing-price">
          <span className="pricing-price-value">{plan.price}</span>
          <span className="pricing-price-period">{plan.period}</span>
        </div>

        {/* Features */}
        <ul className="pricing-features">
          {plan.features.map((feature) => (
            <li key={feature}>
              <CheckIcon className={cn('w-5 h-5', plan.popular ? 'text-basketball-orange' : 'text-muted-foreground')} />
              <span>{feature}</span>
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
    <section id="pricing" className="pricing-section">
      {/* Decorative elements */}
      <div className="pricing-glow-1" />
      <div className="pricing-glow-2" />

      <div className="pricing-container">
          {/* Section Header */}
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          className="pricing-header"
        >
          <span className="pricing-badge">Simple Pricing</span>
          <h2 className="pricing-title">
              <span className="text-white">CHOOSE YOUR</span>
              <br />
              <span className="gradient-text">GAME PLAN</span>
            </h2>
          <p className="pricing-subtitle">
            <strong className="text-basketball-orange">🔥 Beta Pricing - Lock in your rate now!</strong>
            <br />
            These are beta prices. Get in now as prices will go up once beta period is up. 
            Prices will increase, but if you lock it in now, your price will be the same. Forever.
            </p>
          </motion.div>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          className="pricing-toggle"
          >
          <span className={cn('pricing-toggle-label', billingPeriod === 'monthly' && 'active')}>
              Monthly
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
            className="pricing-toggle-switch"
            >
              <motion.div
              className="pricing-toggle-knob"
                animate={{ left: billingPeriod === 'monthly' ? '4px' : '32px' }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </button>
          <span className={cn('pricing-toggle-label', billingPeriod === 'yearly' && 'active')}>
              Yearly
            <span className="pricing-save-badge">Save 20%</span>
            </span>
          </motion.div>

          {/* Pricing Cards */}
        <div className="pricing-cards-grid">
            {plans.map((plan, index) => (
              <PricingCard key={plan.name} plan={plan} index={index} />
            ))}
          </div>

          {/* Bottom note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          className="pricing-note"
          >
            All plans include a 14-day free trial. No credit card required to start.
          </motion.p>
        </div>

      <style jsx global>{`
        .pricing-section {
          position: relative;
          padding: 100px 24px 120px;
          background: hsl(var(--background));
          overflow: hidden;
        }

        .pricing-glow-1 {
          position: absolute;
          top: 33%;
          left: 25%;
          width: 400px;
          height: 400px;
          background: rgba(255, 107, 53, 0.05);
          border-radius: 50%;
          filter: blur(150px);
          pointer-events: none;
        }

        .pricing-glow-2 {
          position: absolute;
          bottom: 33%;
          right: 25%;
          width: 300px;
          height: 300px;
          background: rgba(139, 92, 246, 0.05);
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
        }

        .pricing-container {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          margin: 0 auto;
        }

        .pricing-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 50px;
        }

        .pricing-badge {
          display: inline-block;
          padding: 10px 20px;
          border-radius: 100px;
          background: rgba(255, 107, 53, 0.1);
          border: 1px solid rgba(255, 107, 53, 0.25);
          color: #ff6b35;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 24px;
        }

        .pricing-title {
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }

        .pricing-subtitle {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.8;
          max-width: 700px;
          margin: 0 auto;
        }

        .pricing-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 50px;
        }

        .pricing-toggle-label {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.5);
          transition: color 0.2s ease;
        }

        .pricing-toggle-label.active {
          color: #fff;
        }

        .pricing-toggle-switch {
          position: relative;
          width: 56px;
          height: 28px;
          border-radius: 100px;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          cursor: pointer;
        }

        .pricing-toggle-knob {
          position: absolute;
          top: 4px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #ff6b35;
        }

        .pricing-save-badge {
          margin-left: 8px;
          padding: 4px 8px;
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
          font-size: 11px;
          border-radius: 20px;
        }

        .pricing-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          align-items: stretch;
        }

        @media (max-width: 900px) {
          .pricing-cards-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
            margin: 0 auto;
          }
        }

        .pricing-card-wrap {
          position: relative;
          height: 100%;
        }

        .pricing-card-wrap.popular {
          z-index: 10;
        }

        .pricing-popular-badge {
          position: absolute;
          top: -16px;
          left: 50%;
          transform: translateX(-50%);
          padding: 8px 20px;
          background: linear-gradient(135deg, #ff6b35 0%, #ff8f5a 100%);
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          border-radius: 100px;
          box-shadow: 0 8px 24px rgba(255, 107, 53, 0.3);
          z-index: 20;
        }

        .pricing-card {
          height: 100%;
          background: hsl(var(--card));
          border-radius: 24px;
          padding: 32px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
        }

        .pricing-card:hover {
          border-color: rgba(255, 107, 53, 0.2);
        }

        .pricing-card.popular {
          border-color: rgba(255, 107, 53, 0.4);
          box-shadow: 0 20px 60px rgba(255, 107, 53, 0.1);
          transform: scale(1.02);
        }

        @media (max-width: 900px) {
          .pricing-card.popular {
            transform: none;
          }
        }

        .pricing-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .pricing-plan-name {
          font-size: 22px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 4px;
        }

        .pricing-plan-desc {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.5);
          margin: 0 0 20px;
        }

        .pricing-price {
          display: flex;
          align-items: baseline;
          gap: 4px;
          margin-bottom: 28px;
        }

        .pricing-price-value {
          font-size: 44px;
          font-weight: 800;
          color: #fff;
        }

        .pricing-price-period {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.5);
        }

        .pricing-features {
          list-style: none;
          padding: 0;
          margin: 0 0 28px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          flex-grow: 1;
        }

        .pricing-features li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .pricing-features li svg {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .pricing-features li span {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
        }

        .pricing-note {
          text-align: center;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.5);
          margin-top: 50px;
        }
      `}</style>
    </section>
  )
}
