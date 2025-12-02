"use client";
import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess("✅ Mensaje enviado correctamente");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccess("❌ Error al enviar el mensaje");
      }
    } catch (err) {
      console.error(err);
      setSuccess("❌ Error de conexión con el servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#030014] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="primary__title">Contáctanos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* FORMULARIO */}
          <div className="bg-[#0a0f2c] p-8 shadow-lg rounded-lg lg:col-span-2">
            <h3 className="text-gray-200 text-xl font-semibold mb-6 ">Enviar un Mensaje</h3>

            <form onSubmit={handleSubmit} className="space-y-6 placeholder-gray-400">
              <div className="flex flex-col">
                <label className="text-[#18b7ff] font-medium mb-2">Nombre</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="p-3 border border-gray-700 rounded-md outline-none focus:border-[#18b7ff]
                  placeholder-gray-600 text-gray-400"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-[#18b7ff] font-medium mb-2">Correo</label>
                <input
                  name="email"
                  type="email"
                  placeholder="tuemail@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="p-3 border border-gray-700 rounded-md outline-none focus:border-[#18b7ff]
                  placeholder-gray-600 text-gray-400"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-[#18b7ff] font-medium mb-2">Mensaje</label>
                <textarea
                  name="message"
                  placeholder="Escribe tu mensaje aquí..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="p-3 border border-gray-700 rounded-md outline-none focus:border-[#18b7ff] min-h-[150px]
                  placeholder-gray-600 text-gray-400"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`bg-gradient-to-r from-[#18b7ff] to-[#03a9f5] cursor-pointer text-white px-6 py-3 rounded-md font-semibold hover:opacity-90 transition ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Enviando..." : "Enviar"}
              </button>

              {success && <p className="mt-4 text-center text-gray-300">{success}</p>}
            </form>
          </div>

          {/* INFORMACIÓN + MAPA */}
          <div className="flex flex-col space-y-6">
            <div className="bg-[#0e3959] text-gray-200 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-white w-10 h-10 flex items-center justify-center bg-[#18b7ff] rounded-full mr-3">
                    <MapPin />
                  </span>
                  <p>Monterrey Santa Anita Lima, Perú</p>
                </div>
                <div className="flex items-center">
                  <span className="text--white flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[#18b7ff] rounded-full mr-3">
                    <Mail />
                  </span>
                  <a href="mailto:henrysilvatapullima38@gmail.com" className="hover:text-[#18b7ff] transition break-all flex-1">
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
            </div>

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
