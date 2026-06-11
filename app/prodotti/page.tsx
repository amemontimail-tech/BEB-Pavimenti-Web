"use client";

import Image from "next/image";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";
import { useLanguage } from "@/lib/LanguageContext";

const categoryImages = [
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
  "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80",
  "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=1200&q=80",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
];

export default function ProdottiPage() {
  const { t } = useLanguage();

  const categories = [
    {
      title: t.products.cat1Title,
      desc: t.products.cat1Desc,
      image: categoryImages[0],
    },
    {
      title: t.products.cat2Title,
      desc: t.products.cat2Desc,
      image: categoryImages[1],
    },
    {
      title: t.products.cat3Title,
      desc: t.products.cat3Desc,
      image: categoryImages[2],
    },
    {
      title: t.products.cat4Title,
      desc: t.products.cat4Desc,
      image: categoryImages[3],
    },
  ];

  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <AnimatedSection>
            <h1 className="font-serif text-5xl leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              {t.products.heroHeadline}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {t.products.heroSub}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-28 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="space-y-24 lg:space-y-32">
            {categories.map((cat, i) => (
              <AnimatedSection key={i} delay={0.1}>
                <div
                  className={`grid gap-8 lg:grid-cols-2 lg:gap-16 items-center ${
                    i % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={cat.image}
                        alt={cat.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  <div className={`flex flex-col justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
                      {cat.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-muted lg:text-lg lg:leading-relaxed">
                      {cat.desc}
                    </p>
                    <div className="mt-8">
                      <Button href="/contatti" variant="outline">
                        {t.products.cta}
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
