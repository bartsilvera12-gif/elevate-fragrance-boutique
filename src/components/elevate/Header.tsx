import { useEffect, useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Logo } from "./Logo";
import { useCart } from "@/context/CartContext";

const NAV = [
  { label: "Inicio", to: "/" },
  { label: "Catálogo", to: "/catalogo" },
  { label: "Marcas", to: "/marcas" },
  { label: "Nosotros", to: "/nosotros" },
  { label: "FAQ", to: "/faq" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { count, setOpen: openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-elegant bg-background/95 backdrop-blur-md ${
        scrolled ? "shadow-soft" : ""
      }`}
    >
      <div className="container mx-auto px-6 lg:px-10 flex items-center justify-between h-28">
        <Logo />

        <nav className="hidden lg:flex items-center gap-8" aria-label="Principal">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                `text-sm tracking-wide transition-smooth relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:h-px after:bg-gold after:transition-all ${
                  isActive ? "text-primary after:w-full" : "text-foreground/80 hover:text-primary after:w-0 hover:after:w-full"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/catalogo"
            className="hidden lg:inline-flex items-center px-6 py-3 bg-primary text-primary-foreground text-xs tracking-[0.25em] uppercase hover:bg-primary-glow transition-elegant shadow-soft border border-gold/30"
          >
            Explorar
          </Link>

          <button
            onClick={() => openCart(true)}
            aria-label={`Abrir carrito (${count})`}
            className="relative p-2.5 text-primary hover:text-gold transition-smooth"
          >
            <ShoppingBag size={22} />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-gold text-gold-foreground text-[10px] font-medium h-5 w-5 rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </button>

          <button
            onClick={() => setOpen((s) => !s)}
            className="lg:hidden p-2 text-primary"
            aria-label="Abrir menú"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-gold/20 animate-fade-up">
          <nav className="flex flex-col p-6 gap-4" aria-label="Móvil">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className="text-base text-foreground/85 hover:text-primary py-2 border-b border-border/50"
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
