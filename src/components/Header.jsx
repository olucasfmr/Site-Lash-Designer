"use client";

import { useEffect, useRef, useState } from "react";
import { nav, site, whatsappLink } from "@/config";
import { ChevronDownIcon, CloseIcon, MenuIcon, WhatsAppIcon } from "./Icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen === null) return;
    const onDocClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(null);
      }
    };
    const onKey = (event) => {
      if (event.key === "Escape") setMenuOpen(null);
    };
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const flatNav = nav.flatMap((item) => (item.children ? item.children : [item]));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-greige/60 bg-offwhite/90 shadow-sm backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 md:h-20 md:px-10">
        <a href="#inicio" className="flex shrink-0 items-center" aria-label={site.name}>
          <img
            src="logos/logo-escuro-variacao-transparente.png"
            alt={site.name}
            className="h-10 w-52 object-cover md:h-12 md:w-60"
          />
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Menu principal">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} ref={menuRef} className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setMenuOpen(menuOpen === item.label ? null : item.label)
                  }
                  className="inline-flex items-center gap-1 text-sm tracking-wide text-cafe/75 transition-colors hover:text-cafe"
                  aria-haspopup="true"
                  aria-expanded={menuOpen === item.label}
                >
                  {item.label}
                  <ChevronDownIcon
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      menuOpen === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {menuOpen === item.label && (
                  <div className="anim-fade absolute left-1/2 top-full z-10 mt-3 w-48 -translate-x-1/2 rounded-2xl border border-greige/60 bg-offwhite p-2 shadow-lg">
                    {item.children.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        onClick={() => setMenuOpen(null)}
                        className="block rounded-xl px-4 py-2.5 text-sm tracking-wide text-cafe/75 transition-colors hover:bg-greige/40 hover:text-cafe"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="text-sm tracking-wide text-cafe/75 transition-colors hover:text-cafe"
              >
                {item.label}
              </a>
            )
          )}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-cafe px-5 py-2.5 text-sm font-medium tracking-wide text-offwhite transition-transform hover:scale-105"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Agendar
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="text-cafe md:hidden"
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <div className="anim-fade border-b border-greige/60 bg-offwhite px-5 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Menu principal">
            {flatNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 font-display text-2xl text-cafe transition-colors hover:bg-greige/40"
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-cafe px-5 py-3.5 text-sm font-medium tracking-wide text-offwhite"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Agendar pelo WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
