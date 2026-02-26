import { Product } from "@/types/product";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getAllProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${API_URL}/products`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
};

export const getProductById = async (
  id: string
): Promise<Product> => {
  const response = await fetch(
    `${API_URL}/products/${id}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  const text = await response.text();

  if (!text) {
    throw new Error("Empty response received");
  }

  return JSON.parse(text);
};