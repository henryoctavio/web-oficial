"use client";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Smartphone, TabletSmartphone, Layers, TrendingUp, Globe, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const servicios = [
  {
    name: "Diseño de páginas Web",
    href: "/servicios/diseño web",
    icon: Globe,
  },
  {
    name: "Tiendas virtuales",
    href: "/servicios/tiendas virtuales",
    icon: ShoppingCart,
  },
  {
    name: "Aplicaciones Web",
    href: "/servicios/aplicaciones web",
    icon: Layers,
  },
  {
    name: "Aplicativos móviles",
    href: "/servicios/aplicaciones moviles",
    icon: Smartphone,
  },
  {
    name: "Software",
    href: "/servicios/software",
    icon: TabletSmartphone,
  },
  {
    name: "Marketing Digital",
    href: "/servicios/marketing digital",
    icon: TrendingUp,
  },
];

export function MainNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobilemenuOpen, setIsMobilemenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full bg-amber-50 transition-all ${isScrolled ? "bg-white/80 backdrop-blur shadow-sm" : ""}`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center z-40 font-semibold text-xl space-x-0">
          <Image src="/letraN.png" alt="logo" width={60} height={60} priority />
          <div className="flex flex-col items-start">
            <h2 className="text-xl text-black font-black tracking-wide">
              NEXT
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">VISION</span>
            </h2>
            <p className="text-xs text-white italic" style={{ letterSpacing: "0.2em" }}>
              Digital solution
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm hover:text-blue-600">
            Inicio
          </Link>
          <Link href="/acerca" className="text-sm hover:text-blue-600">
            Acerca de
          </Link>

          {/* Servicios con dropdown */}
          <div className="relative group">
            <span className="text-sm cursor-pointer hover:text-blue-600">Servicios</span>
            <div className="absolute hidden group-hover:block top-full left-0 mt-2 w-64 bg-white border rounded shadow-md p-4 z-50">
              <ul className="space-y-3">
                {servicios.map(({ name, href, icon: Icon }) => (
                  <li key={name}>
                    <Link href={href} className="flex items-center gap-2 text-sm hover:text-blue-600">
                      <Icon className="text-cyan-500 w-4 h-4" />
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link href="/contacto" className="text-sm hover:text-blue-600">
            Contacto
          </Link>
        </nav>

        {/* Mobile menu */}
        <div className="md:hidden ">
          <Sheet open={isMobilemenuOpen} onOpenChange={setIsMobilemenuOpen}>
            <SheetTrigger asChild>
              <button onClick={() => setIsMobilemenuOpen(!isMobilemenuOpen)}>{isMobilemenuOpen ? <X /> : <Menu />}</button>
            </SheetTrigger>
            <SheetContent side="right" className="p-6 w-72">
              <nav className="flex flex-col gap-4 bg-amber-50">
                <Link href="/" onClick={() => setIsMobilemenuOpen(false)} className="text-sm">
                  Inicio
                </Link>
                <Link href="/acerca" onClick={() => setIsMobilemenuOpen(false)} className="text-sm">
                  Acerca de
                </Link>

                {/* Submenú servicios */}
                <div>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="text-sm flex items-center justify-between w-full"
                  >
                    Servicios <span>{isDropdownOpen ? "▲" : "▼"}</span>
                  </button>
                  {isDropdownOpen && (
                    <ul className="flex flex-col gap-4 my-2 py-1 p-1">
                      {servicios.map(({ name, href, icon: Icon }) => (
                        <li key={name}>
                          <Link
                            href={href}
                            onClick={() => {
                              setIsMobilemenuOpen(false);
                              setIsDropdownOpen(false);
                            }}
                            className="text-sm flex items-center gap-2"
                          >
                            <Icon className="text-cyan-400" />
                            {name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <Link href="/contacto" onClick={() => setIsMobilemenuOpen(false)} className="text-sm">
                  Contacto
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
