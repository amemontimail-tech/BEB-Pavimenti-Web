export type Language = "it" | "en";

export interface Dictionary {
  nav: {
    home: string;
    about: string;
    products: string;
    projects: string;
    contact: string;
  };
  home: {
    heroHeadline: string;
    heroSub: string;
    heroCta: string;
    stat1Label: string;
    stat1Value: string;
    stat2Label: string;
    stat2Value: string;
    stat3Label: string;
    stat3Value: string;
    introText: string;
    cat1Title: string;
    cat1Desc: string;
    cat2Title: string;
    cat2Desc: string;
    cat3Title: string;
    cat3Desc: string;
    catCta: string;
    projectsTitle: string;
    projectsSub: string;
    testimonialsTitle: string;
    testimonial1Quote: string;
    testimonial1Author: string;
    testimonial2Quote: string;
    testimonial2Author: string;
    testimonial3Quote: string;
    testimonial3Author: string;
    ctaHeadline: string;
    ctaSub: string;
    ctaButton: string;
  };
  about: {
    title: string;
    heroHeadline: string;
    storyTitle: string;
    storyP1: string;
    storyP2: string;
    valuesTitle: string;
    value1Title: string;
    value1Desc: string;
    value2Title: string;
    value2Desc: string;
    value3Title: string;
    value3Desc: string;
    teamTitle: string;
    teamSub: string;
  };
  products: {
    title: string;
    heroHeadline: string;
    heroSub: string;
    cat1Title: string;
    cat1Desc: string;
    cat2Title: string;
    cat2Desc: string;
    cat3Title: string;
    cat3Desc: string;
    cat4Title: string;
    cat4Desc: string;
    cta: string;
  };
  projects: {
    title: string;
    heroHeadline: string;
    heroSub: string;
    filterAll: string;
    filterPrivate: string;
    filterBusiness: string;
  };
  contact: {
    title: string;
    heroHeadline: string;
    heroSub: string;
    addressLabel: string;
    address: string;
    phoneLabel: string;
    phone: string;
    emailLabel: string;
    email: string;
    hoursLabel: string;
    hours1: string;
    hours2: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
    formSuccess: string;
  };
  footer: {
    tagline: string;
    navTitle: string;
    contactTitle: string;
    copyright: string;
  };
}

