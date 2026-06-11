"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/lib/LanguageContext";

export default function Intro() {
  const { t } = useLanguage();

  return (
    <section className="py-28 lg:py-40" id="intro">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-10 h-px w-16 bg-accent" />
          <p className="font-serif text-2xl leading-relaxed text-foreground sm:text-3xl lg:text-4xl lg:leading-relaxed">
            {t.home.introText}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
