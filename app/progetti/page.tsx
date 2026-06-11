"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/beb-ui/BebPageTransition";
import AnimatedSection from "@/components/beb-ui/BebAnimatedSection";
import { useLanguage } from "@/lib/BebLanguageContext";

type ProjectCategory = "all" | "privati" | "imprese";

const projects = [
  {
    title: "Villa Moderna, Savigliano",
    category: "privati" as const,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    aspect: "aspect-[3/4]",
  },
  {
    title: "Ristorante Il Cortile, Cuneo",
    category: "imprese" as const,
    image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80",
    aspect: "aspect-square",
  },
  {
    title: "Appartamento Centro Storico",
    category: "privati" as const,
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Hotel Palazzo Reale, Torino",
    category: "imprese" as const,
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
    aspect: "aspect-[3/4]",
  },
  {
    title: "Residenza Collina, Alba",
    category: "privati" as const,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    aspect: "aspect-square",
  },
  {
    title: "Studio Legale Bianchi",
    category: "imprese" as const,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Loft Industriale, Bra",
    category: "privati" as const,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    aspect: "aspect-[3/4]",
  },
  {
    title: "Showroom Ceramiche Moderne",
    category: "imprese" as const,
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    aspect: "aspect-square",
  },
];

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
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="mb-4 break-inside-avoid"
                >
                  <div className="group relative overflow-hidden">
                    <div className={`relative ${project.aspect}`}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/50 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <h3 className="text-sm font-medium tracking-wide text-white">
                          {project.title}
                        </h3>
                        <span className="mt-1 text-xs tracking-widest uppercase text-white/70">
                          {categoryLabel(project.category)}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
