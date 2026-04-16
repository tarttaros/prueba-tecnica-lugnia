import { useEffect, useState } from "react";
import type { productWCategory } from "../types/product.types";
import { getProductsWithCategory } from "../services/getProductWithCategory";

export const useProducts = (): {
  products: productWCategory[];
  loading: boolean;
  error: string | null;
} => {

  const [products, setProducts] = useState<productWCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getProductsWithCategory()
      .then(setProducts)
      .catch((err) => {
        console.error(err);                                //para mostrar el error real en consola
        setError("No se pudieron cargar los productos");   //pero conservando la estetica mostrando 
      })                                                   //un mensaje fijo al usuario
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
};