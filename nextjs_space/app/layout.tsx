import type { Metadata } from 'next'
import { Saira, Bebas_Neue } from 'next/font/google'
import './globals.css'

const saira = Saira({
  subsets: ['latin'],
  variable: '--font-saira',
  weight: ['300', '400', '500', '600', '700'],
})

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
})

export const metadata: Metadata = {
  title: 'ShotIQ | AI Basketball Shooting Analysis',
  description: 'Elevate your basketball shooting with precision AI analysis. Upload your shot footage and receive detailed biomechanical feedback, personalized recommendations, and progress tracking.',
  keywords: ['basketball', 'shooting analysis', 'AI', 'sports analytics', 'shot form', 'biomechanics', 'training'],
  authors: [{ name: 'ShotIQ' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'ShotIQ | AI Basketball Shooting Analysis',
    description: 'Elevate your basketball shooting with precision AI analysis.',
    type: 'website',
    locale: 'en_US',
    siteName: 'ShotIQ',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ShotIQ | AI Basketball Shooting Analysis',
    description: 'Elevate your basketball shooting with precision AI analysis.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js"></script>
      </head>
      <body className={`${saira.variable} ${bebasNeue.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
