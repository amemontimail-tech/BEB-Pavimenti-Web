"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/beb-ui/BebPageTransition";
import AnimatedSection from "@/components/beb-ui/BebAnimatedSection";
import { useLanguage } from "@/lib/BebLanguageContext";
import { projects } from "@/lib/BebProjectsData";

type ProjectCategory = "all" | "privati" | "imprese";

// ── Typewriter card ─────────────────────────────────────────────────────────
const PHRASES = [
  "Altri progetti\nin arrivo",
  "Nuovi lavori\nin corso",
  "Stay tuned",
];

function TypewriterCard() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "pause" | "erasing">("typing");
  const frameRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = PHRASES[phraseIndex];

    if (phase === "typing") {
      if (displayed.length < current.length) {
        frameRef.current = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 55);
      } else {
        frameRef.current = setTimeout(() => setPhase("pause"), 2200);
      }
    } else if (phase === "pause") {
      frameRef.current = setTimeout(() => setPhase("erasing"), 0);
    } else if (phase === "erasing") {
      if (displayed.length > 0) {
        frameRef.current = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length - 1));
        }, 28);
      } else {
        frameRef.current = setTimeout(() => {
          setPhraseIndex((i) => (i + 1) % PHRASES.length);
          setPhase("typing");
        }, 400);
      }
    }

    return () => { if (frameRef.current) clearTimeout(frameRef.current); };
  }, [displayed, phase, phraseIndex]);

  return (
    <div className="mb-4 break-inside-avoid">
      <div
        className="relative flex flex-col items-center justify-center overflow-hidden border border-border/40"
        style={{ minHeight: "320px" }}
      >
        {/* Subtle animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-surface via-background to-surface" />

        {/* Decorative corner dots */}
        <div className="absolute top-5 left-5 w-1 h-1 rounded-full bg-muted/30" />
        <div className="absolute top-5 right-5 w-1 h-1 rounded-full bg-muted/30" />
        <div className="absolute bottom-5 left-5 w-1 h-1 rounded-full bg-muted/30" />
        <div className="absolute bottom-5 right-5 w-1 h-1 rounded-full bg-muted/30" />

        {/* Thin top line accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-muted/30 to-transparent" />

        {/* Text */}
        <div className="relative z-10 px-8 text-center">
          <p
            className="font-serif text-2xl leading-snug tracking-tight text-foreground/80 whitespace-pre-line"
            style={{ minHeight: "3.5em" }}
          >
            {displayed}
            <span
              className="inline-block w-px h-6 bg-foreground/50 ml-0.5 align-middle animate-blink"
            />
          </p>
          <p className="mt-6 text-[9px] tracking-[0.3em] uppercase text-muted/50">
            prossimamente
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Page ────────────────────────────────────────────────────────────────────
export default function ProgettiPage() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<ProjectCategory>("all");

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  const filters: { key: ProjectCategory; label: string }[] = [
    { key: "all", label: t.projects.filterAll },
    { key: "privati", label: t.projects.filterPrivate },
    { key: "imprese", label: t.projects.filterBusiness },
  ];

  const categoryLabel = (cat: "privati" | "imprese") =>
    cat === "privati" ? t.projects.filterPrivate : t.projects.filterBusiness;

  const aspectFor = (p: typeof projects[0]) =>
    p.tall ? "aspect-[3/4]" : "aspect-square";

  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <AnimatedSection>
            <h1 className="font-serif text-5xl leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              {t.projects.heroHeadline}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {t.projects.heroSub}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <AnimatedSection>
            <div className="flex gap-6">
              {filters.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className={`text-xs tracking-widest uppercase transition-all duration-300 pb-2 border-b-2 ${
                    filter === f.key
                      ? "text-foreground border-foreground"
                      : "text-muted border-transparent hover:text-foreground"
                  }`}
                  id={`filter-${f.key}`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-28 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="mb-4 break-inside-avoid"
                >
                  <Link
                    href={`/progetti/${project.slug}`}
                    id={`project-card-${project.slug}`}
                    aria-label={`Vai al progetto ${project.title}, ${project.location}`}
                    className="block"
                  >
                    <div className="group relative overflow-hidden">
                      <div className={`relative ${aspectFor(project)}`}>
                        <Image
                          src={project.coverImage}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          quality={95}
                        />
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/50 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                          <h3 className="text-sm font-medium tracking-wide text-white">
                            {project.title}, {project.location}
                          </h3>
                          <span className="mt-1 text-xs tracking-widest uppercase text-white/70">
                            {categoryLabel(project.category)}
                          </span>
                          <span className="mt-2 flex items-center gap-1.5 text-[10px] tracking-widest uppercase text-white/50">
                            Vedi progetto
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                              <path d="M1.5 5h7M5 1.5L8.5 5 5 8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Typewriter card — fills the last empty column slot */}
            <TypewriterCard />
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
