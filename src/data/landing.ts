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
    trustTriangle: {
      title: "The trust triangle (VCs)",
      subtitle:
        "W3C Verifiable Credentials involve three roles. The holder sits at the center of control: they receive credentials, store them in a wallet, and choose what to show a verifier.",
      svgTitle: "Verifiable Credentials trust triangle",
      svgDesc:
        "Triangle with holder at the top vertex, issuer at bottom left, verifier at bottom right. Arrows: issuer to holder (issues credential), holder to verifier (presents), verifier to issuer (trusts or resolves the issuer).",
      edgeIssue: "Issues",
      edgePresent: "Presents",
      edgeTrust: "Trusts issuer",
      holder: {
        title: "Holder",
        text: "The person or organization the credential is about. They keep the credential in their wallet, control when it leaves the device, and share only what is needed—often as a verifiable presentation.",
      },
      issuer: {
        title: "Issuer",
        text: "The authority that creates and cryptographically signs the credential. Verifiers check those signatures and policies against the issuer’s published keys and metadata.",
      },
      verifier: {
        title: "Verifier",
        text: "The relying party—an app, service, or gate—that receives a presentation, validates proofs and status (such as revocation), and decides whether to trust the claims.",
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
        "Three community-built components that work together as a decentralized network.",
      almena: {
        title: "Almena",
        text: "Unified desktop product: the network node (gRPC/REST, libp2p, DID document sync, IPv6-first) and the issuer console ship together—one install instead of separate daemon and desktop shells.",
        tech: "Rust · Tauri v2 · React · TypeScript · tonic · libp2p",
      },
      wallet: {
        title: "Wallet",
        text: "Mobile-first identity wallet for holders. Create DIDs, store credentials, biometric auth, cloud backup, and QR exchange.",
        tech: "Tauri v2 · React · TypeScript",
      },
      cli: {
        title: "CLI",
        text: "Operator tooling for the node over gRPC: subcommand-first workflows for scripts and CI, plus an optional Ratatui dashboard for peers, storage, and logs when you want a full-screen view.",
        tech: "Rust · clap · ratatui · crossterm",
      },
    },
    community: {
      title: "Community-Driven, Open Standards",
      text: "Built in the open by contributors around the world. No vendor lock-in, no paid dependencies. Run your own node, audit every line of code, and help shape the future of decentralized identity.",
      docs: "Documentation",
      github: "Join us on GitHub",
    },
    useCases: {
      title: "Use cases",
      subtitle:
        "Concrete experiences the platform enables. Click any card to read the full flow and architecture.",
      readMore: "Read the use case",
      items: [
        {
          slug: "app-login",
          href: "/use-cases/app-login/",
          title: "Sign in with Almena",
          summary:
            "An OAuth-style button that lets users log into any integrated application by scanning a QR with the Almena Wallet and approving on their phone — no passwords, no central identity provider.",
          tags: ["Authentication", "DIDComm v2", "Wallet"],
        },
      ],
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
    trustTriangle: {
      title: "El triángulo de confianza (VC)",
      subtitle:
        "Las credenciales verificables W3C involucran tres roles. El titular está en el centro del control: recibe credenciales, las guarda en una wallet y decide qué muestra al verificador.",
      svgTitle: "Triángulo de confianza de credenciales verificables",
      svgDesc:
        "Triángulo con el titular arriba, el emisor abajo a la izquierda y el verificador abajo a la derecha. Flechas: emisor hacia titular (emite credencial), titular hacia verificador (presenta), verificador hacia emisor (confía o resuelve al emisor).",
      edgeIssue: "Emite",
      edgePresent: "Presenta",
      edgeTrust: "Confía en emisor",
      holder: {
        title: "Titular",
        text: "La persona u organización sobre la que trata la credencial. Guarda la credencial en su wallet, controla cuándo sale del dispositivo y solo comparte lo necesario—a menudo como presentación verificable.",
      },
      issuer: {
        title: "Emisor",
        text: "La autoridad que crea y firma la credencial. Los verificadores comprueban esas firmas y políticas frente a las claves y metadatos publicados por el emisor.",
      },
      verifier: {
        title: "Verificador",
        text: "La parte de confianza—app, servicio o control de acceso—que recibe una presentación, valida pruebas y estado (por ejemplo revocación) y decide si confía en las afirmaciones.",
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
        "Tres componentes construidos por la comunidad que trabajan juntos como una red descentralizada.",
      almena: {
        title: "Almena",
        text: "Producto de escritorio unificado: el nodo de red (gRPC/REST, libp2p, sincronización del registro DID, IPv6 prioritaria) y la consola para emisores van en el mismo paquete—una instalación en lugar de daemon y escritorio por separado.",
        tech: "Rust · Tauri v2 · React · TypeScript · tonic · libp2p",
      },
      wallet: {
        title: "Wallet",
        text: "Cartera de identidad mobile-first para holders. Crea DIDs, almacena credenciales, autenticación biométrica, backup en la nube e intercambio por QR.",
        tech: "Tauri v2 · React · TypeScript",
      },
      cli: {
        title: "CLI",
        text: "Herramientas de operador sobre el nodo vía gRPC: flujos orientados a subcomandos para scripts e integración CI, más un panel Ratatui opcional para peers, almacenamiento y logs en pantalla completa.",
        tech: "Rust · clap · ratatui · crossterm",
      },
    },
    community: {
      title: "Hecho por la comunidad, estándares abiertos",
      text: "Construido de forma abierta por contribuidores de todo el mundo. Sin vendor lock-in, sin dependencias de pago. Ejecuta tu propio nodo, audita cada línea de código y ayuda a dar forma al futuro de la identidad descentralizada.",
      docs: "Documentación",
      github: "Únete en GitHub",
    },
    useCases: {
      title: "Casos de uso",
      subtitle:
        "Experiencias concretas que la plataforma habilita. Pulsa cualquier tarjeta para leer el flujo y la arquitectura completos.",
      readMore: "Leer el caso de uso",
      items: [
        {
          slug: "app-login",
          href: "/es/use-cases/app-login/",
          title: "Inicio de sesión con Almena",
          summary:
            "Un botón estilo OAuth que permite a los usuarios iniciar sesión en cualquier aplicación integrada escaneando un QR con la Almena Wallet y aprobando desde el móvil — sin contraseñas y sin proveedor de identidad central.",
          tags: ["Autenticación", "DIDComm v2", "Wallet"],
        },
      ],
    },
    footer: {
      tagline: "es un proyecto comunitario",
      email: "develop@almena.network",
    },
    langSwitch: "English",
  },
} as const;

export type Lang = keyof typeof landing;

export const useCaseAppLogin = {
  en: {
    title: "Sign in with Almena",
    eyebrow: "Use case · Authentication",
    description:
      "An OAuth-style flow that lets any application authenticate users with Almena. The user scans a QR with the Almena Wallet, picks a public node, and approves on their phone. No passwords, no central identity provider, and the application never sees the user's keys.",
    backToHome: "Back to home",
    sections: {
      problem: {
        title: "What it solves",
        text: "Today, most apps either build their own password system — with all the breach risk that implies — or delegate login to a single corporate identity provider. Both options give one party full control over millions of accounts. With Almena, the user holds their own DID and credentials in the Wallet; the application only receives a verifiable proof of authentication signed by the user, not their secrets.",
      },
      experience: {
        title: "What the user sees",
        steps: [
          {
            title: "1. The integrated app",
            text: "An application — web, desktop or mobile — embeds a 'Sign in with Almena' button next to its other login options.",
          },
          {
            title: "2. QR with public-node selector",
            text: "Pressing the button opens a screen with a QR code and a selector listing public Almena nodes. The user can change the node; the QR is regenerated for the chosen node.",
          },
          {
            title: "3. Scan from the Wallet",
            text: "On the phone, the user scans the QR with the Almena Wallet. The wallet shows which application is requesting access and what it will know about them.",
          },
          {
            title: "4. Biometric approval",
            text: "The user approves with Face ID, Touch ID or device PIN. The wallet signs the authentication challenge with the user's DID key (post-quantum, ML-DSA-87). If the user taps Reject instead, the wallet sends a signed cancellation back to the node and the integrated app immediately shows a 'Login rejected' message — no waiting for the QR to expire.",
          },
          {
            title: "5. Logged in",
            text: "The chosen public node resolves the user's DID document from the Almena mesh, verifies the signature against the public key declared in that document, and the integrated app — which has been polling for the result — receives the user's DID and mints its own session token. The login screen turns into the app's authenticated home.",
          },
        ],
      },
      flow: {
        title: "Flow diagram",
        subtitle:
          "Happy path between the integrated application, the user's wallet and the chosen public Almena node. If the user rejects on the wallet, the node flips the challenge to 'rejected' and the app's next poll surfaces it — same path, terminal at step 9.",
      },
      elements: {
        title: "Elements diagram",
        subtitle:
          "The pieces involved and how they relate. Public nodes are interchangeable: the wallet talks to the one the user picked in the QR screen.",
      },
      security: {
        title: "Security notes",
        items: [
          "The application never receives the user's private key — only a verifiable signature on the challenge.",
          "Signatures use post-quantum primitives (ML-DSA-87, NIST FIPS 204) and the verifying key is read from the DID document published on the Almena mesh — not just the DID literal. Even a malicious node cannot substitute a different signing key: the daemon cross-checks the document key against the multibase-encoded key inside the DID identifier and refuses any mismatch.",
          "The user picks which public node mediates the exchange. The node never holds long-term secrets: every authentication is cryptographically bound to the user's DID, not to the node.",
          "The challenge is single-use and short-lived (60 s default, 300 s ceiling). Replays are rejected by the node and the wallet; the second proof for the same id returns 409 Conflict.",
          "If the user has not yet published their DID document, the node refuses the proof with a clear error rather than silently trusting the DID literal — login requires a published, network-resolvable identity.",
          "Reject on the wallet is also authenticated: the wallet sends back the QR's nonce so the node can confirm the rejecter actually scanned the QR before flipping the challenge state. The integrator's UI surfaces the rejection on its next poll without waiting for the timeout.",
        ],
      },
    },
    flowDiagram: {
      svgDesc:
        "Sequence diagram: the integrated app requests an authentication challenge from a public node, shows a QR; the wallet scans the QR, the user approves or rejects, the wallet signs the response (or a cancellation) and sends it to the node, which verifies it against the DID document on the Almena mesh; the app polls and on approval mints its own session token.",
      lanes: {
        app: "Integrated app",
        node: "Public node",
        wallet: "Almena Wallet",
        mesh: "Almena network",
      },
      steps: [
        "1. User clicks 'Sign in with Almena'",
        "2. Request auth challenge",
        "3. Session id + challenge",
        "4. Show QR + node selector",
        "5. Scan QR",
        "6. Display app + scope · biometric approval",
        "7. Sign challenge (ML-DSA-87)",
        "8. Resolve DID document from mesh",
        "9. Verify signature with published key",
        "10. App polls · receives DID + mints token",
        "11. User logged in",
      ],
    },
    elementsDiagram: {
      svgDesc:
        "Architecture diagram: the integrated app on the left shows a QR screen with a node selector; the user's wallet on the right scans the QR and signs the challenge; in the middle a public node mediates the exchange and resolves the user's DID document on the Almena mesh.",
      app: {
        title: "Integrated app",
        role: "Embeds the login button. Displays the QR and node selector. Receives the authentication result.",
      },
      qr: {
        title: "QR + node selector",
        role: "Encodes the session, the challenge and the chosen public node URL.",
      },
      wallet: {
        title: "Almena Wallet",
        role: "Holds the user's DID and private key. Scans the QR, asks for biometrics, signs the challenge.",
      },
      node: {
        title: "Public node",
        role: "Mediates the exchange. Verifies the signature against the DID document.",
      },
      mesh: {
        title: "Almena network",
        role: "P2P mesh of nodes that keep DID documents in sync. Any node returns the same document.",
      },
      labels: {
        challenge: "Challenge",
        signed: "Signed proof",
        result: "Auth result",
        resolve: "Resolve DID",
        scan: "Scan QR",
      },
    },
  },
  es: {
    title: "Inicio de sesión con Almena",
    eyebrow: "Caso de uso · Autenticación",
    description:
      "Un flujo estilo OAuth que permite a cualquier aplicación autenticar a sus usuarios con Almena. El usuario escanea un QR con la Almena Wallet, elige un nodo público y aprueba desde el móvil. Sin contraseñas, sin proveedor de identidad central y la aplicación nunca ve las claves del usuario.",
    backToHome: "Volver al inicio",
    sections: {
      problem: {
        title: "Qué resuelve",
        text: "Hoy la mayoría de las apps o construyen su propio sistema de contraseñas — con el riesgo de filtraciones que eso implica — o delegan el login en un único proveedor de identidad corporativo. Las dos opciones ponen el control de millones de cuentas en una sola parte. Con Almena, el usuario tiene su DID y sus credenciales en la Wallet; la aplicación solo recibe una prueba verificable de autenticación firmada por el usuario, no sus secretos.",
      },
      experience: {
        title: "Lo que ve el usuario",
        steps: [
          {
            title: "1. La aplicación integrada",
            text: "Una aplicación — web, escritorio o móvil — incluye un botón 'Iniciar sesión con Almena' junto al resto de opciones de login.",
          },
          {
            title: "2. QR con selector de nodo público",
            text: "Al pulsar el botón se abre una pantalla con un QR y un selector con nodos Almena públicos. El usuario puede cambiar de nodo; el QR se regenera para el nodo elegido.",
          },
          {
            title: "3. Escaneo desde la Wallet",
            text: "Desde el móvil, el usuario escanea el QR con la Almena Wallet. La wallet muestra qué aplicación está pidiendo acceso y qué va a saber sobre él.",
          },
          {
            title: "4. Aprobación biométrica",
            text: "El usuario aprueba con Face ID, Touch ID o el PIN del dispositivo. La wallet firma el reto de autenticación con la clave de su DID (post-cuántico, ML-DSA-87). Si el usuario pulsa Rechazar, la wallet envía una cancelación firmada al nodo y la aplicación integrada muestra inmediatamente un mensaje de 'Login rechazado' — sin esperar a que el QR caduque.",
          },
          {
            title: "5. Sesión iniciada",
            text: "El nodo público elegido resuelve el documento DID del usuario en la malla Almena, verifica la firma contra la clave pública declarada en ese documento, y la aplicación integrada — que está poleando el resultado — recibe el DID del usuario y emite su propio token de sesión. La pantalla de login se convierte en la pantalla autenticada de la app.",
          },
        ],
      },
      flow: {
        title: "Diagrama de flujo",
        subtitle:
          "Camino feliz entre la aplicación integrada, la wallet del usuario y el nodo público elegido. Si el usuario rechaza en la wallet, el nodo marca el reto como 'rechazado' y el siguiente sondeo de la app lo refleja — mismo camino, terminal en el paso 9.",
      },
      elements: {
        title: "Diagrama de elementos",
        subtitle:
          "Las piezas implicadas y cómo se relacionan. Los nodos públicos son intercambiables: la wallet habla con el que el usuario eligió en la pantalla del QR.",
      },
      security: {
        title: "Notas de seguridad",
        items: [
          "La aplicación nunca recibe la clave privada del usuario — solo una firma verificable sobre el reto.",
          "Las firmas usan primitivas post-cuánticas (ML-DSA-87, NIST FIPS 204) y la clave verificadora se lee del documento DID publicado en la malla Almena — no solo del literal del DID. Aunque un nodo malicioso intentase servir un documento manipulado, el daemon hace cross-check contra la clave codificada en el propio identificador DID y rechaza cualquier discrepancia.",
          "El usuario elige qué nodo público media el intercambio. El nodo no guarda secretos a largo plazo: toda autenticación está ligada criptográficamente al DID del usuario, no al nodo.",
          "El reto es de un solo uso y corta duración (60 s por defecto, máximo 300 s). El nodo y la wallet rechazan los replays; una segunda prueba para el mismo id devuelve 409 Conflict.",
          "Si el usuario aún no ha publicado su documento DID, el nodo rechaza la prueba con un error claro en lugar de confiar silenciosamente en el literal del DID — el login exige una identidad publicada y resoluble en la red.",
          "El rechazo en la wallet también está autenticado: la wallet envía el nonce del QR para que el nodo confirme que quien rechaza realmente escaneó el código antes de cerrar el reto. El UI del integrador muestra el rechazo en su siguiente sondeo, sin esperar al timeout.",
        ],
      },
    },
    flowDiagram: {
      svgDesc:
        "Diagrama de secuencia: la app integrada solicita un reto de autenticación a un nodo público, muestra un QR; la wallet escanea el QR, el usuario aprueba o rechaza, la wallet firma la respuesta (o una cancelación) y la envía al nodo, que la verifica contra el documento DID en la malla Almena; la app sondea y al aprobarse genera su propio token de sesión.",
      lanes: {
        app: "App integrada",
        node: "Nodo público",
        wallet: "Almena Wallet",
        mesh: "Red Almena",
      },
      steps: [
        "1. El usuario pulsa 'Iniciar sesión con Almena'",
        "2. Solicitar reto de autenticación",
        "3. Id de sesión + reto",
        "4. Mostrar QR + selector de nodo",
        "5. Escanear QR",
        "6. Mostrar app + permisos · aprobación biométrica",
        "7. Firmar reto (ML-DSA-87)",
        "8. Resolver documento DID en la malla",
        "9. Verificar firma con clave publicada",
        "10. La app sondea · recibe DID + emite token",
        "11. Usuario autenticado",
      ],
    },
    elementsDiagram: {
      svgDesc:
        "Diagrama de arquitectura: a la izquierda la app integrada con la pantalla de QR y el selector de nodo; a la derecha la wallet del usuario que escanea el QR y firma el reto; en el medio un nodo público media el intercambio y resuelve el documento DID del usuario en la malla Almena.",
      app: {
        title: "App integrada",
        role: "Incluye el botón de login. Muestra el QR y el selector de nodo. Recibe el resultado de la autenticación.",
      },
      qr: {
        title: "QR + selector de nodo",
        role: "Codifica la sesión, el reto y la URL del nodo público elegido.",
      },
      wallet: {
        title: "Almena Wallet",
        role: "Guarda el DID y la clave privada del usuario. Escanea el QR, pide biometría y firma el reto.",
      },
      node: {
        title: "Nodo público",
        role: "Media el intercambio. Verifica la firma contra el documento DID.",
      },
      mesh: {
        title: "Red Almena",
        role: "Malla P2P de nodos que mantienen los documentos DID sincronizados. Cualquier nodo devuelve el mismo documento.",
      },
      labels: {
        challenge: "Reto",
        signed: "Prueba firmada",
        result: "Resultado",
        resolve: "Resolver DID",
        scan: "Escanear QR",
      },
    },
  },
} as const;
