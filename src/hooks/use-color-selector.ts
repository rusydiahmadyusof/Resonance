import { useState } from "react";
import type { ProductColor } from "@/data/products";

export const useColorSelector = (colors: ProductColor[]) => {
  const [selectedColorId, setSelectedColorId] = useState(colors[1]?.id ?? colors[0].id);

  const selected = colors.find((color) => color.id === selectedColorId) ?? colors[0];

  const handleSelect = (id: string) => {
    setSelectedColorId(id);
  };

  return {
    selectedColor: selected,
    selectedColorId,
    handleSelect,
  };
};

