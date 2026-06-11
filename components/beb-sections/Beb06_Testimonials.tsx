"use client";

import AnimatedSection from "@/components/beb-ui/BebAnimatedSection";
import { useLanguage } from "@/lib/BebLanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    { quote: t.home.testimonial1Quote, author: t.home.testimonial1Author },
    { quote: t.home.testimonial2Quote, author: t.home.testimonial2Author },
    { quote: t.home.testimonial3Quote, author: t.home.testimonial3Author },
  ];

  return (
    <section className="border-y border-border bg-surface py-28 lg:py-40" id="testimonials">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="font-serif text-4xl tracking-tight text-foreground sm:text-5xl">
            {t.home.testimonialsTitle}
          </h2>
        </AnimatedSection>

        <div className="grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-16">
          {testimonials.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <blockquote className="text-center">
                <p className="font-serif text-lg italic leading-relaxed text-foreground lg:text-xl">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <cite className="mt-6 block text-xs tracking-widest uppercase text-muted not-italic">
                  {item.author}
                </cite>
              </blockquote>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
