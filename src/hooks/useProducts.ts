import { useEffect, useState } from "react";
import type { productWCategory } from "../types/product.types";
import { getProductsWithCategory } from "../services/getProductWithCategory";

export const useProducts = (): {
  products: productWCategory[];
  loading: boolean;
} => {
  
  const [products, setProducts] = useState<productWCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductsWithCategory()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  return { products, loading };
};