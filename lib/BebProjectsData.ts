export type ProjectCategory = "privati" | "imprese";

export interface Project {
  slug: string;
  title: string;
  location: string;
  category: ProjectCategory;
  description: string;
  coverImage: string;
  /** All images shown in the masonry detail page */
  images: { src: string; alt: string; tall?: boolean }[];
  /** Used in Featured Projects grid */
  tall?: boolean;
  /** Optional Tailwind object-position class for the cover image */
  coverPosition?: string;
}

export const projects: Project[] = [
  {
    slug: "residenza-av-saluzzo",
    title: "Residenza A+V",
    location: "Saluzzo",
    category: "privati",
    description:
      "Una residenza privata completata con cura dei dettagli, pavimentazioni eleganti e rivestimenti moderni per un'atmosfera accogliente e raffinata.",
    coverImage:
      "/portfolio/privati/Dana del Piaz Privato 3/IMG_2596.webp",
    tall: true,
    coverPosition: "object-[25%_center]",
    images: [
      {
        src: "/portfolio/privati/Dana del Piaz Privato 3/IMG_2596.webp",
        alt: "Residenza A+V Saluzzo - Dettaglio ingresso",
        tall: true,
      },
      {
        src: "/portfolio/privati/Dana del Piaz Privato 3/IMG_2581.webp",
        alt: "Residenza A+V Saluzzo - Vista 2",
        tall: false,
      },
      {
        src: "/portfolio/privati/Dana del Piaz Privato 3/IMG_2582.webp",
        alt: "Residenza A+V Saluzzo - Vista 3",
        tall: false,
      },
      {
        src: "/portfolio/privati/Dana del Piaz Privato 3/IMG_2583.webp",
        alt: "Residenza A+V Saluzzo - Vista 4",
        tall: true,
      },
      {
        src: "/portfolio/privati/Dana del Piaz Privato 3/IMG_2586.webp",
        alt: "Residenza A+V Saluzzo - Vista 5",
        tall: false,
      },
      {
        src: "/portfolio/privati/Dana del Piaz Privato 3/IMG_2587.webp",
        alt: "Residenza A+V Saluzzo - Vista 6",
        tall: false,
      },
      {
        src: "/portfolio/privati/Dana del Piaz Privato 3/IMG_2588.webp",
        alt: "Residenza A+V Saluzzo - Vista 7",
        tall: true,
      },
      {
        src: "/portfolio/privati/Dana del Piaz Privato 3/IMG_2589.webp",
        alt: "Residenza A+V Saluzzo - Vista 8",
        tall: false,
      },
      {
        src: "/portfolio/privati/Dana del Piaz Privato 3/IMG_2591.webp",
        alt: "Residenza A+V Saluzzo - Vista 9",
        tall: false,
      },
      {
        src: "/portfolio/privati/Dana del Piaz Privato 3/IMG_2593.webp",
        alt: "Residenza A+V Saluzzo - Vista 10",
        tall: true,
      },
      {
        src: "/portfolio/privati/Dana del Piaz Privato 3/IMG_2594.webp",
        alt: "Residenza A+V Saluzzo - Vista 11",
        tall: false,
      },
      {
        src: "/portfolio/privati/Dana del Piaz Privato 3/IMG_2595.webp",
        alt: "Residenza A+V Saluzzo - Vista 12",
        tall: false,
      },
      {
        src: "/portfolio/privati/Dana del Piaz Privato 3/IMG_2597.webp",
        alt: "Residenza A+V Saluzzo - Vista 13",
        tall: true,
      },
      {
        src: "/portfolio/privati/Dana del Piaz Privato 3/IMG_2598.webp",
        alt: "Residenza A+V Saluzzo - Vista 14",
        tall: false,
      },
      {
        src: "/portfolio/privati/Dana del Piaz Privato 3/IMG_2599.webp",
        alt: "Residenza A+V Saluzzo - Vista 15",
        tall: true,
      },
    ],
  },
  {
    slug: "casa-a-g-savigliano",
    title: "Casa A+G",
    location: "Savigliano",
    category: "privati",
    description:
      "Una residenza privata dove il design contemporaneo si fonde con materiali di pregio. Pavimenti eleganti e rivestimenti moderni che valorizzano ogni ambiente della casa.",
    coverImage:
      "/portfolio/privati/Casa A+G Savigliano/IMG_06.webp",
    tall: false,
    images: [
      { src: "/portfolio/privati/Casa A+G Savigliano/IMG_01.webp", alt: "Casa A+G Savigliano - Vista 1", tall: true },
      { src: "/portfolio/privati/Casa A+G Savigliano/IMG_02.webp", alt: "Casa A+G Savigliano - Vista 2", tall: false },
      { src: "/portfolio/privati/Casa A+G Savigliano/IMG_03.webp", alt: "Casa A+G Savigliano - Vista 3", tall: false },
      { src: "/portfolio/privati/Casa A+G Savigliano/IMG_04.webp", alt: "Casa A+G Savigliano - Vista 4", tall: true },
      { src: "/portfolio/privati/Casa A+G Savigliano/IMG_05.webp", alt: "Casa A+G Savigliano - Vista 5", tall: false },
      { src: "/portfolio/privati/Casa A+G Savigliano/IMG_06.webp", alt: "Casa A+G Savigliano - Vista 6", tall: false },
      { src: "/portfolio/privati/Casa A+G Savigliano/IMG_07.webp", alt: "Casa A+G Savigliano - Vista 7", tall: true },
      { src: "/portfolio/privati/Casa A+G Savigliano/IMG_08.webp", alt: "Casa A+G Savigliano - Vista 8", tall: false },
      { src: "/portfolio/privati/Casa A+G Savigliano/IMG_09.webp", alt: "Casa A+G Savigliano - Vista 9", tall: false },
      { src: "/portfolio/privati/Casa A+G Savigliano/IMG_10.webp", alt: "Casa A+G Savigliano - Vista 10", tall: true },
      { src: "/portfolio/privati/Casa A+G Savigliano/IMG_11.webp", alt: "Casa A+G Savigliano - Vista 11", tall: false },
      { src: "/portfolio/privati/Casa A+G Savigliano/IMG_12.webp", alt: "Casa A+G Savigliano - Vista 12", tall: true },
    ],
  },
  {
    slug: "showroom-commerciale-torino",
    title: "Showroom Commerciale",
    location: "Torino",
    category: "imprese",
    description:
      "Un ampio showroom di ceramiche arredato con pavimenti e rivestimenti di nostra selezione. Un progetto commerciale che valorizza il prodotto attraverso l'ambiente stesso.",
    coverImage:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80",
    tall: false,
    images: [
      {
        src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80",
        alt: "Ingresso showroom con pavimento in gres grigio",
        tall: false,
      },
      {
        src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=900&q=80",
        alt: "Area esposizione piastrelle in grande formato",
        tall: true,
      },
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
        alt: "Zona bagno campione allestita",
        tall: false,
      },
      {
        src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80",
        alt: "Corridoio con display rivestimenti e colori",
        tall: false,
      },
      {
        src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=900&q=80",
        alt: "Area parquet con campioni in esposizione",
        tall: true,
      },
      {
        src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80",
        alt: "Zona relax clienti con pavimento in legno",
        tall: false,
      },
      {
        src: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=900&q=80",
        alt: "Dettaglio reception con pavimento in marmo",
        tall: false,
      },
    ],
  },
  {
    slug: "residenza-privata-fossano",
    title: "Residenza Privata",
    location: "Fossano",
    category: "privati",
    description:
      "Una residenza elegante completata con parquet in rovere naturale spazzolato in tutta la zona giorno e rivestimenti in pietra per i bagni. Un progetto pensato per durare nel tempo.",
    coverImage:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=900&q=80",
    tall: true,
    images: [
      {
        src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=900&q=80",
        alt: "Soggiorno con parquet in rovere naturale",
        tall: true,
      },
      {
        src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80",
        alt: "Cucina con pavimento continuo in gres",
        tall: false,
      },
      {
        src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80",
        alt: "Bagno padronale con rivestimento in pietra",
        tall: false,
      },
      {
        src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80",
        alt: "Camera da letto con parquet a spina di pesce",
        tall: true,
      },
      {
        src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=900&q=80",
        alt: "Scala interna rivestita in pietra naturale",
        tall: false,
      },
      {
        src: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=900&q=80",
        alt: "Ingresso con pavimento in marmo Bardiglio",
        tall: false,
      },
      {
        src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80",
        alt: "Terrazzo esterno con pavimento antiscivolo",
        tall: false,
      },
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
        alt: "Vista generale della zona living completata",
        tall: true,
      },
    ],
  },
  // ── 5 ────────────────────────────────────────────────────────
  {
    slug: "appartamento-centro-alba",
    title: "Appartamento Centro Storico",
    location: "Alba",
    category: "privati",
    description:
      "Ristrutturazione completa di un appartamento storico nel cuore di Alba. Pavimentazione in gres effetto cotto antico per rispettare l'architettura originale, abbinata a rivestimenti bagno contemporanei in marmo nero Marquina.",
    coverImage:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&q=80",
    tall: false,
    images: [
      { src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&q=80", alt: "Soggiorno con pavimento effetto cotto", tall: true },
      { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80", alt: "Cucina open space con piano lavoro in marmo", tall: false },
      { src: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=900&q=80", alt: "Corridoio d'ingresso con gres geometrico", tall: false },
      { src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=900&q=80", alt: "Bagno principale con marmo nero Marquina", tall: true },
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80", alt: "Dettaglio doccia walk-in rivestita in marmo", tall: false },
      { src: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=900&q=80", alt: "Secondo bagno con rivestimento terrazzo", tall: false },
      { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80", alt: "Camera da letto con parquet a punto unghia", tall: true },
      { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80", alt: "Ripostiglio con pavimento in gres antiscivolo", tall: false },
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80", alt: "Loggia esterna con pavimento in pietra", tall: false },
      { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=900&q=80", alt: "Vista d'insieme del living completato", tall: true },
    ],
  },

  // ── 6 ────────────────────────────────────────────────────────
  {
    slug: "hotel-palazzo-reale-torino",
    title: "Hotel Palazzo Reale",
    location: "Torino",
    category: "imprese",
    description:
      "Fornitura e posa di pavimenti e rivestimenti per un hotel boutique nel centro di Torino. Marmi pregiati nell'atrio, parquet a spina di pesce nelle camere, gres porcellanato tecnico negli spazi comuni.",
    coverImage:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&q=80",
    tall: false,
    images: [
      { src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&q=80", alt: "Atrio hotel con pavimento in marmo Botticino", tall: true },
      { src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80", alt: "Camera deluxe con parquet a spina di pesce", tall: false },
      { src: "https://images.unsplash.com/photo-1631049035534-5d4f7fc1de61?w=900&q=80", alt: "Suite presidenziale con pavimento in pietra", tall: false },
      { src: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=900&q=80", alt: "Bagno suite con vasca e rivestimento in onice", tall: true },
      { src: "https://images.unsplash.com/photo-1575873035890-a8b94cb61d9b?w=900&q=80", alt: "Sala colazioni con pavimento in gres effetto legno", tall: false },
      { src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=900&q=80", alt: "Corridoio piano con moquette e bordi in ottone", tall: false },
      { src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80", alt: "Rooftop bar con pavimento in gres outdoor", tall: true },
      { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80", alt: "Spa e piscina interna con rivestimento antiscivolo", tall: false },
      { src: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=900&q=80", alt: "Sala conferenze con pavimento in rovere fumé", tall: false },
      { src: "https://images.unsplash.com/photo-1445991842772-097fea258e7b?w=900&q=80", alt: "Dettaglio scala con rivestimento in marmo Calacatta", tall: true },
      { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80", alt: "Vista generale atrio con illuminazione serale", tall: false },
    ],
  },

  // ── 7 ────────────────────────────────────────────────────────
  {
    slug: "residenza-collina-bra",
    title: "Residenza sulla Collina",
    location: "Bra",
    category: "privati",
    description:
      "Villa unifamiliare immersa nelle Langhe, progettata per integrarsi perfettamente con il paesaggio. Pavimenti in pietra di Luserna naturale all'esterno, gres effetto legno di rovere negli interni per un ambiente caldo e contemporaneo.",
    coverImage:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=900&q=80",
    tall: true,
    images: [
      { src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=900&q=80", alt: "Facciata villa con pavimento esterno in pietra di Luserna", tall: true },
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80", alt: "Living con gres effetto rovere affumicato", tall: false },
      { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80", alt: "Cucina con isola e pavimento in pietra naturale", tall: false },
      { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=900&q=80", alt: "Sala da pranzo con pavimento continuo", tall: true },
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80", alt: "Bagno padronale con rivestimento in ardesia", tall: false },
      { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80", alt: "Camera da letto vista vigneti con parquet", tall: false },
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80", alt: "Studio con pavimento in rovere naturale cerato", tall: true },
      { src: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=900&q=80", alt: "Bagno ospiti con rivestimento effetto beton", tall: false },
      { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80", alt: "Terrazza panoramica con gres antiscivolo 60x60", tall: false },
      { src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=900&q=80", alt: "Piscina esterna bordo sfioro con rivestimento in mosaico", tall: true },
      { src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&q=80", alt: "Dependance con pavimento in gres grigio antracite", tall: false },
    ],
  },

  // ── 8 ────────────────────────────────────────────────────────
  {
    slug: "ristorante-cortile-cuneo",
    title: "Ristorante Il Cortile",
    location: "Cuneo",
    category: "imprese",
    description:
      "Un ristorante gourmet nel cuore di Cuneo dove il pavimento diventa parte dell'esperienza gastronomica. Rivestimenti in cotto fatto a mano, tavoli con piani in marmo e un cortile interno con sampietrini originali restaurati.",
    coverImage:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80",
    tall: false,
    images: [
      { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80", alt: "Sala principale ristorante con cotto fatto a mano", tall: false },
      { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80", alt: "Zona bar con rivestimento in mosaico vetro", tall: true },
      { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80", alt: "Cortile interno con sampietrini restaurati", tall: false },
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80", alt: "Sala privata con parquet antico recuperato", tall: false },
      { src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=900&q=80", alt: "Cucina professionale con pavimento in gres tecnico", tall: true },
      { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80", alt: "Dettaglio tavolo con piano in marmo Calacatta", tall: false },
      { src: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=900&q=80", alt: "Bagni con rivestimento in maiolica artigianale", tall: false },
      { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80", alt: "Cantina con pavimento in ardesia naturale", tall: true },
      { src: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=900&q=80", alt: "Ingresso con logo in mosaico personalizzato", tall: false },
      { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=900&q=80", alt: "Terrazza esterna con gres antiscivolo effetto pietra", tall: false },
    ],
  },

  // ── 9 ────────────────────────────────────────────────────────
  {
    slug: "loft-industriale-mondovi",
    title: "Loft Industriale",
    location: "Mondovì",
    category: "privati",
    description:
      "Recupero di un ex capannone industriale trasformato in loft abitativo di design. Pavimento in cemento levigato e lucidato per mantenere l'anima industrial, abbinato a rivestimenti bagno in gres effetto cemento graffiato.",
    coverImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80",
    tall: true,
    images: [
      { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80", alt: "Open space con pavimento in cemento levigato", tall: true },
      { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80", alt: "Cucina industriale con piano lavoro in cemento", tall: false },
      { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80", alt: "Zona living con pavimento continuo e finitura lucida", tall: false },
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80", alt: "Bagno principale in gres effetto cemento graffiato", tall: true },
      { src: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=900&q=80", alt: "Doccia esterna in vetro con rivestimento in ardesia", tall: false },
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80", alt: "Area notte soppalcata con pavimento in rovere grezzo", tall: false },
      { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80", alt: "Scale in acciaio con gradini in cemento levigato", tall: true },
      { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=900&q=80", alt: "Terrazzo con pavimento in gres outdoor grigio scuro", tall: false },
      { src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=900&q=80", alt: "Dettaglio giunti di dilatazione in ottone", tall: false },
      { src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&q=80", alt: "Vista notte del loft con illuminazione integrata", tall: true },
    ],
  },

  // ── 10 ───────────────────────────────────────────────────────
  {
    slug: "studio-medico-savigliano",
    title: "Studio Medico Poliambulatorio",
    location: "Savigliano",
    category: "imprese",
    description:
      "Progettazione e posa di pavimenti e rivestimenti per un poliambulatorio medico. Materiali ad altissima igienicità, gres porcellanato antibatterico nei corridoi, rivestimenti vinilici nelle sale visita, pavimento in resina nell'area sterilizzazione.",
    coverImage:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=900&q=80",
    tall: false,
    images: [
      { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=900&q=80", alt: "Reception con pavimento in gres bianco antibatterico", tall: false },
      { src: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=900&q=80", alt: "Corridoio con pavimento in gres antisdrucciolo", tall: true },
      { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80", alt: "Sala d'attesa con rivestimento acustico a parete", tall: false },
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80", alt: "Studio medico con pavimento in vinilico omogeneo", tall: false },
      { src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=900&q=80", alt: "Bagno disabili con pavimento antiscivolo R11", tall: true },
      { src: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=900&q=80", alt: "Zona sterilizzazione con pavimento in resina continua", tall: false },
      { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80", alt: "Sala di diagnostica con rivestimento radioprotezione", tall: false },
      { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=900&q=80", alt: "Archivio e magazzino con pavimento tecnico anti-ESD", tall: true },
      { src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&q=80", alt: "Vista ingresso completato con insegna integrata", tall: false },
    ],
  },

  // ── 11 ───────────────────────────────────────────────────────
  {
    slug: "penthouse-torino",
    title: "Penthouse Vista Alpi",
    location: "Torino",
    category: "privati",
    description:
      "Un attico con terrazza panoramica a 360° sulle Alpi e sulla skyline di Torino. Pavimenti in marmo Statuario in grande formato 120x240, rivestimenti bagno in onice retroilluminato, terrazza con gres outdoor effetto pietra di Luserna.",
    coverImage:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80",
    tall: false,
    images: [
      { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80", alt: "Terrazza panoramica con vista sulle Alpi", tall: false },
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80", alt: "Soggiorno con marmo Statuario 120x240 cm", tall: true },
      { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80", alt: "Cucina con piano in onice verde", tall: false },
      { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=900&q=80", alt: "Sala da pranzo con pavimento continuo in marmo", tall: false },
      { src: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=900&q=80", alt: "Bagno padronale con onice retroilluminato", tall: true },
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80", alt: "Vasca freestanding con rivestimento a mosaico dorato", tall: false },
      { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80", alt: "Camera da letto con parquet in wengé", tall: false },
      { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80", alt: "Cabina armadio con pavimento in parquet a chevron", tall: true },
      { src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=900&q=80", alt: "Terrazza esterna con gres outdoor pietra di Luserna", tall: false },
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80", alt: "Ingresso con mosaico personalizzato in marmo", tall: false },
      { src: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=900&q=80", alt: "Vista serale del terrazzo illuminato", tall: true },
    ],
  },

  // ── 12 ───────────────────────────────────────────────────────
  {
    slug: "negozio-abbigliamento-cuneo",
    title: "Boutique Moda",
    location: "Cuneo",
    category: "imprese",
    description:
      "Allestimento completo di una boutique di abbigliamento nel centro di Cuneo. Pavimento in resina bianca lucida per massimizzare la luce, rivestimenti a parete in microcemento antracite, camerini con parquet in rovere naturale.",
    coverImage:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=80",
    tall: true,
    images: [
      { src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=80", alt: "Ingresso boutique con pavimento in resina bianca", tall: true },
      { src: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900&q=80", alt: "Zona esposizione con pavimento lucido che riflette la luce", tall: false },
      { src: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=900&q=80", alt: "Rivestimento a parete in microcemento antracite", tall: false },
      { src: "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=900&q=80", alt: "Camerino con parquet in rovere naturale", tall: true },
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80", alt: "Area cassa con bancone e top in marmo verde", tall: false },
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80", alt: "Dettaglio pavimento resina con insert in ottone", tall: false },
      { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80", alt: "Bagno di servizio con piastrelle geometriche bianche", tall: true },
      { src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=900&q=80", alt: "Vetrina esterna con pavimento continuo verso l'interno", tall: false },
      { src: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=900&q=80", alt: "Vista d'insieme del negozio illuminato", tall: false },
      { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=900&q=80", alt: "Magazzino con pavimento tecnico in gres grigio", tall: true },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
