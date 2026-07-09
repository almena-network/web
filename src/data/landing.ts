// Content model for the Almena Network portal.
//
// Priority is THE NETWORK. Almena is a general-purpose decentralized platform; messaging is one
// use case among many (see .cursor/rules/almena-platform-vision.mdc). The site reflects that:
//   • home      — the Almena network / platform            → "/"          and "/es/"
//   • messaging — messaging, one use case on the platform  → "/messaging/" and "/es/messaging/"
//   • network   — the network in depth (nodes, run a node) → "/network/"   and "/es/network/"
//   • veracity  — the transparency log (proving what's true) → "/veracity/" and "/es/veracity/"
//
// Almena is coinless: no coin, no mining, no staking, no rewards. Veracity is
// delivered by a transparency log (append-only Merkle-tree, RFC-6962 style) plus authority-signed
// lists — the same guarantees the removed coin used to provide, without any token.
//
// PRE-LAUNCH: the platform runs on a devnet today; launch is coming (countdown from `launch.date`).
// Copy is honest about the stage of development — see `home.roadmap`.

export type Lang = "en" | "es";

// ── Maturity status vocabulary ───────────────────────────────────────────────
// One honest, shared 3-state model surfaced as inline badges across the site:
//   live    🟢  implemented, tested and running on the devnet today (verifiable)
//   testing 🟡  implemented, being hardened/verified before launch
//   roadmap ⚪  not built yet (or only the substrate exists, not the user-facing product)
// Some features are live in the protocol/backend but have no user-facing UI yet — the
// copy says so explicitly; the badge still reflects whether the capability itself runs.
export type Status = "live" | "testing" | "roadmap";

export const statusLabel: Record<Lang, Record<Status, string>> = {
  en: { live: "Live on devnet", testing: "In testing", roadmap: "Roadmap" },
  es: { live: "Vivo en devnet", testing: "En pruebas", roadmap: "Roadmap" },
} as const;

