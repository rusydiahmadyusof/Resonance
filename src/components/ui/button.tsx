"use client";

import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "light";
type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
};

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  primary:
    "bg-clay text-white shadow-[0_18px_40px_rgba(58,44,33,0.35)] hover:bg-cocoa focus-visible:bg-cocoa",
  secondary:
    "bg-parchment text-clay border-2 border-clay/20 hover:border-clay hover:bg-clay/5 focus-visible:border-clay",
  ghost:
    "bg-transparent text-clay border-2 border-transparent hover:border-clay/30 hover:bg-clay/5 focus-visible:border-clay",
  light:
    "bg-white/95 text-clay border-2 border-white/50 shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:bg-white hover:border-white focus-visible:bg-white",
};

const SIZE_CLASS: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-base",
  lg: "h-14 px-8 text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      asChild = false,
      type = "button",
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(
          "pill inline-flex items-center justify-center gap-2 font-semibold tracking-tight transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2 focus-visible:ring-offset-sand disabled:opacity-60 disabled:cursor-not-allowed",
          VARIANT_CLASS[variant],
          SIZE_CLASS[size],
          className,
        )}
        {...(asChild ? props : { type, ...props })}
      />
    );
  },
);

Button.displayName = "Button";

