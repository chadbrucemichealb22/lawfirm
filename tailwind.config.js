/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'Jost'", "sans-serif"],
        mono: ["'DM Mono'", "monospace"],
      },
      colors: {
        gold: {
          50: "#fdfaf0",
          100: "#f9f0ca",
          200: "#f2db8a",
          300: "#e8c14f",
          400: "#d4a82a",
          500: "#b8911a",
          600: "#9a7712",
          700: "#7d5f0e",
          800: "#614a10",
          900: "#4a3810",
        },
        slate: {
          950: "#0a0c10",
        },
        ink: "#0e1116",
        parchment: "#f5f0e8",
      },
      letterSpacing: {
        widest2: "0.3em",
      },
    },
  },
  plugins: [],
};
