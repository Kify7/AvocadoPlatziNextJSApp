/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      terracotta: '#BC4749',
      cream: '#F2E8CF',
      green: '#A7C957',
      avocado: '#6A994E',
      tree: '#386641',
      gray: '#606569',
      'smoke-300': '#F5F3F2',
      'smoke-400': '#EBE8E7'
    },
    fontFamily: {
      karla: ['Karla-Regular', 'Karla-Bold'],
      'karla-bold': ['Karla-Bold'],
      tilt: ['TiltNeon-Regular']
    },
    extend: {}
  },
  plugins: []
};
