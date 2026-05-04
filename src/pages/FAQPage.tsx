import { Layout } from "@/components/elevate/Layout";
import { FAQ } from "@/components/elevate/FAQ";
import { Policies } from "@/components/elevate/Policies";

const FAQPage = () => (
  <Layout title="FAQ y Políticas · Elevate" description="Preguntas frecuentes, políticas de envío y devolución de Elevate.">
    <div className="pt-20" />
    <FAQ />
    <Policies />
  </Layout>
);
export default FAQPage;
