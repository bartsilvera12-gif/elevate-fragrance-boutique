import { Layout } from "@/components/elevate/Layout";
import { Hero } from "@/components/elevate/Hero";
import { Bestsellers } from "@/components/elevate/Bestsellers";
import { Promos } from "@/components/elevate/Promos";
import { NewArrivals } from "@/components/elevate/NewArrivals";
import { Reviews } from "@/components/elevate/Reviews";
import { Link } from "react-router-dom";

const Home = () => (
  <Layout
    title="Elevate · Maison de Parfum — Perfumería Premium Original"
    description="Elevate: perfumería premium con fragancias nicho, ultranicho, de diseñador y árabes originales. Asesoramiento exclusivo y envíos a todo el país."
  >
    <Hero />
    <Bestsellers />
    <Promos />
    <NewArrivals />

    {/* CTA al catálogo */}
    <section className="py-24 lg:py-32 bg-cream/30">
      <div className="container mx-auto px-6 lg:px-10 text-center max-w-2xl">
        <span className="text-xs tracking-[0.4em] uppercase text-gold">Catálogo completo</span>
        <h2 className="font-display text-4xl md:text-5xl text-primary mt-4 text-balance">
          Explorá toda nuestra curaduría
        </h2>
        <div className="gold-divider w-24 mx-auto my-6" />
        <p className="font-editorial italic text-lg text-muted-foreground">
          Filtrá por marca, categoría, familia olfativa o buscá por nombre.
          Todas las fragancias seleccionadas en un solo lugar.
        </p>
        <Link
          to="/catalogo"
          className="inline-flex items-center justify-center mt-8 px-10 py-4 bg-primary text-primary-foreground text-xs tracking-[0.3em] uppercase hover:bg-primary-glow transition-elegant shadow-elegant"
        >
          Ir al catálogo
        </Link>
      </div>
    </section>
  </Layout>
);

export default Home;
