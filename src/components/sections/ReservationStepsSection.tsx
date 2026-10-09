import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { ScrollReveal } from "../ui/ScrollReveal";

export interface ReservationStep {
  number: string;
  title: string;
  description: string;
}

export interface ReservationStepsSectionProps {
  content: {
    eyebrow: string;
    headline: string;
    steps: ReservationStep[];
    paymentNote: string;
  };
  background?: "navy" | "ivory";
}

export function ReservationStepsSection({
  content,
  background = "ivory",
}: ReservationStepsSectionProps) {
  const isLight = background === "ivory";

  return (
    <section
      className={`min-h-screen flex flex-col justify-center py-20 md:py-28 relative overflow-hidden transition-colors duration-300 ${
        isLight
          ? "bg-[#EFECE5] text-[#111A22] border-t border-b border-[#D8D2C6]"
          : "bg-[#101C29] text-white border-t border-b border-white/10"
      }`}
    >
      {!isLight && (
        <div className="absolute inset-0 ambient-glow-navy pointer-events-none" />
      )}
      <Container size="default">
        {/* Section Header */}
        <ScrollReveal direction="up" duration={0.85} className="w-full flex justify-center">
          <div className="w-full max-w-3xl mx-auto text-center flex flex-col items-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#B9A078]" />
              <p
                className={`text-xs sm:text-sm tracking-[0.35em] uppercase font-light ${
                  isLight ? "text-[#9E8357]" : "text-[#B9A078]"
                }`}
              >
                {content.eyebrow}
              </p>
              <span className="w-8 h-[1px] bg-[#B9A078]" />
            </div>

            <h2
              className={`font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-center mx-auto w-full ${
                isLight ? "text-[#111A22]" : "text-white"
              }`}
            >
              {content.headline}
            </h2>
          </div>
        </ScrollReveal>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {content.steps.map((step, idx) => (
            <ScrollReveal
              key={idx}
              direction="up"
              duration={0.75}
              delay={idx * 110}
              className="h-full"
            >
              <div
                className={`p-8 relative flex flex-col justify-between group transition-all duration-500 shadow-xl luxury-card h-full ${
                  isLight
                    ? "bg-[#FAF8F5] border border-[#D8D2C6] hover:border-[#B9A078]"
                    : "bg-[#0B141D]/75 border border-white/10 hover:border-[#B9A078]/50"
                }`}
              >
                <div>
                  <span className="font-serif text-3xl sm:text-4xl text-[#9E8357] font-light block mb-4">
                    {step.number}
                  </span>

                  <h3
                    className={`font-serif text-xl sm:text-2xl font-light mb-3 ${
                      isLight ? "text-[#111A22]" : "text-white"
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p
                    className={`text-sm font-light leading-relaxed ${
                      isLight ? "text-[#4F5862]" : "text-white/75"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Payment Note */}
        <ScrollReveal direction="up" duration={0.8} delay={200}>
          <div
            className={`p-5 text-center max-w-2xl mx-auto ${
              isLight
                ? "bg-[#FAF8F5] border border-[#D8D2C6]"
                : "bg-white/5 border border-white/10"
            }`}
          >
            <p
              className={`text-xs sm:text-sm font-light leading-relaxed ${
                isLight ? "text-[#4F5862]" : "text-white/80"
              }`}
            >
              {content.paymentNote}
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
