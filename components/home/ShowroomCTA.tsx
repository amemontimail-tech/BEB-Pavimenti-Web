"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";
import { useLanguage } from "@/lib/LanguageContext";

export default function ShowroomCTA() {
  const { t } = useLanguage();

  return (
    <section className="py-28 lg:py-40" id="showroom-cta">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-12">
        <AnimatedSection>
          <h2 className="font-serif text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {t.home.ctaHeadline}
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            {t.home.ctaSub}
          </p>
          <div className="mt-10">
            <Button href="/contatti">{t.home.ctaButton}</Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
