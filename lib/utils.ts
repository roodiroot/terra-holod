import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Products } from "./wp-api";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Функция для фильтрации массива объектов

export function filterProductsByName(
  arrayOfProductsFields: Products[],
  targetName: string
): Products[] {
  // Проверяем, что входные данные - массив
  if (!Array.isArray(arrayOfProductsFields)) {
    throw new Error("Ожидается массив объектов");
  }

  // Фильтруем массив
  return arrayOfProductsFields.filter((product) => {
    // Проверяем, что структура объекта корректна
    const nodes = product?.productsFields.application.nodes;
    return (
      Array.isArray(nodes) && nodes.some((node) => node.name === targetName)
    );
  });
}
