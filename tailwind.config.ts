import type { Config } from "tailwindcss";
import { PluginCreator } from 'tailwindcss/types/config';

const plugin: PluginCreator = ({ addUtilities }) => {
  const newUtilities = {
    ".scrollbar-thin": {
      scrollbarWidth: "thin",
      scrollbarColor: " rgb(167 199 231)  transparent ",
    },
    ".scrollbar-webkit": {
      "&::-webkit-scrollbar": {
        width: "8px",
      },
      "&::-webkit-scrollbar-track": {
        background: "white",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "rgb(167 199 231)",
        borderRadius: "20px",
        border: "1px doted white",
      },
    },
  };
  addUtilities(newUtilities,{ respectPrefix: false, respectImportant: true } );
};

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "824px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "2500px",
      "short-height": { raw: "(max-height: 430px)" },
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
        "my-bg-listek": "url('/jeden-listek.png')",
        "custom-gradient":
          "linear-gradient(to top, rgba(6, 10, 16, 0.3), rgba(6, 10, 16, 0.2))",
      },
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
        scaleFadeIn: {
          "0%": {
            opacity: "0", // Startowa niewidoczność
            transform: "scale(0.5)", // Początkowy rozmiar
          },
          "100%": {
            opacity: "1", // Widoczność
            transform: "scale(1)", // Finalny rozmiar
          },
        },
        
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.5)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOn: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        slideLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOutLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-80%)" },
        },
        drawBorder: {
          "0%": { borderWidth: "0" },
          "100%": { borderWidth: "8px" },
        },
      },
      animation: {
        slideLeft: "slideLeft 0.8s forwards",
        slideOutLeft: "slideOutLeft 0.5s forwards, fadeOn 0.4s forwards",
        fadeIn: "fadeIn 1s ease-in-out",
        drawBorder: "drawBorder 2s forwards",
        scaleIn: "scaleIn 0.8s ease-in-out forwards",
        scaleFadeIn: "scaleFadeIn 0.8s ease-in-out forwards", // Definicja czasu trwania i stylu
      },
    },
  },
  plugins: [plugin],
} satisfies Config;
