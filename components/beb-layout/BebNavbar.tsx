"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/BebLanguageContext";

const navLinks = [
  { href: "/", key: "home" as const },
  { href: "/chi-siamo", key: "about" as const },
  { href: "/prodotti", key: "products" as const },
  { href: "/progetti", key: "projects" as const },
  { href: "/contatti", key: "contact" as const },
];

/** Animated nav link — text slides up on hover (clip-path roll effect) */
function RollingLink({
  href,
  label,
  isActive,
  id,
  onClick,
}: {
  href: string;
  label: string;
  isActive: boolean;
  id: string;
  onClick?: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      id={id}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden flex flex-col"
      style={{ height: "1.2em" }}
    >
      {/* Visible text */}
      <motion.span
        animate={{ y: hovered ? "-100%" : "0%" }}
        transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
        className={`block text-xs tracking-widest uppercase whitespace-nowrap ${
          isActive ? "text-foreground" : "text-muted"
        }`}
      >
        {label}
      </motion.span>
      {/* Clone that slides in from below */}
      <motion.span
        animate={{ y: hovered ? "-100%" : "0%" }}
        transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
        className="block text-xs tracking-widest uppercase whitespace-nowrap text-foreground"
        style={{ position: "absolute", top: "100%" }}
      >
        {label}
      </motion.span>
    </Link>
  );
}

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
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="relative flex items-start justify-between px-6 pt-5 lg:px-12">

          {/* Logo — top left */}
          <Link href="/" className="flex items-center" id="navbar-logo">
            <img
              src="/logo BEB.webp"
              alt="Logo BEB Pavimenti"
              className="h-[120px] w-auto object-contain"
            />
          </Link>

          {/* Desktop: floating centered nav pill — absolute center */}
          <div className="hidden lg:flex flex-col items-center gap-3 absolute left-1/2 -translate-x-1/2 top-5">
            {/* Nav pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`flex items-center gap-8 px-7 py-3 rounded-full transition-all duration-500 ${
                scrolled
                  ? "bg-white/95 backdrop-blur-md shadow-sm"
                  : "bg-white/90 backdrop-blur-sm shadow-sm"
              }`}
            >
              {navLinks.map((link) => (
                <RollingLink
                  key={link.href}
                  href={link.href}
                  label={t.nav[link.key]}
                  isActive={pathname === link.href}
                  id={`nav-${link.key}`}
                />
              ))}
            </motion.div>
          </div>

          {/* Language toggle — top right */}
          <div className="hidden lg:flex items-center pt-3">
            <button
              onClick={() => setLang(lang === "it" ? "en" : "it")}
              className="flex items-center gap-1 text-xs tracking-widest uppercase transition-colors duration-300"
              id="language-toggle"
              aria-label="Toggle language"
            >
              <span
                className={`transition-colors duration-300 ${
                  lang === "it" ? "text-foreground font-medium" : "text-muted"
                }`}
              >
                IT
              </span>
              <span className="text-muted">/</span>
              <span
                className={`transition-colors duration-300 ${
                  lang === "en" ? "text-foreground font-medium" : "text-muted"
                }`}
              >
                EN
              </span>
            </button>
          </div>

          {/* Mobile: hamburger */}
          <div className="flex items-center lg:hidden pt-3">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5"
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
        </div>
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
