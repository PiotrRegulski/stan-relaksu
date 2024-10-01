"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const AboutMeShort = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollY } = useScroll();
  const [startY, setStartY] = useState(600);

  useEffect(() => {
    if (isInView) {
      setStartY(window.scrollY);
    }
  }, [isInView]);

  const imageOpacity = useTransform(
    scrollY,
    [startY, startY + 300, startY + 400, startY + 500],
    [1, 0.5, 0.5, 0]
  );
  const imageY = useTransform(scrollY, [startY, startY + 200], [0, 100]);
  const imageYs =useTransform(scrollY, [startY, startY + 200], [0, -100]);
  return (
    <div
      
      className="flex flex-col md:flex-row justify-center items-center md:my-24 lg:my-24 mx-auto md:mx-4 lg:mx-4 2xl:mx-48 rounded bg-white"
    >
      <motion.div
      ref={ref}
        className="flex justify-end md:w-1/2"
        initial={{ x: -400, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <motion.div
          id="troche-o-omnie"
          className="relative w-[12rem]  sm:w-[16rem] md:w-[15rem] xl:w-[20rem] h-[15rem] sm:h-[19rem] xl:h-[24rem] z-20"
          whileHover={{ scale: 0.9 }}
          transition={{ type: "spring" }}
          style={{ y: imageY }}
        >
          <Image
            id="photo1"
            src="/mainpagemasazplecy.jpg"
            alt="Kinga Wołoszka- fizjoterapeutka"
            fill
            sizes="(max-width: 600px) 100vw, 50vw"
            className="object-fill h-full w-full"
            priority={true}
          />
        </motion.div>
        <motion.div
          className="relative w-[12rem] sm:w-[16rem] xl:w-[21rem] h-[17rem] sm:h-[21rem] xl:h-[26rem] -ml-10 mt-20"
          whileHover={{ scale: 0.9 }}
          transition={{ type: "spring" }}
          style={{ y: imageYs }}
        >
          <Image
            id="photo2"
            src="/hero.jpg"
            alt="Kinga Wołoszka- fizjoterapeutka"
            fill
            sizes="(max-width: 600px) 100vw, 50vw"
            className="object-fill h-full w-full"
            priority={true}
          />
        </motion.div>
      </motion.div>
      <motion.div
        className="lg:w-1/2 mx-4 my-4"
        initial={{ x: 800, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{duration: 2, ease: "easeInOut" , type: "spring" }}
      >
        <p className="text-4xl font-[Cormorant-Garamond]">
          CZEŚĆ, <br /> JESTEM KINGA!
        </p>
        <p className=" text-lg lg:text-2xl font-[Montessrat] my-12">
          Przyniosę Ci ulgę w bólu oraz napięciu. Czekam na Ciebie z terapią
          manualną, masażem powięziowym, masażem tkanek głębokich. Głęboko
          odprężającymi technikami masażu twarzy Kobido, masażu relaksacyjnego,
          które pozwolą Ci osiągnąć Stan Relaksu.
        </p>
        <Link
          href="/about"
          className="px-2 py-2 md:px-4 my-4 md:py-2 rounded-xl hover:shadow-xl shadow-lg shadow-gray-400/75 text-sm lg:text-lg bg-primary hover:bg-opacity-70 font-bold hover:underline text-white hover:text-white focus:outline-none focus:shadow-outline"
        >
          Dowiedz się więcej
        </Link>
      </motion.div>
    </div>
  );
};

export default AboutMeShort;
