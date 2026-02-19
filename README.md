# रोमानियासमाचार - Romania News Website

A pixel-perfect replica of the Romania News website built with Next.js 14, TypeScript, and Tailwind CSS.

## ✨ Design Features

This is an **EXACT replica** of the provided design with:

- ✅ **Rubik Font** for English text
- ✅ **Noto Sans Devanagari** for Hindi/Devanagari text
- ✅ **Black top bar** with weather, date, and social icons
- ✅ **Hero header** with background image overlay
- ✅ **Clean white navigation** with blue hover states
- ✅ **4-column responsive news grid**
- ✅ **Fixed sidebar buttons** on desktop
- ✅ **Exact color scheme** matching the original
- ✅ **Smooth hover animations**
- ✅ **Fully responsive** design

## 🎨 Color Palette

```css
Black: #000000 (top bar)
Blue: #0066cc (links, hover states)
Gray: #1a1a1a (text)
White: #ffffff (backgrounds)
```

## 🚀 Quick Start

### Installation

1. **Extract the project files**

2. **Install dependencies:**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run development server:**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
romania-news-nextjs/
├── app/
│   ├── globals.css           # Global styles with Rubik & Devanagari fonts
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
├── components/
│   ├── TopBar.tsx             # Black top bar with weather & social links
│   ├── Header.tsx             # Hero header with background image
│   ├── Navigation.tsx         # Main navigation menu
│   ├── NewsCard.tsx           # Individual news card component
│   ├── NewsGrid.tsx           # 4-column news grid
│   └── SidebarButtons.tsx     # Fixed sidebar buttons
├── public/                    # Static assets
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind with Rubik font
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies
```

## 🎯 Components Breakdown

### TopBar
- Weather widget (9.7°C)
- Current date in Devanagari
- Category quick links
- Social media icons (Facebook, Instagram, X, YouTube)
- Login/Register link

### Header
- Background image with dark overlay
- Colorful geometric logo (SVG)
- Site title "रोमानियासमाचार"

### Navigation
- Responsive horizontal menu
- Category links with dropdowns
- Blue hover states
- Search icon

### NewsCard
- Image with Next.js Image optimization
- Category badge
- Author and date metadata
- Title with hover effect
- Smooth lift animation on hover

### NewsGrid
- Responsive grid (1-4 columns)
- Gap spacing matching original
- News data management

### SidebarButtons
- Fixed positioning on right side
- Visible only on large screens
- Dark hover states

## 🛠️ Technologies

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Rubik Font**: Main font (Google Fonts)
- **Noto Sans Devanagari**: Hindi/Devanagari text
- **Next/Image**: Optimized image loading

## 📱 Responsive Design

- **Mobile**: < 768px (1 column)
- **Tablet**: 768px - 1024px (2-3 columns)
- **Desktop**: 1024px - 1280px (4 columns)
- **Large Desktop**: > 1280px (4 columns + sidebar)

## 🎨 Customization

### Update News Items

Edit `components/NewsGrid.tsx`:

```typescript
const newsData = [
  {
    image: 'your-image-url',
    category: 'राजनीती',
    author: 'Author Name',
    date: 'Date',
    title: 'Your Title'
  },
  // Add more...
];
```

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#0066cc',  // Change blue color
  dark: '#000000',     // Change black
  navy: '#1a1a1a',     // Change dark gray
}
```

### Modify Fonts

Edit `app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap');
```

Then update `tailwind.config.js`:

```javascript
fontFamily: {
  rubik: ['YourFont', 'sans-serif'],
}
```

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Other Platforms

- **Netlify**: Connect your Git repository
- **AWS Amplify**: Use the console or CLI
- **Digital Ocean**: Use App Platform
- **Railway**: Connect with GitHub

## 🔧 Environment Variables

Create `.env.local` for any environment-specific configs:

```env
NEXT_PUBLIC_API_URL=your-api-url
```

## 📝 Features

- ✅ Server-side rendering (SSR)
- ✅ Image optimization
- ✅ Fast page loads
- ✅ SEO optimized
- ✅ TypeScript type safety
- ✅ Responsive design
- ✅ Accessibility ready
- ✅ Production ready

## 🐛 Common Issues

**Issue**: Images not loading
**Solution**: Check Next.js config allows the image domain

**Issue**: Fonts not applying
**Solution**: Clear browser cache and rebuild

**Issue**: Tailwind not working
**Solution**: Run `npm install` and restart dev server

## 📄 License

Open source - free to use and modify

## 🤝 Support

For issues or questions, refer to:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs)

---

**Built with ❤️ using Next.js 14 + Tailwind CSS + TypeScript**

Perfect match to the original design! 🎯
