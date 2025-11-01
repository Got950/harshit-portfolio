# Customization Checklist

Before deploying your portfolio, please update the following placeholders:

## ⚠️ Required Updates

### 1. GitHub Username
**Files to update:**
- `components/Header.tsx` (lines 78, 135)
- `components/Contact.tsx` (lines 59-60)

**Change:** Replace `yourusername` with your actual GitHub username

**Example:**
```tsx
// Before
href="https://github.com/yourusername"

// After
href="https://github.com/harshit-preetam-r"
```

### 2. Personal Website URL (Optional)
**File:** `components/Contact.tsx`

If you have a personal website, add it to the contact info array.

### 3. Project Links
**File:** `components/Projects.tsx`

Add actual GitHub and demo links to your projects:
- Update `github` field with repository URLs
- Update `demo` field with live demo URLs (if available)

### 4. Review All Content
Double-check all sections have your accurate information:
- ✅ Hero section (name, title, contact info)
- ✅ About section (bio text)
- ✅ Education (degrees, dates, GPA)
- ✅ Projects (descriptions, technologies, achievements)
- ✅ Skills and technologies
- ✅ Achievements and certifications
- ✅ Contact information

## ✅ Features Implemented

- [x] Modern, futuristic design with 3D animations
- [x] Dark/Light mode toggle
- [x] Fully responsive design
- [x] Smooth scrolling transitions
- [x] 3D neural network hero section
- [x] Interactive project cards with hover effects
- [x] Animated education timeline
- [x] Skills cloud with animated icons
- [x] Contact form
- [x] Cursor trail effect
- [x] Preloader animation
- [x] Particle background effects
- [x] Glass morphism UI elements

## 🚀 Ready to Deploy

Once you've updated the placeholders above, you're ready to deploy!

1. Test locally: `npm run dev`
2. Build for production: `npm run build`
3. Deploy to Vercel, Netlify, or your preferred platform