// ── Launch config ────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH for the countdown. Replace `date` to move the launch.
export const launch = {
  // Confirmed launch: 11 November 2026.
  date: "2026-11-11T12:00:00Z",
  en: {
    badge: "Pre-launch · building in the open",
    countdownTitle: "Almena launches in",
    countdownDone: "Almena is live.",
    units: { days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds" },
  },
  es: {
    badge: "Pre-lanzamiento · construido en abierto",
    countdownTitle: "Almena se lanza en",
    countdownDone: "Almena está activa.",
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
      veracity: "Veracity",
      github: "GitHub",
      langSwitch: "Español",
    },
    footer: {
      tagline: "An open, decentralized platform for many uses. Launching soon.",
      platform: "Platform",
      network: "Network",
      identity: "Identity",
      messaging: "Messaging",
      veracity: "Veracity",
      resources: "Resources",
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
      veracity: "Veracidad",
      github: "GitHub",
      langSwitch: "English",
    },
    footer: {
      tagline: "Una plataforma abierta y descentralizada para muchos usos. Muy pronto.",
      platform: "Plataforma",
      network: "Red",
      identity: "Identidad",
      messaging: "Mensajería",
      veracity: "Veracidad",
      resources: "Recursos",
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
      "Almena is an open, decentralized platform — a community-run network of nodes and a transparency log that can power storage, voting, document signing, traceability, messaging and more. Launch is coming soon.",
    hero: {
      title: "One network. Every use. No middleman.",
      subtitle:
        "Almena is an open, decentralized platform. A community-run network of nodes plus a transparency log that proves what's true — the shared substrate for storage, voting, signing, traceability, private messaging and more. No company owns it, no server can take it down.",
      ctaPrimary: "Follow the launch",
      ctaSecondary: "How the network works",
    },
    roadmap: {
      title: "Where Almena is today",
      subtitle: "Built in the open, running on a devnet, counting down to launch.",
      items: [
        {
          state: "done",
          label: "Live on devnet",
          title: "The node network runs",
          text: "Nodes store and relay data in swarms, and a signed node directory and a transparency log keep the network discoverable and verifiable. The substrate every use case builds on.",
        },
        {
          state: "done",
          label: "Live on devnet",
          title: "The first use works",
          text: "Private messaging — end-to-end encrypted chats, Account IDs, onion routing, encrypted groups and disappearing messages — runs today on the developer network.",
        },
        {
          state: "done",
          label: "Live on devnet",
          title: "Veracity you can verify",
          text: "The transparency log is running today, and the app already verifies proofs against it — inclusion, authorship and witnessed checkpoints. Witnessing across the full swarm and qualified timestamps are still maturing.",
        },
        {
          state: "progress",
          label: "In testing",
          title: "Voice & video calls",
          text: "Encrypted, onion-routed calls over a media relay. The relay and calls are implemented; end-to-end call quality is being hardened before launch. More uses — storage, voting, document signing — follow on the roadmap.",
        },
      ],
    },
    what: {
      title: "What is Almena?",
      text:
        "Almena is a decentralized platform for services that don't depend on any company's servers. It's powered by a community-run network of nodes plus a transparency log that proves what's true — anyone can run a node, and the network keeps working even as individual nodes come and go. Private messaging is the first app to ship; the same network is designed to carry many more.",
    },
    uses: {
      title: "One platform, many uses",
      subtitle:
        "The same network — an open node layer and a transparency log that proves what's true — is built to power many decentralized services. Messaging is the first to ship.",
      note: "Messaging is live on the devnet · identity foundations are running · other uses are on the roadmap",
      items: [
        {
          icon: "chat",
          layer: "Network",
          status: "live",
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
          layer: "Transparency log",
          status: "roadmap",
          title: "Voting & DAOs",
          text: "Tamper-evident voting and collective governance — vote tallies recorded in an append-only log anyone can audit, with no central authority counting the ballots.",
        },
        {
          icon: "sign",
          layer: "Transparency log",
          status: "roadmap",
          title: "Document signing",
          text: "Sign documents and timestamp their hashes in the transparency log: verifiable proof of what existed, and when — proof of existence you can check yourself.",
        },
        {
          icon: "trace",
          layer: "Transparency log",
          status: "roadmap",
          title: "Traceability",
          text: "Chain of custody and supply-chain provenance with an immutable, auditable history from origin to destination.",
        },
        {
          icon: "id",
          layer: "Network + Transparency log",
          status: "testing",
          title: "Identity & credentials",
          text: "The foundations are live: did:almena identities, verifiable credentials and a registry of issuers/verifiers all run today. The in-app wallet is what's still to come.",
          href: "identity",
        },
      ],
    },
    how: {
      title: "How the network works",
      subtitle: "Every Almena node runs a single service — the substrate every use case is built on.",
      cta: "Explore the network in depth",
    },
    veracityTeaser: {
      eyebrow: "Veracity",
      title: "Prove what's true — with no middleman",
      text:
        "Veracity is an append-only transparency log: records can't be altered undetected, each is signed by its author, and anyone can get a short proof a record existed, unchanged, at a known time. Nodes witness each other to keep it honest.",
      cta: "How veracity works",
    },
    community: {
      title: "A network is a team effort",
      text:
        "Almena is built in the open by contributors around the world. No vendor lock-in, no paid dependencies. Read every line, run your own node, and help shape a network that answers to its users — not a company.",
      ctaPrimary: "Contribute on GitHub",
    },
  },
  es: {
    title: "Almena — La plataforma abierta y descentralizada",
    description:
      "Almena es una plataforma abierta y descentralizada — una red comunitaria de nodos y un registro de transparencia capaz de impulsar almacenamiento, votaciones, firma de documentos, trazabilidad, mensajería y más. El lanzamiento llega pronto.",
    hero: {
      title: "Una red. Cada uso. Sin intermediarios.",
      subtitle:
        "Almena es una plataforma abierta y descentralizada. Una red comunitaria de nodos y un registro de transparencia que demuestra qué es verdad — el sustrato compartido para almacenamiento, votaciones, firma, trazabilidad, mensajería privada y más. Nadie la posee, ningún servidor puede tirarla abajo.",
      ctaPrimary: "Sigue el lanzamiento",
      ctaSecondary: "Cómo funciona la red",
    },
    roadmap: {
      title: "En qué punto está Almena",
      subtitle: "Construido en abierto, funcionando en una devnet, con la cuenta atrás hacia el lanzamiento.",
      items: [
        {
          state: "done",
          label: "Activo en devnet",
          title: "La red de nodos funciona",
          text: "Los nodos almacenan y retransmiten datos en swarms, y un directorio de nodos firmado y un registro de transparencia mantienen la red descubrible y verificable. El sustrato sobre el que se construye cada uso.",
        },
        {
          state: "done",
          label: "Activo en devnet",
          title: "El primer uso funciona",
          text: "La mensajería privada — chats cifrados de extremo a extremo, Account IDs, onion routing, grupos cifrados y mensajes efímeros — ya funciona hoy en la red de desarrollo.",
        },
        {
          state: "done",
          label: "Activo en devnet",
          title: "Veracidad que puedes verificar",
          text: "El registro de transparencia ya funciona hoy, y la app verifica pruebas contra él — inclusión, autoría y checkpoints testificados. El testimonio a lo largo de todo el swarm y el sellado de tiempo cualificado aún están madurando.",
        },
        {
          state: "progress",
          label: "En pruebas",
          title: "Llamadas de voz y vídeo",
          text: "Llamadas cifradas y enrutadas onion sobre una capa de media-relay. El relay y las llamadas ya están implementados; ahora endurecemos la calidad de extremo a extremo antes del lanzamiento. Más usos — almacenamiento, votaciones, firma de documentos — llegan en el roadmap.",
        },
      ],
    },
    what: {
      title: "¿Qué es Almena?",
      text:
        "Almena es una plataforma descentralizada para servicios que no dependen de los servidores de ninguna empresa. La impulsan una red comunitaria de nodos y un registro de transparencia que demuestra qué es verdad — cualquiera puede levantar un nodo, y la red sigue funcionando aunque nodos concretos entren y salgan. La mensajería privada es la primera app en llegar; la misma red está diseñada para llevar muchas más.",
    },
    uses: {
      title: "Una plataforma, muchos usos",
      subtitle:
        "La misma red — una capa de nodos abierta y un registro de transparencia que demuestra qué es verdad — está hecha para impulsar muchos servicios descentralizados. La mensajería es el primero en llegar.",
      note: "La mensajería ya funciona en la devnet · los cimientos de identidad están corriendo · el resto de usos están en el roadmap",
      items: [
        {
          icon: "chat",
          layer: "Red",
          status: "live",
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
          layer: "Transparency log",
          status: "roadmap",
          title: "Votaciones y DAOs",
          text: "Votaciones a prueba de manipulación y gobernanza colectiva — recuentos registrados en un log de solo-añadir que cualquiera puede auditar, sin autoridad central escrutando.",
        },
        {
          icon: "sign",
          layer: "Transparency log",
          status: "roadmap",
          title: "Firma de documentos",
          text: "Firma documentos y sella sus hashes en el registro de transparencia: prueba verificable de qué existía, y cuándo — prueba de existencia que puedes comprobar tú mismo.",
        },
        {
          icon: "trace",
          layer: "Transparency log",
          status: "roadmap",
          title: "Trazabilidad",
          text: "Cadena de custodia y procedencia de suministro con un historial inmutable y auditable, del origen al destino.",
        },
        {
          icon: "id",
          layer: "Red + Transparency log",
          status: "testing",
          title: "Identidad y credenciales",
          text: "Los cimientos ya funcionan: identidades did:almena, credenciales verificables y un registry de emisores/verificadores corren hoy. La cartera dentro de la app es lo que aún falta.",
          href: "identity",
        },
      ],
    },
    how: {
      title: "Cómo funciona la red",
      subtitle: "Cada nodo de Almena ejecuta un único servicio — el sustrato sobre el que se construye cada uso.",
      cta: "Explora la red en detalle",
    },
    veracityTeaser: {
      eyebrow: "Veracidad",
      title: "Demuestra qué es verdad — sin intermediarios",
      text:
        "La veracidad es un registro de transparencia de solo-añadir: los registros no pueden alterarse sin dejar rastro, cada uno lo firma su autor y cualquiera puede obtener una prueba corta de que un registro existió, sin cambios, en un momento conocido. Los nodos se testifican entre sí para mantenerlo honesto.",
      cta: "Cómo funciona la veracidad",
    },
    community: {
      title: "Una red es cosa de todos",
      text:
        "Almena se construye de forma abierta por contribuidores de todo el mundo. Sin vendor lock-in, sin dependencias de pago. Lee cada línea, levanta tu propio nodo y ayuda a dar forma a una red que responde a sus usuarios — no a una empresa.",
      ctaPrimary: "Contribuir en GitHub",
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
        "Today a handful of companies own your login and decide what you can prove and to whom. Self-sovereign identity (SSI) flips that: credentials are issued to you, held by you, and checked by anyone — with a shared, tamper-evident source of trust instead of a central identity provider. Almena anchors that trust in a public transparency log and hands the data back to you.",
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
      "Almena anchors the trust — a signed issuer list and transparency-log revocation — so no central identity provider can track, gate or deplatform you.",
    diagram: {
      issuer: "Issuer",
      holder: "Holder",
      verifier: "Verifier",
      issues: "issues credential",
      presents: "presents proof",
      trusts: "trusts (signed issuer list)",
    },
    disclosure: {
      tag: "Minimal disclosure",
      title: "Prove it. Don't reveal it.",
      text: "Almena's credentials use selective disclosure (SD-JWT): you present only the claims each interaction needs and drop the rest, with the issuer's signature still intact. On the roadmap, zero-knowledge proofs go further — proving a fact like \"over 18\" is true without revealing any underlying claim at all.",
      roadmapNote: "Selective disclosure is live today · full zero-knowledge proofs are on the roadmap",
      points: [
        "Reveal only the claims you choose",
        "Prove you hold a credential — not the whole document",
        "The issuer's signature stays valid on what you share",
      ],
    },
    capabilities: {
      title: "What you can do with Almena Identity",
      items: [
        {
          status: "live",
          title: "Self-sovereign identity (DID/SSI)",
          text: "A portable did:almena identity you control — not a login owned by a platform that can lock you out. Live in the protocol today.",
        },
        {
          status: "live",
          title: "Verifiable credentials",
          text: "Diplomas, certifications, licenses, work history — SD-JWT credentials, cryptographically signed and instantly checkable. Implemented and tested.",
        },
        {
          status: "roadmap",
          title: "Reusable KYC",
          text: "Verify once, reuse across services — without repeating the process or resharing documents each time.",
        },
        {
          status: "live",
          title: "Minimal disclosure",
          text: "Share only the claims each interaction needs, and nothing else about you — via SD-JWT selective disclosure.",
        },
        {
          status: "testing",
          title: "Revocation you can see",
          text: "Issuers can revoke a credential — but only on a public transparency log, never silently. The registry that records it runs today.",
        },
        {
          status: "live",
          title: "No identity provider",
          text: "No third-party login in the middle that can profile you, gate access, or deplatform you.",
        },
      ],
    },
    registry: {
      tag: "Live on devnet",
      title: "The issuer & verifier registry is running",
      text:
        "Who counts as a recognized issuer or verifier lives in a network-backed registry — a thin console with no private database, whose state is a stream of signed records in the transparency log. Admins sign in by scanning a QR with their Almena app (DID-Auth), and every record is re-verified locally before it's trusted. It runs on the devnet today.",
      points: [
        "Sign in with your DID — no passwords, no accounts",
        "No private database: state lives in the transparency log",
        "Every record re-verified locally, never taken on trust",
      ],
    },
    layer: {
      title: "Where identity lives on Almena",
      text:
        "Identity spans two roles of the network. The transparency log anchors issuer trust and revocation, tamper-evident and public; the network layer stores and moves credentials privately. You keep the credentials themselves.",
    },
    roadmap: {
      label: "Foundations live · wallet coming",
      text: "The foundations already run on the devnet: did:almena identities, SD-JWT verifiable credentials, and the issuer/verifier registry. What's still to come is the in-app credential wallet that puts all of it in your hands — that's the launch-and-beyond work.",
    },
    cta: {
      title: "Identity you actually own, soon on Almena",
      text: "The network that anchors it is open source and running on a devnet today. Follow the countdown to launch, and read how the layers beneath identity work.",
      ctaPrimary: "Follow on GitHub",
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
        "Hoy un puñado de empresas son dueñas de tu login y deciden qué puedes demostrar y ante quién. La identidad soberana (SSI) le da la vuelta: las credenciales se te emiten a ti, las custodias tú y las verifica cualquiera — con una fuente de confianza compartida y a prueba de manipulación, en vez de un proveedor de identidad central. Almena ancla esa confianza en un registro de transparencia público y te devuelve el control del dato.",
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
      "Almena ancla la confianza — una lista de emisores firmada y la revocación en el registro de transparencia — así que ningún proveedor de identidad central puede rastrearte, bloquearte o expulsarte.",
    diagram: {
      issuer: "Emisor",
      holder: "Titular",
      verifier: "Verificador",
      issues: "emite credencial",
      presents: "presenta prueba",
      trusts: "confía (lista de emisores firmada)",
    },
    disclosure: {
      tag: "Divulgación mínima",
      title: "Demuéstralo. No lo reveles.",
      text: "Las credenciales de Almena usan divulgación selectiva (SD-JWT): presentas solo los claims que cada interacción necesita y omites el resto, con la firma del emisor intacta. En el roadmap, las pruebas de conocimiento cero van más allá — demostrar un hecho como \"mayor de 18\" sin revelar ningún dato subyacente.",
      roadmapNote: "La divulgación selectiva ya funciona hoy · las pruebas de conocimiento cero completas están en el roadmap",
      points: [
        "Revela solo los claims que elijas",
        "Demuestra que posees una credencial — no el documento entero",
        "La firma del emisor sigue válida sobre lo que compartes",
      ],
    },
    capabilities: {
      title: "Qué puedes hacer con Almena Identidad",
      items: [
        {
          status: "live",
          title: "Identidad soberana (DID/SSI)",
          text: "Una identidad did:almena portable que controlas tú — no un login propiedad de una plataforma que puede dejarte fuera. Ya viva en el protocolo.",
        },
        {
          status: "live",
          title: "Credenciales verificables",
          text: "Títulos, certificaciones, licencias, historial laboral — credenciales SD-JWT firmadas criptográficamente y comprobables al instante. Implementadas y testeadas.",
        },
        {
          status: "roadmap",
          title: "KYC reutilizable",
          text: "Verifícate una vez, reutilízalo entre servicios — sin repetir el proceso ni reenviar documentos cada vez.",
        },
        {
          status: "live",
          title: "Divulgación mínima",
          text: "Comparte solo los claims que cada interacción necesita, y nada más sobre ti — mediante divulgación selectiva SD-JWT.",
        },
        {
          status: "testing",
          title: "Revocación que puedes ver",
          text: "Los emisores pueden revocar una credencial — pero solo en un registro de transparencia público, nunca en silencio. El registry que lo anota ya funciona hoy.",
        },
        {
          status: "live",
          title: "Sin proveedor de identidad",
          text: "Ningún login de terceros en medio que pueda perfilarte, restringir tu acceso o expulsarte.",
        },
      ],
    },
    registry: {
      tag: "Vivo en devnet",
      title: "El registry de emisores y verificadores ya funciona",
      text:
        "Quién cuenta como emisor o verificador reconocido vive en un registry respaldado por la red — una consola fina, sin base de datos privada, cuyo estado es un flujo de registros firmados en el registro de transparencia. Los administradores entran escaneando un QR con su app de Almena (DID-Auth), y cada registro se re-verifica en local antes de darlo por bueno. Corre en la devnet hoy.",
      points: [
        "Entra con tu DID — sin contraseñas, sin cuentas",
        "Sin base de datos privada: el estado vive en el registro de transparencia",
        "Cada registro re-verificado en local, nunca por confianza",
      ],
    },
    layer: {
      title: "Dónde vive la identidad en Almena",
      text:
        "La identidad abarca dos funciones de la red. El registro de transparencia ancla la confianza en los emisores y la revocación, a prueba de manipulación y público; la capa de red almacena y mueve las credenciales de forma privada. Las credenciales, las guardas tú.",
    },
    roadmap: {
      label: "Cimientos vivos · cartera en camino",
      text: "Los cimientos ya corren en la devnet: identidades did:almena, credenciales verificables SD-JWT y el registry de emisores/verificadores. Lo que aún falta es la cartera de credenciales dentro de la app que lo pone todo en tus manos — ese es el trabajo del lanzamiento en adelante.",
    },
    cta: {
      title: "Una identidad que de verdad es tuya, pronto en Almena",
      text: "La red que la ancla es código abierto y funciona hoy en una devnet. Sigue la cuenta atrás hacia el lanzamiento y lee cómo funcionan las capas bajo la identidad.",
      ctaPrimary: "Seguir en GitHub",
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
          status: "live",
          title: "Private by design",
          text: "Sign up with no personal data. Almena generates an Account ID and a 12-word recovery phrase — that's your identity. There's no directory, no profile to mine, and nothing for an attacker to leak.",
          points: ["No phone number or email", "Random Account ID (05…)", "12-word recovery phrase"],
        },
        {
          tag: "Anonymity",
          status: "live",
          title: "Hidden by onion routing",
          text: "Instead of connecting straight to a server, Almena builds an encrypted three-hop path through the node network for every message. Your IP address stays hidden from the people you talk to and from the network itself.",
          points: ["Three-hop onion paths", "Your IP stays private", "No node sees both ends"],
        },
        {
          tag: "Control",
          status: "live",
          title: "Yours, on every device",
          text: "Your account, conversations and contacts sync across your devices through your own encrypted swarm — no cloud account required. Restore everything on a new device from your recovery phrase. Set a disappearing-message timer on any conversation and messages delete themselves from all devices automatically.",
          points: ["Multi-device sync", "Restore from recovery phrase", "Disappearing messages"],
        },
        {
          tag: "Groups",
          status: "live",
          title: "Private groups & public channels",
          text: "Private group chats use the same end-to-end encryption as 1:1 chats — members can be added or removed and history stays sealed to the current member set. Community channels are a different thing: open, joinable public rooms, so — like any public space — they are not end-to-end encrypted.",
          points: ["End-to-end encrypted private groups", "Add or remove members", "Open community channels (public, not E2E)"],
        },
        {
          tag: "Calls · in testing",
          status: "testing",
          title: "Voice & video calls, no phone number",
          text: "Make and receive encrypted calls using only your Account ID. No SIM card, no carrier — calls route through a media relay that keeps your IP and identity private. Calls and the relay are implemented; we're hardening end-to-end quality ahead of launch.",
          points: ["Encrypted voice & video", "No phone number needed", "Relay keeps your IP private"],
        },
      ],
    },
    cta: {
      title: "Private messaging, launching soon",
      text:
        "The client, the nodes and the protocol are open source today. Follow the countdown to launch — and read how the network beneath it works.",
      ctaPrimary: "Follow on GitHub",
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
          status: "live",
          title: "Privado por diseño",
          text: "Regístrate sin datos personales. Almena genera un Account ID y una frase de recuperación de 12 palabras — esa es tu identidad. No hay directorio, ni perfil que explotar, ni nada que un atacante pueda filtrar.",
          points: ["Sin teléfono ni email", "Account ID aleatorio (05…)", "Frase de recuperación de 12 palabras"],
        },
        {
          tag: "Anonimato",
          status: "live",
          title: "Oculto por onion routing",
          text: "En vez de conectarte directo a un servidor, Almena construye una ruta cifrada de tres saltos por la red de nodos para cada mensaje. Tu dirección IP queda oculta para quien hablas y para la propia red.",
          points: ["Rutas onion de tres saltos", "Tu IP permanece privada", "Ningún nodo ve los dos extremos"],
        },
        {
          tag: "Control",
          status: "live",
          title: "Tuyo, en cada dispositivo",
          text: "Tu cuenta, conversaciones y contactos se sincronizan entre tus dispositivos a través de tu propio swarm cifrado — sin cuenta en la nube. Restaura todo en un dispositivo nuevo con tu frase de recuperación. Activa un temporizador de mensajes efímeros en cualquier conversación y los mensajes se eliminan solos de todos los dispositivos.",
          points: ["Sincronización multi-dispositivo", "Restaurar con la frase de recuperación", "Mensajes efímeros"],
        },
        {
          tag: "Grupos",
          status: "live",
          title: "Grupos privados y canales públicos",
          text: "Los grupos privados usan el mismo cifrado de extremo a extremo que los chats 1:1 — los miembros se pueden añadir o eliminar y el historial permanece sellado para el conjunto de miembros actual. Los canales comunitarios son otra cosa: salas públicas abiertas a las que cualquiera se une, así que — como cualquier espacio público — no son de extremo a extremo.",
          points: ["Grupos privados cifrados de extremo a extremo", "Añadir o eliminar miembros", "Canales comunitarios abiertos (públicos, no E2E)"],
        },
        {
          tag: "Llamadas · en pruebas",
          status: "testing",
          title: "Llamadas de voz y vídeo, sin número de teléfono",
          text: "Haz y recibe llamadas cifradas usando solo tu Account ID. Sin tarjeta SIM, sin operadora — las llamadas se enrutan por una capa de media-relay que mantiene tu IP y tu identidad privadas. Las llamadas y el relay ya están implementados; ahora endurecemos la calidad de extremo a extremo de cara al lanzamiento.",
          points: ["Voz y vídeo cifrados", "Sin número de teléfono", "El relay mantiene tu IP privada"],
        },
      ],
    },
    cta: {
      title: "Mensajería privada, muy pronto",
      text:
        "El cliente, los nodos y el protocolo ya son código abierto. Sigue la cuenta atrás hacia el lanzamiento — y lee cómo funciona la red que hay debajo.",
      ctaPrimary: "Seguir en GitHub",
    },
  },
} as const;

