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
      initial={{ x: -50, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 1, ease: "easeInOut", type: "tween" }}
      className="my-4"
    >
      <PageHeader id={"offer-face"}>Zabiegi na twarz</PageHeader>
      <div ref={ref} className="flex justify-center  w-full my-4 md:my-2 2xl:my-2 sm:h-full md:min-h-[33rem] ">
        <section className="grid  gap-1 sm:gap-4 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2   lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 md:justify-items-center  2xl:justify-items-center 2xl:gap-11 rounded">
          <CardFaceItem />
        </section>
      </div>
    </motion.div>
  );
};

export default OffersCardFace;
