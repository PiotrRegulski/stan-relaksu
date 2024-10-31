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
     
      initial={{ x:-200, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 5, ease: "easeInOut", type: "spring" }}
      className="mt-[2rem]"
    >
      <PageHeader id={"offer-title"}>Zabiegi na ciało</PageHeader>
      <div   className="flex justify-center  w-full my-4 md:my-2 2xl:my-12 sm:h-full md:min-h-[33rem] ">
        <section ref={ref} className="grid  gap-5 md:gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3   lg:grid-cols-3 2xl:grid-cols-3 md:justify-items-center  2xl:justify-items-center 2xl:gap-11 rounded">
          <CardBodyItem />
        </section>
      </div>
    </motion.div>
  );
};

export default OffersCardBody;
