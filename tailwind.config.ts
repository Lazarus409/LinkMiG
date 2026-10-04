import type { Config } from "tailwindcss";

export default {
  content: [
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05070d",
          900: "#0a0e17",
          800: "#111622",
          700: "#1a2030",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        kenburns: {
          "0%": { transform: "scale(1.12)" },
          "100%": { transform: "scale(1.02)" },
        },
      },
      animation: {
        kenburns: "kenburns 12s ease-out forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
