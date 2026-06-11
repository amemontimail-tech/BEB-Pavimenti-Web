"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const navLinks = [
  { href: "/", key: "home" as const },
  { href: "/chi-siamo", key: "about" as const },
  { href: "/prodotti", key: "products" as const },
  { href: "/progetti", key: "projects" as const },
  { href: "/contatti", key: "contact" as const },
];

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? "bg-white/95 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-2xl tracking-tight text-foreground"
            id="navbar-logo"
          >
            B&B
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs tracking-widest uppercase transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
                id={`nav-${link.key}`}
              >
                {t.nav[link.key]}
              </Link>
            ))}
          </div>

          {/* Right side: language toggle + hamburger */}
          <div className="flex items-center gap-6">
            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === "it" ? "en" : "it")}
              className="flex items-center gap-1 text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors duration-300"
              id="language-toggle"
              aria-label="Toggle language"
            >
              <span
                className={`transition-colors duration-300 ${
                  lang === "it" ? "text-foreground font-medium" : ""
                }`}
              >
                IT
              </span>
              <span className="text-border">/</span>
              <span
                className={`transition-colors duration-300 ${
                  lang === "en" ? "text-foreground font-medium" : ""
                }`}
              >
                EN
              </span>
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 lg:hidden"
              id="menu-toggle"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={
                  menuOpen
                    ? { rotate: 45, y: 5, width: 20 }
                    : { rotate: 0, y: 0, width: 20 }
                }
                className="block h-px bg-foreground origin-center"
                transition={{ duration: 0.3 }}
                style={{ width: 20 }}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-px w-5 bg-foreground"
                transition={{ duration: 0.2 }}
              />
              <motion.span
                animate={
                  menuOpen
                    ? { rotate: -45, y: -7, width: 20 }
                    : { rotate: 0, y: 0, width: 20 }
                }
                className="block h-px bg-foreground origin-center"
                transition={{ duration: 0.3 }}
                style={{ width: 20 }}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-white lg:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className={`font-serif text-3xl tracking-tight transition-colors duration-300 ${
                      pathname === link.href ? "text-foreground" : "text-muted"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {t.nav[link.key]}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
