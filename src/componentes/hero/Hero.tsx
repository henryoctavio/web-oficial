"use client";

import React, { useRef } from "react";
import dynamic from "next/dynamic";
import ComputersCanvas from "@/componentes/canvas/Computers";
import { styles } from "@/styles";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./Hero.css";

gsap.registerPlugin(useGSAP);
const Computers = dynamic(() => import("@/componentes/canvas/Computers"), { ssr: false });

const Hero = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".hero__text", {
        fontSize: 10,
        duration: 1.2,
        delay: 1,
        ease: "sine.in",
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="relative w-full h-screen mx-auto bg-[url('/herobg.webp')] bg-cover bg-center">
      <div className={`absolute inset-0 top-[110px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className="primary__title font-black text-[40px] sm:text-[24px] md:text-[40px] lg:text-[50px] xl:text-[40px] text-center sm:text-left">
            SOLUCIONES: {""}
            <span className="text-[#915EFF]">
              <ReactTyped strings={["ágiles", "Creativas", "Personalizadas"]} typeSpeed={50} backSpeed={30} loop />
            </span>
          </h1>

          {/* ANIMACIÓN CON FRAMER MOTION */}
          <p
            className={`${styles.heroSubText} hero__text mt-2 text-white text-center sm:text-left transition-opacity duration-1000 delay-300 opacity-100 translate-x-0 animate-fade-in`}
          >
            Transformamos ideas en experiencias digitales, <br className="sm:block hidden" />
            interfaces modernas y aplicaciones web de alto rendimiento.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute bottom-20 md:bottom-5 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4  border-[rgb(var(--ui-secondary)/0.6)] flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[rgb(var(--ui-secondary)/0.6)] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
