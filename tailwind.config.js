/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vWhite: '#eff2fa',
        vGray: '#cbd5e1',
        vBgButton: '#f3f4f61a'
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif']
      },
      screens: {
        vSmLScreen: '408px',
        vMdScreen: '772px',
        vMdScreenXl: '936px',
        vLaptopLScreen: '1440px'
      }
    },
  },
  plugins: [],
};
