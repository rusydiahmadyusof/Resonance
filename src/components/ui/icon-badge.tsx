import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type IconBadgeProps = {
  icon: ReactNode;
  className?: string;
};

export const IconBadge = ({ icon, className }: IconBadgeProps) => (
  <div
    className={cn(
      "flex h-12 w-12 items-center justify-center rounded-2xl bg-parchment shadow-[0_8px_20px_rgba(40,28,18,0.15)]",
      className,
    )}
  >
    {icon}
  </div>
);

