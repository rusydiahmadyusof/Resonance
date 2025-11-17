import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="text-5xl font-semibold text-clay">404</h1>
      <h2 className="text-2xl font-semibold text-clay">Page not found</h2>
      <p className="text-clay/70">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Button asChild size="lg">
        <Link href="/">Return home</Link>
      </Button>
    </div>
  );
}

