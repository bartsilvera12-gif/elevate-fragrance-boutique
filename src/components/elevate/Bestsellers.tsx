import { useMemo } from "react";
import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { SectionTitle } from "./SectionTitle";

export const Bestsellers = () => {
  const pool = useMemo(() => products.filter((p) => p.bestseller), []);

  // Duplicamos SOLO a nivel render para lograr el loop infinito sin saltos.
  // Los datos reales (products) no se tocan.
  const loop = useMemo(() => [...pool, ...pool], [pool]);

  return (
    <section id="mas-vendidos" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-10">
        <SectionTitle
          eyebrow="Más vendidos"
          title="Las fragancias preferidas de la casa"
          subtitle="Aquellas que vuelven una y otra vez. Carácter, presencia y aprobación unánime."
        />

        <div className="mt-14 bestseller-marquee">
          <div className="bestseller-marquee-track gap-7">
            {loop.map((p, i) => (
              <div
                key={`${p.id}-${i}`}
                className="shrink-0 w-[78vw] max-w-[20rem] sm:w-72 sm:max-w-none md:w-[20rem] lg:w-[19rem] xl:w-[22rem]"
              >
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
