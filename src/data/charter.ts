// Content model for the Almena public site.
//
// The site now has ONE purpose: present the Almena Founding Charter (v1.0) graphically.
// Founding document: "ALMENA: Protocolo de Soberanía, Reputación e Integridad".
// This file is the single source of truth for all charter copy, across the site's
// locales (en default, plus es, pt, fr, de, it). The Spanish is the canonical manifesto
// voice; the other languages are faithful statements of the same principles.
//
// Almena is coinless: reputation is *integrity capital* — earned, non-purchasable and
// non-transferable — never a coin, token or tradeable balance. Anything that reaches into
// external financial/legal systems ("Bridges of Impact") is a future direction, not shipped.

export type Lang = "en" | "es" | "pt" | "fr" | "de" | "it";

// Locales shown in the language selector, in display order. English is the default (served at
// `/`); every other locale is served at `/<lang>/`.
export const LOCALES: readonly Lang[] = ["en", "es", "pt", "fr", "de", "it"];

// Endonyms for the language combo.
export const langNames: Record<Lang, string> = {
  en: "English",
  es: "Español",
  pt: "Português",
  fr: "Français",
  de: "Deutsch",
  it: "Italiano",
};

// Home path for a locale (English at the root, others under `/<lang>/`).
export function langHome(lang: Lang): string {
  return lang === "en" ? "/" : `/${lang}/`;
}

