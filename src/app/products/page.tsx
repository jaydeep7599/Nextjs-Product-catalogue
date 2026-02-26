import { getAllProducts } from "@/services/product.service";
import ProductsList from "@/components/product/ProductsList";
import Layout from "@/components/Layout";

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <Layout>
      <main className="section">

        <h1 className="page-title">
          Products
        </h1>

        <ProductsList products={products} />

      </main>
    </Layout>
  );
}