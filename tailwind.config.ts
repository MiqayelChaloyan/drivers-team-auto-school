import svgToTinyDataUri from "mini-svg-data-uri";
import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}



// const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = withMT({
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
      animation: {
        "background-shine": "background-shine 2s linear infinite"
      },
      keyframes: {
        "background-shine": {
          "from": {
            "backgroundPosition": "0 0"
          },
          "to": {
            "backgroundPosition": "-200% 0"
          }
        }
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        backgroundGrey: '#E9E9E9',
        greenLight: '#76BC22',
        grey: 'rgba(0, 0, 0, 0.51)',
        darkOrange: '#F25C05',
        lightOrange: '#F2D3AC',
        lightGray: 'rgb(224 224 224 / var(--tw-border-opacity))'
      },
      extend: {
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
      },
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-dot-thick": (value: any) => ({
            backgroundImage: `url("${svgToTinyDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
});
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
