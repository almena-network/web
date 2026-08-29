/**
 * The prose of the page, section by section, in both languages.
 *
 * Separate from the chrome because this is what the site argues and that is what the browser tab
 * says: they change for different reasons and at different times.
 */

import type { Widened } from "./site";

/** The page itself, section by section, in the order it is read. */
const contentEn = {
  hero: {
    eyebrow: "Decentralised identity",
    title: "Your identity stays with you",
    lead: "Prove what you need to prove, and nothing more. Organisations that have been checked sign what they already know about you, you carry it on your phone, and whoever asks gets an answer they can verify themselves — never a copy of your documents.",
    claims: [
      "Open source",
      "Decentralised",
      "Encrypted end to end",
      "Every act leaves a trace",
      "No personal data in the network",
    ] as const,
    note: "No personal data lives in the network. Not your name, not your address, not one attribute.",
    ctaPrimary: "See how it works",
    ctaSecondary: "Read the code",
  },
  how: {
    num: "01",
    kicker: "How it works",
    title: "Three roles, and nothing in the middle",
    lead: "A university vouches for its graduates. A professional body vouches for its members. An administration vouches for what its register says — and each of them carries a published grade saying how far it has itself been checked. You keep what they issued, and your device answers with it when somebody asks.",
    points: [
      {
        title: "The issuer vouches",
        body: "It signs something it already knew about you — that you graduated, that you are registered, that you are of age. It does not learn anything new by doing it.",
      },
      {
        title: "You keep it",
        body: "On your phone, your tablet or your computer, protected by the hardware they already carry. Nobody holds it for you, and nobody can look at it.",
      },
      {
        title: "The verifier puts a question",
        body: "It asks — “are you of age?” — and your device answers with a proof built from the credentials you hold. It checks that proof itself: the signature, that it is bound to you, and that nobody has revoked it. Not a copy of your documents.",
      },
    ],
  },
  different: {
    num: "03",
    kicker: "What is different",
    title: "The asking is public. Your answers never are",
    lead: "Nothing you answer is ever published — not one attribute, not once. What is published is the question: every request is made against a form written down in advance, and every form sits in a catalogue anybody can read and compare.",
    body: "So a shop asking for your full date of birth to check you are of age is not doing something hidden. What it asks for is something anybody can look up, next to everybody else who asks for less — and what you answered stays between the two of you.",
    honest:
      "This does not make abuse impossible — nothing in a protocol can. It makes it legible, and the remedy lives outside: in reputation, and in regulation.",
  },
  keys: {
    num: "04",
    kicker: "Your keys",
    title: "Sovereignty, with the means to exercise it",
    lead: "Holding your own identity means nobody can take it from you, and it also means nobody can give it back. Almena is built so that the second half is survivable — and so that everything the device keeps is encrypted, under keys made inside the hardware it already carries and never handed out.",
    points: [
      {
        title: "Several devices",
        body: "Your account works on all of them at once, and any one of them can throw out a lost one straight away — no words to type, no waiting.",
      },
      {
        title: "Guardians",
        body: "People you choose who can help you back in if you lose everything. They never hold your identity, and they can never take it.",
      },
      {
        title: "Words as the floor",
        body: "A recovery phrase you keep. It is the last resort, and the app tells you honestly what it can and cannot do without it.",
      },
    ],
    honest:
      "Not every computer carries that hardware. Where it is missing the protection is a step lower, and the app says so rather than letting you assume otherwise.",
  },
  network: {
    num: "05",
    kicker: "The network",
    title: "Open, traceable, and answerable",
    lead: "Anybody can run a node — no permission, no onboarding, no stake — and the code it runs is public, so what a node does can be read rather than believed. Every act on the network is written down and signed, so what happened can always be reconstructed by anybody; and none of what is written down is personal data.",
    points: [
      {
        title: "A hostile node can refuse, never lie",
        body: "Everything you receive is signed by whoever had the right to say it. Whoever passes it along is a messenger, and it does not matter who they are.",
      },
      {
        title: "Every act leaves a trace",
        body: "Issuing, revoking, granting trust — each one is written down and signed, and none of it is ever rewritten. What was valid when it was signed stays valid, and a mistake is corrected forward rather than erased.",
      },
      {
        title: "What travels is encrypted",
        body: "Messages between an issuer, you and a verifier are encrypted end to end. A node that carries one along cannot read it, and neither can anybody watching the wire.",
      },
    ],
  },
  limits: {
    num: "07",
    kicker: "What it is not",
    title: "Said plainly, because it is easy to assume otherwise",
    lead: "A platform is also the things it refuses to be, and those are worth as much as the promises.",
    items: [
      {
        title: "It stores nobody's personal data",
        body: "The issuer keeps what it knows; the network keeps identity, trust and revocation — and not every node keeps the same part of it.",
      },
      {
        title: "It is not a place where transactions happen",
        body: "No payments, no exchange of value, no tokens.",
      },
      {
        title: "It is not a vault, a loyalty scheme or a messenger",
        body: "A credential vouches for a fact about a person; it is not a voucher, a receipt or a file.",
      },
      {
        title: "It does not judge",
        body: "It shows what each party asks for and leaves the decision to whoever takes the risk.",
      },
    ],
  },
  close: {
    num: "08",
    kicker: "Open source",
    title: "Nothing here depends on trusting us",
    quote:
      "Nobody can take your identity from you, and nothing anybody asks of you is hidden.",
    body: "Almena is open source and decentralised. There are no master keys over the rules and no privileged reader of the network: anybody can run a node, the code it runs is public, what travels between people is encrypted, and every answer the network gives can be checked by whoever receives it.",
    cta: "Read the code on GitHub",
  },
};

