# 🎯 Quick Customization Guide

## 📝 What Information You Need to Gather

From your LinkedIn profile, gather these details:

### Personal Information
- [ ] Full Name
- [ ] Current Job Title
- [ ] Years of Experience
- [ ] Location (City, Country)
- [ ] Professional Email
- [ ] Phone Number (optional)
- [ ] GitHub Username
- [ ] Twitter Handle (optional)

### Professional Summary
- [ ] 2-3 sentences about your background
- [ ] Key achievements or specializations
- [ ] Career goals or focus areas

### Work Experience (Last 2-3 roles)
For each role, gather:
- [ ] Job Title
- [ ] Company Name
- [ ] Location
- [ ] Duration (Start - End dates)
- [ ] 3-4 key achievements
- [ ] Technologies used

### Education
- [ ] Degree Name
- [ ] Field of Study
- [ ] University/Institution
- [ ] Location
- [ ] Year of Graduation
- [ ] GPA/Grade (if notable)
- [ ] Key achievements

### Skills & Technologies
- [ ] Programming Languages
- [ ] Frameworks & Libraries
- [ ] Databases
- [ ] Tools & Platforms
- [ ] Cloud Services
- [ ] Other relevant skills

### Certifications (if any)
- [ ] Certification Name
- [ ] Issuing Organization
- [ ] Date Obtained
- [ ] Credential ID

## 🔧 Files to Update

### 1. Hero Section (`src/components/Hero.jsx`)
**Lines to update:**
- Line 61: `Hi, I'm <span className="gradient-text">Aman Yadav</span>` → Your name
- Line 67: `Full Stack Developer | 4+ YOE` → Your title and experience
- Line 74: `India` → Your location
- Line 80-82: Update the tagline/description
- Line 125: Update LinkedIn URL
- Line 133: Update GitHub username

### 2. About Section (`src/components/About.jsx`)
**Lines to update:**
- Line 85-95: Update professional summary (3 paragraphs)
- Line 100-110: Update stats (years, projects, technologies)

### 3. Skills Section (`src/components/Skills.jsx`)
**Lines to update:**
- Line 49-89: Update skill categories and individual skills
- Line 150-152: Update additional technologies

### 4. Experience Section (`src/components/Experience.jsx`)
**Lines to update:**
- Line 33-75: Replace with your actual work experience
- Each experience object should have:
  - title, company, location, duration
  - description, achievements, technologies

### 5. Education Section (`src/components/Education.jsx`)
**Lines to update:**
- Line 33-60: Update education details
- Line 77-92: Update certifications

### 6. Contact Section (`src/components/Contact.jsx`)
**Lines to update:**
- Line 44: Update email
- Line 50: Update phone number
- Line 56: Update location
- Line 62-78: Update social media links

### 7. Footer (`src/components/Footer.jsx`)
**Lines to update:**
- Line 33-39: Update social media links
- Line 71-75: Update contact information

### 8. SEO Meta Tags (`index.html`)
**Lines to update:**
- Line 6: Update title
- Line 7: Update description
- Line 8: Update keywords
- Line 13-19: Update Open Graph tags
- Line 22-26: Update Twitter Card tags

## 🎨 Color Customization (Optional)

If you want to change the color scheme, update `tailwind.config.js`:

```javascript
// Primary color (currently blue)
primary: {
  400: '#60a5fa', // Light blue
  500: '#3b82f6', // Blue
  600: '#2563eb', // Dark blue
  // ... other shades
},

// Accent color (currently green)
accent: {
  400: '#34d399', // Light green
  500: '#10b981', // Green
  600: '#059669', // Dark green
  // ... other shades
}
```

## 📋 Quick Checklist

After updating your information:
- [ ] Test the website locally (`npm run dev`)
- [ ] Check all sections display correctly
- [ ] Verify all links work
- [ ] Replace `public/resume.pdf` with your actual resume
- [ ] Update social media links
- [ ] Test responsive design on mobile
- [ ] Build and deploy (`npm run build`)

## 🚀 Ready to Deploy?

Once customized, you can deploy to:
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use the GitHub Actions workflow

Need help with any specific section? Just let me know! 