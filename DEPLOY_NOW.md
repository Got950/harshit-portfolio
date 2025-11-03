# 🚀 Deploy Your Portfolio in 5 Minutes

## Option 1: Deploy via Vercel CLI (FASTEST - No GitHub Needed!)

### Step 1: Install Vercel CLI
Open PowerShell as Administrator and run:
```powershell
npm install -g vercel
```

### Step 2: Deploy
In your project folder, run:
```powershell
vercel
```

Follow the prompts:
- ✅ No changes to existing settings
- ✅ Your project name: `harshit-portfolio`
- ✅ Deployment path: `.` (current directory)

### Step 3: Get Your Live URL
After deployment, Vercel will give you:
- **Production URL**: `https://harshit-portfolio.vercel.app`
- **Preview URL**: `https://harshit-portfolio-[hash].vercel.app`

**That's it! Your site is now live! 🎉**

---

## Option 2: Deploy via Vercel Website (Recommended)

### Step 1: Push to GitHub First

1. **Go to GitHub**: https://github.com/new
2. **Create new repository**:
   - Name: `harshit-portfolio`
   - Make it **Public**
   - **DO NOT** check "Initialize with README"
   - Click "Create repository"

3. **Push your code** (run these commands locally):
```powershell
git remote add origin https://github.com/YOUR_USERNAME/harshit-portfolio.git
git branch -M main
git push -u origin main
```
*(Replace YOUR_USERNAME with your actual GitHub username)*

### Step 2: Deploy on Vercel

1. **Go to Vercel**: https://vercel.com
2. **Sign in** with GitHub
3. **Click** "Add New Project"
4. **Select** your repository: `YOUR_USERNAME/harshit-portfolio`
5. **Click** "Deploy"

Vercel will automatically:
- ✅ Detect Next.js
- ✅ Build your project
- ✅ Deploy to production

**Wait 2-3 minutes and your site will be live! 🎉**

---

## Option 3: Deploy via Netlify (Alternative)

### Step 1: Install Netlify CLI
```powershell
npm install -g netlify-cli
```

### Step 2: Deploy
```powershell
netlify deploy --prod
```

Follow the prompts to create your site.

---

## 📝 After Deployment

Your portfolio will be live at a URL like:
- **Vercel**: `https://harshit-portfolio.vercel.app`
- **Netlify**: `https://harshit-portfolio.netlify.app`

## 🔄 Auto-Deploy

After the first deployment:
- **Vercel**: Automatically redeploys when you push to GitHub
- **Netlify**: Automatically redeploys when you push to GitHub

Just push your changes and your site updates automatically!

---

## ❓ Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **GitHub**: https://github.com
- **Netlify Docs**: https://docs.netlify.com

