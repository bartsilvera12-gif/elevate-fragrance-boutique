import logo from "@/assets/elevate-logo-gold.png";
import { Link } from "react-router-dom";

export const Logo = ({ variant = "dark" }: { variant?: "dark" | "light" }) => (
  <Link to="/" className="flex items-center gap-3 group" aria-label="Elevate inicio">
    <img
      src={logo}
      alt="Elevate logo"
      className="h-14 w-14 object-contain"
      width={56}
      height={56}
    />
    <div className="leading-none">
      <div className={`font-display text-2xl tracking-[0.18em] ${variant === "light" ? "text-cream" : "text-primary"}`}>
        ELEVATE
      </div>
      <div className={`text-[10px] tracking-[0.3em] mt-1 ${variant === "light" ? "text-gold-light" : "text-gold"}`}>
        MAISON DE PARFUM
      </div>
    </div>
  </Link>
);
