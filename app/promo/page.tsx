"use client";

import PageTransition from "@/components/beb-ui/BebPageTransition";
import AnimatedSection from "@/components/beb-ui/BebAnimatedSection";
import { useLanguage } from "@/lib/BebLanguageContext";
import PromoCard, { type PromoItem } from "@/components/beb-sections/BebPromoCard";
import PromoComingSoon from "@/components/beb-sections/PromoComingSoon";

// ── Feature flag ────────────────────────────────────────────────────────────
// Impostare a `true` per mostrare la sezione Promo reale.
// Con `false` viene montato PromoComingSoon al suo posto ("Lavori in corso").
// La sezione reale resta intatta nel codice e pronta all'attivazione.
const PROMO_READY = false;

// ── Promo data ─────────────────────────────────────────────────────────────
const promoItems: PromoItem[] = [
  {
    id: "mobile-infinity",
    nome: "Mobile Infinity",
    nomeEn: "Infinity Vanity Unit",
    descrizione: [
      "Base portalavabo sospeso L 121,8 P 46,5 H 45 cm",
      "1 cassettone + cassetto interno",
      "Frontale eucalipto chiaro, gola tabacco satinato",
      "Base a giorno tabacco sat L 27 H 45 P 46",
      "Top in Deimos Stone con vasca integrata",
      "Specchio filo lucido 119×65 cm",
      "Lampada a LED L 60 cm",
    ],
    descrizioneEn: [
      "Wall-hung vanity base W 121.8 D 46.5 H 45 cm",
      "1 drawer + inner drawer",
      "Light eucalyptus front, satin tobacco groove",
      "Open base tobacco satin W 27 H 45 D 46",
      "Deimos Stone top with integrated basin",
      "Polished edge mirror 119×65 cm",
      "LED lamp W 60 cm",
    ],
    image: null,
    prezzoPrecedente: "€ 2.383,00 + IVA",
    prezzoPromo: "€ 1.760,00 + IVA",
    sconto: 26,
  },
  {
    id: "lavabo-va",
    nome: "Lavabo V+A",
    nomeEn: "V+A Washbasin",
    descrizione: [
      "Mobile Vanity con lavabo integrato",
      "Due gambe, senza cassetto",
      "Colore antracite",
      "Predisposizione triforo",
    ],
    descrizioneEn: [
      "Vanity unit with integrated washbasin",
      "Two legs, no drawer",
      "Anthracite colour",
      "Three-hole tap preparation",
    ],
    image: null,
    prezzoPrecedente: "€ 2.400,00 + IVA",
    prezzoPromo: "€ 1.995,00 + IVA",
    sconto: 17,
  },
  {
    id: "vasca-cheshire",
    nome: "Vasca V+A — Cheshire",
    nomeEn: "V+A Bathtub — Cheshire",
    descrizione: [
      "Vasca Cheshire con finitura in vernice RAL antracite",
      "L 174,4 H 64,6 P 79,8 cm",
    ],
    descrizioneEn: [
      "Cheshire bathtub with RAL anthracite paint finish",
      "W 174.4 H 64.6 D 79.8 cm",
    ],
    image: null,
    prezzoPrecedente: "€ 4.241,00 + IVA",
    prezzoPromo: "€ 1.900,00 + IVA",
    sconto: 55,
  },
  {
    id: "p3-serie-reverso",
    nome: "P3. Serie Reverso",
    nomeEn: "P3. Reverso Series",
    descrizione: [
      "Base portalavabo 2 cassetti L 70 P 51 H 48",
      "Base 2 cassetti L 50 P 51 H 48",
      "Colore argilla opaco + maniglia filo ossido",
      "Top Solidtek con vasca integrata L 120,5 P 51,5",
      "Colonna 1 anta push pull L 35 P 21 H 165",
      "Pensile 1 anta L 35 P 21 H 117, colore Pergamena Lucido",
      "Boiserie Slab 4 mensole metallo ossido L 25 H 117",
      "Specchio Lux con kit LED 4000K L 70 H 80 / L 70 H 25",
    ],
    descrizioneEn: [
      "2-drawer vanity base W 70 D 51 H 48",
      "2-drawer base W 50 D 51 H 48",
      "Clay matte colour + oxide wire handle",
      "Solidtek top with integrated basin W 120.5 D 51.5",
      "1-door push-pull column W 35 D 21 H 165",
      "1-door wall unit W 35 D 21 H 117, Pergamena Lucido finish",
      "Boiserie Slab 4 oxide metal shelves W 25 H 117",
      "Lux mirror with LED kit 4000K W 70 H 80 / W 70 H 25",
    ],
    image: null,
    prezzoPrecedente: "€ 2.950,00 + IVA",
    prezzoPromo: "€ 2.200,00 + IVA",
    sconto: 25,
  },
  {
    id: "mobile-serie-piani",
    nome: "Mobile Serie Piani",
    nomeEn: "Piani Series Top",
    descrizione: [
      "Piano in HPL grigio calce con profilo in alluminio",
      "L 90 P 46,5 H 10 cm",
      "Foro lavabo e miscelatore dx",
    ],
    descrizioneEn: [
      "HPL top in grey lime with aluminium profile",
      "W 90 D 46.5 H 10 cm",
      "Washbasin hole and right-side mixer hole",
    ],
    image: null,
    prezzoPrecedente: "€ 550,00 + IVA",
    prezzoPromo: "€ 368,00 + IVA",
    sconto: 33,
  },
  {
    id: "mbc-infinity",
    nome: "Mbc. Infinity",
    nomeEn: "Mbc. Infinity",
    descrizione: [
      "Base portalavabo 1 cassettone L 103,4 H 35 P 46",
      "Base 1 anta dx L 36 H 35 P 46 cm",
      "Frontale cannettato noce + gola oro vintage",
      "Top in cristallo extra chiaro satinato metal brown",
      "L 139,8 P 46,5 cm",
    ],
    descrizioneEn: [
      "1-drawer vanity base W 103.4 H 35 D 46",
      "1-door right base W 36 H 35 D 46 cm",
      "Reeded walnut front + vintage gold groove",
      "Extra clear satin glass top, metal brown",
      "W 139.8 D 46.5 cm",
    ],
    image: null,
    prezzoPrecedente: "€ 1.900,00 + IVA",
    prezzoPromo: "€ 1.455,00 + IVA",
    sconto: 23,
  },
  {
    id: "noken-piano",
    nome: "Noken Piano",
    nomeEn: "Noken Top",
    descrizione: [
      "Piano in impiallacciato legno naturale rovere",
      "Con foro miscelatore + lavabo",
      "L 120 P 46,5 cm",
      "Lavabo Slender Dark Concrete + piletta, D 40 H 14 cm",
      "Specchio escluso",
    ],
    descrizioneEn: [
      "Natural oak wood veneer top",
      "With mixer hole + washbasin",
      "W 120 D 46.5 cm",
      "Slender Dark Concrete washbasin + waste, D 40 H 14 cm",
      "Mirror excluded",
    ],
    image: null,
    prezzoPrecedente: "€ 1.400,00 + IVA",
    prezzoPromo: "€ 1.100,00 + IVA",
    sconto: 21,
  },
  {
    id: "composizione-cesame-mbc",
    nome: "Composizione Cesame — MBC",
    nomeEn: "Cesame — MBC Composition",
    descrizione: [
      "Piano lavabo verde New York 108×58 cm",
      "Coppia gambe finitura cromo con portasalviette",
      "Miscelatore lavabo escluso",
      "Mensola in ciliegio L 120 cm con cassettino contenitore verde satinato",
      "Colonna sospesa con anta in vetro sabbiato",
      "7 ripiani interni H 183 P 18 cm",
    ],
    descrizioneEn: [
      "New York green washbasin top 108×58 cm",
      "Pair of chrome legs with towel rail",
      "Basin mixer excluded",
      "Cherry wood shelf W 120 cm with satin green storage drawer",
      "Suspended column with frosted glass door",
      "7 internal shelves H 183 D 18 cm",
    ],
    image: null,
    prezzoPrecedente: "€ 1.518,00 + IVA",
    prezzoPromo: "€ 490,00 + IVA",
    sconto: 68,
  },
  {
    id: "re-mobile-lavanderia",
    nome: "Re. Mobile Lavanderia",
    nomeEn: "Re. Laundry Unit",
    descrizione: [
      "Base con portabiancheria L 60 H 88 P 60 cm",
      "Base lavatoio L 70 H 88 P 60 cm",
      "Base per lavatrice L 70 H 88 P 60 cm",
      "Colore melaminico rovere rigato",
      "Top con vasca integrata in Korakril grigio scuro",
      "Con foro miscelatore e tavoletta L 190,6 H 88 P 60 cm",
    ],
    descrizioneEn: [
      "Laundry base W 60 H 88 D 60 cm",
      "Sink base W 70 H 88 D 60 cm",
      "Washing machine base W 70 H 88 D 60 cm",
      "Ribbed oak melamine finish",
      "Integrated basin top in dark grey Korakril",
      "With mixer hole and shelf W 190.6 H 88 D 60 cm",
    ],
    image: null,
    prezzoPrecedente: "€ 4.060,00 + IVA",
    prezzoPromo: "€ 2.200,00 + IVA",
    sconto: 46,
  },
  {
    id: "mbc-zen",
    nome: "Mbc. Zen",
    nomeEn: "Mbc. Zen",
    descrizione: [
      "Base portalavabo a terra, 2 cassettoni L 139,4 P 48 cm",
      "Frontale islanda + vela satinato",
      "Top in Geacryl vela con vasca integrata",
      "Specchio rettangolare con doppia luce LED 137×65 cm",
    ],
    descrizioneEn: [
      "Floor-standing vanity base, 2 drawers W 139.4 D 48 cm",
      "Iceland + satin vela front",
      "Geacryl vela top with integrated basin",
      "Rectangular mirror with double LED light 137×65 cm",
    ],
    image: null,
    prezzoPrecedente: "€ 2.670,00 + IVA",
    prezzoPromo: "€ 1.990,00 + IVA",
    sconto: 25,
  },
  {
    id: "a-lupi-materia",
    nome: "A. Lupi Materia",
    nomeEn: "A. Lupi Materia",
    descrizione: [
      "Base con cassettone L 72 P 54 H 50 cm",
      "Top multistrato con pannello frontale L 144 H 75 cm",
      "Specchio con cornice L 36 H 144 cm",
    ],
    descrizioneEn: [
      "Drawer base W 72 D 54 H 50 cm",
      "Multilayer top with front panel W 144 H 75 cm",
      "Framed mirror W 36 H 144 cm",
    ],
    image: null,
    prezzoPrecedente: "€ 5.240,00 + IVA",
    prezzoPromo: "€ 2.880,00 + IVA",
    sconto: 45,
  },
  {
    id: "loom-fiamma",
    nome: "Loom Fiamma",
    nomeEn: "Loom Fiamma",
    descrizione: [
      "Mobile angolare dx con ante L 114×48×41 cm",
      "In gres porcellanato nuance fiamma",
      "Lavello ciotola tonda bianco matt D 40 H 18 cm",
      "Piletta clic clac bianco matt",
      "Specchio Plico con ala 75",
      "Specchio Plico box 83",
    ],
    descrizioneEn: [
      "Right corner cabinet with doors W 114×48×41 cm",
      "Fiamma nuance porcelain stoneware finish",
      "Round bowl washbasin matt white D 40 H 18 cm",
      "Matt white click-clac waste",
      "Plico mirror with wing 75",
      "Plico box mirror 83",
    ],
    image: null,
    images: [
      "/promo/loom-fiamma-1.jpg",
      "/promo/loom-fiamma-2.jpg",
      "/promo/loom-fiamma-3.jpg",
      "/promo/loom-fiamma-4.jpg",
      "/promo/loom-fiamma-5.jpg"
    ],
    prezzoPrecedente: "€ 3.200,00 + IVA",
    prezzoPromo: "€ 2.400,00 + IVA",
    sconto: 25,
  },
  {
    id: "loom-giada",
    nome: "Loom Giada",
    nomeEn: "Loom Giada",
    descrizione: [
      "Mobile sospeso 1 cassettone in gres porcellanato nuance giada",
      "L 70 P 51 H 55 cm",
      "Lavello sottopiano tondo bianco matt D 41 H 19 cm",
      "Piletta clic clac bianco matt",
    ],
    descrizioneEn: [
      "Wall-hung 1-drawer unit in jade nuance porcelain stoneware",
      "W 70 D 51 H 55 cm",
      "Under-counter round washbasin matt white D 41 H 19 cm",
      "Matt white click-clac waste",
    ],
    image: null,
    prezzoPrecedente: "€ 1.780,00 + IVA",
    prezzoPromo: "€ 1.300,00 + IVA",
    sconto: 27,
  },
  {
    id: "orl-bagno-piano",
    nome: "Composizione ORL.Bagno — Piano",
    nomeEn: "ORL.Bagno Composition — Top",
    descrizione: [
      "Top scatolare in quercia L 160 P 54 cm",
      "Lavabo escluso",
    ],
    descrizioneEn: [
      "Box-frame oak top W 160 D 54 cm",
      "Washbasin excluded",
    ],
    image: null,
    prezzoPrecedente: "€ 1.582,00 + IVA",
    prezzoPromo: "€ 855,00 + IVA",
    sconto: 46,
  },
  {
    id: "orl-bagno-specchio",
    nome: "Composizione ORL.Bagno — Specchio",
    nomeEn: "ORL.Bagno Composition — Mirror",
    descrizione: [
      "Specchio filo lucido con telaio in acciaio",
      "L 160 H 72 cm",
    ],
    descrizioneEn: [
      "Polished edge mirror with steel frame",
      "W 160 H 72 cm",
    ],
    image: null,
    prezzoPrecedente: "€ 490,00 + IVA",
    prezzoPromo: "€ 265,00 + IVA",
    sconto: 46,
  },
  {
    id: "orl-bagno-barra",
    nome: "Composizione ORL.Bagno — Accessori",
    nomeEn: "ORL.Bagno Composition — Accessories",
    descrizione: [
      "Barra portasalviette laccata bianco opaco",
      "Vaschetta porta bicchiere",
      "Porta oggetti",
    ],
    descrizioneEn: [
      "Matt white lacquered towel rail",
      "Glass holder tray",
      "Object shelf",
    ],
    image: null,
    prezzoPrecedente: "€ 384,00 + IVA",
    prezzoPromo: "€ 210,00 + IVA",
    sconto: 45,
  },
  {
    id: "t4-concerto-mobile",
    nome: "Mobile T4 Concerto",
    nomeEn: "T4 Concerto Vanity Unit",
    descrizione: [
      "Piano con lavabo integrato nero, inserto Tribe filotop",
      "Piletta scarico libero inclusa",
      "Staffe di fissaggio a parete",
      "L 120 P 38 cm",
      "Rubinetto escluso",
    ],
    descrizioneEn: [
      "Black integrated washbasin top, Tribe flush insert",
      "Free-standing waste included",
      "Wall-fixing brackets included",
      "W 120 D 38 cm",
      "Tap excluded",
    ],
    image: null,
    prezzoPrecedente: "€ 3.120,00 + IVA",
    prezzoPromo: "€ 1.815,00 + IVA",
    sconto: 42,
  },
  {
    id: "t4-concerto-specchio",
    nome: "Mobile T4 Concerto — Specchio Giove",
    nomeEn: "T4 Concerto — Giove Mirror",
    descrizione: [
      "Specchio Giove con retroilluminazione LED",
      "L 50 H 100 cm",
    ],
    descrizioneEn: [
      "Giove mirror with LED backlighting",
      "W 50 H 100 cm",
    ],
    image: null,
    prezzoPrecedente: "€ 540,00 + IVA",
    prezzoPromo: "€ 295,00 + IVA",
    sconto: 45,
  },
];

