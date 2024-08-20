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

      md: "1048px",
      // => @media (min-width: 1048px) { ... }

      lg: "1400px",
      // => @media (min-width: 1400px) { ... }

      xl: "1600px",
      // => @media (min-width: 1600px) { ... }

      "2xl": "2400px",
      // => @media (min-width: 2400px) { ... }
    },

    extend: {
      backgroundImage: {
        "my-bg-image": "url('/mirror.png')",
        "my-hero-image": "url('/hero.jpg')",
        "my-ozdoba-image": "url('/do-ozdoby-stopka.jpg')",
      },

      colors: {
        primary: "rgb(167 199 231)",
        secondary: "rgb(242 237 228)",
        triadblue:"rgb(228 246 237)",
        triadgray:"rgb(237 228 246)",
        headercolor:"rgb(167 231 215)",
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
