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
      backgroundImage: {
        pattern: "url('/images/terra-pattern.svg')",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "infinite-scroll-g": "infinite-scroll-gorisont 25s linear infinite",
        "infinite-scroll-ga": "infinite-scroll-gorisont-a 25s linear infinite",
        "infinite-scroll-v": "infinite-scroll-vertical 25s linear infinite",
        "infinite-scroll-va": "infinite-scroll-vertical-a 25s linear infinite",
        fog: "fog 10s ease-in-out infinite",
        tisker: "tisker 10s linear infinite",
      },
      keyframes: {
        tisker: {
          "0%": { transform: "translateZ(0)" },
          to: { transform: "translate3d(-100%, 0, 0)" },
        },
        "infinite-scroll-gorisont": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - 16px))" },
        },
        "infinite-scroll-gorisont-a": {
          from: { transform: "translateX(calc(-100% - 16px))" },
          to: { transform: "translateX(0)" },
        },
        "infinite-scroll-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - 16px))" },
        },
        "infinite-scroll-vertical-a": {
          from: { transform: "translateY(calc(-100% - 16px))" },
          to: { transform: "translateY(0)" },
        },
        fog: {
          "0%": { transform: "translateX(0) scale(1)" },
          "50%": { transform: "translateX(20px) scale(1.05)" },
          "100%": { transform: "translateX(0) scale(1)" },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".animation-play-running": {
          "animation-play-state": "running",
        },
        ".animation-play-paused": {
          "animation-play-state": "paused",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
export default config;