const it: Dictionary = {
  nav: {
    home: "Home",
    about: "Chi Siamo",
    products: "Prodotti",
    projects: "Progetti",
    contact: "Contatti",
  },
  home: {
    heroHeadline: "Superfici che\nraccontano storie",
    heroSub:
      "Dal 1969, trasformiamo spazi in esperienze attraverso materiali d'eccellenza.",
    heroCta: "Scopri i prodotti",
    stat1Label: "Anni di esperienza",
    stat1Value: "55+",
    stat2Label: "Metri quadri posati",
    stat2Value: "600.000+",
    stat3Label: "Appartamenti completati",
    stat3Value: "4.000+",
    introText:
      "B&B Pavimenti e Rivestimenti è il punto di riferimento a Savigliano per pavimenti, rivestimenti e soluzioni bagno. Da oltre mezzo secolo, accompagniamo ogni progetto con competenza, cura e passione per il bello.",
    cat1Title: "Pavimenti & Rivestimenti",
    cat1Desc: "Ceramiche, gres porcellanato e pietre naturali per ogni ambiente.",
    cat2Title: "Ambiente Bagno",
    cat2Desc: "Soluzioni complete per il bagno, dal design al dettaglio.",
    cat3Title: "Parquet",
    cat3Desc: "Legni pregiati per pavimenti caldi ed eleganti.",
    catCta: "Esplora",
    projectsTitle: "Progetti selezionati",
    projectsSub: "Alcuni dei nostri lavori più recenti",
    testimonialsTitle: "Cosa dicono i nostri clienti",
    testimonial1Quote:
      "Professionalità e gusto impeccabile. Il nostro bagno è diventato una spa.",
    testimonial1Author: "Marco R., Savigliano",
    testimonial2Quote:
      "Ci hanno guidato nella scelta con pazienza e competenza straordinaria.",
    testimonial2Author: "Giulia T., Cuneo",
    testimonial3Quote:
      "Qualità dei materiali eccezionale. Risultato oltre le aspettative.",
    testimonial3Author: "Andrea B., Torino",
    ctaHeadline: "Vieni in showroom",
    ctaSub:
      "Tocca con mano i materiali e lasciati ispirare dai nostri ambienti.",
    ctaButton: "Come raggiungerci",
  },
  about: {
    title: "Chi Siamo — B&B Pavimenti",
    heroHeadline: "Una storia di famiglia,\nuna passione per il bello",
    storyTitle: "La nostra storia",
    storyP1:
      "Fondata nel 1969 a Savigliano, B&B Pavimenti e Rivestimenti nasce come piccola attività familiare con una grande visione: rendere ogni spazio unico attraverso superfici di qualità. Tre generazioni di esperienza ci hanno insegnato che ogni progetto merita attenzione, cura e materiali d'eccellenza.",
    storyP2:
      "Oggi il nostro showroom di Via Togliatti 50 è un punto di riferimento per architetti, designer e privati che cercano ispirazione e qualità. Collaboriamo con i migliori produttori italiani e internazionali per offrire una selezione curata di pavimenti, rivestimenti, soluzioni bagno e parquet.",
    valuesTitle: "I nostri valori",
    value1Title: "Qualità",
    value1Desc:
      "Selezioniamo solo materiali che soddisfano i più alti standard di durabilità, estetica e sostenibilità.",
    value2Title: "Artigianalità",
    value2Desc:
      "Ogni progetto è unico. Lavoriamo con cura artigianale, dalla consulenza alla posa in opera.",
    value3Title: "Innovazione",
    value3Desc:
      "Restiamo al passo con le ultime tendenze e tecnologie per offrire soluzioni contemporanee.",
    teamTitle: "Il nostro team",
    teamSub: "Le persone che rendono tutto possibile",
  },
  products: {
    title: "Prodotti — B&B Pavimenti",
    heroHeadline: "I nostri prodotti",
    heroSub:
      "Una selezione curata di materiali per ogni stile e ogni progetto.",
    cat1Title: "Pavimenti & Rivestimenti",
    cat1Desc:
      "Ceramiche, gres porcellanato, pietre naturali e materiali innovativi. Per pavimenti e pareti che definiscono il carattere di ogni ambiente.",
    cat2Title: "Ambiente Bagno",
    cat2Desc:
      "Sanitari, rubinetteria, mobili e accessori. Progettiamo il bagno come un ambiente completo, funzionale e raffinato.",
    cat3Title: "Parquet",
    cat3Desc:
      "Rovere, noce, teak e essenze pregiate. Pavimenti in legno che portano calore e natura in ogni stanza.",
    cat4Title: "Carta da Parati",
    cat4Desc:
      "Texture, pattern e materiali esclusivi per pareti che diventano protagoniste dell'arredamento.",
    cta: "Richiedi informazioni",
  },
  projects: {
    title: "Progetti — B&B Pavimenti",
    heroHeadline: "I nostri progetti",
    heroSub: "Residenze private e spazi commerciali trasformati con cura.",
    filterAll: "Tutti",
    filterPrivate: "Privati",
    filterBusiness: "Imprese",
  },
  contact: {
    title: "Contatti — B&B Pavimenti",
    heroHeadline: "Parliamone",
    heroSub: "Vieni a trovarci o scrivici per iniziare il tuo progetto.",
    addressLabel: "Indirizzo",
    address: "Via Togliatti 50, 12038 Savigliano (CN)",
    phoneLabel: "Telefono",
    phone: "+39 0172 22388",
    emailLabel: "Email",
    email: "info@bebpavimenti.it",
    hoursLabel: "Orari",
    hours1: "Lun–Ven: 8:30–12:30 / 14:30–19:00",
    hours2: "Sab: 9:00–12:30 / 15:00–19:00",
    formName: "Nome",
    formEmail: "Email",
    formMessage: "Messaggio",
    formSubmit: "Invia messaggio",
    formSuccess: "Messaggio inviato con successo. Ti risponderemo al più presto.",
  },
  footer: {
    tagline: "Superfici d'eccellenza dal 1969.",
    navTitle: "Navigazione",
    contactTitle: "Contatti",
    copyright: "© 2024 B&B Pavimenti e Rivestimenti. Tutti i diritti riservati.",
  },
};