// ── Launch config ────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH for the countdown. Change `date` to move the launch.
export const launch = {
  // Confirmed launch: 11 November 2026.
  date: "2026-11-11T12:00:00Z",
  en: {
    eyebrow: "Countdown to launch",
    title: "Almena launches in",
    done: "Almena is live.",
    units: { days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds" },
  },
  es: {
    eyebrow: "Cuenta atrás para el lanzamiento",
    title: "Almena se lanza en",
    done: "Almena está activa.",
    units: { days: "Días", hours: "Horas", minutes: "Minutos", seconds: "Segundos" },
  },
  pt: {
    eyebrow: "Contagem decrescente para o lançamento",
    title: "Almena é lançada em",
    done: "Almena está ativa.",
    units: { days: "Dias", hours: "Horas", minutes: "Minutos", seconds: "Segundos" },
  },
  fr: {
    eyebrow: "Compte à rebours avant le lancement",
    title: "Almena est lancée dans",
    done: "Almena est en ligne.",
    units: { days: "Jours", hours: "Heures", minutes: "Minutes", seconds: "Secondes" },
  },
  de: {
    eyebrow: "Countdown bis zum Start",
    title: "Almena startet in",
    done: "Almena ist live.",
    units: { days: "Tage", hours: "Stunden", minutes: "Minuten", seconds: "Sekunden" },
  },
  it: {
    eyebrow: "Conto alla rovescia al lancio",
    title: "Almena viene lanciata tra",
    done: "Almena è attiva.",
    units: { days: "Giorni", hours: "Ore", minutes: "Minuti", seconds: "Secondi" },
  },
} as const;

const DATE_LOCALE: Record<Lang, string> = {
  en: "en-US",
  es: "es-ES",
  pt: "pt-PT",
  fr: "fr-FR",
  de: "de-DE",
  it: "it-IT",
};

// Human-readable launch date derived from `launch.date`, per language.
export function launchLabel(lang: Lang): string {
  return new Date(launch.date).toLocaleDateString(DATE_LOCALE[lang], {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export const site = {
  en: {
    nav: {
      contract: "Social contract",
      identity: "Identity",
      reputation: "Reputation",
      progression: "Progression",
      justice: "Justice",
      friction: "Positive friction",
      github: "GitHub",
    },
    footer: {
      tagline:
        "Almena — an infrastructure to restore veracity in the public sphere. Anonymity is the shield of liberty; reputation is the measure of the citizen.",
      doc: "Founding document",
      version: "Charter v1.0 · Sovereignty, Reputation & Integrity",
      resources: "Resources",
      github: "GitHub",
      email: "info@almena.network",
      rights: "A living, auditable, decentralized organism. No master keys.",
    },
  },
  es: {
    nav: {
      contract: "Contrato social",
      identity: "Identidad",
      reputation: "Reputación",
      progression: "Progresión",
      justice: "Justicia",
      friction: "Fricción positiva",
      github: "GitHub",
    },
    footer: {
      tagline:
        "Almena — una infraestructura para restaurar la veracidad en la esfera pública. El anonimato es el escudo de la libertad; la reputación, la medida del ciudadano.",
      doc: "Documento fundacional",
      version: "Charter v1.0 · Soberanía, Reputación e Integridad",
      resources: "Recursos",
      github: "GitHub",
      email: "info@almena.network",
      rights: "Un organismo vivo, auditable y descentralizado. Sin llaves maestras.",
    },
  },
  pt: {
    nav: {
      contract: "Contrato social",
      identity: "Identidade",
      reputation: "Reputação",
      progression: "Progressão",
      justice: "Justiça",
      friction: "Fricção positiva",
      github: "GitHub",
    },
    footer: {
      tagline:
        "Almena — uma infraestrutura para restaurar a veracidade na esfera pública. O anonimato é o escudo da liberdade; a reputação, a medida do cidadão.",
      doc: "Documento fundacional",
      version: "Charter v1.0 · Soberania, Reputação e Integridade",
      resources: "Recursos",
      github: "GitHub",
      email: "info@almena.network",
      rights: "Um organismo vivo, auditável e descentralizado. Sem chaves-mestras.",
    },
  },
  fr: {
    nav: {
      contract: "Contrat social",
      identity: "Identité",
      reputation: "Réputation",
      progression: "Progression",
      justice: "Justice",
      friction: "Friction positive",
      github: "GitHub",
    },
    footer: {
      tagline:
        "Almena — une infrastructure pour restaurer la véracité dans l'espace public. L'anonymat est le bouclier de la liberté ; la réputation, la mesure du citoyen.",
      doc: "Document fondateur",
      version: "Charte v1.0 · Souveraineté, Réputation et Intégrité",
      resources: "Ressources",
      github: "GitHub",
      email: "info@almena.network",
      rights: "Un organisme vivant, auditable et décentralisé. Aucune clé maîtresse.",
    },
  },
  de: {
    nav: {
      contract: "Gesellschaftsvertrag",
      identity: "Identität",
      reputation: "Reputation",
      progression: "Progression",
      justice: "Gerechtigkeit",
      friction: "Positive Reibung",
      github: "GitHub",
    },
    footer: {
      tagline:
        "Almena — eine Infrastruktur zur Wiederherstellung der Wahrhaftigkeit im öffentlichen Raum. Anonymität ist der Schild der Freiheit; Reputation das Maß des Bürgers.",
      doc: "Gründungsdokument",
      version: "Charta v1.0 · Souveränität, Reputation und Integrität",
      resources: "Ressourcen",
      github: "GitHub",
      email: "info@almena.network",
      rights: "Ein lebendiger, prüfbarer, dezentraler Organismus. Keine Generalschlüssel.",
    },
  },
  it: {
    nav: {
      contract: "Contratto sociale",
      identity: "Identità",
      reputation: "Reputazione",
      progression: "Progressione",
      justice: "Giustizia",
      friction: "Attrito positivo",
      github: "GitHub",
    },
    footer: {
      tagline:
        "Almena — un'infrastruttura per ripristinare la veridicità nella sfera pubblica. L'anonimato è lo scudo della libertà; la reputazione, la misura del cittadino.",
      doc: "Documento fondativo",
      version: "Carta v1.0 · Sovranità, Reputazione e Integrità",
      resources: "Risorse",
      github: "GitHub",
      email: "info@almena.network",
      rights: "Un organismo vivo, verificabile e decentralizzato. Nessuna chiave maestra.",
    },
  },
} as const;

// ── The charter, section by section ──────────────────────────────────────────
export const charter = {
  en: {
    meta: {
      title: "Almena — Founding Charter: Sovereignty, Reputation & Integrity",
      description:
        "The founding document of Almena, a decentralized infrastructure to restore veracity in the public sphere. Citizen sovereignty, earned reputation, and accountability without surrendering anonymity.",
    },
    hero: {
      eyebrow: "Founding document · v1.0",
      docTitle: "Protocol of Sovereignty, Reputation & Integrity",
      title: "Think freely. Answer for what you do.",
      mission:
        "Almena is a digital infrastructure designed to restore veracity in the public sphere. It shifts power away from opaque intermediaries and manipulable crowds toward a system of Citizen Sovereignty — where influence is an asset earned exclusively through the integrity of demonstrable acts.",
      motto: "Anonymity is the shield of liberty. Reputation is the measure of the citizen.",
      badges: ["No master keys", "Coinless", "Anonymous, yet accountable"],
    },
    contract: {
      num: "01",
      kicker: "The Almena social contract",
      title: "Two non-negotiable principles, held together",
      lead: "Anonymity is the shield; traceability is the discipline. Weaken either and the contract breaks.",
      pillars: [
        {
          key: "anonymity",
          tag: "Right to anonymity",
          title: "Anonymous before the system",
          text: "The user is anonymous to the system and to third parties, protecting their freedom of thought and their physical safety. Humanity and attributes are proven with zero-knowledge proofs — never by revealing the data behind them.",
        },
        {
          key: "accountability",
          tag: "Accountability for acts",
          title: "No impunity",
          text: "Anonymity grants no impunity. Every act — a publication, a vote, an endorsement — is traceable in an immutable record. The cost of manipulation is the irreversible loss of decision-making power.",
        },
      ],
      joiner: "held together",
    },
    identity: {
      num: "02 · A",
      kicker: "Identity layer",
      title: "Holders, Issuers, Verifiers & circular governance",
      lead: "Authority isn't granted by decree. Issuers and Verifiers earn their weight from the very Holders they serve.",
      holder: {
        title: "Holders",
        text: "Individuals operating through pseudonymous identities, verified as human via zero-knowledge proofs.",
      },
      issuer: {
        title: "Issuers",
        text: "Organizations or protocols that issue credentials about specific attributes — legal adulthood, level of education, and more.",
      },
      verifier: {
        title: "Verifiers",
        text: "Entities that request and check the credentials a Holder presents — confirming they are authentic and unrevoked, without learning more than the Holder chooses to disclose.",
      },
      circular: {
        title: "Circular governance",
        text: "Issuers and Verifiers are not automatic authorities. Their legitimacy and weight depend on the reputation that Holders themselves grant them through their acts of validation.",
      },
      edgeIssues: "issues credentials",
      edgePresents: "presents proof",
      edgeGrants: "grant reputation",
    },
    reputation: {
      num: "02 · B",
      kicker: "The trust & reputation graph",
      title: "Reputation is accumulated capital of integrity",
      lead: "Not a coin. Not popularity. A slow, earned asset that endorsing falsehood can destroy.",
      diagram: {
        subject: "You",
        diverse: "Diverse validators",
        diverseNote: "Endorsements from independent nodes carry real weight",
        collusion: "Collusion bubble",
        collusionNote: "Closed mutual-support groups are mathematically penalized",
        caption:
          "A graph algorithm rewards validation from diverse, independent nodes and detects anomalies — the closed bubbles of mutual support — penalizing them.",
      },
      points: [
        {
          title: "Inertia of trust",
          text: "Influence is not won through ephemeral popularity. It is earned through time, work and merit.",
        },
        {
          title: "Co-responsibility",
          text: "An endorsement is worth only as much as the reputation of the endorser. Back falsehood systematically and your own reputation decays.",
        },
        {
          title: "Collusion resistance",
          text: "Anomaly detection on the graph penalizes closed mutual-support groups and rewards validation from diverse nodes.",
        },
      ],
    },
    progression: {
      num: "02 · C",
      kicker: "Progression — capability milestones",
      title: "Decisions rest with those who prove commitment",
      lead: "Power in the network is milestone-gated and earned over time, never bought or rushed.",
      levels: [
        {
          n: "1",
          title: "Apprentice",
          weight: "No decision weight",
          text: "Read and create access. Reputation is still accumulating; the user's voice carries no decision weight yet.",
        },
        {
          n: "2",
          title: "Participant",
          weight: "Weighted vote",
          text: "After a period of demonstrated integrity, the user's vote begins to carry weight in the network.",
        },
        {
          n: "3",
          title: "Validator / Councilor",
          weight: "Arbitration & governance",
          text: "Access to arbitration and deep governance, reserved for those who sustain a long-term record of high integrity.",
        },
      ],
    },
    justice: {
      num: "03",
      kicker: "Justice & conflict resolution",
      title: "The Distributed Arbitration Protocol",
      lead: "When reality is disputed or defamation alleged, a random panel of the highest-integrity users decides — and the verdict binds.",
      steps: [
        {
          title: "Temporary judges",
          text: "The system randomly selects a panel of high-level (Level 3) users for the case.",
        },
        {
          title: "Binding verdict",
          text: "If malicious intent or defamation is proven, those responsible lose their accumulated reputational capital — dispossessed of their power in the system.",
        },
        {
          title: "Diffusion friction",
          text: "Those who spread malicious information risk penalizing their own reputation — incentivizing citizen verification before amplification.",
        },
      ],
      poolLabel: "Level-3 pool",
      panelLabel: "Random panel",
      verdictLabel: "Binding verdict",
    },
    friction: {
      num: "06",
      kicker: 'Philosophy of "positive friction"',
      title: "We don't censor. Your reputation answers for you.",
      lead: "A gymnasium of critical thought, not a well of noise.",
      text: "Any action not backed by verifiable sources, or coming from low-reputation nodes, meets friction: the user is warned that their reputation is at risk. That friction — not deletion — is what raises the quality of the public square.",
      flow: [
        { label: "Action", text: "A publication, endorsement or share" },
        { label: "Friction", text: "Unverifiable or low-reputation source → warning" },
        { label: "Stake", text: "Amplify anyway and you stake your own reputation" },
      ],
    },
    resilience: {
      num: "05",
      kicker: "Integration & resilience",
      title: "Redemption without amnesia",
      cards: [
        {
          tag: "Personal evolution",
          title: "Rotate the alias, keep the record",
          text: "For safety, a user may abandon an alias — but the history of their acts, the stain or the merit of their conduct, stays recorded in the graph. Redemption is possible without erasing the traceability of bad faith.",
        },
        {
          tag: "Future direction",
          title: "Bridges of impact",
          text: "As Almena reaches critical mass, the protocol will allow proofs of consensus to interact with external systems — financial, legal, administrative — so truthful citizen will can have impact in the physical world.",
          soon: true,
        },
      ],
      rotation: { from: "Alias A", to: "Alias B", persist: "History of acts persists in the graph" },
    },
    declaration: {
      num: "07",
      kicker: "Final declaration",
      title: "A living, auditable, decentralized organism",
      lines: [
        "Neither the system's creator nor any central authority holds master keys over the rules.",
        "Truth is a consensus of reputations. Justice is the direct consequence of acts.",
      ],
      motto: "In Almena, anonymity is the shield of liberty, and reputation is the measure of the citizen.",
      note: "This document is the foundational base of Almena. Every development, smart contract and user interface must align strictly with the principles set out here.",
      cta: "Read the project on GitHub",
    },
  },
  es: {
    meta: {
      title: "Almena — Documento Fundacional: Soberanía, Reputación e Integridad",
      description:
        "El documento fundacional de Almena, una infraestructura descentralizada para restaurar la veracidad en la esfera pública. Soberanía ciudadana, reputación ganada y responsabilidad sin renunciar al anonimato.",
    },
    hero: {
      eyebrow: "Documento fundacional · v1.0",
      docTitle: "Protocolo de Soberanía, Reputación e Integridad",
      title: "Piensa libre. Responde por lo que haces.",
      mission:
        "Almena es una infraestructura digital diseñada para restaurar la veracidad en la esfera pública. Desplaza el poder de los intermediarios opacos y las masas manipulables hacia un sistema de Soberanía Ciudadana — donde la influencia es un activo que se gana exclusivamente a través de la integridad de los actos demostrables.",
      motto: "El anonimato es el escudo de la libertad. La reputación es la medida del ciudadano.",
      badges: ["Sin llaves maestras", "Sin moneda", "Anónimo, pero responsable"],
    },
    contract: {
      num: "01",
      kicker: "El contrato social de Almena",
      title: "Dos principios innegociables, unidos",
      lead: "El anonimato es el escudo; la trazabilidad, la disciplina. Debilita uno y el contrato se rompe.",
      pillars: [
        {
          key: "anonymity",
          tag: "Derecho al anonimato",
          title: "Anónimo ante el sistema",
          text: "El usuario es anónimo ante el sistema y ante terceros, protegiendo su libertad de pensamiento y su seguridad física. La humanidad y los atributos se demuestran con pruebas de conocimiento cero — nunca revelando el dato que hay detrás.",
        },
        {
          key: "accountability",
          tag: "Responsabilidad por los actos",
          title: "Sin impunidad",
          text: "El anonimato no otorga impunidad. Todo acto — una publicación, un voto, un respaldo — es trazable en un registro inmutable. El coste de la manipulación es la pérdida irreversible del poder de decisión.",
        },
      ],
      joiner: "unidos",
    },
    identity: {
      num: "02 · A",
      kicker: "Capa de identidad",
      title: "Titulares, Emisores, Verificadores y gobernanza circular",
      lead: "La autoridad no se otorga por decreto. Emisores y verificadores ganan su peso de los propios titulares a los que sirven.",
      holder: {
        title: "Titulares (Holders)",
        text: "Individuos que operan mediante identidades pseudónimas, verificadas como humanas mediante pruebas de conocimiento cero.",
      },
      issuer: {
        title: "Emisores (Issuers)",
        text: "Organizaciones o protocolos que emiten credenciales sobre atributos específicos — mayoría de edad, nivel de formación y más.",
      },
      verifier: {
        title: "Verificadores (Verifiers)",
        text: "Entidades que solicitan y comprueban las credenciales que presenta un titular — confirmando que son auténticas y no revocadas, sin aprender más de lo que el titular decide revelar.",
      },
      circular: {
        title: "Gobernanza circular",
        text: "Los emisores y verificadores no son autoridades automáticas. Su legitimidad y peso dependen de la reputación que los propios titulares les otorgan mediante sus actos de validación.",
      },
      edgeIssues: "emite credenciales",
      edgePresents: "presenta prueba",
      edgeGrants: "otorgan reputación",
    },
    reputation: {
      num: "02 · B",
      kicker: "El grafo de confianza y reputación",
      title: "La reputación es capital acumulado de integridad",
      lead: "No es una moneda. No es popularidad. Un activo lento y ganado que respaldar la mentira puede destruir.",
      diagram: {
        subject: "Tú",
        diverse: "Validadores diversos",
        diverseNote: "Los avales de nodos independientes tienen peso real",
        collusion: "Burbuja de colusión",
        collusionNote: "Los grupos cerrados de mutuo apoyo se penalizan matemáticamente",
        caption:
          "Un algoritmo de grafos premia la validación de nodos diversos e independientes y detecta anomalías — las burbujas cerradas de mutuo apoyo — penalizándolas.",
      },
      points: [
        {
          title: "La inercia de la confianza",
          text: "La influencia no se adquiere mediante popularidad efímera. Se gana con tiempo, trabajo y méritos.",
        },
        {
          title: "Corresponsabilidad",
          text: "Un aval vale lo que la reputación del avalista. Respalda la mentira de forma sistemática y tu propia reputación decrece.",
        },
        {
          title: "Resistencia a la colusión",
          text: "La detección de anomalías en el grafo penaliza los grupos cerrados de mutuo apoyo y premia la validación de nodos diversos.",
        },
      ],
    },
    progression: {
      num: "02 · C",
      kicker: "Progresión — hitos de capacidad",
      title: "Las decisiones recaen en quien demuestra compromiso",
      lead: "El poder en la red se gana por hitos y con el tiempo, nunca se compra ni se acelera.",
      levels: [
        {
          n: "1",
          title: "Aprendiz",
          weight: "Sin peso decisorio",
          text: "Acceso a lectura y creación. La reputación está en fase de acumulación; la voz del usuario aún no pesa en las decisiones.",
        },
        {
          n: "2",
          title: "Participante",
          weight: "Voto ponderado",
          text: "Tras un periodo de integridad demostrada, el voto del usuario empieza a ponderar en la red.",
        },
        {
          n: "3",
          title: "Validador / Consejero",
          weight: "Arbitraje y gobernanza",
          text: "Acceso a funciones de arbitraje y gobernanza profunda, reservado para quienes mantienen un historial de alta integridad a largo plazo.",
        },
      ],
    },
    justice: {
      num: "03",
      kicker: "Justicia y resolución de conflictos",
      title: "El Protocolo de Arbitraje Distribuido",
      lead: "Ante desacuerdos sobre la realidad o denuncias de difamación, un panel aleatorio de los usuarios de mayor integridad decide — y el veredicto vincula.",
      steps: [
        {
          title: "Jueces temporales",
          text: "El sistema selecciona aleatoriamente un panel de usuarios de alto nivel (Nivel 3) para el caso.",
        },
        {
          title: "Veredicto vinculante",
          text: "Si se demuestra la intención maliciosa o la difamación, los responsables pierden su capital reputacional acumulado — desposeídos de su poder en el sistema.",
        },
        {
          title: "Fricción de difusión",
          text: "Quien difunde información maliciosa asume el riesgo de penalizar su propia reputación — incentivando la verificación ciudadana antes de amplificar.",
        },
      ],
      poolLabel: "Reserva Nivel 3",
      panelLabel: "Panel aleatorio",
      verdictLabel: "Veredicto vinculante",
    },
    friction: {
      num: "06",
      kicker: 'Filosofía de la "fricción positiva"',
      title: "No censuramos. Tu reputación responde por ti.",
      lead: "Un gimnasio de pensamiento crítico, no un pozo de ruido.",
      text: "Toda acción que no esté respaldada por fuentes verificables, o que provenga de nodos con baja reputación, enfrentará una fricción: se advierte al usuario de que su reputación está en riesgo. Esa fricción — no el borrado — es lo que eleva la calidad de la plaza pública.",
      flow: [
        { label: "Acción", text: "Una publicación, un aval o una difusión" },
        { label: "Fricción", text: "Fuente no verificable o de baja reputación → advertencia" },
        { label: "Compromiso", text: "Si amplificas igual, comprometes tu propia reputación" },
      ],
    },
    resilience: {
      num: "05",
      kicker: "Integración y resiliencia",
      title: "Redención sin amnesia",
      cards: [
        {
          tag: "Evolución personal",
          title: "Rota el alias, conserva el historial",
          text: "Por seguridad, el usuario puede abandonar un alias — pero el historial de sus actos, la mancha o el mérito de su conducta, queda registrado en el grafo. La redención es posible sin borrar la trazabilidad de la mala fe.",
        },
        {
          tag: "Dirección futura",
          title: "Puentes de impacto",
          text: "A medida que Almena gane masa crítica, el protocolo permitirá pruebas de consenso que interactúen con sistemas externos — financieros, legales, administrativos — para que la voluntad ciudadana veraz tenga impacto en el mundo físico.",
          soon: true,
        },
      ],
      rotation: { from: "Alias A", to: "Alias B", persist: "El historial de actos persiste en el grafo" },
    },
    declaration: {
      num: "07",
      kicker: "Declaración final",
      title: "Un organismo vivo, auditable y descentralizado",
      lines: [
        "Ni el creador del sistema ni ninguna autoridad central poseen llaves maestras sobre las reglas.",
        "La verdad es un consenso de reputaciones. La justicia es la consecuencia directa de los actos.",
      ],
      motto: "En Almena, el anonimato es el escudo de la libertad, y la reputación es la medida del ciudadano.",
      note: "Este documento constituye la base fundacional de Almena. Cualquier desarrollo, contrato inteligente o interfaz de usuario debe alinearse estrictamente con los principios aquí expuestos.",
      cta: "Ver el proyecto en GitHub",
    },
  },
  pt: {
    meta: {
      title: "Almena — Documento Fundacional: Soberania, Reputação e Integridade",
      description:
        "O documento fundacional de Almena, uma infraestrutura descentralizada para restaurar a veracidade na esfera pública. Soberania cidadã, reputação conquistada e responsabilidade sem renunciar ao anonimato.",
    },
    hero: {
      eyebrow: "Documento fundacional · v1.0",
      docTitle: "Protocolo de Soberania, Reputação e Integridade",
      title: "Pensa livre. Responde pelo que fazes.",
      mission:
        "Almena é uma infraestrutura digital concebida para restaurar a veracidade na esfera pública. Desloca o poder dos intermediários opacos e das massas manipuláveis para um sistema de Soberania Cidadã — onde a influência é um ativo que se conquista exclusivamente através da integridade dos atos demonstráveis.",
      motto: "O anonimato é o escudo da liberdade. A reputação é a medida do cidadão.",
      badges: ["Sem chaves-mestras", "Sem moeda", "Anónimo, mas responsável"],
    },
    contract: {
      num: "01",
      kicker: "O contrato social de Almena",
      title: "Dois princípios inegociáveis, unidos",
      lead: "O anonimato é o escudo; a rastreabilidade, a disciplina. Enfraqueça um e o contrato quebra-se.",
      pillars: [
        {
          key: "anonymity",
          tag: "Direito ao anonimato",
          title: "Anónimo perante o sistema",
          text: "O utilizador é anónimo perante o sistema e perante terceiros, protegendo a sua liberdade de pensamento e a sua segurança física. A humanidade e os atributos demonstram-se com provas de conhecimento zero — nunca revelando o dado que está por trás.",
        },
        {
          key: "accountability",
          tag: "Responsabilidade pelos atos",
          title: "Sem impunidade",
          text: "O anonimato não concede impunidade. Todo ato — uma publicação, um voto, um aval — é rastreável num registo imutável. O custo da manipulação é a perda irreversível do poder de decisão.",
        },
      ],
      joiner: "unidos",
    },
    identity: {
      num: "02 · A",
      kicker: "Camada de identidade",
      title: "Titulares, Emissores, Verificadores e governação circular",
      lead: "A autoridade não se concede por decreto. Emissores e verificadores conquistam o seu peso junto dos próprios titulares que servem.",
      holder: {
        title: "Titulares (Holders)",
        text: "Indivíduos que operam através de identidades pseudónimas, verificadas como humanas mediante provas de conhecimento zero.",
      },
      issuer: {
        title: "Emissores (Issuers)",
        text: "Organizações ou protocolos que emitem credenciais sobre atributos específicos — maioridade, nível de formação e mais.",
      },
      verifier: {
        title: "Verificadores (Verifiers)",
        text: "Entidades que solicitam e verificam as credenciais que um titular apresenta — confirmando que são autênticas e não revogadas, sem aprender mais do que o titular decide revelar.",
      },
      circular: {
        title: "Governação circular",
        text: "Emissores e verificadores não são autoridades automáticas. A sua legitimidade e peso dependem da reputação que os próprios titulares lhes concedem através dos seus atos de validação.",
      },
      edgeIssues: "emite credenciais",
      edgePresents: "apresenta prova",
      edgeGrants: "concedem reputação",
    },
    reputation: {
      num: "02 · B",
      kicker: "O grafo de confiança e reputação",
      title: "A reputação é capital acumulado de integridade",
      lead: "Não é uma moeda. Não é popularidade. Um ativo lento e conquistado que avalizar a mentira pode destruir.",
      diagram: {
        subject: "Tu",
        diverse: "Validadores diversos",
        diverseNote: "Os avais de nós independentes têm peso real",
        collusion: "Bolha de conluio",
        collusionNote: "Os grupos fechados de apoio mútuo são penalizados matematicamente",
        caption:
          "Um algoritmo de grafos premeia a validação de nós diversos e independentes e deteta anomalias — as bolhas fechadas de apoio mútuo — penalizando-as.",
      },
      points: [
        {
          title: "A inércia da confiança",
          text: "A influência não se adquire mediante popularidade efémera. Conquista-se com tempo, trabalho e mérito.",
        },
        {
          title: "Corresponsabilidade",
          text: "Um aval vale o que vale a reputação de quem avaliza. Avaliza a mentira de forma sistemática e a tua própria reputação diminui.",
        },
        {
          title: "Resistência ao conluio",
          text: "A deteção de anomalias no grafo penaliza os grupos fechados de apoio mútuo e premeia a validação de nós diversos.",
        },
      ],
    },
    progression: {
      num: "02 · C",
      kicker: "Progressão — marcos de capacidade",
      title: "As decisões cabem a quem demonstra compromisso",
      lead: "O poder na rede conquista-se por marcos e com o tempo, nunca se compra nem se acelera.",
      levels: [
        {
          n: "1",
          title: "Aprendiz",
          weight: "Sem peso decisório",
          text: "Acesso a leitura e criação. A reputação está em fase de acumulação; a voz do utilizador ainda não pesa nas decisões.",
        },
        {
          n: "2",
          title: "Participante",
          weight: "Voto ponderado",
          text: "Após um período de integridade demonstrada, o voto do utilizador começa a ponderar na rede.",
        },
        {
          n: "3",
          title: "Validador / Conselheiro",
          weight: "Arbitragem e governação",
          text: "Acesso a funções de arbitragem e governação profunda, reservado a quem mantém um historial de alta integridade a longo prazo.",
        },
      ],
    },
    justice: {
      num: "03",
      kicker: "Justiça e resolução de conflitos",
      title: "O Protocolo de Arbitragem Distribuída",
      lead: "Perante desacordos sobre a realidade ou denúncias de difamação, um painel aleatório dos utilizadores de maior integridade decide — e o veredicto vincula.",
      steps: [
        {
          title: "Juízes temporários",
          text: "O sistema seleciona aleatoriamente um painel de utilizadores de alto nível (Nível 3) para o caso.",
        },
        {
          title: "Veredicto vinculativo",
          text: "Se se demonstrar a intenção maliciosa ou a difamação, os responsáveis perdem o seu capital reputacional acumulado — despojados do seu poder no sistema.",
        },
        {
          title: "Fricção de difusão",
          text: "Quem difunde informação maliciosa assume o risco de penalizar a sua própria reputação — incentivando a verificação cidadã antes de amplificar.",
        },
      ],
      poolLabel: "Reserva Nível 3",
      panelLabel: "Painel aleatório",
      verdictLabel: "Veredicto vinculativo",
    },
    friction: {
      num: "06",
      kicker: 'Filosofia da "fricção positiva"',
      title: "Não censuramos. A tua reputação responde por ti.",
      lead: "Um ginásio de pensamento crítico, não um poço de ruído.",
      text: "Toda ação que não esteja respaldada por fontes verificáveis, ou que provenha de nós com baixa reputação, enfrentará uma fricção: avisa-se o utilizador de que a sua reputação está em risco. Essa fricção — não a eliminação — é o que eleva a qualidade da praça pública.",
      flow: [
        { label: "Ação", text: "Uma publicação, um aval ou uma partilha" },
        { label: "Fricção", text: "Fonte não verificável ou de baixa reputação → aviso" },
        { label: "Compromisso", text: "Se amplificares mesmo assim, comprometes a tua própria reputação" },
      ],
    },
    resilience: {
      num: "05",
      kicker: "Integração e resiliência",
      title: "Redenção sem amnésia",
      cards: [
        {
          tag: "Evolução pessoal",
          title: "Roda o alias, conserva o historial",
          text: "Por segurança, o utilizador pode abandonar um alias — mas o historial dos seus atos, a mancha ou o mérito da sua conduta, fica registado no grafo. A redenção é possível sem apagar a rastreabilidade da má-fé.",
        },
        {
          tag: "Direção futura",
          title: "Pontes de impacto",
          text: "À medida que Almena ganhe massa crítica, o protocolo permitirá provas de consenso que interajam com sistemas externos — financeiros, legais, administrativos — para que a vontade cidadã verídica tenha impacto no mundo físico.",
          soon: true,
        },
      ],
      rotation: { from: "Alias A", to: "Alias B", persist: "O historial de atos persiste no grafo" },
    },
    declaration: {
      num: "07",
      kicker: "Declaração final",
      title: "Um organismo vivo, auditável e descentralizado",
      lines: [
        "Nem o criador do sistema nem qualquer autoridade central possuem chaves-mestras sobre as regras.",
        "A verdade é um consenso de reputações. A justiça é a consequência direta dos atos.",
      ],
      motto: "Em Almena, o anonimato é o escudo da liberdade, e a reputação é a medida do cidadão.",
      note: "Este documento constitui a base fundacional de Almena. Qualquer desenvolvimento, contrato inteligente ou interface de utilizador deve alinhar-se estritamente com os princípios aqui expostos.",
      cta: "Ver o projeto no GitHub",
    },
  },
  fr: {
    meta: {
      title: "Almena — Charte fondatrice : Souveraineté, Réputation et Intégrité",
      description:
        "Le document fondateur d'Almena, une infrastructure décentralisée pour restaurer la véracité dans l'espace public. Souveraineté citoyenne, réputation méritée et responsabilité sans renoncer à l'anonymat.",
    },
    hero: {
      eyebrow: "Document fondateur · v1.0",
      docTitle: "Protocole de Souveraineté, Réputation et Intégrité",
      title: "Pensez librement. Répondez de vos actes.",
      mission:
        "Almena est une infrastructure numérique conçue pour restaurer la véracité dans l'espace public. Elle déplace le pouvoir des intermédiaires opaques et des foules manipulables vers un système de Souveraineté Citoyenne — où l'influence est un actif qui se gagne exclusivement par l'intégrité des actes démontrables.",
      motto: "L'anonymat est le bouclier de la liberté. La réputation est la mesure du citoyen.",
      badges: ["Aucune clé maîtresse", "Sans monnaie", "Anonyme, mais responsable"],
    },
    contract: {
      num: "01",
      kicker: "Le contrat social d'Almena",
      title: "Deux principes non négociables, unis",
      lead: "L'anonymat est le bouclier ; la traçabilité, la discipline. Affaiblissez l'un et le contrat se brise.",
      pillars: [
        {
          key: "anonymity",
          tag: "Droit à l'anonymat",
          title: "Anonyme devant le système",
          text: "L'utilisateur est anonyme devant le système et devant les tiers, protégeant sa liberté de pensée et sa sécurité physique. L'humanité et les attributs se prouvent par des preuves à divulgation nulle de connaissance — jamais en révélant la donnée qui se cache derrière.",
        },
        {
          key: "accountability",
          tag: "Responsabilité des actes",
          title: "Aucune impunité",
          text: "L'anonymat n'accorde aucune impunité. Tout acte — une publication, un vote, un soutien — est traçable dans un registre immuable. Le coût de la manipulation est la perte irréversible du pouvoir de décision.",
        },
      ],
      joiner: "unis",
    },
    identity: {
      num: "02 · A",
      kicker: "Couche d'identité",
      title: "Titulaires, Émetteurs, Vérificateurs et gouvernance circulaire",
      lead: "L'autorité ne s'accorde pas par décret. Émetteurs et vérificateurs gagnent leur poids auprès des titulaires mêmes qu'ils servent.",
      holder: {
        title: "Titulaires (Holders)",
        text: "Des individus qui opèrent via des identités pseudonymes, vérifiées comme humaines par des preuves à divulgation nulle de connaissance.",
      },
      issuer: {
        title: "Émetteurs (Issuers)",
        text: "Des organisations ou protocoles qui émettent des attestations sur des attributs spécifiques — majorité légale, niveau de formation, et plus encore.",
      },
      verifier: {
        title: "Vérificateurs (Verifiers)",
        text: "Des entités qui demandent et contrôlent les attestations qu'un titulaire présente — en confirmant qu'elles sont authentiques et non révoquées, sans en apprendre plus que ce que le titulaire choisit de divulguer.",
      },
      circular: {
        title: "Gouvernance circulaire",
        text: "Les émetteurs et les vérificateurs ne sont pas des autorités automatiques. Leur légitimité et leur poids dépendent de la réputation que les titulaires eux-mêmes leur accordent par leurs actes de validation.",
      },
      edgeIssues: "émet des attestations",
      edgePresents: "présente une preuve",
      edgeGrants: "accordent la réputation",
    },
    reputation: {
      num: "02 · B",
      kicker: "Le graphe de confiance et de réputation",
      title: "La réputation est un capital accumulé d'intégrité",
      lead: "Pas une monnaie. Pas la popularité. Un actif lent et mérité que soutenir le mensonge peut détruire.",
      diagram: {
        subject: "Vous",
        diverse: "Validateurs divers",
        diverseNote: "Les soutiens de nœuds indépendants ont un poids réel",
        collusion: "Bulle de collusion",
        collusionNote: "Les groupes fermés de soutien mutuel sont pénalisés mathématiquement",
        caption:
          "Un algorithme de graphes récompense la validation par des nœuds divers et indépendants et détecte les anomalies — les bulles fermées de soutien mutuel — en les pénalisant.",
      },
      points: [
        {
          title: "L'inertie de la confiance",
          text: "L'influence ne s'acquiert pas par une popularité éphémère. Elle se gagne par le temps, le travail et le mérite.",
        },
        {
          title: "Coresponsabilité",
          text: "Un soutien ne vaut que la réputation de celui qui le donne. Soutenez le mensonge de façon systématique et votre propre réputation décroît.",
        },
        {
          title: "Résistance à la collusion",
          text: "La détection d'anomalies dans le graphe pénalise les groupes fermés de soutien mutuel et récompense la validation par des nœuds divers.",
        },
      ],
    },
    progression: {
      num: "02 · C",
      kicker: "Progression — jalons de capacité",
      title: "Les décisions reviennent à ceux qui prouvent leur engagement",
      lead: "Le pouvoir dans le réseau se gagne par jalons et avec le temps, jamais ne s'achète ni ne se précipite.",
      levels: [
        {
          n: "1",
          title: "Apprenti",
          weight: "Aucun poids décisionnel",
          text: "Accès en lecture et en création. La réputation est encore en phase d'accumulation ; la voix de l'utilisateur ne pèse pas encore dans les décisions.",
        },
        {
          n: "2",
          title: "Participant",
          weight: "Vote pondéré",
          text: "Après une période d'intégrité démontrée, le vote de l'utilisateur commence à peser dans le réseau.",
        },
        {
          n: "3",
          title: "Validateur / Conseiller",
          weight: "Arbitrage et gouvernance",
          text: "Accès aux fonctions d'arbitrage et de gouvernance profonde, réservé à ceux qui maintiennent un historique de haute intégrité sur le long terme.",
        },
      ],
    },
    justice: {
      num: "03",
      kicker: "Justice et résolution des conflits",
      title: "Le Protocole d'Arbitrage Distribué",
      lead: "En cas de désaccord sur la réalité ou d'accusation de diffamation, un panel aléatoire des utilisateurs de plus haute intégrité décide — et le verdict est contraignant.",
      steps: [
        {
          title: "Juges temporaires",
          text: "Le système sélectionne aléatoirement un panel d'utilisateurs de haut niveau (Niveau 3) pour l'affaire.",
        },
        {
          title: "Verdict contraignant",
          text: "Si l'intention malveillante ou la diffamation est prouvée, les responsables perdent leur capital de réputation accumulé — dépossédés de leur pouvoir dans le système.",
        },
        {
          title: "Friction de diffusion",
          text: "Ceux qui diffusent une information malveillante prennent le risque de pénaliser leur propre réputation — incitant à la vérification citoyenne avant l'amplification.",
        },
      ],
      poolLabel: "Réserve Niveau 3",
      panelLabel: "Panel aléatoire",
      verdictLabel: "Verdict contraignant",
    },
    friction: {
      num: "06",
      kicker: 'Philosophie de la « friction positive »',
      title: "Nous ne censurons pas. Votre réputation répond pour vous.",
      lead: "Un gymnase de la pensée critique, non un puits de bruit.",
      text: "Toute action non étayée par des sources vérifiables, ou provenant de nœuds à faible réputation, rencontrera une friction : l'utilisateur est averti que sa réputation est en jeu. Cette friction — et non la suppression — est ce qui élève la qualité de la place publique.",
      flow: [
        { label: "Action", text: "Une publication, un soutien ou un partage" },
        { label: "Friction", text: "Source non vérifiable ou à faible réputation → avertissement" },
        { label: "Engagement", text: "Amplifiez malgré tout et vous engagez votre propre réputation" },
      ],
    },
    resilience: {
      num: "05",
      kicker: "Intégration et résilience",
      title: "La rédemption sans amnésie",
      cards: [
        {
          tag: "Évolution personnelle",
          title: "Changez d'alias, gardez l'historique",
          text: "Par sécurité, un utilisateur peut abandonner un alias — mais l'historique de ses actes, la tache ou le mérite de sa conduite, reste inscrit dans le graphe. La rédemption est possible sans effacer la traçabilité de la mauvaise foi.",
        },
        {
          tag: "Direction future",
          title: "Ponts d'impact",
          text: "À mesure qu'Almena atteindra une masse critique, le protocole permettra des preuves de consensus interagissant avec des systèmes externes — financiers, juridiques, administratifs — pour que la volonté citoyenne véridique ait un impact dans le monde physique.",
          soon: true,
        },
      ],
      rotation: { from: "Alias A", to: "Alias B", persist: "L'historique des actes persiste dans le graphe" },
    },
    declaration: {
      num: "07",
      kicker: "Déclaration finale",
      title: "Un organisme vivant, auditable et décentralisé",
      lines: [
        "Ni le créateur du système ni aucune autorité centrale ne détiennent de clés maîtresses sur les règles.",
        "La vérité est un consensus de réputations. La justice est la conséquence directe des actes.",
      ],
      motto: "Dans Almena, l'anonymat est le bouclier de la liberté, et la réputation la mesure du citoyen.",
      note: "Ce document constitue la base fondatrice d'Almena. Tout développement, contrat intelligent ou interface utilisateur doit s'aligner strictement sur les principes exposés ici.",
      cta: "Voir le projet sur GitHub",
    },
  },
  de: {
    meta: {
      title: "Almena — Gründungscharta: Souveränität, Reputation und Integrität",
      description:
        "Das Gründungsdokument von Almena, einer dezentralen Infrastruktur zur Wiederherstellung der Wahrhaftigkeit im öffentlichen Raum. Bürgersouveränität, verdiente Reputation und Verantwortung, ohne die Anonymität aufzugeben.",
    },
    hero: {
      eyebrow: "Gründungsdokument · v1.0",
      docTitle: "Protokoll für Souveränität, Reputation und Integrität",
      title: "Denke frei. Steh für dein Handeln ein.",
      mission:
        "Almena ist eine digitale Infrastruktur, die entwickelt wurde, um die Wahrhaftigkeit im öffentlichen Raum wiederherzustellen. Sie verlagert die Macht weg von undurchsichtigen Vermittlern und manipulierbaren Massen hin zu einem System der Bürgersouveränität — in dem Einfluss ein Gut ist, das ausschließlich durch die Integrität nachweisbarer Handlungen verdient wird.",
      motto: "Anonymität ist der Schild der Freiheit. Reputation ist das Maß des Bürgers.",
      badges: ["Keine Generalschlüssel", "Ohne Münze", "Anonym, aber verantwortlich"],
    },
    contract: {
      num: "01",
      kicker: "Der Gesellschaftsvertrag von Almena",
      title: "Zwei unverhandelbare Prinzipien, vereint",
      lead: "Anonymität ist der Schild; Nachvollziehbarkeit die Disziplin. Schwäche eines von beiden und der Vertrag zerbricht.",
      pillars: [
        {
          key: "anonymity",
          tag: "Recht auf Anonymität",
          title: "Anonym gegenüber dem System",
          text: "Die Nutzerin bzw. der Nutzer ist gegenüber dem System und gegenüber Dritten anonym, was die Gedankenfreiheit und die körperliche Sicherheit schützt. Menschlichkeit und Attribute werden mit Zero-Knowledge-Beweisen nachgewiesen — niemals durch Offenlegung der dahinterliegenden Daten.",
        },
        {
          key: "accountability",
          tag: "Verantwortung für Handlungen",
          title: "Keine Straflosigkeit",
          text: "Anonymität gewährt keine Straflosigkeit. Jede Handlung — eine Veröffentlichung, eine Stimme, eine Bestätigung — ist in einem unveränderlichen Register nachvollziehbar. Der Preis der Manipulation ist der unwiderrufliche Verlust der Entscheidungsmacht.",
        },
      ],
      joiner: "vereint",
    },
    identity: {
      num: "02 · A",
      kicker: "Identitätsschicht",
      title: "Inhaber, Aussteller, Prüfer und zirkuläre Governance",
      lead: "Autorität wird nicht per Dekret gewährt. Aussteller und Prüfer verdienen ihr Gewicht bei genau den Inhabern, denen sie dienen.",
      holder: {
        title: "Inhaber (Holders)",
        text: "Personen, die über pseudonyme Identitäten agieren, die per Zero-Knowledge-Beweis als menschlich verifiziert sind.",
      },
      issuer: {
        title: "Aussteller (Issuers)",
        text: "Organisationen oder Protokolle, die Nachweise über bestimmte Attribute ausstellen — Volljährigkeit, Bildungsniveau und mehr.",
      },
      verifier: {
        title: "Prüfer (Verifiers)",
        text: "Instanzen, die die von einem Inhaber vorgelegten Nachweise anfordern und prüfen — und bestätigen, dass sie echt und nicht widerrufen sind, ohne mehr zu erfahren, als der Inhaber offenlegen möchte.",
      },
      circular: {
        title: "Zirkuläre Governance",
        text: "Aussteller und Prüfer sind keine automatischen Autoritäten. Ihre Legitimität und ihr Gewicht hängen von der Reputation ab, die die Inhaber ihnen durch ihre Validierungshandlungen selbst gewähren.",
      },
      edgeIssues: "stellt Nachweise aus",
      edgePresents: "legt Beweis vor",
      edgeGrants: "gewähren Reputation",
    },
    reputation: {
      num: "02 · B",
      kicker: "Der Vertrauens- und Reputationsgraph",
      title: "Reputation ist angesammeltes Kapital an Integrität",
      lead: "Keine Münze. Keine Popularität. Ein langsam verdientes Gut, das die Bestätigung von Unwahrheit zerstören kann.",
      diagram: {
        subject: "Du",
        diverse: "Vielfältige Validierer",
        diverseNote: "Bestätigungen unabhängiger Knoten haben echtes Gewicht",
        collusion: "Kollusionsblase",
        collusionNote: "Geschlossene Gruppen gegenseitiger Unterstützung werden mathematisch bestraft",
        caption:
          "Ein Graph-Algorithmus belohnt die Validierung durch vielfältige, unabhängige Knoten und erkennt Anomalien — die geschlossenen Blasen gegenseitiger Unterstützung — und bestraft sie.",
      },
      points: [
        {
          title: "Die Trägheit des Vertrauens",
          text: "Einfluss wird nicht durch flüchtige Popularität erlangt. Er wird durch Zeit, Arbeit und Verdienst gewonnen.",
        },
        {
          title: "Mitverantwortung",
          text: "Eine Bestätigung ist nur so viel wert wie die Reputation dessen, der sie gibt. Bestätige systematisch Unwahrheit und deine eigene Reputation sinkt.",
        },
        {
          title: "Kollusionsresistenz",
          text: "Die Anomalieerkennung im Graphen bestraft geschlossene Gruppen gegenseitiger Unterstützung und belohnt die Validierung durch vielfältige Knoten.",
        },
      ],
    },
    progression: {
      num: "02 · C",
      kicker: "Progression — Fähigkeitsstufen",
      title: "Entscheidungen liegen bei denen, die Engagement beweisen",
      lead: "Macht im Netzwerk wird über Stufen und mit der Zeit verdient, niemals gekauft oder übereilt.",
      levels: [
        {
          n: "1",
          title: "Lehrling",
          weight: "Kein Entscheidungsgewicht",
          text: "Lese- und Erstellungszugriff. Die Reputation befindet sich noch in der Aufbauphase; die Stimme der Nutzerin bzw. des Nutzers hat noch kein Entscheidungsgewicht.",
        },
        {
          n: "2",
          title: "Teilnehmer",
          weight: "Gewichtete Stimme",
          text: "Nach einer Phase nachgewiesener Integrität beginnt die Stimme im Netzwerk zu zählen.",
        },
        {
          n: "3",
          title: "Validierer / Ratsmitglied",
          weight: "Schlichtung und Governance",
          text: "Zugang zu Schlichtung und tiefer Governance, reserviert für jene, die langfristig eine Bilanz hoher Integrität aufrechterhalten.",
        },
      ],
    },
    justice: {
      num: "03",
      kicker: "Gerechtigkeit und Konfliktlösung",
      title: "Das Protokoll der verteilten Schlichtung",
      lead: "Wird die Realität bestritten oder Verleumdung behauptet, entscheidet ein zufälliges Gremium der Nutzer mit der höchsten Integrität — und das Urteil ist bindend.",
      steps: [
        {
          title: "Zeitweilige Richter",
          text: "Das System wählt für den Fall zufällig ein Gremium hochrangiger Nutzer (Stufe 3) aus.",
        },
        {
          title: "Bindendes Urteil",
          text: "Wird böswillige Absicht oder Verleumdung nachgewiesen, verlieren die Verantwortlichen ihr angesammeltes Reputationskapital — ihrer Macht im System enteignet.",
        },
        {
          title: "Verbreitungsreibung",
          text: "Wer böswillige Informationen verbreitet, riskiert, die eigene Reputation zu schädigen — was zur bürgerlichen Überprüfung vor der Verbreitung anspornt.",
        },
      ],
      poolLabel: "Stufe-3-Pool",
      panelLabel: "Zufälliges Gremium",
      verdictLabel: "Bindendes Urteil",
    },
    friction: {
      num: "06",
      kicker: "Philosophie der „positiven Reibung“",
      title: "Wir zensieren nicht. Deine Reputation steht für dich ein.",
      lead: "Ein Fitnessstudio des kritischen Denkens, kein Brunnen des Lärms.",
      text: "Jede Handlung, die nicht durch überprüfbare Quellen gestützt ist oder von Knoten mit geringer Reputation stammt, trifft auf Reibung: Die Nutzerin bzw. der Nutzer wird gewarnt, dass die eigene Reputation auf dem Spiel steht. Diese Reibung — nicht das Löschen — hebt die Qualität des öffentlichen Raums.",
      flow: [
        { label: "Handlung", text: "Eine Veröffentlichung, eine Bestätigung oder ein Teilen" },
        { label: "Reibung", text: "Nicht überprüfbare oder reputationsschwache Quelle → Warnung" },
        { label: "Einsatz", text: "Verbreitest du trotzdem, setzt du deine eigene Reputation aufs Spiel" },
      ],
    },
    resilience: {
      num: "05",
      kicker: "Integration und Resilienz",
      title: "Erlösung ohne Amnesie",
      cards: [
        {
          tag: "Persönliche Entwicklung",
          title: "Wechsle das Alias, behalte die Historie",
          text: "Aus Sicherheitsgründen kann ein Nutzer ein Alias aufgeben — doch die Historie seiner Handlungen, der Makel oder das Verdienst seines Verhaltens, bleibt im Graphen verzeichnet. Erlösung ist möglich, ohne die Nachvollziehbarkeit der Bösgläubigkeit zu löschen.",
        },
        {
          tag: "Zukünftige Richtung",
          title: "Brücken der Wirkung",
          text: "Sobald Almena eine kritische Masse erreicht, wird das Protokoll Konsensbeweise erlauben, die mit externen Systemen — finanziell, rechtlich, administrativ — interagieren, damit der wahrhaftige Bürgerwille Wirkung in der physischen Welt entfaltet.",
          soon: true,
        },
      ],
      rotation: { from: "Alias A", to: "Alias B", persist: "Die Handlungshistorie bleibt im Graphen bestehen" },
    },
    declaration: {
      num: "07",
      kicker: "Schlusserklärung",
      title: "Ein lebendiger, prüfbarer, dezentraler Organismus",
      lines: [
        "Weder der Schöpfer des Systems noch irgendeine zentrale Autorität besitzt Generalschlüssel über die Regeln.",
        "Wahrheit ist ein Konsens von Reputationen. Gerechtigkeit ist die direkte Folge der Handlungen.",
      ],
      motto: "In Almena ist Anonymität der Schild der Freiheit und Reputation das Maß des Bürgers.",
      note: "Dieses Dokument bildet die Gründungsbasis von Almena. Jede Entwicklung, jeder Smart Contract und jede Benutzeroberfläche muss sich streng an den hier dargelegten Prinzipien ausrichten.",
      cta: "Das Projekt auf GitHub ansehen",
    },
  },
  it: {
    meta: {
      title: "Almena — Carta Fondativa: Sovranità, Reputazione e Integrità",
      description:
        "Il documento fondativo di Almena, un'infrastruttura decentralizzata per ripristinare la veridicità nella sfera pubblica. Sovranità dei cittadini, reputazione guadagnata e responsabilità senza rinunciare all'anonimato.",
    },
    hero: {
      eyebrow: "Documento fondativo · v1.0",
      docTitle: "Protocollo di Sovranità, Reputazione e Integrità",
      title: "Pensa libero. Rispondi di ciò che fai.",
      mission:
        "Almena è un'infrastruttura digitale progettata per ripristinare la veridicità nella sfera pubblica. Sposta il potere dagli intermediari opachi e dalle masse manipolabili verso un sistema di Sovranità dei Cittadini — dove l'influenza è un bene che si guadagna esclusivamente attraverso l'integrità degli atti dimostrabili.",
      motto: "L'anonimato è lo scudo della libertà. La reputazione è la misura del cittadino.",
      badges: ["Nessuna chiave maestra", "Senza moneta", "Anonimo, ma responsabile"],
    },
    contract: {
      num: "01",
      kicker: "Il contratto sociale di Almena",
      title: "Due principi non negoziabili, uniti",
      lead: "L'anonimato è lo scudo; la tracciabilità, la disciplina. Indebolisci l'uno e il contratto si spezza.",
      pillars: [
        {
          key: "anonymity",
          tag: "Diritto all'anonimato",
          title: "Anonimo di fronte al sistema",
          text: "L'utente è anonimo di fronte al sistema e a terzi, proteggendo la propria libertà di pensiero e la propria sicurezza fisica. L'umanità e gli attributi si dimostrano con prove a conoscenza zero — mai rivelando il dato che vi sta dietro.",
        },
        {
          key: "accountability",
          tag: "Responsabilità per gli atti",
          title: "Nessuna impunità",
          text: "L'anonimato non concede impunità. Ogni atto — una pubblicazione, un voto, un avallo — è tracciabile in un registro immutabile. Il costo della manipolazione è la perdita irreversibile del potere decisionale.",
        },
      ],
      joiner: "uniti",
    },
    identity: {
      num: "02 · A",
      kicker: "Livello di identità",
      title: "Titolari, Emittenti, Verificatori e governance circolare",
      lead: "L'autorità non si concede per decreto. Emittenti e verificatori guadagnano il proprio peso presso gli stessi titolari che servono.",
      holder: {
        title: "Titolari (Holders)",
        text: "Individui che operano tramite identità pseudonime, verificate come umane mediante prove a conoscenza zero.",
      },
      issuer: {
        title: "Emittenti (Issuers)",
        text: "Organizzazioni o protocolli che emettono credenziali su attributi specifici — maggiore età, livello di istruzione e altro.",
      },
      verifier: {
        title: "Verificatori (Verifiers)",
        text: "Entità che richiedono e controllano le credenziali che un titolare presenta — confermando che sono autentiche e non revocate, senza apprendere più di quanto il titolare sceglie di rivelare.",
      },
      circular: {
        title: "Governance circolare",
        text: "Emittenti e verificatori non sono autorità automatiche. La loro legittimità e il loro peso dipendono dalla reputazione che gli stessi titolari concedono loro attraverso i propri atti di validazione.",
      },
      edgeIssues: "emette credenziali",
      edgePresents: "presenta prova",
      edgeGrants: "concedono reputazione",
    },
    reputation: {
      num: "02 · B",
      kicker: "Il grafo di fiducia e reputazione",
      title: "La reputazione è capitale accumulato di integrità",
      lead: "Non è una moneta. Non è popolarità. Un bene lento e guadagnato che avallare la menzogna può distruggere.",
      diagram: {
        subject: "Tu",
        diverse: "Validatori diversi",
        diverseNote: "Gli avalli di nodi indipendenti hanno peso reale",
        collusion: "Bolla di collusione",
        collusionNote: "I gruppi chiusi di mutuo sostegno vengono penalizzati matematicamente",
        caption:
          "Un algoritmo di grafi premia la validazione di nodi diversi e indipendenti e rileva le anomalie — le bolle chiuse di mutuo sostegno — penalizzandole.",
      },
      points: [
        {
          title: "L'inerzia della fiducia",
          text: "L'influenza non si acquisisce mediante popolarità effimera. Si guadagna con tempo, lavoro e merito.",
        },
        {
          title: "Corresponsabilità",
          text: "Un avallo vale quanto la reputazione di chi lo dà. Avalla la menzogna in modo sistematico e la tua stessa reputazione diminuisce.",
        },
        {
          title: "Resistenza alla collusione",
          text: "Il rilevamento delle anomalie nel grafo penalizza i gruppi chiusi di mutuo sostegno e premia la validazione di nodi diversi.",
        },
      ],
    },
    progression: {
      num: "02 · C",
      kicker: "Progressione — traguardi di capacità",
      title: "Le decisioni spettano a chi dimostra impegno",
      lead: "Il potere nella rete si guadagna per traguardi e con il tempo, non si compra né si affretta.",
      levels: [
        {
          n: "1",
          title: "Apprendista",
          weight: "Nessun peso decisionale",
          text: "Accesso in lettura e creazione. La reputazione è ancora in fase di accumulo; la voce dell'utente non pesa ancora nelle decisioni.",
        },
        {
          n: "2",
          title: "Partecipante",
          weight: "Voto ponderato",
          text: "Dopo un periodo di integrità dimostrata, il voto dell'utente inizia a pesare nella rete.",
        },
        {
          n: "3",
          title: "Validatore / Consigliere",
          weight: "Arbitrato e governance",
          text: "Accesso alle funzioni di arbitrato e governance profonda, riservato a chi mantiene uno storico di alta integrità nel lungo periodo.",
        },
      ],
    },
    justice: {
      num: "03",
      kicker: "Giustizia e risoluzione dei conflitti",
      title: "Il Protocollo di Arbitrato Distribuito",
      lead: "Di fronte a disaccordi sulla realtà o ad accuse di diffamazione, un panel casuale degli utenti di maggiore integrità decide — e il verdetto è vincolante.",
      steps: [
        {
          title: "Giudici temporanei",
          text: "Il sistema seleziona casualmente un panel di utenti di alto livello (Livello 3) per il caso.",
        },
        {
          title: "Verdetto vincolante",
          text: "Se si dimostra l'intento malevolo o la diffamazione, i responsabili perdono il proprio capitale reputazionale accumulato — espropriati del loro potere nel sistema.",
        },
        {
          title: "Attrito di diffusione",
          text: "Chi diffonde informazioni malevole rischia di penalizzare la propria reputazione — incentivando la verifica dei cittadini prima di amplificare.",
        },
      ],
      poolLabel: "Riserva Livello 3",
      panelLabel: "Panel casuale",
      verdictLabel: "Verdetto vincolante",
    },
    friction: {
      num: "06",
      kicker: 'Filosofia dell\'"attrito positivo"',
      title: "Non censuriamo. La tua reputazione risponde per te.",
      lead: "Una palestra di pensiero critico, non un pozzo di rumore.",
      text: "Ogni azione non sostenuta da fonti verificabili, o proveniente da nodi a bassa reputazione, incontrerà un attrito: l'utente viene avvisato che la propria reputazione è a rischio. Questo attrito — non la cancellazione — è ciò che eleva la qualità della piazza pubblica.",
      flow: [
        { label: "Azione", text: "Una pubblicazione, un avallo o una condivisione" },
        { label: "Attrito", text: "Fonte non verificabile o a bassa reputazione → avviso" },
        { label: "Impegno", text: "Se amplifichi comunque, impegni la tua stessa reputazione" },
      ],
    },
    resilience: {
      num: "05",
      kicker: "Integrazione e resilienza",
      title: "Redenzione senza amnesia",
      cards: [
        {
          tag: "Evoluzione personale",
          title: "Cambia l'alias, conserva lo storico",
          text: "Per sicurezza, un utente può abbandonare un alias — ma lo storico dei suoi atti, la macchia o il merito della sua condotta, resta registrato nel grafo. La redenzione è possibile senza cancellare la tracciabilità della malafede.",
        },
        {
          tag: "Direzione futura",
          title: "Ponti d'impatto",
          text: "Man mano che Almena raggiungerà una massa critica, il protocollo consentirà prove di consenso che interagiscono con sistemi esterni — finanziari, legali, amministrativi — affinché la volontà veritiera dei cittadini abbia impatto nel mondo fisico.",
          soon: true,
        },
      ],
      rotation: { from: "Alias A", to: "Alias B", persist: "Lo storico degli atti persiste nel grafo" },
    },
    declaration: {
      num: "07",
      kicker: "Dichiarazione finale",
      title: "Un organismo vivo, verificabile e decentralizzato",
      lines: [
        "Né il creatore del sistema né alcuna autorità centrale possiede chiavi maestre sulle regole.",
        "La verità è un consenso di reputazioni. La giustizia è la conseguenza diretta degli atti.",
      ],
      motto: "In Almena, l'anonimato è lo scudo della libertà e la reputazione è la misura del cittadino.",
      note: "Questo documento costituisce la base fondativa di Almena. Qualsiasi sviluppo, contratto intelligente o interfaccia utente deve allinearsi rigorosamente ai principi qui esposti.",
      cta: "Vedi il progetto su GitHub",
    },
  },
} as const;

export const GITHUB_URL = "https://github.com/almena-network";
