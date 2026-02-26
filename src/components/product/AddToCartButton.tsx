"use client";

import { Product } from "@/types/product";
import { useCart } from "@/store/cart.store";
import { useState } from "react";

export default function AddToCartButton({
  product,
}: {
  product: Product;
}) {
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleAdd = () => {
    setLoading(true);

    for (let i = 0; i < qty; i++) {
      addToCart(product);
    }

    setTimeout(() => {
      setLoading(false);
    }, 400);
  };

  return (
    <div className="mt-12 flex items-center gap-4">
      
      <input
        type="number"
        min={1}
        value={qty}
        onChange={(e) => setQty(Number(e.target.value))}
        className="w-[70px] h-[44px] border border-gray-300 rounded-full px-3 text-sm focus:outline-none text-center"
      />

      <button
        onClick={handleAdd}
        disabled={loading}
        className="h-[44px] px-8 bg-[black] text-[white] text-sm rounded-full tracking-wide disabled:opacity-50 mx-[6px]"
      >
        {loading ? "Adding..." : "Add to Cart →"}
      </button>

    </div>
  );
}