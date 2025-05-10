# Personal Portfolio Website

A modern, responsive personal portfolio website built with React and Tailwind CSS. Features a beautiful spotlight background effect, smooth animations, and dark mode support.

## Features

- 🎨 Modern, minimal design with soft shadows and rounded corners
- 🌓 Dark mode support
- ✨ Mouse-tracking spotlight background effect
- 📱 Fully responsive design
- 🎭 Smooth animations with Framer Motion
- 📝 Contact form with Formspree integration
- 🔍 SEO-friendly

## Tech Stack

- React (Vite)
- Tailwind CSS
- Framer Motion
- React Scroll
- Formspree
- Heroicons

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Formspree:
   - Sign up at [Formspree](https://formspree.io)
   - Create a new form and get your form ID
   - Replace `YOUR_FORMSPREE_FORM_ID` in `src/components/Contact.jsx` with your form ID

4. Customize content:
   - Update personal information in components
   - Replace project images and descriptions
   - Update social links in Footer.jsx
   - Add your own testimonials and certificates

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Build for production:
   ```bash
   npm run build
   ```

## Customization

### Colors

The primary color scheme can be customized in `tailwind.config.js`. The current theme uses a blue palette, but you can modify the colors to match your brand.

### Fonts

The site uses Inter font family by default. To change the font:
1. Update the font import in `index.html`
2. Modify the font family in `tailwind.config.js`

### Content

Each component (Hero, About, Projects, etc.) contains its own content in the form of constants or JSX. Update these to reflect your personal information and projects.

## License

MIT License - feel free to use this template for your own portfolio!
