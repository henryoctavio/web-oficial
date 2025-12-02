import React from "react";
import { Mail, Phone } from "lucide-react";

const Hablemos = () => {
  return (
    <footer className="w-full bg-[#030014] text-gray-300 py-2 border-t-2 border-[#18b7ff]/20 px-[20px]">
      <div className="mt-10 max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex flex-col items-start text-left">
            <h3 className="font-semibold text-[#18b7ff] mb-4 ">Nexvision Digital Solutions</h3>
            <p className="text-sm text-gray-400 text-left">
              Somos un equipo de consultores y desarrolladores creados en el 2015, brindamos soluciones modernas, rápidas y
              efectivas a los problemas informáticos que pueda tener en su empresa u oficina.
            </p>
          </div>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-[#18b7ff] font-semibold mb-4">Menú</h3>
          {/* Branding */}

          <ul className="space-y-2 border-l border-[#18b7ff] pl-4">
            <li>
              <a href="#inicio" className="hover:text-[#18b7ff] transition">
                Inicio
              </a>
            </li>
            <li>
              <a href="#nosotros" className="hover:text-[#18b7ff] transition">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#proyectos" className="hover:text-[#18b7ff] transition">
                Proyectos
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-[#18b7ff] transition">
                Contáctanos
              </a>
            </li>
          </ul>
        </div>

        {/* Servicios */}
        <div>
          <h3 className="text-[#18b7ff] font-semibold mb-4">Servicios</h3>
          <ul className="space-y-2 border-l border-[#18b7ff] pl-4">
            <li>
              <a href="#diseños" className="hover:text-[#18b7ff] transition">
                Diseños de páginas web
              </a>
            </li>
            <li>Tienda virtual</li>
            <li>Aplicaciones web</li>
            <li>App móvil</li>
            <li>Software a medida</li>
            <li>Marketing digital</li>
          </ul>
        </div>
        {/*contactos*/}
        <div>
          <h3 className="text-[#18b7ff] font-semibold mb-4">Contacto</h3>
          <ul className="space-y-3 ">
            <li className="flex items-center">
              <Mail className="w-5 h-5 text-[#18b7ff] mr-2" />
              <a href="mailto:contacto@nexvisionds.com" className="hover:text-[#18b7ff] transition break-all">
                contacto@nexvisionds.com
              </a>
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 text-[#18b7ff] mr-2" />
              <a href="tel:+51912726624" className="hover:text-[#18b7ff] transition">
                +51 912 726 624
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-b-2 border-[#18b7ff]/40 mx-[100px] mt-20"></div>
      {/* Derechos */}
      <div className="mt-10 flex flex-col md:flex-row items-center justify-between text-center md:text-left mx-[20px] md:mx-[100px] space-y-2 md:space-y-0">
        <p className="text-sm mt-4 md:mt-0">© {new Date().getFullYear()} Nexvision | Todos los derechos reservados.</p>
        <p>Powered by-Nexvision</p>
      </div>
    </footer>
  );
};

export default Hablemos;
