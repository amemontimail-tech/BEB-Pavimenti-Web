"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/beb-ui/BebAnimatedSection";
import { useLanguage } from "@/lib/BebLanguageContext";

const categoryImages = [
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
  "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80",
];

export default function Categories() {
  const { t } = useLanguage();

  const categories = [
    {
      title: t.home.cat1Title,
      desc: t.home.cat1Desc,
      image: categoryImages[0],
      href: "/prodotti",
    },
    {
      title: t.home.cat2Title,
      desc: t.home.cat2Desc,
      image: categoryImages[1],
      href: "/prodotti",
    },
    {
      title: t.home.cat3Title,
      desc: t.home.cat3Desc,
      image: categoryImages[2],
      href: "/prodotti",
    },
  ];

  return (
    <section className="bg-surface py-28 lg:py-40" id="categories">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((cat, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <Link href={cat.href} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="mt-6">
                  <h3 className="font-serif text-xl tracking-tight text-foreground">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {cat.desc}
                  </p>
                  <span className="mt-4 inline-block text-xs tracking-widest uppercase text-accent-dark transition-colors duration-300 group-hover:text-foreground">
                    {t.home.catCta} →
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
