'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Twitter, Instagram, Youtube, Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react'

const footerLinks = {
  product: {
    title: 'Product',
    links: [
      { name: 'Features', href: '#features' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Demo', href: '#demo' },
      { name: 'API', href: '#' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Partners', href: '#' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { name: 'Help Center', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Tutorials', href: '#' },
      { name: 'Contact', href: '#' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' },
    ],
  },
}

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
]

export default function Footer() {
  return (
    <footer className="relative pt-16 md:pt-24 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-black/50" />
      <div className="absolute inset-0 court-overlay opacity-10" />

      <div className="relative z-10 section-centered">
        <div className="section-content">
          {/* Main Footer Content */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-12 mb-12 md:mb-16">
            {/* Brand Column */}
            <div className="col-span-2">
              <motion.a
                href="#"
                className="flex items-center gap-2 group mb-4"
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative w-10 h-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-basketball-orange to-basketball-glow rounded-xl rotate-3 group-hover:rotate-6 transition-transform" />
                  <div className="absolute inset-0 flex items-center justify-center text-2xl">
                    🏀
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-xl tracking-wide text-white">
                    SHOT<span className="text-basketball-orange">IQ</span>
                  </span>
                </div>
              </motion.a>
              <p className="text-sm text-muted-foreground mb-6 max-w-xs">
                AI-powered basketball shooting analysis to help players of all levels perfect their shot.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-muted/30 flex items-center justify-center text-muted-foreground hover:text-basketball-orange hover:bg-basketball-orange/10 transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.values(footerLinks).map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold text-white mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-basketball-orange transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-6 md:gap-12 py-8 border-t border-border/50 mb-8">
            <a
              href="mailto:hello@shotiq.ai"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-basketball-orange transition-colors"
            >
              <Mail className="w-4 h-4" />
              hello@shotiq.ai
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-basketball-orange transition-colors"
            >
              <Phone className="w-4 h-4" />
              +1 (234) 567-890
            </a>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              San Francisco, CA
            </span>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} ShotIQ. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-basketball-orange transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-basketball-orange transition-colors">
                Terms
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-basketball-orange transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

