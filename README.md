# LUCMAR - Trucking Company Website

A modern, responsive website for LUCMAR trucking company built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional layout with blue gradient theme
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js for optimal loading speeds
- **Component-Based**: Modular architecture following OOP principles
- **TypeScript**: Full type safety throughout the application
- **SEO Friendly**: Optimized meta tags and semantic HTML

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── ValuePropositionsSection.tsx
│       ├── ServicesSection.tsx
│       └── ProductSpotlightSection.tsx
└── lib/
    └── theme.ts
```

## Architecture

The project follows strict OOP principles:

- **Single Responsibility**: Each component has a single, well-defined purpose
- **Class-Based Components**: All components use React class components for consistent OOP structure
- **Manager Classes**: Business logic is separated into dedicated manager classes
- **Modular Design**: Components are designed to be reusable and maintainable
- **File Size Limits**: No file exceeds 500 lines to maintain readability

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Theme Configuration

The theme is centrally managed in `src/lib/theme.ts`. You can customize:

- Colors (primary, background, text)
- Typography (heading and body fonts)
- Spacing and layout values
- Border radius values

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Follow the existing OOP patterns
3. Add manager classes for business logic
4. Import and use in `src/app/page.tsx`

## Technologies Used

- **Next.js 14**: React framework for production
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Modern icon library
- **React**: UI library

## License

Private project for LUCMAR trucking company.