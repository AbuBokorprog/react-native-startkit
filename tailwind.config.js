/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff1f2',
          100: '#ffe0e1',
          200: '#ffc6c9',
          300: '#ff9fa4',
          400: '#ff676e',
          500: '#fb2c36',
          600: '#e91923',
          700: '#c4111a',
          800: '#a21219',
          900: '#86161b',
          950: '#490609',
        },
        optional: {
          50: '#eefffb',
          100: '#c6fff4',
          200: '#8effeb',
          300: '#4dfbe0',
          400: '#19e8cf',
          500: '#00bba7',
          600: '#00a496',
          700: '#028379',
          800: '#086761',
          900: '#0c5550',
          950: '#003433',
        },
        secondary: {
          50: '#f7f8f8',
          100: '#edeef1',
          200: '#d8dbdf',
          300: '#b5bac4',
          400: '#8d94a3',
          500: '#6a7282',
          600: '#596070',
          700: '#494f5b',
          800: '#3f434d',
          900: '#373a43',
          950: '#25272c',
        },
      },
    },
  },
  plugins: [],
};
