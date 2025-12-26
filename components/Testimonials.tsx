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
      className="testimonial-card"
    >
      {/* Quote icon */}
      <Quote className="testimonial-quote-icon" />

      {/* Content */}
      <p className="testimonial-content">
        "{testimonial.content}"
      </p>

      {/* Rating */}
      <div className="testimonial-stars">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-basketball-orange text-basketball-orange" />
        ))}
      </div>

      {/* Author */}
      <div className="testimonial-author">
        <div className="testimonial-avatar">
          {testimonial.avatar}
        </div>
        <div>
          <div className="testimonial-name">{testimonial.name}</div>
          <div className="testimonial-role">{testimonial.role}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* Section Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="testimonials-header"
        >
          <span className="testimonials-badge">Testimonials</span>
          <h2 className="testimonials-title">
            <span className="text-white">TRUSTED BY</span>
            <br />
            <span className="gradient-text">THOUSANDS</span>
          </h2>
          <p className="testimonials-subtitle">
            Join the community of players and coaches who have transformed their shooting game with ShotIQ.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="testimonials-stats"
        >
          {[
            { value: '50,000+', label: 'Active Users' },
            { value: '1M+', label: 'Shots Analyzed' },
            { value: '4.9/5', label: 'App Store Rating' },
            { value: '89%', label: 'Improvement Rate' },
          ].map((stat, index) => (
            <div key={stat.label} className="testimonials-stat">
              <div className="testimonials-stat-value">
                {stat.value}
              </div>
              <div className="testimonials-stat-label">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        .testimonials-section {
          position: relative;
          padding: 100px 24px 120px;
          background: hsl(var(--background));
          overflow: hidden;
        }

        .testimonials-container {
          position: relative;
          z-index: 10;
          max-width: 1400px;
          margin: 0 auto;
        }

        .testimonials-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 60px;
        }

        .testimonials-badge {
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

        .testimonials-title {
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }

        .testimonials-subtitle {
          font-size: 17px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.7;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        @media (max-width: 1000px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }

        .testimonial-card {
          background: hsl(var(--card));
          border-radius: 20px;
          padding: 28px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: all 0.3s ease;
        }

        .testimonial-card:hover {
          border-color: rgba(255, 107, 53, 0.2);
          transform: translateY(-4px);
        }

        .testimonial-quote-icon {
          width: 32px;
          height: 32px;
          color: rgba(255, 107, 53, 0.3);
          margin-bottom: 16px;
        }

        .testimonial-content {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.7;
          flex-grow: 1;
          margin-bottom: 20px;
        }

        .testimonial-stars {
          display: flex;
          gap: 4px;
          margin-bottom: 20px;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .testimonial-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(255, 107, 53, 0.2) 0%, rgba(255, 140, 66, 0.1) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }

        .testimonial-name {
          font-size: 15px;
          font-weight: 600;
          color: #fff;
        }

        .testimonial-role {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
        }

        .testimonials-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-top: 80px;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        @media (max-width: 600px) {
          .testimonials-stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .testimonials-stat {
          text-align: center;
        }

        .testimonials-stat-value {
          font-size: clamp(24px, 4vw, 32px);
          font-weight: 800;
          color: #ff6b35;
          margin-bottom: 4px;
        }

        .testimonials-stat-label {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </section>
  )
}
