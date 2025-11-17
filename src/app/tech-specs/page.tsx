import type { Metadata } from "next";
import { SiteContainer } from "@/components/layout/site-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ColorShowcase } from "@/components/sections/specs/color-showcase";
import { SpecCategoryList } from "@/components/sections/specs/spec-category-list";

export const metadata: Metadata = {
  title: "Tech Specs — Resonance Aura Pro II",
  description:
    "Explore the technical specifications of the Resonance Aura Pro II headphones. Custom-tuned drivers, advanced noise cancellation, and premium materials.",
};

export default function TechSpecsPage() {
  return (
    <div className="space-y-16 bg-sand py-16">
      <SiteContainer className="space-y-10">
        <SectionHeading
          title="Tech Specs"
          description="The engineering behind immersive sound."
        />
        <ColorShowcase />
      </SiteContainer>
      <SiteContainer className="space-y-10">
        <SpecCategoryList />
      </SiteContainer>
    </div>
  );
}

