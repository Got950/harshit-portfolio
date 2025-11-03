# Deployment Checklist

Use this checklist to deploy your portfolio successfully.

## Before You Deploy

- [x] Portfolio code is complete
- [x] All components working
- [x] Responsive design tested
- [x] No API keys or secrets in code
- [x] Git repository initialized
- [x] All files committed

## Deployment Steps

### Step 1: GitHub Repository

- [ ] Go to https://github.com/new
- [ ] Create repository: `harshit-portfolio`
- [ ] Make it PUBLIC
- [ ] Don't add README, .gitignore, or license
- [ ] Click "Create repository"

### Step 2: Push to GitHub

- [ ] Run: `git remote add origin https://github.com/Got950/harshit-portfolio.git`
- [ ] Run: `git branch -M main`
- [ ] Run: `git push -u origin main`
- [ ] Verify code is on GitHub

### Step 3: Deploy on Vercel

- [ ] Go to https://vercel.com
- [ ] Sign in with GitHub (@Got950)
- [ ] Click "Add New Project"
- [ ] Import `Got950/harshit-portfolio`
- [ ] Verify settings:
  - Framework: Next.js
  - Build Command: npm run build
  - Output Directory: .next
- [ ] Click "Deploy"
- [ ] Wait for deployment (2-3 minutes)

### Step 4: Test Your Site

- [ ] Visit your live URL
- [ ] Test navigation
- [ ] Check all sections load
- [ ] Test mobile responsiveness
- [ ] Test dark/light theme
- [ ] Verify all links work

### Step 5: Share Your Portfolio

- [ ] Update resume/CV with portfolio link
- [ ] Update LinkedIn profile
- [ ] Share with potential employers
- [ ] Celebrate! 🎉

## Auto-Deploy Setup

After first deployment:
- [x] Auto-deploy is active
- [x] Push to GitHub = automatic deployment
- [x] Updates go live in ~2 minutes

## Your Live URLs

- **Production**: https://harshit-portfolio.vercel.app
- **GitHub**: https://github.com/Got950/harshit-portfolio
- **Custom Domain**: (optional, add in Vercel settings)

## Troubleshooting

If deployment fails:
1. Check Vercel deployment logs
2. Verify all dependencies in package.json
3. Make sure GitHub repo is PUBLIC
4. Try building locally first: `npm run build`

## Next Steps

After deployment:
- Monitor Vercel dashboard for errors
- Set up custom domain (optional)
- Add Google Analytics (optional)
- Add contact form backend (optional)
- Keep your portfolio updated!

---

**Ready to deploy?** Read `START_HERE.txt` for detailed instructions!

