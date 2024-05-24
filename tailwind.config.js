// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      smd: "897px",
      lmg: "900px",
      lg: "1024px",
      lxg: "1190px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      utilities: {
        '.text-black-important': {
          color: 'black !important',
        },
      },
    },
    fontFamily: {
      body: ["Poppins"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-black-important': {
          color: 'black !important',
        },
      });
    },
  ],
};
