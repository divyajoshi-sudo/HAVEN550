import React from "react";
import { Container } from "../layout/Container";

export interface SpecsStripProps {
  items?: Array<{ label: string; value: string }>;
}

export function SpecsStrip({
  items = [
    { label: "LENGTH", value: "57 FT" },
    { label: "YEAR", value: "2021" },
    { label: "BUILDER", value: "FERRETTI" },
    { label: "CAPACITY", value: "UP TO 8 GUESTS" },
    { label: "LOCATION", value: "FORT LAUDERDALE, FL" },
  ],
}: SpecsStripProps) {
  return (
    <section className="bg-[#F5F3EE] py-8 border-b border-[#E5E0D8]">
      <Container size="wide">
        <div className="flex flex-wrap items-center justify-between gap-y-4 gap-x-8">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-start md:items-center text-left md:text-center flex-1 min-w-[140px]">
                <span className="text-[0.6rem] tracking-[0.3em] uppercase text-[#8A8A84] font-medium mb-1">
                  {item.label}
                </span>
                <span className="font-serif text-lg md:text-xl lg:text-2xl text-[#1C252B] tracking-wide font-normal">
                  {item.value}
                </span>
              </div>
              {index < items.length - 1 && (
                <span className="hidden md:block w-[1px] h-8 bg-[#D8D2C5]" />
              )}
            </React.Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
}
