/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/container/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Ensure CSS variables are defined in global styles
        foreground: "var(--foreground)",
        primary: "#C19D60",
        secondary: "#f2eee9",
      },
      fontFamily: {
        poppins: ["Poppins", "serif"],
        libre: ["Libre Baskerville", "serif"],
      },
    },
  },
  plugins: [],
};
