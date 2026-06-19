"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/lib/BebLanguageContext";
import { getProjectBySlug } from "@/lib/BebProjectsData";
import PageTransition from "@/components/beb-ui/BebPageTransition";

/* ─── Stagger helpers ─────────────────────────────────────── */
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* ─── Page ─────────────────────────────────────────────────── */
export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { t } = useLanguage();
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const categoryLabel =
    project.category === "privati"
      ? t.projects.filterPrivate
      : t.projects.filterBusiness;

  return (
    <PageTransition>
      {/* ── Header ───────────────────────────────────────────── */}
      <section className="pt-32 pb-10 lg:pt-44 lg:pb-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Link
              href="/progetti"
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors duration-200"
              id="back-to-projects"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M10 3L5 8L10 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {t.nav.projects}
            </Link>
          </motion.div>

          {/* Title block */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
          >
            {/* Decorative line */}
            <motion.div
              className="mb-6 h-px bg-accent origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              style={{ width: "56px" }}
            />

            <div className="flex flex-wrap items-end gap-x-6 gap-y-2">
              <h1 className="font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>
              <span className="mb-1 text-xs tracking-[0.25em] uppercase text-muted">
                {project.location} — {project.year}
              </span>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-4">
              <span className="inline-block rounded-full border border-border px-4 py-1 text-[10px] tracking-[0.2em] uppercase text-muted">
                {categoryLabel}
              </span>
            </div>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Masonry Photo Grid ─────────────────────────────────── */}
      <section className="pb-28 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            className="columns-1 gap-3 sm:columns-2 lg:columns-3 xl:columns-4"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {project.images.map((img, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="mb-3 break-inside-avoid"
              >
                <div
                  className={`group relative overflow-hidden bg-surface ${
                    img.tall ? "aspect-[3/4]" : "aspect-square"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />

                  {/* Subtle hover overlay with image number */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100 flex items-end p-4">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-white/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Bottom CTA ──────────────────────────────────────────── */}
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col items-center text-center gap-6 sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="font-serif text-2xl text-foreground sm:text-3xl">
                Vuoi un progetto simile?
              </p>
              <p className="mt-2 text-sm text-muted">
                Contattaci per una consulenza gratuita nel nostro showroom.
              </p>
            </div>
            <Link
              href="/contatti"
              id="project-cta-contact"
              className="inline-flex shrink-0 items-center gap-3 border border-foreground px-8 py-3.5 text-xs tracking-widest uppercase text-foreground transition-all duration-300 hover:bg-foreground hover:text-white"
            >
              Contattaci
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
