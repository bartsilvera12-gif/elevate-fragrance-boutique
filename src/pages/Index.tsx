import { Header } from "@/components/elevate/Header";
import { Hero } from "@/components/elevate/Hero";
import { Bestsellers } from "@/components/elevate/Bestsellers";
import { Promos } from "@/components/elevate/Promos";
import { NewArrivals } from "@/components/elevate/NewArrivals";
import { Catalog } from "@/components/elevate/Catalog";
import { Brands } from "@/components/elevate/Brands";
import { Reviews } from "@/components/elevate/Reviews";
import { About } from "@/components/elevate/About";
import { FAQ } from "@/components/elevate/FAQ";
import { Policies } from "@/components/elevate/Policies";
import { Footer } from "@/components/elevate/Footer";
import { WhatsAppFloat } from "@/components/elevate/WhatsAppFloat";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Elevate · Maison de Parfum — Perfumería Premium Original";
    const meta = document.querySelector('meta[name="description"]') ||
      Object.assign(document.createElement("meta"), { name: "description" });
    meta.setAttribute(
      "content",
      "Elevate: perfumería premium con fragancias nicho, ultranicho, de diseñador y árabes originales. Asesoramiento exclusivo y envíos a todo el país."
    );
    if (!meta.parentElement) document.head.appendChild(meta);
  }, []);

  return (
    <main>
      <Header />
      <Hero />
      <Bestsellers />
      <Promos />
      <NewArrivals />
      <Catalog />
      <Brands />
      <Reviews />
      <About />
      <FAQ />
      <Policies />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
