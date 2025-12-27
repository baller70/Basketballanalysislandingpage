'use client'

import React, { useState, useRef, useCallback } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  UploadIcon,
  LightningIcon,
  TargetIcon,
  ChartIcon,
  ArrowRightIcon,
  CheckIcon,
} from '@/components/icons/basketball-icons'
import BackgroundGrid from '@/components/background-grid'

// Play icon for upload button
const PlayIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />
  </svg>
);

// Sparkles icon for badge
const SparklesIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3 L13 8 L18 9 L13 10 L12 15 L11 10 L6 9 L11 8 Z" />
    <path d="M5 19 L5.5 21 L7 20.5 L6.5 22 L8 22.5 L6.5 23 L7 24.5 L5.5 24 L5 26 L4.5 24 L3 24.5 L3.5 23 L2 22.5 L3.5 22 L3 20.5 L4.5 21 Z" transform="scale(0.6) translate(1, 1)" />
    <path d="M18 16 L18.3 17.2 L19.5 17.5 L18.3 17.8 L18 19 L17.7 17.8 L16.5 17.5 L17.7 17.2 Z" />
  </svg>
);

const stats = [
  { value: '50K+', label: 'Shots Analyzed' },
  { value: '98%', label: 'Accuracy Rate' },
  { value: '12+', label: 'Metrics Tracked' },
  { value: '4.9★', label: 'User Rating' },
]

const quickFeatures = [
  { icon: LightningIcon, text: 'Instant AI Analysis' },
  { icon: TargetIcon, text: 'Precision Metrics' },
  { icon: ChartIcon, text: 'Track Progress' },
]

