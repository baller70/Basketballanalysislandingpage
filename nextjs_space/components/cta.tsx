'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
  ArrowRightIcon,
  CheckIcon,
} from '@/components/icons/basketball-icons'

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
    <section className="cta-section">
      {/* Animated gradient background */}
      <motion.div
        className="cta-bg-gradient"
        animate={{
          background: [
            'radial-gradient(ellipse at 20% 50%, rgba(255, 107, 53, 0.12) 0%, transparent 50%)',
            'radial-gradient(ellipse at 80% 50%, rgba(255, 107, 53, 0.12) 0%, transparent 50%)',
            'radial-gradient(ellipse at 20% 50%, rgba(255, 107, 53, 0.12) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="cta-container">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="cta-card-wrap"
        >
          {/* CTA Card */}
          <div className="cta-card">
            {/* Decorative elements */}
            <div className="cta-glow-1" />
            <div className="cta-glow-2" />

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="cta-content"
            >
              {/* Icon */}
              <div className="cta-icon">
                <span>🏀</span>
              </div>

              <h2 className="cta-title">
                <span className="text-white">READY TO ELEVATE</span>
                <br />
                <span className="gradient-text">YOUR GAME?</span>
              </h2>

              <p className="cta-subtitle">
                Join thousands of players who have transformed their shooting with AI-powered analysis. 
                Start your journey to becoming a better shooter today.
              </p>

              {/* Benefits */}
              <div className="cta-benefits">
                {benefits.map((benefit) => (
                  <div key={benefit} className="cta-benefit">
                    <CheckIcon className="w-4 h-4 text-basketball-orange" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="cta-buttons">
                <Button 
                  variant="glow" 
                  size="xl" 
                  className="group"
                  onClick={() => window.location.href = 'https://app.shotiqai.com/signup'}
                >
                  <SparklesIcon className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Get Started Free
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="xl"
                  onClick={() => {
                    const demoSection = document.getElementById('demo')
                    demoSection?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  <PlayIcon className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .cta-section {
          position: relative;
          padding: 100px 24px 120px;
          background: hsl(var(--background));
          overflow: hidden;
        }

        .cta-bg-gradient {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .cta-container {
          position: relative;
          z-index: 10;
          max-width: 900px;
          margin: 0 auto;
        }

        .cta-card-wrap {
          position: relative;
        }

        .cta-card {
          position: relative;
          background: hsl(var(--card));
          border-radius: 32px;
          padding: 60px 40px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          text-align: center;
          overflow: hidden;
        }

        @media (max-width: 600px) {
          .cta-card {
            padding: 48px 24px;
            border-radius: 24px;
          }
        }

        .cta-glow-1 {
          position: absolute;
          top: 0;
          left: 0;
          width: 150px;
          height: 150px;
          background: rgba(255, 107, 53, 0.1);
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }

        .cta-glow-2 {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 180px;
          height: 180px;
          background: rgba(255, 140, 66, 0.1);
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
        }

        .cta-content {
          position: relative;
          z-index: 10;
        }

        .cta-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          border-radius: 20px;
          background: linear-gradient(135deg, #ff6b35 0%, #ff8f5a 100%);
          margin-bottom: 32px;
        }

        .cta-icon span {
          font-size: 40px;
        }

        .cta-title {
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }

        .cta-subtitle {
          font-size: 17px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.7;
          max-width: 600px;
          margin: 0 auto 32px;
        }

        .cta-benefits {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px 28px;
          margin-bottom: 40px;
        }

        .cta-benefit {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
        }

        .cta-buttons {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }

        @media (max-width: 500px) {
          .cta-buttons {
            flex-direction: column;
          }

          .cta-buttons button,
          .cta-buttons a {
            width: 100%;
          }
        }
      `}</style>
    </section>
  )
}
