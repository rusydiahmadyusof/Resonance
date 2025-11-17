"use client";

import { useProductInventory } from "@/hooks/use-product-inventory";

type InventoryBadgeProps = {
  slug: string;
};

const STATUS_COPY: Record<string, string> = {
  "in-stock": "In stock",
  "low-stock": "Limited",
  waitlist: "Waitlist",
};

export const InventoryBadge = ({ slug }: InventoryBadgeProps) => {
  const inventory = useProductInventory(slug);
  const label = STATUS_COPY[inventory.status] ?? "Available";

  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-clay shadow-[0_12px_30px_rgba(35,24,16,0.15)]">
      <span className="h-2 w-2 rounded-full bg-olive" />
      <span>{label}</span>
      <span className="text-clay/60">{inventory.eta}</span>
    </div>
  );
};

