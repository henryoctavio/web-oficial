"use client";

import dynamic from "next/dynamic";

const Marquee = dynamic(() => import("react-fast-marquee"), { ssr: false });

const logos = [
  "airbnb.png",
  "airpeace.png",
  "bolt.png",
  "booking.png",
  "glovo.png",
  "hostelworld.png",
  "makemytrip.png",
  "trip.png",
  "uber.png",
  "wakanow.png",
];

const EmpresasSlider = () => {
  return (
    <div>
      <div className="bg-black mt-10 sm:mt-6 md:mt-10 lg:mt-16 w-full py-8 md:py-12 flex justify-center items-center">
        <Marquee>
          {logos.map((logo, index) => (
            <div key={index} className="mx-8 flex items-center relative w-20 h-10 sm:w-24 sm:h-12 md:w-32 md:h-16">
              <img
                src={`/${logo}`}
                alt={`Logo ${logo}`}
                className="w-full h-full object-contain transition duration-300 grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default EmpresasSlider;
