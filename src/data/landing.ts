export const landing = {
  en: {
    title: "Almena Network — Open-Source Decentralized Platform",
    description:
      "Community-driven open-source project for decentralized identity. DIDs, Verifiable Credentials, peer-to-peer networking, and DIDComm v2 messaging — built on W3C standards.",
    hero: {
      title: "Open-Source Decentralized Platform",
      subtitle:
        "Community-driven tools for decentralized identity based on W3C standards. DIDs, Verifiable Credentials, peer-to-peer networking, and DIDComm v2 for decentralized messaging — no central authority required.",
    },
    features: {
      title: "Core Capabilities",
      identity: {
        title: "Self-Sovereign Identity",
        text: "Create and control your own DIDs and Verifiable Credentials. Your identity lives on your device — no platform can revoke it.",
      },
      p2p: {
        title: "Peer-to-Peer Network",
        text: "Nodes discover each other via libp2p and replicate the document registry without a central server.",
      },
      standards: {
        title: "Built on W3C Standards",
        text: "Implements DID Core, VC Data Model 2.0, and Data Integrity. Interoperable by design.",
      },
      didcomm: {
        title: "DIDComm v2",
        text: "Standard protocol for encrypted, decentralized messaging between DIDs — exchange messages, credentials, and proofs without a central message broker.",
      },
    },
    advantages: {
      title: "Why a decentralized platform",
      subtitle:
        "Decentralized identity spreads trust across peers and standards — not a single company or server.",
      items: [
        {
          title: "Resilience",
          text: "Peer replication and many nodes reduce a single point of failure. The network keeps working when individual hosts or regions go offline.",
        },
        {
          title: "Control & censorship resistance",
          text: "Self-sovereign identifiers and credentials stay with the holder. Your digital identity is not the same as a revocable account on one provider.",
        },
        {
          title: "Interoperability",
          text: "W3C DIDs and Verifiable Credentials let other systems verify and exchange data without proprietary, closed APIs.",
        },
        {
          title: "Sovereignty & deployment",
          text: "Run your own node, choose your infrastructure, and align with internal policy or jurisdiction — without mandatory reliance on our cloud.",
        },
        {
          title: "Transparency & trust",
          text: "Open-source code and public standards mean behavior can be reviewed and audited instead of taken on faith alone.",
        },
        {
          title: "Less vendor lock-in",
          text: "Portable identity and open protocols reduce switching costs. You are not permanently tied to one vendor to keep using your identifiers.",
        },
      ],
    },
    modules: {
      title: "Platform Modules",
      subtitle:
        "Four community-built components that work together as a decentralized network.",
      daemon: {
        title: "Daemon",
        text: "Network node with gRPC and REST APIs, peer discovery via libp2p, and DID document registry replication.",
        tech: "Rust · tonic · libp2p · axum",
      },
      wallet: {
        title: "Wallet",
        text: "Mobile-first identity wallet for holders. Create DIDs, store credentials, biometric auth, cloud backup, and QR exchange.",
        tech: "Tauri v2 · React · TypeScript",
      },
      desktop: {
        title: "Desktop",
        text: "Graphical app to manage and run the daemon — same scope as the CLI, with a desktop UI. Monitor the network, peers, storage, and node configuration.",
        tech: "Tauri v2 · React · TypeScript",
      },
      cli: {
        title: "CLI",
        text: "Terminal interface to the daemon. Full TUI with network overview, peer management, storage, and logs.",
        tech: "Rust · ratatui · crossterm",
      },
    },
    community: {
      title: "Community-Driven, Open Standards",
      text: "Built in the open by contributors around the world. No vendor lock-in, no paid dependencies. Run your own node, audit every line of code, and help shape the future of decentralized identity.",
      docs: "Documentation",
      github: "Join us on GitHub",
    },
    footer: {
      tagline: "is a community project",
      email: "develop@almena.network",
    },
    langSwitch: "Español",
  },
  es: {
    title: "Almena Network — Plataforma Descentralizada Open-Source",
    description:
      "Proyecto open-source impulsado por la comunidad para identidad descentralizada. DIDs, Credenciales Verificables, red peer-to-peer y mensajería DIDComm v2 — sobre estándares W3C.",
    hero: {
      title: "Plataforma Descentralizada Open-Source",
      subtitle:
        "Herramientas de identidad descentralizada desarrolladas por la comunidad, basadas en estándares W3C. DIDs, Credenciales Verificables, red peer-to-peer y DIDComm v2 para comunicación descentralizada — sin autoridad central.",
    },
    features: {
      title: "Capacidades principales",
      identity: {
        title: "Identidad autosoberana",
        text: "Crea y controla tus propios DIDs y Credenciales Verificables. Tu identidad vive en tu dispositivo — ninguna plataforma puede revocarla.",
      },
      p2p: {
        title: "Red peer-to-peer",
        text: "Los nodos se descubren entre sí via libp2p y replican el registro de documentos sin un servidor central.",
      },
      standards: {
        title: "Construido sobre estándares W3C",
        text: "Implementa DID Core, VC Data Model 2.0 y Data Integrity. Interoperable por diseño.",
      },
      didcomm: {
        title: "DIDComm v2",
        text: "Protocolo estándar para mensajería cifrada y descentralizada entre DIDs — intercambia mensajes, credenciales y pruebas sin un broker de mensajes central.",
      },
    },
    advantages: {
      title: "Por qué una plataforma descentralizada",
      subtitle:
        "La identidad descentralizada reparte la confianza entre pares y estándares — no en una sola empresa ni un solo servidor.",
      items: [
        {
          title: "Resiliencia",
          text: "La replicación entre peers y muchos nodos reduce el punto único de fallo. La red sigue operativa cuando caen hosts o regiones concretas.",
        },
        {
          title: "Control y resistencia a la censura",
          text: "Los identificadores y credenciales autosoberanos permanecen con el titular. Tu identidad digital no es lo mismo que una cuenta revocable en un único proveedor.",
        },
        {
          title: "Interoperabilidad",
          text: "Los DIDs y Credenciales Verificables W3C permiten que otros sistemas verifiquen e intercambien datos sin APIs propietarias cerradas.",
        },
        {
          title: "Soberanía y despliegue",
          text: "Ejecuta tu propio nodo, elige tu infraestructura y alinea políticas internas o jurisdicción — sin depender obligatoriamente de un cloud concreto.",
        },
        {
          title: "Transparencia y confianza",
          text: "Código abierto y estándares públicos permiten revisar y auditar el comportamiento en lugar de confiar solo en la marca.",
        },
        {
          title: "Menos vendor lock-in",
          text: "Identidad portable y protocolos abiertos reducen el coste de cambio. No quedas atado para siempre a un proveedor para seguir usando tus identificadores.",
        },
      ],
    },
    modules: {
      title: "Módulos de la plataforma",
      subtitle:
        "Cuatro componentes construidos por la comunidad que trabajan juntos como una red descentralizada.",
      daemon: {
        title: "Daemon",
        text: "Nodo de red con APIs gRPC y REST, descubrimiento de peers via libp2p y replicación del registro de documentos DID.",
        tech: "Rust · tonic · libp2p · axum",
      },
      wallet: {
        title: "Wallet",
        text: "Cartera de identidad mobile-first para holders. Crea DIDs, almacena credenciales, autenticación biométrica, backup en la nube e intercambio por QR.",
        tech: "Tauri v2 · React · TypeScript",
      },
      desktop: {
        title: "Desktop",
        text: "Aplicación gráfica para gestionar y operar el daemon — el mismo alcance que la CLI, con interfaz de escritorio. Monitoriza la red, peers, almacenamiento y la configuración del nodo.",
        tech: "Tauri v2 · React · TypeScript",
      },
      cli: {
        title: "CLI",
        text: "Interfaz de terminal para el daemon. TUI completa con vista de red, gestión de peers, almacenamiento y logs.",
        tech: "Rust · ratatui · crossterm",
      },
    },
    community: {
      title: "Hecho por la comunidad, estándares abiertos",
      text: "Construido de forma abierta por contribuidores de todo el mundo. Sin vendor lock-in, sin dependencias de pago. Ejecuta tu propio nodo, audita cada línea de código y ayuda a dar forma al futuro de la identidad descentralizada.",
      docs: "Documentación",
      github: "Únete en GitHub",
    },
    footer: {
      tagline: "es un proyecto comunitario",
      email: "develop@almena.network",
    },
    langSwitch: "English",
  },
} as const;

export type Lang = keyof typeof landing;