// ── Network in depth (nodes, run a node) ─────────────────────────────────────
export const network = {
  en: {
    title: "Almena Network — Powered by you",
    description:
      "The Almena Network is a decentralized mesh of nodes plus a transparency log. Run a node, keep data available, and witness the network so the log stays tamper-evident.",
    hero: {
      eyebrow: "The network",
      title: "The substrate for a decentralized world.",
      subtitle:
        "Behind every Almena use case is a decentralized mesh of nodes plus a transparency log that proves what's true — run by the community, owned by no one. It runs on a devnet today and goes live at launch.",
      ctaPrimary: "Follow the launch",
      ctaSecondary: "How veracity works",
    },
    stats: {
      title: "The protocol at a glance",
      note: "Protocol design parameters — live on the developer network today.",
      items: [
        { value: "BLAKE2b", label: "Merkle-log hashing" },
        { value: "7", label: "Nodes per data swarm" },
        { value: "3-hop", label: "Onion routing paths" },
        { value: "Ed25519", label: "Signed checkpoints" },
      ],
    },
    what: {
      title: "What is the Almena Network?",
      text:
        "Almena has no central servers. Instead, a global network of independent nodes stores encrypted data and relays onion-routed traffic, while a signed directory and a transparency log keep the network discoverable and verifiable. There's no company that can read your data, take the network down, or shut you out — because no single party runs it.",
    },
    pillars: {
      title: "One daemon, one network",
      subtitle: "Every Almena node runs a single service with two responsibilities.",
      items: [
        {
          tag: "Store & relay",
          title: "Stores and relays data",
          text: "Nodes hold encrypted data until it's fetched and relay onion-routed requests hop by hop. Each account is served by a deterministic swarm of seven nodes, so data is replicated and stays available even if some nodes go offline.",
          points: [
            "Encrypted storage with TTL expiry",
            "Onion routing relay (no node sees both ends)",
            "7-node swarm replication for availability",
          ],
        },
        {
          tag: "Prove & witness",
          title: "Proves the network honest",
          text: "An authority-signed directory says which nodes exist and where, verified against a key pinned in the client. An append-only transparency log records content hashes so nothing can be altered undetected, and nodes witness each other by co-signing the log's head.",
          points: [
            "Signed node directory (pinned key)",
            "Append-only transparency log (Merkle tree)",
            "Co-signed checkpoints, inclusion & consistency proofs",
          ],
        },
      ],
    },
    rewards: {
      title: "Run a node, strengthen the network",
      subtitle:
        "Nodes are the backbone of the network. Running one is a volunteer, community act — no coin, no stake, no mining.",
      items: [
        {
          step: "01",
          title: "Get listed",
          text: "Request inclusion in the signed node directory — no stake, no bond. Once listed, clients verify your node against the pinned directory key and start routing to it.",
        },
        {
          step: "02",
          title: "Serve and stay online",
          text: "Store encrypted data, relay onion-routed traffic, and keep your copy of the transparency log. The more reliable nodes there are, the stronger and more resilient the network.",
        },
        {
          step: "03",
          title: "Witness the network",
          text: "Co-sign other nodes' checkpoints so the transparency log stays tamper-evident. Mutual witnessing is what lets anyone prove a record existed, unchanged — no central authority required.",
        },
      ],
    },
    cta: {
      title: "Become part of the network",
      text:
        "The node software is open source today. Read the code, run it against the devnet, and be ready to store, relay and witness when Almena launches.",
      ctaPrimary: "Contribute on GitHub",
      ctaSecondary: "How veracity works",
    },
  },
  es: {
    title: "Almena Network — Impulsada por ti",
    description:
      "La Red Almena es una malla descentralizada de nodos más un registro de transparencia. Levanta un nodo, mantén los datos disponibles y testifica la red para que el log siga a prueba de manipulación.",
    hero: {
      eyebrow: "La red",
      title: "El sustrato para un mundo descentralizado.",
      subtitle:
        "Detrás de cada uso de Almena hay una malla descentralizada de nodos más un registro de transparencia que demuestra qué es verdad — gestionada por la comunidad, propiedad de nadie. Hoy funciona en una devnet y se activa en el lanzamiento.",
      ctaPrimary: "Sigue el lanzamiento",
      ctaSecondary: "Cómo funciona la veracidad",
    },
    stats: {
      title: "El protocolo de un vistazo",
      note: "Parámetros de diseño del protocolo — activos hoy en la red de desarrollo.",
      items: [
        { value: "BLAKE2b", label: "Hashing del Merkle-log" },
        { value: "7", label: "Nodos por swarm de datos" },
        { value: "3 saltos", label: "Rutas de onion routing" },
        { value: "Ed25519", label: "Checkpoints firmados" },
      ],
    },
    what: {
      title: "¿Qué es la Red Almena?",
      text:
        "Almena no tiene servidores centrales. En su lugar, una red global de nodos independientes almacena datos cifrados y retransmite tráfico enrutado onion, mientras un directorio firmado y un registro de transparencia mantienen la red descubrible y verificable. No hay empresa que pueda leer tus datos, tirar la red abajo o dejarte fuera — porque nadie la gestiona en solitario.",
    },
    pillars: {
      title: "Un daemon, una red",
      subtitle: "Cada nodo de Almena ejecuta un único servicio con dos responsabilidades.",
      items: [
        {
          tag: "Almacena y retransmite",
          title: "Almacena y retransmite datos",
          text: "Los nodos guardan los datos cifrados hasta que se recogen y retransmiten las peticiones onion salto a salto. Cada cuenta la sirve un swarm determinista de siete nodos, así los datos se replican y siguen disponibles aunque algunos nodos se caigan.",
          points: [
            "Almacenamiento cifrado con expiración (TTL)",
            "Relay de onion routing (ningún nodo ve los dos extremos)",
            "Replicación en swarm de 7 nodos",
          ],
        },
        {
          tag: "Demuestra y testifica",
          title: "Demuestra que la red es honesta",
          text: "Un directorio firmado por una autoridad dice qué nodos existen y dónde, verificado contra una clave fijada en el cliente. Un registro de transparencia de solo-añadir guarda hashes de contenido para que nada se altere sin dejar rastro, y los nodos se testifican entre sí co-firmando la cabecera del log.",
          points: [
            "Directorio de nodos firmado (clave fijada)",
            "Registro de transparencia de solo-añadir (árbol de Merkle)",
            "Checkpoints co-firmados, pruebas de inclusión y consistencia",
          ],
        },
      ],
    },
    rewards: {
      title: "Levanta un nodo, refuerza la red",
      subtitle:
        "Los nodos son la columna vertebral de la red. Levantar uno es un acto voluntario y comunitario — sin moneda, sin staking, sin minería.",
      items: [
        {
          step: "01",
          title: "Aparece en el directorio",
          text: "Solicita tu inclusión en el directorio de nodos firmado — sin staking, sin bono. Una vez listado, los clientes verifican tu nodo contra la clave fijada del directorio y empiezan a enrutar hacia él.",
        },
        {
          step: "02",
          title: "Sirve y mantente en línea",
          text: "Almacena datos cifrados, retransmite tráfico enrutado onion y mantén tu copia del registro de transparencia. Cuantos más nodos fiables haya, más fuerte y resiliente es la red.",
        },
        {
          step: "03",
          title: "Testifica la red",
          text: "Co-firma los checkpoints de otros nodos para que el registro de transparencia siga a prueba de manipulación. El testimonio mutuo es lo que permite a cualquiera demostrar que un registro existió, sin cambios — sin autoridad central.",
        },
      ],
    },
    cta: {
      title: "Forma parte de la red",
      text:
        "El software del nodo ya es código abierto. Lee el código, pruébalo contra la devnet y prepárate para almacenar, retransmitir y testificar cuando se lance Almena.",
      ctaPrimary: "Contribuir en GitHub",
      ctaSecondary: "Cómo funciona la veracidad",
    },
  },
} as const;

