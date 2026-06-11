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
      {/* Hero */}
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

      {/* Content */}
      <section className="pb-28 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Contact Info */}
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
                    href="tel:+390172222388"
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
                  <p className="text-base text-foreground">{t.contact.hours1}</p>
                  <p className="text-base text-foreground">{t.contact.hours2}</p>
                </div>
              </div>

              {/* Map */}
              <div className="mt-12 aspect-[4/3] w-full overflow-hidden bg-surface">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.1!2d7.6571!3d44.6476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDM4JzUxLjQiTiA3wrAzOScyNS42IkU!5e0!3m2!1sit!2sit!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="B&B Pavimenti location"
                />
              </div>
            </AnimatedSection>

            {/* Contact Form */}
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
    </PageTransition>
  );
}
