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

      md: "824px",
      // => @media (min-width: 824px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      "3xl": "2500px",
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      backgroundImage: {
        "my-bg-image": "url('/contact/wyglad-gabinet-header.png')",
        "my-header-image": "url('/firstMainPage.jpg')",
        "my-bg-price": "url('/bg-price-list.jpg')",
        "my-bg-about": "url('/bg-about.jpg')",
        "my-bg-voucher": "url('/bg-voucher.jpg')",
        "my-bg-mainpage": "url('/firstMainPage.jpg')",
        "my-bg-faceImage": "url('/mainpagemasaztwarz-bg.jpg')",
        "my-bg-gabinet": "url('/contact/gabient.jpg')",
        "my-bg-perfumy": "url('/contact/perfumy-header.png')",
      },
      // container: {
      //   center: true, // Domyślnie centruje kontener
      //   padding: "2rem", // Dodaje padding po bokach kontenera
      //   screens: {
      //     sm: "100%",
      //     md: "768px",
      //     lg: "1024px",
      //     xl: "1280px",
      //     "2xl": "1920px",
      //   },
      // },

      colors: {
        primary: "rgb(167 199 231)",
        secondary: "rgb(242 237 228)",
        triadblue: "rgb(228 246 237)",
        triadgray: "rgb(145, 135, 120)",
        headercolor: "rgb(167 231 215)",
        mainthemelogo: "rgb(241 234 214)",
        mainpeach: "rgb(244 201 180)",
        triadbrown: "rgb(115 92 89)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOutLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        drawBorder: {
          "0%": { borderWidth: "0" },
          "100%": { borderWidth: "8px" },
        },
      },
      animation: {
        slideLeft: "slideLeft 0.5s forwards",
        slideOutLeft: "slideOutLeft 0.5s forwards",
        fadeIn: "fadeIn 1s ease-in-out",
        drawBorder: "drawBorder 2s forwards",
      },
    },
  },
  plugins: [],
};
export default config;
