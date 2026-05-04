import lifestyle from "@/assets/lifestyle-1.jpg";

export const About = () => (
  <section id="quienes-somos" className="py-24 lg:py-32 bg-background overflow-hidden">
    <div className="container mx-auto px-6 lg:px-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden shadow-elegant">
            <img
              src={lifestyle}
              alt="Mujer elegante con perfume Elevate"
              loading="lazy"
              width={1200}
              height={1400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-gold text-gold-foreground p-6 shadow-gold">
            <div className="font-display text-4xl">2026</div>
            <div className="text-[10px] tracking-[0.3em] uppercase mt-1">Edición Limitada</div>
          </div>
        </div>

        <div>
          <span className="text-xs tracking-[0.4em] uppercase text-gold">Quiénes somos</span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-4 text-balance">
            Una fragancia es presencia, identidad y memoria.
          </h2>
          <div className="gold-divider w-24 my-6" />
          <div className="space-y-5 text-foreground/80 leading-relaxed">
            <p>
              En <strong className="text-primary font-medium">Elevate</strong> creemos que una fragancia no es solo un aroma:
              es la primera impresión, el detalle que se recuerda, la firma invisible de quien la lleva.
            </p>
            <p className="font-editorial italic text-xl text-foreground/75">
              "Elegimos cada perfume con la convicción de que cada esencia debe contar una historia."
            </p>
            <p>
              Trabajamos exclusivamente con productos originales y maisons reconocidas, ofreciendo asesoramiento
              personalizado para que cada cliente encuentre la fragancia que mejor lo represente.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { n: "100%", l: "Originales" },
              { n: "+50", l: "Marcas" },
              { n: "24h", l: "Asesoría" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl text-primary">{s.n}</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
