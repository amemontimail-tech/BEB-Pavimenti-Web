"use client";

import AnimatedSection from "@/components/beb-ui/BebAnimatedSection";
import { useLanguage } from "@/lib/BebLanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();

  // Split testimonials into two groups (rows) for the marquee
  const half = Math.ceil(t.home.testimonials.length / 2);
  const row1 = t.home.testimonials.slice(0, half);
  const row2 = t.home.testimonials.slice(half);

  // Helper to render a review card
  const renderCard = (item: { quote: string; author: string }, i: number) => (
    <blockquote
      key={i}
      className="w-[300px] md:w-[350px] shrink-0 text-center flex flex-col items-center bg-white p-6 rounded-2xl shadow-sm border border-border/50 h-full"
    >
      <div className="flex gap-1 mb-4 text-[#FFB800]">
        {[...Array(5)].map((_, starIndex) => (
          <svg key={starIndex} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <p className="font-serif text-sm md:text-base italic leading-relaxed text-foreground flex-grow">
        &ldquo;{item.quote}&rdquo;
      </p>
      <cite className="mt-4 block text-[10px] sm:text-xs tracking-widest uppercase text-muted not-italic">
        {item.author}
      </cite>
    </blockquote>
  );

  return (
    <section className="border-y border-border bg-surface py-6 lg:py-10 overflow-hidden" id="testimonials">
      <div className="mx-auto w-full px-4">
        <AnimatedSection className="mb-10 text-center">
          <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
            {t.home.testimonialsTitle}
          </h2>
        </AnimatedSection>

        {/* Marquee Container */}
        <div className="flex flex-col gap-6">
          {/* Row 1: moves left to right */}
          <div className="flex w-max animate-marquee-left-right gap-6">
            {[...row1, ...row1].map((item, i) => renderCard(item, i))}
          </div>
          
          {/* Row 2: moves left to right (can be offset or reversed if desired, here same direction as requested) */}
          <div className="flex w-max animate-marquee-left-right gap-6" style={{ animationDelay: '-20s' }}>
            {[...row2, ...row2].map((item, i) => renderCard(item, i))}
          </div>
        </div>
      </div>
    </section>
  );
}
