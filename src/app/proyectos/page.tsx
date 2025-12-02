// app/proyectos/page.tsx
"use client";
import Image from "next/image";

const todosProyectos = [
  { src: "/Imagenes/imagen1.png", titulo: "Proyecto 1", descripcion: "Sitio web corporativo" },
  { src: "/Imagenes/ecomerce1.png", titulo: "Proyecto 2", descripcion: "Tienda online" },
  { src: "/Imagenes/panel-gestion.png", titulo: "Proyecto 3", descripcion: "Gestión de inventarios" },
  { src: "/Imagenes/imagen-responsive.png", titulo: "Proyecto 4", descripcion: "Páginas web" },
  { src: "/Imagenes/buscador-imagenes.png", titulo: "Proyecto 5", descripcion: "Buscador de imágenes" },
  { src: "/Imagenes/tienda-online2.png", titulo: "Proyecto 6", descripcion: "Tienda electrónica" },
  { src: "/Imagenes/otro-proyecto.png", titulo: "Proyecto 7", descripcion: "Otro más" },
  { src: "/Imagenes/otro-proyecto2.png", titulo: "Proyecto 8", descripcion: "Otro más" },
  // ...los que quieras
];

export default function ProyectosPage() {
  return (
    <section className="flex flex-col items-center py-12 bg-[#030014] text-white">
      <h1 className="primary__title mt-10 mb-3">Proyectos recientes</h1>
      <p className="mb-10">
        Aquí podrás ver un resumen de nuestra experiencia creando productos, servicios, aplicaciones y sitios web.
      </p>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {todosProyectos.map((proyecto, i) => (
            <div key={i} className="relative w-full aspect-[3/2] overflow-hidden rounded-lg shadow-lg">
              <Image src={proyecto.src} alt={proyecto.titulo} fill className="object-cover rounded-lg" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4">
                <p className="text-lg font-semibold">{proyecto.titulo}</p>
                <p className="text-sm">{proyecto.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
