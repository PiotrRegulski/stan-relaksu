import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";


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
  const refHeading = useRef(null);
  const refGallery = useRef(null);
  const inViewHeading = useInView(refHeading, { once: true, margin: "-50px" });
  const inViewGallery = useInView(refGallery, { once: true, margin: "-50px" });

  return (
    <section className="w-full py-20 bg-gradient-to-r from-secondary via-transparent to-secondary overflow-hidden">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        {/* --- Tekst --- */}
        <motion.div
          ref={refHeading}
          initial={{ opacity: 0, y: 50 }}
          animate={inViewHeading ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-800 mb-4">
            Tworzymy to miejsce, aby holistycznie zadbać o Twoje ciało.
          </h2>
          <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
            Poprzez połączenie jogi i terapii manualnej.
          </p>
          <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
            Możesz zatroszczyć się o siebie w sposób kompleksowy.
          </p>
        </motion.div>

        {/* --- Galeria --- */}
        <motion.div
          ref={refGallery}
          initial={{ opacity: 0, y: 50 }}
          animate={inViewGallery ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-row overflow-x-auto snap-x snap-mandatory gap-4 w-full px-4 py-10 sm:justify-center sm:items-center scrollbar-hide"
        >
          {imgURLs.map((imgUrl, index) => (
            <motion.div
              key={imgUrl.label}
              className="snap-start relative flex shrink-0 w-40 h-[15rem] sm:h-[15rem] sm:w-[10rem] lg:h-[25rem] lg:w-[15rem] xl:h-[26rem] xl:w-[16rem] overflow-hidden rounded-2xl shadow-md"
              style={{ marginTop: imgUrl.marginTop }}
              initial={{ x: index % 2 === 0 ? -80 : 80, opacity: 0 }}
              animate={inViewGallery ? { x: 0, opacity: 1 } : {}}
              transition={{ ease: "easeOut", duration: 0.7, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={imgUrl.src}
                alt={imgUrl.label}
                fill
                sizes="(max-width: 768px) 150px, (max-width: 1200px) 250px, 300px"
                className="object-cover"
                priority={index === 0}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OfficeAppearance;
