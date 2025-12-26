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
    <footer className="footer-section">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <motion.a
              href="#"
              className="footer-logo"
              whileHover={{ scale: 1.02 }}
            >
              <div className="footer-logo-icon">
                <div className="footer-logo-bg" />
                <div className="footer-logo-emoji">🏀</div>
              </div>
              <div className="footer-logo-text">
                <span className="footer-logo-name">
                  SHOT<span className="text-basketball-orange">IQ</span>
                </span>
              </div>
            </motion.a>
            <p className="footer-desc">
              AI-powered basketball shooting analysis to help players of all levels perfect their shot.
            </p>
            {/* Social Links */}
            <div className="footer-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="footer-social-link"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title} className="footer-links-col">
              <h3 className="footer-links-title">{section.title}</h3>
              <ul className="footer-links-list">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <a href="mailto:hello@shotiq.ai" className="footer-contact-item">
            <Mail className="w-4 h-4" />
            hello@shotiq.ai
          </a>
          <a href="tel:+1234567890" className="footer-contact-item">
            <Phone className="w-4 h-4" />
            +1 (234) 567-890
          </a>
          <span className="footer-contact-item">
            <MapPin className="w-4 h-4" />
            San Francisco, CA
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} ShotIQ. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .footer-section {
          position: relative;
          padding: 80px 24px 32px;
          background: hsl(var(--card));
          overflow: hidden;
        }

        .footer-container {
          position: relative;
          z-index: 10;
          max-width: 1400px;
          margin: 0 auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr repeat(4, 1fr);
          gap: 48px;
          margin-bottom: 48px;
        }

        @media (max-width: 1000px) {
          .footer-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .footer-brand {
            grid-column: span 3;
            margin-bottom: 24px;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }

          .footer-brand {
            grid-column: span 2;
          }
        }

        .footer-brand {
          max-width: 300px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          margin-bottom: 16px;
        }

        .footer-logo-icon {
          position: relative;
          width: 44px;
          height: 44px;
        }

        .footer-logo-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #ff6b35 0%, #ff8f5a 100%);
          border-radius: 12px;
          transform: rotate(3deg);
          transition: transform 0.2s ease;
        }

        .footer-logo:hover .footer-logo-bg {
          transform: rotate(6deg);
        }

        .footer-logo-emoji {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }

        .footer-logo-name {
          font-size: 22px;
          font-weight: 800;
          color: #fff;
          letter-spacing: 0.02em;
        }

        .footer-desc {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.5);
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .footer-socials {
          display: flex;
          gap: 10px;
        }

        .footer-social-link {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.5);
          transition: all 0.2s ease;
        }

        .footer-social-link:hover {
          color: #ff6b35;
          background: rgba(255, 107, 53, 0.1);
        }

        .footer-links-col {
        }

        .footer-links-title {
          font-size: 15px;
          font-weight: 600;
          color: #fff;
          margin: 0 0 20px;
        }

        .footer-links-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .footer-link {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-link:hover {
          color: #ff6b35;
        }

        .footer-contact {
          display: flex;
          flex-wrap: wrap;
          gap: 24px 48px;
          padding: 32px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          margin-bottom: 32px;
        }

        .footer-contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        a.footer-contact-item:hover {
          color: #ff6b35;
        }

        .footer-bottom {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding-top: 32px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-copyright {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.5);
          margin: 0;
        }

        .footer-bottom-links {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .footer-bottom-links a {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-bottom-links a:hover {
          color: #ff6b35;
        }
      `}</style>
    </footer>
  )
}
