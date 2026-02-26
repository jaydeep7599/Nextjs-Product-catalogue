"use client";

import { useCart } from "@/store/cart.store";
import { useTheme } from "@/store/theme.store";
import Layout from "./Layout";
import Link from "next/link";

export default function Header() {
  const { cart } = useCart();
  const { dark, toggleTheme } = useTheme();

  return (
    <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
      <Layout>
        <div className="flex items-center justify-between h-[60px]">

          <Link
            href="/products"
            className="text-[18px] uppercase tracking-[0.18em] font-medium"
          >
            Snikei
          </Link>

          <div className="flex items-center gap-8 text-[12px] uppercase tracking-[0.16em]">
            
            <div className="flex relative">
              <span className="absolute top-0 right-0 translate-x-2/1 -translate-y-1/3">{cart.length}</span>
              <img src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/6891d8c4de9974f2aaedfef9_cart-icon.svg"/>
            </div>

            <button onClick={toggleTheme} className="mx-[20px] bg-[black] text-[white] py-[8] px-[20] border-0 rounded-[30]">
              {dark ? "Light" : "Dark"}
            </button>

          </div>

        </div>
      </Layout>
    </header>
  );
}