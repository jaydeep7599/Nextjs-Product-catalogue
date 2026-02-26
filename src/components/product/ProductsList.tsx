"use client";

import { Product } from "@/types/product";
import ProductCard from "./ProductCard";
import { useState } from "react";

interface Props {
  products: Product[];
}

export default function ProductsList({
  products,
}: Props) {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="w-full flex mb-12">
        <div className="w-full md:w-[40%]">
          <input
            type="text"
            placeholder="Search products"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border-0 border-b border-gray-300 bg-transparent py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:border-black"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-y-16">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  );
}