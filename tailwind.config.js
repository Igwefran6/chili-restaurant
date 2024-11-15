/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#D3544A", // Earthy sienna red
          light: "#E8766A", // Lighter, vibrant terracotta
          dark: "#A53D34", // Deep warm red
        },
        accent: {
          yellow: "#F8B400", // Warm golden yellow for highlights
          green: "#6B8E23", // Olive green for natural balance
          beige: "#F5F5DC", // Neutral beige for backgrounds
        },
        gray: {
          light: "#F0F0F0", // Soft light gray
          DEFAULT: "#C0C0C0", // Standard gray
          dark: "#707070", // Deep neutral gray
        },
      },
    },
  },
  plugins: [],
};
