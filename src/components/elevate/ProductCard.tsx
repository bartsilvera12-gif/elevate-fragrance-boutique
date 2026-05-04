import { Product, formatPrice, buildWhatsAppLink } from "@/data/products";

const statusMap: Record<Product["status"], { label: string; cls: string }> = {
  available: { label: "Disponible", cls: "text-gold border-gold/40" },
  low: { label: "Stock bajo", cls: "text-primary border-primary/40" },
  out: { label: "Sin stock", cls: "text-muted-foreground border-muted-foreground/30" },
  soon: { label: "Próximamente", cls: "text-foreground/70 border-foreground/30" },
};

export const ProductCard = ({ product }: { product: Product }) => {
  const s = statusMap[product.status];
  const disabled = product.status === "out" || product.status === "soon";

  return (
    <article className="group relative bg-background border border-border/60 hover:border-gold/60 transition-elegant shadow-soft hover:shadow-elegant flex flex-col overflow-hidden">
      <div className="relative aspect-[4/5] overflow-hidden bg-cream">
        <img
          src={product.image}
          alt={`${product.name} de ${product.brand}`}
          loading="lazy"
          width={800}
          height={1000}
          className="w-full h-full object-cover transition-elegant group-hover:scale-105"
        />
        {product.promo && (
          <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-[10px] tracking-[0.25em] uppercase px-3 py-1.5">
            {product.promo}
          </span>
        )}
        {product.isNew && !product.promo && (
          <span className="absolute top-4 left-4 bg-gold text-gold-foreground text-[10px] tracking-[0.25em] uppercase px-3 py-1.5">
            Nuevo
          </span>
        )}
        <span className={`absolute top-4 right-4 bg-background/90 text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 border ${s.cls}`}>
          {s.label}
        </span>
      </div>

      <div className="p-6 flex flex-col gap-2 flex-1">
        <div className="text-[10px] tracking-[0.3em] uppercase text-gold">{product.brand}</div>
        <h3 className="font-display text-xl text-foreground leading-tight">{product.name}</h3>
        <div className="text-sm text-muted-foreground italic font-editorial">{product.type}</div>

        <div className="mt-3 flex items-baseline gap-3">
          {product.oldPrice && (
            <span className="text-sm text-muted-foreground line-through">{formatPrice(product.oldPrice)}</span>
          )}
          <span className="text-lg text-primary font-medium">{formatPrice(product.price)}</span>
        </div>

        <div className="mt-auto pt-5 flex flex-col gap-2">
          <a
            href={`#producto-${product.slug}`}
            className="text-center text-[11px] tracking-[0.3em] uppercase py-3 border border-primary/80 text-primary hover:bg-primary hover:text-primary-foreground transition-elegant"
          >
            Ver detalle
          </a>
          <a
            href={disabled ? "#" : buildWhatsAppLink(product.name, product.price)}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={disabled}
            className={`text-center text-[11px] tracking-[0.3em] uppercase py-3 transition-elegant ${
              disabled
                ? "bg-muted text-muted-foreground cursor-not-allowed pointer-events-none"
                : "bg-primary text-primary-foreground hover:bg-primary-glow shadow-soft"
            }`}
          >
            {disabled ? "No disponible" : "Consultar por WhatsApp"}
          </a>
        </div>
      </div>
    </article>
  );
};
