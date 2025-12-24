import type { Metadata } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
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
  openGraph: {
    title: 'ShotIQ | AI Basketball Shooting Analysis',
    description: 'Elevate your basketball shooting with precision AI analysis.',
    type: 'website',
    locale: 'en_US',
    siteName: 'ShotIQ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ShotIQ | AI Basketball Shooting Analysis',
    description: 'Elevate your basketball shooting with precision AI analysis.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${bebasNeue.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}

