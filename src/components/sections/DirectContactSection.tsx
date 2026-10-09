import { ScrollReveal } from "../ui/ScrollReveal";

export interface DirectContactSectionProps {
  content: {
    eyebrow: string;
    headline: string;
    companyName: string;
    email: string;
    phone: string;
    businessAddress: {
      street: string;
      cityStateZip: string;
      country: string;
    };
    boardingLocations: Array<{
      name: string;
      city: string;
    }>;
    boardingNote: string;
  };
}

export function DirectContactSection({ content }: DirectContactSectionProps) {
  const cleanPhone = content.phone.replace(/[^0-9+]/g, "");

  return (
    <div className="space-y-10">
      {/* Header */}
      <ScrollReveal direction="up" duration={0.85}>
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1.5px] bg-[#B9A078]" />
            <p className="text-xs tracking-[0.28em] text-[#B9A078] uppercase font-sans font-medium">
              {content.eyebrow}
            </p>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal tracking-tight leading-[1.15] mb-3">
            {content.headline}
          </h2>

          <p className="font-serif text-lg text-[#B9A078] font-light tracking-wide">
            {content.companyName}
          </p>
        </div>
      </ScrollReveal>

      {/* Action Buttons */}
      <ScrollReveal direction="up" duration={0.85} delay={80}>
        <div className="flex flex-col sm:flex-row gap-2.5">
          <a
            href={`tel:${cleanPhone}`}
            className="flex-1 px-4 py-3.5 bg-[#B9A078] text-[#0B141D] text-[0.68rem] tracking-[0.22em] uppercase font-medium hover:bg-[#D4AF37] transition-all duration-300 text-center inline-flex items-center justify-center gap-2"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            CALL US
          </a>

          <a
            href={`mailto:${content.email}`}
            className="flex-1 px-4 py-3.5 bg-transparent border border-white/20 text-white text-[0.68rem] tracking-[0.22em] uppercase font-medium hover:border-[#B9A078] hover:text-[#B9A078] transition-all duration-300 text-center inline-flex items-center justify-center gap-2"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            EMAIL
          </a>

          <a
            href={`sms:${cleanPhone}`}
            className="flex-1 px-4 py-3.5 bg-transparent border border-white/20 text-white text-[0.68rem] tracking-[0.22em] uppercase font-medium hover:border-[#B9A078] hover:text-[#B9A078] transition-all duration-300 text-center inline-flex items-center justify-center gap-2"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
            </svg>
            TEXT
          </a>
        </div>
      </ScrollReveal>

      {/* Contact Details Card */}
      <ScrollReveal direction="up" duration={0.85} delay={160}>
        <div className="space-y-0 divide-y divide-white/[0.06]">
          {/* Email */}
          <div className="py-5">
            <span className="text-[0.6rem] tracking-[0.3em] uppercase text-[#B9A078]/70 font-medium block mb-1.5">
              EMAIL
            </span>
            <a
              href={`mailto:${content.email}`}
              className="text-white/90 text-sm font-light hover:text-[#B9A078] transition-colors duration-300"
            >
              {content.email}
            </a>
          </div>

          {/* Phone */}
          <div className="py-5">
            <span className="text-[0.6rem] tracking-[0.3em] uppercase text-[#B9A078]/70 font-medium block mb-1.5">
              PHONE
            </span>
            <a
              href={`tel:${cleanPhone}`}
              className="text-white/90 text-sm font-light hover:text-[#B9A078] transition-colors duration-300"
            >
              {content.phone}
            </a>
          </div>

          {/* Business Address */}
          <div className="py-5">
            <span className="text-[0.6rem] tracking-[0.3em] uppercase text-[#B9A078]/70 font-medium block mb-1.5">
              BUSINESS ADDRESS
            </span>
            <p className="text-white/75 text-sm font-light leading-relaxed">
              {content.businessAddress.street}
              <br />
              {content.businessAddress.cityStateZip}
              <br />
              {content.businessAddress.country}
            </p>
          </div>

          {/* Boarding Locations */}
          <div className="py-5">
            <span className="text-[0.6rem] tracking-[0.3em] uppercase text-[#B9A078]/70 font-medium block mb-3">
              BOARDING LOCATIONS
            </span>
            <div className="space-y-3">
              {content.boardingLocations.map((loc, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#B9A078] mt-2 shrink-0" />
                  <div>
                    <p className="text-white/90 text-sm font-light">{loc.name}</p>
                    <p className="text-white/45 text-xs font-light mt-0.5">{loc.city}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-white/40 italic mt-5 font-light leading-relaxed">
              {content.boardingNote}
            </p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
