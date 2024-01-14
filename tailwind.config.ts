import type { Config } from 'tailwindcss'

const {nextui} = require("@nextui-org/react");


const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mplus: ["var(--font-m-plus)"],
        comfortaa: ["var(--font-comfortaa)"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '1.5rem',
          lg: '2rem',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        flip_up: 'flip_up 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both',
        flip_down: 'flip_down 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both',
      },
      keyframes: {
        flip_up: {
          '0%': {transform: 'rotateX(0)'},
          '100%': { transform: 'rotateX(-180deg)' },
        },
        flip_down: {
          '0%': {transform: 'rotateX(-180deg)'},
          '100%': { transform: 'rotateX(0)' },
        }
      }
    },
  },
  plugins: [nextui({
    themes: {
      light: {
        layout: {},
        colors: {
          background: "#f0e7bd", // or DEFAULT
            foreground: "#202023", // or 50 to 900 DEFAULT
            primary: {
              '50': '#def0ff',
              '100': '#b6e2ff',
              '200': '#76cbff',
              '300': '#2db2ff',
              '400': '#0299f5',
              '500': '#0078d2',
              '600': '#0060aa',
              '700': '#005796',
              '800': '#074373',
              '900': '#042b4d',
              foreground: "#f0e7bd",
              DEFAULT: "#0060aa",
            },
            secondary: {
              '50': '#ffe4eb',
              '100': '#fecddb',
              '200': '#fda4bd',
              '300': '#fb7197',
              '400': '#f43f71',
              '500': '#e11d53',
              '600': '#be1242',
              '700': '#9f1239',
              '800': '#881333',
              '900': '#4c0519',
              foreground: "#f0e7bd",
              DEFAULT: "#be1242",
            }

        },
      },
      dark: {
        layout: {},
        colors: {
          background: "#202023", // or DEFAULT
          foreground: "#ECEDEE", // or 50 to 900 DEFAULT
          focus: "#044655",
          primary: {
            50: '#dcfffd',
            100: '#CCF9E5',
            200: '#9BF4D4',
            300: '#64DEBD',
            400: '#3CBEA7',
            500: '#0D9488',
            600: '#097F7F',
            700: '#06616A',
            800: '#044655',
            900: '#023447',
            foreground: "#202020",
            DEFAULT: "#3CBEA7",
          },
          secondary: {
            '50': '#ebe8ff',
            '100': '#dad4ff',
            '200': '#bfb2ff',
            '300': '#af99ff',
            '400': '#8255fd',
            '500': '#7332f5',
            '600': '#6420e1',
            '700': '#541abd',
            '800': '#46189a',
            '900': '#2a0c69',
            foreground: "#202023",
            DEFAULT: "#8255fd",
          }
        },
      },
    }
  })],
}
export default config
