import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SiteContainerProps = {
  className?: string;
  children: ReactNode;
};

export const SiteContainer = ({ className, children }: SiteContainerProps) => (
  <div className={cn("mx-auto w-full max-w-6xl px-6 md:px-10 lg:px-12", className)}>
    {children}
  </div>
);

