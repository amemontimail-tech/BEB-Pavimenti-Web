"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Language } from "@/lib/Bebi18n";

// ── Types ───────────────────────────────────────────────────────────────────
export interface PromoItem {
  id: string;
  nome: string;
  nomeEn: string;
  descrizione: string[];
  descrizioneEn: string[];
  image: string | null;
  prezzoPrecedente: string;
  prezzoPromo: string;
  sconto: number;
}

interface PromoCardProps {
  item: PromoItem;
  index: number;
  lang: Language;
}

// ── Price strikethrough + reveal animation ──────────────────────────────────
function AnimatedPrice({
  prezzoPrecedente,
  prezzoPromo,
  sconto,
}: {
  prezzoPrecedente: string;
  prezzoPromo: string;
  sconto: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  // X drawn as two diagonal SVG paths
  const line1 = "M 0 0 L 100 100";
  const line2 = "M 100 0 L 0 100";

  return (
    <div ref={ref} className="flex flex-col gap-4">
      {/* Old price with animated X */}
      <div className="relative inline-flex items-baseline gap-2 w-fit">
        <span className="font-sans text-xl text-muted tracking-wide">
          {prezzoPrecedente}
        </span>

        {/* SVG strikethrough X — overlaid on the price text */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full pointer-events-none"
          aria-hidden="true"
        >
          <motion.path
            d={line1}
            stroke="#4E9A63"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            vectorEffect="non-scaling-stroke"
          />
          <motion.path
            d={line2}
            stroke="#4E9A63"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      {/* New price + badge */}
      <motion.div
        className="flex flex-wrap items-center gap-3"
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: 0.55, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Discount badge */}
        <span className="inline-flex items-center rounded-full bg-[#4E9A63]/10 border border-[#4E9A63]/30 px-3 py-1 text-xs font-semibold tracking-widest text-[#4E9A63] uppercase">
          −{sconto}%
        </span>
        {/* New price */}
        <span className="font-serif text-3xl lg:text-4xl tracking-tight text-foreground">
          {prezzoPromo}
        </span>
      </motion.div>
    </div>
  );
}

// ── Image placeholder ────────────────────────────────────────────────────────
function ImagePlaceholder({ alt }: { alt: string }) {
  return (
    <div
      className="w-full h-full bg-surface border border-border flex flex-col items-center justify-center gap-3 min-h-[320px]"
      role="img"
      aria-label={alt}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
        className="text-border"
      >
        <rect x="1" y="1" width="38" height="38" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M1 28 L12 17 L22 27 L29 20 L39 30" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
      <p className="font-sans text-xs tracking-widest uppercase text-muted/50">
        Immagine in arrivo
      </p>
    </div>
  );
}

// ── PromoCard ────────────────────────────────────────────────────────────────
export default function PromoCard({ item, index, lang }: PromoCardProps) {
  const isReversed = index % 2 === 1;
  const nome = lang === "en" ? item.nomeEn : item.nome;
  const descrizione = lang === "en" ? item.descrizioneEn : item.descrizione;

  return (
    <article
      className="py-20 lg:py-28 border-b border-border last:border-b-0"
      aria-label={nome}
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
          isReversed ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
        }`}
      >
        {/* ── Image ── */}
        <motion.div
          className="relative overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-[3/4]"
          initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {item.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.image}
              alt={nome}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <ImagePlaceholder alt={nome} />
          )}
        </motion.div>

        {/* ── Text ── */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: isReversed ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Index label */}
          <p className="mb-4 font-sans text-xs font-semibold tracking-[0.25em] uppercase text-[#4E9A63]">
            {String(index + 1).padStart(2, "0")}
          </p>

          {/* Name */}
          <h2 className="font-serif text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
            {nome}
          </h2>

          {/* Specs list */}
          <ul className="mt-8 flex flex-col gap-2.5">
            {descrizione.map((riga, i) => (
              <li key={i} className="flex items-baseline gap-3 text-muted text-sm leading-relaxed">
                <span className="flex-shrink-0 w-1 h-1 rounded-full bg-[#4E9A63] mt-2" aria-hidden="true" />
                {riga}
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="mt-10 mb-10 h-px bg-border" />

          {/* Animated price */}
          <AnimatedPrice
            prezzoPrecedente={item.prezzoPrecedente}
            prezzoPromo={item.prezzoPromo}
            sconto={item.sconto}
          />
        </motion.div>
      </div>
    </article>
  );
}
