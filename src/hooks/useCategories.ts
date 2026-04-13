import { useEffect, useState } from "react";
import type { category } from "../types/category.types";
import { getCategories } from "../services/apiCategories";

export const useCategories = () => {
  const [categories, setCategories] = useState<category[]>([]);

  useEffect(() => {
    getCategories()
      .then(setCategories)
  }, []);

  return { categories, };
};