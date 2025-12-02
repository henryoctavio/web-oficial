/****/
"use client";
import { MapPin, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="bg-[#030014] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="primary__title">Contáctanos</h2>
        </div>

        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Formulario */}
          <div className="bg-[#0a0f2c] p-8 shadow-lg rounded-lg lg:col-span-2">
            <h3 className="text-gray-200 text-xl font-semibold mb-6">Enviar un Mensaje</h3>
            <form className="space-y-6 placeholder-gray-400">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col ">
                  <label className="text-[#18b7ff]  font-medium mb-2">Nombres</label>
                  <input
                    type="text"
                    placeholder="Nombres"
                    className="p-3 border border-gray-700 rounded-md outline-none focus:border-[#18b7ff]
                    placeholder-gray-600 text-gray-400"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[#18b7ff] font-medium mb-2">Apellidos</label>
                  <input
                    type="text"
                    placeholder="Apellidos"
                    className="p-3 border border-gray-700 rounded-md outline-none focus:border-[#18b7ff]
                    placeholder-gray-600 text-gray-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-[#18b7ff] font-medium mb-2">Correo</label>
                  <input
                    type="email"
                    placeholder="ejemplo@gmail.com"
                    className="p-3 border border-gray-700 rounded-md outline-none focus:border-[#18b7ff]
                    placeholder-gray-600 text-gray-400"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[#18b7ff] font-medium mb-2">Teléfono</label>
                  <input
                    type="text"
                    placeholder="999999999"
                    className="p-3 border border-gray-700 rounded-md outline-none focus:border-[#18b7ff]
                    placeholder-gray-600 text-gray-400"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-[#18b7ff] font-medium mb-2">Mensaje</label>
                <textarea
                  placeholder="Escribe tu mensaje aquí"
                  className="p-3 border border-gray-700 rounded-md outline-none focus:border-[#18b7ff]  min-h-[150px]
                  placeholder-gray-600 text-gray-400"
                />
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-[#18b7ff] to-[#03a9f5] text-white px-6 py-3 rounded-md font-semibold hover:opacity-90 transition"
              >
                Enviar
              </button>
            </form>
          </div>

          {/* Información de contacto + Mapa */}
          <div className="flex flex-col space-y-6">
            {/* Información */}
            <div className="bg-[#0e3959] text-gray-200 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-6">Contacto Información</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-white w-10 h-10 flex items-center justify-center bg-[#18b7ff] rounded-full mr-3">
                    <MapPin />
                  </span>
                  <p>Monterrey Santa Anita Lima, Perú</p>
                </div>
                <div className="flex items-center">
                  <span className="text-white flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[#18b7ff] rounded-full mr-3">
                    <Mail />
                  </span>
                  <a href="mailto:henrysivatapullima38@gmail.com" className="hover:text-[#18b7ff] transition break-all flex-1">
                    contacto@nexvisionds.com
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="text-white w-10 h-10 flex items-center justify-center bg-[#18b7ff] rounded-full mr-3">
                    <Phone />
                  </span>
                  <a href="tel:+912706624" className="hover:text-[#18b7ff] transition">
                    +912706624
                  </a>
                </div>
              </div>

              {/* Redes sociales */}
              <ul className="flex space-x-4 mt-6">
                <li>
                  <a href="#" className="text-2xl text-gray-300 hover:text-white">
                    🌐
                  </a>
                </li>
                <li>
                  <a href="#" className="text-2xl text-gray-300 hover:text-white">
                    📷
                  </a>
                </li>
                <li>
                  <a href="#" className="text-2xl text-gray-300 hover:text-white">
                    💼
                  </a>
                </li>
                <li>
                  <a href="#" className="text-2xl text-gray-300 hover:text-white">
                    💬
                  </a>
                </li>
              </ul>
            </div>

            {/* Mapa */}
            <div className="w-full h-72">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31216.072632043364!2d-76.98385419341489!3d-12.042895672849356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c68077e654bd%3A0x6e675be6cf829d41!2sSanta%20Anita!5e0!3m2!1ses-419!2spe!4v1701753769573!5m2!1ses-419!2spe"
                className="w-full h-full rounded-lg"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
