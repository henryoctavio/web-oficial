"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Plus, LinkIcon, ArrowRight } from "lucide-react";

const Proyectos = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const proyectos = [
    { src: "/imagenes/imagen1.png", titulo: "PROYECTO 1", descripcion: "Sitio web corporativo" },
    { src: "/imagenes/ecomerce1.png", titulo: "PROYECTO 2", descripcion: "Tienda online" },
    { src: "/imagenes/panel-gestion.png", titulo: "PROYECTO 3", descripcion: "Gestión de inventarios" },
    { src: "/imagenes/imagen-responsive.png", titulo: "PROYECTO 4", descripcion: "Páginas web" },
    { src: "/imagenes/buscador-imagenes.png", titulo: "PROYECTO 5", descripcion: "Buscador de imágenes" },
    { src: "/imagenes/tienda-online2.png", titulo: "PROYECTO 6", descripcion: "Tienda electrónica" },
  ];

  return (
    <section id="projects" className="flex flex-col items-center py-12 bg-gray-900">
      <h2 className="primary__title mb-4!">Proyectos Recientes</h2>
      <h3 className="text-base sm:text-lg md:text-xl lg:text-lg text-[#9fa5a5] mb-10 text-center">
        Estos son algunos Proyectos que he creado recientemente...
      </h3>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map((proyecto, i) => (
            <div
              key={i}
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              className="relative w-full aspect-3/2 group overflow-hidden rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.3)] transform transition duration-500 hover:scale-105"
            >
              <Image
                src={proyecto.src}
                alt={proyecto.titulo}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       33vw"
              />
              <div
                className={`absolute inset-0 bg-white/70 flex flex-col items-center justify-center transition duration-500 ${
                  activeIndex === i ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              >
                <div className="flex space-x-4 text-black text-xl md:text-3xl mb-4">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-black text-white shadow-md hover:text-blue-200 transition"
                  >
                    <LinkIcon />
                  </a>
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // evita cerrar el overlay
                      setSelectedImage(proyecto.src);
                    }}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-black text-white shadow-md hover:text-blue-200 transition cursor-pointer"
                  >
                    <Plus />
                  </button>
                </div>
                <p className="text-black text-lg font-semibold">{proyecto.titulo}</p>
                <p className="text-black text-base mb-4">{proyecto.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="relative w-[90%] max-w-3xl">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 text-white bg-red-600 rounded-full p-2 hover:bg-red-500 transition cursor-pointer"
              >
                ✕
              </button>
              <Image
                src={selectedImage}
                alt="Proyecto ampliado"
                width={1200}
                height={800}
                className="rounded-lg object-contain"
              />
            </div>
          </div>
        )}
      </div>

      <Link
        href="/proyectos"
        className="mt-10 inline-flex items-center px-6 py-3 bg-[#0dcaf0] text-black font-semibold rounded-lg shadow-md hover:bg-[#0bbcd9] transition"
      >
        Ver más Proyectos
        <div className="ml-2 flex items-center justify-center w-6 h-6 rounded-full bg-black">
          <ArrowRight className="w-4 h-4 text-[#0dcaf0]" />
        </div>
      </Link>
    </section>
  );
};

export default Proyectos;
