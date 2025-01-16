/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',  // Custom mobile breakpoint (for small screens)
      md: '768px',  // Custom tablet breakpoint
      lg: '1280px', // Custom laptop breakpoint (desktop)
      xl: '1440px', // Custom large desktop breakpoint  
    },
    
    fontFamily: {
      'jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
      'roboto' : ['"Roboto"', 'sans-serif'],
      'sf': ['SF Pro Display', 'sans-serif'],
      'anton' : ["Anton", 'serif']
    },
    fontWeight: {
      'thin': 100,
      'extralight': 200,
      'light': 300,
      'regular': 400,
      'medium': 500,
      'semibold': 600,
      'bold': 750,
      'extrabold': 800,
      'black': 900,
    },
    extend: {
      backgroundImage: {
        'dark-gradient': 'linear-gradient(to right, rgba(0, 0, 0, 0.72), rgba(10, 10, 10, 0.18))',
      },
      // backgroundImage: {
      //   'hover-gradient': "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(10, 10, 10, 0.08)), url('landing/darkEffect@.svg')",
      // },
      boxShadow: {
        'inset-top-black': 'inset 0 150px 100px 50px black',
      },
    },
},
  plugins: [],
}

