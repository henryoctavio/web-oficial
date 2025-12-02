"use client";
import React from "react";
import { motion, Variants, Transition } from "framer-motion";
import MaxWidthWrapper from "./MaxWdthWrapper";
import DeviceMockup from "@/components/DeviceMockup";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const transition = (delay = 0): Transition => ({
  duration: 0.8,
  ease: "easeOut", // ✅ ahora con string compatible con TS
  delay,
});

const ResponsiveAnimation: React.FC = () => {
  return (
    <section className="relative pt-10">
      <MaxWidthWrapper className="text-white py-24 lg:grid lg:grid-cols-2 gap-10 items-center">
        {/* TEXTO */}
        <div className="flex flex-col items-center lg:items-start px-6 order-1 lg:order-none">
          <motion.h2
            className="primary__title text-center lg:text-left"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={transition(0.1)}
          >
            SITIOS WEB RESPONSIVE
          </motion.h2>

          <motion.p
            className="mt-8 text-center lg:text-left text-white max-w-xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={transition(0.3)}
          >
            Tu sitio web se verá increíble sin importar desde dónde lo vean tus clientes: celular, tablet o computadora.
          </motion.p>

          <motion.div
            className="mt-10 flex sm:flex-row gap-9 items-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={transition(0.5)}
          >
            <motion.a
              href="#"
              className="first-text text-sm sm:text-base"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={transition(0.7)}
            >
              Leer Más
            </motion.a>
            <motion.a
              href="#"
              className="btn1 first-text text-sm sm:text-base"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={transition(0.9)}
            >
              Contáctanos
            </motion.a>
          </motion.div>
        </div>

        {/* IMÁGENES */}
        <div className="relative w-full h-[400px] flex flex-col lg:flex-row items-center justify-center mt-12 lg:mt-0 space-y-5 lg:space-y-0">
          {/* Tablet - izquierda */}
          <motion.img
            src="/tablet-mockup.png"
            alt="imagen tableta"
            className="left-[-8%] bottom-0 w-32 sm:w-40 md:w-44 lg:w-60 z-20 static lg:absolute"
            style={{ transform: "rotateX(50deg)" }}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={transition(0.8)}
          />

          {/* Centro */}
          <motion.div
            className="z-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={transition(0.4)}
          >
            <DeviceMockup
              className="max-w-[220px] sm:max-w-[250px] md:max-w-[280px] lg:max-w-[350px]"
              imgSrc="/testimonial/imagen1.png"
            />
          </motion.div>

          {/* Móvil - derecha */}
          <motion.img
            src="/responsive-movil.png"
            alt="Imagen móvil"
            className="static lg:absolute bottom-0 right-[2%] w-16 sm:w-20 md:w-24 lg:w-32 h-auto object-contain z-20 lg:mb-[45px]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={transition(1)}
          />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ResponsiveAnimation;
