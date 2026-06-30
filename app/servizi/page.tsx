"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import PageTransition from "@/components/beb-ui/BebPageTransition";
import AnimatedSection from "@/components/beb-ui/BebAnimatedSection";
import { useLanguage } from "@/lib/BebLanguageContext";

const CONTRACT_SLIDES = [
  {
    src: "/portfolio/imprese/Foto impresa 3 Rondo dei Talenti/2022-10-04 - Rondo dei Talenti-6.webp",
    project: "Rondò dei Talenti",
    location: "Torino",
  },
  {
    src: "/portfolio/imprese/Foto impresa 3 Rondo dei Talenti/2022-10-04 - Rondo dei Talenti-7.webp",
    project: "Rondò dei Talenti",
    location: "Torino",
  },
  {
    src: "/portfolio/imprese/Foto impresa 2 Santo stefano Belbo/IMG_5345.webp",
    project: "Santo Stefano Belbo",
    location: "Cuneo",
  },
  {
    src: "/portfolio/imprese/Foto impresa 2 Santo stefano Belbo/IMG_5356.webp",
    project: "Santo Stefano Belbo",
    location: "Cuneo",
  },
  {
    src: "/portfolio/imprese/Foto impresa 3 Rondo dei Talenti/2022-07-28 - Rondo dei Talenti-1-IG.webp",
    project: "Rondò dei Talenti",
    location: "Torino",
  },
  {
    src: "/portfolio/imprese/Foto impresa 2 Santo stefano Belbo/IMG_5309.webp",
    project: "Santo Stefano Belbo",
    location: "Cuneo",
  },
];

function ContractCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % CONTRACT_SLIDES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const slide = CONTRACT_SLIDES[current];

  return (
    <div className="relative w-full">
      {/* Main image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 60 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0"
          >
            <Image
              src={slide.src}
              alt={slide.project}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={95}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Project label */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`label-${current}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="absolute bottom-5 left-5 right-5"
          >
            <p className="font-sans text-xs font-bold tracking-[0.2em] text-accent uppercase mb-1">
              {slide.location}
            </p>
            <p className="font-serif text-xl text-white">{slide.project}</p>
          </motion.div>
        </AnimatePresence>

        {/* Slide counter top-right */}
        <div className="absolute top-4 right-4 font-sans text-xs text-white/60 tabular-nums">
          {String(current + 1).padStart(2, "0")}/{String(CONTRACT_SLIDES.length).padStart(2, "0")}
        </div>
      </div>

      {/* Dot navigation */}
      <div className="flex items-center gap-2 mt-5 justify-center">
        {CONTRACT_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Vai alla slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-400 ${
              i === current
                ? "w-8 bg-accent"
                : "w-3 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

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
            quality={95}
          />
        </div>
      </AnimatedSection>

      {/* Core Services Process */}
      <section className="py-28 lg:py-40 relative overflow-hidden bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 relative">
          <AnimatedSection>
            <h2 className="font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl mb-16 lg:mb-20">
              Servizi per Privati
            </h2>
          </AnimatedSection>
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

      {/* Imprese e Contract (Dark Section) */}
      <section className="bg-foreground text-background py-28 lg:py-40 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">

          {/* Title + Carousel row */}
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center mb-24 lg:mb-32">

            {/* Left: Title + Description */}
            <AnimatedSection>
              <h2 className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl text-white">
                {t.services.contractTitle}
              </h2>
              <div className="mt-8 h-px w-24 bg-white/20" />
              <p className="mt-8 text-lg leading-relaxed text-white/70 lg:text-xl">
                {t.services.contractDesc}
              </p>
            </AnimatedSection>

            {/* Right: Photo Carousel */}
            <AnimatedSection delay={0.2}>
              <ContractCarousel />
            </AnimatedSection>
          </div>

          {/* Sectors Grid */}
          <AnimatedSection delay={0.1}>
            <div className="border-t border-white/10 pt-16">
              <p className="font-sans text-sm font-bold tracking-[0.2em] text-white/40 uppercase mb-10">
                Settori di Intervento
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {[
                  { icon: "🏨", label: "Hotel e Resort" },
                  { icon: "🏢", label: "Uffici e Direzionale" },
                  { icon: "🛍️", label: "Retail e Showroom" },
                  { icon: "🏗️", label: "Contract Edilizio" },
                  { icon: "🏠", label: "Residenziale di Lusso" },
                  { icon: "🍽️", label: "Ristorazione" },
                ].map((sector, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: i * 0.09 }}
                  >
                    <Link
                      href="/contatti"
                      className="group relative flex flex-col items-center gap-5 py-10 px-8 rounded-2xl border border-white/10 hover:border-accent hover:bg-white/5 transition-all duration-300 cursor-pointer overflow-hidden block"
                    >
                    {/* top accent line on hover */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left rounded-t-2xl" />
                    <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                      {sector.icon}
                    </span>
                    <span className="text-center text-base font-semibold text-white/60 group-hover:text-white/95 transition-colors duration-300 leading-snug tracking-wide">
                      {sector.label}
                    </span>
                    <span className="text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-widest uppercase">
                      Contattaci →
                    </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>
    </PageTransition>
  );
}
