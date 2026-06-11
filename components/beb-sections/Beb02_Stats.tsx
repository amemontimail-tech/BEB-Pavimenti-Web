"use client";

import AnimatedSection from "@/components/beb-ui/BebAnimatedSection";
import { useLanguage } from "@/lib/BebLanguageContext";

export default function Stats() {
  const { t } = useLanguage();

  const stats = [
    { value: t.home.stat1Value, label: t.home.stat1Label },
    { value: t.home.stat2Value, label: t.home.stat2Label },
    { value: t.home.stat3Value, label: t.home.stat3Label },
  ];

  return (
    <section className="border-y border-border bg-white py-20 lg:py-28" id="stats">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-0 md:divide-x md:divide-border">
          {stats.map((stat, i) => (
            <AnimatedSection
              key={i}
              delay={i * 0.15}
              className="text-center"
            >
              <div className="font-serif text-5xl tracking-tight text-foreground lg:text-6xl">
                {stat.value}
              </div>
              <div className="mt-3 text-xs tracking-widest uppercase text-muted">
                {stat.label}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
