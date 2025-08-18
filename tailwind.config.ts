import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E40AF',
          dark: '#1E3A8A',
          light: '#3B82F6',
        },
        secondary: {
          DEFAULT: '#F59E0B',
          dark: '#D97706',
          light: '#FCD34D',
        },
        background: {
          DEFAULT: '#FFFFFF',
          light: '#F8FAFC',
          dark: '#0F172A',
        },
        text: {
          DEFAULT: '#0F172A',
          light: '#FFFFFF',
          muted: '#64748B',
          secondary: '#475569',
        },
        border: {
          DEFAULT: '#E2E8F0',
          light: '#F1F5F9',
        },
        accent: '#10B981',
        warning: '#EF4444',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '16px',
      },
      maxWidth: {
        container: '1200px',
      },
      spacing: {
        gutter: '24px',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(14, 60, 126, 0.8) 0%, rgba(46, 123, 255, 0.6) 100%)',
        'value-gradient': 'linear-gradient(135deg, #0E3C7E 0%, #2E7BFF 100%)',
      },
    },
  },
  plugins: [],
}
export default config