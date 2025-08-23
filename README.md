# MNet Inc - Innovation Hub

A modern, futuristic website built with Next.js, TypeScript, and Tailwind CSS featuring parallax effects, particle backgrounds, and responsive design.

## Features

- 🚀 **Modern Design**: Futuristic UI with glass morphism effects.
- 📱 **Responsive**: Mobile-first responsive design
- ✨ **Interactive**: Parallax scrolling and particle animations
- 🎨 **Tailwind CSS**: Utility-first CSS framework
- 🔧 **TypeScript**: Type-safe development
- 📦 **Next.js**: React framework with SSR capabilities

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: React Spring Parallax, Framer Motion
- **Particles**: React TSParticles
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/mnetinc-web.git
cd mnetinc-web
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # React components
│   ├── ParticlesBg.tsx
│   ├── HeroSection.tsx
│   ├── ServicesSection.tsx
│   ├── CloudSection.tsx
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── pages/              # Next.js pages
│   ├── _app.tsx
│   └── index.tsx
└── styles/             # Global styles
    └── globals.css
```

## Customization

- **Colors**: Edit `tailwind.config.js` to modify the color scheme
- **Content**: Update component files to change text and images
- **Styling**: Modify `globals.css` for custom CSS classes

## Deployment

The project can be deployed to Vercel, Netlify, or any other hosting platform that supports Next.js.

## License

This project is licensed under the MIT License.
