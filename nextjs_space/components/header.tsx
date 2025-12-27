'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Features', href: '#features' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Demo', href: '#demo' },
  { name: 'Pricing', href: '#pricing' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window?.scrollY > 20 ?? false)
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          'bg-black border-b border-border/50'
        )}
      >
        <div className="section-centered">
          <div className="section-content">
            <nav className="flex items-center justify-between h-16 md:h-20">
              {/* Logo */}
              <motion.a
                href="#"
                className="flex items-center group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Image
                  src="/shotiq-header-logo.png"
                  alt="ShotIQ Logo"
                  width={200}
                  height={60}
                  className="h-12 w-auto"
                  priority
                />
              </motion.a>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-8">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="relative text-sm font-medium text-white hover:text-basketball-orange transition-colors group uppercase tracking-wide"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-basketball-orange group-hover:w-full transition-all duration-300" />
                  </motion.a>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="hidden md:flex items-center gap-3">
                <Button 
                  variant="ghost" 
                  className="text-white hover:bg-white/10 uppercase tracking-wide"
                  onClick={() => window.location.href = 'https://app.shotiqai.com'}
                >
                  Log In
                </Button>
                <Button 
                  variant="glow" 
                  className="group uppercase tracking-wide"
                  onClick={() => window.location.href = 'https://app.shotiqai.com/signup'}
                >
                  <Sparkles className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  Get Started Free
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 lg:hidden"
          >
            <div className="bg-black border-b border-border/50 shadow-xl">
              <div className="section-centered">
                <div className="section-content py-6">
                  <div className="flex flex-col gap-4">
                    {navItems.map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-lg font-medium text-white hover:text-basketball-orange transition-colors py-2 uppercase tracking-wide"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * index }}
                      >
                        {item.name}
                      </motion.a>
                    ))}
                    <div className="flex flex-col gap-3 pt-4 border-t border-border/50">
                      <Button 
                        variant="ghost" 
                        className="w-full justify-center text-white hover:bg-white/10 uppercase tracking-wide"
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          window.location.href = 'https://app.shotiqai.com'
                        }}
                      >
                        Log In
                      </Button>
                      <Button 
                        variant="glow" 
                        className="w-full justify-center uppercase tracking-wide"
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          window.location.href = 'https://app.shotiqai.com/signup'
                        }}
                      >
                        <Sparkles className="w-4 h-4 mr-2" />
                        Get Started Free
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
