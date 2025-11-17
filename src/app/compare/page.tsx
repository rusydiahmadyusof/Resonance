import type { Metadata } from "next";
import { SiteContainer } from "@/components/layout/site-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CompareCards } from "@/components/sections/compare/compare-cards";
import { FeatureTable } from "@/components/sections/compare/feature-table";

export const metadata: Metadata = {
  title: "Compare Models — Resonance",
  description:
    "Compare Resonance Aura Pro II and Flow II. Find the perfect audio device for your needs with detailed feature comparisons.",
};

export default function ComparePage() {
  return (
    <div className="space-y-20 bg-sand py-16">
      <SiteContainer className="space-y-12">
        <SectionHeading
          align="center"
          eyebrow="Compare Resonance Models"
          title="Get help choosing. Chat with a Specialist."
          description="Aura Pro II or Flow II? Every detail to help you decide."
        />
        <CompareCards />
        <FeatureTable />
      </SiteContainer>
    </div>
  );
}

