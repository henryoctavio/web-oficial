import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

import Navbar from "@/componentes/Navbar/Navbar";
import Hablemos from "@/componentes/Hablemos/Hablemos";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://www.nextvisiondev.com"),
  title: "Nextvision Digital Solutions | Diseño y Desarrollo Web Profesional",
  description:
    "Somos Nextvision Digital Solutions, un equipo de expertos en desarrollo y diseño web en Perú. Creamos sitios modernos, rápidos y optimizados para tu negocio.",
  keywords: [
    "diseñador web Perú",
    "desarrollo web profesional",
    "sitios web empresariales",
    "páginas web modernas",
    "Next.js",
    "React",
    "frontend developer",
    "creación de páginas web Lima",
    "Nextvision Digital Solutions",
  ],

  openGraph: {
    title: "Nextvision Digital Solutions | Diseño y Desarrollo Web Profesional",
    description:
      "En Nextvision Digital Solutions ofrecemos diseño y desarrollo web profesional en Perú. Creamos sitios modernos, rápidos y optimizados para empresas que buscan destacar en Internet.",

    siteName: "Nextvision Digital Solutions",
    images: [
      {
        url: "/imagenes/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Nextvision Digital Solutions - Diseño Web Profesional",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nextvision Digital Solutions",
    description: "Diseño y desarrollo web profesional para empresas y negocios en Perú.",
    images: ["/imagenes/preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
       
{/* ✅ Preload de la imagen de fondo */}
  <link rel="preload" as="image" href="/herobg.webp" type="image/webp" />

  {/* ✅ Google Analytics */}
  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-G1PPRSFSM1"
    strategy="afterInteractive"
  />

  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-G1PPRSFSM1');
    `}
  </Script>

      </head>
      <body className="bg-[#030014]">
        {/* ✅ Carga de scripts externos con next/script */}

        <Navbar />
        <main className=" flex flex-col min-h-[calc(100vh-3.5rem-1px)]">{children}</main>
        <Hablemos />
      </body>
    </html>
  );
}