// ── Veracity = the transparency log (coinless: no coin, no rewards) ─
export const veracity = {
  en: {
    title: "Veracity — Prove what's true, no middleman",
    description:
      "Veracity is Almena's transparency log: an append-only, tamper-evident record that proves integrity, authorship and proof of existence — verified by the network's own nodes, with no coin.",
    hero: {
      eyebrow: "Veracity",
      title: "Prove what's true. No middleman.",
      subtitle:
        "Veracity is an append-only transparency log — a public, tamper-evident record that proves a piece of data existed, unchanged, at a known time, and who signed it. No coin, no gatekeeper: the network's own nodes witness each other to keep it honest.",
      ctaPrimary: "Follow the launch",
      ctaSecondary: "Explore the network",
    },
    what: {
      title: "What is the transparency log?",
      text:
        "The transparency log is an append-only, Merkle-tree record in the spirit of Certificate Transparency (RFC 6962). Each entry is a signed content hash; once added, it can't be altered or removed without every honest node noticing. Nodes co-sign the log's head — a checkpoint — so anyone can get a short proof that a record was included and that the log has only ever grown. Only hashes go in the log; the data itself stays in the content-addressed store, so it can still be erased.",
    },
    cards: {
      title: "What veracity proves",
      items: [
        {
          tag: "Integrity",
          title: "Records can't be altered undetected",
          text: "Every entry is a leaf in an append-only Merkle tree. Change one record and the tree's hashes no longer line up — so tampering is caught by anyone who checks, without trusting a central party.",
        },
        {
          tag: "Authorship",
          title: "Signed by its author",
          text: "Each record carries a signature from its author's publishing key. You can verify who stood behind a record — a credential, a vote tally, a document hash — not just that it exists.",
        },
        {
          tag: "Proof of existence",
          title: "Existed, unchanged, at a known time",
          text: "Ask the log for a short inclusion proof and you can show a record was present, exactly as-is, at a given checkpoint — proof of existence anyone can re-check, forever.",
        },
      ],
    },
    flow: {
      title: "How a record is proven",
      subtitle: "Append a signed leaf, let the network witness it, and anyone can verify with a short proof.",
      items: [
        {
          step: "01",
          title: "Append a signed leaf",
          text: "An author hashes their record, signs it with their publishing key, and appends the leaf to the transparency log. The blob stays in the content-addressed store — only the hash goes in.",
        },
        {
          step: "02",
          title: "Nodes witness the head",
          text: "Nodes co-sign the log's new head — a checkpoint. Because independent nodes witness each other, no single operator can rewrite history or hide an entry.",
        },
        {
          step: "03",
          title: "Anyone verifies with a proof",
          text: "Later, anyone can request a short inclusion proof against a checkpoint and confirm the record existed, unchanged, at that time — without downloading the whole log or trusting a server.",
        },
      ],
    },
    market: {
      title: "Maturing on devnet · hardening for launch",
      text:
        "The transparency log runs on the developer network today, and we're being honest about what's still in progress: witnessing across the full swarm and an eIDAS-grade qualified-timestamp layer are still being built. What's here is real; the rest lands as it's ready, not before.",
      badge: "Maturing on devnet · hardening for launch",
    },
    cta: {
      title: "Verifiable by anyone, soon on Almena",
      text:
        "The log, the checkpoints and the verification tools are open source today. Read how veracity works, and watch the countdown to launch.",
      ctaPrimary: "Follow on GitHub",
    },
  },
  es: {
    title: "Veracidad — Demuestra qué es verdad, sin intermediarios",
    description:
      "La veracidad es el registro de transparencia de Almena: un historial de solo-añadir y a prueba de manipulación que demuestra integridad, autoría y prueba de existencia — verificado por los propios nodos de la red, sin moneda.",
    hero: {
      eyebrow: "Veracidad",
      title: "Demuestra qué es verdad. Sin intermediarios.",
      subtitle:
        "La veracidad es un registro de transparencia de solo-añadir — un historial público y a prueba de manipulación que demuestra que un dato existió, sin cambios, en un momento conocido, y quién lo firmó. Sin moneda, sin guardián: los propios nodos de la red se testifican entre sí para mantenerlo honesto.",
      ctaPrimary: "Sigue el lanzamiento",
      ctaSecondary: "Explorar la red",
    },
    what: {
      title: "¿Qué es el registro de transparencia?",
      text:
        "El registro de transparencia es un historial de solo-añadir, en árbol de Merkle, en el espíritu de Certificate Transparency (RFC 6962). Cada entrada es un hash de contenido firmado; una vez añadida, no puede alterarse ni eliminarse sin que todos los nodos honestos lo noten. Los nodos co-firman la cabecera del log — un checkpoint — para que cualquiera pueda obtener una prueba corta de que un registro se incluyó y de que el log solo ha crecido. En el log solo van hashes; el dato en sí permanece en el almacén direccionable por contenido, así que aún puede borrarse.",
    },
    cards: {
      title: "Qué demuestra la veracidad",
      items: [
        {
          tag: "Integridad",
          title: "Los registros no se alteran sin dejar rastro",
          text: "Cada entrada es una hoja de un árbol de Merkle de solo-añadir. Cambia un registro y los hashes del árbol dejan de cuadrar — así, cualquiera que lo comprueba detecta la manipulación, sin confiar en una parte central.",
        },
        {
          tag: "Autoría",
          title: "Firmado por su autor",
          text: "Cada registro lleva la firma de la clave de publicación de su autor. Puedes verificar quién respalda un registro — una credencial, un recuento de votos, el hash de un documento — no solo que existe.",
        },
        {
          tag: "Prueba de existencia",
          title: "Existió, sin cambios, en un momento conocido",
          text: "Pide al log una prueba de inclusión corta y podrás demostrar que un registro estaba presente, tal cual, en un checkpoint dado — una prueba de existencia que cualquiera puede volver a comprobar, para siempre.",
        },
      ],
    },
    flow: {
      title: "Cómo se demuestra un registro",
      subtitle: "Añade una hoja firmada, deja que la red la testifique y cualquiera podrá verificar con una prueba corta.",
      items: [
        {
          step: "01",
          title: "Añade una hoja firmada",
          text: "Un autor calcula el hash de su registro, lo firma con su clave de publicación y añade la hoja al registro de transparencia. El blob permanece en el almacén direccionable por contenido — solo entra el hash.",
        },
        {
          step: "02",
          title: "Los nodos testifican la cabecera",
          text: "Los nodos co-firman la nueva cabecera del log — un checkpoint. Como nodos independientes se testifican entre sí, ningún operador puede reescribir la historia ni ocultar una entrada.",
        },
        {
          step: "03",
          title: "Cualquiera verifica con una prueba",
          text: "Más tarde, cualquiera puede pedir una prueba de inclusión corta contra un checkpoint y confirmar que el registro existió, sin cambios, en ese momento — sin descargar todo el log ni confiar en un servidor.",
        },
      ],
    },
    market: {
      title: "Madurando en devnet · afinando para el lanzamiento",
      text:
        "El registro de transparencia ya funciona en la red de desarrollo, y somos honestos sobre lo que sigue en marcha: el testimonio a lo largo de todo el swarm y una capa de sellado de tiempo cualificado eIDAS todavía se están construyendo. Lo que hay es real; el resto llega cuando esté listo, no antes.",
      badge: "Madurando en devnet · afinando para el lanzamiento",
    },
    cta: {
      title: "Verificable por cualquiera, pronto en Almena",
      text:
        "El log, los checkpoints y las herramientas de verificación ya son código abierto. Lee cómo funciona la veracidad y sigue la cuenta atrás hacia el lanzamiento.",
      ctaPrimary: "Seguir en GitHub",
    },
  },
} as const;
