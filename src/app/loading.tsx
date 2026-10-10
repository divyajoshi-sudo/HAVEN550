import { Container } from "@/components/layout/Container";

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-32 bg-white">
      <Container size="narrow" className="text-center">
        <div className="inline-block w-8 h-8 border-2 border-haven-gold/30 border-t-haven-gold rounded-full animate-spin mb-4" />
        <p className="text-xs tracking-[0.3em] uppercase text-[#717E8C] font-light">
          Loading HAVEN 550...
        </p>
      </Container>
    </div>
  );
}
