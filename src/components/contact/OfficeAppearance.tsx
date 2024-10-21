import React,{useRef} from "react";
import { motion,useInView } from "framer-motion";
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="flex overflow-x-auto py-12 bg-secondary gap-2 pl-1 md:gap-4 w-screen  2xl:justify-center">
      {imgURLs.map((imgUrl,index) => (
        <div 
          key={imgUrl.label}
          className="relative flex shrink-0 w-80 h-[29rem] 2xl:w-[25rem] 2xl:h-[35rem] overflow-hidden"
          style={{ marginTop: imgUrl.marginTop }}
        >
          <motion.div
            className="w-full h-full"
            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ type: "spring", duration: 2 }}
          >
            <ImageCard key={imgUrl.label} href={imgUrl.href} src={imgUrl.src} alt={imgUrl.label} />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default OfficeAppearance;
