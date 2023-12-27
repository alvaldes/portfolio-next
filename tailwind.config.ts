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
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-180deg)' },
          '50%': { transform: 'rotate(180deg)' },
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
              50: '#eef2ff',
              100: '#e0e7ff',
              200: '#c7d2fe',
              300: '#a5b4fc',
              400: '#818cf8',
              500: '#6366f1',
              600: '#4f46e5',
              700: '#4338ca',
              800: '#3730a3',
              900: '#312e81',
              foreground: "#202023",
              DEFAULT: "#6366f1",
            },

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
        },
      },
    }
  })],
}
export default config
