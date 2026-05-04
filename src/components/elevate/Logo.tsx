import logo from "@/assets/elevate-logo.jpg";

export const Logo = ({ variant = "dark" }: { variant?: "dark" | "light" }) => (
  <a href="#top" className="flex items-center gap-3 group" aria-label="Elevate inicio">
    <div className="h-10 w-10 rounded-full overflow-hidden ring-1 ring-gold/40 shadow-soft">
      <img src={logo} alt="Elevate logo" className="h-full w-full object-cover" width={40} height={40} />
    </div>
    <div className="leading-none">
      <div className={`font-display text-2xl tracking-[0.18em] ${variant === "light" ? "text-cream" : "text-primary"}`}>
        ELEVATE
      </div>
      <div className={`text-[10px] tracking-[0.3em] mt-1 ${variant === "light" ? "text-gold-light" : "text-gold"}`}>
        MAISON DE PARFUM
      </div>
    </div>
  </a>
);
