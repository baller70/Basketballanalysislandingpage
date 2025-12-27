'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  UploadIcon,
  AIBrainIcon,
  ClipboardIcon,
  ChartIcon,
  CheckIcon,
} from '@/components/icons/basketball-icons'

const steps = [
  {
    number: '01',
    icon: UploadIcon,
    title: 'Upload Your Shot',
    description: 'Record yourself shooting and upload the video or image. We support MP4, MOV, JPG, and PNG formats.',
    features: ['Any angle works', 'Multiple shots per upload', 'Mobile-friendly'],
  },
  {
    number: '02',
    icon: AIBrainIcon,
    title: 'AI Analyzes Form',
    description: 'Our advanced AI uses MediaPipe pose detection to analyze 12+ biomechanical measurements in seconds.',
    features: ['Real-time processing', '33 body landmarks', 'Sub-second analysis'],
  },
  {
    number: '03',
    icon: ClipboardIcon,
    title: 'Get Detailed Feedback',
    description: 'Receive comprehensive reports on your shot arc, release point, balance, and joint angles.',
    features: ['Visual overlays', 'Score breakdown', 'Pro player match'],
  },
  {
    number: '04',
    icon: ChartIcon,
    title: 'Track & Improve',
    description: 'Follow personalized recommendations, track your progress over time, and watch your game elevate.',
    features: ['Progress charts', 'Custom drills', 'Achievement badges'],
  },
]

const StepCard = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="hiw-step-card"
    >
      {/* Big Number */}
      <div className="hiw-number-wrap">
        <span className="hiw-number">{step.number}</span>
        <div className="hiw-number-line" />
      </div>

      {/* Content */}
      <div className="hiw-step-content">
        {/* Icon */}
        <div className="hiw-icon-box">
          <step.icon className="w-6 h-6" />
        </div>

        {/* Title */}
        <h3 className="hiw-step-title">{step.title}</h3>

        {/* Description */}
        <p className="hiw-step-desc">{step.description}</p>

        {/* Features */}
        <ul className="hiw-features-list">
          {step?.features?.map((feature) => (
            <li key={feature}>
              <CheckIcon className="w-4 h-4" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function HowItWorks() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="how-it-works" className="hiw-section">
      {/* Section Header */}
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="hiw-header"
      >
        <span className="hiw-badge">Simple Process</span>
        <h2 className="hiw-title">
          FROM UPLOAD TO
          <br />
          <span className="gradient-text">IMPROVEMENT</span>
        </h2>
        <p className="hiw-subtitle">
          Get professional-level shooting analysis in four simple steps. 
          No complicated setup, no expensive equipment.
        </p>
      </motion.div>

      {/* Steps Container */}
      <div className="hiw-steps-grid">
        {steps.map((step, index) => (
          <StepCard key={step.title} step={step} index={index} />
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="hiw-cta-wrap"
      >
        <p>Ready to transform your shooting game?</p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="hiw-cta-btn"
          onClick={() => window.location.href = 'https://app.shotiqai.com/signup'}
        >
          Start Your Analysis
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </motion.button>
      </motion.div>

      <style jsx global>{`
        .hiw-section {
          position: relative;
          padding: 100px 24px 120px;
          background: hsl(var(--background));
          overflow: hidden;
        }

        .hiw-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 80px;
        }

        .hiw-badge {
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

        .hiw-title {
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 800;
          color: #fff;
          line-height: 1.1;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }

        .hiw-subtitle {
          font-size: 17px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.7;
        }

        /* Steps Grid - PhotoAI style cards */
        .hiw-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          max-width: 1400px;
          margin: 0 auto;
        }

        @media (max-width: 1100px) {
          .hiw-steps-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 600px) {
          .hiw-steps-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }

        /* Step Card - PhotoAI style with rounded corners */
        .hiw-step-card {
          position: relative;
          padding: 32px 28px;
          background: hsl(var(--card));
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.3s ease;
        }

        .hiw-step-card:hover {
          border-color: rgba(255, 107, 53, 0.3);
          transform: translateY(-4px);
        }

        @media (max-width: 600px) {
          .hiw-step-card {
            padding: 24px 20px;
          }
        }

        .hiw-number-wrap {
          position: relative;
          margin-bottom: 24px;
        }

        .hiw-number {
          font-size: clamp(60px, 10vw, 100px);
          font-weight: 900;
          line-height: 1;
          background: linear-gradient(180deg, rgba(255, 107, 53, 0.5) 0%, rgba(255, 107, 53, 0.1) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-family: var(--font-display), system-ui, sans-serif;
          letter-spacing: -0.05em;
        }

        .hiw-number-line {
          position: absolute;
          bottom: 8px;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, rgba(255, 107, 53, 0.4) 0%, rgba(255, 107, 53, 0) 100%);
        }

        /* Step Content */
        .hiw-step-content {
          position: relative;
        }

        .hiw-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(255, 107, 53, 0.2) 0%, rgba(255, 107, 53, 0.05) 100%);
          border: 1px solid rgba(255, 107, 53, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          color: #ff6b35;
        }

        .hiw-step-title {
          font-size: 22px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 14px;
          letter-spacing: -0.01em;
          text-transform: uppercase;
        }

        .hiw-step-desc {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .hiw-features-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .hiw-features-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.75);
        }

        .hiw-features-list li svg {
          color: #ff6b35;
          flex-shrink: 0;
        }

        /* CTA */
        .hiw-cta-wrap {
          text-align: center;
          margin-top: 80px;
        }

        .hiw-cta-wrap p {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 20px;
        }

        .hiw-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 18px 36px;
          border-radius: 14px;
          background: linear-gradient(135deg, #ff6b35 0%, #ff8f5a 100%);
          color: #fff;
          font-size: 16px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          box-shadow: 0 8px 32px rgba(255, 107, 53, 0.3);
          transition: all 0.3s ease;
        }

        .hiw-cta-btn:hover {
          box-shadow: 0 12px 40px rgba(255, 107, 53, 0.4);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  )
}
