import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-32 bg-haven-navy text-center">
      <Container size="narrow">
        <Eyebrow className="mb-3">PAGE NOT FOUND</Eyebrow>
        <Divider variant="short" centered />
        <Heading level={1} className="text-5xl sm:text-7xl mb-6">
          404
        </Heading>
        <p className="text-base text-haven-cream/75 font-light leading-relaxed max-w-md mx-auto mb-10">
          The waters you are searching for seem to have drifted out of view. Please return to our home port or explore our charter experiences.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/" variant="primary">
            Return to Home
          </Button>
          <Button href="/experiences" variant="outline">
            Explore Experiences
          </Button>
        </div>
      </Container>
    </div>
  );
}
