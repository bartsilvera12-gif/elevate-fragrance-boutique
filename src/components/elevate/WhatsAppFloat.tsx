import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/products";

export const WhatsAppFloat = () => (
  <a
    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola Elevate ✨ Quisiera consultar por una fragancia.")}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Consultar por WhatsApp"
    className="fixed bottom-6 right-6 z-40 group"
  >
    <div className="absolute inset-0 bg-gold/40 rounded-full animate-ping opacity-50" />
    <div className="relative bg-gold text-gold-foreground h-14 w-14 rounded-full flex items-center justify-center shadow-gold hover:bg-primary hover:text-primary-foreground transition-elegant">
      <MessageCircle size={24} />
    </div>
    <span className="absolute bottom-full mb-3 right-0 bg-primary text-cream text-xs tracking-widest uppercase px-4 py-2 whitespace-nowrap shadow-elegant pointer-events-none">
      Contactar WhatsApp
    </span>
  </a>
);
