# 🎯 START HERE - Deploy Your Portfolio

Follow these **EXACT** steps to get your portfolio live:

---

## ⚡ METHOD 1: Vercel Website (Recommended - 5 minutes)

### Step 1: Create GitHub Repository

1. Open: **https://github.com/new**
2. Repository name: **`harshit-portfolio`**
3. Description: *Portfolio website* (optional)
4. Make it: **Public** ✅
5. **DO NOT** check any boxes:
   - ❌ Add a README file
   - ❌ Add .gitignore
   - ❌ Choose a license
6. Click: **"Create repository"**

### Step 2: Push Your Code to GitHub

**Open PowerShell in your project folder** and run:

```powershell
git remote add origin https://github.com/Got950/harshit-portfolio.git
git branch -M main
git push -u origin main
```

**If it asks for credentials:**
- Use your GitHub username and a **Personal Access Token** (not password)
- Get token here: https://github.com/settings/tokens
- Create token with `repo` permissions

### Step 3: Deploy on Vercel

1. Go to: **https://vercel.com**
2. Click: **"Sign Up"** (or Log In)
3. **Sign in with GitHub** (use @Got950 account)
4. Click: **"Add New Project"**
5. Find and select: **`Got950/harshit-portfolio`**
6. Click: **"Import"**
7. Vercel auto-detects everything:
   - Framework: Next.js ✅
   - Build Command: `npm run build` ✅
   - Output Directory: `.next` ✅
8. Click: **"Deploy"**
9. Wait 2-3 minutes ⏳
10. **Done! Your site is live!** 🎉

### Your Live URL

Vercel will show you: **`https://harshit-portfolio.vercel.app`**

You can customize this in Vercel settings!

---

## 🚀 METHOD 2: Vercel CLI (If you have Node.js installed)

### Step 1: Install Vercel CLI

```powershell
npm install -g vercel
```

### Step 2: Deploy

```powershell
vercel
```

Follow the prompts:
- Log in with GitHub
- Link to existing project or create new
- Deploy!

---

## 🧪 TEST YOUR DEPLOYMENT

After deployment:

1. Visit your live URL
2. Test these sections:
   - ✅ Hero section loads
   - ✅ Navigation works
   - ✅ Projects section
   - ✅ Contact info
   - ✅ Theme toggle
   - ✅ Mobile responsive

---

## 🔄 UPDATING YOUR SITE

After the first GitHub deployment, updating is easy:

```powershell
git add .
git commit -m "Update portfolio"
git push
```

Vercel **automatically** redeploys in ~2 minutes! 🎯

---

## 🆘 TROUBLESHOOTING

### "Build Failed"
- Check Vercel logs for errors
- Make sure all dependencies in `package.json` are committed
- Try `npm install` locally first

### "Repository Not Found"
- Make sure the GitHub repo is **Public**
- Check you're signed in to the correct GitHub account on Vercel

### "Git Push Failed"
- Use a Personal Access Token instead of password
- Make sure you've accepted the GitHub invitation (if it's a private org repo)

### "404 Page Not Found"
- Check your route structure
- Make sure `app/page.tsx` exists

---

## ✅ CHECKLIST

Before deploying, make sure:
- [x] All your personal info is updated in components
- [x] GitHub links are correct (currently pointing to Got950)
- [x] Contact info is accurate
- [x] All projects have correct descriptions

---

## 📞 NEED HELP?

- **Vercel Docs**: https://vercel.com/docs
- **Vercel Support**: https://vercel.com/support
- **Next.js Docs**: https://nextjs.org/docs

---

## 🎉 YOU'RE READY!

Your portfolio is production-ready and will look amazing when deployed!

**Good luck!** 🚀

