"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/BebLanguageContext";

/* ── Nav links ──────────────────────────────────────────────── */
const navLinks = [
  { href: "/", key: "home" as const },
  { href: "/chi-siamo", key: "about" as const },
  { href: "/prodotti", key: "products" as const },
  { href: "/progetti", key: "projects" as const },
  { href: "/contatti", key: "contact" as const },
];

/* ── Pill link ──────────────────────────────────────────────── */
function PillLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-block rounded-full border border-white/25 px-4 py-1.5 text-[10px] tracking-[0.2em] uppercase text-white/70 transition-all duration-300 hover:border-white/60 hover:text-white"
    >
      {label}
    </Link>
  );
}

/* ── Footer ─────────────────────────────────────────────────── */
export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: "#1a2e1a" }}
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 40px, #fff 40px, #fff 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, #fff 40px, #fff 41px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-8 lg:px-16">

        {/* ── TOP ROW: logo-icon left · nav pills right ── */}
        <div className="flex items-start justify-between pt-16 pb-0">

          {/* Decorative monogram / icon */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Green diamond accent mark — echoes the logo */}
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
              <rect x="10" y="10" width="24" height="24" rx="3" transform="rotate(45 22 22)" fill="none" stroke="#4a7c59" strokeWidth="1.5" />
              <rect x="15" y="15" width="14" height="14" rx="2" transform="rotate(45 22 22)" fill="#4a7c59" opacity="0.5" />
            </svg>
          </motion.div>

          {/* Nav pills — top right */}
          <motion.div
            className="flex flex-wrap justify-end gap-2 max-w-sm"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            {navLinks.map((link) => (
              <PillLink key={link.href} href={link.href} label={t.nav[link.key]} />
            ))}
            {/* Contact quick links */}
            <a
              href="tel:+39017222388"
              className="inline-block rounded-full border border-white/25 px-4 py-1.5 text-[10px] tracking-[0.2em] uppercase text-white/70 transition-all duration-300 hover:border-white/60 hover:text-white"
            >
              +39 0172 22388 →
            </a>
            <a
              href="mailto:info@bebpavimenti.it"
              className="inline-block rounded-full border border-white/25 px-4 py-1.5 text-[10px] tracking-[0.2em] uppercase text-white/70 transition-all duration-300 hover:border-white/60 hover:text-white"
            >
              info@bebpavimenti.it
            </a>
          </motion.div>
        </div>

        {/* ── DIVIDER ── */}
        <div className="my-10 h-px w-full bg-white/10" />

        {/* ── MIDDLE: address + legal info ── */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <motion.p
            className="text-xs tracking-widest uppercase text-white/35 max-w-xs shrink-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Via Togliatti 50 · 12038 Savigliano (CN) · Italia
          </motion.p>

          <motion.p
            className="text-[10px] leading-relaxed text-white/30 lg:text-right lg:max-w-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Codice Fiscale e Partita Iva: IT02535600049 • Registro imprese di Cuneo 02535600049 • CCIAA Cuneo 187426 R.E.A. • Cap. Soc. € 98.800.= i.v. Società capogruppo del Consorzio B&amp;B • Società consortile Cooperativa Attestato S.O.A.
          </motion.p>
        </div>

        {/* ── BOTTOM ROW: big brand name left · copyright right ── */}
        <div className="mt-16 pb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

          {/* Big brand name — matches logo font/weight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <Link
              href="/"
              id="footer-brand-name"
              className="block font-serif leading-none tracking-tight text-white transition-opacity duration-300 hover:opacity-75"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
            >
              B&amp;B Pavimenti
            </Link>
          </motion.div>

          {/* Copyright + powered by */}
          <motion.div
            className="text-right shrink-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-[11px] leading-relaxed text-white/35">
              © {new Date().getFullYear()} B&amp;B Pavimenti e Rivestimenti.
              <br />
              Tutti i diritti riservati.
            </p>
            <p className="mt-2 text-[10px] tracking-widest uppercase text-white/25">
              Powered by{" "}
              <a
                href="https://www.sevilmontstudio.com"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-powered-by"
                className="text-white/40 underline underline-offset-2 transition-colors duration-300 hover:text-white/70"
              >
                SevilmontStudio
              </a>
            </p>
          </motion.div>

        </div>
      </div>
    </footer>
  );
}
