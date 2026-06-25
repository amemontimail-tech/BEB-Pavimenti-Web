"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/lib/BebLanguageContext";

export default function Intro() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const isTextInView = useInView(textRef, { once: true, margin: "-100px" });
  const isImageInView = useInView(imageRef, { once: true, margin: "-60px" });

  // Subtle parallax on the image
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-white"
      id="intro"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[620px] lg:min-h-[680px]">

        {/* ── LEFT: Photo ── */}
        <div ref={imageRef} className="relative overflow-hidden">
          {/* Reveal overlay that slides away */}
          <motion.div
            className="absolute inset-0 z-10 origin-left bg-accent"
            initial={{ scaleX: 1 }}
            animate={isImageInView ? { scaleX: 0 } : { scaleX: 1 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          />

          {/* Photo with parallax */}
          <motion.div
            className="absolute inset-0 scale-[1.08]"
            style={{ y: imageY }}
          >
            <Image
              src="/showroom-esterno.webp"
              alt="Showroom B&B Pavimenti e Rivestimenti, Savigliano"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={95}
            />
            {/* Subtle dark vignette on the right edge for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20" />
          </motion.div>
        </div>

        {/* ── RIGHT: Text ── */}
        <div
          ref={textRef}
          className="flex flex-col justify-center px-8 py-16 lg:px-16 xl:px-24 bg-white"
        >
          {/* Decorative line */}
          <motion.div
            className="mb-10 h-px bg-accent origin-left"
            initial={{ scaleX: 0 }}
            animate={isTextInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            style={{ width: "56px" }}
          />

          {/* Label */}
          <motion.p
            className="mb-6 text-xs tracking-[0.25em] uppercase text-muted"
            initial={{ opacity: 0, y: 16 }}
            animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          >
            Dal 1969
          </motion.p>

          {/* Main text */}
          <motion.p
            className="font-serif text-2xl leading-relaxed text-foreground sm:text-3xl lg:text-[1.75rem] xl:text-3xl lg:leading-[1.65]"
            initial={{ opacity: 0, y: 24 }}
            animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          >
            {t.home.introText}
          </motion.p>

          {/* Bottom accent line */}
          <motion.div
            className="mt-12 h-px bg-border origin-left"
            initial={{ scaleX: 0 }}
            animate={isTextInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
            style={{ width: "100%" }}
          />
        </div>

      </div>
    </section>
  );
}
