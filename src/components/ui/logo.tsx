import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export const Logo = ({ className }: LogoProps) => (
  <div className={cn("flex items-center gap-2 font-semibold tracking-tight", className)}>
    <svg
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <rect x="2" y="6" width="4" height="20" rx="2" fill="#c8a949" />
      <rect x="10" y="2" width="4" height="28" rx="2" fill="#9dab77" />
      <rect x="18" y="6" width="4" height="20" rx="2" fill="#d5c3b2" />
      <rect x="26" y="10" width="4" height="12" rx="2" fill="#4f3b2e" />
    </svg>
    <span className="text-lg text-clay">Resonance</span>
  </div>
);

