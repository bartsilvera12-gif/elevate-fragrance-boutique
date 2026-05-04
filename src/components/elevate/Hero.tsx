import heroImg from "@/assets/hero-perfume.jpg";

export const Hero = () => (
  <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt="Perfume de lujo Elevate"
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/55 to-primary/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
    </div>

    <div className="relative container mx-auto px-6 lg:px-10 py-32 lg:py-40">
      <div className="max-w-2xl animate-fade-up">
        <span className="inline-block text-gold-light text-xs tracking-[0.4em] uppercase mb-6">
          Maison de Parfum · Edición 2026
        </span>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream leading-[0.95] text-balance">
          Elevate
        </h1>
        <p className="font-editorial italic text-2xl md:text-3xl text-gold-light mt-3">
          La esencia de tu próximo momento.
        </p>
        <div className="gold-divider w-40 my-8" />
        <p className="text-cream/90 text-base md:text-lg max-w-xl leading-relaxed">
          Fragancias seleccionadas para quienes buscan elegancia, presencia y exclusividad.
          Una curaduría de perfumes nicho, ultranicho, de diseñador y árabes premium.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#catalogo"
            className="inline-flex items-center justify-center px-8 py-4 bg-cream text-primary text-xs tracking-[0.3em] uppercase hover:bg-gold hover:text-cream transition-elegant shadow-elegant"
          >
            Ver catálogo
          </a>
          <a
            href="#marcas"
            className="inline-flex items-center justify-center px-8 py-4 border border-gold/60 text-cream text-xs tracking-[0.3em] uppercase hover:bg-gold/10 transition-elegant"
          >
            Explorar marcas
          </a>
        </div>
      </div>
    </div>

    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60 text-[10px] tracking-[0.4em] uppercase">
      Descubrí más ↓
    </div>
  </section>
);
