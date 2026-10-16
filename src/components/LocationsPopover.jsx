"use client";

import { useEffect, useRef, useState } from "react";
import { locations } from "@/config";
import { CloseIcon, PinIcon } from "./Icons";

// Hook reutilizável do modal "Onde atendo" — usado tanto pelo pin do
// rodapé quanto pelo card Endereço da seção de contato
export function useLocationsModal() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    // ESC fecha; Tab fica preso dentro do modal (foco circulando)
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      const dialog = dialogRef.current;
      if (e.key !== "Tab" || !dialog) return;
      const focusables = dialog.querySelectorAll(
        "a[href], button:not([disabled])"
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;
      if (active === dialog) {
        e.preventDefault();
        (e.shiftKey ? last : first).focus();
      } else if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    // trava o scroll de fundo enquanto o modal está aberto
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      // devolve o foco ao gatilho que abriu o modal
      triggerRef.current?.focus();
    };
  }, [open]);

  // Abre o modal de endereços (chamado pelo pin do rodapé e pelo card Endereço)
  const abrirModalEnderecos = () => setOpen(true);

  const modal = open && (
    <div
      className="anim-fade fixed inset-0 z-[60] flex items-center justify-center bg-cafe/50 p-5 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="onde-atendo-titulo"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="anim-zoom relative w-full max-w-sm rounded-3xl border border-greige/60 bg-cream px-6 pb-6 pt-14 text-left shadow-2xl focus:outline-none"
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Fechar"
          className="absolute right-4 top-4 rounded-full p-2 text-cafe/60 transition-colors hover:bg-greige/40 hover:text-cafe focus-visible:outline focus-visible:outline-2 focus-visible:outline-cafe/60 focus-visible:outline-offset-2"
        >
          <CloseIcon className="h-5 w-5" />
        </button>

        <h2
          id="onde-atendo-titulo"
          className="font-display text-center text-2xl font-medium text-cafe"
        >
          {locations.title}
        </h2>

        <div className="mt-5 flex flex-col gap-4">
          {locations.places.map((place) => (
            <div
              key={place.name}
              className="rounded-2xl border border-greige/50 bg-offwhite/70 p-4"
            >
              <p className="flex items-center gap-2 font-display text-lg text-cafe">
                <PinIcon className="h-4 w-4 shrink-0 text-taupe" />
                {place.name}
              </p>
              <p className="mt-1 text-sm text-cafe/70">{place.address}</p>
              <a
                href={place.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-full bg-cafe px-4 py-2 text-sm font-medium tracking-wide text-offwhite transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cafe/60 focus-visible:outline-offset-2"
              >
                Ver no mapa
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return { triggerRef, abrirModalEnderecos, modal, open };
}

export default function LocationsPopover() {
  const { triggerRef, abrirModalEnderecos, modal, open } = useLocationsModal();

  return (
    <>
      {/* Pin no mesmo padrão visual dos outros ícones sociais */}
      <button
        ref={triggerRef}
        type="button"
        onClick={abrirModalEnderecos}
        aria-label="Onde atendo"
        aria-haspopup="dialog"
        aria-expanded={open}
        className="rounded-full border border-offwhite/25 p-3 text-offwhite/80 transition-colors hover:bg-offwhite/10 hover:text-offwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offwhite/60 focus-visible:outline-offset-2"
      >
        <PinIcon className="h-5 w-5" />
      </button>

      {modal}
    </>
  );
}
