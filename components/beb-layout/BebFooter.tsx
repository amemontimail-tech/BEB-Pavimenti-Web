"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/BebLanguageContext";

const navLinks = [
  { href: "/", key: "home" as const },
  { href: "/chi-siamo", key: "about" as const },
  { href: "/prodotti", key: "products" as const },
  { href: "/progetti", key: "projects" as const },
  { href: "/contatti", key: "contact" as const },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="grid gap-16 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="font-serif text-3xl tracking-tight text-foreground">
              B&B
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted max-w-xs">
              {t.footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-muted mb-6">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground hover:text-accent transition-colors duration-300"
                  >
                    {t.nav[link.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-muted mb-6">
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-3 text-sm text-foreground">
              <li>Via Togliatti 50, 12038</li>
              <li>Savigliano (CN), Italia</li>
              <li className="pt-2">
                <a
                  href="tel:+390172222388"
                  className="hover:text-accent transition-colors duration-300"
                >
                  +39 0172 22388
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@bebpavimenti.it"
                  className="hover:text-accent transition-colors duration-300"
                >
                  info@bebpavimenti.it
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 border-t border-border pt-8">
          <p className="text-xs text-muted">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
