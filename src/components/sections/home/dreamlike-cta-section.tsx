import Image from "next/image";
import Link from "next/link";
import { SiteContainer } from "@/components/layout/site-container";
import { Button } from "@/components/ui/button";
import { dreamlikeSection } from "@/data/homepage";

export const DreamlikeCTASection = () => (
  <section className="relative h-[520px] overflow-hidden">
    <Image
      src={dreamlikeSection.image}
      alt="Immersive listening in the desert"
      fill
      className="object-cover"
      priority={false}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f05]/70 to-transparent" />
    <SiteContainer className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center text-white">
      <p className="eyebrow text-white/80">Dreamlike Sound</p>
      <h2 className="text-4xl font-semibold sm:text-5xl">
        {dreamlikeSection.title}
      </h2>
      <p className="text-lg text-white/90">{dreamlikeSection.body}</p>
      <Button asChild size="lg" variant="light">
        <Link href={dreamlikeSection.cta.href}>{dreamlikeSection.cta.label}</Link>
      </Button>
    </SiteContainer>
  </section>
);

