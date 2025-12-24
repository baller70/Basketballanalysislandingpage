# ShotIQ - AI Basketball Shooting Analysis Landing Page

A modern, responsive landing page for an AI-powered basketball shooting analysis application. Built with Next.js 14, Tailwind CSS, and Framer Motion.

## Features

- 🏀 **AI-Powered Analysis** - Upload shooting footage for instant biomechanical analysis
- 📊 **12+ Metrics** - Track joint angles, release point, shot arc, and more
- 🎯 **Pro Comparisons** - See which NBA player your form matches
- 📈 **Progress Tracking** - Monitor improvement over time with detailed charts
- 🏆 **Gamification** - Earn badges, maintain streaks, climb leaderboards

## Tech Stack

- **Framework**: Next.js 14.2.28 (App Router)
- **Styling**: Tailwind CSS 3.3.3
- **Animations**: Framer Motion
- **UI Components**: Radix UI primitives with shadcn/ui
- **Icons**: Lucide React
- **Language**: TypeScript 5.2.2

## Getting Started

### Prerequisites

- Node.js 18+
- Yarn (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd basketball-analysis-landing

# Install dependencies
yarn install

# Start development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

### Build for Production

```bash
yarn build
yarn start
```

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles and Tailwind config
│   ├── layout.tsx       # Root layout with fonts
│   └── page.tsx         # Main landing page
├── components/
│   ├── ui/
│   │   └── button.tsx   # Reusable button component
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section with upload
│   ├── Features.tsx     # Features grid
│   ├── HowItWorks.tsx   # Step-by-step process
│   ├── Demo.tsx         # Interactive demo section
│   ├── Testimonials.tsx # User testimonials
│   ├── Pricing.tsx      # Pricing plans
│   ├── CTA.tsx          # Call-to-action section
│   └── Footer.tsx       # Footer with links
├── lib/
│   └── utils.ts         # Utility functions
└── public/              # Static assets
```

## Design System

### Colors

- **Primary (Basketball Orange)**: `#FF6B35`
- **Glow**: `#FF8C42`
- **Background**: Dark theme with subtle gradients
- **Text**: White with muted gray variations

### Typography

- **Display Font**: Bebas Neue (headlines)
- **Body Font**: Inter (content)

### Components

All components use:
- Glass morphism effects
- Smooth animations on scroll
- Responsive design (mobile-first)
- Accessible markup

## Customization

### Changing Colors

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --primary: 20 100% 57%;  /* Orange hue */
  --background: 0 0% 3%;   /* Near black */
  /* ... */
}
```

### Adding Sections

1. Create a new component in `components/`
2. Import and add to `app/page.tsx`
3. Follow existing patterns for animations and styling

## Deployment

### Vercel (Recommended)

```bash
vercel deploy
```

### Abacus AI

This project is compatible with Abacus AI's hosting platform:
- Uses supported Next.js version (14.2.28)
- All dependencies are Abacus AI compatible
- No Python/Flask backend required

## License

MIT License - feel free to use for personal or commercial projects.

## Credits

- Design inspired by [PhotoAI.com](https://photoai.com)
- Demo data from [Basketball Analysis App](https://basketball-analysis-rho.vercel.app)

