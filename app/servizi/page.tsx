"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PageTransition from "@/components/beb-ui/BebPageTransition";
import AnimatedSection from "@/components/beb-ui/BebAnimatedSection";
import { useLanguage } from "@/lib/BebLanguageContext";

export default function ServiziPage() {
  const { t } = useLanguage();

  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <AnimatedSection>
            <h1 className="font-serif text-5xl leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl whitespace-pre-line">
              {t.services.heroHeadline}
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted lg:text-xl">
              {t.services.heroSub}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Hero Image */}
      <AnimatedSection>
        <div className="relative aspect-[21/9] w-full overflow-hidden">
          <Image
            src="/portfolio/imprese/Foto impresa 3 Rondo dei Talenti/2022-07-28 - Rondo dei Talenti-1-IG.webp"
            alt="B&B Pavimenti Contract"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </AnimatedSection>

      {/* Core Services Process */}
      <section className="py-28 lg:py-40 relative overflow-hidden bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 relative">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-12 relative z-10">
            {[
              {
                title: t.services.service1Title,
                desc: t.services.service1Desc,
                num: "01",
              },
              {
                title: t.services.service2Title,
                desc: t.services.service2Desc,
                num: "02",
              },
              {
                title: t.services.service3Title,
                desc: t.services.service3Desc,
                num: "03",
              },
            ].map((service, i) => (
              <div key={i} className="flex-1 relative flex flex-col group">
                {/* Connecting Line for Desktop */}
                {i < 2 && (
                  <div className="hidden lg:block absolute top-16 left-1/2 w-[calc(100%+3rem)] h-px bg-border z-0">
                     <motion.div 
                        className="absolute top-0 left-0 h-full w-full origin-left bg-accent"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.3 + 0.6, ease: "easeInOut" }}
                     />
                  </div>
                )}

                {/* Box */}
                <AnimatedSection delay={i * 0.2} className="relative z-10 w-full h-full">
                  <div className="flex flex-col h-full bg-surface border border-border p-10 lg:p-12 rounded-3xl transition-all duration-500 hover:border-accent hover:shadow-2xl hover:-translate-y-2">
                    <div className="flex items-center justify-between mb-10">
                      <span className="font-sans text-sm font-bold tracking-[0.2em] text-accent">
                        {service.num}
                      </span>
                      <div className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-40"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-accent opacity-80"></span>
                      </div>
                    </div>
                    <h3 className="font-serif text-3xl tracking-tight text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-6 text-base leading-relaxed text-muted">
                      {service.desc}
                    </p>
                  </div>
                </AnimatedSection>

                {/* Connecting Line for Mobile */}
                {i < 2 && (
                  <div className="lg:hidden w-px h-16 bg-border mx-auto my-2 relative">
                     <motion.div 
                        className="absolute top-0 left-0 w-full h-full origin-top bg-accent"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.3 + 0.6, ease: "easeInOut" }}
                     />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Imprese & Contract (Dark Section) */}
      <section className="bg-foreground text-background py-28 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
            <AnimatedSection>
              <h2 className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl text-white">
                {t.services.contractTitle}
              </h2>
              <div className="mt-8 h-px w-24 bg-white/20" />
              <p className="mt-8 text-lg leading-relaxed text-white/70 lg:text-xl">
                {t.services.contractDesc}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="/portfolio/imprese/Foto impresa 3 Rondo dei Talenti/2022-07-28 - Rondo dei Talenti-14.webp"
                  alt="B&B Pavimenti Contract Services"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
