import {
  getProductById,
  getAllProducts,
} from "@/services/product.service";
import Layout from "@/components/Layout";
import AddToCartButton from "@/components/product/AddToCartButton";

export const dynamicParams = true;

export async function generateStaticParams() {
  const products = await getAllProducts();

  return products.slice(0, 5).map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProductById(id);

  return (
    <Layout>
      <main className="py-16 max-w-[1100px] mx-auto mt-[50]">
        <div className="flex lg:flex-row md:flex-row gap-[20]">
          
          <div className="lg:w-[60%] grow shrink-[0]">
            <div className="image-canvas h-[460px]">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-[320px] object-contain"
              />
            </div>
          </div>

          <div className="lg:w-[40%]">
            <div className="">
            <p className="product-category">
              {product.category}
            </p>
            <h1 className="product-title">
              {product.title}
            </h1>
            <p className="product-price">
              $ {product.price}
            </p>
            <p className="product-desc">
              {product.description}
            </p>
            <AddToCartButton product={product} />
            </div>
          </div>

        </div>
      </main>
    </Layout>
  );
}