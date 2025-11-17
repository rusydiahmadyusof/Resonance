import Image from "next/image";
import { SiteContainer } from "@/components/layout/site-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { detailTiles } from "@/data/products";

export const DetailGridSection = () => (
  <section className="bg-sand py-20">
    <SiteContainer className="space-y-10">
      <SectionHeading
        align="center"
        eyebrow="Every Detail Matters"
        title="From the stitch to the signal, precision lives here."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {detailTiles.map((detail) => (
          <div
            key={detail.title}
            className="card-surface p-6"
          >
            <div className="relative mb-5 aspect-video overflow-hidden rounded-[1.5rem]">
              <Image
                src={detail.image}
                alt={detail.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">{detail.title}</h3>
            <p className="body-muted mt-2 text-base">{detail.body}</p>
          </div>
        ))}
      </div>
    </SiteContainer>
  </section>
);

