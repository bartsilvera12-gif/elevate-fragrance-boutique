import { useMemo, useState } from "react";
import { products, ProductCategory } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { SectionTitle } from "./SectionTitle";

const CATEGORIES: (ProductCategory | "Todos")[] = ["Todos", "Nicho", "Ultranicho", "Diseñador", "Árabe Premium"];
const FILTERS = ["Todos", "Más vendidos", "Promociones", "Nuevos", "En stock"] as const;

export const Catalog = () => {
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("Todos");
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Todos");

  const list = useMemo(() => {
    return products.filter((p) => {
      if (cat !== "Todos" && p.category !== cat) return false;
      if (filter === "Más vendidos" && !p.bestseller) return false;
      if (filter === "Promociones" && !p.oldPrice) return false;
      if (filter === "Nuevos" && !p.isNew) return false;
      if (filter === "En stock" && (p.status === "out" || p.status === "soon")) return false;
      return true;
    });
  }, [cat, filter]);

  return (
    <section id="catalogo" className="py-24 lg:py-32 bg-gradient-to-b from-background to-cream/40">
      <div className="container mx-auto px-6 lg:px-10">
        <SectionTitle
          eyebrow="Catálogo"
          title="Una selección con criterio"
          subtitle="Filtrá por categoría, estado o tipo. Cada fragancia ha sido elegida por su carácter, calidad y persistencia."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-2 md:gap-3">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-5 py-2.5 text-[11px] tracking-[0.25em] uppercase border transition-elegant ${
                cat === c
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-foreground/70 hover:border-gold hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-2 md:gap-3">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 text-[10px] tracking-[0.25em] uppercase transition-smooth ${
                filter === f ? "text-primary border-b border-gold" : "text-muted-foreground hover:text-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {list.length === 0 && (
          <p className="text-center text-muted-foreground mt-16 font-editorial italic">
            No encontramos fragancias con esa selección.
          </p>
        )}
      </div>
    </section>
  );
};
