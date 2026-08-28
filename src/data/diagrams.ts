/**
 * The words inside the pictures, in both languages.
 *
 * Separate from the chrome and from the prose because a diagram's labels are the one kind of text
 * whose length is load-bearing: a caption that grows by six words stops fitting the box it was
 * measured for, and the person changing it should be looking at the other labels of the same
 * drawing while they do it.
 */

import type { Widened } from "./site";

/**
 * What the pictures say, which is text like any other and translated like any other.
 *
 * A diagram whose labels live in the component is a diagram that exists in one language. These
 * are here so the drawing is the same in both and only the words change.
 */
const diagramsEn = {
  proof: {
    label:
      "A credential holding four attributes, with three of them still hidden and one revealed as the answer to the question that was asked.",
    heading: "What you actually show",
    hidden: ["Full name", "Date of birth", "Home address"] as const,
    hiddenNote: "kept",
    shown: "Of age: yes",
    shownNote: "shown",
    caption:
      "Signed by the issuer. What the verifier checks is that signature, not a call to them.",
  },
  roles: {
    label:
      "An issuer signs a credential and the person keeps it. A verifier puts a question, the person's device answers it with a proof, and the verifier checks that proof. The registry sits underneath and sees none of it.",
    roles: ["Issuer", "You", "Verifier"] as const,
    registry:
      "The registry: identities, trust and revocation — never a credential, never an attribute",
    flows: ["issues", "a proof", "a question"] as const,
    caption:
      "Nothing is looked up about you. The question comes to you, and the answer you build is what gets checked.",
  },
  catalogue: {
    label:
      "The same errand asked for with four fields and with one. What is drawn is the two requests, never anybody's answers.",
    errand: "The errand: proving you are old enough",
    headings: ["What is often asked for", "What is enough"] as const,
    asking: [
      "Full name",
      "Date of birth",
      "Document number",
      "Home address",
    ] as const,
    minimal: ["Of age: yes"] as const,
    note: "Both forms are published, side by side, where anybody can read them. What you answer to either is published nowhere.",
  },
  published: {
    label:
      "A request form is written down, published in the catalogue, used at the counter, and so can be compared with everybody else's.",
    steps: [
      {
        title: "The form is written down",
        body: "A verifier says in advance exactly which fields it will ask for.",
      },
      {
        title: "It goes in the catalogue",
        body: "Published, next to the form of everybody else who asks for the same thing.",
      },
      {
        title: "It is what gets asked",
        body: "The request at the counter is that form — not a question made up on the spot.",
      },
      {
        title: "So more is visible",
        body: "Asking for more than the errand needs is something anybody can look up.",
      },
    ],
    caption:
      "Nothing is asked for by hand, so nothing is asked for in private.",
  },
  keys: {
    label:
      "The recovery phrase sits above the devices and can replace any of them; the guardians are a way back and never a way in.",
    seed: "Your recovery words",
    devices: ["Phone", "Tablet", "Laptop"] as const,
    guardians: "Guardians — people you choose",
    relations: ["can replace any device", "can help you back"] as const,
    between: "any one can remove another",
    caption:
      "Three ways back, and none of them is somebody else holding your identity for you.",
  },
  world: {
    label:
      "A world map with nodes in Madrid, Sydney, Buenos Aires, Moscow, London, Tel Aviv and Los Angeles, meshed to one another across the oceans. Three people asking from places with no node of their own each reach the one nearest to them.",
    cities: [
      "Madrid",
      "Sydney",
      "Buenos Aires",
      "Moscow",
      "London",
      "Tel Aviv",
      "Los Angeles",
    ] as const,
    clients: ["A phone", "A laptop", "A counter"] as const,
    caption:
      "Seven places, and what matters is that they could be any seven: the node nearest you serves the same signed answer as any other, and none of them is the centre. The map shows how the network is reached, not where it runs today.",
  },
  ledger: {
    label:
      "A record of signed entries in which a mistake is answered by a later correction and nothing earlier is removed.",
    axis: "Time",
    mistake: "the mistake",
    kept: "not removed",
    correction: "the correction",
    link: "corrected forward",
    caption:
      "Nothing is removed, so what happened can always be reconstructed — and none of what is kept is personal data.",
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
const diagramsEs: Widened<typeof diagramsEn> = {
  proof: {
    label:
      "Una credencial con cuatro atributos, tres de ellos ocultos y uno revelado como respuesta a la pregunta que se hizo.",
    heading: "Lo que enseñas de verdad",
    hidden: ["Nombre y apellidos", "Fecha de nacimiento", "Dirección"] as const,
    hiddenNote: "se queda",
    shown: "Mayor de edad: sí",
    shownNote: "se enseña",
    caption:
      "Firmado por el emisor. Lo que el verificador comprueba es esa firma, no una llamada.",
  },
  roles: {
    label:
      "Un emisor firma una credencial y la persona la guarda. Un verificador plantea una pregunta, el dispositivo de la persona la responde con una prueba, y el verificador comprueba esa prueba. El registro está debajo y no ve nada de esto.",
    roles: ["Emisor", "Tú", "Verificador"] as const,
    registry:
      "El registro: identidades, confianza y revocación — nunca una credencial, nunca un atributo",
    flows: ["emite", "una prueba", "una pregunta"] as const,
    caption:
      "No se consulta nada sobre ti. La pregunta te llega a ti, y lo que se comprueba es la respuesta que construyes.",
  },
  catalogue: {
    label:
      "El mismo trámite pedido con cuatro campos y con uno. Lo que se dibuja son las dos peticiones, nunca las respuestas de nadie.",
    errand: "El trámite: demostrar que tienes la edad",
    headings: ["Lo que se suele pedir", "Lo que basta"] as const,
    asking: [
      "Nombre y apellidos",
      "Fecha de nacimiento",
      "Número de documento",
      "Dirección",
    ] as const,
    minimal: ["Mayor de edad: sí"] as const,
    note: "Los dos formularios están publicados, uno al lado del otro, donde cualquiera puede leerlos. Lo que tú respondes a cualquiera de ellos no se publica en ningún sitio.",
  },
  published: {
    label:
      "Un formulario de petición se escribe, se publica en el catálogo, se usa en el mostrador y por eso se puede comparar con el de los demás.",
    steps: [
      {
        title: "El formulario se escribe",
        body: "Un verificador dice por adelantado qué campos exactos va a pedir.",
      },
      {
        title: "Va al catálogo",
        body: "Publicado, al lado del formulario de todos los demás que piden lo mismo.",
      },
      {
        title: "Es lo que se pide",
        body: "La petición del mostrador es ese formulario — no una pregunta improvisada.",
      },
      {
        title: "Y pedir de más se ve",
        body: "Pedir más de lo que el trámite necesita es algo que cualquiera puede consultar.",
      },
    ],
    caption: "Nada se pide a mano, así que nada se pide en privado.",
  },
  keys: {
    label:
      "Las palabras de recuperación están por encima de los dispositivos y pueden sustituir a cualquiera; los guardianes son una vuelta, nunca una entrada.",
    seed: "Tus palabras de recuperación",
    devices: ["Móvil", "Tableta", "Portátil"] as const,
    guardians: "Guardianes — personas que eliges",
    relations: [
      "puede sustituir a cualquiera",
      "pueden ayudarte a volver",
    ] as const,
    between: "cualquiera puede echar a otro",
    caption:
      "Tres formas de volver, y ninguna es que otro te custodie la identidad.",
  },
  world: {
    label:
      "Un mapa del mundo con nodos en Madrid, Sídney, Buenos Aires, Moscú, Londres, Tel Aviv y Los Ángeles, unidos entre sí a través de los océanos. Tres personas que preguntan desde sitios sin nodo propio llegan cada una al que tienen más cerca.",
    cities: [
      "Madrid",
      "Sídney",
      "Buenos Aires",
      "Moscú",
      "Londres",
      "Tel Aviv",
      "Los Ángeles",
    ] as const,
    clients: ["Un móvil", "Un portátil", "Un mostrador"] as const,
    caption:
      "Siete sitios, y lo que importa es que podrían ser otros siete: el nodo que tengas más cerca sirve la misma respuesta firmada que cualquier otro, y ninguno es el centro. El mapa enseña cómo se llega a la red, no dónde corre hoy.",
  },
  ledger: {
    label:
      "Un registro de entradas firmadas en el que un error se responde con una corrección posterior y nada anterior se borra.",
    axis: "Tiempo",
    mistake: "el error",
    kept: "no se borra",
    correction: "la corrección",
    link: "corregido hacia adelante",
    caption:
      "Nada se borra, así que siempre se puede reconstruir lo que pasó — y nada de lo que se guarda es un dato personal.",
  },
};

export const diagrams = {
  en: diagramsEn,
  es: diagramsEs,
};
