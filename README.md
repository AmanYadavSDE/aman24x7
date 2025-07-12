# 🚀 Aman Yadav - Portfolio Website

A stunning, dark-themed personal portfolio website built with React, TailwindCSS, and Framer Motion. This modern, responsive portfolio showcases skills, experience, and projects with smooth animations and an elegant design.

![Portfolio Preview](https://via.placeholder.com/800x400/0f172a/3b82f6?text=Portfolio+Preview)

## ✨ Features

- **🎨 Modern Dark Theme**: Sleek, professional design with neon accents
- **📱 Fully Responsive**: Perfect on desktop, tablet, and mobile devices
- **🌟 Smooth Animations**: Powered by Framer Motion for delightful interactions
- **⚡ Fast Performance**: Optimized build with code splitting and lazy loading
- **🔍 SEO Optimized**: Comprehensive meta tags and structured data
- **♿ Accessible**: Built with accessibility best practices
- **🎯 Interactive Elements**: Hover effects, smooth scrolling, and micro-interactions

## 🛠️ Tech Stack

- **Frontend**: React 18, JavaScript/JSX
- **Styling**: TailwindCSS with custom theme
- **Animations**: Framer Motion
- **Icons**: React Icons (Heroicons, Font Awesome)
- **Build Tool**: Vite
- **Deployment**: Netlify/Vercel/GitHub Pages ready

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio-website.git
   cd portfolio-website
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
   ```
   http://localhost:5173
   ```

## 🎯 Customization

### 1. Personal Information
Update your personal details in the following components:

**Hero Section** (`src/components/Hero.jsx`):
- Name and title
- Location
- Profile description
- Social media links

**About Section** (`src/components/About.jsx`):
- Professional summary
- Statistics (years of experience, projects, etc.)

**Contact Section** (`src/components/Contact.jsx`):
- Email address
- Phone number
- Social media profiles

### 2. Work Experience
Edit `src/components/Experience.jsx`:
- Add/remove job positions
- Update company names and descriptions
- Modify achievements and technologies

### 3. Education & Certifications
Modify `src/components/Education.jsx`:
- Update educational qualifications
- Add/remove certifications
- Change institution names and dates

### 4. Skills & Technologies
Update `src/components/Skills.jsx`:
- Add/remove technical skills
- Update skill levels (percentages)
- Modify technology icons and categories

### 5. Assets
- **Resume**: Replace `public/resume.pdf` with your actual resume
- **Favicon**: Update `public/favicon.svg` with your preferred icon
- **Meta Tags**: Update SEO information in `index.html`

### 6. Color Scheme
Customize colors in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: { /* Your primary color palette */ },
      accent: { /* Your accent color palette */ },
      // ... other colors
    }
  }
}
```

## 🚀 Deployment

### Option 1: Netlify (Recommended)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Sign up at [Netlify](https://netlify.com)
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Deploy!

3. **Environment Variables** (if needed)
   - Add any required environment variables in Netlify dashboard

### Option 2: Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

3. **Or deploy via GitHub**
   - Push to GitHub
   - Connect repository in Vercel dashboard
   - Automatic deployments on every push

### Option 3: GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json**
   ```json
   {
     "homepage": "https://your-username.github.io/portfolio-website",
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run build
   npm run deploy
   ```

### Option 4: GitHub Actions (Automated)

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm install
    
    - name: Build
      run: npm run build
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## 📝 Build Configuration

### Vite Configuration (`vite.config.js`)
- **Base URL**: Set to `./` for relative paths
- **Build Output**: `dist/` directory
- **Code Splitting**: Vendor, motion, and icons chunks
- **Asset Optimization**: Automatic optimization for images and assets

### TailwindCSS Configuration (`tailwind.config.js`)
- **Dark Mode**: Class-based dark mode enabled
- **Custom Colors**: Primary, accent, and dark color palettes
- **Custom Animations**: Fade, slide, and glow animations
- **Responsive Design**: Mobile-first approach

## 🔧 Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint

# Fix linting issues
npm run lint:fix
```

## 📁 Project Structure

```
portfolio-website/
├── public/
│   ├── favicon.svg
│   ├── manifest.json
│   ├── robots.txt
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Design Features

- **Glassmorphism**: Frosted glass effect on cards
- **Gradient Backgrounds**: Dynamic color gradients
- **Smooth Scrolling**: Seamless navigation between sections
- **Hover Effects**: Interactive button and card animations
- **Loading States**: Smooth transitions and loading indicators
- **Dark Theme**: Optimized for dark mode viewing

## 🔍 SEO Optimization

- **Meta Tags**: Complete Open Graph and Twitter Card meta tags
- **Structured Data**: JSON-LD schema for better search indexing
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Proper crawler instructions
- **Performance**: Optimized images and code splitting

## 📱 Progressive Web App (PWA)

- **Manifest**: Web app manifest for installability
- **Service Worker**: (Optional) Can be added for offline functionality
- **Responsive Design**: Works perfectly on all devices
- **Fast Loading**: Optimized for mobile networks

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 Performance Tips

- **Images**: Use WebP format for better compression
- **Fonts**: Preload Google Fonts for faster loading
- **Code Splitting**: Leverage Vite's automatic code splitting
- **Caching**: Set up proper caching headers on your hosting platform

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**: Clear node_modules and reinstall dependencies
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Styling Issues**: Rebuild TailwindCSS
   ```bash
   npm run build
   ```

3. **Animation Performance**: Reduce motion for users with motion preferences
   ```css
   @media (prefers-reduced-motion: reduce) {
     * {
       animation-duration: 0.01ms !important;
       animation-iteration-count: 1 !important;
     }
   }
   ```

## 📞 Support

If you have any questions or need help with customization:

- **Email**: aman.yadav@example.com
- **LinkedIn**: [linkedin.com/in/aman212yadav](https://linkedin.com/in/aman212yadav)
- **GitHub Issues**: [Create an issue](https://github.com/your-username/portfolio-website/issues)

## 🎉 Acknowledgments

- **React Team**: For the amazing React framework
- **Tailwind CSS**: For the utility-first CSS framework
- **Framer Motion**: For beautiful animations
- **Vite**: For the fast build tool
- **React Icons**: For the comprehensive icon library

---

**Built with ❤️ by Aman Yadav**

Don't forget to star ⭐ the repository if you found it helpful! 