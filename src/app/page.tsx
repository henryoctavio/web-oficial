import Encription from "@/componentes/cifrado/Encription";
import WhyUs from "@/componentes/Eligenos/WhyUs";
import EmpresasSlider from "@/componentes/Empresas/EmpresasSlider";
import Habilidesdes from "@/componentes/Habilidades/Habilidesdes";
import Hero from "@/componentes/hero/Hero";

import ResponsiveAnimation from "@/componentes/Responsive";
import Services from "@/componentes/services/Services";
import Servicios from "@/componentes/servicios/Servicios";
import StarBackground from "@/componentes/StarBackground";
import ProyectosSection from "@/componentes/proyectos/Proyectos";

import ProyeSection from "@/componentes/proyesection/ProyeSection";
import Testimonios from "@/componentes/Testimonios/Testimonios";
import ContacSection from "@/componentes/contactos/ContacSection";
import Hablemos from "@/componentes/Hablemos/Hablemos";

export default function Home() {
  return (
    <>
      <div className="top-32">
        <Hero />
        <Servicios />
        <Services />
        <ResponsiveAnimation />
        <Habilidesdes />
        <Encription />
        <EmpresasSlider />
        <WhyUs />
        <ProyeSection />
        <Testimonios />
        <ContacSection />
      </div>
    </>
  );
}
