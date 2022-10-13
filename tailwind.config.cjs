/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    
    fontSize: {
      '2xl': 32,
      xl: 28,
      lg: 24,
      md: 20,
      sm: 16,
      xs: 12
    },

    colors: {
      gray: {
        900: '#121214',
        500: '#202024',
        100: '#7c7c8a',
      },

      cyan: {
        600: '#6bb2cc',
        500: '#81d8f7',
        100: '#ade4f7',
        icon: '#61dafb',
      },

      'white-100': '#e1e1e6',
      'black-900': '#000000',
      transparente: 'transparent'
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
