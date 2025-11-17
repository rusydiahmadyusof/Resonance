import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) => {
  const alignment =
    align === "center" ? "text-center items-center mx-auto" : "text-left";

  return (
    <div className={cn("flex w-full flex-col gap-4", alignment, className)}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold tracking-tight text-clay sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="body-muted text-base sm:text-lg">{description}</p>
        )}
      </div>
    </div>
  );
};

