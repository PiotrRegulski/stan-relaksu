import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ImageCard from "../about/ImageCard";
import { Noto } from "../fonts";

const imgURLs = [
  {
    src: "/contact/wygląd-gabinet-szafa.jpg",
    label:
      "Naturoterapeutka Kinga Wołoszka w gabinecie terapii manualnej i masażu - Stan Relaksu",
    caption: "Terapia manualna kolana",
    marginTop: "20px",
    href: "#",
  },
  {
    src: "/contact/wyglad-gabinet-meble.jpg",
    label:
      "Odkryj gabinet terapii manualnej i masażu - Stan relaksu, gdzie oferowane są profesjonalne zabiegi terapii manualnej i masażu",
    caption: "Terapia manualna",
    marginTop: "40px",
    href: "#",
  },
  {
    src: "/contact/wygląd-gabinet-lozko.jpg",
    label: "Łóżko do masażu w przytulnym gabinecie relaksacyjnym",
    caption: "Terapia wisceralna",
    marginTop: "20px",
    href: "#",
  },
  {
    src: "/contact/wygląd-cwieczenie-yogi.jpg",
    label: "Osoby ćwiczące jogę w jasnej, przestronnej sali",
    caption: "Terapia uroginekologiczna",
    marginTop: "40px",
    href: "#",
  },
];

const OfficeAppearance = () => {
  const refTop = useRef(null);
  const isInViewTop = useInView(refTop, { once: true });
  const refBottom = useRef(null);
  const isInViewBottom = useInView(refBottom, { once: true });
  return (
    <div className="flex flex-col mt-12 bg-gradient-to-r from-secondary via-transparent to-secondary my-4 rounded mx-auto ">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={isInViewTop ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 2, ease: "easeInOut", type: "tween" }}
        className="bg-transparent rounded-xl my-4  "
        ref={refTop}
      >
        <div className="flex flex-col w-full justify-center items-center my-2 px-2 ">
          <h3 className="text-center lg:text-3xl font-semibold text-gray-800">
            Tworzymy to miejsce, aby holistycznie zadbać o Twoje ciało.
          </h3>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={isInViewTop ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeInOut", type: "tween" }}
        className="bg-transparent rounded-xl my-4  "
        ref={refTop}
      >
        <div className="flex flex-col w-full justify-center items-center  px-2 font-bold ">
         
          <p className="lg:text-2xl  py-2 ">
            Poprzez połączenie <strong>jogi i terapii manualnej</strong>.
          </p>
          <p
            className="text-center lg:text-2xl"
          >
            Możesz zatroszczyć się o siebie w sposób kompleksowy.
          </p>
        </div>
      </motion.div>
      <div
        className="flex flex-row overflow-x-auto  gap-2 w-full sm:justify-center sm:items-center bg-gradient-to-r from-secondary via-transparent to-secondary "
        ref={refBottom}
      >
        {imgURLs.map((imgUrl, index) => (
          <div
            key={imgUrl.label}
            className="relative flex shrink-0 w-40 h-[15rem] sm:h-[15rem] sm:w-[9rem] lg:h-[25rem] lg:w-[15rem] xl:h-[26rem] xl:w-[15rem] overflow-hidden my-4"
            style={{ marginTop: imgUrl.marginTop }}
          >
            <motion.div
              className="w-full h-full"
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              animate={isInViewBottom ? { x: 0, opacity: 1 } : {}}
              transition={{ ease: "linear", duration: 0.5 }}
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
    
    </div>
  );
};

export default OfficeAppearance;
