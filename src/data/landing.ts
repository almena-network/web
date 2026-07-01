// Content model for the Almena Network portal.
//
// Priority is THE NETWORK. Almena is a general-purpose decentralized platform; messaging is one
// use case among many (see .cursor/rules/almena-platform-vision.mdc). The site reflects that:
//   • home      — the Almena network / platform            → "/"          and "/es/"
//   • messaging — messaging, one use case on the platform  → "/messaging/" and "/es/messaging/"
//   • network   — the network in depth (nodes, run a node) → "/network/"   and "/es/network/"
//   • coin      — the ALMENA coin                          → "/coin/"      and "/es/coin/"
//
// PRE-LAUNCH: the platform runs on a devnet today; mainnet is coming (countdown from `launch.date`).
// Copy is honest about the stage of development — see `home.roadmap`. The ALMENA coin's economics
// are still being designed, so the site shows NO coin amounts, values, splits or figures anywhere;
// the coin page states that market/economics arrive at mainnet.

export type Lang = "en" | "es";

// ── Launch config ────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH for the countdown. Replace `date` to move the launch.
export const launch = {
  // Confirmed mainnet launch: 11 November 2026.
  date: "2026-11-11T12:00:00Z",
  en: {
    badge: "Pre-launch · building in the open",
    countdownTitle: "Mainnet launches in",
    countdownDone: "Almena mainnet is live.",
    units: { days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds" },
  },
  es: {
    badge: "Pre-lanzamiento · construido en abierto",
    countdownTitle: "La mainnet se lanza en",
    countdownDone: "La mainnet de Almena está activa.",
    units: { days: "Días", hours: "Horas", minutes: "Minutos", seconds: "Segundos" },
  },
} as const;

// Human-readable launch label derived from `launch.date`, per language.
export function launchLabel(lang: Lang): string {
  const d = new Date(launch.date);
  return d.toLocaleDateString(lang === "es" ? "es-ES" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export const site = {
  en: {
    nav: {
      network: "Network",
      identity: "Identity",
      messaging: "Messaging",
      coin: "Coin",
      docs: "Docs",
      github: "GitHub",
      langSwitch: "Español",
    },
    footer: {
      tagline: "An open, decentralized platform for many uses. Launching soon.",
      platform: "Platform",
      network: "Network",
      identity: "Identity",
      messaging: "Messaging",
      coin: "Coin",
      resources: "Resources",
      docs: "Documentation",
      github: "GitHub",
      email: "info@almena.network",
      rights: "Open source. No company in the middle.",
    },
  },
  es: {
    nav: {
      network: "Red",
      identity: "Identidad",
      messaging: "Mensajería",
      coin: "Moneda",
      docs: "Docs",
      github: "GitHub",
      langSwitch: "English",
    },
    footer: {
      tagline: "Una plataforma abierta y descentralizada para muchos usos. Muy pronto.",
      platform: "Plataforma",
      network: "Red",
      identity: "Identidad",
      messaging: "Mensajería",
      coin: "Moneda",
      resources: "Recursos",
      docs: "Documentación",
      github: "GitHub",
      email: "info@almena.network",
      rights: "Código abierto. Sin empresa en medio.",
    },
  },
} as const;

// ── Home = the Almena network / platform ─────────────────────────────────────
export const home = {
  en: {
    title: "Almena — The open, decentralized platform",
    description:
      "Almena is an open, decentralized platform — a community-run network of nodes and a proof-of-work chain that can power storage, voting, document signing, traceability, messaging and more. Mainnet launches soon.",
    hero: {
      title: "One network. Every use. No middleman.",
      subtitle:
        "Almena is an open, decentralized platform. A community-run network of nodes and a proof-of-work chain — the shared substrate for storage, voting, signing, traceability, private messaging and more. No company owns it, no server can take it down.",
      ctaPrimary: "Follow the launch",
      ctaSecondary: "How the network works",
    },
    roadmap: {
      title: "Where Almena is today",
      subtitle: "Built in the open, running on a devnet, counting down to mainnet.",
      items: [
        {
          state: "done",
          label: "Live on devnet",
          title: "The node network runs",
          text: "Service nodes store and relay data in swarms, and a proof-of-work blockchain keeps the on-chain node registry, stakes and uptime proofs. The substrate every use case builds on.",
        },
        {
          state: "done",
          label: "Live on devnet",
          title: "The first use works",
          text: "Private messaging — end-to-end encrypted chats, Account IDs, onion routing, encrypted groups and disappearing messages — runs today on the developer network.",
        },
        {
          state: "progress",
          label: "In testing",
          title: "Voice & video calls",
          text: "Encrypted, onion-routed calls over a media-relay layer. The relay and on-chain media registration are wired; end-to-end call quality is being verified before launch.",
        },
        {
          state: "soon",
          label: "At mainnet",
          title: "ALMENA economics & new uses",
          text: "The coin's economics activate at mainnet, and the roadmap opens the network to more uses — storage, voting, document signing, traceability and beyond.",
        },
      ],
    },
    what: {
      title: "What is Almena?",
      text:
        "Almena is a decentralized platform for services that don't depend on any company's servers. It's powered by a community-run network of nodes and a proof-of-work blockchain — anyone can run a node, and the network keeps working even as individual nodes come and go. Private messaging is the first app to ship; the same network is designed to carry many more.",
    },
    uses: {
      title: "One platform, many uses",
      subtitle:
        "The same network — an open node layer and a proof-of-work chain — is built to power many decentralized services. Messaging is the first to ship.",
      note: "Messaging launches first · other uses are on the roadmap",
      items: [
        {
          icon: "chat",
          layer: "Network + Chain",
          status: "launching",
          title: "Private messaging",
          text: "End-to-end encrypted conversations with no central server to censor them or leak metadata. The first Almena app.",
          href: "messaging",
        },
        {
          icon: "storage",
          layer: "Network",
          status: "roadmap",
          title: "Storage & backups",
          text: "Distributed file storage and redundant backups spread across the node network — no single provider to trust or lose.",
        },
        {
          icon: "cpu",
          layer: "Network",
          status: "roadmap",
          title: "Compute & bandwidth",
          text: "Open nodes offering raw resources — shared compute, bandwidth and data oracles the network can pay for.",
        },
        {
          icon: "vote",
          layer: "Chain",
          status: "roadmap",
          title: "Voting & DAOs",
          text: "Tamper-evident voting and collective governance, tallied on-chain with certified finality — no central authority counting the ballots.",
        },
        {
          icon: "sign",
          layer: "Chain",
          status: "roadmap",
          title: "Document signing",
          text: "Sign documents and timestamp hashes on-chain: verifiable proof of what existed, and when, with certified authority.",
        },
        {
          icon: "trace",
          layer: "Chain",
          status: "roadmap",
          title: "Traceability",
          text: "Chain of custody and supply-chain tracking with an immutable, auditable history from origin to destination.",
        },
        {
          icon: "id",
          layer: "Network + Chain",
          status: "roadmap",
          title: "Identity & zero-knowledge",
          text: "Self-sovereign identity and verifiable credentials — prove a fact (age, residency, a diploma) without revealing the underlying data.",
          href: "identity",
        },
        {
          icon: "coin",
          layer: "Chain",
          status: "roadmap",
          title: "Payments & value",
          text: "Peer-to-peer payments settled in ALMENA, the network's own coin — no bank in the middle. See the Coin page.",
        },
      ],
    },
    how: {
      title: "How the network works",
      subtitle: "Every Almena node runs two cooperating services — the substrate every use case is built on.",
      cta: "Explore the network in depth",
    },
    coinTeaser: {
      eyebrow: "The coin",
      title: "ALMENA — the future of privacy, powered by you",
      text:
        "The network runs on ALMENA: the proof-of-work coin that rewards the miners and service nodes keeping it alive. Its economics are being designed and go live at mainnet.",
      cta: "Discover ALMENA",
    },
    community: {
      title: "A network is a team effort",
      text:
        "Almena is built in the open by contributors around the world. No vendor lock-in, no paid dependencies. Read every line, run your own node, and help shape a network that answers to its users — not a company.",
      ctaPrimary: "Contribute on GitHub",
      ctaSecondary: "Read the docs",
    },
  },
  es: {
    title: "Almena — La plataforma abierta y descentralizada",
    description:
      "Almena es una plataforma abierta y descentralizada — una red comunitaria de nodos y una cadena de prueba de trabajo capaz de impulsar almacenamiento, votaciones, firma de documentos, trazabilidad, mensajería y más. La mainnet llega pronto.",
    hero: {
      title: "Una red. Cada uso. Sin intermediarios.",
      subtitle:
        "Almena es una plataforma abierta y descentralizada. Una red comunitaria de nodos y una cadena de prueba de trabajo — el sustrato compartido para almacenamiento, votaciones, firma, trazabilidad, mensajería privada y más. Nadie la posee, ningún servidor puede tirarla abajo.",
      ctaPrimary: "Sigue el lanzamiento",
      ctaSecondary: "Cómo funciona la red",
    },
    roadmap: {
      title: "En qué punto está Almena",
      subtitle: "Construido en abierto, funcionando en una devnet, con la cuenta atrás hacia mainnet.",
      items: [
        {
          state: "done",
          label: "Activo en devnet",
          title: "La red de nodos funciona",
          text: "Los service nodes almacenan y retransmiten datos en swarms, y una blockchain de prueba de trabajo mantiene el registro de nodos, los stakes y las pruebas de uptime on-chain. El sustrato sobre el que se construye cada uso.",
        },
        {
          state: "done",
          label: "Activo en devnet",
          title: "El primer uso funciona",
          text: "La mensajería privada — chats cifrados de extremo a extremo, Account IDs, onion routing, grupos cifrados y mensajes efímeros — ya funciona hoy en la red de desarrollo.",
        },
        {
          state: "progress",
          label: "En pruebas",
          title: "Llamadas de voz y vídeo",
          text: "Llamadas cifradas y enrutadas onion sobre una capa de media-relay. El relay y el registro de media on-chain ya están integrados; ahora verificamos la calidad de llamada de extremo a extremo antes del lanzamiento.",
        },
        {
          state: "soon",
          label: "En mainnet",
          title: "Economía de ALMENA y nuevos usos",
          text: "La economía de la moneda se activa en mainnet, y el roadmap abre la red a más usos — almacenamiento, votaciones, firma de documentos, trazabilidad y más allá.",
        },
      ],
    },
    what: {
      title: "¿Qué es Almena?",
      text:
        "Almena es una plataforma descentralizada para servicios que no dependen de los servidores de ninguna empresa. La impulsan una red comunitaria de nodos y una blockchain de prueba de trabajo — cualquiera puede levantar un nodo, y la red sigue funcionando aunque nodos concretos entren y salgan. La mensajería privada es la primera app en llegar; la misma red está diseñada para llevar muchas más.",
    },
    uses: {
      title: "Una plataforma, muchos usos",
      subtitle:
        "La misma red — una capa de nodos abierta y una cadena de prueba de trabajo — está hecha para impulsar muchos servicios descentralizados. La mensajería es el primero en llegar.",
      note: "La mensajería se lanza primero · el resto de usos están en el roadmap",
      items: [
        {
          icon: "chat",
          layer: "Red + Cadena",
          status: "launching",
          title: "Mensajería privada",
          text: "Conversaciones cifradas de extremo a extremo sin servidor central que las censure o filtre metadatos. La primera app de Almena.",
          href: "messaging",
        },
        {
          icon: "storage",
          layer: "Red",
          status: "roadmap",
          title: "Almacenamiento y backups",
          text: "Almacenamiento de ficheros distribuido y copias redundantes repartidas por la red de nodos — sin un único proveedor que confiar o perder.",
        },
        {
          icon: "cpu",
          layer: "Red",
          status: "roadmap",
          title: "Cómputo y ancho de banda",
          text: "Nodos abiertos que ofrecen recursos en bruto — cómputo, ancho de banda y oráculos de datos que la red puede pagar.",
        },
        {
          icon: "vote",
          layer: "Cadena",
          status: "roadmap",
          title: "Votaciones y DAOs",
          text: "Votaciones a prueba de manipulación y gobernanza colectiva, contadas on-chain con finalidad certificada — sin autoridad central escrutando.",
        },
        {
          icon: "sign",
          layer: "Cadena",
          status: "roadmap",
          title: "Firma de documentos",
          text: "Firma documentos y sella hashes on-chain: prueba verificable de qué existía, y cuándo, con autoridad certificada.",
        },
        {
          icon: "trace",
          layer: "Cadena",
          status: "roadmap",
          title: "Trazabilidad",
          text: "Cadena de custodia y trazabilidad de suministro con un historial inmutable y auditable, del origen al destino.",
        },
        {
          icon: "id",
          layer: "Red + Cadena",
          status: "roadmap",
          title: "Identidad y conocimiento cero",
          text: "Identidad soberana y credenciales verificables — demuestra un hecho (edad, residencia, un título) sin revelar el dato en sí.",
          href: "identity",
        },
        {
          icon: "coin",
          layer: "Cadena",
          status: "roadmap",
          title: "Pagos y valor",
          text: "Pagos entre pares liquidados en ALMENA, la moneda propia de la red — sin banco en medio. Consulta la página de la Moneda.",
        },
      ],
    },
    how: {
      title: "Cómo funciona la red",
      subtitle: "Cada nodo de Almena ejecuta dos servicios que cooperan — el sustrato sobre el que se construye cada uso.",
      cta: "Explora la red en detalle",
    },
    coinTeaser: {
      eyebrow: "La moneda",
      title: "ALMENA — el futuro de la privacidad lo impulsas tú",
      text:
        "La red funciona con ALMENA: la moneda de prueba de trabajo que recompensa a los mineros y service nodes que la mantienen viva. Su economía se está diseñando y se activa en mainnet.",
      cta: "Descubre ALMENA",
    },
    community: {
      title: "Una red es cosa de todos",
      text:
        "Almena se construye de forma abierta por contribuidores de todo el mundo. Sin vendor lock-in, sin dependencias de pago. Lee cada línea, levanta tu propio nodo y ayuda a dar forma a una red que responde a sus usuarios — no a una empresa.",
      ctaPrimary: "Contribuir en GitHub",
      ctaSecondary: "Leer la documentación",
    },
  },
} as const;

// ── Decentralized identity = a use case with its own page ────────────────────
// Single source for identity content: feeds both the /identity/ page and the
// home teaser. IdentityDiagram reads `identity[lang].diagram`.
export const identity = {
  en: {
    title: "Almena Identity — Own your identity, prove anything",
    description:
      "Decentralized, self-sovereign identity on the Almena network: hold your own verifiable credentials and prove any claim without revealing the data behind it. One of many uses of the platform.",
    hero: {
      eyebrow: "Use case · Identity",
      title: "Own your identity. Prove anything.",
      subtitle:
        "Self-sovereign identity replaces the central identity provider with verifiable credentials you hold yourself. Prove you're over 18, a resident, or a degree holder — without handing over the data behind it.",
      ctaPrimary: "Follow the launch",
      ctaSecondary: "How the network works",
    },
    teaser: {
      eyebrow: "Use case in focus",
      title: "Decentralized identity",
      text:
        "Self-sovereign identity replaces the central identity provider with three roles and a shared source of trust. You hold your own credentials and prove what you need — nothing more.",
      cta: "Explore Almena Identity",
    },
    what: {
      title: "What is decentralized identity?",
      text:
        "Today a handful of companies own your login and decide what you can prove and to whom. Self-sovereign identity (SSI) flips that: credentials are issued to you, held by you, and checked by anyone — with a shared, tamper-evident source of trust instead of a central identity provider. Almena anchors that trust on-chain and hands the data back to you.",
    },
    roles: [
      {
        key: "issuer",
        title: "Issuers",
        text: "Trusted organizations — a university, a government, an employer — issue verifiable credentials signed with their own keys.",
      },
      {
        key: "holder",
        title: "Holders",
        text: "You hold your credentials in your own wallet and decide who sees them. No identity provider sits in the middle, and nothing can be revoked out from under you without a trace.",
      },
      {
        key: "verifier",
        title: "Verifiers",
        text: "Anyone can check a credential is authentic and unrevoked — without phoning home to the issuer, and without learning more than you choose to reveal.",
      },
    ],
    note:
      "Almena anchors the trust — the issuer registry and revocation — on-chain, so no central identity provider can track, gate or deplatform you.",
    diagram: {
      issuer: "Issuer",
      holder: "Holder",
      verifier: "Verifier",
      issues: "issues credential",
      presents: "presents proof",
      trusts: "trusts (on-chain registry)",
    },
    disclosure: {
      tag: "Zero-knowledge",
      title: "Prove it. Don't reveal it.",
      text: "With zero-knowledge proofs you demonstrate a claim is true without exposing the data behind it — minimal disclosure, one interaction at a time. It's what separates a real identity layer from a shared database.",
      points: [
        "Prove you're over 18 — not your birth date",
        "Prove residency — not your address",
        "Prove you hold a credential — not the document",
      ],
    },
    capabilities: {
      title: "What you can do with Almena Identity",
      items: [
        {
          title: "Self-sovereign identity (DID/SSI)",
          text: "A portable identity you control — not a login owned by a platform that can lock you out.",
        },
        {
          title: "Verifiable credentials",
          text: "Diplomas, certifications, licenses, work history — cryptographically signed and instantly checkable.",
        },
        {
          title: "Reusable KYC",
          text: "Verify once, reuse across services — without repeating the process or resharing documents each time.",
        },
        {
          title: "Minimal disclosure",
          text: "Share only the single fact each interaction needs, and nothing else about you.",
        },
        {
          title: "Revocation you can see",
          text: "Issuers can revoke a credential — but only on a public on-chain registry, never silently.",
        },
        {
          title: "No identity provider",
          text: "No third-party login in the middle that can profile you, gate access, or deplatform you.",
        },
      ],
    },
    layer: {
      title: "Where identity lives on Almena",
      text:
        "Identity spans both layers. The BLOCKCHAIN layer (permissioned, certified finality) anchors the issuer registry and revocation; the NETWORK layer stores and moves credentials privately. You keep the credentials themselves.",
    },
    roadmap: {
      label: "On the roadmap",
      text: "Identity is a post-launch use case. The network and its on-chain registries — the trust anchor identity needs — go live at mainnet; identity is built on top.",
    },
    cta: {
      title: "Identity you actually own, soon on Almena",
      text: "The network that anchors it is open source and running on a devnet today. Follow the countdown to mainnet, and read how the layers beneath identity work.",
      ctaPrimary: "Follow on GitHub",
      ctaSecondary: "Read the docs",
    },
  },
  es: {
    title: "Almena Identidad — Sé dueño de tu identidad, demuestra cualquier cosa",
    description:
      "Identidad soberana y descentralizada sobre la red Almena: custodia tus credenciales verificables y demuestra cualquier afirmación sin revelar el dato que hay detrás. Uno de los muchos usos de la plataforma.",
    hero: {
      eyebrow: "Caso de uso · Identidad",
      title: "Sé dueño de tu identidad. Demuestra cualquier cosa.",
      subtitle:
        "La identidad soberana sustituye al proveedor de identidad central por credenciales verificables que custodias tú. Demuestra que eres mayor de edad, residente o titulado — sin entregar el dato que hay detrás.",
      ctaPrimary: "Sigue el lanzamiento",
      ctaSecondary: "Cómo funciona la red",
    },
    teaser: {
      eyebrow: "Un caso de uso en detalle",
      title: "Identidad descentralizada",
      text:
        "La identidad soberana sustituye al proveedor de identidad central por tres roles y una fuente de confianza compartida. Tú custodias tus credenciales y demuestras solo lo que hace falta — nada más.",
      cta: "Explora Almena Identidad",
    },
    what: {
      title: "¿Qué es la identidad descentralizada?",
      text:
        "Hoy un puñado de empresas son dueñas de tu login y deciden qué puedes demostrar y ante quién. La identidad soberana (SSI) le da la vuelta: las credenciales se te emiten a ti, las custodias tú y las verifica cualquiera — con una fuente de confianza compartida y a prueba de manipulación, en vez de un proveedor de identidad central. Almena ancla esa confianza on-chain y te devuelve el control del dato.",
    },
    roles: [
      {
        key: "issuer",
        title: "Emisores",
        text: "Organizaciones de confianza — una universidad, un gobierno, una empresa — emiten credenciales verificables firmadas con sus propias claves.",
      },
      {
        key: "holder",
        title: "Titulares",
        text: "Tú custodias tus credenciales en tu propia cartera y decides quién las ve. Ningún proveedor de identidad se interpone, y nada puede revocarse a tus espaldas sin dejar rastro.",
      },
      {
        key: "verifier",
        title: "Verificadores",
        text: "Cualquiera puede comprobar que una credencial es auténtica y no está revocada — sin llamar al emisor y sin aprender más de lo que decides revelar.",
      },
    ],
    note:
      "Almena ancla la confianza — el registro de emisores y la revocación — on-chain, así que ningún proveedor de identidad central puede rastrearte, bloquearte o expulsarte.",
    diagram: {
      issuer: "Emisor",
      holder: "Titular",
      verifier: "Verificador",
      issues: "emite credencial",
      presents: "presenta prueba",
      trusts: "confía (registro on-chain)",
    },
    disclosure: {
      tag: "Conocimiento cero",
      title: "Demuéstralo. No lo reveles.",
      text: "Con pruebas de conocimiento cero demuestras que una afirmación es cierta sin exponer el dato que hay detrás — divulgación mínima, interacción a interacción. Es lo que separa una capa de identidad real de una simple base de datos.",
      points: [
        "Demuestra que eres mayor de edad — no tu fecha de nacimiento",
        "Demuestra tu residencia — no tu dirección",
        "Demuestra que posees una credencial — no el documento",
      ],
    },
    capabilities: {
      title: "Qué puedes hacer con Almena Identidad",
      items: [
        {
          title: "Identidad soberana (DID/SSI)",
          text: "Una identidad portable que controlas tú — no un login propiedad de una plataforma que puede dejarte fuera.",
        },
        {
          title: "Credenciales verificables",
          text: "Títulos, certificaciones, licencias, historial laboral — firmados criptográficamente y comprobables al instante.",
        },
        {
          title: "KYC reutilizable",
          text: "Verifícate una vez, reutilízalo entre servicios — sin repetir el proceso ni reenviar documentos cada vez.",
        },
        {
          title: "Divulgación mínima",
          text: "Comparte solo el dato que cada interacción necesita, y nada más sobre ti.",
        },
        {
          title: "Revocación que puedes ver",
          text: "Los emisores pueden revocar una credencial — pero solo en un registro público on-chain, nunca en silencio.",
        },
        {
          title: "Sin proveedor de identidad",
          text: "Ningún login de terceros en medio que pueda perfilarte, restringir tu acceso o expulsarte.",
        },
      ],
    },
    layer: {
      title: "Dónde vive la identidad en Almena",
      text:
        "La identidad abarca ambas capas. La capa BLOCKCHAIN (permisionada, con finalidad certificada) ancla el registro de emisores y la revocación; la capa NETWORK almacena y mueve las credenciales de forma privada. Las credenciales, las guardas tú.",
    },
    roadmap: {
      label: "En el roadmap",
      text: "La identidad es un caso de uso posterior al lanzamiento. La red y sus registros on-chain — el ancla de confianza que la identidad necesita — se activan en mainnet; la identidad se construye encima.",
    },
    cta: {
      title: "Una identidad que de verdad es tuya, pronto en Almena",
      text: "La red que la ancla es código abierto y funciona hoy en una devnet. Sigue la cuenta atrás hacia mainnet y lee cómo funcionan las capas bajo la identidad.",
      ctaPrimary: "Seguir en GitHub",
      ctaSecondary: "Leer la documentación",
    },
  },
} as const;

// ── Messaging = one use case on the platform ─────────────────────────────────
export const messaging = {
  en: {
    title: "Almena Messaging — Send messages, not metadata",
    description:
      "Private messaging is the first app on the Almena network: decentralized, end-to-end encrypted, no phone number and no central server. One of many uses the platform will carry.",
    hero: {
      eyebrow: "Use case · Messaging",
      title: "Send messages, not metadata.",
      subtitle:
        "Almena's first app is a decentralized, end-to-end encrypted messenger. No phone number, no email, no central server — private conversations that travel through onion paths over the community-run network.",
      ctaPrimary: "Follow the launch",
      ctaSecondary: "How the network works",
    },
    platforms: {
      title: "One account, every device",
      subtitle: "Native apps for desktop and mobile at launch. Restore anywhere with a 12-word recovery phrase.",
      note: "Coming at launch",
      items: [
        { name: "macOS", kind: "Desktop" },
        { name: "Windows", kind: "Desktop" },
        { name: "Linux", kind: "Desktop" },
        { name: "Android", kind: "Mobile" },
        { name: "iOS", kind: "Mobile" },
      ],
    },
    benefits: {
      title: "Privacy, by default",
      subtitle: "Not a setting you turn on — the way Almena is built.",
      items: [
        {
          title: "Account IDs, not phone numbers",
          text: "Your identity is a random Account ID. No phone number, no email, nothing that ties a conversation back to your real-world self.",
        },
        {
          title: "Onion-routed messages",
          text: "Every message hops through a three-node path. The entry node sees you, the exit sees the destination — no single node sees both.",
        },
        {
          title: "No central server",
          text: "There is no Almena server that handles or stores your content. Messages live encrypted on a decentralized network of community-run nodes.",
        },
        {
          title: "End-to-end encryption",
          text: "Messages and attachments are sealed to the recipient's keys and signed by yours. Only the two of you can read them.",
        },
        {
          title: "Encrypted on your device",
          text: "Everything stored locally — conversations, contacts, files — is encrypted at rest with a key derived from your account.",
        },
        {
          title: "Open source",
          text: "The client, the nodes and the protocol are all open. Anyone can read the code, audit it, or run their own node.",
        },
      ],
    },
    features: {
      title: "Built for private conversations",
      items: [
        {
          tag: "Identity",
          title: "Private by design",
          text: "Sign up with no personal data. Almena generates an Account ID and a 12-word recovery phrase — that's your identity. There's no directory, no profile to mine, and nothing for an attacker to leak.",
          points: ["No phone number or email", "Random Account ID (05…)", "12-word recovery phrase"],
        },
        {
          tag: "Anonymity",
          title: "Hidden by onion routing",
          text: "Instead of connecting straight to a server, Almena builds an encrypted three-hop path through the node network for every message. Your IP address stays hidden from the people you talk to and from the network itself.",
          points: ["Three-hop onion paths", "Your IP stays private", "No node sees both ends"],
        },
        {
          tag: "Control",
          title: "Yours, on every device",
          text: "Your account, conversations and contacts sync across your devices through your own encrypted swarm — no cloud account required. Restore everything on a new device from your recovery phrase. Set a disappearing-message timer on any conversation and messages delete themselves from all devices automatically.",
          points: ["Multi-device sync", "Restore from recovery phrase", "Disappearing messages"],
        },
        {
          tag: "Groups",
          title: "Encrypted group conversations",
          text: "Create group chats with friends or join community channels. Every group uses the same end-to-end encryption as 1:1 chats — members can be added or removed at any time and the message history stays sealed to the current member set.",
          points: ["Create and manage groups", "Add or remove members", "Community channels"],
        },
        {
          tag: "Calls · in development",
          title: "Voice & video calls, no phone number",
          text: "Make and receive encrypted calls using only your Account ID. No SIM card, no carrier — calls route through a media-relay layer that keeps your IP and identity private. This is the feature we're hardening right now ahead of the mainnet launch.",
          points: ["Encrypted voice & video", "No phone number needed", "Relay keeps your IP private"],
        },
      ],
    },
    cta: {
      title: "Private messaging, launching soon",
      text:
        "The client, the nodes and the protocol are open source today. Follow the countdown to mainnet — and read how the network beneath it works.",
      ctaPrimary: "Follow on GitHub",
      ctaSecondary: "Read the docs",
    },
  },
  es: {
    title: "Almena Mensajería — Envía mensajes, no metadatos",
    description:
      "La mensajería privada es la primera app de la red Almena: descentralizada, cifrada de extremo a extremo, sin número de teléfono ni servidor central. Uno de los muchos usos que llevará la plataforma.",
    hero: {
      eyebrow: "Caso de uso · Mensajería",
      title: "Envía mensajes, no metadatos.",
      subtitle:
        "La primera app de Almena es un mensajero descentralizado y cifrado de extremo a extremo. Sin número de teléfono, sin email, sin servidor central — conversaciones privadas que viajan por rutas onion sobre la red comunitaria.",
      ctaPrimary: "Sigue el lanzamiento",
      ctaSecondary: "Cómo funciona la red",
    },
    platforms: {
      title: "Una cuenta, todos tus dispositivos",
      subtitle: "Apps nativas para escritorio y móvil en el lanzamiento. Restaura donde quieras con una frase de recuperación de 12 palabras.",
      note: "Disponible en el lanzamiento",
      items: [
        { name: "macOS", kind: "Escritorio" },
        { name: "Windows", kind: "Escritorio" },
        { name: "Linux", kind: "Escritorio" },
        { name: "Android", kind: "Móvil" },
        { name: "iOS", kind: "Móvil" },
      ],
    },
    benefits: {
      title: "Privacidad por defecto",
      subtitle: "No es una opción que activas — es la forma en que Almena está construido.",
      items: [
        {
          title: "Account IDs, no teléfonos",
          text: "Tu identidad es un Account ID aleatorio. Sin número de teléfono, sin email, nada que ligue una conversación con tu identidad real.",
        },
        {
          title: "Mensajes enrutados onion",
          text: "Cada mensaje salta por una ruta de tres nodos. El nodo de entrada te ve, el de salida ve el destino — ningún nodo ve los dos extremos.",
        },
        {
          title: "Sin servidor central",
          text: "No hay un servidor de Almena que gestione o guarde tu contenido. Los mensajes viven cifrados en una red descentralizada de nodos de la comunidad.",
        },
        {
          title: "Cifrado de extremo a extremo",
          text: "Mensajes y adjuntos se sellan con las claves del destinatario y se firman con las tuyas. Solo vosotros dos podéis leerlos.",
        },
        {
          title: "Cifrado en tu dispositivo",
          text: "Todo lo que se guarda en local — conversaciones, contactos, archivos — se cifra en reposo con una clave derivada de tu cuenta.",
        },
        {
          title: "Código abierto",
          text: "El cliente, los nodos y el protocolo son abiertos. Cualquiera puede leer el código, auditarlo o levantar su propio nodo.",
        },
      ],
    },
    features: {
      title: "Hecho para conversaciones privadas",
      items: [
        {
          tag: "Identidad",
          title: "Privado por diseño",
          text: "Regístrate sin datos personales. Almena genera un Account ID y una frase de recuperación de 12 palabras — esa es tu identidad. No hay directorio, ni perfil que explotar, ni nada que un atacante pueda filtrar.",
          points: ["Sin teléfono ni email", "Account ID aleatorio (05…)", "Frase de recuperación de 12 palabras"],
        },
        {
          tag: "Anonimato",
          title: "Oculto por onion routing",
          text: "En vez de conectarte directo a un servidor, Almena construye una ruta cifrada de tres saltos por la red de nodos para cada mensaje. Tu dirección IP queda oculta para quien hablas y para la propia red.",
          points: ["Rutas onion de tres saltos", "Tu IP permanece privada", "Ningún nodo ve los dos extremos"],
        },
        {
          tag: "Control",
          title: "Tuyo, en cada dispositivo",
          text: "Tu cuenta, conversaciones y contactos se sincronizan entre tus dispositivos a través de tu propio swarm cifrado — sin cuenta en la nube. Restaura todo en un dispositivo nuevo con tu frase de recuperación. Activa un temporizador de mensajes efímeros en cualquier conversación y los mensajes se eliminan solos de todos los dispositivos.",
          points: ["Sincronización multi-dispositivo", "Restaurar con la frase de recuperación", "Mensajes efímeros"],
        },
        {
          tag: "Grupos",
          title: "Conversaciones de grupo cifradas",
          text: "Crea chats grupales con amigos o únete a canales comunitarios. Cada grupo usa el mismo cifrado de extremo a extremo que los chats 1:1 — los miembros se pueden añadir o eliminar en cualquier momento y el historial permanece sellado para el conjunto de miembros actual.",
          points: ["Crear y gestionar grupos", "Añadir o eliminar miembros", "Canales comunitarios"],
        },
        {
          tag: "Llamadas · en desarrollo",
          title: "Llamadas de voz y vídeo, sin número de teléfono",
          text: "Haz y recibe llamadas cifradas usando solo tu Account ID. Sin tarjeta SIM, sin operadora — las llamadas se enrutan por una capa de media-relay que mantiene tu IP y tu identidad privadas. Es la función que estamos afinando ahora mismo de cara al lanzamiento de mainnet.",
          points: ["Voz y vídeo cifrados", "Sin número de teléfono", "El relay mantiene tu IP privada"],
        },
      ],
    },
    cta: {
      title: "Mensajería privada, muy pronto",
      text:
        "El cliente, los nodos y el protocolo ya son código abierto. Sigue la cuenta atrás hacia mainnet — y lee cómo funciona la red que hay debajo.",
      ctaPrimary: "Seguir en GitHub",
      ctaSecondary: "Leer la documentación",
    },
  },
} as const;

// ── Network in depth (nodes, run a node) ─────────────────────────────────────
export const network = {
  en: {
    title: "Almena Network — Powered by you",
    description:
      "The Almena Network is a decentralized mesh of service nodes and a proof-of-work blockchain. Run a node, stake into it, and earn rewards for keeping the network alive.",
    hero: {
      eyebrow: "The network",
      title: "The substrate for a decentralized world.",
      subtitle:
        "Behind every Almena use case is a decentralized network of service nodes and a proof-of-work blockchain — run by the community, owned by no one. It runs on a devnet today and goes to mainnet at launch.",
      ctaPrimary: "Read the docs",
      ctaSecondary: "About the coin",
    },
    stats: {
      title: "The protocol at a glance",
      note: "Protocol design parameters — live on the developer network today.",
      items: [
        { value: "~5s", label: "Target block time" },
        { value: "7", label: "Nodes per data swarm" },
        { value: "3-hop", label: "Onion routing paths" },
        { value: "PoW", label: "BLAKE2b consensus" },
      ],
    },
    what: {
      title: "What is the Almena Network?",
      text:
        "Almena has no central servers. Instead, a global network of independent service nodes stores encrypted data and relays onion-routed traffic, while a proof-of-work blockchain keeps a public registry of which nodes are online and trusted. There's no company that can read your data, take the network down, or shut you out — because no single party runs it.",
    },
    pillars: {
      title: "Two daemons, one network",
      subtitle: "Every Almena node runs two cooperating services.",
      items: [
        {
          tag: "Service Node",
          title: "Stores and relays data",
          text: "Service nodes hold encrypted data until it's fetched and relay onion-routed requests hop by hop. Each account is served by a deterministic swarm of seven nodes, so data is replicated and stays available even if some nodes go offline.",
          points: [
            "Encrypted storage with TTL expiry",
            "Onion routing relay (no node sees both ends)",
            "7-node swarm replication for availability",
          ],
        },
        {
          tag: "Blockchain Node",
          title: "Keeps the network honest",
          text: "A proof-of-work blockchain (BLAKE2b, ~5-second blocks) records the registry of service nodes, their stakes and their uptime. Clients read this ledger to discover which nodes to trust — no central directory, no gatekeeper.",
          points: [
            "Proof-of-work consensus, ~5s blocks",
            "On-chain service-node registry",
            "Staking, rewards and uptime proofs",
          ],
        },
      ],
    },
    rewards: {
      title: "Run a node, earn rewards",
      subtitle:
        "Service nodes are the backbone of the network — and they're paid for it. Rewards activate at mainnet.",
      items: [
        {
          step: "01",
          title: "Stake to register",
          text: "Lock the registration bond on-chain to register a service node. Others can contribute to your node too, with rewards split by an operator fee you set.",
        },
        {
          step: "02",
          title: "Stay online, prove it",
          text: "Your node periodically submits a signed uptime proof to the blockchain. Only nodes that are both staked and provably live stay eligible for rewards.",
        },
        {
          step: "03",
          title: "Earn every block",
          text: "Each block rewards the miner that secured it and an elected, staked service node — so the people doing the work are paid. Keep your node honest and online, and the network pays you back.",
        },
      ],
    },
    cta: {
      title: "Become part of the network",
      text:
        "The node software is open source today. Read the docs, run it against the devnet, and be ready to store, relay and earn when mainnet launches.",
      ctaPrimary: "Read the documentation",
      ctaSecondary: "About the ALMENA coin",
    },
  },
  es: {
    title: "Almena Network — Impulsada por ti",
    description:
      "La Red Almena es una malla descentralizada de service nodes y una blockchain de prueba de trabajo. Levanta un nodo, haz staking y gana recompensas por mantener la red viva.",
    hero: {
      eyebrow: "La red",
      title: "El sustrato para un mundo descentralizado.",
      subtitle:
        "Detrás de cada uso de Almena hay una red descentralizada de service nodes y una blockchain de prueba de trabajo — gestionada por la comunidad, propiedad de nadie. Hoy funciona en una devnet y llega a mainnet en el lanzamiento.",
      ctaPrimary: "Leer la documentación",
      ctaSecondary: "Sobre la moneda",
    },
    stats: {
      title: "El protocolo de un vistazo",
      note: "Parámetros de diseño del protocolo — activos hoy en la red de desarrollo.",
      items: [
        { value: "~5s", label: "Tiempo de bloque objetivo" },
        { value: "7", label: "Nodos por swarm de datos" },
        { value: "3 saltos", label: "Rutas de onion routing" },
        { value: "PoW", label: "Consenso BLAKE2b" },
      ],
    },
    what: {
      title: "¿Qué es la Red Almena?",
      text:
        "Almena no tiene servidores centrales. En su lugar, una red global de service nodes independientes almacena datos cifrados y retransmite tráfico enrutado onion, mientras una blockchain de prueba de trabajo mantiene un registro público de qué nodos están en línea y son de confianza. No hay empresa que pueda leer tus datos, tirar la red abajo o dejarte fuera — porque nadie la gestiona en solitario.",
    },
    pillars: {
      title: "Dos daemons, una red",
      subtitle: "Cada nodo de Almena ejecuta dos servicios que cooperan.",
      items: [
        {
          tag: "Service Node",
          title: "Almacena y retransmite datos",
          text: "Los service nodes guardan los datos cifrados hasta que se recogen y retransmiten las peticiones onion salto a salto. Cada cuenta la sirve un swarm determinista de siete nodos, así los datos se replican y siguen disponibles aunque algunos nodos se caigan.",
          points: [
            "Almacenamiento cifrado con expiración (TTL)",
            "Relay de onion routing (ningún nodo ve los dos extremos)",
            "Replicación en swarm de 7 nodos",
          ],
        },
        {
          tag: "Blockchain Node",
          title: "Mantiene la red honesta",
          text: "Una blockchain de prueba de trabajo (BLAKE2b, bloques de ~5 segundos) registra el directorio de service nodes, sus stakes y su tiempo en línea. Los clientes leen este ledger para descubrir en qué nodos confiar — sin directorio central, sin guardián.",
          points: [
            "Consenso proof-of-work, bloques de ~5s",
            "Registro de service nodes on-chain",
            "Staking, recompensas y pruebas de uptime",
          ],
        },
      ],
    },
    rewards: {
      title: "Levanta un nodo, gana recompensas",
      subtitle:
        "Los service nodes son la columna vertebral de la red — y se les paga por ello. Las recompensas se activan en mainnet.",
      items: [
        {
          step: "01",
          title: "Haz staking para registrarte",
          text: "Bloquea el bono de registro on-chain para registrar un service node. Otros también pueden contribuir a tu nodo, con recompensas repartidas según una comisión de operador que tú fijas.",
        },
        {
          step: "02",
          title: "Mantente en línea y demuéstralo",
          text: "Tu nodo envía periódicamente una prueba de uptime firmada a la blockchain. Solo los nodos que están en stake y demostrablemente vivos siguen siendo elegibles para recompensas.",
        },
        {
          step: "03",
          title: "Gana en cada bloque",
          text: "Cada bloque recompensa al minero que lo aseguró y a un service node en stake elegido — así, quienes hacen el trabajo cobran. Mantén tu nodo honesto y en línea, y la red te recompensa.",
        },
      ],
    },
    cta: {
      title: "Forma parte de la red",
      text:
        "El software del nodo ya es código abierto. Lee la documentación, pruébalo contra la devnet y prepárate para almacenar, retransmitir y ganar cuando se lance mainnet.",
      ctaPrimary: "Leer la documentación",
      ctaSecondary: "Sobre la moneda ALMENA",
    },
  },
} as const;

// ── The ALMENA coin (no amounts/values — economics still being designed) ─────
export const coin = {
  en: {
    title: "ALMENA — The coin that powers the network",
    description:
      "ALMENA is the proof-of-work coin behind the Almena Network. It rewards miners and service nodes for keeping the network running. Its economics are being designed; market and rewards go live at mainnet.",
    hero: {
      eyebrow: "The coin",
      title: "The future of privacy is powered by you.",
      subtitle:
        "ALMENA is the coin behind the tech — the proof-of-work currency that pays the community to store, relay and secure the network. Minting begins at the mainnet launch.",
      ctaPrimary: "Read the docs",
      ctaSecondary: "Explore the network",
    },
    what: {
      title: "What is ALMENA?",
      text:
        "ALMENA is the native coin of the Almena Network's blockchain. It has one job: align incentives so a leaderless network keeps working. Miners secure the chain with proof-of-work, service nodes stake ALMENA to register and stay honest, and both are rewarded in ALMENA for keeping the network alive.",
    },
    cards: {
      title: "The coin behind the tech",
      items: [
        {
          tag: "Rewards",
          title: "Paid to run the network",
          text: "Each block rewards the miner that secured it and an elected service node that stores and relays data. Doing the work that keeps the network alive is what earns coins.",
        },
        {
          tag: "Tokenomics",
          title: "Utility tied to the network",
          text: "ALMENA isn't a coin bolted onto an app — it's the mechanism that makes a people-powered network possible. Staking gates who can run a node; block rewards pay for the storage and relay everyone relies on.",
        },
        {
          tag: "Staking",
          title: "Stake to secure, earn to serve",
          text: "Operators lock a registration bond to run a service node, and contributors can stake alongside them. Staked, provably-online nodes stay eligible for the rewards the network pays out.",
        },
      ],
    },
    flow: {
      title: "How a coin is earned",
      subtitle: "Proof-of-work secures the chain; service nodes keep the network alive. Both get paid.",
      items: [
        {
          step: "01",
          title: "Miners find a block",
          text: "Miners race to solve a BLAKE2b proof-of-work puzzle roughly every few seconds. The winner appends the next block and earns a share of the coins it mints.",
        },
        {
          step: "02",
          title: "A service node is elected",
          text: "For each block, a staked and provably-live service node is selected. It has been storing and relaying encrypted data — and it earns a share of the same block's reward.",
        },
        {
          step: "03",
          title: "The network pays out",
          text: "Fresh coins flow to the people doing the work — miners, service nodes and their stakers. No company takes a cut, because there is no company.",
        },
      ],
    },
    market: {
      title: "Economics go live at mainnet",
      text:
        "We won't show numbers before they're real. ALMENA's economics — supply, rewards, staking — are still being designed, and the coin is not tradable yet. Live figures will appear here once the network launches, and not a moment before.",
      badge: "Being designed · live at launch",
    },
    cta: {
      title: "Be here when ALMENA goes live",
      text:
        "The chain, the pallets and the reward logic are open source today. Read how the coin works, and watch the countdown to the mainnet launch.",
      ctaPrimary: "Read the documentation",
      ctaSecondary: "Follow on GitHub",
    },
  },
  es: {
    title: "ALMENA — La moneda que impulsa la red",
    description:
      "ALMENA es la moneda de prueba de trabajo tras la Red Almena. Recompensa a mineros y service nodes por mantener la red en marcha. Su economía se está diseñando; el mercado y las recompensas se activan en mainnet.",
    hero: {
      eyebrow: "La moneda",
      title: "El futuro de la privacidad lo impulsas tú.",
      subtitle:
        "ALMENA es la moneda tras la tecnología — la divisa de prueba de trabajo que paga a la comunidad por almacenar, retransmitir y proteger la red. La acuñación empieza con el lanzamiento de mainnet.",
      ctaPrimary: "Leer la documentación",
      ctaSecondary: "Explorar la red",
    },
    what: {
      title: "¿Qué es ALMENA?",
      text:
        "ALMENA es la moneda nativa de la blockchain de la Red Almena. Tiene un solo cometido: alinear incentivos para que una red sin líder siga funcionando. Los mineros aseguran la cadena con prueba de trabajo, los service nodes hacen staking de ALMENA para registrarse y mantenerse honestos, y ambos se recompensan en ALMENA por mantener la red viva.",
    },
    cards: {
      title: "La moneda tras la tecnología",
      items: [
        {
          tag: "Recompensas",
          title: "Pagada por sostener la red",
          text: "Cada bloque recompensa al minero que lo aseguró y a un service node elegido que almacena y retransmite datos. Hacer el trabajo que mantiene la red viva es lo que genera monedas.",
        },
        {
          tag: "Tokenomics",
          title: "Utilidad ligada a la red",
          text: "ALMENA no es una moneda pegada a una app — es el mecanismo que hace posible una red impulsada por la gente. El staking regula quién puede levantar un nodo; las recompensas por bloque pagan el almacenamiento y el relay del que todos dependen.",
        },
        {
          tag: "Staking",
          title: "Haz staking para asegurar, sirve para ganar",
          text: "Los operadores bloquean un bono de registro para levantar un service node, y otros pueden hacer staking junto a ellos. Los nodos en stake y demostrablemente en línea siguen siendo elegibles para las recompensas que reparte la red.",
        },
      ],
    },
    flow: {
      title: "Cómo se gana una moneda",
      subtitle: "La prueba de trabajo asegura la cadena; los service nodes mantienen la red viva. Ambos cobran.",
      items: [
        {
          step: "01",
          title: "Los mineros encuentran un bloque",
          text: "Los mineros compiten por resolver un reto de prueba de trabajo BLAKE2b cada pocos segundos. El ganador añade el siguiente bloque y gana una parte de las monedas que acuña.",
        },
        {
          step: "02",
          title: "Se elige un service node",
          text: "En cada bloque se selecciona un service node en stake y demostrablemente vivo. Ha estado almacenando y retransmitiendo datos cifrados — y gana una parte de la recompensa del mismo bloque.",
        },
        {
          step: "03",
          title: "La red reparte",
          text: "Las monedas nuevas van a la gente que hace el trabajo — mineros, service nodes y quienes hacen staking en ellos. Ninguna empresa se lleva una comisión, porque no hay empresa.",
        },
      ],
    },
    market: {
      title: "La economía se activa en mainnet",
      text:
        "No mostraremos cifras antes de que sean reales. La economía de ALMENA — emisión, recompensas, staking — todavía se está diseñando, y la moneda aún no es negociable. Las cifras en vivo aparecerán aquí en cuanto se lance la red, ni un momento antes.",
      badge: "En diseño · activa en el lanzamiento",
    },
    cta: {
      title: "Está aquí cuando ALMENA se active",
      text:
        "La cadena, los pallets y la lógica de recompensas ya son código abierto. Lee cómo funciona la moneda y sigue la cuenta atrás hacia el lanzamiento de mainnet.",
      ctaPrimary: "Leer la documentación",
      ctaSecondary: "Seguir en GitHub",
    },
  },
} as const;
