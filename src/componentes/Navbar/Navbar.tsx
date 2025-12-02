"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  X,
  Users2,
  Hammer,
  FolderKanban,
  Phone,
  Globe,
  ShoppingCart,
  Layers,
  Smartphone,
  TabletSmartphone,
  TrendingUp,
} from "lucide-react";
import MaxWidthWrapper from "../MaxWdthWrapper";
import { socialHandles } from "@/constants";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isDropdownDesktopOpen, setIsDropdownDesktopOpen] = useState(false);
  const [isDropdownMobileOpen, setIsDropdownMobileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsDropdownDesktopOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsDropdownDesktopOpen(false), 250);
  };

  return (
    <nav className="w-full h-[65px] fixed top-0 z-20 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between">
          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center z-40 font-semibold text-xl space-x-0"
            aria-label="Ir a inicio"
            prefetch={false}
          >
            <Image src="/letraN.png" alt="logo Nextvision" width={60} height={60} priority />
            <div className="flex flex-col items-start">
              <h2 className="text-xl text-white font-black tracking-wide">
                NEXT
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">VISION</span>
              </h2>
              <p className="text-xs text-white italic" style={{ letterSpacing: "0.14em" }}>
                Digital Solutions
              </p>
            </div>
          </Link>

          {/* NAV LINKS (Desktop) */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="/nosotros"
              prefetch={false}
              className={`${pathname === "/nosotros" ? "bg-cyan-400 text-white px-2 py-1 rounded" : "text-white hover:text-cyan-400"}`}
            >
              Nosotros
            </Link>

            {/* Dropdown Servicios */}
            <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button
                className={`flex items-center gap-2 cursor-pointer ${
                  pathname.startsWith("/servicios")
                    ? "bg-cyan-400 text-white px-2 py-1 rounded"
                    : "text-white hover:text-cyan-400"
                }`}
                aria-expanded={isDropdownDesktopOpen}
              >
                Servicios <ChevronDown className="w-4 h-4" />
              </button>

              {isDropdownDesktopOpen && (
                <div className="absolute top-full mt-2 left-0 w-[210px] bg-blue-950 border border-[#7042f861] rounded-md shadow-lg z-50">
                  <ul>
                    {[
                      ["diseno-web", "Diseño de páginas Web"],
                      ["ecomerce", "Tiendas virtuales"],
                      ["app-web", "Aplicaciones Web"],
                      ["app-movil", "Aplicativos móviles"],
                      ["software", "Software"],
                      ["marketing", "Marketing Digital"],
                    ].map(([path, label]) => (
                      <li key={path}>
                        <Link
                          href={`/servicios/${path}`}
                          prefetch={false}
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500 hover:text-white"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <Link
              href="/proyectos"
              prefetch={false}
              className={`${pathname === "/proyectos" ? "text-cyan-400" : "text-white hover:text-cyan-400"}`}
            >
              Proyectos
            </Link>
            <Link
              href="/contactos"
              prefetch={false}
              className={`${pathname === "/contactos" ? "text-cyan-400" : "text-white hover:text-cyan-400"}`}
            >
              Contactos
            </Link>
          </div>

          {/* SOCIAL ICONS (Desktop) */}
          <div className="hidden lg:flex flex-row gap-5 glow-background p-2 rounded-[10px] z-[90]">
            {socialHandles.map(({ name, icon: Icon, link }) => (
              <Link
                key={name}
                href={link}
                target="_blank"
                aria-label={`Visitar ${name}`}
                className="flex items-center justify-center w-10 h-10 bg-[var(--bg-muted)] text-[var(--muted-foreground)] rounded-full hover:bg-[var(--bg-accent)] hover:text-[var(--foreground)] hover:scale-110 transition"
              >
                <Icon className="w-6 h-6 hover:text-[#f7f7f8]" />
              </Link>
            ))}
          </div>

          {/* HAMBURGER BUTTON */}
          <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden text-white" aria-label="Abrir menú">
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </MaxWidthWrapper>

      {/* MOBILE BACKDROP */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-40 transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* MOBILE MENU */}
      <aside
        className={`fixed top-0 left-0 min-h-screen w-[320px] bg-[#121212] text-white p-8 z-50 transform transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-8 right-4 p-2 rounded-full bg-[#1e1e1e] border border-white"
          aria-label="Cerrar menú"
        >
          <X className="text-white" />
        </button>

        {/* MOBILE LOGO */}
        <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center mb-10">
          <Image src="/letraN.png" alt="logo Nextvision" width={60} height={60} priority />
          <div className="flex flex-col items-start ml-2">
            <h2 className="text-xl text-white font-black tracking-wide">
              NEXT
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">VISION</span>
            </h2>
            <p className="text-xs text-white italic" style={{ letterSpacing: "0.2em" }}>
              Digital Solutions
            </p>
          </div>
        </Link>

        {/* SOCIAL MOBILE */}
        <div className="flex justify-center mb-10 gap-5">
          {socialHandles.map(({ name, icon: Icon, link }) => (
            <Link
              key={name}
              href={link}
              target="_blank"
              aria-label={`Visitar ${name}`}
              className="flex items-center justify-center w-10 h-10 bg-[var(--bg-muted)] text-[var(--muted-foreground)] rounded-full hover:bg-[var(--bg-accent)] hover:text-[var(--foreground)] hover:scale-110 transition"
            >
              <Icon className="w-6 h-6" />
            </Link>
          ))}
        </div>

        {/* MOBILE LINKS */}
        <nav className="text-gray-600 flex flex-col space-y-6 text-[22px] font-semibold h-[500px] overflow-y-auto">
          <Link href="/nosotros" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
            <Users2 className="text-purple-500" />
            Nosotros
          </Link>

          {/* Submenu Mobile */}
          <div className="relative ">
            <button
              onClick={() => setIsDropdownMobileOpen(!isDropdownMobileOpen)}
              className="flex items-center gap-2 "
              aria-expanded={isDropdownMobileOpen}
            >
              <Hammer className="text-amber-400 " />
              Servicios <ChevronDown style={{ marginLeft: "80px" }} />
            </button>

            {isDropdownMobileOpen && (
              <ul className="flex flex-col gap-3 mt-5 ml-5 text-[19px] ">
                <li>
                  <Link
                    href="/servicios/diseno-web"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className=" flex items-center gap-2 mb-5"
                  >
                    <Globe /> Diseño Web
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicios/ecomerce"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className=" flex items-center gap-2 mb-5"
                  >
                    <ShoppingCart /> Tiendas virtuales
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicios/software"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className=" flex items-center gap-2 mb-5"
                  >
                    <Layers /> Software
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicios/app-web"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className=" flex items-center gap-2 mb-5"
                  >
                    <TabletSmartphone /> App Web
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicios/app-movil"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className=" flex items-center gap-2 mb-5"
                  >
                    <Smartphone /> App Móvil
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicios/marketing"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className=" flex items-center gap-2"
                  >
                    <TrendingUp /> Marketing
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <Link href="/proyectos" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
            <FolderKanban className="text-emerald-400" />
            Proyectos
          </Link>
          <Link href="/contactos" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
            <Phone className="text-yellow-400" />
            Contactos
          </Link>
        </nav>
      </aside>
    </nav>
  );
};

export default Navbar;
