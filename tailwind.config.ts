import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Cormorant', 'serif'],
        display: ['"Great Vibes"', 'cursive'],
      },
      colors: {
        blush: '#D28795',
        lavender: '#EADCF8',
        cream: '#F2E8D5',
        gold: {
          DEFAULT: '#CBA052',
          hover: '#B88E44',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          hover: '#20bd5a',
        },
        accent: {
          DEFAULT: '#D85B74',
          light: '#D8858E',
          hover: '#C24D63',
        },
        'light-wisteria': {
          '50': '#fbf7fd',
          '100': '#f5edfa',
          '200': '#eddef6',
          '300': '#dfc4ee',
          '400': '#c99ce1',
          '500': '#b579d3',
          '600': '#a15bc2',
          '700': '#8a48a8',
          '800': '#743f8a',
          '900': '#5e3370',
          '950': '#411b50',
        },
      },
      animation: {
        blob: 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
