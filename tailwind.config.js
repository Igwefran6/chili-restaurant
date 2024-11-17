/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#9b111e", // Earthy sienna red
          light: "#E8766A", // Lighter, vibrant terracotta
          dark: "#80091B", // Deep warm red
        },
        accent: {
          yellow: "#F8B400", // Warm golden yellow for highlights
          green: "#16a34a", // Olive green for natural balance
          beige: "#F5F5DC", // Neutral beige for backgrounds
        },
        gray: {
          light: "#F0F0F0", // Soft light gray
          DEFAULT: "#C0C0C0", // Standard gray
          dark: "#212121", // Deep neutral gray
          "translucent-light": "#F0F0F0cc",
          "translucent-dark": "#212121cc",
        },
      },
    },
  },
  plugins: [],
};
