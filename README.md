# Harshit Preetam R - Portfolio Website

A beautiful, futuristic, and professional personal portfolio website built with Next.js, React, Three.js, and Framer Motion.

## Features

- 🎨 Modern, elegant design with 3D animations and particle effects
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive (desktop, tablet, mobile)
- ⚡ Smooth scrolling transitions and animations
- 🎯 Interactive 3D hero section with neural network visualization
- 💫 Glowing cursor trail effect
- 🎭 Glass morphism effects
- 🚀 Performance optimized

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

**👉 See `📌_READ_ME_FIRST.txt` for step-by-step deployment instructions!**

Quick steps:
1. Create a GitHub repository (make it public)
2. Push your code to GitHub
3. Import your repository on [Vercel](https://vercel.com)
4. Deploy with default settings

For detailed instructions, see the deployment guides:
- `📌_READ_ME_FIRST.txt` - Quick deployment guide
- `START_HERE_DEPLOY.md` - Comprehensive deployment instructions
- `QUICK_DEPLOY_GUIDE.md` - Alternative methods

## License

This project is open source and available under the [MIT License](LICENSE).


