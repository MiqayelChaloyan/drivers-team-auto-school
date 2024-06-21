import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xs: '320px',
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      colors: {
        backgroundGrey: '#E9E9E9',
        greenLight: '#76BC22',
        grey: 'rgba(0, 0, 0, 0.51)',
      },
    },
  },
  plugins: [],
};
export default config;



// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./node_modules/flowbite-react/lib/**/*.js",
//     "./src/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   future: {
//     hoverOnlyWhenSupported: true,
//   },
//   theme: {
//     extend: {
//       keyframes: {
//         'infinite-scroll': {
//           from: { transform: 'translateX(0)' },
//           to: { transform: 'translateX(-100%)' },
//         },
//       },
//       animation: {
//         'infinite-scroll': 'infinite-scroll 5s linear infinite',
//       },
//       container: {
//         center: true,
//         padding: {
//           DEFAULT: '0',
//           sm: '0rem',
//           lg: '1rem',
//           xl: '1rem',
//           '2xl': '1rem',
//         },
//       },
//       containerMobile: {
//         width: '100px',
//         padding: '1rem'
//       },
//       screens: {
//         xs: '320px',
//         sm: '480px',
//         md: '768px',
//         lg: '1024px',
//         xl: '1280px',
//       },
//       colors: {
//         backgroundGrey: '#E9E9E9',
//         greenLight: '#76BC22',
//         grey: 'rgba(0, 0, 0, 0.51)',
//       },
//       fontFamily: {
//         sans: ['Graphik', 'sans-serif'],
//         serif: ['Merriweather', 'serif'],
//       },
//       gridTemplateRows: {
//         '[auto,auto,1fr]': 'auto auto 1fr',
//       },
//       gridTemplateColumns: {
//         'auto': 'repeat(auto-fit, minmax(0, 1fr))',
//         '1': 'repeat(1, minmax(0, 1fr))',
//         '2': 'repeat(2, minmax(0, 1fr))',
//         '3': 'repeat(3, minmax(0, 1fr))',
//         '4': 'repeat(4, minmax(0, 1fr))',
//         '5': 'repeat(5, minmax(0, 1fr))',
//       },
//     },
//   },
//   plugins: [
//     require("flowbite/plugin"),
//     require('@tailwindcss/aspect-ratio'),
//   ],
// }
