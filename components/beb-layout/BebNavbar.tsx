"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/BebLanguageContext";

const navLinks = [
  { href: "/", key: "home" as const },
  { href: "/servizi", key: "services" as const },
  { href: "/prodotti", key: "products" as const },
  { href: "/progetti", key: "projects" as const },
  { href: "/contatti", key: "contact" as const },
];

/** Animated nav link — text slides up on hover */
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
      <motion.span
        animate={{ y: hovered ? "-100%" : "0%" }}
        transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
        className={`block text-xs tracking-widest uppercase whitespace-nowrap ${
          isActive ? "text-foreground" : "text-muted"
        }`}
      >
        {label}
      </motion.span>
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

  /**
   * heroPassed = true  → hero section has fully left the viewport (scrolled past it)
   * heroPassed = false → hero section is still (at least partially) visible
   *
   * On pages without a #hero we default to true immediately so the navbar
   * starts in compact mode (same look as when you've scrolled past the hero).
   */
  const [heroPassed, setHeroPassed] = useState(false);
  const [logoVisible, setLogoVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  // ── When pathname changes, reset state and re-check for #hero ──────────────
  useEffect(() => {
    setHeroPassed(false);
    setLogoVisible(true);
  }, [pathname]);

  // ── IntersectionObserver: watch #hero ──────────────────────────────────────
  useEffect(() => {
    // Small delay to let the new page render before querying #hero
    const timer = setTimeout(() => {
      const hero = document.getElementById("hero");

      // No hero on this page → stay in compact mode
      if (!hero) {
        setHeroPassed(true);
        setLogoVisible(true);
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) {
            setHeroPassed(true);
          } else if (entry.intersectionRatio >= 0.6) {
            setHeroPassed(false);
            setLogoVisible(true);
          }
        },
        { threshold: [0, 0.6] }
      );

      observer.observe(hero);
      // eslint-disable-next-line consistent-return
      return () => observer.disconnect();
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]);

  // ── Scroll direction: only relevant after hero has passed ──────────────────
  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const prev = lastScrollY.current;

        if (heroPassed) {
          if (currentY > prev) {
            // scrolling down → hide logo
            setLogoVisible(false);
          } else if (currentY < prev) {
            // scrolling up even 1px → show logo
            setLogoVisible(true);
          }
        }

        lastScrollY.current = currentY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [heroPassed]);

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
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        {/*
          Layout: flex row, items-center.
          Logo on the left (120px, always present in DOM for layout stability).
          Nav pill absolutely centered in the full header width.
          IT/EN on the right.

          When heroPassed = false:
            – header is taller (logo is 120px)
            – nav pill sits at vertical center of the header
          When heroPassed = true:
            – header compresses to 64px
            – nav pill stays centered in the smaller header
            – logo fades based on scroll direction
        */}
        <motion.div
          className="relative flex items-center justify-between px-6 lg:px-12"
          animate={{ height: heroPassed && !logoVisible ? 64 : 120 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* ── LOGO ── */}
          <motion.div
            className="pointer-events-auto flex-shrink-0"
            animate={{
              opacity: logoVisible ? 1 : 0,
              y: logoVisible ? 0 : -20,
            }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{ pointerEvents: logoVisible ? "auto" : "none" }}
          >
            <Link href="/" className="flex items-center" id="navbar-logo">
              <img
                src="/logo BEB.webp"
                alt="Logo BEB Pavimenti"
                className="h-[120px] w-auto object-contain"
              />
            </Link>
          </motion.div>

          {/* ── DESKTOP NAV PILL (centered absolute) ── */}
          <div
            className="hidden lg:flex pointer-events-auto"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <motion.div
              className={`flex items-center gap-8 px-7 py-3 rounded-full ${
                heroPassed
                  ? "bg-white/95 backdrop-blur-md shadow-sm"
                  : "bg-white/90 backdrop-blur-sm shadow-sm"
              }`}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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

          {/* ── LANGUAGE TOGGLE (right) — same visibility as logo ── */}
          <motion.div
            className="hidden lg:flex items-center pointer-events-auto flex-shrink-0"
            animate={{
              opacity: logoVisible ? 1 : 0,
              y: logoVisible ? 0 : -20,
            }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{ pointerEvents: logoVisible ? "auto" : "none" }}
          >
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
          </motion.div>

          {/* ── MOBILE: hamburger ── */}
          <div className="flex items-center lg:hidden pointer-events-auto">
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
        </motion.div>
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
