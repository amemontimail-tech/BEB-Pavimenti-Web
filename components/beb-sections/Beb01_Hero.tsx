"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/lib/BebLanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  // Convert headline to uppercase — split on newline to animate each line
  const lines = t.home.heroHeadline.toUpperCase().split("\n");

  return (
    <section
      className="relative flex min-h-screen flex-col overflow-hidden"
      id="hero"
    >
      {/* ── Video Background ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src="/B%26B%20piastrelle%20-%20Landing%20web2.mp4"
      />

      {/* ── Dark overlay — gradient bottom-heavy like SpaceX ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />

      {/* ── Content — bottom left ── */}
      <div className="relative z-10 flex flex-1 flex-col justify-end px-8 pb-16 lg:px-16 lg:pb-20">
        {/* Headline */}
        <div className="overflow-hidden">
          {lines.map((line, i) => (
            <motion.h1
              key={i}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: i * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="block text-4xl font-black uppercase leading-none tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
            >
              {line}
            </motion.h1>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-8"
        >
          <Link
            href="/prodotti"
            className="group inline-flex items-center gap-3 border border-white/60 px-6 py-3 text-xs uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            {t.home.heroCta}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 right-8 lg:right-16"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="h-10 w-px bg-white/40"
        />
      </motion.div>
    </section>
  );
}
