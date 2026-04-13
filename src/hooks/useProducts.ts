import { useEffect, useState } from "react";
import type { product } from "../types/product.types";
import { getProductsWithCategory } from "../services/getProductWithCategory";

export const useProducts = () => {
  const [products, setProducts] = useState<product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductsWithCategory()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  return { products, loading };
};