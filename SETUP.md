# Setup Instructions

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization Guide

### Update Personal Information

1. **Name and Title** - Edit `components/Hero.tsx`:
   - Line 63: Update name
   - Line 68: Update subtitle/role
   - Lines 73-93: Update contact information

2. **About Section** - Edit `components/About.tsx`:
   - Lines 24-38: Update about me text

3. **Education** - Edit `components/Education.tsx`:
   - Lines 20-35: Update education array with your details

4. **Projects** - Edit `components/Projects.tsx`:
   - Lines 21-107: Update projects array with your projects
   - Add GitHub links, demo links, achievements

5. **Skills** - Edit `components/Technologies.tsx`:
   - Lines 25-44: Update skills array
   - Lines 47-56: Update specializations
   - Lines 142-153: Update frameworks list

6. **Achievements** - Edit `components/Achievements.tsx`:
   - Lines 22-52: Update achievements array

7. **Contact Info** - Edit `components/Contact.tsx`:
   - Lines 27-45: Update contact information array

8. **Meta Tags** - Edit `app/layout.tsx`:
   - Lines 13-16: Update title and description

### Theme Customization

Edit `tailwind.config.js` to customize:
- Color scheme (lines 10-20)
- Gradients
- Animation speeds
- Spacing

### 3D Animation

Edit `components/NeuralNetwork.tsx` to customize:
- Number of nodes (line 14)
- Node distribution
- Connection logic
- Rotation speed

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import repository on [Vercel](https://vercel.com)
3. Deploy with default settings

### Deploy to Netlify

1. Push your code to GitHub
2. Import repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

### Build Locally

```bash
npm run build
npm start
```

## Troubleshooting

### Icons Not Showing
- Ensure `react-icons` is installed: `npm install react-icons`

### 3D Animation Not Working
- Ensure Three.js dependencies are installed: `npm install three @react-three/fiber @react-three/drei`

### Theme Toggle Not Working
- Clear browser localStorage: `localStorage.removeItem('theme')`
- Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)

### Build Errors
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

- Images should be optimized (use Next.js Image component)
- Limit particle count for slower devices
- Reduce animation complexity on mobile


