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
} from '@/components/icons/BasketballIcons'

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
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section id="demo" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/5 via-background to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-basketball-orange/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-[120px]" />

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
              Live Demo
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display tracking-tight mb-4 md:mb-6">
              <span className="text-white">SEE IT IN</span>
              <br />
              <span className="gradient-text">ACTION</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Experience the power of AI-driven shot analysis. Here's what your results could look like.
            </p>
          </motion.div>

          {/* Demo Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            <div className="glass rounded-3xl p-4 md:p-8 overflow-hidden">
              {/* Demo Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 md:mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-basketball-orange to-basketball-glow flex items-center justify-center">
                    <span className="text-2xl font-display text-white">78</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Overall Score</h3>
                    <p className="text-sm text-muted-foreground">Pure Shooter Rating</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveTab('analysis')}
                    className={cn(
                      'px-4 py-2 rounded-lg text-sm font-medium transition-all',
                      activeTab === 'analysis'
                        ? 'bg-basketball-orange text-white'
                        : 'bg-muted/50 text-muted-foreground hover:text-white'
                    )}
                  >
                    Analysis
                  </button>
                  <button
                    onClick={() => setActiveTab('comparison')}
                    className={cn(
                      'px-4 py-2 rounded-lg text-sm font-medium transition-all',
                      activeTab === 'comparison'
                        ? 'bg-basketball-orange text-white'
                        : 'bg-muted/50 text-muted-foreground hover:text-white'
                    )}
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
                    {/* Video/Image Preview Area */}
                    <div className="relative aspect-video bg-muted/30 rounded-2xl mb-6 md:mb-8 overflow-hidden group">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-20 h-20 rounded-full bg-basketball-orange/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                            <PlayIcon className="w-8 h-8 text-basketball-orange ml-1" />
                          </div>
                          <p className="text-muted-foreground">Watch Demo Analysis</p>
                        </div>
                      </div>
                      
                      {/* Overlay metrics indicators */}
                      <div className="absolute top-4 right-4 space-y-2">
                        <div className="glass px-3 py-1.5 rounded-lg text-xs font-medium text-basketball-orange">
                          <LightningIcon className="w-3 h-3 inline mr-1" />
                          AI Processing
                        </div>
                      </div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
                      {demoMetrics.map((metric, index) => (
                        <motion.div
                          key={metric.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="glass rounded-xl p-4 text-center hover:border-basketball-orange/30 transition-colors"
                        >
                          <div className="text-2xl md:text-3xl font-display text-basketball-orange mb-1">
                            {metric.value}
                          </div>
                          <div className="text-xs text-muted-foreground mb-2">
                            {metric.label}
                          </div>
                          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 text-[10px]">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
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
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Main Match */}
                      <div className="glass rounded-2xl p-6 border border-basketball-orange/20">
                        <div className="flex items-center gap-2 text-basketball-orange text-sm font-medium mb-4">
                          <TrophyIcon className="w-4 h-4" />
                          Best Match
                        </div>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-basketball-orange/20 to-basketball-glow/20 flex items-center justify-center text-4xl">
                            🏀
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold text-white">Kevin Durant</h4>
                            <p className="text-sm text-muted-foreground">Phoenix Suns • Small Forward</p>
                            <p className="text-xs text-basketball-orange mt-1">4x Scoring Champion</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-xl bg-muted/30">
                          <span className="text-sm text-muted-foreground">Form Similarity</span>
                          <span className="text-2xl font-display text-basketball-orange">82%</span>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className="px-3 py-1 rounded-full bg-basketball-orange/10 text-basketball-orange text-xs">
                            Similar Release Height
                          </span>
                          <span className="px-3 py-1 rounded-full bg-basketball-orange/10 text-basketball-orange text-xs">
                            High Arc Shot
                          </span>
                          <span className="px-3 py-1 rounded-full bg-basketball-orange/10 text-basketball-orange text-xs">
                            Smooth Follow Through
                          </span>
                        </div>
                      </div>

                      {/* Other Matches */}
                      <div className="space-y-4">
                        <h4 className="text-sm font-medium text-muted-foreground">Other Similar Shooters</h4>
                        {matchedPlayers.slice(1).map((player, index) => (
                          <div
                            key={player.name}
                            className="glass rounded-xl p-4 flex items-center justify-between hover:border-basketball-orange/20 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-lg font-display text-muted-foreground">
                                {index + 2}
                              </div>
                              <div>
                                <h5 className="font-medium text-white">{player.name}</h5>
                                <p className="text-xs text-muted-foreground">{player.team}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-display text-basketball-orange">{player.match}</div>
                              <div className="text-[10px] text-muted-foreground">{player.badge}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* CTA */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="glow" size="lg" asChild>
                  <a href="https://basketball-analysis-rho.vercel.app/results/demo" target="_blank" rel="noopener noreferrer">
                    <ExternalLinkIcon className="w-4 h-4 mr-2" />
                    View Full Demo
                  </a>
                </Button>
                <Button variant="outline" size="lg">
                  Upload Your Shot
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
