import { SiteContainer } from "@/components/layout/site-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { auraProII } from "@/data/products";

export const TaglineSection = () => (
  <section className="bg-sand py-16 sm:py-20">
    <SiteContainer className="max-w-3xl">
      <SectionHeading
        align="center"
        title={auraProII.tagline}
        description={auraProII.description}
      />
    </SiteContainer>
  </section>
);

