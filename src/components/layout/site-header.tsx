"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/data/navigation";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { SiteContainer } from "@/components/layout/site-container";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";

export const SiteHeader = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);

  const renderLink = (href: string, label: string) => {
    const isActive = pathname === href;

    return (
      <Link
        key={href}
        href={href}
        className={cn(
          "text-sm font-semibold transition-colors",
          isActive ? "text-clay" : "text-clay/60 hover:text-clay",
        )}
        onClick={() => setOpen(false)}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/30 bg-sand/80 backdrop-blur-lg">
      <SiteContainer className="flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => renderLink(link.href, link.label))}
        </nav>
        <div className="hidden md:block">
          <Button asChild size="sm" variant="secondary">
            <Link href="/compare">Compare</Link>
          </Button>
        </div>
        <button
          type="button"
          className="md:hidden"
          aria-label="Toggle navigation menu"
          onClick={toggleMenu}
        >
          {open ? (
            <Cross2Icon className="h-6 w-6 text-clay" />
          ) : (
            <HamburgerMenuIcon className="h-6 w-6 text-clay" />
          )}
        </button>
      </SiteContainer>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
          >
            <SiteContainer className="section-grid py-6">
              <nav className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <div key={link.href} className="flex flex-col">
                    {renderLink(link.href, link.label)}
                  </div>
                ))}
              </nav>
              <Button asChild variant="secondary">
                <Link href="/compare" onClick={() => setOpen(false)}>
                  Compare
                </Link>
              </Button>
            </SiteContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

