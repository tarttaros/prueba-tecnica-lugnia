import type { product } from "../types/product.types";

export const getProducts = async (): Promise<product[]> => {
  const response = await fetch("https://api.fake-rest.refine.dev/products");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};