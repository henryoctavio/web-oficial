"use client";
import React from "react";
import Image from "next/image";
import "./Testimonios.css";
import { FaStar } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Testimonios = () => {
  const testimonios = [
    {
      img: "/imagenes/user-1.jpeg",
      name: "Joel Eze",
      role: "CEO of Ogora Collection",
      text: "Buena atención y cumplidos con los tiempos, empresa seria, muchas gracias a ellos.",
    },
    {
      img: "/imagenes/user-2.jpeg",
      name: "Emanuel Eze",
      role: "CEO of Realist",
      text: "Excelente servicio, siempre atentos y profesionales. Los recomiendo totalmente.",
    },
    {
      img: "/imagenes/user-3.jpeg",
      name: "Jennifer",
      role: "Finance Specialist",
      text: "Muy responsables y rápidos en la entrega. Superaron mis expectativas.",
    },
    {
      img: "/imagenes/user-4.jpeg",
      name: "Caleb Chisom",
      role: "CEO of Ade Shoe",
      text: "Un equipo confiable que ofrece calidad en cada proyecto. Sin duda volvería a contratarlos.",
    },
    {
      img: "/imagenes/user-5.jpeg",
      name: "Amaka Ogora",
      role: "CEO of Cleand Concept",
      text: "La comunicación fue excelente y el trabajo impecable. Quedé muy satisfecha.",
    },
  ];

  return (
    <section id="tetimonios" className="py-16">
      <div className="container mx-auto px-4 ">
        <h1 className="text-3xl font-bold text-center text-white mb-12" data-aos="fade-left">
          Comentarios <span className="text-cyan-400">Usuarios</span>
        </h1>

        {/* Carrusel con Swiper */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          speed={1000}
          autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          loop={true}
          navigation={true}
          style={
            {
              "--swiper-navigation": "display:none",
              "--swiper-pagination-color": "#fff",
              "--swiper-pagination-bottom": "50px",
            } as React.CSSProperties
          }
          breakpoints={{
            600: { slidesPerView: 2, spaceBetween: 20 }, // >= 600px -> 2
            900: { slidesPerView: 3, spaceBetween: 20 }, // >= 900px -> 3
            1200: { slidesPerView: 3, spaceBetween: 24 }, // >= 1200px -> 3 (o más si quieres)
          }}
        >
          {testimonios.map((t, i) => (
            <SwiperSlide key={i} className="flex">
              <div
                className="bg-[#0a0f2c] p-6 rounded-lg shadow-md text-center  
                           border border-transparent hover:border-cyan-400 
                          hover:bg-[#030014]   transition h-[350px] flex flex-col justify-between "
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image src={t.img} alt={t.name} width={80} height={80} className="object-cover" />
                </div>
                <p className="mb-3 text-[#7f8296]">{t.text}</p>

                <div className="flex-center stars-container mb-4">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h2 className="text-white font-semibold mb-4">{t.name}</h2>
                <p className="text-cyan-400 text-sm mb-4">{t.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* paginación afuera */}
      </div>
    </section>
  );
};

export default Testimonios;
