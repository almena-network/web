// Content model for the Almena Network portal.
//
// Three pages mirror the structure of the real platform:
//   • home    — the Almena messenger (private P2P client)        → "/"        and "/es/"
//   • network — the network that powers it (service nodes + PoW) → "/network/" and "/es/network/"
//   • coin    — the ALMENA coin (consensus / staking token)      → "/coin/"    and "/es/coin/"
//
// The site is PRE-LAUNCH: the private-messenger core and the node network run on a devnet today,
// and mainnet is coming. The whole site is framed around a launch-date countdown. Copy is honest
// about the stage of development — see `roadmap` (what's done / in progress / at launch):
//   - Shipped on devnet: 1:1 E2E messaging, Account IDs, onion routing, groups, disappearing
//     messages, service-node storage + relay + 7-node swarm, PoW BLAKE2b chain, on-chain node
//     registry, staking bond, uptime proofs, block rewards.
//   - In development / testing: live voice & video calls (media relay wired; two-GUI call unverified).
//   - At launch (mainnet): ALMENA market/price and staking-reward economics go live; not tradable yet.

export type Lang = "en" | "es";

// ── Launch config ────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH for the countdown. Replace `date` with the confirmed
// mainnet launch date/time (ISO 8601, UTC). Everything else derives from it.
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
      messenger: "Messenger",
      network: "Network",
      coin: "Coin",
      docs: "Docs",
      github: "GitHub",
      langSwitch: "Español",
    },
    footer: {
      tagline: "A community-built, decentralized private messenger. Launching soon.",
      messenger: "Messenger",
      network: "Network",
      coin: "Coin",
      resources: "Resources",
      docs: "Documentation",
      github: "GitHub",
      email: "develop@almena.network",
      rights: "Open source. No company in the middle.",
    },
  },
  es: {
    nav: {
      messenger: "Mensajería",
      network: "Red",
      coin: "Moneda",
      docs: "Docs",
      github: "GitHub",
      langSwitch: "English",
    },
    footer: {
      tagline: "Un mensajero privado y descentralizado, hecho por la comunidad. Muy pronto.",
      messenger: "Mensajería",
      network: "Red",
      coin: "Moneda",
      resources: "Recursos",
      docs: "Documentación",
      github: "GitHub",
      email: "develop@almena.network",
      rights: "Código abierto. Sin empresa en medio.",
    },
  },
} as const;

