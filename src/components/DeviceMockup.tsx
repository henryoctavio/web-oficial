import { HtmlHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface DeviceMockupProps extends HtmlHTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const DeviceMockup = ({ imgSrc, className, dark = false, ...props }: DeviceMockupProps) => {
  return (
    <div className={cn("relative pointer-events-none z-50 overflow-hidden", className)} {...props}>
      {/* Imagen del contenido dentro de la pantalla */}
      <div
        className="absolute z-10"
        style={{
          top: "5%", // Ajusta este valor según la pantalla real
          left: "4%", // Ajusta este valor según la pantalla real
          width: "93%", // Ajusta este valor según el ancho de la pantalla
          height: "55%", // Ajusta este valor según el alto de la pantalla
        }}
      >
        <img src={imgSrc} alt="content inside pc mockup" className="w-full h-full object-cover rounded" />
      </div>

      {/* Imagen del mockup de la PC */}
      <img
        src={dark ? "/pc-plantilla-oscura.png" : "/pc-plantilla-white.png"}
        className="pointer-events-none z-20 relative select-none w-full h-auto"
        alt="pc mockup"
      />
    </div>
  );
};

export default DeviceMockup;
