import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#17201f",
        ivory: "#fffdf7",
        champagne: "#e9dac2",
        teal: "#0c8078",
        botanical: "#6f8f72",
        mist: "#eef5f1",
        ink: "#24302f"
      },
      boxShadow: {
        premium: "0 24px 70px rgba(23, 32, 31, 0.12)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
