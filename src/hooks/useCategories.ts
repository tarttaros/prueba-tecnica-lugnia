import { useEffect, useState } from "react";
import type { category } from "../types/category.types";
import { getCategories } from "../services/apiCategories";

export const useCategories = () => {
  const [categories, setCategories] = useState<category[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getCategories()
      .then(setCategories)
      .catch((err) => {
        console.error(err);                                //para mostrar el error real en consola
        setError("No se pudieron cargar los productos");   //pero conservando la estetica mostrando 
      })                                                   //un mensaje fijo al usuario
  }, []);

  return { categories, error };
};