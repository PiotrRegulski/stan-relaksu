"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { Noto } from "../fonts";
import ButtonMain from "../layout/ButtonMain";

const AboutMeShort = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollY } = useScroll();
  const [startY, setStartY] = useState(600);

  useEffect(() => {
    if (isInView && startY === null) {
      setStartY(window.scrollY);
    }
  }, [isInView, startY]);

  const imageY = useTransform(scrollY, [startY - 300, startY + 800], [0, 80]);
  const imageYs = useTransform(scrollY, [startY - 300, startY + 800], [0, -80]);
  const springImageY = useSpring(imageY, { stiffness: 300, damping: 30 });
  const springImageYs = useSpring(imageYs, { stiffness: 300, damping: 30 });

  return (
    <div
      className="flex flex-col lg:gap-4 xl:gap-4  2xl:gap-4  lg:flex-row justify-around items-center  my-6 md:my-2 lg:my-32 2xl:my-20 mx-auto md:mx-4 lg:mx-4 xl:mx-12 2xl:mx-2  bg-white"
      ref={ref}
    >
      <motion.div
        className="flex justify-end md:w-1/2 2xl:w-1/3"
        initial={{ x: -10, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 2 } : {}}
        transition={{ duration: 1, type:"tween" }}
      >
        <motion.div
          id="troche-o-omnie"
          className="relative w-[12rem] sm:w-[16rem] md:w-[15rem] xl:w-[20rem] h-[16rem] sm:h-[19rem] xl:h-[27rem] 2xl:w-[20rem] 2xl:h-[25rem] z-20 overflow-hidden"
          transition={{ type: "spring", duration: 1 }}
          style={{ y: springImageY }}
        >
          <motion.div
            className="relative w-full h-full"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", duration: 1 }}
          >
            <Image
              id="photo1"
              src="/mainpagemasazplecy.jpg"
              alt="Kinga Wołoszka- fizjoterapeutka"
              fill
              sizes="(max-width: 600px) 100vw, 50vw"
              className="object-cover h-full w-full"
              priority={true}
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="relative w-[12rem] sm:w-[16rem] xl:w-[21rem] h-[17rem] sm:h-[21rem] xl:h-[29rem] 2xl:w-[23rem] 2xl:h-[30rem] -ml-10 mt-20 overflow-hidden"
          transition={{ type: "spring" }}
          style={{ y: springImageYs }}
        >
          <motion.div
            className=" relative w-full h-full"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", duration: 1 }}
          >
            <Image
              id="photo2"
              src="/hero.jpg"
              alt="Kinga Wołoszka- fizjoterapeutka"
              fill
              sizes="(max-width: 600px) 100vw, 50vw"
              className="object-cover h-full w-full"
              priority={true}
            />
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        className=" md:w-3/4 lg:w-1/2 mx-4 my-4  "
        initial={{ x: 10, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1,  type: "tween" }}
      >
        <h2 className={`${Noto.className} text-2xl `}>
          Cześć, jestem Kinga Wołoszka
        </h2>
        <p className="text-base lg:text-xl  my-6 text-justify">
          Przyniosę Ci ulgę w bólu oraz napięciu stosując techniki masażu
          powięziowego i terapii manualnej, podpowiem Ci jak możesz pracować ze
          swoim ciałem poprzez indywidualnie dobrane ćwiczenia czy trening
          oddechowy dla poprawy Twojego zdrowia i samopoczucia.
        </p>
        <p className="text-base lg:text-xl  my-6 text-justify">
          Czekam na Ciebie z terapią manualną, masażem powięziowym, masażem
          tkanek głębokich. Głęboko odprężającymi technikami masażu twarzy
          Kobido, masażu relaksacyjnego, które pozwolą Ci osiągnąć
          <span className="whitespace-nowrap font-bold"> Stan Relaksu.</span>
        </p>
        <div className="flex justify-center w-full lg:justify-start">
          <Link href="/omnie" aria-label="Link do strony o mnie">
            <ButtonMain>Dowiedz się więcej</ButtonMain>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMeShort;
