import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { WHATSAPP_NUMBER } from "@/data/products";

export const Footer = () => (
  <footer className="bg-primary text-cream pt-20 pb-8">
    <div className="container mx-auto px-6 lg:px-10">
      <div className="grid md:grid-cols-4 gap-12 pb-12 border-b border-gold/20">
        <div className="md:col-span-2">
          <Logo variant="light" />
          <p className="mt-6 text-cream/70 leading-relaxed max-w-md font-editorial italic text-lg">
            La esencia de tu próximo momento. Fragancias seleccionadas para quienes buscan elegancia,
            presencia y exclusividad.
          </p>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-gold-light mb-5">Navegación</h4>
          <ul className="space-y-3 text-sm text-cream/80">
            <li><Link to="/catalogo" className="hover:text-gold-light transition-smooth">Catálogo</Link></li>
            <li><Link to="/marcas" className="hover:text-gold-light transition-smooth">Marcas</Link></li>
            <li><Link to="/nosotros" className="hover:text-gold-light transition-smooth">Quiénes somos</Link></li>
            <li><Link to="/faq" className="hover:text-gold-light transition-smooth">FAQ y Políticas</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-gold-light mb-5">Contacto</h4>
          <ul className="space-y-3 text-sm text-cream/80">
            <li className="flex items-start gap-3">
              <Phone size={14} className="text-gold mt-1 shrink-0" />
              <a href={`tel:+${WHATSAPP_NUMBER}`} className="hover:text-gold-light transition-smooth">+54 9 11 0000-0000</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={14} className="text-gold mt-1 shrink-0" />
              <a href="mailto:hola@elevate.com" className="hover:text-gold-light transition-smooth">hola@elevate.com</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={14} className="text-gold mt-1 shrink-0" />
              <span>Buenos Aires, Argentina</span>
            </li>
            <li className="flex items-start gap-3">
              <Instagram size={14} className="text-gold mt-1 shrink-0" />
              <a href="#" className="hover:text-gold-light transition-smooth">@elevate.parfum</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-cream/50 tracking-wide">
        <div>© 2026 Elevate Maison de Parfum. Todos los derechos reservados.</div>
        <div className="font-editorial italic">Elegancia en cada nota.</div>
      </div>
    </div>
  </footer>
);
