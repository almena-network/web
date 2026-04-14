export const landing = {
  en: {
    title: "Almena Network — Open-Source Decentralized Platform",
    description:
      "Community-driven open-source project for decentralized identity. DIDs, Verifiable Credentials, and peer-to-peer networking built on W3C standards.",
    hero: {
      title: "Open-Source Decentralized Platform",
      subtitle:
        "Community-driven tools for decentralized identity based on W3C standards. DIDs, Verifiable Credentials, and peer-to-peer networking — no central authority required.",
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
        text: "Desktop app for issuers and requesters. Monitor the network, manage peers, issue credentials, configure shared storage.",
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
    langSwitch: "Español",
  },
  es: {
    title: "Almena Network — Plataforma Descentralizada Open-Source",
    description:
      "Proyecto open-source impulsado por la comunidad para identidad descentralizada. DIDs, Credenciales Verificables y red peer-to-peer sobre estándares W3C.",
    hero: {
      title: "Plataforma Descentralizada Open-Source",
      subtitle:
        "Herramientas de identidad descentralizada desarrolladas por la comunidad, basadas en estándares W3C. DIDs, Credenciales Verificables y red peer-to-peer — sin autoridad central.",
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
        text: "Aplicación de escritorio para emisores y solicitantes. Monitorea la red, gestiona peers, emite credenciales y configura almacenamiento compartido.",
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
    langSwitch: "English",
  },
} as const;

export type Lang = keyof typeof landing;
