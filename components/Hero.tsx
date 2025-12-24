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
  StarFilledIcon,
} from '@/components/icons/BasketballIcons'

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
    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleFile(files[0])
    }
  }, [])

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      handleFile(files[0])
    }
  }, [])

  const handleFile = (file: File) => {
    if (file.type.startsWith('video/') || file.type.startsWith('image/')) {
      setUploadedFile(file)
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
    }
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95" />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-basketball-orange/20 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-basketball-glow/15 rounded-full blur-[120px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Court pattern overlay */}
      <div className="absolute inset-0 court-overlay opacity-30" />

      {/* Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 w-full">
        <div className="section-centered">
          <div className="section-content">
            <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-basketball-orange/10 border border-basketball-orange/20 mb-6 md:mb-8"
              >
                <SparklesIcon className="w-4 h-4 text-basketball-orange" />
                <span className="text-sm font-medium text-basketball-orange">
                  AI-Powered Shot Analysis
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display tracking-tight mb-4 md:mb-6"
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
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 md:mb-10 px-4"
              >
                Upload your shooting footage and get instant AI-powered biomechanical analysis. 
                Receive detailed metrics, personalized recommendations, and track your improvement over time.
              </motion.p>

              {/* Quick Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 md:mb-12"
              >
                {quickFeatures.map((feature, index) => (
                  <div
                    key={feature.text}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
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
                className="w-full max-w-2xl mb-8 md:mb-12"
              >
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={cn(
                    'upload-zone relative rounded-2xl p-8 md:p-12 cursor-pointer transition-all duration-300',
                    isDragging && 'dragging scale-[1.02]',
                    previewUrl && 'border-basketball-orange/50'
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
                    <div className="flex flex-col items-center gap-4">
                      {uploadedFile?.type.startsWith('video/') ? (
                        <video
                          src={previewUrl}
                          className="w-full max-h-48 rounded-lg object-cover"
                          controls
                        />
                      ) : (
                        <img
                          src={previewUrl}
                          alt="Preview"
                          className="w-full max-h-48 rounded-lg object-cover"
                        />
                      )}
                      <div className="flex items-center gap-2 text-basketball-orange">
                        <CheckIcon className="w-5 h-5" />
                        <span className="font-medium">{uploadedFile?.name}</span>
                      </div>
                      <Button variant="glow" size="lg" className="mt-2">
                        <SparklesIcon className="w-5 h-5 mr-2" />
                        Analyze My Shot
                      </Button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-4">
                      <motion.div
                        className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-basketball-orange/10 flex items-center justify-center"
                        animate={{ y: isDragging ? -10 : 0 }}
                      >
                        <UploadIcon className="w-8 h-8 md:w-10 md:h-10 text-basketball-orange" />
                      </motion.div>
                      <div className="text-center">
                        <p className="text-lg md:text-xl font-semibold text-white mb-2">
                          Drop your video or image here
                        </p>
                        <p className="text-sm text-muted-foreground">
                          or click to browse • MP4, MOV, JPG, PNG supported
                        </p>
                      </div>
                      <Button variant="glow" size="lg" className="mt-2">
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
                className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 w-full max-w-3xl"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl md:text-3xl lg:text-4xl font-display text-basketball-orange mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground">
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
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex flex-col items-center gap-2 text-muted-foreground"
                >
                  <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
                  <ArrowRightIcon className="w-4 h-4 rotate-90" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
