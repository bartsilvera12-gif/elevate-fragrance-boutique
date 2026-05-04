import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { SectionTitle } from "./SectionTitle";

export const Bestsellers = () => {
  const list = products.filter((p) => p.bestseller).slice(0, 3);
  return (
    <section id="mas-vendidos" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-10">
        <SectionTitle
          eyebrow="Más vendidos"
          title="Las fragancias preferidas de la casa"
          subtitle="Aquellas que vuelven una y otra vez. Carácter, presencia y aprobación unánime."
        />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
};
