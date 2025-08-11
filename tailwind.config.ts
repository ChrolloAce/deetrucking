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
          DEFAULT: '#2E7BFF',
          dark: '#0E3C7E',
          light: '#5B9BFF',
        },
        background: {
          DEFAULT: '#FFFFFF',
          dark: '#0B1E38',
          light: '#F8FAFC',
        },
        text: {
          DEFAULT: '#1E1E1E',
          light: '#FFFFFF',
          muted: '#B0B0B0',
        },
        border: '#E5E5E5',
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