// ── Page ───────────────────────────────────────────────────────────────────
export default function PromoPage() {
  const { t, lang } = useLanguage();

  return (
    <PageTransition>
      {/* ── Overlay "Lavori in corso" (PROMO_READY = false) ── */}
      {!PROMO_READY && <PromoComingSoon lang={lang} />}

      {/* ── Sezione Promo reale — non montata finché PROMO_READY è false ── */}
      {PROMO_READY && (
        <>
          {/* ── Hero ── */}
          <section className="pt-32 pb-20 lg:pt-44 lg:pb-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
              <AnimatedSection>
                {/* eyebrow */}
                <p className="mb-5 font-sans text-xs font-semibold tracking-[0.25em] uppercase text-[#4E9A63]">
                  {lang === "it" ? "Offerte a tempo limitato" : "Limited time offers"}
                </p>
                <h1 className="font-serif text-5xl leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                  {t.promo.heroHeadline}
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted lg:text-xl">
                  {t.promo.heroSub}
                </p>
              </AnimatedSection>
            </div>
          </section>

          {/* ── Divider ── */}
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="h-px bg-border" />
          </div>

          {/* ── Promo items ── */}
          <section className="py-12 lg:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
              <div className="flex flex-col">
                {promoItems.map((item, index) => (
                  <PromoCard
                    key={item.id}
                    item={item}
                    index={index}
                    lang={lang}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* ── Bottom CTA ── */}
          <AnimatedSection>
            <section className="py-24 lg:py-32 bg-surface border-t border-border">
              <div className="mx-auto max-w-3xl px-6 text-center">
                <p className="font-sans text-xs font-semibold tracking-[0.25em] uppercase text-[#4E9A63] mb-5">
                  {lang === "it" ? "Vuoi saperne di più?" : "Want to know more?"}
                </p>
                <h2 className="font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
                  {t.promo.ctaHeadline}
                </h2>
                <p className="mt-6 text-lg text-muted leading-relaxed">
                  {t.promo.ctaSub}
                </p>
                <a
                  href="/contatti"
                  className="mt-10 inline-flex items-center gap-2 rounded-full border border-foreground px-8 py-3.5 text-sm font-medium tracking-widest uppercase text-foreground transition-all duration-300 hover:bg-foreground hover:text-white"
                >
                  {t.promo.ctaButton}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </section>
          </AnimatedSection>
        </>
      )}
    </PageTransition>
  );
}
