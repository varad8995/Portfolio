# Python Developer Portfolio

A professional portfolio website built with React, featuring dark mode, animations, and a modern design.

## ✨ Features

- ✅ Dark mode toggle with localStorage persistence
- ✅ Smooth scroll navigation  
- ✅ Intersection Observer animations
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Blue/cyan gradient color scheme
- ✅ Project hover effects (grayscale → color)
- ✅ All sections: Hero, About, Experience, Projects, Skills, Contact
- ✅ Floating background particles
- ✅ Custom scrollbar styling

## 🚀 Quick Start

### Prerequisites

- Node.js 14+ installed
- npm or yarn package manager

### Installation

1. Extract the ZIP file
2. Open terminal/command prompt in the project folder
3. Install dependencies:

```bash
npm install
```

Or with yarn:

```bash
yarn install
```

### Running the Project

Start the development server:

```bash
npm start
```

Or with yarn:

```bash
yarn start
```

The portfolio will open automatically at [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Update Your Information

Edit `src/mock.js` to customize:

1. **Hero Section**: Your name, title, description
2. **About**: Personal bio
3. **Experience**: Work history with job titles, companies, periods
4. **Projects**: Your project showcase with images and tech stacks
5. **Skills**: Technical skills organized by category
6. **Contact**: Email, GitHub, LinkedIn, location

### Example:

```javascript
export const portfolioData = {
  hero: {
    name: "Your Name",
    title: "Your Title",
    description: "Your description...",
    email: "your.email@example.com",
    github: "github.com/yourusername",
    linkedin: "linkedin.com/in/yourusername"
  },
  // ... rest of your data
};
```

### Change Colors

The portfolio uses a blue/cyan gradient theme. To change colors:

1. Open `src/pages/Portfolio.jsx`
2. Find gradient classes like `from-blue-600 to-cyan-600`
3. Replace with your preferred Tailwind colors

Example:
```jsx
// Change from blue/cyan to purple/pink
className="bg-gradient-to-r from-purple-600 to-pink-600"
```

### Add/Remove Sections

All sections in `Portfolio.jsx` are independent. You can:
- Comment out sections you don't need
- Duplicate sections for new content
- Reorder sections by moving their code blocks

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/
│   │   └── ui/
│   │       ├── button.jsx  # Button component
│   │       └── badge.jsx   # Badge component
│   ├── lib/
│   │   └── utils.js        # Utility functions
│   ├── pages/
│   │   └── Portfolio.jsx   # Main portfolio page
│   ├── App.js              # App router
│   ├── App.css             # App styles
│   ├── index.js            # React entry point
│   ├── index.css           # Global styles & animations
│   └── mock.js             # Portfolio data
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind configuration
├── craco.config.js         # Craco configuration
└── README.md               # This file
```

## 🎭 Dark Mode

Dark mode is implemented with:
- Toggle button in navigation
- localStorage persistence (remembers your choice)
- Smooth transitions between themes
- Custom scrollbar for each theme

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px (1 column)
- **Tablet**: 768px - 1024px (2 columns)
- **Desktop**: > 1024px (3 columns)

## 🛠️ Technologies Used

- **React 19** - UI framework
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Radix UI** - UI components
- **Craco** - Configuration override

## 📦 Build for Production

Create an optimized production build:

```bash
npm run build
```

This creates a `build` folder with optimized static files ready to deploy.

## 🚢 Deployment

You can deploy the `build` folder to:
- **Vercel**: `vercel deploy`
- **Netlify**: Drag & drop `build` folder
- **GitHub Pages**: Use `gh-pages` package
- **Any static hosting service**

## 🐛 Troubleshooting

### Port 3000 already in use

```bash
# Kill the process on port 3000 (Mac/Linux)
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 npm start
```

### Dependencies installation failed

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Dark mode not working

- Check browser console for errors
- Clear localStorage: `localStorage.clear()`
- Refresh the page

## 📝 License

This project is open source and available for personal and commercial use.

## 🙏 Credits

Built with ❤️ using React and Tailwind CSS

---

**Need help?** Check the [React documentation](https://react.dev/) or [Tailwind CSS docs](https://tailwindcss.com/docs)
