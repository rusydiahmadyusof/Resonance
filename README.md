# Resonance — Premium Product Experience

A modern, responsive multi-page marketing website showcasing the Resonance Aura Pro II headphones. Built with Next.js 16, featuring smooth animations, interactive components, and a carefully crafted design system.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat-square&logo=tailwind-css)
![React](https://img.shields.io/badge/React-19.2-61dafb?style=flat-square&logo=react)

## ✨ Features

- **🎨 Modern Design System** - Custom Tailwind theme with consistent spacing, typography, and color palette
- **📱 Fully Responsive** - Mobile-first design that works seamlessly across all devices
- **⚡ Performance Optimized** - Image optimization, static generation, and efficient code splitting
- **♿ Accessible** - WCAG-compliant with skip links, ARIA labels, and keyboard navigation
- **🎭 Smooth Animations** - Framer Motion for engaging micro-interactions
- **🔍 SEO Optimized** - Metadata, sitemap, and robots.txt for search engine visibility
- **🎯 Type-Safe** - Full TypeScript implementation with strict type checking
- **🧩 Component-Based** - Reusable, maintainable component architecture

## 🚀 Tech Stack

### Core

- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety

### Styling

- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **Custom Design Tokens** - Theme-based color system and typography

### UI & Animation

- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives

### Development

- **[ESLint](https://eslint.org/)** - Code linting
- **Next.js ESLint Config** - Optimized rules for Next.js projects

## 📋 Prerequisites

- **Node.js** 18.17 or later
- **npm** 9.0 or later (or yarn/pnpm)

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Resonance
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

| Command         | Description                                         |
| --------------- | --------------------------------------------------- |
| `npm run dev`   | Start development server on `http://localhost:3000` |
| `npm run build` | Create optimized production build                   |
| `npm run start` | Start production server (requires build first)      |
| `npm run lint`  | Run ESLint to check code quality                    |

## 📁 Project Structure

```
Resonance/
├── public/
│   └── resonance/          # Product images and assets
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── compare/        # Compare page
│   │   ├── tech-specs/     # Tech specs page
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Homepage
│   │   ├── error.tsx       # Error boundary
│   │   ├── not-found.tsx   # 404 page
│   │   └── sitemap.ts      # Sitemap generation
│   ├── components/
│   │   ├── layout/         # Layout components (Header, Footer, Container)
│   │   ├── sections/       # Page sections (Home, Compare, Specs)
│   │   └── ui/             # Reusable UI components (Button, Swatch, etc.)
│   ├── data/               # Static data (products, navigation, content)
│   ├── hooks/              # Custom React hooks
│   └── lib/                # Utilities (fonts, utils)
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Pages

### Homepage (`/`)

- Hero section with product showcase
- Interactive color selector
- Feature highlights
- Detail grid
- Dreamlike CTA section

### Tech Specs (`/tech-specs`)

- Interactive color showcase
- Comprehensive specification categories
- Detailed feature lists

### Compare (`/compare`)

- Side-by-side product comparison
- Feature comparison table
- Product cards with pricing

## 🎯 Key Components

### UI Components

- **Button** - Multiple variants (primary, secondary, ghost, light)
- **ColorSwatch** - Interactive color selection
- **SectionHeading** - Consistent section titles
- **IconBadge** - Icon containers
- **SkipLink** - Accessibility navigation

### Layout Components

- **SiteHeader** - Navigation with mobile menu
- **SiteFooter** - Footer with links and branding
- **SiteContainer** - Consistent content width

## 🔧 Development

### Code Style

- TypeScript strict mode enabled
- ESLint with Next.js recommended rules
- Consistent component structure
- Accessible by default

### Adding New Components

1. Create component in appropriate directory (`components/ui/` or `components/sections/`)
2. Use TypeScript for type safety
3. Follow existing component patterns
4. Include proper accessibility attributes
5. Add to exports if needed

### Styling Guidelines

- Use Tailwind utility classes
- Follow design system tokens
- Maintain consistent spacing scale
- Ensure responsive design

## 🚢 Building for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` directory.

## 📦 Deployment

### Vercel (Recommended)

1. **Push to GitHub**

   ```bash
   git push origin main
   ```

2. **Import to Vercel**

   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

3. **Deploy**
   - Vercel will automatically detect Next.js
   - No environment variables needed
   - Build and deploy automatically on push

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- **Netlify** - Automatic Next.js detection
- **AWS Amplify** - Next.js support
- **Railway** - Simple deployment
- **Docker** - Containerized deployment

## 🎨 Design System

### Colors

- **Sand** (`#f6efe6`) - Background
- **Clay** (`#4f3b2e`) - Primary text
- **Cocoa** (`#2f231c`) - Dark accents
- **Parchment** (`#f8f2ea`) - Light surfaces
- **Olive** (`#b5b084`) - Accent color

### Typography

- **Display Font**: Space Grotesk (headings)
- **Body Font**: Inter (body text)

### Spacing

- Consistent spacing scale: 4, 6, 8, 12, 16, 20, 24
- Responsive spacing with Tailwind breakpoints

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Skip to main content link
- Focus visible indicators
- Color contrast compliance

## 🔍 SEO

- Metadata for all pages
- Auto-generated sitemap
- robots.txt configuration
- Semantic HTML
- Open Graph tags
- Twitter Card support

## 🐛 Error Handling

- Error boundary component (`error.tsx`)
- Custom 404 page (`not-found.tsx`)
- Graceful error states
- User-friendly error messages

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is private and proprietary.

## 🙏 Acknowledgments

- Design inspiration from modern product websites
- Built with [Next.js](https://nextjs.org/)
- Icons from [Radix UI](https://www.radix-ui.com/icons)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

**Built with ❤️ using Next.js and TypeScript**