export default function Hero() {
  const [isDragging, setIsDragging] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const files = e?.dataTransfer?.files ?? []
    if (files.length > 0) {
      handleFile(files[0])
    }
  }, [])

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e?.target?.files ?? []
    if (files && files.length > 0) {
      handleFile(files[0])
    }
  }, [])

  const handleFile = (file: File) => {
    if (file?.type?.startsWith('video/') || file?.type?.startsWith('image/')) {
      setUploadedFile(file)
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
    }
  }

  return (
    <section
      ref={containerRef}
      className="hero-section"
    >
      {/* Animated Photo Grid Background - Hero Only */}
      <BackgroundGrid />

      {/* Content */}
      <motion.div style={{ y, opacity }} className="hero-content-wrap">
        <div className="hero-content">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-badge"
          >
            <SparklesIcon className="w-4 h-4 text-basketball-orange" />
            <span className="uppercase tracking-wide">AI-Powered Shot Analysis</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hero-title"
          >
            <span className="text-white">ELEVATE YOUR</span>
            <br />
            <span className="gradient-text">BASKETBALL SHOT</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-subtitle"
          >
            Upload your shooting footage and get instant AI-powered biomechanical analysis. 
            Receive detailed metrics, personalized recommendations, and track your improvement over time.
          </motion.p>

          {/* Quick Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hero-features"
          >
            {quickFeatures.map((feature) => (
              <div key={feature.text} className="hero-feature">
                <feature.icon className="w-4 h-4 text-basketball-orange" />
                <span>{feature.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Upload Zone */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hero-upload-wrap"
          >
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef?.current?.click?.()}
              className={cn(
                'hero-upload-zone',
                isDragging && 'dragging',
                previewUrl && 'has-preview'
              )}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="video/*,image/*"
                onChange={handleFileChange}
                className="hidden"
              />

              {previewUrl ? (
                <div className="hero-upload-preview">
                  {uploadedFile?.type?.startsWith('video/') ? (
                    <video
                      src={previewUrl}
                      className="hero-preview-media"
                      controls
                    />
                  ) : (
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="hero-preview-media"
                    />
                  )}
                  <div className="hero-preview-info">
                    <CheckIcon className="w-5 h-5" />
                    <span>{uploadedFile?.name ?? ''}</span>
                  </div>
                  <Button 
                    variant="glow" 
                    size="lg" 
                    className="mt-2"
                    onClick={() => alert('Upload your video to start analysis! Beta launching soon.')}
                  >
                    <SparklesIcon className="w-5 h-5 mr-2" />
                    Analyze My Shot
                  </Button>
                </div>
              ) : (
                <div className="hero-upload-content">
                  <motion.div
                    className="hero-upload-icon"
                    animate={{ y: isDragging ? -10 : 0 }}
                  >
                    <UploadIcon className="w-10 h-10 text-basketball-orange" />
                  </motion.div>
                  <div className="hero-upload-text">
                    <p className="hero-upload-title uppercase">
                      Drop your video or image here
                    </p>
                    <p className="hero-upload-hint">
                      or click to browse • MP4, MOV, JPG, PNG supported
                    </p>
                  </div>
                  <Button 
                    variant="glow" 
                    size="lg" 
                    className="mt-2 uppercase tracking-wide"
                    onClick={() => alert('Click to upload your shot video! Beta launching soon - sign up for early access.')}
                  >
                    <PlayIcon className="w-5 h-5 mr-2" />
                    Upload & Analyze
                  </Button>
                </div>
              )}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="hero-stats"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="hero-stat"
              >
                <div className="hero-stat-value">
                  {stat.value}
                </div>
                <div className="hero-stat-label">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="hero-scroll-indicator"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="hero-scroll-content"
            >
              <span>Scroll to explore</span>
              <ArrowRightIcon className="w-4 h-4 rotate-90" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <style jsx global>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding-top: 180px;
          background: hsl(var(--background));
        }

        .hero-content-wrap {
          position: relative;
          z-index: 2;
          width: 100%;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 100px;
          background: rgba(255, 107, 53, 0.1);
          border: 1px solid rgba(255, 107, 53, 0.25);
          margin-bottom: 28px;
        }

        .hero-badge span {
          font-size: 14px;
          font-weight: 600;
          color: #ff6b35;
        }

        .hero-title {
          font-size: clamp(36px, 7vw, 72px);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin-bottom: 24px;
        }

        .hero-subtitle {
          font-size: clamp(16px, 2vw, 19px);
          color: rgb(255, 255, 255);
          line-height: 1.7;
          max-width: 650px;
          margin-bottom: 32px;
        }

        .hero-features {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px 28px;
          margin-bottom: 40px;
        }

        .hero-feature {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: rgb(255, 255, 255);
        }

        .hero-upload-wrap {
          width: 100%;
          max-width: 600px;
          margin-bottom: 48px;
        }

        .hero-upload-zone {
          position: relative;
          padding: 48px 32px;
          border-radius: 24px;
          background: rgba(255, 107, 53, 0.04);
          border: 2px dashed rgba(255, 107, 53, 0.6);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .hero-upload-zone:hover,
        .hero-upload-zone.dragging {
          border-color: rgba(255, 107, 53, 0.8);
          background: rgba(255, 107, 53, 0.08);
        }

        .hero-upload-zone.dragging {
          transform: scale(1.02);
        }

        .hero-upload-zone.has-preview {
          border-style: solid;
          border-color: rgba(255, 107, 53, 0.7);
        }

        .hero-upload-content,
        .hero-upload-preview {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .hero-upload-icon {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          background: rgba(255, 107, 53, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-upload-title {
          font-size: 20px;
          font-weight: 600;
          color: #fff;
          margin: 0;
        }

        .hero-upload-hint {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.5);
          margin: 0;
        }

        .hero-preview-media {
          width: 100%;
          max-height: 200px;
          border-radius: 12px;
          object-fit: cover;
        }

        .hero-preview-info {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #ff6b35;
          font-weight: 500;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          width: 100%;
          max-width: 700px;
        }

        @media (max-width: 600px) {
          .hero-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }

        .hero-stat {
          text-align: center;
        }

        .hero-stat-value {
          font-size: clamp(24px, 4vw, 36px);
          font-weight: 800;
          color: #ff6b35;
          margin-bottom: 4px;
        }

        .hero-stat-label {
          font-size: 13px;
          color: rgb(255, 255, 255);
        }

        .hero-scroll-indicator {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
        }

        .hero-scroll-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.4);
        }

        .hero-scroll-content span {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
        }
      `}</style>
    </section>
  )
}
