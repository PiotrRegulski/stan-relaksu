import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ImageCard from "../about/ImageCard";
import { Noto } from "../fonts";

const imgURLs = [
  {
    src: "/contact/wygląd-gabinet-szafa.jpg",
    label: "Wygląd gabinetu szafa",
    caption: "Terapia manualna kolana",
    marginTop: "20px",
    href: "/",
  },
  {
    src: "/contact/wyglad-gabinet-meble.jpg",
    label: "Wygląd gabinetu meble",
    caption: "Terapia manualna",
    marginTop: "40px",
    href: "/",
  },
  {
    src: "/contact/wygląd-gabinet-lozko.jpg",
    label: "Wygląd gabinetu lozko",
    caption: "Terapia wisceralna",
    marginTop: "20px",
    href: "/",
  },
  {
    src: "/contact/wygląd-cwieczenie-yogi.jpg",
    label: "ćwiczenie yogi",
    caption: "Terapia uroginekologiczna",
    marginTop: "40px",
    href: "/",
  },
];

const OfficeAppearance = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      className="flex flex-col  bg-gradient-to-r from-secondary via-transparent to-secondary"
    >
      <div className="  bg-gradient-to-r from-secondary via-transparent to-secondary rounded-xl my-4 ">
        <div className="flex w-full justify-center items-center ">
          <p className={`${Noto.className} text-center my-4 lg:text-xl`}>
            Tworzymy to miejsce, aby holistycznie zadbać o Twoje ciało.
            <br></br> Poprzez połączenie{" "}
            <strong>jogi i terapii manualnej</strong> .<br></br>{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-row overflow-x-auto  gap-2 w-full lg:justify-center lg:items-center ">
        {" "}
        {imgURLs.map((imgUrl, index) => (
          <div
            key={imgUrl.label}
            className="relative flex shrink-0 w-72 h-[21rem] 2xl:h-[28rem] overflow-hidden my-4"
            style={{ marginTop: imgUrl.marginTop }}
          >
            <motion.div
              className="w-full h-full"
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ type: "spring", duration: 2 }}
            >
              <ImageCard
                key={imgUrl.label}
                href={imgUrl.href}
                src={imgUrl.src}
                alt={imgUrl.label}
              />
            </motion.div>
          </div>
        ))}
      </div>
      <div className="  bg-gradient-to-r from-secondary via-transparent to-secondary rounded-xl ">
        <div className="flex w-full justify-center items-center my-4 ">
          <p className={`${Noto.className} text-center my-4 lg:text-xl`}>
            Możesz zatroszczyć się o siebie w sposób kompleksowy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfficeAppearance;
