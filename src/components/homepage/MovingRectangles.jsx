"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const MovingRectangles = () => {
  const { scrollY } = useScroll(); // Pobieranie wartości przewijania

  // Transformacje pozycji prostokątów
  const biggerBoxY = useTransform(scrollY, [0, 300], [0, 50]); // Większy prostokąt przesuwa się w dół
  const smallerBoxY = useTransform(scrollY, [0, 300], [0, -50]); // Mniejszy prostokąt przesuwa się w górę

  return (
    <div className="relative w-full h-[200vh] bg-gray-100 flex items-center justify-center">
      {/* Większy prostokąt */}
      <motion.div
        className="absolute bg-blue-500 w-64 h-64 rounded-lg shadow-lg"
        style={{ y: biggerBoxY }}
      ></motion.div>

      {/* Mniejszy prostokąt */}
      <motion.div
        className="absolute bg-red-500 w-48 h-48 rounded-lg shadow-lg"
        style={{ y: smallerBoxY }}
      ></motion.div>
    </div>
  );
};

export default MovingRectangles;
