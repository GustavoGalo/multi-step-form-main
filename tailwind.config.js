/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          marine: 'hsl(var(--marine-blue) / <alpha-value>)',
          purplish: 'hsl(var(--purplish-blue) / <alpha-value>)',
          pastel: 'hsl(var(--pastel-blue) / <alpha-value>)',
          light: 'hsl(var(--light-blue) / <alpha-value>)',
        },
        red: {
          strawberry: 'hsl(var(--strawberry-red) / <alpha-value>)',
        },
        gray: {
          cool: 'hsl(var(--cool-gray) / <alpha-value>)',
          light: 'hsl(var(--light-gray) / <alpha-value>)',
        },
        magnolia: 'hsl(var(--magnolia) / <alpha-value>)',
        alabaster: 'hsl(var(--alabaster) / <alpha-value>)',
        white: 'hsl(var(--white) / <alpha-value>)',
      },
      fontFamily: {
        'ubuntu': ['Ubuntu']
      }
    },
  },
  plugins: [],
}

