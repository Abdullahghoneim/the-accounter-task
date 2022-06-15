/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary_default: "#00ACC4",
        green_color: "#04C35C",
        backed_color: "#2C5282",
      },
    },
  },
  plugins: [],
};
