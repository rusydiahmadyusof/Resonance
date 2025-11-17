"use client";

import Image from "next/image";
import { auraProII } from "@/data/products";
import { SectionHeading } from "@/components/ui/section-heading";
import { ColorSwatch } from "@/components/ui/color-swatch";
import { useColorSelector } from "@/hooks/use-color-selector";

export const ColorShowcase = () => {
  const { selectedColor, selectedColorId, handleSelect } =
    useColorSelector(auraProII.colors);

  return (
    <div className="grid gap-10 rounded-[2.5rem] bg-parchment/70 p-8 shadow-[0_35px_80px_rgba(35,24,16,0.14)] lg:grid-cols-[1fr_0.8fr]">
      <div className="flex flex-col justify-center">
        <SectionHeading
          eyebrow="Color"
          title="Aura Pro II"
          description="Custom finishes tuned to resonate with your style."
        />
        <div className="mt-8 flex flex-wrap gap-6">
          {auraProII.colors.map((color) => (
            <ColorSwatch
              key={color.id}
              id={color.id}
              label={color.label}
              hex={color.hex}
              selected={selectedColorId === color.id}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Image
          src={selectedColor.image}
          alt={`${selectedColor.label} Aura Pro II`}
          width={selectedColor.image.width}
          height={selectedColor.image.height}
          className="max-w-md"
        />
      </div>
    </div>
  );
};

