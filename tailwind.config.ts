import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gilroy: "var(--font-gilroy)",
      },
      fontSize: {
        "7xl": [
          "70px",
          {
            lineHeight: "63px",
            letterSpacing: "-0.01em",
          },
        ],
        "5xl": [
          "50px",
          {
            lineHeight: "45px",
            letterSpacing: "-0.01em",
          },
        ],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bggrad: "linear-gradient(122deg, #EBECE9 0%, #81898D 100%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
        fog: "fog 10s ease-in-out infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        fog: {
          "0%": { transform: "translateX(0) scale(1)" },
          "50%": { transform: "translateX(20px) scale(1.05)" },
          "100%": { transform: "translateX(0) scale(1)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
