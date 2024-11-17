"use client";
import React, { useRef } from "react";
import { Noto } from "@/components/fonts";
import { motion, useInView, AnimatePresence } from "framer-motion";
interface MotionHeaderProps {
  title?: string;
  description?: string;
}

const MotionHeader: React.FC<MotionHeaderProps> = ({ title, description }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  return (
    <motion.div
    ref={ref}
      id={"offerDetail"}
      initial={{ x: -100, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 1, ease: "easeInOut", type: "tween" }}
      className=" w-full sm:w-10/12 md:w-10/12 xl:w-2/3 2xl:w-2/3  bg-mainpeach sm:h-[12rem] md:h-[16rem] 2xl:h-[20rem] flex justify-center  items-center text-black sm:border-2 sm:border-l-0 sm:rounded-r-full py-4 md:py-2 "
    >
      <div className="flex flex-col justify-center items-center  md:h-[90%] border-y-2  sm:w-full sm:border-t-2 sm:border-b-2 sm:border-r-2 sm:border-l-0 sm:rounded-r-full text-xl py-4 md:py-2 sm:mr-4 sm:pr-9 border-triadbrown bg-mainpeach  ">
        <div className=" xl:w-3/4 md:my-8 w-full px-2">
          {" "}
          <h1
            className={`${Noto.className} font-semibold text-center text-lg md:text-xl 2xl:text-2xl my-2 md:my-4`}
          >
            {title}
          </h1>
          <div>
            <p className="font-semibold text-base md:text-lg 2xl:text-xl text-center text-balance px-2 ">
              {" "}
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MotionHeader;
