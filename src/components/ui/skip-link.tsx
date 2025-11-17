import Link from "next/link";

export const SkipLink = () => {
  return (
    <Link
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-clay focus:px-4 focus:py-2 focus:text-sand focus:outline-none focus:ring-2 focus:ring-olive"
    >
      Skip to main content
    </Link>
  );
};

