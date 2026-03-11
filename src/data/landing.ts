export const landing = {
  en: {
    title: "Almena Network | Decentralized Platform",
    description: "Decentralized platform built on W3C standards. Identity (DIDs, Verifiable Credentials), and future capabilities: applications, persistence, messaging, coordination and consensus.",
    hero: {
      title: "Decentralized, by design",
      subtitle: "Almena Network is a decentralized platform built on W3C standards. Identity (DIDs, Verifiable Credentials) is one of its core capabilities—with more to come: applications, persistence, messaging, coordination and consensus, time and ordering.",
    },
    purpose: {
      title: "Why Almena Network?",
      p1: "Traditional systems put your data in the hands of corporations and governments. Almena Network is designed differently: you control your identity and data.",
      p2: "Identity today uses DIDs and Verifiable Credentials (VCs) to create portable, cryptographic identities. The platform will grow with decentralized applications, persistence, messaging, coordination and consensus.",
    },
    features: {
      title: "What we offer",
      did: {
        title: "Self-Sovereign Identity",
        text: "Create and own your decentralised identifier. No central registry, no gatekeeper.",
      },
      vc: {
        title: "Verifiable Credentials",
        text: "Receive, store, and present tamper-evident credentials from trusted issuers.",
      },
      wallet: {
        title: "Secure Wallet",
        text: "Mobile-first wallet for holders. Biometric lock, encrypted backup, recovery flow.",
      },
      open: {
        title: "Open & Standards-Based",
        text: "Built on W3C DIDs and VCs. Open source. No vendor lock-in.",
      },
    },
    cta: {
      title: "Get started",
      docs: "Documentation",
      github: "GitHub",
    },
    langSwitch: "Español",
  },
  es: {
    title: "Almena Network | Plataforma descentralizada",
    description: "Plataforma descentralizada basada en estándares W3C. Identidad (DIDs, credenciales verificables) y futuras capacidades: aplicaciones, persistencia, mensajería, coordinación y consenso.",
    hero: {
      title: "Descentralizado, por diseño",
      subtitle: "Almena Network es una plataforma descentralizada basada en estándares W3C. La identidad (DIDs, credenciales verificables) es una de sus capacidades centrales—con más por venir: aplicaciones, persistencia, mensajería, coordinación y consenso, tiempo y ordenamiento.",
    },
    purpose: {
      title: "¿Por qué Almena Network?",
      p1: "Los sistemas tradicionales ponen tus datos en manos de corporaciones y gobiernos. Almena Network está diseñada de otra forma: tú controlas tu identidad y datos.",
      p2: "Hoy la identidad usa DIDs y Credenciales Verificables (VCs) para crear identidades criptográficas portátiles. La plataforma crecerá con aplicaciones descentralizadas, persistencia, mensajería, coordinación y consenso.",
    },
    features: {
      title: "Lo que ofrecemos",
      did: {
        title: "Identidad autosoberana",
        text: "Crea y posee tu identificador descentralizado. Sin registro central, sin intermediarios.",
      },
      vc: {
        title: "Credenciales verificables",
        text: "Recibe, almacena y presenta credenciales a prueba de manipulación de emisores de confianza.",
      },
      wallet: {
        title: "Billetera segura",
        text: "Billetera mobile-first para titulares. Bloqueo biométrico, respaldo cifrado, flujo de recuperación.",
      },
      open: {
        title: "Abierto y basado en estándares",
        text: "Construido sobre DIDs y VCs del W3C. Código abierto. Sin dependencia de proveedores.",
      },
    },
    cta: {
      title: "Empezar",
      docs: "Documentación",
      github: "GitHub",
    },
    langSwitch: "English",
  },
} as const;

export type Lang = keyof typeof landing;
