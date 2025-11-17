'use client';

import Image from "next/image";
import { SiteContainer } from "@/components/layout/site-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ColorSwatch } from "@/components/ui/color-swatch";
import { auraProII } from "@/data/products";
import { colorSection } from "@/data/homepage";
import { useColorSelector } from "@/hooks/use-color-selector";

export const ColorSelectorSection = () => {
  const { selectedColor, selectedColorId, handleSelect } =
    useColorSelector(auraProII.colors);

  return (
    <section className="bg-parchment/70 py-16">
      <SiteContainer className="section-grid items-center lg:grid-cols-2">
        <div className="space-y-6">
          <SectionHeading
            title="Color"
            description={colorSection.title}
          />
          <div className="flex flex-wrap gap-6">
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
            priority={false}
          />
        </div>
      </SiteContainer>
    </section>
  );
};

