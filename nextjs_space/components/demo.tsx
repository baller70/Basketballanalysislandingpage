'use client'

import React, { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  TrophyIcon,
  TargetIcon,
  LightningIcon,
  ArrowRightIcon,
} from '@/components/icons/basketball-icons'

// Play icon
const PlayIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />
  </svg>
);

// External link icon
const ExternalLinkIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const demoMetrics = [
  { label: 'Release Angle', value: '48°', status: 'good', optimal: '45-55°' },
  { label: 'Elbow Angle', value: '88°', status: 'good', optimal: '85-95°' },
  { label: 'Knee Bend', value: '140°', status: 'good', optimal: '130-150°' },
  { label: 'Release Height', value: '108in', status: 'good', optimal: '100-120in' },
  { label: 'Follow Through', value: '80%', status: 'good', optimal: '75%+' },
  { label: 'Balance', value: '80%', status: 'good', optimal: '75%+' },
]

const matchedPlayers = [
  { name: 'Kevin Durant', team: 'Phoenix Suns', match: '82%', badge: 'High Arc Shot' },
  { name: 'Kyle Korver', team: 'Retired', match: '77%', badge: 'Textbook Form' },
  { name: 'Ray Allen', team: 'Retired', match: '72%', badge: 'Perfect Arc' },
]

