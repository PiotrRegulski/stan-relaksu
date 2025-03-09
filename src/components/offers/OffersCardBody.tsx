"use client";
import React from "react";
import {  useRef } from "react";

import PageHeader from "../homepage/PageHeader";
import CardBodyItem from "./CardBodyItem";
import { motion, useInView, AnimatePresence } from "framer-motion";

const OffersCardBody = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
     
      initial={{ x:-10, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, ease: "easeInOut", type: "tween" }}
      className="sm:mt-[2rem]"
    >
      <PageHeader id={"offer-title"}><h2>Zabiegi na ciało</h2></PageHeader>
      <div   className="flex justify-center  w-full  md:my-2 2xl:my-2 sm:h-full md:min-h-[33rem] xl:my-4 ">
        <section ref={ref} className="grid  gap-1 sm:gap-4 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2   lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 md:justify-items-center  2xl:justify-items-center 2xl:gap-6 ">
          <CardBodyItem />
        </section>
      </div>
    </motion.div>
  );
};

export default OffersCardBody;
