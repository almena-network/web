// Content model for the Almena Network portal.
//
// Two pages mirror the structure of the real platform:
//   • home    — the Almena messenger (private P2P client)        → "/"        and "/es/"
//   • network — the network that powers it (service nodes + PoW) → "/network/" and "/es/network/"
//
// Every claim here is grounded in the shipped code (client/ and node/):
//   - 1:1 end-to-end encrypted messaging, Account IDs (05…), onion routing, no central server.
//   - Service Node: encrypted message storage + onion relay + 7-node swarm replication.
//   - Blockchain Node: proof-of-work (BLAKE2b), ~5s blocks, on-chain staking and rewards.

export type Lang = "en" | "es";

export const site = {
  en: {
    nav: {
      messenger: "Messenger",
      network: "Network",
      features: "Features",
      docs: "Docs",
      github: "GitHub",
      download: "Download",
      langSwitch: "Español",
    },
    footer: {
      tagline: "A community-built, decentralized private messenger.",
      messenger: "Messenger",
      network: "Network",
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
      features: "Características",
      docs: "Docs",
      github: "GitHub",
      download: "Descargar",
      langSwitch: "English",
    },
    footer: {
      tagline: "Un mensajero privado y descentralizado, hecho por la comunidad.",
      messenger: "Mensajería",
      network: "Red",
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
      "Almena is a decentralized, end-to-end encrypted messenger. No phone numbers, no central server — your messages travel through onion paths over a community-run node network.",
    hero: {
      eyebrow: "Private messenger",
      title: "Send messages, not metadata.",
      subtitle:
        "Almena is a decentralized, end-to-end encrypted messenger. No phone number, no email, no central server — just private conversations that travel through onion paths over a community-run network.",
      ctaPrimary: "Download Almena",
      ctaSecondary: "How the network works",
    },
    platforms: {
      title: "One account, every device",
      subtitle: "Native apps for desktop and mobile. Restore anywhere with a 12-word recovery phrase.",
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
          text: "Your account, conversations and contacts sync across your devices through your own encrypted swarm — no cloud account required. Restore everything on a new device from your recovery phrase. Share files up to 4 MB, each encrypted with its own key.",
          points: ["Multi-device sync", "Encrypted file sharing", "Restore from recovery phrase"],
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
    community: {
      title: "Privacy is a team effort",
      text:
        "Almena is built in the open by contributors around the world. No vendor lock-in, no paid dependencies. Read every line, run your own node, and help shape a messenger that answers to its users — not a company.",
      ctaPrimary: "Download Almena",
      ctaSecondary: "Contribute on GitHub",
    },
  },
  es: {
    title: "Almena — Envía mensajes, no metadatos",
    description:
      "Almena es un mensajero descentralizado y cifrado de extremo a extremo. Sin números de teléfono, sin servidor central — tus mensajes viajan por rutas onion sobre una red de nodos de la comunidad.",
    hero: {
      eyebrow: "Mensajero privado",
      title: "Envía mensajes, no metadatos.",
      subtitle:
        "Almena es un mensajero descentralizado y cifrado de extremo a extremo. Sin número de teléfono, sin email, sin servidor central — solo conversaciones privadas que viajan por rutas onion sobre una red comunitaria.",
      ctaPrimary: "Descargar Almena",
      ctaSecondary: "Cómo funciona la red",
    },
    platforms: {
      title: "Una cuenta, todos tus dispositivos",
      subtitle: "Apps nativas para escritorio y móvil. Restaura donde quieras con una frase de recuperación de 12 palabras.",
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
          text: "Tu cuenta, conversaciones y contactos se sincronizan entre tus dispositivos a través de tu propio swarm cifrado — sin cuenta en la nube. Restaura todo en un dispositivo nuevo con tu frase de recuperación. Comparte archivos de hasta 4 MB, cada uno cifrado con su propia clave.",
          points: ["Sincronización multi-dispositivo", "Compartir archivos cifrados", "Restaurar con la frase de recuperación"],
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
    community: {
      title: "La privacidad es cosa de todos",
      text:
        "Almena se construye de forma abierta por contribuidores de todo el mundo. Sin vendor lock-in, sin dependencias de pago. Lee cada línea, levanta tu propio nodo y ayuda a dar forma a un mensajero que responde a sus usuarios — no a una empresa.",
      ctaPrimary: "Descargar Almena",
      ctaSecondary: "Contribuir en GitHub",
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
        "Behind every Almena message is a decentralized network of service nodes and a proof-of-work blockchain — run by the community, owned by no one. The future of privacy is powered by you.",
      ctaPrimary: "Run a node",
      ctaSecondary: "Read the docs",
    },
    stats: {
      title: "The protocol at a glance",
      items: [
        { value: "~5s", label: "Target block time" },
        { value: "50", label: "Coins minted per block" },
        { value: "7", label: "Nodes per message swarm" },
        { value: "100k", label: "Minimum stake per node" },
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
        "Service nodes are the backbone of the network — and they're paid for it.",
      items: [
        {
          step: "01",
          title: "Stake to register",
          text: "Lock the minimum stake on-chain to register a service node. Others can contribute to your node too, with rewards split by an operator fee you set.",
        },
        {
          step: "02",
          title: "Stay online, prove it",
          text: "Your node periodically submits a signed uptime proof to the blockchain. Only nodes that are both staked and provably live stay eligible for rewards.",
        },
        {
          step: "03",
          title: "Earn every block",
          text: "Each block mints 50 coins: half to the miner, half to an elected service node. Keep your node honest and online, and the network pays you back.",
        },
      ],
    },
    cta: {
      title: "Become part of the network",
      text:
        "Download the node software, point it at the network, and start storing, relaying and earning. Everything you need is open source.",
      ctaPrimary: "Get the node software",
      ctaSecondary: "Read the documentation",
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
        "Detrás de cada mensaje de Almena hay una red descentralizada de service nodes y una blockchain de prueba de trabajo — gestionada por la comunidad, propiedad de nadie. El futuro de la privacidad lo impulsas tú.",
      ctaPrimary: "Levantar un nodo",
      ctaSecondary: "Leer la documentación",
    },
    stats: {
      title: "El protocolo de un vistazo",
      items: [
        { value: "~5s", label: "Tiempo de bloque objetivo" },
        { value: "50", label: "Monedas por bloque" },
        { value: "7", label: "Nodos por swarm de mensajes" },
        { value: "100k", label: "Stake mínimo por nodo" },
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
        "Los service nodes son la columna vertebral de la red — y se les paga por ello.",
      items: [
        {
          step: "01",
          title: "Haz staking para registrarte",
          text: "Bloquea el stake mínimo on-chain para registrar un service node. Otros también pueden contribuir a tu nodo, con recompensas repartidas según una comisión de operador que tú fijas.",
        },
        {
          step: "02",
          title: "Mantente en línea y demuéstralo",
          text: "Tu nodo envía periódicamente una prueba de uptime firmada a la blockchain. Solo los nodos que están en stake y demostrablemente vivos siguen siendo elegibles para recompensas.",
        },
        {
          step: "03",
          title: "Gana en cada bloque",
          text: "Cada bloque acuña 50 monedas: la mitad para el minero, la mitad para un service node elegido. Mantén tu nodo honesto y en línea, y la red te recompensa.",
        },
      ],
    },
    cta: {
      title: "Forma parte de la red",
      text:
        "Descarga el software del nodo, apúntalo a la red y empieza a almacenar, retransmitir y ganar. Todo lo que necesitas es código abierto.",
      ctaPrimary: "Obtener el software del nodo",
      ctaSecondary: "Leer la documentación",
    },
  },
} as const;
