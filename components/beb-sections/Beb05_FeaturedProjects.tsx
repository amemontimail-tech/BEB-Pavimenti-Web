"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/beb-ui/BebAnimatedSection";
import { useLanguage } from "@/lib/BebLanguageContext";

const projectImages = [
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    alt: "Villa moderna Savigliano",
    name: "Villa Moderna, Savigliano",
    type: "privati" as const,
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80",
    alt: "Bagno in pietra naturale",
    name: "Bagno Esclusivo, Cuneo",
    type: "privati" as const,
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    alt: "Cucina aperta con pavimento in marmo",
    name: "Showroom Commerciale, Torino",
    type: "imprese" as const,
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
    alt: "Corridoio elegante con parquet",
    name: "Residenza Privata, Fossano",
    type: "privati" as const,
    tall: true,
  },
];

export default function FeaturedProjects() {
  const { t } = useLanguage();

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
          {projectImages.map((project, i) => (
            <AnimatedSection
              key={i}
              delay={i * 0.12}
              className={project.tall ? "row-span-2" : ""}
            >
              <div
                className={`group relative overflow-hidden ${
                  project.tall ? "aspect-[3/5]" : "aspect-square"
                }`}
              >
                {/* Image */}
                <Image
                  src={project.src}
                  alt={project.alt}
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
                      {project.name}
                    </p>
                    <p className="mt-1 text-[10px] tracking-[0.25em] uppercase text-white/60">
                      {typeLabel[project.type]}
                    </p>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
