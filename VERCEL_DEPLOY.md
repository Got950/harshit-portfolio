# Quick Vercel Deployment Steps

## ✅ Step 1: Create GitHub Repository (Do this first!)

1. Go to [github.com](https://github.com) and sign in with your account (@Got950)
2. Click the "+" icon (top right) → "New repository"
3. Repository name: `harshit-portfolio` (or any name you prefer)
4. Make it **Public** (so Vercel can access it)
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

## ✅ Step 2: Push Code to GitHub

After creating the repository, GitHub will show you commands. But I'll run them for you below.

## ✅ Step 3: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" or "Log In"
3. **Sign in with GitHub** (use the same account as @Got950)
4. Click "Add New Project" or "Import Project"
5. Select your repository: `Got950/harshit-portfolio`
6. Vercel will auto-detect Next.js settings:
   - Framework Preset: Next.js ✅
   - Build Command: `npm run build` ✅
   - Output Directory: `.next` ✅
7. Click "Deploy"
8. Wait 2-3 minutes
9. Your site will be live! 🎉

## 🎯 Your Live URL will be:
`https://harshit-portfolio.vercel.app` (or similar)

## 📝 Note:
After the first deployment, every time you push to GitHub, Vercel will automatically deploy your changes!

