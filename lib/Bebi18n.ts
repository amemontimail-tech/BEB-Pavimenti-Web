export type Language = "it" | "en";

export interface Dictionary {
  nav: {
    home: string;
    services: string;
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
    stat4Label: string;
    stat4Value: string;
    stat5Label: string;
    stat5Value: string;
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
    testimonials: Array<{ quote: string; author: string }>;
    ctaHeadline: string;
    ctaSub: string;
    ctaButton: string;
  };
  services: {
    title: string;
    heroHeadline: string;
    heroSub: string;
    service1Title: string;
    service1Desc: string;
    service2Title: string;
    service2Desc: string;
    service3Title: string;
    service3Desc: string;
    contractTitle: string;
    contractDesc: string;
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
    productCategories: Array<{ title: string; desc: string; imageId: string }>;
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
    services: "Servizi",
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
    stat1Value: "+55",
    stat2Label: "Metri quadri di esposizione",
    stat2Value: "+1000",
    stat3Label: "Metri quadri posati",
    stat3Value: "+2.000.000",
    stat4Label: "Appartamenti completati",
    stat4Value: "+15.000",
    stat5Label: "Metri quadri di magazzino",
    stat5Value: "+1000",
    introText:
      "B&B Pavimenti e Rivestimenti è il punto di riferimento a Savigliano per pavimenti, rivestimenti e soluzioni bagno. Da oltre mezzo secolo, accompagniamo ogni progetto con competenza, cura e passione per il bello.",
    cat1Title: "Pavimenti & Rivestimenti",
    cat1Desc: "Ceramiche, gres porcellanato e pietre naturali per ogni ambiente.",
    cat2Title: "Ambiente Bagno",
    cat2Desc: "Soluzioni complete per il bagno, dal design al dettaglio.",
    cat3Title: "Parquet",
    cat3Desc: "Legni pregiati per pavimenti caldi ed eleganti.",
    catCta: "Esplora",
    projectsTitle: "Alcune delle nostre realizzazioni",
    projectsSub: "Alcuni dei nostri lavori più recenti",
    testimonialsTitle: "Cosa dicono i nostri clienti",
    testimonials: [
      { quote: "Ampia scelta di materiali di eccellente qualità e grande professionalità dello staff.", author: "Francesca G." },
      { quote: "Ci hanno accompagnato nella realizzazione dei nostri progetti con grande attenzione e cura del dettaglio.", author: "Marco R." },
      { quote: "Showroom magnifico, si percepisce subito la competenza e la pazienza nell'ascoltare le richieste.", author: "Laura M." },
      { quote: "Qualità dei materiali eccezionale. Il risultato del nostro bagno è andato oltre le aspettative.", author: "Andrea B." },
      { quote: "Personale super preparato. Hanno saputo consigliarci il parquet perfetto per la nostra zona giorno.", author: "Giulia T." },
      { quote: "Lavori eseguiti nei tempi previsti. I posatori sono stati precisi e pulitissimi.", author: "Roberto F." },
      { quote: "Ampia scelta e materiali di altissima qualità. Rifaremo sicuramente altri lavori con loro!", author: "Davide S." },
      { quote: "Gentilezza e professionalità dal primo incontro fino a lavoro finito. 5 stelle meritatissime.", author: "Simona P." },
      { quote: "Servizio impeccabile e consulenza d'arredo davvero preziosa per la nostra nuova casa.", author: "Matteo C." },
      { quote: "Ottimo rapporto qualità-prezzo e vasta scelta di pavimenti e rivestimenti.", author: "Silvia L." },
      { quote: "Posa del parquet a regola d'arte. Azienda storica di Savigliano che conferma la sua serietà.", author: "Giovanni D." },
      { quote: "Massima disponibilità per trovare soluzioni su misura per il nostro bagno. Molto soddisfatti.", author: "Chiara V." },
      { quote: "Un punto di riferimento. Hanno risolto un problema di umidità consigliandoci i materiali giusti.", author: "Stefano M." },
      { quote: "Cortesia, puntualità e pulizia in fase di montaggio. Consigliatissimo.", author: "Valentina P." },
      { quote: "Materiali stupendi e personale sempre sorridente e pronto ad aiutarti.", author: "Luca B." },
      { quote: "Hanno capito perfettamente lo stile che volevamo e ci hanno proposto soluzioni bellissime.", author: "Alessia N." },
      { quote: "Dalla scelta nello showroom fino alla posa, tutto è stato perfetto.", author: "Enrico F." },
      { quote: "B&B Pavimenti è una garanzia. Mi sono affidata a loro per la seconda volta ed è stato un successo.", author: "Paola G." },
      { quote: "Piastrelle di design introvabili altrove nella zona. Top!", author: "Federico A." },
      { quote: "Un team fantastico che lavora con passione. Il nuovo bagno è uno spettacolo.", author: "Martina Z." }
    ],
    ctaHeadline: "Vieni in showroom",
    ctaSub:
      "Tocca con mano i materiali e lasciati ispirare dai nostri ambienti.",
    ctaButton: "Come raggiungerci",
  },
  services: {
    title: "Servizi — B&B Pavimenti",
    heroHeadline: "Realizziamo superfici\nche definiscono gli spazi",
    heroSub: "Dalla consulenza iniziale alla posa magistrale. Affianchiamo privati, architetti e imprese in ogni fase del progetto, garantendo risultati d'eccellenza.",
    service1Title: "Consulenza & Progettazione",
    service1Desc: "Il nostro team di esperti ti guida nella scelta dei materiali più adatti alle tue esigenze estetiche e funzionali. Studiamo gli spazi per proporre soluzioni su misura che valorizzino ogni ambiente.",
    service2Title: "Fornitura Materiali Esclusivi",
    service2Desc: "Selezioniamo le migliori essenze di parquet, ceramiche pregiate, pietre naturali e resine dai più importanti brand italiani e internazionali, per garantirti qualità e durabilità nel tempo.",
    service3Title: "Posa in Opera Magistrale",
    service3Desc: "I nostri posatori specializzati eseguono lavori a regola d'arte con precisione sartoriale. Dalla preparazione del fondo alle finiture, curiamo ogni dettaglio per un risultato perfetto.",
    contractTitle: "Servizi per Imprese e Contract",
    contractDesc: "B&B Pavimenti è il partner ideale per grandi forniture, hotel, complessi residenziali e spazi commerciali. Offriamo soluzioni chiavi in mano, rispettando budget e tempistiche cantiere con un servizio logistico e di assistenza dedicato.",
  },
  products: {
    title: "Prodotti — B&B Pavimenti",
    heroHeadline: "I Nostri Prodotti",
    heroSub: "Scopri una collezione esclusiva dove il design incontra l'eccellenza. Una selezione curata dei materiali più pregiati, pensata per trasformare la tua visione in realtà e donare ad ogni ambiente un'allure di lusso senza tempo.",
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
    productCategories: [
      { title: "Pavimenti e Rivestimenti", desc: "Ceramiche di altissima qualità e gres porcellanato all'avanguardia per trasformare ogni superficie in un'opera d'arte. Materiali pensati per esaltare il design unico della tua casa.", imageId: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" },
      { title: "Rubinetterie", desc: "Forme scultoree, linee eleganti e la migliore tecnologia per offrirti un'esperienza dell'acqua senza compromessi e un tocco di classe senza tempo.", imageId: "/prodotti/rubinetterie.jpg" },
      { title: "Vasche", desc: "Autentiche sculture dedicate al tuo benessere fisico e mentale, progettate per essere le protagoniste indiscusse e lussuose della tua stanza da bagno.", imageId: "/prodotti/vasche.jpg" },
      { title: "Carta da Parati", desc: "Texture, pattern e materiali esclusivi per pareti che diventano protagoniste dell'arredamento.", imageId: "/prodotti/carta-da-parati.jpg" },
      { title: "Sanitari", desc: "Design ergonomico e linee pulite per sanitari che coniugano comfort assoluto e un'estetica moderna per il tuo bagno.", imageId: "/prodotti/sanitari.jpg" },
      { title: "Parquet e Legno", desc: "Essenze pregiate accuratamente selezionate per pavimenti che trasmettono calore, eleganza naturale e una sensazione di puro comfort sotto i piedi.", imageId: "/prodotti/parquet-legno-nuovo.jpg" },
      { title: "Linoleum", desc: "Superfici versatili ed ecologiche, progettate con tecnologie moderne per adattarsi perfettamente a ogni ambiente contemporaneo, garantendo resistenza e stile.", imageId: "/prodotti/linoleum.png" },
      { title: "Materiali da Esterno", desc: "Soluzioni resistenti, durature e di altissimo pregio estetico per outdoor, terrazze esclusive e giardini, create per vivere all'aperto senza compromessi.", imageId: "/prodotti/materiali-da-esterno.jpg" },
      { title: "PVC", desc: "Il connubio perfetto tra praticità assoluta ed estetica raffinata in un materiale innovativo e duraturo, ideale per progetti di interior design dinamici.", imageId: "/prodotti/pvc.jpg" },
      { title: "Accessori Bagno", desc: "Il vero lusso risiede nei dettagli: accessori dal design esclusivo pensati per completare e arricchire la tua personale oasi di benessere quotidiano.", imageId: "/prodotti/accessori-bagno.jpg" },
      { title: "Box Doccia", desc: "Cristalli purissimi, spessori importanti e linee minimali che si fondono per creare la massima espressione del relax e dell'eleganza contemporanea.", imageId: "/prodotti/box-doccia.jpg" },
      { title: "Piatti Doccia", desc: "Superfici sottili, texture raffinate ed eleganti, progettate per integrarsi perfettamente a filo pavimento garantendo sicurezza e un impatto visivo mozzafiato.", imageId: "/prodotti/piatti-doccia.jpg" },
      { title: "Mobili da Bagno", desc: "Design esclusivo, finiture artigianali e materiali pregiati per arredare la sala da bagno con un'estetica ricercata e una funzionalità impeccabile.", imageId: "/prodotti/mobili-da-bagno.jpg" }
    ],
    cta: "Richiedi informazioni",
  },
  projects: {
    title: "Progetti — B&B Pavimenti",
    heroHeadline: "Alcune delle nostre realizzazioni",
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
    hours1: "Lun–Ven: 8:30–12:00 / 14:30–19:00",
    hours2: "Sab: 8:30–12:00",
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
    services: "Services",
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
    stat1Value: "+55",
    stat2Label: "Square meters of showroom",
    stat2Value: "+1000",
    stat3Label: "Square meters laid",
    stat3Value: "+2,000,000",
    stat4Label: "Apartments completed",
    stat4Value: "+15,000",
    stat5Label: "Square meters of warehouse",
    stat5Value: "+1000",
    introText:
      "B&B Pavimenti e Rivestimenti is Savigliano's reference point for flooring, wall coverings, and bathroom solutions. For over half a century, we've accompanied every project with expertise, care, and a passion for beauty.",
    cat1Title: "Flooring & Wall Tiles",
    cat1Desc: "Ceramics, porcelain stoneware, and natural stones for every space.",
    cat2Title: "Bathroom Design",
    cat2Desc: "Complete bathroom solutions, from design to detail.",
    cat3Title: "Parquet",
    cat3Desc: "Fine woods for warm and elegant flooring.",
    catCta: "Explore",
    projectsTitle: "Some of our documented projects",
    projectsSub: "Some of our most recent work",
    testimonialsTitle: "What our clients say",
    testimonials: [
      { quote: "Wide choice of excellent quality materials and great professionalism of the staff.", author: "Francesca G." },
      { quote: "They accompanied us in the realization of our projects with great attention and care for detail.", author: "Marco R." },
      { quote: "Magnificent showroom, you immediately perceive the competence and patience in listening to requests.", author: "Laura M." },
      { quote: "Exceptional material quality. The result of our bathroom went beyond expectations.", author: "Andrea B." },
      { quote: "Super prepared staff. They were able to advise us on the perfect parquet for our living area.", author: "Giulia T." },
      { quote: "Work completed on schedule. The installers were precise and very clean.", author: "Roberto F." },
      { quote: "Wide choice and highest quality materials. We will definitely do other work with them!", author: "Davide S." },
      { quote: "Kindness and professionalism from the first meeting to the finished work. Well deserved 5 stars.", author: "Simona P." },
      { quote: "Impeccable service and truly precious furnishing advice for our new home.", author: "Matteo C." },
      { quote: "Excellent value for money and vast choice of floors and coverings.", author: "Silvia L." },
      { quote: "Parquet laying done to perfection. Historic Savigliano company that confirms its seriousness.", author: "Giovanni D." },
      { quote: "Maximum availability to find tailor-made solutions for our bathroom. Very satisfied.", author: "Chiara V." },
      { quote: "A point of reference. They solved a humidity problem by recommending the right materials.", author: "Stefano M." },
      { quote: "Courtesy, punctuality and cleanliness during assembly. Highly recommended.", author: "Valentina P." },
      { quote: "Beautiful materials and staff always smiling and ready to help.", author: "Luca B." },
      { quote: "They perfectly understood the style we wanted and proposed beautiful solutions.", author: "Alessia N." },
      { quote: "From the choice in the showroom to the installation, everything was perfect.", author: "Enrico F." },
      { quote: "B&B Pavimenti is a guarantee. I relied on them for the second time and it was a success.", author: "Paola G." },
      { quote: "Designer tiles unavailable elsewhere in the area. Top!", author: "Federico A." },
      { quote: "A fantastic team that works with passion. The new bathroom is spectacular.", author: "Martina Z." }
    ],
    ctaHeadline: "Visit our showroom",
    ctaSub: "Touch the materials and let our spaces inspire you.",
    ctaButton: "Get directions",
  },
  services: {
    title: "Services — B&B Pavimenti",
    heroHeadline: "Creating surfaces\nthat define spaces",
    heroSub: "From initial consultation to masterful installation. We support homeowners, architects, and businesses in every phase of the project, ensuring excellent results.",
    service1Title: "Consulting & Design",
    service1Desc: "Our team of experts guides you in choosing the materials best suited to your aesthetic and functional needs. We study the spaces to propose tailor-made solutions that enhance every environment.",
    service2Title: "Premium Materials Supply",
    service2Desc: "We select the best parquet essences, fine ceramics, natural stones, and resins from top Italian and international brands, to guarantee quality and durability over time.",
    service3Title: "Masterful Installation",
    service3Desc: "Our specialized installers perform state-of-the-art work with sartorial precision. From subfloor preparation to finishes, we take care of every detail for a perfect result.",
    contractTitle: "Business & Contract Services",
    contractDesc: "B&B Pavimenti is the ideal partner for large supplies, hotels, residential complexes, and commercial spaces. We offer turnkey solutions, respecting budgets and construction timelines with dedicated logistics and support.",
  },
  products: {
    title: "Products — B&B Pavimenti",
    heroHeadline: "Our Products",
    heroSub: "Discover an exclusive collection where design meets excellence. A curated selection of the finest materials, conceived to turn your vision into reality and bestow a timeless, luxurious allure upon every space.",
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
    productCategories: [
      { title: "Flooring & Wall Tiles", desc: "Highest quality ceramics and cutting-edge porcelain stoneware to transform every surface into a work of art. Materials designed to enhance your unique design.", imageId: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" },
      { title: "Faucets", desc: "Sculptural forms, elegant lines, and the finest technology to offer an uncompromising water experience and a touch of timeless class.", imageId: "/prodotti/rubinetterie.jpg" },
      { title: "Bathtubs", desc: "Authentic sculptures dedicated to your physical and mental well-being, designed to be the undisputed and luxurious centerpieces of your bathroom.", imageId: "/prodotti/vasche.jpg" },
      { title: "Wallpaper", desc: "Textures, patterns, and exclusive materials for walls that become the protagonists of interior design.", imageId: "/prodotti/carta-da-parati.jpg" },
      { title: "Sanitaryware", desc: "Ergonomic design and clean lines for sanitaryware that combines absolute comfort with modern aesthetics for your bathroom.", imageId: "/prodotti/sanitari.jpg" },
      { title: "Parquet & Wood", desc: "Carefully selected fine woods for floors that transmit warmth, natural elegance, and a sensation of pure comfort beneath your feet.", imageId: "/prodotti/parquet-legno-nuovo.jpg" },
      { title: "Linoleum", desc: "Versatile and ecological surfaces, engineered with modern technologies to adapt perfectly to any contemporary environment, ensuring both resilience and style.", imageId: "/prodotti/linoleum.png" },
      { title: "Outdoor Materials", desc: "Resistant, durable, and highly prestigious solutions for outdoors, exclusive terraces, and gardens, created for uncompromising outdoor living.", imageId: "/prodotti/materiali-da-esterno.jpg" },
      { title: "PVC", desc: "The perfect blend of absolute practicality and refined aesthetics in an innovative, durable material, ideal for dynamic interior design projects.", imageId: "/prodotti/pvc.jpg" },
      { title: "Bathroom Accessories", desc: "True luxury lies in the details: exclusively designed accessories intended to complete and enrich your personal oasis of daily well-being.", imageId: "/prodotti/accessori-bagno.jpg" },
      { title: "Shower Enclosures", desc: "Purest crystals, substantial thicknesses, and minimal lines that merge to create the ultimate expression of relaxation and contemporary elegance.", imageId: "/prodotti/box-doccia.jpg" },
      { title: "Shower Trays", desc: "Thin surfaces, refined and elegant textures, designed to integrate perfectly flush with the floor, ensuring safety and breathtaking visual impact.", imageId: "/prodotti/piatti-doccia.jpg" },
      { title: "Bathroom Furniture", desc: "Exclusive design, artisanal finishes, and fine materials to furnish the bathroom with sophisticated aesthetics and impeccable functionality.", imageId: "/prodotti/mobili-da-bagno.jpg" }
    ],
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
    hours1: "Mon–Fri: 8:30 AM–12:00 PM / 2:30–7:00 PM",
    hours2: "Sat: 8:30 AM–12:00 PM",
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
