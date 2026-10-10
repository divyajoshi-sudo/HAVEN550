"use client";

import { useEffect } from "react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log unexpected client error
    console.error("Application error boundary caught:", error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-32 bg-white text-[#08182B] text-center">
      <Container size="narrow">
        <Eyebrow className="mb-3">UNEXPECTED ERROR</Eyebrow>
        <Divider variant="short" centered />
        <Heading level={2} className="mb-6 text-[#08182B]">
          Something Went Astray.
        </Heading>
        <p className="text-base text-[#4A5568] font-light leading-relaxed max-w-md mx-auto mb-10">
          We encountered an unexpected issue while loading this page. Please try refreshing or return to the main deck.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button onClick={() => reset()} variant="primary">
            Try Again
          </Button>
          <Button href="/" variant="outline">
            Return to Home
          </Button>
        </div>
      </Container>
    </div>
  );
}
