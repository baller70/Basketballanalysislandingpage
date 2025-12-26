'use client'

import React, { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
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

// Alternating: shooting analysis → UI card → shooting analysis → UI card
const features = [
  // 1. Shooting - Allan Houston
  {
    icon: AnglesIcon,
    title: 'Joint Angles',
    description: 'Track shoulder, elbow, hip, knee, and ankle angles against pro standards.',
    image: '/shooting/analysis-allan.png',
  },
  // 2. Card - Profile
  {
    icon: BadgeIcon,
    title: 'Player Profile',
    description: 'Build your shooter profile with detailed stats, rankings, and progression history.',
    image: '/shooting/card-profile.png',
  },
  // 3. Shooting - Kaitlyn Clark
  {
    icon: ReleasePointIcon,
    title: 'Release Point',
    description: 'Identify your exact release height and timing for maximum consistency.',
    image: '/shooting/analysis-kaitlyn.png',
  },
  // 4. Card - Joint Angles
  {
    icon: AnglesIcon,
    title: 'Angle Breakdown',
    description: 'See detailed measurements for shoulder, elbow, hip, knee, and ankle angles.',
    image: '/shooting/card-jointangles.png',
  },
  // 5. Shooting - DT
  {
    icon: ChartIcon,
    title: 'Form Analysis',
    description: 'Get comprehensive breakdown of your shooting mechanics in real-time.',
    image: '/shooting/analysis-dt.png',
  },
  // 6. Card - Comparison
  {
    icon: CompareIcon,
    title: 'Elite Comparison',
    description: 'Compare your form with 250 elite players across NBA, WNBA, and NCAA.',
    image: '/shooting/card-comparison.png',
  },
  // 7. Shooting - Nat
  {
    icon: TargetIcon,
    title: 'Shot Arc',
    description: 'Measure your release angle, entry angle, and trajectory for optimal shooting.',
    image: '/shooting/analysis-nat.png',
  },
  // 8. Card - Release Metrics
  {
    icon: ReleasePointIcon,
    title: 'Release Metrics',
    description: 'Track release height, angle, and entry angle with precision measurements.',
    image: '/shooting/card-release.png',
  },
  // 9. Shooting - Sue Bird
  {
    icon: AIBrainIcon,
    title: 'AI Analysis',
    description: 'Receive personalized coaching tips based on your unique mechanics.',
    image: '/shooting/analysis-suebird.png',
  },
  // 10. Card - Matched Shooter
  {
    icon: CompareIcon,
    title: 'Pro Match',
    description: 'Discover which NBA/WNBA star your shooting form matches most closely.',
    image: '/shooting/card-matched.png',
  },
  // 11. Shooting - Korver
  {
    icon: VideoIcon,
    title: 'Video Breakdown',
    description: 'Upload footage and get instant AI-powered analysis of your form.',
    image: '/shooting/analysis-korver.png',
  },
  // 12. Card - Assessment
  {
    icon: ChartIcon,
    title: 'Assessment Report',
    description: 'Get detailed assessment with strengths, weaknesses, and improvement areas.',
    image: '/shooting/card-assessment.png',
  },
  // 13. Shooting - JJ Redick
  {
    icon: TargetIcon,
    title: 'Precision Tracking',
    description: 'Track every angle and measurement with professional-grade accuracy.',
    image: '/shooting/jj-redick-analysis.png',
  },
  // 14. Card - Recommendation
  {
    icon: AIBrainIcon,
    title: 'Smart Drills',
    description: 'Get personalized drill recommendations based on your specific needs.',
    image: '/shooting/card-recommendation.png',
  },
]

const FlipCard = ({ feature }: { feature: typeof features[0] }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="masonry-item"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onTouchStart={() => setIsFlipped(!isFlipped)}
    >
      <div className={`flip-inner ${isFlipped ? 'flipped' : ''}`}>
        {/* Front - Image */}
        <div className="flip-front">
          <img 
            src={feature.image} 
            alt={feature.title}
            loading="lazy"
          />
        </div>
        
        {/* Back - Content */}
        <div className="flip-back">
          <feature.icon className="flip-icon" />
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      </div>
    </div>
  )
}

export default function Features() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="features" className="features-section">
      {/* Section Header */}
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="features-header"
      >
        <span className="features-badge">Powerful Features</span>
        <h2 className="features-title">
          EVERYTHING YOU NEED TO
          <br />
          <span className="gradient-text">PERFECT YOUR SHOT</span>
        </h2>
        <p className="features-subtitle">
          Our comprehensive analysis platform provides all the tools you need to understand, 
          improve, and master your basketball shooting technique.
        </p>
      </motion.div>

      {/* Masonry Grid - PhotoAI style */}
      <div className="masonry-container">
        {features.map((feature, index) => (
          <FlipCard key={`${feature.title}-${index}`} feature={feature} />
        ))}
      </div>

      <style jsx global>{`
        .features-section {
          position: relative;
          padding: 80px 0 100px;
          background: #0a0a0c;
        }

        .features-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 50px;
          padding: 0 20px;
        }

        .features-badge {
          display: inline-block;
          padding: 8px 16px;
          border-radius: 100px;
          background: rgba(255, 107, 53, 0.1);
          border: 1px solid rgba(255, 107, 53, 0.2);
          color: #ff6b35;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 20px;
        }

        .features-title {
          font-size: clamp(28px, 5vw, 48px);
          font-weight: 800;
          color: #fff;
          line-height: 1.1;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }

        .features-subtitle {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Masonry Container - Grid */
        .masonry-container {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 14px;
          width: 100%;
          max-width: 1900px;
          margin: 0 auto;
          padding: 0 20px;
        }

        @media (max-width: 1600px) {
          .masonry-container { grid-template-columns: repeat(6, 1fr); }
        }
        @media (max-width: 1400px) {
          .masonry-container { grid-template-columns: repeat(5, 1fr); }
        }
        @media (max-width: 1100px) {
          .masonry-container { grid-template-columns: repeat(4, 1fr); }
        }
        @media (max-width: 800px) {
          .masonry-container { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 500px) {
          .masonry-container { grid-template-columns: repeat(2, 1fr); }
        }

        /* Masonry Item */
        .masonry-item {
          perspective: 1000px;
          cursor: pointer;
          border-radius: 12px;
          overflow: hidden;
        }
        
        /* Varying heights */
        .masonry-item:nth-child(2n+1) {
          height: 380px;
        }
        
        .masonry-item:nth-child(2n+2) {
          height: 320px;
        }

        .flip-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.5s ease;
          transform-style: preserve-3d;
        }

        .flip-inner.flipped {
          transform: rotateY(180deg);
        }

        .flip-front,
        .flip-back {
          backface-visibility: hidden;
          border-radius: 12px;
          overflow: hidden;
          width: 100%;
          height: 100%;
        }

        .flip-front {
          display: block;
          position: relative;
        }

        .flip-front img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
        }

        .flip-back {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #1a1a2e 0%, #0f0f1a 100%);
          transform: rotateY(180deg);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 16px;
          text-align: center;
          border: 1px solid rgba(255, 107, 53, 0.3);
          box-sizing: border-box;
        }

        .flip-icon {
          width: 32px;
          height: 32px;
          color: #ff6b35;
          margin-bottom: 10px;
        }

        .flip-back h3 {
          font-size: 14px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 8px 0;
        }

        .flip-back p {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.4;
          margin: 0;
        }
      `}</style>
    </section>
  )
}
