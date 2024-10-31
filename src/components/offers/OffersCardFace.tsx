"use client";
import React from "react";
import { useEffect, useState, useRef } from "react";

import PageHeader from "../homepage/PageHeader";
import CardFaceItem from "./CardFaceItem";

import { motion, useInView,  } from "framer-motion";

const OffersCardFace = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      initial={{ x: 2, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 5, ease: "easeInOut", type: "spring" }}
    >
      <PageHeader id={"offer"}>Zabiegi na twarz</PageHeader>
      <div ref={ref} className="flex justify-center  w-full my-4 md:my-2 2xl:my-12 sm:h-full md:min-h-[33rem] ">
        <section className="grid  gap-5 md:gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3   lg:grid-cols-3 2xl:grid-cols-3 md:justify-items-center  2xl:justify-items-center 2xl:gap-11 rounded">
          <CardFaceItem />
        </section>
      </div>
    </motion.div>
  );
};

export default OffersCardFace;
