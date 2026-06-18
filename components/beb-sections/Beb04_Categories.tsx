"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/lib/BebLanguageContext";

const categoryImages = [
  // Pavimenti & Rivestimenti
  "/prodotti/home-pavimenti.jpg",
  // Ambiente Bagno
  "/prodotti/modern-bathroom.png",
  // Parquet
  "/prodotti/parquet-stairs.jpg",
];

const BG_ALTERNATES = ["#ffffff", "#f8f7f5", "#ffffff"];

interface CategoryBlockProps {
  title: string;
  desc: string;
  cta: string;
  image: string;
  href: string;
  index: number;
}

function CategoryBlock({
  title,
  desc,
  cta,
  image,
  href,
  index,
}: CategoryBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  // Even index (0, 2) → image on RIGHT; Odd index (1) → image on LEFT
  const imageOnLeft = index % 2 !== 0;

  const imageSide = (
    <div className="relative overflow-hidden" style={{ flex: "0 0 62%" }}>
      {/* Reveal curtain */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{
          background: "var(--color-surface)",
          originX: imageOnLeft ? 1 : 0,
        }}
        initial={{ scaleX: 1 }}
        animate={isInView ? { scaleX: 0 } : { scaleX: 1 }}
        transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
      />

      {/* Parallax image */}
      <motion.div className="absolute inset-0 scale-[1.05]" style={{ y: imageY }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover ${index === 0 ? 'object-[50%_80%]' : 'object-center'}`}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      </motion.div>

      {/* Text overlay — bottom of image */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-8 lg:p-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="flex flex-col items-start"
        >
          <p className="mb-4 text-[11px] tracking-[0.3em] uppercase text-white/50">
            0{index + 1}
          </p>
          <h3 className="font-serif text-3xl tracking-tight text-white lg:text-[2.4rem]">
            {title}
          </h3>
          <div className="my-5 h-px w-10 bg-white/35" />
          <p className="max-w-xs text-sm leading-relaxed text-white/70">
            {desc}
          </p>
          <Link
            href={href}
            className="group mt-8 inline-flex items-center gap-3 border border-white/35 px-5 py-2.5 text-[11px] tracking-[0.2em] uppercase text-white transition-all duration-400 hover:bg-white hover:text-black"
          >
            {cta}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );

  const emptySide = (
    <div
      className="relative flex-1 overflow-hidden"
      style={{ background: BG_ALTERNATES[index] }}
    >
      {/* Watermark number */}
      <motion.span
        className="absolute font-serif select-none pointer-events-none"
        style={{
          fontSize: "clamp(6rem, 12vw, 11rem)",
          lineHeight: 1,
          color: "var(--color-border)",
          bottom: imageOnLeft ? "auto" : "2.5rem",
          top: imageOnLeft ? "2.5rem" : "auto",
          left: "50%",
          transform: "translateX(-50%)",
        }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
      >
        0{index + 1}
      </motion.span>
    </div>
  );

  return (
    <div
      ref={ref}
      className="flex items-stretch"
      style={{
        minHeight: "88vh",
        marginTop: index === 0 ? 0 : "3px",
      }}
    >
      {imageOnLeft ? (
        <>
          {imageSide}
          {emptySide}
        </>
      ) : (
        <>
          {emptySide}
          {imageSide}
        </>
      )}
    </div>
  );
}

export default function Categories() {
  const { t } = useLanguage();

  const categories = [
    {
      title: t.home.cat1Title,
      desc: t.home.cat1Desc,
      image: categoryImages[0],
    },
    {
      title: t.home.cat2Title,
      desc: t.home.cat2Desc,
      image: categoryImages[1],
    },
    {
      title: t.home.cat3Title,
      desc: t.home.cat3Desc,
      image: categoryImages[2],
    },
  ];

  return (
    <section className="overflow-hidden" id="categories">
      {categories.map((cat, i) => (
        <CategoryBlock
          key={i}
          title={cat.title}
          desc={cat.desc}
          cta={t.home.catCta}
          image={cat.image}
          href="/prodotti"
          index={i}
        />
      ))}
    </section>
  );
}
