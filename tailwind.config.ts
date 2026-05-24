import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1B3A6B',
          'navy-dark': '#0F2347',
          'navy-light': '#2A5298',
          gold: '#C9A227',
          'gold-light': '#E8C547',
          'gold-pale': '#FDF6DC',
          white: '#FFFFFF',
          'off-white': '#F8F7F2',
          'gray-soft': '#E8E6DF',
          'text-dark': '#1A1A2E',
          'text-muted': '#6B7280',
        },
      },
      boxShadow: {
        gold: '0 18px 60px rgba(201, 162, 39, 0.28)',
        navy: '0 20px 50px rgba(15, 35, 71, 0.16)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
