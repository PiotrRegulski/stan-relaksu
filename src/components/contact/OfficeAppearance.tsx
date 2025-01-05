import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ImageCard from "../about/ImageCard";
import { Noto } from "../fonts";

const imgURLs = [
  {
    src: "/contact/wygląd-gabinet-szafa.jpg",
    label: "Naturoterapeutka Kinga Wołoszka w gabinecie terapii manualnej i masażu - Stan Relaksu",
    caption: "Terapia manualna kolana",
    marginTop: "20px",
    
  },
  {
    src: "/contact/wyglad-gabinet-meble.jpg",
    label: "Odkryj gabinet terapii manualnej i masażu - Stan relaksu, gdzie oferowane są profesjonalne zabiegi terapii manualnej i masażu",
    caption: "Terapia manualna",
    marginTop: "40px",
   
  },
  {
    src: "/contact/wygląd-gabinet-lozko.jpg",
    label: "Łóżko do masażu w przytulnym gabinecie relaksacyjnym",
    caption: "Terapia wisceralna",
    marginTop: "20px",
    
  },
  {
    src: "/contact/wygląd-cwieczenie-yogi.jpg",
    label: "Osoby ćwiczące jogę w jasnej, przestronnej sali",
    caption: "Terapia uroginekologiczna",
    marginTop: "40px",
   
  },
];

const OfficeAppearance = () => {
  const refTop = useRef(null);
  const isInViewTop = useInView(refTop, { once: true });
  const refBottom = useRef(null);
  const isInViewBottom = useInView(refBottom , { once: true });
  return (
    <div
     
      className="flex flex-col mt-24 "
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={isInViewTop ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 2, ease: "easeInOut", type: "tween" }}
        className="bg-white rounded-xl my-4  "
         ref={refTop}>
        <div className="flex flex-col w-full justify-center items-center my-6 px-2 ">
          <h3 className={`${Noto.className} text-center lg:text-xl font-medium`}>
            Tworzymy to miejsce, aby holistycznie zadbać o Twoje ciało.
          </h3>
          <p className={`${Noto.className} lg:text-lg font-medium `}>
            Poprzez połączenie <strong>jogi i terapii manualnej</strong>.
          </p>
          <p className={`${Noto.className} text-center  lg:text-xl font-medium`}>
            Możesz zatroszczyć się o siebie w sposób kompleksowy.
          </p>
         
        </div>
      </motion.div>
      <div className="flex flex-row overflow-x-auto  gap-2 w-full sm:justify-center sm:items-center bg-gradient-to-r from-secondary via-transparent to-secondary "ref={refBottom}>
        {imgURLs.map((imgUrl, index) => (
          <div
            key={imgUrl.label}
            className="relative flex shrink-0 w-72 h-[23rem] sm:h-[15rem] sm:w-[9rem] lg:h-[25rem] lg:w-[15rem] xl:h-[28rem] 2xl:h-[28rem] 2xl:w-[20rem] overflow-hidden my-4"
            style={{ marginTop: imgUrl.marginTop }}
          >
            <motion.div
              className="w-full h-full"
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              animate={isInViewBottom ? { x: 0, opacity: 1 } : {}}
              transition={{ type: "tween", duration: 1 }}
            >
              <ImageCard
                key={imgUrl.label}
                
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
