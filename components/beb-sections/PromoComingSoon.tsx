"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Language } from "@/lib/Bebi18n";

// ──────────────────────────────────────────────────────────────────────────────
// PromoComingSoon
//
// Nastro A (attivo) — righe 45° in tono-su-tono antracite/sabbia, opacita ~20%
// Nastro B (commentato) — righe ocra/antracite cantiere classico, per attivare:
//   - StripedBanner: decommenta variante B, commenta variante A
//   - ConstructionTape: decommenta colori variante B
// ──────────────────────────────────────────────────────────────────────────────

interface PromoComingSoonProps {
  lang: Language;
}

// ── 1. NASTRO DA CANTIERE (fascia interna, scorre) ───────────────────────────
// Struttura:
//   - div contenitore a larghezza piena, h=44px
//   - motion.div interno con repeating-linear-gradient 45deg che scorre su X
//     via backgroundPositionX animato (loop 10s linear)
//   - Maschera CSS gradient ai lati (80px) per dissolvenza elegante ai bordi
//   - Opacita 22% — resta un dettaglio, non compete col testo sottostante
// ─────────────────────────────────────────────────────────────────────────────
function ConstructionTape() {
  return (
    <div
      className="relative w-full overflow-hidden rounded-sm"
      style={{
        height: 44,
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 80px, black calc(100% - 80px), transparent 100%)",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 80px, black calc(100% - 80px), transparent 100%)",
        opacity: 0.22,
      }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          // Variante A (attiva) — tono-su-tono antracite/sabbia, elegante
          background:
            "repeating-linear-gradient(45deg, #1a1a1a 0px, #1a1a1a 16px, #C9B99A 16px, #C9B99A 30px)",
          // Variante B — cantiere classico ocra/antracite
          // background:
          //   "repeating-linear-gradient(45deg, #1a1a1a 0px, #1a1a1a 16px, #7a6a3c 16px, #7a6a3c 30px)",
          backgroundSize: "42px 42px",
        }}
        animate={{ backgroundPositionX: ["0px", "42px"] }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
    </div>
  );
}

// ── 2. ZIG-ZAG UNDERLINE (SVG pathLength animato) ───────────────────────────
//
// Percorre il titolo dalla P di "Promo" alla o di "arrivo":
//   - SVG width="100%" + preserveAspectRatio="none" si adatta al contenitore
//   - Il contenitore padre ha width=fit-content → coincide con la larghezza
//     dell'h1 (dal primo al ultimo carattere del titolo)
//
// Path: zig-zag con 22 picchi, viewBox 0 0 400 12
//   Centro y=6, ampiezza ±4 → y_alto=2, y_basso=10
//   Ogni picco distanziato di 400/22 ≈ 18 unità
//
// Animazione: pathLength 0→1, 1.4s easeInOut, delay 0.4s, once:true
// ─────────────────────────────────────────────────────────────────────────────
const ZIGZAG_PATH = (() => {
  const W = 400, MID = 6, AMP = 4, PEAKS = 22;
  const step = W / PEAKS;
  const pts: string[] = [`M 0 ${MID}`];
  for (let i = 0; i < PEAKS; i++) {
    const x1 = ((i + 0.5) * step).toFixed(1);
    const y1 = i % 2 === 0 ? MID - AMP : MID + AMP;
    const x2 = ((i + 1) * step).toFixed(1);
    const y2 = i % 2 === 0 ? MID + AMP : MID - AMP;
    pts.push(`L ${x1} ${y1}`, `L ${x2} ${y2}`);
  }
  return pts.join(" ");
})();

function ZigZagUnderline() {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <svg
      ref={ref}
      // width=100% + fit-content parent → si estende esattamente quanto il titolo
      width="100%"
      height="12"
      viewBox="0 0 400 12"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
      className="mt-5 mb-7 block"
    >
      <motion.path
        d={ZIGZAG_PATH}
        stroke="#4E9A63"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 0.65 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 1.4, ease: "easeInOut", delay: 0.4 }}
      />
    </svg>
  );
}

// ── Stripe pattern top/bottom banner ────────────────────────────────────────
function StripedBanner() {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: 56 }}>
      <motion.div
        className="absolute inset-0"
        style={{
          // Variante A (attiva) — toni brand antracite / verde-accento desaturato
          background:
            "repeating-linear-gradient(45deg, #1e1e1e 0px, #1e1e1e 18px, #2d3d30 18px, #2d3d30 36px)",
          // Variante B — cantiere classico desaturato (ocra/antracite)
          // background:
          //   "repeating-linear-gradient(45deg, #1e1e1e 0px, #1e1e1e 18px, #7a6a3c 18px, #7a6a3c 36px)",
          backgroundSize: "50px 50px",
        }}
        animate={{ backgroundPositionX: ["0px", "50px"] }}
        transition={{
          duration: 3,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
    </div>
  );
}

// ── Main component ───────────────────────────────────────────────────────────
export default function PromoComingSoon({ lang }: PromoComingSoonProps) {
  const isIt = lang === "it";

  return (
    <section
      aria-label={isIt ? "Promo in arrivo" : "Promo coming soon"}
      className="w-full"
      style={{ minHeight: "80vh" }}
    >
      {/* Top stripe banner */}
      <StripedBanner />

      {/* Main content */}
      <div
        className="flex flex-col items-center justify-center gap-8 px-6"
        style={{
          minHeight: "calc(80vh - 112px)",
          background: "#111111",
        }}
      >
        {/* 1. Nastro da cantiere interno — sopra il badge */}
        <motion.div
          className="w-full max-w-sm"
          initial={{ opacity: 0, scaleX: 0.7 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <ConstructionTape />
        </motion.div>

        {/* Text block */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge eyebrow */}
          <p className="mb-4 font-sans text-xs font-semibold tracking-[0.25em] uppercase text-[#C9B99A]">
            {isIt ? "Lavori in corso" : "Work in progress"}
          </p>

          {/*
           * h1 + zig-zag in un div width=fit-content:
           * il div si restringe alla larghezza intrinseca del testo,
           * quindi ZigZagUnderline (width=100%) parte dalla P e finisce alla o.
           */}
          <div style={{ width: "fit-content", margin: "0 auto" }}>
            <h1
              className="font-serif tracking-tight"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                lineHeight: 1.1,
                color: "#f5f4f2",
              }}
            >
              {isIt ? "Promo in arrivo" : "Coming soon"}
            </h1>
            {/* Zig-zag che si disegna — stessa larghezza del titolo */}
            <ZigZagUnderline />
          </div>

          {/* Subtitle */}
          <p
            className="font-sans leading-relaxed max-w-md mx-auto"
            style={{ color: "#888", fontSize: "1rem" }}
          >
            {isIt
              ? "Stiamo preparando offerte esclusive per te. Torna presto."
              : "We\u2019re preparing exclusive offers. Check back soon."}
          </p>
        </motion.div>
      </div>

      {/* Bottom stripe banner */}
      <StripedBanner />
    </section>
  );
}
