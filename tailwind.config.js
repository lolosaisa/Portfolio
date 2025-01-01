/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],  // Enable dark mode based on the "class"
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        mint: '#008080',
        
        navy: {
          DEFAULT: "#0A192F",
          light: "#112240",
          dark: "#020c1b",
        },
        slate: {
          light: "#ccd6f6",
          DEFAULT: "#8892b0",
          dark: "#495670",
        },
        accent: "#64ffda",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.5s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "logo-spin": "logo-spin 20s linear infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "logo-spin": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],  // Tailwind animations plugin
};
