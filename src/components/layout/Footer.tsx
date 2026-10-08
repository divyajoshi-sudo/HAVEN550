import Link from "next/link";
import type { NavigationContent, SiteInfo } from "@/types/content";

export interface FooterProps {
  navigation: NavigationContent;
  site: SiteInfo;
}

export function Footer({ navigation, site }: FooterProps) {
  return (
    <footer className="bg-haven-deep border-t border-white/5">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="block mb-5 group">
              <span className="font-[family-name:var(--font-playfair)] font-serif text-2xl font-semibold tracking-[0.2em] text-haven-cream group-hover:text-haven-gold transition-colors">
                {site.brand}
              </span>
              <br />
              <span className="text-[0.6rem] tracking-[0.35em] uppercase text-haven-slate font-light">
                Private Yacht Charters
              </span>
            </Link>
            <p className="text-haven-slate text-sm leading-relaxed max-w-xs font-light">
              A privately chartered {site.vessel.lengthFeet}-foot {site.vessel.builder} yacht based in {site.location}.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-[0.65rem] tracking-[0.3em] uppercase text-haven-gold mb-5 font-medium">
              Navigate
            </h4>
            <ul className="space-y-3">
              {navigation.footer.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-haven-slate hover:text-haven-cream transition-colors duration-300 font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal & Information Links */}
          <div>
            <h4 className="text-[0.65rem] tracking-[0.3em] uppercase text-haven-gold mb-5 font-medium">
              Information
            </h4>
            <ul className="space-y-3">
              {navigation.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-haven-slate hover:text-haven-cream transition-colors duration-300 font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h4 className="text-[0.65rem] tracking-[0.3em] uppercase text-haven-gold mb-5 font-medium">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-haven-slate font-light">
              <p>{site.location}</p>
              <p>
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-haven-cream transition-colors duration-300"
                >
                  {site.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${site.phone.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-haven-cream transition-colors duration-300"
                >
                  {site.phone}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-haven-slate/60 tracking-wider font-light">
            © 2026 {site.companyName}. All rights reserved.
          </p>
          <p className="text-xs text-haven-slate/40 tracking-wider font-light">
            {site.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
