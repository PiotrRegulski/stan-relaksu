import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "1200px",
      // => @media (min-width: 1200px) { ... }

      lg: "1400px",
      // => @media (min-width: 1400px) { ... }

      xl: "1600px",
      // => @media (min-width: 1600px) { ... }

      "2xl": "2000px",
      // => @media (min-width: 2000px) { ... }
    },

    extend: {
      backgroundImage: {
        "my-bg-image": "url('/mirror.png')",
        "my-hero-image": "url('/hero.jpg')",
      },

      colors: {
        primary: "rgb(254 253 199)",
        secondary: "rgb(69 26 3)",
        mainthemelogo: "rgb(241 234 214)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
