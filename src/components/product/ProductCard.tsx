import { Product } from "@/types/product";
import Link from "next/link";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group block w-[48%] md:w-[31%] lg:w-[23%]"
    >

      <div className="bg-[#f5f5f5] h-[260px] flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-[180px] object-contain transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="mt-4">
        <p className="text-[11px] uppercase tracking-[0.18em] text-gray-400 mb-1">
          {product.category}
        </p>

        <h2 className="text-sm font-normal leading-5 line-clamp-2 min-h-[44px]">
          {product.title}
        </h2>

        <p className="text-[13px] uppercase tracking-[0.12em] font-medium mt-3">
          ₹ {product.price}
        </p>
      </div>

    </Link>
  );
}