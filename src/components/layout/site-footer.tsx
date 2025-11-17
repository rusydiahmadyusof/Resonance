import Link from "next/link";
import { NAV_LINKS } from "@/data/navigation";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { SiteContainer } from "@/components/layout/site-container";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Meta", href: "#" },
];

export const SiteFooter = () => (
  <footer className="border-t border-white/50 bg-parchment/60">
    <SiteContainer className="section-grid py-16">
      <div className="space-y-6 text-center">
        <p className="eyebrow">Sound. Presence. Purpose.</p>
        <h2 className="text-3xl font-semibold sm:text-4xl">
          Focused on crafting immersive audio experiences.
        </h2>
        <p className="body-muted mx-auto max-w-2xl">
          We believe sound should not just be heard—it should move you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild variant="primary">
            <Link href="/aura-pro-ii">Aura Pro II</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/flow-ii">Flow II</Link>
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 border-t border-white/50 pt-8 sm:flex-row sm:justify-between">
        <Logo />
        <nav className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-clay/70">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex gap-3 text-sm font-semibold text-clay/70">
          {SOCIAL_LINKS.map((link) => (
            <Link key={link.label} href={link.href} aria-label={link.label}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <p className="text-center text-xs text-clay/60">
        © {new Date().getFullYear()} Resonance. All rights reserved.
      </p>
    </SiteContainer>
  </footer>
);

