import { Layout } from "@/components/elevate/Layout";
import { About } from "@/components/elevate/About";

const AboutPage = () => (
  <Layout title="Quiénes somos · Elevate" description="La historia y filosofía detrás de Elevate Maison de Parfum.">
    <div className="pt-20" />
    <About />
  </Layout>
);
export default AboutPage;
