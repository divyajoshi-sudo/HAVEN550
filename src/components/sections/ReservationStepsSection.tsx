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
      className="min-h-screen lg:h-screen flex flex-col justify-center py-10 lg:py-6 relative overflow-hidden transition-colors duration-300 bg-white text-[#101C29] border-t border-b border-[#EAE6DF]"
    >
      <Container size="default">
        {/* Section Header */}
        <ScrollReveal direction="up" duration={0.85} className="w-full flex justify-center">
          <div className="w-full max-w-3xl mx-auto text-center flex flex-col items-center mb-8 sm:mb-10 lg:mb-8">
            <div className="flex items-center justify-center gap-3 mb-2.5">
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
                isLight ? "text-[#101C29]" : "text-white"
              }`}
            >
              {content.headline}
            </h2>
          </div>
        </ScrollReveal>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-8">
          {content.steps.map((step, idx) => (
            <ScrollReveal
              key={idx}
              direction="up"
              duration={0.75}
              delay={idx * 110}
              className="h-full"
            >
              <div
                className="p-6 sm:p-7 relative flex flex-col justify-between group transition-all duration-300 shadow-sm hover:shadow-md h-full bg-white border border-[#EAE6DF] hover:border-[#B9A078] rounded-[2px]"
              >
                <div>
                  <span className="font-serif text-3xl sm:text-4xl text-[#9E8357] font-light block mb-3">
                    {step.number}
                  </span>

                  <h3 className="font-serif text-xl sm:text-2xl font-light mb-2 text-[#101C29]">
                    {step.title}
                  </h3>

                  <p className="text-sm font-light leading-relaxed text-[#101C29]/80">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Payment Note */}
        <ScrollReveal direction="up" duration={0.8} delay={200}>
          <div className="p-4 text-center max-w-2xl mx-auto bg-white border border-[#EAE6DF] rounded-[2px]">
            <p className="text-xs sm:text-sm font-light leading-relaxed text-[#101C29]/80">
              {content.paymentNote}
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
