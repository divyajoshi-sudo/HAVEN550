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
    <div className="relative rounded-[28px] sm:rounded-[32px] bg-white border border-[#EAE6DF] p-6 sm:p-9 lg:p-10 shadow-sm overflow-hidden space-y-8 text-[#101C29]">
      {/* Decorative top champagne hairline */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B9A078] to-transparent" />

      {/* Header */}
      <ScrollReveal direction="up" duration={0.85}>
        <div className="relative z-10">
          <div className="flex items-center justify-between gap-3 mb-3.5">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-[1.5px] bg-[#B9A078]" />
              <p className="text-[11px] tracking-[0.26em] text-[#9E8357] uppercase font-sans font-medium">
                {content.eyebrow}
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-mono tracking-wider font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>CONCIERGE ON DUTY</span>
            </div>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#101C29] font-normal tracking-tight leading-[1.14] mb-2.5">
            {content.headline}
          </h2>

          <p className="font-sans text-xs tracking-[0.18em] uppercase text-[#9E8357] font-medium">
            {content.companyName} • Private Yacht Charters
          </p>
        </div>
      </ScrollReveal>

      {/* Action Buttons */}
      <ScrollReveal direction="up" duration={0.85} delay={80}>
        <div className="grid grid-cols-3 gap-2.5 relative z-10">
          <a
            href={`tel:${cleanPhone}`}
            className="px-3 py-3.5 bg-[#00204E] hover:bg-[#002D6E] text-white text-[11px] tracking-[0.16em] uppercase font-medium rounded-[1px] transition-all duration-300 text-center inline-flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
          >
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <span className="truncate">CALL US</span>
          </a>

          <a
            href={`mailto:${content.email}`}
            className="px-3 py-3.5 bg-white border border-[#EAE6DF] hover:border-[#00204E] text-[#101C29] hover:text-[#00204E] text-[11px] tracking-[0.16em] uppercase font-medium rounded-[1px] transition-all duration-300 text-center inline-flex items-center justify-center gap-2 shadow-sm"
          >
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <span className="truncate">EMAIL</span>
          </a>

          <a
            href={`sms:${cleanPhone}`}
            className="px-3 py-3.5 bg-white border border-[#EAE6DF] hover:border-[#00204E] text-[#101C29] hover:text-[#00204E] text-[11px] tracking-[0.16em] uppercase font-medium rounded-[1px] transition-all duration-300 text-center inline-flex items-center justify-center gap-2 shadow-sm"
          >
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
            </svg>
            <span className="truncate">TEXT</span>
          </a>
        </div>
      </ScrollReveal>

      {/* Styled Basic Details Sections */}
      <div className="space-y-4 relative z-10">

        {/* 1. Direct Contact Channels Card */}
        <ScrollReveal direction="up" duration={0.85} delay={120}>
          <div className="bg-white border border-[#EAE6DF] hover:border-[#B9A078] rounded-2xl p-5 transition-all duration-300 space-y-4 shadow-sm">
            {/* Phone */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#B9A078]/15 border border-[#B9A078]/30 text-[#9E8357] flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] tracking-[0.24em] uppercase text-[#9E8357] font-medium block mb-1">
                  DIRECT PHONE
                </span>
                <a
                  href={`tel:${cleanPhone}`}
                  className="text-[#101C29] text-base sm:text-lg font-light hover:text-[#00204E] transition-colors block truncate font-medium"
                >
                  {content.phone}
                </a>
                <p className="text-[11px] text-[#717E8C] font-light mt-0.5">
                  Available daily • 9:00 AM – 8:00 PM EST
                </p>
              </div>
            </div>

            <div className="h-px bg-[#EAE6DF]" />

            {/* Email */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#B9A078]/15 border border-[#B9A078]/30 text-[#9E8357] flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] tracking-[0.24em] uppercase text-[#9E8357] font-medium block mb-1">
                  OFFICIAL INQUIRIES
                </span>
                <a
                  href={`mailto:${content.email}`}
                  className="text-[#101C29] text-sm sm:text-base font-light hover:text-[#00204E] transition-colors block truncate font-medium"
                >
                  {content.email}
                </a>
                <p className="text-[11px] text-[#717E8C] font-light mt-0.5">
                  Direct response from captain &amp; concierge
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 2. Business Address Card */}
        <ScrollReveal direction="up" duration={0.85} delay={160}>
          <div className="bg-white border border-[#EAE6DF] hover:border-[#B9A078] rounded-2xl p-5 transition-all duration-300 shadow-sm">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#B9A078]/15 border border-[#B9A078]/30 text-[#9E8357] flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[10px] tracking-[0.24em] uppercase text-[#9E8357] font-medium block">
                    BUSINESS ADDRESS
                  </span>
                  <span className="text-[9px] font-mono tracking-wider px-2 py-0.5 rounded bg-neutral-100 border border-[#EAE6DF] text-[#717E8C]">
                    26°07&apos;N • 80°08&apos;W
                  </span>
                </div>
                <p className="text-[#101C29] text-sm font-light leading-relaxed">
                  {content.businessAddress.street}
                  <br />
                  {content.businessAddress.cityStateZip}
                  <br />
                  <span className="text-[#717E8C] text-xs">{content.businessAddress.country}</span>
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 3. Boarding Locations Card */}
        <ScrollReveal direction="up" duration={0.85} delay={200}>
          <div className="bg-white border border-[#EAE6DF] hover:border-[#B9A078] rounded-2xl p-5 transition-all duration-300 space-y-3.5 shadow-sm">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[10px] tracking-[0.24em] uppercase text-[#9E8357] font-medium block">
                BOARDING LOCATIONS
              </span>
              <span className="text-[9px] uppercase tracking-wider text-[#717E8C] font-mono">
                FORT LAUDERDALE DOCKS
              </span>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {content.boardingLocations.map((loc, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between gap-3 p-3 rounded-xl bg-neutral-50/70 border border-[#EAE6DF] hover:border-[#B9A078]/50 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B9A078] shrink-0" />
                    <div>
                      <p className="text-[#101C29] text-xs sm:text-sm font-medium">{loc.name}</p>
                      <p className="text-[#717E8C] text-[11px] font-light">{loc.city}</p>
                    </div>
                  </div>
                  <span className="text-[10px] tracking-wider uppercase text-[#9E8357] font-mono px-2 py-0.5 rounded bg-[#B9A078]/10 border border-[#B9A078]/30 shrink-0">
                    {idx === 0 ? "PRIMARY BASIN" : "DINING SLIP"}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <div className="p-3 rounded-xl bg-[#B9A078]/10 border border-[#B9A078]/30 text-[#9E8357] text-xs font-light leading-relaxed flex items-center gap-2">
                <span className="shrink-0 text-sm">✦</span>
                <span className="italic">{content.boardingNote}</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}
