import React from "react";
import { motion } from "framer-motion";
import ImageCard from "../about/ImageCard";

const imgURLs = [
  {
    src: "/contact/wygląd-gabinet-szafa.jpg",
    label: "Wygląd gabinetu szafa",
    caption: "Terapia manualna kolana",
    marginTop: "20px",
    href:"/"
  },
  {
    src: "/contact/wyglad-gabinet-meble.jpg",
    label: "Wygląd gabinetu meble",
    caption: "Terapia manualna",
    marginTop: "40px",
    href:"/"
  },
  {
    src: "/contact/wygląd-gabinet-lozko.jpg",
    label: "Wygląd gabinetu lozko",
    caption: "Terapia wisceralna",
    marginTop: "20px",
    href:"/"
  },
  {
    src: "/contact/wygląd-cwieczenie-yogi.jpg",
    label: "ćwiczenie yogi",
    caption: "Terapia uroginekologiczna",
    marginTop: "40px",
    href:"/"
  },
];

const OfficeAppearance = () => {
  return (
    <div className="flex overflow-x-auto py-12 bg-secondary gap-2 pl-1 md:gap-4 w-screen  2xl:justify-center">
      {imgURLs.map((imgUrl) => (
        <div
          key={imgUrl.label}
          className="relative flex shrink-0 w-80 h-[29rem] 2xl:w-[25rem] 2xl:h-[35rem] overflow-hidden"
          style={{ marginTop: imgUrl.marginTop }}
        >
          <motion.div
            className="w-full h-full"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", duration: 1 }}
          >
            <ImageCard key={imgUrl.label} href={imgUrl.href} src={imgUrl.src} alt={imgUrl.label} />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default OfficeAppearance;
