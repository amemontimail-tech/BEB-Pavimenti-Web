"use client";

import Image from "next/image";
import AnimatedSection from "@/components/beb-ui/BebAnimatedSection";
import { useLanguage } from "@/lib/BebLanguageContext";

const projectImages = [
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    alt: "Modern living room with porcelain tile floor",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80",
    alt: "Luxury bathroom with natural stone",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    alt: "Open concept kitchen with marble flooring",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
    alt: "Elegant hallway with parquet flooring",
    tall: true,
  },
];

export default function FeaturedProjects() {
  const { t } = useLanguage();

  return (
    <section className="py-28 lg:py-40" id="featured-projects">
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
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
