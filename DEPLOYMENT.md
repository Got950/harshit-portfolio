# Deployment Guide

This guide will help you deploy your Harshit Preetam R portfolio website.

## Option 1: Deploy to Vercel (Recommended for Next.js)

Vercel is the easiest and best option for Next.js applications.

### Steps:

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/Got950/your-repo-name.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Sign in with your GitHub account
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js
   - Click "Deploy"
   - Wait for deployment to complete (2-3 minutes)
   - Your site will be live at: `https://your-project-name.vercel.app`

### Custom Domain (Optional)
- Go to your project settings on Vercel
- Navigate to "Domains"
- Add your custom domain (e.g., harshitpreetam.com)

---

## Option 2: Deploy to Netlify

### Steps:

1. **Push to GitHub** (same as above)

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Sign in with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

---

## Option 3: Build and Deploy Manually

### Build for Production:

```bash
# Install dependencies
npm install

# Create production build
npm run build

# Test production build locally
npm start
```

### Deploy Options:

#### A. Deploy to any Node.js hosting (Heroku, Railway, etc.)

1. Create a `Procfile`:
   ```
   web: npm start
   ```

2. Ensure Node.js version in `package.json`:
   ```json
   "engines": {
     "node": "18.x"
   }
   ```

3. Deploy using your hosting platform's instructions

#### B. Export as Static Site

Update `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export', // Enable static export
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig
```

Then build:
```bash
npm run build
```

Upload the `out` folder to any static hosting (GitHub Pages, Firebase Hosting, etc.)

---

## Quick Deploy Commands

### For Vercel (CLI):
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts
```

### For Netlify (CLI):
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

---

## Environment Variables (if needed)

If you add environment variables later:
- **Vercel**: Project Settings → Environment Variables
- **Netlify**: Site Settings → Build & Deploy → Environment Variables

---

## Post-Deployment Checklist

- [ ] Test all links work correctly
- [ ] Verify GitHub and LinkedIn links
- [ ] Test contact form (if backend is added)
- [ ] Check mobile responsiveness
- [ ] Test dark/light mode toggle
- [ ] Verify all sections load properly
- [ ] Check 3D animations work
- [ ] Test navigation smooth scrolling

---

## Troubleshooting

### Build Errors:
- Clear `.next` folder: `rm -rf .next`
- Delete `node_modules`: `rm -rf node_modules`
- Reinstall: `npm install`
- Rebuild: `npm run build`

### Deployment Errors:
- Check Node.js version (should be 18+)
- Ensure all dependencies are in `package.json`
- Check build logs for specific errors

---

## Recommended: Vercel

**Why Vercel?**
- Made by Next.js creators
- Zero configuration
- Automatic HTTPS
- Free custom domains
- Global CDN
- Automatic deployments from GitHub
- Free tier is generous

**Get started**: [vercel.com/new](https://vercel.com/new)

