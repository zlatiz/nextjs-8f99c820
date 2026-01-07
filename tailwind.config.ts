import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'white',
        surface: '#ffffff',
        foreground: '#0b0b0b',
        muted: '#777777',
        primary: '#FFD000',
        'primary-foreground': '#101010',
        border: '#e6e6e6'
      },
      fontFamily: {
        sans: ['Manrope', 'DM Sans', 'system-ui', 'sans-serif']
      },
      borderRadius: {
        lg: '0.5rem'
      }
    }
  },
  plugins: []
};

export default config;
