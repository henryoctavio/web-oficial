/*** */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const SkillText = () => {
  return (
    <motion.div
      className="w-full h-auto flex flex-col items-center justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Subtítulo elegante */}
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[10px] border border-[#7042f88b] opacity-90 flex items-center gap-2 rounded-md"
      >
        <SparklesIcon className="text-[#b49bff] h-5 w-5" />
        <h2 className="Welcome-text text-[14px] text-white font-semibold tracking-wide">Nuestras Tecnologías</h2>
      </motion.div>

      {/* Título principal */}
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[22px] sm:text-[28px] md:text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Creamos aplicaciones con innovación y calidad
      </motion.div>

      {/* Descripción */}
      <motion.div
        variants={slideInFromRight(0.5)}
        className="text-[15px] sm:text-[20px] md:text-[15px] text-gray-300 mb-10 mt-[10px] text-center max-w-[600px]"
      >
        Utilizamos las tecnologías más modernas para desarrollar soluciones digitales que potencian tu negocio.
      </motion.div>
    </motion.div>
  );
};

export default SkillText;
