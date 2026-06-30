"use client";

import PageTransition from "@/components/beb-ui/BebPageTransition";
import AnimatedSection from "@/components/beb-ui/BebAnimatedSection";
import { useLanguage } from "@/lib/BebLanguageContext";
import { motion } from "framer-motion";

// Define the spans for each of the 11 items to create a perfectly packed magazine layout
// It packs seamlessly into a 4-col (desktop) and 2-col (tablet) grid without holes.
const getGridSpan = (index: number) => {
  switch (index) {
    case 0: return "col-span-1 md:col-span-2 lg:col-span-2 md:row-span-2"; // Large square
    case 1: return "col-span-1 md:col-span-2 lg:col-span-2 md:row-span-2 lg:row-span-2"; // Large square (Rubinetterie)
    case 2: return "col-span-1 md:col-span-2 lg:col-span-2 md:row-span-2 lg:row-span-2"; // Large square (Vasche)
    case 3: return "col-span-1 md:col-span-2 lg:col-span-2 md:row-span-2 lg:row-span-2"; // Large square
    case 4: return "col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1"; // Small
    case 5: return "col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1"; // Small
    case 6: return "col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1"; // Small
    case 7: return "col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1"; // Small
    case 8: return "col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-1"; // PVC Wide
    case 9: return "col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-3"; // Vertical Accessori
    case 10: return "col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-2"; // Box Doccia Square
    case 11: return "col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-2"; // Piatti Doccia Square
    case 12: return "col-span-1 md:col-span-2 lg:col-span-2 md:row-span-2 lg:row-span-2"; // Mobili da Bagno Square
    default: return "col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1";
  }
};

export default function ProdottiPage() {
  const { t, lang } = useLanguage();

  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-28 text-center">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <AnimatedSection>
            {/* inline-block centers the block, text-left aligns children to the same left edge */}
            <div className="inline-block text-left">
              <p className="mb-5 font-sans text-xs font-semibold tracking-[0.25em] uppercase text-[#4E9A63]">
                {lang === "it" ? "Prodotti Selezionati" : "Selected Products"}
              </p>
              <h1 className="font-serif font-bold text-6xl leading-tight tracking-tight text-foreground sm:text-7xl lg:text-8xl drop-shadow-sm">
                {t.products.heroHeadline}
              </h1>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="mt-8 mx-auto max-w-2xl text-lg leading-relaxed text-muted sm:text-xl font-light">
              {t.products.heroSub}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Categories - Luxury Full-Bleed Grid */}
      <section className="bg-foreground py-1" id="categories">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-dense gap-1 auto-rows-[300px]">
          {t.products.productCategories.map((cat, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden block ${getGridSpan(i)}`}
            >
              {/* Background Image with Scale Animation */}
              <motion.div
                className="absolute inset-0 w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cat.imageId}
                  alt={cat.title}
                  className={`w-full h-full object-cover ${i === 11 ? 'object-[50%_25%]' : i === 12 ? 'object-bottom' : 'object-center'}`}
                  loading="lazy"
                />
              </motion.div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 transition-opacity duration-500 group-hover:opacity-90" />

              {/* Text Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <div className="translate-y-4 transform transition-transform duration-500 group-hover:translate-y-0">
                  <p className="mb-3 text-[10px] tracking-[0.2em] uppercase text-white/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {String(i + 1).padStart(2, '0')} — {t.products.cta}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl tracking-tight text-white mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/90 max-w-md opacity-0 transition-opacity duration-500 group-hover:opacity-100 drop-shadow-sm">
                    {cat.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
