"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error to monitoring service in production
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="text-4xl font-semibold text-clay">Something went wrong</h1>
      <p className="text-clay/70">
        We encountered an unexpected error. Please try again.
      </p>
      {error.digest && (
        <p className="text-sm text-clay/50">Error ID: {error.digest}</p>
      )}
      <div className="flex gap-4">
        <Button onClick={reset} variant="primary">
          Try again
        </Button>
        <Button asChild variant="secondary">
          <Link href="/">Go home</Link>
        </Button>
      </div>
    </div>
  );
}

