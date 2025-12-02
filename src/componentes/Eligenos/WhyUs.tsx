"use client";

import React, { useEffect, useRef, useState } from "react";
import { IoPeopleOutline } from "react-icons/io5";
import "./WhyUs.css";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const team = [{ role: "Founder" }, { role: "President" }, { role: "Designer" }];

const stats = [
  { number: 2022, label: "Innovando desde", indicator: "+" },
  { number: 60, label: "Proyectos", indicator: "+" },
  { number: 3, label: "Profesionales" },
  { number: 100, label: "Dedicacion en cada entrega", indicator: "%" },
];

const Odometer = dynamic(() => import("react-odometerjs"), { ssr: false });

const WhyUs = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const square2Ref = useRef<HTMLDivElement | null>(null);

  const [displayedStats, setDisplayedStats] = useState(stats.map(() => 0));
  const [textVisible, setTextVisible] = useState(false);
  const [square2Visible, setSquare2Visible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === textRef.current && entry.isIntersecting) {
            setTextVisible(true);
          }
          if (entry.target === square2Ref.current && entry.isIntersecting) {
            setSquare2Visible(true);
            setDisplayedStats(stats.map((stat) => stat.number));
          }
        });
      },
      {
        threshold: 0.7, // 10% del elemento visible
      }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (square2Ref.current) observer.observe(square2Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="whyus">
      <div className="about" ref={sectionRef}>
        {/* Texto principal */}
        <div className={`text ${textVisible ? "show" : ""} `} ref={textRef}>
          <h1>¿Por qué Nosotros?</h1>
          <p>
            En un mundo lleno de opciones, destacamos por nuestro compromiso, profesionalismo y resultados comprobados. Nos
            apasiona lo que hacemos, y eso se nota en cada proyecto que entregamos.
          </p>
        </div>

        {/* Integrantes con animación desde ARRIBA */}
        <motion.div
          className="square1"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {team.map((member, idx) => (
            <div className="icon-per" key={idx}>
              <IoPeopleOutline className="icon" />
              <div className="icon-circle"></div>
              <p>{member.role}:</p>
            </div>
          ))}
        </motion.div>

        {/* Métricas con animación desde ABAJO */}
        <motion.div
          className="square2 text-center"
          ref={square2Ref}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1.8, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {stats.map((stat, idx) => (
            <div className="flex" key={idx}>
              <h1 className="text-3xl font-bold ">
                <Odometer value={displayedStats[idx]} format="d" />
                {stat.indicator && (
                  <motion.span
                    className="ml-1 text-blue-400 text-4xl font-black"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {stat.indicator}
                  </motion.span>
                )}
              </h1>
              <p>{stat.label}</p>
            </div>
          ))}

          <div className="bg-square"></div>
        </motion.div>
      </div>
    </section>
  );
};
export default WhyUs;
