/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'music-bar-1': 'music-bar-1 1.2s ease-in-out infinite',
        'music-bar-2': 'music-bar-2 1.3s ease-in-out infinite',
        'music-bar-3': 'music-bar-3 1.1s ease-in-out infinite',
        'music-bar-4': 'music-bar-4 1.4s ease-in-out infinite',
      },
      fontFamily: {
        roboto: ['var(--font-roboto)', 'sans-serif'],
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5715' }],
        base: ['1rem', { lineHeight: '1.5', letterSpacing: '-0.017em' }],
        lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.017em' }],
        xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.017em' }],
        '2xl': ['1.5rem', { lineHeight: '1.415', letterSpacing: '-0.017em' }],
        '3xl': ['1.875rem', { lineHeight: '1.333', letterSpacing: '-0.017em' }],
        '4xl': ['2.25rem', { lineHeight: '1.277', letterSpacing: '-0.017em' }],
        '5xl': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.017em' }],
        '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.017em' }],
        '7xl': ['5rem', { lineHeight: '1', letterSpacing: '-0.017em' }],
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
/* Add to your tailwind.config.js */
/*
extend: {
  animation: {
    'music-bar-1': 'music-bar-1 1.2s ease-in-out infinite',
    'music-bar-2': 'music-bar-2 1.3s ease-in-out infinite',
    'music-bar-3': 'music-bar-3 1.1s ease-in-out infinite',
    'music-bar-4': 'music-bar-4 1.4s ease-in-out infinite',
  },
}
*/