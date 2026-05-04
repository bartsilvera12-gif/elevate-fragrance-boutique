import { Header } from "@/components/elevate/Header";
import { Footer } from "@/components/elevate/Footer";
import { CartDrawer } from "@/components/elevate/CartDrawer";
import { WhatsAppFloat } from "@/components/elevate/WhatsAppFloat";
import { ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
  title?: string;
  description?: string;
}

export const Layout = ({ children, title, description }: Props) => {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [title, description]);

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <CartDrawer />
      <WhatsAppFloat />
    </>
  );
};
