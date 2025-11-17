'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SiteContainer } from "@/components/layout/site-container";
import { Button } from "@/components/ui/button";
import { heroCopy } from "@/data/homepage";
import { auraProII } from "@/data/products";
import { InventoryBadge } from "@/components/ui/inventory-badge";

const headlineWords = ["Resonance", "Aura Pro II"];

export const HeroSection = () => (
  <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_#fdf7f0,_#ebdfcf)] pb-16 pt-10 lg:pt-20">
    <SiteContainer className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div className="space-y-6">
          <p className="eyebrow">{heroCopy.eyebrow}</p>
          <div className="space-y-4">
            <h1 className="text-5xl font-semibold tracking-tight text-clay sm:text-6xl lg:text-7xl">
              {heroCopy.title}
            </h1>
            <p className="text-xl text-clay/80">{heroCopy.body}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg">
            <Link href={heroCopy.primaryCta.href}>{heroCopy.primaryCta.label}</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href={heroCopy.secondaryCta.href}>
              {heroCopy.secondaryCta.label}
            </Link>
          </Button>
        </div>
        <InventoryBadge slug={auraProII.slug} />
        <div className="flex items-center gap-4">
          {auraProII.colors.map((color) => (
            <span
              key={color.id}
              className="h-4 w-4 rounded-full"
              style={{ backgroundColor: color.hex }}
            />
          ))}
          <p className="text-sm text-clay/60">Studio-tuned palette</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative flex justify-center"
      >
        <div className="relative max-w-[520px]">
          {headlineWords.map((word, index) => (
            <span
              key={word}
              className="pointer-events-none absolute inset-x-0 text-center text-[clamp(3rem,8vw,6rem)] font-semibold uppercase tracking-[0.08em] text-clay/10"
              style={{
                top: index === 0 ? "10%" : "55%",
              }}
              aria-hidden="true"
            >
              {word}
            </span>
          ))}
          <Image
            src={auraProII.heroImage}
            alt="Aura Pro II headphones"
            width={auraProII.heroImage.width}
            height={auraProII.heroImage.height}
            className="relative z-10 drop-shadow-[0_40px_90px_rgba(35,24,16,0.35)]"
            priority
          />
        </div>
      </motion.div>
    </SiteContainer>
  </section>
);

