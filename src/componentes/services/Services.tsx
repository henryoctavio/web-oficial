"use client"; // Necesario en Next.js para habilitar eventos como onMouseEnter

import { motion } from "framer-motion";
import React, { useState } from "react";
import { IoDiamondOutline, IoLogoCss3, IoLogoFigma } from "react-icons/io5";
import { FaHandshake } from "react-icons/fa";
import "./Services.css";

// Estilos similares a los que aplicabas con JavaScript
const Style1 = {
  background: "#0a121d",
  boxShadow:
    "0px 0px 10px #219cf3, 3px 3px 1px #00e9de, inset 10px 0px 20px #080a11, inset -96px -30px 100px #090912, inset 6px -26px 120px #0b83ff",
  border: "2px solid transparent",
};

const servicios = [
  {
    id: "box1",
    title: "Digital Marketing",
    icon: <IoDiamondOutline />,
    text: "Posiciona tu sitio web en los primeros lugares de las búsquedas de Google, obtén publicidad en redes sociales.",
  },
  {
    id: "box2",
    title: "UX Design",
    icon: <IoLogoCss3 />,
    text: "Experiencias intuitivas y agradables que guían al usuario de forma natural hacia tus objetivos.",
  },
  {
    id: "box3",
    title: "UI Design",
    icon: <IoLogoFigma />,
    text: "Diseños modernos, atractivos y funcionales que reflejan la identidad de tu marca.",
  },
  {
    id: "box4",
    title: "Consultorias",
    icon: <FaHandshake />,
    text: "Realizamos visitas gratuitas a tu empresa para asesorarte en el crecimiento de tu negocio utilizando las tecnologías del momento.",
  },
];

const Services = () => {
  const [activeBox, setActiveBox] = useState("box1"); // 🔁 Estado para manejar la caja activa

  const activeService = servicios.find((s) => s.id === activeBox);

  return (
    <section id="services2">
      <div className="offer">
        {/* ENCABEZADO */}
        <div className="text-flex show ">
          {/* h2 animado de izquierda a derecha */}
          <motion.h2
            className="primary__title"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            INNOVAMOS TU PRESENCIA DIGITAL
          </motion.h2>

          {/* p animado de derecha a izquierda */}
          <motion.p
            className="text__muted"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Combinamos diseño, estrategia y tecnología para crear experiencias web visualmente impactantes y centradas en el
            usuario.
          </motion.p>
        </div>

        {/* ICONOS SUPERIORES */}

        <div className="four-box show">
          {servicios.map((servicio, index) => (
            <div
              key={servicio.id}
              className={`box ${servicio.id} ${activeBox === servicio.id ? "active" : ""}`}
              onMouseEnter={() => setActiveBox(servicio.id)} // 👈 Maneja el cambio activo
              style={activeBox === servicio.id ? Style1 : {}}
            >
              <div className="icon-skew">{servicio.icon}</div>
              <p>{servicio.title}</p>
              <div className={`line${index + 1} ${activeBox === servicio.id ? "active-line" : ""}`}></div>
            </div>
          ))}
        </div>

        {/* DETALLE INFERIOR */}
        <div className="detail show">
          {servicios.map((servicio) => {
            const isActive = activeBox === servicio.id;
            return (
              <div
                key={servicio.id}
                className={`first-show${servicio.id.slice(-1)} ${isActive ? "active" : "hidden"}`}
                style={{
                  transform: isActive ? "translateY(0px)" : "translateY(20px)",
                  opacity: isActive ? 1 : 0,
                  zIndex: isActive ? 1 : -1,
                  transition: isActive ? ".6s ease-out .3s" : ".2s ease-out",
                }}
              >
                {/* ALTERNAR TEXTO/DISEÑO */}
                {servicio.id === "box2" || servicio.id === "box4" ? (
                  <>
                    <div className="text show">
                      <h3>{servicio.title}</h3>
                      <p>{servicio.text}</p>
                      <div className="flex-link">
                        <a href="#">Hire Teams</a>
                        <a href="#">Learn More</a>
                      </div>
                    </div>
                    {/*tarjetas dentro de la caja grande*/}
                    <div className="css-design" style={{ right: "25%" }}>
                      <div className="card1-css"></div>
                      <div className="card2-css"></div>
                      <div className="card3-css"></div>
                      <div className="icon-inside">{servicio.icon}</div>
                    </div>
                  </>
                ) : (
                  <>
                    {/*tarjetas de la caja grande */}
                    <div className="css-design">
                      <div className="card1-css"></div>
                      <div className="card2-css"></div>
                      <div className="card3-css"></div>
                      <div className="icon-inside">{servicio.icon}</div>
                    </div>
                    <div className="text show">
                      <h3>{servicio.title}</h3>
                      <p>{servicio.text}</p>
                      <div className="flex-link">
                        <a href="#">Hire Teams</a>
                        <a href="#">Learn More</a>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
