/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderWidth: {
      '0': '0',
      '1': '1px',
      '2': '2px',
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // // => @media (min-width: 1280px) { ... }

      // '2xl': '1536px',
      // // => @media (min-width: 1536px) { ... }
    },
    extend: {
      screens: {
        'sm': {'min': '320px', 'max': '480'},
        'md': {'min': '481px', 'max': '768px'},
        'lg': {'min': '769px', 'max': '1024px'},
        'xl': {'min': '1025px', 'max': '1536px'},
      },
    },
  },
  plugins: [],
}