const en: Dictionary = {
  nav: {
    home: "Home",
    about: "About",
    products: "Products",
    projects: "Projects",
    contact: "Contact",
  },
  home: {
    heroHeadline: "Surfaces that\ntell stories",
    heroSub:
      "Since 1969, we transform spaces into experiences through materials of excellence.",
    heroCta: "Explore products",
    stat1Label: "Years of experience",
    stat1Value: "55+",
    stat2Label: "Square meters laid",
    stat2Value: "600,000+",
    stat3Label: "Apartments completed",
    stat3Value: "4,000+",
    introText:
      "B&B Pavimenti e Rivestimenti is Savigliano's reference point for flooring, wall coverings, and bathroom solutions. For over half a century, we've accompanied every project with expertise, care, and a passion for beauty.",
    cat1Title: "Flooring & Wall Tiles",
    cat1Desc: "Ceramics, porcelain stoneware, and natural stones for every space.",
    cat2Title: "Bathroom Design",
    cat2Desc: "Complete bathroom solutions, from design to detail.",
    cat3Title: "Parquet",
    cat3Desc: "Fine woods for warm and elegant flooring.",
    catCta: "Explore",
    projectsTitle: "Selected projects",
    projectsSub: "Some of our most recent work",
    testimonialsTitle: "What our clients say",
    testimonial1Quote:
      "Outstanding professionalism and impeccable taste. Our bathroom became a spa.",
    testimonial1Author: "Marco R., Savigliano",
    testimonial2Quote:
      "They guided us through the selection with extraordinary patience and expertise.",
    testimonial2Author: "Giulia T., Cuneo",
    testimonial3Quote:
      "Exceptional material quality. Results beyond expectations.",
    testimonial3Author: "Andrea B., Turin",
    ctaHeadline: "Visit our showroom",
    ctaSub: "Touch the materials and let our spaces inspire you.",
    ctaButton: "Get directions",
  },
  about: {
    title: "About Us — B&B Pavimenti",
    heroHeadline: "A family story,\na passion for beauty",
    storyTitle: "Our story",
    storyP1:
      "Founded in 1969 in Savigliano, B&B Pavimenti e Rivestimenti began as a small family business with a grand vision: making every space unique through quality surfaces. Three generations of experience taught us that every project deserves attention, care, and materials of excellence.",
    storyP2:
      "Today our showroom at Via Togliatti 50 is a reference point for architects, designers, and homeowners seeking inspiration and quality. We collaborate with the finest Italian and international manufacturers to offer a curated selection of flooring, wall coverings, bathroom solutions, and parquet.",
    valuesTitle: "Our values",
    value1Title: "Quality",
    value1Desc:
      "We select only materials that meet the highest standards of durability, aesthetics, and sustainability.",
    value2Title: "Craftsmanship",
    value2Desc:
      "Every project is unique. We work with artisanal care, from consultation to installation.",
    value3Title: "Innovation",
    value3Desc:
      "We stay current with the latest trends and technologies to offer contemporary solutions.",
    teamTitle: "Our team",
    teamSub: "The people who make it all possible",
  },
  products: {
    title: "Products — B&B Pavimenti",
    heroHeadline: "Our products",
    heroSub: "A curated selection of materials for every style and project.",
    cat1Title: "Flooring & Wall Tiles",
    cat1Desc:
      "Ceramics, porcelain stoneware, natural stones, and innovative materials. For floors and walls that define the character of every space.",
    cat2Title: "Bathroom Design",
    cat2Desc:
      "Sanitaryware, fixtures, furniture, and accessories. We design the bathroom as a complete, functional, and refined environment.",
    cat3Title: "Parquet",
    cat3Desc:
      "Oak, walnut, teak, and fine essences. Wood flooring that brings warmth and nature into every room.",
    cat4Title: "Wallpaper",
    cat4Desc:
      "Textures, patterns, and exclusive materials for walls that become the protagonists of interior design.",
    cta: "Request information",
  },
  projects: {
    title: "Projects — B&B Pavimenti",
    heroHeadline: "Our projects",
    heroSub: "Private residences and commercial spaces transformed with care.",
    filterAll: "All",
    filterPrivate: "Residential",
    filterBusiness: "Commercial",
  },
  contact: {
    title: "Contact — B&B Pavimenti",
    heroHeadline: "Let's talk",
    heroSub: "Visit us or write to start your project.",
    addressLabel: "Address",
    address: "Via Togliatti 50, 12038 Savigliano (CN), Italy",
    phoneLabel: "Phone",
    phone: "+39 0172 22388",
    emailLabel: "Email",
    email: "info@bebpavimenti.it",
    hoursLabel: "Hours",
    hours1: "Mon–Fri: 8:30 AM–12:30 PM / 2:30–7:00 PM",
    hours2: "Sat: 9:00 AM–12:30 PM / 3:00–7:00 PM",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    formSubmit: "Send message",
    formSuccess: "Message sent successfully. We'll get back to you soon.",
  },
  footer: {
    tagline: "Surfaces of excellence since 1969.",
    navTitle: "Navigation",
    contactTitle: "Contact",
    copyright:
      "© 2024 B&B Pavimenti e Rivestimenti. All rights reserved.",
  },
};

const dictionaries: Record<Language, Dictionary> = { it, en };

export function getDictionary(lang: Language): Dictionary {
  return dictionaries[lang];
}
