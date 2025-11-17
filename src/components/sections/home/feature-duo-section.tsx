import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { SiteContainer } from "@/components/layout/site-container";
import { featureSection } from "@/data/homepage";

export const FeatureDuoSection = () => (
  <section className="bg-sand py-20">
    <SiteContainer className="grid gap-10 overflow-hidden rounded-[2.5rem] bg-parchment/60 p-6 shadow-[0_40px_120px_rgba(35,24,16,0.15)] md:grid-cols-2 md:p-10">
      <div className="flex flex-col justify-center">
        <SectionHeading
          title={featureSection.title}
          description={featureSection.body}
        />
      </div>
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
        <Image
          src={featureSection.image}
          alt="Immersed in Aura Pro II"
          fill
          className="object-cover"
          priority={false}
        />
      </div>
    </SiteContainer>
  </section>
);

