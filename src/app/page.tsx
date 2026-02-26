import Link from "next/link";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <main className="section text-center">

        <h1 className="page-title">
          Welcome to Snikei Store
        </h1>

        <Link
          href="/products"
          className="mx-[20px] bg-[black] text-[white] py-[8] px-[20] border-0 rounded-[30]"
        >
          View Products →
        </Link>

      </main>
    </Layout>
  );
}