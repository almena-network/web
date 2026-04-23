export const landing = {
  en: {
    title: "Almena Network — Open-Source Decentralized Platform",
    description:
      "Community-driven open-source project for decentralized identity. DIDs, Verifiable Credentials, IPv6-first peer-to-peer networking, and DIDComm v2 messaging — built on W3C standards.",
    hero: {
      title: "Open-Source Decentralized Platform",
      subtitle:
        "Community-driven tools for decentralized identity based on W3C standards. DIDs, Verifiable Credentials, IPv6-first peer-to-peer mesh, and DIDComm v2 for decentralized messaging — no central authority required.",
    },
    features: {
      title: "Core Capabilities",
      identity: {
        title: "Self-Sovereign Identity",
        text: "Create and control your own DIDs and Verifiable Credentials. Your identity lives on your device — no platform can revoke it.",
      },
      p2p: {
        title: "IPv6-first P2P mesh",
        text: "Nodes discover each other with libp2p and keep the DID document registry in sync with no central server. IPv6 is the default for peer addressing and reachability; IPv4 remains as a compatibility path for legacy networks, not the long-term design center.",
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
    diagram: {
      title: "How it works, in plain words",
      subtitle:
        "Your app holds your identity and sends secure, end-to-end messages to other people. The network behind it is a group of shared servers, spread across your area, your region, and the world. Ask any of them — you get the same trusted answer, because they keep each other in sync.",
      svgDesc:
        "Diagram: two personal apps exchanging secure messages; each app can ask any of several network helpers spread near the user, in their region, and worldwide; helpers stay in sync with each other.",
      wallet: "Your app",
      walletRole: "Sends & receives securely",
      didcommBetween: "Encrypted, end-to-end messages",
      tierLocal: "Near you",
      tierRegional: "In your region",
      tierGlobal: "Worldwide",
      node: "Helper",
      nodeShort: "H",
      nodeRole: "Store info · relay messages",
      meshCaption: "Shared, always-in-sync network",
      queryHint: "Ask any one — same trusted answer",
    },
    availability: {
      title: "Availability: centralized vs. decentralized",
      subtitle:
        "A centralized service goes offline when its server does. A decentralized network keeps serving as long as any node stays up.",
      centralizedTitle: "Centralized",
      centralizedStatus: "Server down — everyone offline",
      centralizedServer: "Single server",
      decentralizedTitle: "Decentralized",
      decentralizedStatus: "Some nodes down — network still up",
      up: "Up",
      down: "Down",
      userLabel: "User",
    },
    advantages: {
      title: "Why a decentralized platform",
      subtitle:
        "Decentralized identity spreads trust across peers and standards — not a single company or server.",
      items: [
        {
          title: "Always-on availability",
          text: "Centralized services go down whenever their servers do. Here there is no single point of failure: as long as any node in the network is up — in your area, your region, or the world — the service keeps running.",
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
          title: "IPv6 over IPv4 by design",
          text: "A decentralized mesh needs truly reachable peers. The stack treats IPv6 as the primary path for libp2p multiaddrs and discovery, cutting through NAT pain at global scale. IPv4 is still supported, but the architecture assumes IPv4 as a legacy fallback—not the end state of the network.",
        },
        {
          title: "Sovereignty & deployment",
          text: "Run your own node, choose your infrastructure, and align with internal policy or jurisdiction — without mandatory reliance on our cloud.",
        },
        {
          title: "Transparency & trust",
          text: "Open-source code and public standards mean behavior can be reviewed and audited instead of taken on faith alone.",
        },
      ],
    },
    modules: {
      title: "Platform Modules",
      subtitle:
        "Four community-built components that work together as a decentralized network.",
      daemon: {
        title: "Daemon",
        text: "Network node with gRPC and REST, libp2p peer discovery, and DID document replication. Exposes and prefers IPv6 listeners and announced addresses; IPv4 is available where the environment still requires it.",
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
      "Proyecto open-source impulsado por la comunidad para identidad descentralizada. DIDs, Credenciales Verificables, malla P2P con IPv6 prioritaria y mensajería DIDComm v2 — sobre estándares W3C.",
    hero: {
      title: "Plataforma Descentralizada Open-Source",
      subtitle:
        "Herramientas de identidad descentralizada desarrolladas por la comunidad, basadas en estándares W3C. DIDs, Credenciales Verificables, malla P2P con IPv6 prioritaria y DIDComm v2 para comunicación descentralizada — sin autoridad central.",
    },
    features: {
      title: "Capacidades principales",
      identity: {
        title: "Identidad autosoberana",
        text: "Crea y controla tus propios DIDs y Credenciales Verificables. Tu identidad vive en tu dispositivo — ninguna plataforma puede revocarla.",
      },
      p2p: {
        title: "Malla P2P con IPv6 prioritaria",
        text: "Los nodos se descubren con libp2p y mantienen el registro de documentos DID en sincronía sin servidor central. IPv6 es la opción predeterminada para direccionar y alcanzar peers; IPv4 se mantiene como compatibilidad con redes aún ancladas a legacy, no como eje de diseño a largo plazo.",
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
    diagram: {
      title: "Cómo funciona, en palabras sencillas",
      subtitle:
        "Tu app guarda tu identidad y envía mensajes cifrados de extremo a extremo a otras personas. Detrás hay un grupo de servidores compartidos repartidos cerca de ti, en tu región y por todo el mundo. Pregunta a cualquiera: todos te dan la misma respuesta fiable porque están sincronizados entre sí.",
      svgDesc:
        "Diagrama: dos apps personales se envían mensajes seguros; cada app puede preguntar a cualquiera de varios servidores de la red cerca del usuario, en su región y en el mundo; los servidores se mantienen sincronizados entre ellos.",
      wallet: "Tu app",
      walletRole: "Envía y recibe de forma segura",
      didcommBetween: "Mensajes cifrados de extremo a extremo",
      tierLocal: "Cerca de ti",
      tierRegional: "En tu región",
      tierGlobal: "En el mundo",
      node: "Servidor",
      nodeShort: "S",
      nodeRole: "Guardan información · retransmiten mensajes",
      meshCaption: "Red compartida y siempre sincronizada",
      queryHint: "Pregunta a cualquiera — misma respuesta fiable",
    },
    availability: {
      title: "Disponibilidad: centralizado vs. descentralizado",
      subtitle:
        "Un servicio centralizado se cae cuando cae su servidor. Una red descentralizada sigue sirviendo mientras haya cualquier nodo en pie.",
      centralizedTitle: "Centralizado",
      centralizedStatus: "Servidor caído — todos sin servicio",
      centralizedServer: "Servidor único",
      decentralizedTitle: "Descentralizado",
      decentralizedStatus: "Algunos nodos caídos — red sigue activa",
      up: "Activo",
      down: "Caído",
      userLabel: "Usuario",
    },
    advantages: {
      title: "Por qué una plataforma descentralizada",
      subtitle:
        "La identidad descentralizada reparte la confianza entre pares y estándares — no en una sola empresa ni un solo servidor.",
      items: [
        {
          title: "Disponibilidad siempre activa",
          text: "Los servicios centralizados se caen cuando cae su servidor. Aquí no hay punto único de fallo: mientras quede cualquier nodo en pie — cerca de ti, en tu región o en el mundo — el servicio sigue funcionando.",
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
          title: "IPv6 frente a IPv4, por diseño",
          text: "Una malla descentralizada necesita peers realmente alcanzables. El stack trata IPv6 como ruta principal para multiaddrs y descubrimiento libp2p, reduciendo el dolor del NAT a escala global. IPv4 se sigue soportando, pero la arquitectura lo entiende como capa de compatibilidad, no como destino de la red.",
        },
        {
          title: "Soberanía y despliegue",
          text: "Ejecuta tu propio nodo, elige tu infraestructura y alinea políticas internas o jurisdicción — sin depender obligatoriamente de un cloud concreto.",
        },
        {
          title: "Transparencia y confianza",
          text: "Código abierto y estándares públicos permiten revisar y auditar el comportamiento en lugar de confiar solo en la marca.",
        },
      ],
    },
    modules: {
      title: "Módulos de la plataforma",
      subtitle:
        "Cuatro componentes construidos por la comunidad que trabajan juntos como una red descentralizada.",
      daemon: {
        title: "Daemon",
        text: "Nodo de red con gRPC y REST, descubrimiento libp2p y réplica del registro DID. Anuncia y prioriza escucha en IPv6; IPv4 queda disponible cuando el entorno aún lo exige.",
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