export default function Demo() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [activeTab, setActiveTab] = useState<'analysis' | 'comparison'>('analysis')

  return (
    <section id="demo" className="demo-section">
      {/* Decorative elements */}
      <div className="demo-glow-1" />
      <div className="demo-glow-2" />

      <div className="demo-container">
        {/* Section Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="demo-header"
        >
          <span className="demo-badge">Live Demo</span>
          <h2 className="demo-title">
            <span className="text-white">SEE IT IN</span>
            <br />
            <span className="gradient-text">ACTION</span>
          </h2>
          <p className="demo-subtitle">
            Experience the power of AI-driven shot analysis. Here's what your results could look like.
          </p>
        </motion.div>

        {/* Demo Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="demo-card-main"
        >
          {/* Demo Header */}
          <div className="demo-card-header">
            <div className="demo-score-box">
              <div className="demo-score-circle">
                <span className="demo-score-value">78</span>
              </div>
              <div>
                <h3 className="demo-score-title">Overall Score</h3>
                <p className="demo-score-label">Pure Shooter Rating</p>
              </div>
            </div>
            <div className="demo-tabs">
              <button
                onClick={() => setActiveTab('analysis')}
                className={cn('demo-tab', activeTab === 'analysis' && 'active')}
              >
                Analysis
              </button>
              <button
                onClick={() => setActiveTab('comparison')}
                className={cn('demo-tab', activeTab === 'comparison' && 'active')}
              >
                Pro Match
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === 'analysis' ? (
              <motion.div
                key="analysis"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Video Preview Area */}
                <div className="demo-video-wrap">
                  <video
                    className="demo-video"
                    controls
                    playsInline
                    poster=""
                  >
                    <source src="/video/See it in Action Video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Overlay metrics indicators */}
                  <div className="demo-video-badge">
                    <LightningIcon className="w-3 h-3" />
                    AI Processing
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="demo-metrics-grid">
                  {demoMetrics.map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="demo-metric-card"
                    >
                      <div className="demo-metric-value">
                        {metric.value}
                      </div>
                      <div className="demo-metric-label">
                        {metric.label}
                      </div>
                      <div className="demo-metric-status">
                        <span className="demo-metric-dot" />
                        Good
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="comparison"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="demo-comparison"
              >
                {/* Main Match */}
                <div className="demo-match-main">
                  <div className="demo-match-badge">
                    <TrophyIcon className="w-4 h-4" />
                    Best Match
                  </div>
                  <div className="demo-match-player">
                    <div className="demo-match-avatar">
                      🏀
                    </div>
                    <div>
                      <h4 className="demo-match-name">Kevin Durant</h4>
                      <p className="demo-match-team">Phoenix Suns • Small Forward</p>
                      <p className="demo-match-highlight">4x Scoring Champion</p>
                    </div>
                  </div>
                  <div className="demo-match-similarity">
                    <span>Form Similarity</span>
                    <span className="demo-match-percent">82%</span>
                  </div>
                  <div className="demo-match-tags">
                    <span>Similar Release Height</span>
                    <span>High Arc Shot</span>
                    <span>Smooth Follow Through</span>
                  </div>
                </div>

                {/* Other Matches */}
                <div className="demo-matches-other">
                  <h4 className="demo-matches-title">Other Similar Shooters</h4>
                  {matchedPlayers.slice(1).map((player, index) => (
                    <div key={player.name} className="demo-match-item">
                      <div className="demo-match-item-left">
                        <div className="demo-match-item-num">
                          {index + 2}
                        </div>
                        <div>
                          <h5>{player.name}</h5>
                          <p>{player.team}</p>
                        </div>
                      </div>
                      <div className="demo-match-item-right">
                        <div className="demo-match-item-percent">{player.match}</div>
                        <div className="demo-match-item-badge">{player.badge}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* CTA */}
          <div className="demo-cta">
            <Button variant="glow" size="lg" asChild>
              <a href="https://basketball-analysis-rho.vercel.app/results/demo" target="_blank" rel="noopener noreferrer">
                <ExternalLinkIcon className="w-4 h-4 mr-2" />
                View Full Demo
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.location.href = 'https://app.shotiqai.com/signup'}
            >
              Upload Your Shot
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .demo-section {
          position: relative;
          padding: 100px 24px 120px;
          background: hsl(var(--background));
          overflow: hidden;
        }

        .demo-glow-1 {
          position: absolute;
          top: 25%;
          right: 0;
          width: 400px;
          height: 400px;
          background: rgba(255, 107, 53, 0.08);
          border-radius: 50%;
          filter: blur(150px);
          pointer-events: none;
        }

        .demo-glow-2 {
          position: absolute;
          bottom: 25%;
          left: 0;
          width: 300px;
          height: 300px;
          background: rgba(139, 92, 246, 0.08);
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
        }

        .demo-container {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          margin: 0 auto;
        }

        .demo-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 50px;
        }

        .demo-badge {
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

        .demo-title {
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }

        .demo-subtitle {
          font-size: 17px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.7;
        }

        .demo-card-main {
          background: hsl(var(--card));
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 28px;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .demo-card-main {
            padding: 20px;
          }
        }

        .demo-card-header {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 28px;
        }

        .demo-score-box {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .demo-score-circle {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: linear-gradient(135deg, #ff6b35 0%, #ff8f5a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .demo-score-value {
          font-size: 28px;
          font-weight: 800;
          color: #fff;
        }

        .demo-score-title {
          font-size: 18px;
          font-weight: 600;
          color: #fff;
          margin: 0;
        }

        .demo-score-label {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
          margin: 0;
        }

        .demo-tabs {
          display: flex;
          gap: 8px;
        }

        .demo-tab {
          padding: 10px 18px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 500;
          background: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.6);
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .demo-tab:hover {
          color: #fff;
        }

        .demo-tab.active {
          background: #ff6b35;
          color: #fff;
        }

        .demo-video-wrap {
          position: relative;
          aspect-ratio: 16/9;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 16px;
          margin-bottom: 24px;
          overflow: hidden;
        }

        .demo-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .demo-video-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(8px);
          border-radius: 8px;
          font-size: 12px;
          font-weight: 500;
          color: #ff6b35;
        }

        .demo-metrics-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 12px;
        }

        @media (max-width: 1000px) {
          .demo-metrics-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 500px) {
          .demo-metrics-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .demo-metric-card {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 14px;
          padding: 18px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.06);
          transition: border-color 0.2s ease;
        }

        .demo-metric-card:hover {
          border-color: rgba(255, 107, 53, 0.3);
        }

        .demo-metric-value {
          font-size: 28px;
          font-weight: 800;
          color: #ff6b35;
          margin-bottom: 4px;
        }

        .demo-metric-label {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 10px;
        }

        .demo-metric-status {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
          font-size: 11px;
          border-radius: 20px;
        }

        .demo-metric-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #22c55e;
        }

        .demo-comparison {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        @media (max-width: 768px) {
          .demo-comparison {
            grid-template-columns: 1fr;
          }
        }

        .demo-match-main {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 16px;
          padding: 24px;
          border: 1px solid rgba(255, 107, 53, 0.2);
        }

        .demo-match-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #ff6b35;
          font-size: 13px;
          font-weight: 500;
          margin-bottom: 16px;
        }

        .demo-match-player {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }

        .demo-match-avatar {
          width: 72px;
          height: 72px;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(255, 107, 53, 0.2) 0%, rgba(255, 140, 66, 0.1) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 36px;
        }

        .demo-match-name {
          font-size: 20px;
          font-weight: 600;
          color: #fff;
          margin: 0 0 4px;
        }

        .demo-match-team {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
          margin: 0;
        }

        .demo-match-highlight {
          font-size: 12px;
          color: #ff6b35;
          margin: 4px 0 0;
        }

        .demo-match-similarity {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          margin-bottom: 16px;
        }

        .demo-match-similarity span:first-child {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
        }

        .demo-match-percent {
          font-size: 24px;
          font-weight: 800;
          color: #ff6b35;
        }

        .demo-match-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .demo-match-tags span {
          padding: 6px 12px;
          background: rgba(255, 107, 53, 0.1);
          color: #ff6b35;
          font-size: 12px;
          border-radius: 20px;
        }

        .demo-matches-other {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .demo-matches-title {
          font-size: 14px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.6);
          margin: 0 0 8px;
        }

        .demo-match-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          transition: border-color 0.2s ease;
        }

        .demo-match-item:hover {
          border-color: rgba(255, 107, 53, 0.2);
        }

        .demo-match-item-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .demo-match-item-num {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.5);
        }

        .demo-match-item-left h5 {
          font-size: 15px;
          font-weight: 500;
          color: #fff;
          margin: 0;
        }

        .demo-match-item-left p {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.5);
          margin: 0;
        }

        .demo-match-item-right {
          text-align: right;
        }

        .demo-match-item-percent {
          font-size: 18px;
          font-weight: 700;
          color: #ff6b35;
        }

        .demo-match-item-badge {
          font-size: 10px;
          color: rgba(255, 255, 255, 0.5);
        }

        .demo-cta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-top: 32px;
        }
      `}</style>
    </section>
  )
}
