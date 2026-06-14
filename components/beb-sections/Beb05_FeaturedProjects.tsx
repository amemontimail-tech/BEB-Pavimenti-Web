"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/beb-ui/BebAnimatedSection";
import { useLanguage } from "@/lib/BebLanguageContext";
import { projects } from "@/lib/BebProjectsData";

export default function FeaturedProjects() {
  const { t } = useLanguage();

  // Show only the first 4 projects on the homepage
  const featured = projects.slice(0, 4);

  const typeLabel: Record<string, string> = {
    privati: t.projects.filterPrivate,
    imprese: t.projects.filterBusiness,
  };

  return (
    <section className="pt-14 pb-28 lg:pt-20 lg:pb-40" id="featured-projects">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="font-serif text-4xl tracking-tight text-foreground sm:text-5xl">
            {t.home.projectsTitle}
          </h2>
          <p className="mt-4 text-sm tracking-widest uppercase text-muted">
            {t.home.projectsSub}
          </p>
        </AnimatedSection>

        {/* Masonry grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((project, i) => (
            <AnimatedSection
              key={project.slug}
              delay={i * 0.12}
              className={project.tall ? "row-span-2" : ""}
            >
              {/* Wrap the card in a Link */}
              <Link
                href={`/progetti/${project.slug}`}
                id={`featured-project-${project.slug}`}
                aria-label={`Vai al progetto ${project.title}, ${project.location}`}
                className="block"
              >
                <div
                  className={`group relative overflow-hidden cursor-pointer ${
                    project.tall ? "aspect-[3/5]" : "aspect-square"
                  }`}
                >
                  {/* Image */}
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Hover overlay — gradient + text */}
                  <motion.div
                    className="absolute inset-0 flex flex-col justify-end p-5"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    {/* Dark gradient from bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Text content */}
                    <div className="relative z-10">
                      <p className="font-serif text-base leading-snug text-white">
                        {project.title}, {project.location}
                      </p>
                      <p className="mt-1 text-[10px] tracking-[0.25em] uppercase text-white/60">
                        {typeLabel[project.category]}
                      </p>
                      {/* "Vedi progetto" hint */}
                      <p className="mt-2 flex items-center gap-1.5 text-[10px] tracking-widest uppercase text-white/50">
                        Vedi progetto
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                          <path d="M1.5 5h7M5 1.5L8.5 5 5 8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </p>
                    </div>
                  </motion.div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
