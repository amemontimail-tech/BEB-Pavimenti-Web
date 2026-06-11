"use client";

import Image from "next/image";
import PageTransition from "@/components/beb-ui/BebPageTransition";
import AnimatedSection from "@/components/beb-ui/BebAnimatedSection";
import { useLanguage } from "@/lib/BebLanguageContext";

const teamMembers = [
  {
    name: "Giuseppe B.",
    role: "Fondatore / Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&fit=crop&crop=face",
  },
  {
    name: "Marco B.",
    role: "Direzione / Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&fit=crop&crop=face",
  },
  {
    name: "Laura B.",
    role: "Design Consultant",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&fit=crop&crop=face",
  },
  {
    name: "Andrea R.",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&fit=crop&crop=face",
  },
];

export default function ChiSiamoPage() {
  const { t } = useLanguage();

  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <AnimatedSection>
            <h1 className="font-serif text-5xl leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl whitespace-pre-line">
              {t.about.heroHeadline}
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Hero Image */}
      <AnimatedSection>
        <div className="relative aspect-[21/9] w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
            alt="B&B Pavimenti showroom interior"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </AnimatedSection>

      {/* Story */}
      <section className="py-28 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <AnimatedSection>
              <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
                {t.about.storyTitle}
              </h2>
              <div className="mt-2 h-px w-16 bg-accent" />
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-muted lg:text-lg lg:leading-relaxed">
                  {t.about.storyP1}
                </p>
                <p className="text-base leading-relaxed text-muted lg:text-lg lg:leading-relaxed">
                  {t.about.storyP2}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-border bg-surface py-28 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <AnimatedSection className="mb-16 text-center">
            <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
              {t.about.valuesTitle}
            </h2>
          </AnimatedSection>

          <div className="grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-16">
            {[
              { title: t.about.value1Title, desc: t.about.value1Desc },
              { title: t.about.value2Title, desc: t.about.value2Desc },
              { title: t.about.value3Title, desc: t.about.value3Desc },
            ].map((value, i) => (
              <AnimatedSection key={i} delay={i * 0.15} className="text-center">
                <h3 className="font-serif text-xl tracking-tight text-foreground">
                  {value.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {value.desc}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-28 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <AnimatedSection className="mb-16 text-center">
            <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
              {t.about.teamTitle}
            </h2>
            <p className="mt-4 text-sm tracking-widest uppercase text-muted">
              {t.about.teamSub}
            </p>
          </AnimatedSection>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="group text-center">
                  <div className="relative mx-auto aspect-[3/4] w-full max-w-[280px] overflow-hidden bg-surface">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <h3 className="mt-6 text-sm font-medium tracking-wide text-foreground">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-xs tracking-widest uppercase text-muted">
                    {member.role}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