export const home = {
  en: {
    title: "Almena — Send messages, not metadata",
    description:
      "Almena is a decentralized, end-to-end encrypted messenger launching soon. No phone numbers, no central server — your messages travel through onion paths over a community-run node network.",
    hero: {
      title: "Send messages, not metadata.",
      subtitle:
        "Almena is a decentralized, end-to-end encrypted messenger. No phone number, no email, no central server — just private conversations that travel through onion paths over a community-run network. Mainnet is almost here.",
      ctaPrimary: "Follow the launch",
      ctaSecondary: "How it works",
    },
    roadmap: {
      title: "Where Almena is today",
      subtitle: "Built in the open, running on a devnet, counting down to mainnet.",
      items: [
        {
          state: "done",
          label: "Live on devnet",
          title: "The private messenger works",
          text: "1:1 end-to-end encrypted chats, Account IDs, onion routing, encrypted groups and disappearing messages all run today on the developer network.",
        },
        {
          state: "done",
          label: "Live on devnet",
          title: "The node network runs",
          text: "Service nodes store and relay messages in 7-node swarms, and a proof-of-work blockchain keeps the on-chain node registry, stakes and uptime proofs.",
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
          title: "ALMENA economics go live",
          text: "Block rewards, the staking-reward pool and the ALMENA coin's market arrive with the mainnet launch. See the Coin page for the design.",
        },
      ],
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
    what: {
      title: "What is Almena?",
      text:
        "Almena is a private messenger that doesn't depend on any company's servers. When you create an account you get a random Account ID — not tied to a phone number or email. Messages are end-to-end encrypted and routed through onion paths, so no one, not even the nodes carrying your traffic, can link who you are to who you talk to.",
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
    networkTeaser: {
      eyebrow: "The network",
      title: "Powered by a community-run network",
      text:
        "Almena has no servers of its own. Your messages are stored and relayed by a decentralized network of service nodes, kept honest by a proof-of-work blockchain. Anyone can run a node, stake into it, and earn rewards for keeping the network alive.",
      cta: "Explore the network",
    },
    coinTeaser: {
      eyebrow: "The coin",
      title: "ALMENA — the future of privacy, powered by you",
      text:
        "The network runs on ALMENA: the proof-of-work coin that rewards miners and service nodes for keeping your messages private and available. Rewards, staking and the coin's market go live at mainnet.",
      cta: "Discover ALMENA",
    },
    community: {
      title: "Privacy is a team effort",
      text:
        "Almena is built in the open by contributors around the world. No vendor lock-in, no paid dependencies. Read every line, run your own node, and help shape a messenger that answers to its users — not a company.",
      ctaPrimary: "Contribute on GitHub",
      ctaSecondary: "Read the docs",
    },
  },
  es: {
    title: "Almena — Envía mensajes, no metadatos",
    description:
      "Almena es un mensajero descentralizado y cifrado de extremo a extremo, muy pronto disponible. Sin números de teléfono, sin servidor central — tus mensajes viajan por rutas onion sobre una red de nodos de la comunidad.",
    hero: {
      title: "Envía mensajes, no metadatos.",
      subtitle:
        "Almena es un mensajero descentralizado y cifrado de extremo a extremo. Sin número de teléfono, sin email, sin servidor central — solo conversaciones privadas que viajan por rutas onion sobre una red comunitaria. La mainnet está a punto de llegar.",
      ctaPrimary: "Sigue el lanzamiento",
      ctaSecondary: "Cómo funciona",
    },
    roadmap: {
      title: "En qué punto está Almena",
      subtitle: "Construido en abierto, funcionando en una devnet, con la cuenta atrás hacia mainnet.",
      items: [
        {
          state: "done",
          label: "Activo en devnet",
          title: "El mensajero privado funciona",
          text: "Chats 1:1 cifrados de extremo a extremo, Account IDs, onion routing, grupos cifrados y mensajes efímeros ya funcionan hoy en la red de desarrollo.",
        },
        {
          state: "done",
          label: "Activo en devnet",
          title: "La red de nodos funciona",
          text: "Los service nodes almacenan y retransmiten mensajes en swarms de 7 nodos, y una blockchain de prueba de trabajo mantiene el registro de nodos, los stakes y las pruebas de uptime on-chain.",
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
          title: "La economía de ALMENA se activa",
          text: "Las recompensas por bloque, el pool de staking y el mercado de la moneda ALMENA llegan con el lanzamiento de mainnet. Consulta la página de la Moneda para ver el diseño.",
        },
      ],
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
    what: {
      title: "¿Qué es Almena?",
      text:
        "Almena es un mensajero privado que no depende de los servidores de ninguna empresa. Al crear una cuenta obtienes un Account ID aleatorio — sin vínculo con un teléfono o un email. Los mensajes se cifran de extremo a extremo y se enrutan por rutas onion, de modo que nadie, ni siquiera los nodos que transportan tu tráfico, puede relacionar quién eres con quién hablas.",
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
          text: "Crea chats grupales con amigos o únete a canales comunitarios. Cada grupo usa el mismo cifrado de extremo a extremo que los chats 1:1 — los miembros se pueden añadir o eliminar en cualquier momento y el historial de mensajes permanece sellado para el conjunto de miembros actual.",
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
    networkTeaser: {
      eyebrow: "La red",
      title: "Impulsado por una red comunitaria",
      text:
        "Almena no tiene servidores propios. Tus mensajes los almacenan y retransmiten una red descentralizada de service nodes, mantenida honesta por una blockchain de prueba de trabajo. Cualquiera puede levantar un nodo, hacer staking en él y ganar recompensas por mantener la red viva.",
      cta: "Explorar la red",
    },
    coinTeaser: {
      eyebrow: "La moneda",
      title: "ALMENA — el futuro de la privacidad lo impulsas tú",
      text:
        "La red funciona con ALMENA: la moneda de prueba de trabajo que recompensa a mineros y service nodes por mantener tus mensajes privados y disponibles. Las recompensas, el staking y el mercado de la moneda se activan en mainnet.",
      cta: "Descubre ALMENA",
    },
    community: {
      title: "La privacidad es cosa de todos",
      text:
        "Almena se construye de forma abierta por contribuidores de todo el mundo. Sin vendor lock-in, sin dependencias de pago. Lee cada línea, levanta tu propio nodo y ayuda a dar forma a un mensajero que responde a sus usuarios — no a una empresa.",
      ctaPrimary: "Contribuir en GitHub",
      ctaSecondary: "Leer la documentación",
    },
  },
} as const;

export const network = {
  en: {
    title: "Almena Network — Powered by you",
    description:
      "The Almena Network is a decentralized mesh of service nodes and a proof-of-work blockchain that store and relay private messages. Run a node, stake into it, and earn rewards for keeping the network alive.",
    hero: {
      eyebrow: "The network",
      title: "Making private messaging possible.",
      subtitle:
        "Behind every Almena message is a decentralized network of service nodes and a proof-of-work blockchain — run by the community, owned by no one. It runs on a devnet today and goes to mainnet at launch.",
      ctaPrimary: "Read the docs",
      ctaSecondary: "About the coin",
    },
    stats: {
      title: "The protocol at a glance",
      note: "Protocol design parameters — live on the developer network today.",
      items: [
        { value: "~5s", label: "Target block time" },
        { value: "50", label: "Coins minted per block" },
        { value: "7", label: "Nodes per message swarm" },
        { value: "PoW", label: "BLAKE2b consensus" },
      ],
    },
    what: {
      title: "What is the Almena Network?",
      text:
        "Almena has no central servers. Instead, a global network of independent service nodes stores encrypted messages and relays onion-routed traffic, while a proof-of-work blockchain keeps a public registry of which nodes are online and trusted. There's no company that can read your messages, take the network down, or shut you out — because no single party runs it.",
    },
    pillars: {
      title: "Two daemons, one network",
      subtitle: "Every Almena node runs two cooperating services.",
      items: [
        {
          tag: "Service Node",
          title: "Stores and relays your messages",
          text: "Service nodes hold encrypted messages until you fetch them and relay onion-routed requests hop by hop. Each account is served by a deterministic swarm of seven nodes, so your messages are replicated and stay available even if some nodes go offline.",
          points: [
            "Encrypted message storage with TTL expiry",
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
          text: "Each block mints 50 ALMENA: half to the miner, half to an elected service node. Keep your node honest and online, and the network pays you back.",
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
      "La Red Almena es una malla descentralizada de service nodes y una blockchain de prueba de trabajo que almacenan y retransmiten mensajes privados. Levanta un nodo, haz staking y gana recompensas por mantener la red viva.",
    hero: {
      eyebrow: "La red",
      title: "Hacemos posible la mensajería privada.",
      subtitle:
        "Detrás de cada mensaje de Almena hay una red descentralizada de service nodes y una blockchain de prueba de trabajo — gestionada por la comunidad, propiedad de nadie. Hoy funciona en una devnet y llega a mainnet en el lanzamiento.",
      ctaPrimary: "Leer la documentación",
      ctaSecondary: "Sobre la moneda",
    },
    stats: {
      title: "El protocolo de un vistazo",
      note: "Parámetros de diseño del protocolo — activos hoy en la red de desarrollo.",
      items: [
        { value: "~5s", label: "Tiempo de bloque objetivo" },
        { value: "50", label: "Monedas por bloque" },
        { value: "7", label: "Nodos por swarm de mensajes" },
        { value: "PoW", label: "Consenso BLAKE2b" },
      ],
    },
    what: {
      title: "¿Qué es la Red Almena?",
      text:
        "Almena no tiene servidores centrales. En su lugar, una red global de service nodes independientes almacena mensajes cifrados y retransmite tráfico enrutado onion, mientras una blockchain de prueba de trabajo mantiene un registro público de qué nodos están en línea y son de confianza. No hay empresa que pueda leer tus mensajes, tirar la red abajo o dejarte fuera — porque nadie la gestiona en solitario.",
    },
    pillars: {
      title: "Dos daemons, una red",
      subtitle: "Cada nodo de Almena ejecuta dos servicios que cooperan.",
      items: [
        {
          tag: "Service Node",
          title: "Almacena y retransmite tus mensajes",
          text: "Los service nodes guardan los mensajes cifrados hasta que los recoges y retransmiten las peticiones onion salto a salto. Cada cuenta la sirve un swarm determinista de siete nodos, así tus mensajes se replican y siguen disponibles aunque algunos nodos se caigan.",
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
          text: "Cada bloque acuña 50 ALMENA: la mitad para el minero, la mitad para un service node elegido. Mantén tu nodo honesto y en línea, y la red te recompensa.",
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

export const coin = {
  en: {
    title: "ALMENA — The coin that powers private messaging",
    description:
      "ALMENA is the proof-of-work coin behind the Almena Network. It rewards miners and service nodes for keeping messages private and available. Market, staking and rewards go live at mainnet.",
    hero: {
      eyebrow: "The coin",
      title: "The future of privacy is powered by you.",
      subtitle:
        "ALMENA is the coin behind the tech — the proof-of-work currency that pays the community to store, relay and secure your messages. Minting begins at the mainnet launch.",
      ctaPrimary: "Read the docs",
      ctaSecondary: "Explore the network",
    },
    what: {
      title: "What is ALMENA?",
      text:
        "ALMENA is the native coin of the Almena Network's blockchain. It has one job: align incentives so a leaderless network keeps working. Miners secure the chain with proof-of-work, service nodes stake ALMENA to register and stay honest, and both are paid in ALMENA every block for keeping your private messages flowing.",
    },
    cards: {
      title: "The coin behind the tech",
      items: [
        {
          tag: "Rewards",
          title: "Paid to keep you private",
          text: "Every block mints 50 ALMENA, split between the miner that secured it and an elected service node that stores and relays messages. Doing the work that protects your privacy is what earns coins.",
        },
        {
          tag: "Tokenomics",
          title: "Utility tied to the network",
          text: "ALMENA isn't a coin bolted onto a chat app — it's the mechanism that makes a people-powered network possible. Staking gates who can run a node; block rewards pay for the storage and relay you rely on.",
        },
        {
          tag: "Staking",
          title: "Stake to secure, earn to serve",
          text: "Operators lock a registration bond to run a service node, and contributors can stake alongside them. Staked, provably-online nodes stay eligible for the rewards the network pays out.",
        },
      ],
    },
    stats: {
      title: "ALMENA at a glance",
      note: "Design parameters, live on the developer network. Final economics are set at mainnet.",
      items: [
        { value: "50", label: "ALMENA minted per block" },
        { value: "50 / 50", label: "Miner / service-node split" },
        { value: "~5s", label: "Block time" },
        { value: "PoW", label: "BLAKE2b, no pre-mine bias" },
      ],
    },
    flow: {
      title: "How a coin is earned",
      subtitle: "Proof-of-work secures the chain; service nodes keep messages alive. Both get paid.",
      items: [
        {
          step: "01",
          title: "Miners find a block",
          text: "Miners race to solve a BLAKE2b proof-of-work puzzle roughly every five seconds. The winner appends the next block and earns half of its freshly minted coins.",
        },
        {
          step: "02",
          title: "A service node is elected",
          text: "For each block, a staked and provably-live service node is selected. It has been storing and relaying encrypted messages — and it earns the other half of the block reward.",
        },
        {
          step: "03",
          title: "The network pays out",
          text: "50 ALMENA per block flow to the people doing the work. No company takes a cut, because there is no company — just miners, nodes and their stakers.",
        },
      ],
    },
    market: {
      title: "Market & rewards go live at mainnet",
      text:
        "We won't fake numbers before they're real. ALMENA is not tradable yet, and the staking-reward pool activates with mainnet. Live price, market cap and reward figures will appear here once the network launches — and not a moment before.",
      badge: "Coming at launch",
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
    title: "ALMENA — La moneda que impulsa la mensajería privada",
    description:
      "ALMENA es la moneda de prueba de trabajo tras la Red Almena. Recompensa a mineros y service nodes por mantener los mensajes privados y disponibles. El mercado, el staking y las recompensas se activan en mainnet.",
    hero: {
      eyebrow: "La moneda",
      title: "El futuro de la privacidad lo impulsas tú.",
      subtitle:
        "ALMENA es la moneda tras la tecnología — la divisa de prueba de trabajo que paga a la comunidad por almacenar, retransmitir y proteger tus mensajes. La acuñación empieza con el lanzamiento de mainnet.",
      ctaPrimary: "Leer la documentación",
      ctaSecondary: "Explorar la red",
    },
    what: {
      title: "¿Qué es ALMENA?",
      text:
        "ALMENA es la moneda nativa de la blockchain de la Red Almena. Tiene un solo cometido: alinear incentivos para que una red sin líder siga funcionando. Los mineros aseguran la cadena con prueba de trabajo, los service nodes hacen staking de ALMENA para registrarse y mantenerse honestos, y ambos cobran en ALMENA en cada bloque por mantener tus mensajes privados en circulación.",
    },
    cards: {
      title: "La moneda tras la tecnología",
      items: [
        {
          tag: "Recompensas",
          title: "Pagada por protegerte",
          text: "Cada bloque acuña 50 ALMENA, repartidas entre el minero que lo aseguró y un service node elegido que almacena y retransmite mensajes. Hacer el trabajo que protege tu privacidad es lo que genera monedas.",
        },
        {
          tag: "Tokenomics",
          title: "Utilidad ligada a la red",
          text: "ALMENA no es una moneda pegada a una app de chat — es el mecanismo que hace posible una red impulsada por la gente. El staking regula quién puede levantar un nodo; las recompensas por bloque pagan el almacenamiento y el relay del que dependes.",
        },
        {
          tag: "Staking",
          title: "Haz staking para asegurar, sirve para ganar",
          text: "Los operadores bloquean un bono de registro para levantar un service node, y otros pueden hacer staking junto a ellos. Los nodos en stake y demostrablemente en línea siguen siendo elegibles para las recompensas que reparte la red.",
        },
      ],
    },
    stats: {
      title: "ALMENA de un vistazo",
      note: "Parámetros de diseño, activos en la red de desarrollo. La economía final se fija en mainnet.",
      items: [
        { value: "50", label: "ALMENA por bloque" },
        { value: "50 / 50", label: "Reparto minero / service node" },
        { value: "~5s", label: "Tiempo de bloque" },
        { value: "PoW", label: "BLAKE2b, sin sesgo de pre-minado" },
      ],
    },
    flow: {
      title: "Cómo se gana una moneda",
      subtitle: "La prueba de trabajo asegura la cadena; los service nodes mantienen los mensajes vivos. Ambos cobran.",
      items: [
        {
          step: "01",
          title: "Los mineros encuentran un bloque",
          text: "Los mineros compiten por resolver un reto de prueba de trabajo BLAKE2b cada cinco segundos aproximadamente. El ganador añade el siguiente bloque y gana la mitad de sus monedas recién acuñadas.",
        },
        {
          step: "02",
          title: "Se elige un service node",
          text: "En cada bloque se selecciona un service node en stake y demostrablemente vivo. Ha estado almacenando y retransmitiendo mensajes cifrados — y gana la otra mitad de la recompensa del bloque.",
        },
        {
          step: "03",
          title: "La red reparte",
          text: "50 ALMENA por bloque van a la gente que hace el trabajo. Ninguna empresa se lleva una comisión, porque no hay empresa — solo mineros, nodos y quienes hacen staking en ellos.",
        },
      ],
    },
    market: {
      title: "El mercado y las recompensas se activan en mainnet",
      text:
        "No vamos a inventar cifras antes de que sean reales. ALMENA todavía no es negociable, y el pool de recompensas de staking se activa con mainnet. El precio, la capitalización y las recompensas en vivo aparecerán aquí en cuanto se lance la red — ni un momento antes.",
      badge: "Disponible en el lanzamiento",
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