/**
 * Spanish, typed against English so that the compiler is the catalogue check.
 *
 * A key English has and this lacks is an error; a key this has and English lacks is an excess
 * property, also an error. That is the check in both directions, and it matters because a half
 * language is worse than one language: the gap turns up on the screen it can least afford to. It
 * is done here by `astro check` rather than by a script, because unlike the JSON catalogues of
 * the applications these are TypeScript and the compiler already reads them.
 */
const contentEs: Widened<typeof contentEn> = {
  hero: {
    eyebrow: "Identidad descentralizada",
    title: "Tu identidad se queda contigo",
    lead: "Demuestra lo que necesitas demostrar, y nada más. Organizaciones acreditadas firman lo que ya saben de ti, tú lo llevas en el móvil, y quien pregunta recibe una respuesta que puede verificar él mismo — nunca una copia de tus documentos.",
    claims: [
      "Código abierto",
      "Descentralizada",
      "Cifrada de extremo a extremo",
      "Todo acto deja rastro",
      "Ningún dato personal en la red",
    ] as const,
    note: "Ningún dato personal vive en la red. Ni tu nombre, ni tu dirección, ni un solo atributo.",
    ctaPrimary: "Ver cómo funciona",
    ctaSecondary: "Leer el código",
  },
  how: {
    num: "01",
    kicker: "Cómo funciona",
    title: "Tres papeles, y nada en medio",
    lead: "Una universidad acredita a sus titulados. Un colegio profesional, a sus colegiados. Una administración, lo que consta en su registro — y cada una lleva un grado publicado que dice hasta dónde se la ha comprobado a ella. Tú guardas lo que emitieron, y tu dispositivo responde con ello cuando alguien pregunta.",
    points: [
      {
        title: "El emisor acredita",
        body: "Firma algo que ya sabía de ti — que te licenciaste, que estás colegiado, que eres mayor de edad. No aprende nada nuevo al hacerlo.",
      },
      {
        title: "Tú lo guardas",
        body: "En tu móvil, tu tableta o tu ordenador, protegido por el hardware que ya llevan. Nadie lo custodia por ti, y nadie puede mirarlo.",
      },
      {
        title: "El verificador pregunta",
        body: "Plantea — «¿eres mayor de edad?» — y tu dispositivo responde con una prueba construida a partir de las credenciales que tienes. Comprueba esa prueba él solo: la firma, que va atada a ti, y que nadie la ha revocado. No una copia de tus documentos.",
      },
    ],
  },
  different: {
    num: "03",
    kicker: "Qué es distinto",
    title: "Lo público es la petición, nunca tus respuestas",
    lead: "Nada de lo que respondes se publica jamás — ni un atributo, ni una vez. Lo que se publica es la pregunta: cada petición se hace contra un formulario escrito por adelantado, y cada formulario está en un catálogo que cualquiera puede leer y comparar.",
    body: "Así, una tienda que te pide la fecha de nacimiento entera para comprobar que eres mayor de edad no está haciendo algo oculto. Lo que pide es algo que cualquiera puede consultar, al lado de todos los demás que piden menos — y lo que tú respondiste se queda entre los dos.",
    honest:
      "Esto no hace imposible el abuso — nada en un protocolo puede. Lo hace legible, y el remedio vive fuera: en la reputación y en la regulación.",
  },
  keys: {
    num: "04",
    kicker: "Tus claves",
    title: "Soberanía, con los medios para ejercerla",
    lead: "Tener tu propia identidad significa que nadie te la puede quitar, y también que nadie te la puede devolver. Almena está construida para que esa segunda mitad se pueda sobrevivir — y para que todo lo que el dispositivo guarda esté cifrado, bajo claves creadas dentro del hardware que ya lleva y que nunca salen de él.",
    points: [
      {
        title: "Varios dispositivos",
        body: "Tu cuenta funciona en todos a la vez, y desde cualquiera puedes echar al que has perdido en el momento — sin teclear palabras y sin esperas.",
      },
      {
        title: "Guardianes",
        body: "Personas que eliges y que pueden ayudarte a volver si lo pierdes todo. Nunca custodian tu identidad, y nunca pueden quedársela.",
      },
      {
        title: "Las palabras como suelo",
        body: "Una frase de recuperación que guardas tú. Es el último recurso, y la aplicación te dice con honestidad qué puede y qué no puede hacer sin ella.",
      },
    ],
    honest:
      "No todos los ordenadores llevan ese hardware. Donde falta, la protección baja un escalón, y la aplicación lo dice en vez de dejar que supongas otra cosa.",
  },
  network: {
    num: "05",
    kicker: "La red",
    title: "Abierta, trazable, y que responde",
    lead: "Cualquiera puede levantar un nodo — sin permiso, sin alta y sin depósito — y el código que ejecuta es público, así que lo que hace un nodo se puede leer en vez de creerlo. Todo acto en la red queda escrito y firmado, así que cualquiera puede reconstruir lo que pasó; y nada de lo que queda escrito es un dato personal.",
    points: [
      {
        title: "Un nodo hostil puede negarse, nunca mentir",
        body: "Todo lo que recibes va firmado por quien tenía derecho a afirmarlo. Quien te lo pasa es un mensajero, y da igual quién sea.",
      },
      {
        title: "Todo acto deja rastro",
        body: "Emitir, revocar, conceder confianza — cada uno queda escrito y firmado, y nada de eso se reescribe nunca. Lo que era válido cuando se firmó sigue siéndolo, y un error se corrige hacia adelante en vez de borrarse.",
      },
      {
        title: "Lo que viaja va cifrado",
        body: "Los mensajes entre un emisor, tú y un verificador van cifrados de extremo a extremo. El nodo que los transporta no puede leerlos, y quien mire el cable tampoco.",
      },
    ],
  },
  limits: {
    num: "07",
    kicker: "Lo que no es",
    title: "Dicho claro, porque es fácil suponer otra cosa",
    lead: "Una plataforma también es lo que se niega a ser, y eso vale tanto como las promesas.",
    items: [
      {
        title: "No guarda los datos personales de nadie",
        body: "El emisor tiene lo que sabe; la red guarda identidad, confianza y revocación — y no todos los nodos guardan la misma parte.",
      },
      {
        title: "No es un sitio donde ocurran transacciones",
        body: "Ni pagos, ni intercambio de valor, ni tokens.",
      },
      {
        title: "No es un almacén, ni fidelización, ni mensajería",
        body: "Una credencial acredita un hecho sobre una persona; no es un bono, ni un recibo, ni un fichero.",
      },
      {
        title: "No juzga",
        body: "Muestra lo que pide cada parte y deja la decisión a quien asume el riesgo.",
      },
    ],
  },
  close: {
    num: "08",
    kicker: "Código abierto",
    title: "Nada de esto depende de que te fíes de nosotros",
    quote:
      "Nadie puede quitarte tu identidad, y nada de lo que te piden está oculto.",
    body: "Almena es de código abierto y descentralizada. No hay claves maestras sobre las reglas ni un lector privilegiado de la red: cualquiera puede levantar un nodo, el código que ejecuta es público, lo que viaja entre personas va cifrado, y cada respuesta que da la red la puede comprobar quien la recibe.",
    cta: "Leer el código en GitHub",
  },
};

export const content = {
  en: contentEn,
  es: contentEs,
};
