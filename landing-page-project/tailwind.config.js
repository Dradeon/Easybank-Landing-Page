const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      colors:{
        'DarkBlue': 'hsl(233, 26%, 24%)',
        'LimeGreen': 'hsl(136, 65%, 51%)',
        'BrightCyan': 'hsl(192, 70%, 51%)',
        'GrayishBlue': 'hsl(233, 8%, 62%)',
        'LightGrayishBlue': 'hsl(220, 16%, 96%)',
        'VeryLightGray': 'hsl(0, 0%, 98%)',
        'White': 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'ui-sans-serif','sans-seif']
      },
      screens:{
        'xs': '375px',
        '2xl': '1440px',
        ...defaultTheme.screens,
      },
      extend: {
        backgroundImage:{
          'hero-pattern-mobile': "url('/public/bg-intro-mobile.svg')",
          'hero-pattern-desktop': "url('/public/bg-intro-desktop.svg')"
        },
      },
    },
    plugins: [],
}