import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";

const useCountdown = (targetMs: number) => {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, targetMs - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return { d, h, m, s };
};

const TimeBox = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="relative w-16 md:w-20 aspect-square flex items-center justify-center bg-cream/5 border border-gold/40 backdrop-blur-sm overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gold/10 to-transparent" />
      <span className="relative font-display text-2xl md:text-3xl text-cream tabular-nums">
        {String(value).padStart(2, "0")}
      </span>
    </div>
    <span className="mt-2 text-[10px] tracking-[0.3em] uppercase text-gold-light">{label}</span>
  </div>
);

export const Promos = () => {
  const list = products.filter((p) => p.oldPrice);

  // Próximo domingo a medianoche como fecha límite ficticia recurrente
  const target = (() => {
    const t = new Date();
    const days = (7 - t.getDay()) % 7 || 7;
    t.setDate(t.getDate() + days);
    t.setHours(23, 59, 59, 0);
    return t.getTime();
  })();
  const { d, h, m, s } = useCountdown(target);

  return (
    <section
      id="promociones"
      className="py-24 lg:py-32 gradient-bordeaux text-cream relative overflow-hidden"
    >
      {/* Halos dorados animados */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-gold/20 blur-3xl animate-drift-slow" />
      <div
        className="pointer-events-none absolute -bottom-40 -right-24 w-[32rem] h-[32rem] rounded-full bg-primary-glow/40 blur-3xl animate-drift-slow"
        style={{ animationDelay: "-7s" }}
      />
      {/* Partículas doradas flotantes */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className="absolute bottom-0 w-1 h-1 rounded-full bg-gold-light/70"
            style={{
              left: `${(i * 8.3) % 100}%`,
              animation: `float-spark ${6 + (i % 5)}s linear ${i * 0.7}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-10 relative">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.4em] uppercase text-gold-light">
            <span className="w-2 h-2 rounded-full bg-gold animate-gold-pulse" />
            Edición limitada
          </span>
          <h2 className="font-display text-4xl md:text-6xl mt-5 text-balance">
            <span className="animate-shimmer-text">Selecciones por tiempo limitado</span>
          </h2>
          <div className="gold-divider w-24 mx-auto my-6" />
          <p className="text-base md:text-lg font-editorial italic text-cream/80">
            Una oportunidad de incorporar piezas codiciadas a un precio excepcional.
            Cuando la cuenta llegue a cero, las fragancias vuelven a su valor original.
          </p>

          {/* Countdown */}
          <div className="mt-10 flex items-center justify-center gap-3 md:gap-5">
            <TimeBox value={d} label="Días" />
            <span className="font-display text-2xl text-gold/60 -mt-6">:</span>
            <TimeBox value={h} label="Horas" />
            <span className="font-display text-2xl text-gold/60 -mt-6">:</span>
            <TimeBox value={m} label="Min" />
            <span className="font-display text-2xl text-gold/60 -mt-6">:</span>
            <TimeBox value={s} label="Seg" />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {list.map((p, i) => (
            <div
              key={p.id}
              className="animate-fade-up"
              style={{ animationDelay: `${0.15 + i * 0.12}s` }}
            >
              <ProductCard product={p} />
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/catalogo"
            className="shine-on-hover inline-flex items-center justify-center px-10 py-4 bg-gold text-gold-foreground text-xs tracking-[0.3em] uppercase hover:bg-gold-light transition-elegant shadow-gold animate-gold-pulse"
          >
            Aprovechar la oferta
          </Link>
        </div>
      </div>
    </section>
  );
};
