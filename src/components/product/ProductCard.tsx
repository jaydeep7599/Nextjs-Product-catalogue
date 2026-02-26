import { Product } from "@/types/product";
import Link from "next/link";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (

    <Link
      href={`/products/${product.id}`}
      className="group block w-[100%] md:w-[100%] lg:w-[100%]"
    >

      <div className="bg-[#f5f5f5] h-[260px] flex items-center justify-center overflow-hidden rounded-[10px]">
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

        <h2 className="text-base leading-5 line-clamp-2 min-h-[44px]">
          {product.title}
        </h2>

        <p className="text-[13px] uppercase tracking-[0.12em] font-[800] mt-3">
          $ {product.price}
        </p>
      </div>

    </Link>
  );
}