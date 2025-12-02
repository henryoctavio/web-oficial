"use client";

import "./Servicios.css";
import React from "react";
import { FaPaintBrush, FaShoppingCart } from "react-icons/fa";
import { BsCodeSquare } from "react-icons/bs";
import { HiOutlineCode } from "react-icons/hi";
import { MdPhoneIphone } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { motion } from "framer-motion";

interface ServiceProps {
  title: string;
  description: string | React.ReactNode;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
}

// Componente memoizado para evitar re-renders innecesarios
const Service: React.FC<ServiceProps> = React.memo(({ title, description, Icon, color }) => {
  return (
    <motion.article
      className="service"
      style={{ "--color-primary": color } as React.CSSProperties}
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className="service__top">
        <div className="icon__container">
          <Icon className="icon" />
        </div>
        <h3 className="title">{title}</h3>
      </div>
      <div className="service__midle">
        <p className="text__muted description">{description}</p>
      </div>
    </motion.article>
  );
});

const Servicios: React.FC = () => {
  const services: ServiceProps[] = [
    {
      title: "UI/UX Diseño",
      description:
        "Descubre cómo el diseño de interfaz de usuario (UI) y la experiencia de usuario (UX) pueden transformar tus proyectos digitales.",
      Icon: FaPaintBrush,
      color: "var(--color-brush)",
    },
    {
      title: "Desarrollo Web",
      description:
        "Diseñamos y desarrollamos sitios web modernos, optimizados y enfocados en resultados para impulsar tu presencia digital.",
      Icon: BsCodeSquare,
      color: "var(--color-success)",
    },
    {
      title: "Creación de contenido",
      description: "Explora cómo la creación de contenido estratégico puede elevar tu marca y conectar con tu audiencia.",
      Icon: TfiWrite,
      color: "blueviolet",
    },
    {
      title: "E-ecommerce",
      description: "Impulsa tu negocio con soluciones de comercio electrónico diseñadas para convertir visitantes en clientes.",
      Icon: FaShoppingCart,
      color: "var(--color-brush)",
    },
    {
      title: "Software",
      description: "Transforma tus ideas en soluciones de software a medida. Desarrollo robusto y escalable.",
      Icon: HiOutlineCode,
      color: "var(--color-success)",
    },
    {
      title: "Aplicativos Móviles",
      description: "Lleva tu marca al bolsillo de tus usuarios con apps móviles intuitivas y modernas.",
      Icon: MdPhoneIphone,
      color: "blueviolet",
    },
  ];

  return (
    <section id="services">
      <div className="section__wrapper services__wrapper">
        <div className="section__header center">
          <motion.h2
            className="primary__title"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            NUESTROS SERVICIOS
          </motion.h2>

          <motion.div
            className="rounded-b-2xl rounded-lg p-4"
            style={{ borderBottom: "0.5px solid var(--primary)" }}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <p className="text__muted text-[16px] text-center sm:text-left">
              Transformamos tus ideas en proyectos web distintivos que inspiran y cautivan a tus clientes.
            </p>
          </motion.div>
        </div>

        <div className="services__group">
          {services.map((service, index) => (
            <Service key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
/** */
