import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { label: "Inicio", href: "#top" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Más vendidos", href: "#mas-vendidos" },
  { label: "Promociones", href: "#promociones" },
  { label: "Nuevos", href: "#nuevos" },
  { label: "Marcas", href: "#marcas" },
  { label: "Reseñas", href: "#resenas" },
  { label: "FAQ", href: "#faq" },
  { label: "Quiénes somos", href: "#quienes-somos" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-elegant ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-soft" : "bg-background/40 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <Logo />

        <nav className="hidden lg:flex items-center gap-7" aria-label="Principal">
          {NAV.slice(0, 7).map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm tracking-wide text-foreground/80 hover:text-primary transition-smooth relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:h-px after:w-0 after:bg-gold hover:after:w-full after:transition-all"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#catalogo"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground text-xs tracking-[0.25em] uppercase hover:bg-primary-glow transition-elegant shadow-soft border border-gold/30"
          >
            Explorar catálogo
          </a>
        </div>

        <button
          onClick={() => setOpen((s) => !s)}
          className="lg:hidden p-2 text-primary"
          aria-label="Abrir menú"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-gold/20 animate-fade-up">
          <nav className="flex flex-col p-6 gap-4" aria-label="Móvil">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-base text-foreground/85 hover:text-primary py-2 border-b border-border/50"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#catalogo"
              onClick={() => setOpen(false)}
              className="mt-2 text-center px-6 py-3 bg-primary text-primary-foreground text-xs tracking-[0.25em] uppercase"
            >
              Explorar catálogo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
