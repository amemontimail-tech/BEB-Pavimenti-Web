"use client";

import { useState, type FormEvent } from "react";
import PageTransition from "@/components/beb-ui/BebPageTransition";
import AnimatedSection from "@/components/beb-ui/BebAnimatedSection";
import Button from "@/components/beb-ui/BebButton";
import { useLanguage } from "@/lib/BebLanguageContext";

export default function ContattiPage() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageTransition>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <AnimatedSection>
            <h1 className="font-serif text-5xl leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              {t.contact.heroHeadline}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {t.contact.heroSub}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Info + Form ──────────────────────────────────────── */}
      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">

            {/* ── Left: Contact Info ── */}
            <AnimatedSection>
              <div className="space-y-10">

                <div>
                  <h3 className="text-xs tracking-widest uppercase text-muted mb-3">
                    {t.contact.addressLabel}
                  </h3>
                  <p className="text-base text-foreground">{t.contact.address}</p>
                </div>

                <div>
                  <h3 className="text-xs tracking-widest uppercase text-muted mb-3">
                    {t.contact.phoneLabel}
                  </h3>
                  <a
                    href="tel:+39017222388"
                    className="text-base text-foreground hover:text-accent transition-colors duration-300"
                  >
                    {t.contact.phone}
                  </a>
                </div>

                <div>
                  <h3 className="text-xs tracking-widest uppercase text-muted mb-3">
                    {t.contact.emailLabel}
                  </h3>
                  <a
                    href="mailto:info@bebpavimenti.it"
                    className="text-base text-foreground hover:text-accent transition-colors duration-300"
                  >
                    {t.contact.email}
                  </a>
                </div>

                <div>
                  <h3 className="text-xs tracking-widest uppercase text-muted mb-3">
                    {t.contact.hoursLabel}
                  </h3>
                  {/* Orari corretti */}
                  <p className="text-base text-foreground">Lun – Ven: 8:30 – 12:00 / 14:30 – 19:00</p>
                  <p className="text-base text-foreground">Sabato: 8:30 – 12:00</p>
                </div>

              </div>
            </AnimatedSection>

            {/* ── Right: Form ── */}
            <AnimatedSection delay={0.15}>
              {submitted ? (
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-6 h-px w-16 bg-accent" />
                    <p className="font-serif text-2xl tracking-tight text-foreground">
                      {t.contact.formSuccess}
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8" id="contact-form">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs tracking-widest uppercase text-muted mb-3"
                    >
                      {t.contact.formName}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full border-b border-border bg-transparent py-3 text-base text-foreground outline-none transition-colors duration-300 focus:border-foreground placeholder:text-muted/50"
                      placeholder="Mario Rossi"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs tracking-widest uppercase text-muted mb-3"
                    >
                      {t.contact.formEmail}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full border-b border-border bg-transparent py-3 text-base text-foreground outline-none transition-colors duration-300 focus:border-foreground placeholder:text-muted/50"
                      placeholder="mario@email.it"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs tracking-widest uppercase text-muted mb-3"
                    >
                      {t.contact.formMessage}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full resize-none border-b border-border bg-transparent py-3 text-base text-foreground outline-none transition-colors duration-300 focus:border-foreground placeholder:text-muted/50"
                      placeholder="..."
                    />
                  </div>

                  <Button type="submit" variant="primary">
                    {t.contact.formSubmit}
                  </Button>
                </form>
              )}
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ── Full-width Google Map ─────────────────────────────── */}
      {/*
        Coordinate precise: Via Togliatti 50, 12038 Savigliano (CN)
        lat: 44.6428, lng: 7.6593
        Embed con marker esatto tramite place_id di B&B Pavimenti
      */}
      <section className="w-full" id="mappa">
        <div className="h-[480px] w-full lg:h-[560px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.4562!2d7.656617!3d44.642814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ceba6f9f1b1f41%3A0x5b3e7c3a2d6a9c1b!2sVia%20Palmiro%20Togliatti%2C%2050%2C%2012038%20Savigliano%20CN!5e0!3m2!1sit!2sit!4v1718379600000!5m2!1sit!2sit"
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="B&B Pavimenti e Rivestimenti — Via Togliatti 50, Savigliano"
          />
        </div>
      </section>

      {/* bottom spacing */}
      <div className="pb-16 lg:pb-24" />
    </PageTransition>
  );
}
