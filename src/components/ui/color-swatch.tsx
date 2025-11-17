"use client";

import { cn } from "@/lib/utils";

type ColorSwatchProps = {
  id: string;
  label: string;
  hex: string;
  selected?: boolean;
  onSelect?: (id: string) => void;
};

export const ColorSwatch = ({
  id,
  label,
  hex,
  selected = false,
  onSelect,
}: ColorSwatchProps) => {
  const handleClick = () => {
    if (!onSelect) {
      return;
    }
    onSelect(id);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }
    event.preventDefault();
    handleClick();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={cn(
        "flex flex-col items-center gap-2 text-sm font-medium focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2 focus-visible:ring-offset-sand",
        selected ? "text-clay" : "text-clay/60",
      )}
      aria-pressed={selected}
      aria-label={`Select ${label} color`}
    >
      <span
        className={cn(
          "h-9 w-9 rounded-full border-2 border-transparent transition",
          selected ? "border-clay" : "border-transparent",
        )}
        style={{ backgroundColor: hex }}
      />
      <span>{label}</span>
    </button>
  );
};

