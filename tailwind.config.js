/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#141414",
        dark: "#232328",
        "semi-dark": "#2b2b31",
      },
    },
  },
  plugins: [],
};
