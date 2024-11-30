import {Cormorant_Infant,Lato,Noto_Serif,Noto_Sans} from "next/font/google";
  import { Lora } from "next/font/google";

  export const CormorantInfant = Cormorant_Infant({
    weight: ["400", "700"],
    subsets: ["latin"],
    display: 'swap',
  });

  export const lato = Lato({
    weight: ["100","300","400", "700"],
    subsets: ["latin"],
    display: 'swap',
  });

  export const lora = Lora({
    weight: ["400","500","600", "700"],
    subsets: ["latin"],
    display: 'swap',
  });
  // export const Noto = Noto_Serif({
  //   weight: ["400","500","600", "700"],
  //   subsets: ["latin"],
  //   display: 'swap',
  // });

  export const Noto = Noto_Sans({
    weight: ["400","500","600", "700"],
    subsets: ["latin"],
    display: 'swap',
  });
  
