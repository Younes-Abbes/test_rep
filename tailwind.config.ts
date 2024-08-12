import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary': {
          '100': '#FFEEE8',
          '200': '#FFDDD1',
          '300': '#FFA386',
          '400': '#FF855E',
          '500': '#FF6636',
          '600': '#CC522B',
          '700': '#993D20',
          '800': '#662916',
          '900': '#33140B',
        },
        'secondary': {
          '100': '#EBEBFF',
          '200': '#CDCBFE',
          '300': '#9A95FE',
          '400': '#7872FD',
          '500': '#564FFD',
          '600': '#453FCA',
          '700': '#342F98',
          '800': '#222065',
          '900': '#111033',
        },
        'success': {
          '100': '#E1F7E3',
          '200': '#C3E5C6',
          '300': '#7BD785',
          '400': '#4FCA5C',
          '500': '#23BD33',
          '600': '#1C9729',
          '700': '#15711F',
          '800': '#0E4C14',
          '900': '#07260A',
        },
        'warning': {
          '100': '#FFF2E5',
          '200': '#FED1A5',
          '300': '#FEBB79',
          '400': '#FDA44C',
          '500': '#FD8E1F',
          '600': '#CC7319',
          '700': '#985613',
          '800': '#65390C',
          '900': '#331D06',
        },
        'danger': {
          '100': '#FFF0F0',
          '200': '#F4C8C8',
          '300': '#EE8F8F',
          '400': '#E96969',
          '500': '#E34444',
          '600': '#B63636',
          '700': '#882929',
          '800': '#5B1B1B',
          '900': '#2D0E0E',
        },
      }
    },
  },
  plugins: [],
};
export default config;
