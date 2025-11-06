# Harshit Preetam R - Portfolio Website

A modern and visually immersive personal portfolio website built with Next.js, React, and Three.js.
Designed to be fast, elegant, and interactive — with smooth animations, 3D visuals, and responsive layouts across all devices.

## Features

- 🎨 Sleek and futuristic design with smooth 3D and motion effects
- 🌓 Light/Dark theme toggle for better accessibility
- 📱 Fully responsive across desktop, tablet, and mobile
- ⚡ Performance-optimized animations and transitions
- 🎯 Interactive 3D hero section with neural-network visualization
- 💫 Glowing cursor trail and subtle parallax movement
- 🎭 Elegant glass-morphism effects throughout the interface

## Tech Stack

- **Framework:** Next.js 14
- **UI Library:** React 18
- **3D Graphics:** Three.js, @react-three/fiber, @react-three/drei
- **Animations:** Framer Motion, GSAP
- **Styling:** Tailwind CSS
- **Icons:** React Icons, Lucide React
- **TypeScript:** Full type safety

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
.
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section with 3D
│   ├── NeuralNetwork.tsx # 3D neural network component
│   ├── About.tsx        # About section
│   ├── Education.tsx    # Education timeline
│   ├── Projects.tsx     # Projects showcase
│   ├── Technologies.tsx # Skills and technologies
│   ├── Achievements.tsx # Achievements section
│   ├── Contact.tsx      # Contact form
│   ├── Preloader.tsx    # Loading animation
│   ├── CursorTrail.tsx  # Cursor trail effect
│   └── ThemeProvider.tsx # Theme context
├── public/              # Static assets
└── package.json         # Dependencies
```

## Customization

### Update Personal Information

Edit the following files:
- `components/Hero.tsx` - Name, title, contact info
- `components/About.tsx` - About me content
- `components/Education.tsx` - Education details
- `components/Projects.tsx` - Projects list
- `components/Technologies.tsx` - Skills and technologies
- `components/Achievements.tsx` - Achievements
- `components/Contact.tsx` - Contact information

### Theme Colors

Edit `tailwind.config.js` to customize the color scheme and gradients.

## Deployment

The site can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages** (with static export)

### 🚀 Quick Deploy to Vercel

**👉 See `START_HERE.txt` for step-by-step deployment instructions!**

Quick steps:
1. Create a GitHub repository (make it public)
2. Push your code to GitHub
3. Import your repository on [Vercel](https://vercel.com)
4. Deploy with default settings

For detailed instructions, see:
- `START_HERE.txt` - Quick deployment guide
- `DEPLOYMENT.md` - Comprehensive deployment documentation

## License

This project is open source and available under the [MIT License](LICENSE).


