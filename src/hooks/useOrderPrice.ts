import React from "react";
import { Product } from "@/data/products";
import {
  calculateProductPrice,
  calculateOptionsPrice,
  calculateTotalPrice,
} from "@/utils/price";

export function useOrderPrice(
  product: Product,
  quantity: number | null,
  optionSelections: Record<string, number>
) {
  const productPrice = React.useMemo(
    () => calculateProductPrice(quantity, product.basePrice),
    [quantity, product.basePrice]
  );

  const optionsPrice = React.useMemo(
    () => calculateOptionsPrice(optionSelections),
    [optionSelections]
  );

  const totalPrice = React.useMemo(
    () => calculateTotalPrice(productPrice, optionsPrice),
    [productPrice, optionsPrice]
  );

  return { productPrice, totalPrice };
}
