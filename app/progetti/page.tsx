"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/beb-ui/BebPageTransition";
import AnimatedSection from "@/components/beb-ui/BebAnimatedSection";
import { useLanguage } from "@/lib/BebLanguageContext";
import { projects } from "@/lib/BebProjectsData";

type ProjectCategory = "all" | "privati" | "imprese";

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
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
