import { Layout } from "@/components/elevate/Layout";
import { Brands } from "@/components/elevate/Brands";

const BrandsPage = () => (
  <Layout title="Marcas · Elevate" description="Maisons que elegimos: nicho, ultranicho, diseñador y árabe premium.">
    <div className="pt-20" />
    <Brands />
  </Layout>
);
export default BrandsPage;
