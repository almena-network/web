/**
 * Six cases told from the other side of the counter: the issuer's, and the verifier's.
 *
 * These are the ones that decide whether the platform exists at all. A person cannot use a
 * credential nobody issues, and an organisation does not adopt a protocol because it is elegant —
 * it adopts one that removes work it is already paying for. So every one of these is drawn the
 * same way: **what this costs today, and what happens instead.** The argument is the drop between
 * the two blocks, which is why none of them is told as a credential.
 *
 * The same rule applies as everywhere: nothing counted, nobody named, and each panel ends on what
 * this does not do — because *"less to protect"* is a sentence a regulator's obligations can
 * outrank, and saying so is what makes the rest believable.
 */

import type { Widened } from "./site";

const organisationsEn = [
  {
    tab: "Issue once",
    kind: "swap",
    headline: "Issue once instead of answering for ever",
    situation:
      "A university, a professional body or an employer spends real effort confirming the same facts one request at a time, by phone and by email.",
    blocks: [
      {
        label: "Today",
        lines: [
          "Somebody answers each verification by hand",
          "The file you send can be edited by anyone",
          "You never find out where it ended up",
        ] as const,
      },
      {
        label: "With Almena",
        lines: [
          "You sign the fact once, when it becomes true",
          "Whoever needs it checks it themselves, whenever they need to",
          "You are not in the loop at all",
        ] as const,
      },
    ] as const,
    note: "What it asks of you is publishing the form you issue with, and keeping it up to date. You are vouching for a fact you already hold: Almena adds no knowledge about your people, asks for none, and never becomes a party to what you know.",
  },
  {
    tab: "Revoke",
    kind: "swap",
    headline: "It stops being good the moment it stops being true",
    situation:
      "Somebody leaves, is struck off, or a qualification is annulled. What you issued has to stop counting now — not at the next renewal.",
    blocks: [
      {
        label: "Today",
        lines: [
          "You reissue, or you wait for something to expire",
          "Whoever already has a copy still has it",
          "Nobody checking is told anything changed",
        ] as const,
      },
      {
        label: "With Almena",
        lines: [
          "You revoke, and it takes effect forward from that instant",
          "Every verifier checking after that gets a no",
          "What was valid when it was signed stays valid",
        ] as const,
      },
    ] as const,
    note: "The record is corrected forward and never erased. Revocation is a fact about the credential and not about the person, and it says nothing about why — whoever needs the why has to ask you, which is where that question belongs.",
  },
  {
    tab: "Take somebody on",
    kind: "swap",
    headline: "Take somebody on without keeping their documents",
    situation:
      "You need three answers about a new customer, and today you receive a photograph of a passport in order to get them.",
    blocks: [
      {
        label: "Today",
        lines: [
          "You receive the scan of a document",
          "You store it, encrypt it and delete it on a schedule",
          "If it leaks, it leaks from you",
        ] as const,
      },
      {
        label: "With Almena",
        lines: [
          "You ask: a real person, of age, resident here",
          "You receive three answers, each checkable by you alone",
          "There is nothing left for you to protect",
        ] as const,
      },
    ] as const,
    note: "Data you never received is data you cannot leak. What a regulator obliges you to keep is a separate question, and not one a protocol gets to answer for you.",
  },
  {
    tab: "Ask for less",
    kind: "swap",
    headline: "Asking for less, and being seen to",
    situation:
      "What you ask of people is a decision you make today in private, and pay for in storage, in risk and in trust.",
    blocks: [
      {
        label: "Today",
        lines: [
          "What you ask for is visible to nobody",
          "Asking for more than you need costs nothing",
          "You end up holding what you never needed",
        ] as const,
      },
      {
        label: "With Almena",
        lines: [
          "Your form sits in a public catalogue",
          "Asking for more becomes a visible decision",
          "Less to store, less to protect, less to explain",
        ] as const,
      },
    ] as const,
    note: "The catalogue forbids nothing and you still decide what to ask — it makes the choice legible. That does not make abuse impossible; nothing in a protocol can. It moves the remedy to where it works: reputation, and regulation.",
  },
  {
    tab: "One integration",
    kind: "swap",
    headline: "One way to check, whoever signed it",
    situation:
      "Accepting credentials from twelve issuers today means twelve integrations, twelve agreements and twelve things that break separately.",
    blocks: [
      {
        label: "Today",
        lines: [
          "An integration for each issuer",
          "A key exchange for each issuer",
          "A phone call whenever something looks wrong",
        ] as const,
      },
      {
        label: "With Almena",
        lines: [
          "One check: the signature is good, it belongs to whoever shows it, it answers the form, nobody withdrew it",
          "A new issuer needs nothing from you",
          "The answer is the same shape every time",
        ] as const,
      },
    ] as const,
    note: "Almena tells you who signed and whether it still stands. Which issuers are worth believing stays your decision, and the published grade an issuer carries is an input to it rather than an answer.",
  },
  {
    tab: "Sign together",
    kind: "swap",
    headline: "Act as an organisation, not as somebody's password",
    situation:
      "What an organisation does that matters should not hang on one person being available, honest, and not tricked.",
    blocks: [
      {
        label: "Today",
        lines: [
          "A shared password",
          "A key that lives in one laptop",
          "An act nobody can attribute",
        ] as const,
      },
      {
        label: "With Almena",
        lines: [
          "You set it: any three of five, or whatever you decide",
          "Each of them signs from their own device",
          "Every act carries who signed it",
        ] as const,
      },
    ] as const,
    note: "Somebody leaving does not lock the rest out, and a pending signature that would destroy something cannot be rushed through by waiting for people to be away: there is a floor under how soon it can expire.",
  },
] as const;

/**
 * Spanish, typed against English so that the compiler is the catalogue check.
 *
 * A key English has and this lacks is an error; a key this has and English lacks is an excess
 * property, also an error — and because every list here is fixed-length, a slide missing from one
 * language, or a line of the picture, is an error too. A carousel with five cases in one language
 * and six in the other is exactly the half language this check exists to stop.
 *
 * Written with `satisfies` rather than as an annotation, because an annotation would widen `kind`
 * to `string` along with the prose, and a language could then ask for a picture that does not
 * exist. This way the catalogue check still runs in both directions and the two pictures stay a
 * closed set.
 */
const organisationsEs = [
  {
    tab: "Emitir una vez",
    kind: "swap",
    headline: "Emitir una vez en lugar de contestar para siempre",
    situation:
      "Una universidad, un colegio profesional o una empresa dedica esfuerzo real a confirmar los mismos hechos petición a petición, por teléfono y por correo.",
    blocks: [
      {
        label: "Hoy",
        lines: [
          "Alguien contesta a mano cada verificación",
          "El fichero que mandas lo puede retocar cualquiera",
          "Nunca te enteras de dónde acabó",
        ] as const,
      },
      {
        label: "Con Almena",
        lines: [
          "Firmas el hecho una vez, cuando pasa a ser cierto",
          "Quien lo necesita lo comprueba él mismo, cuando lo necesita",
          "Tú no estás en medio en ningún momento",
        ] as const,
      },
    ] as const,
    note: "Lo que te pide es publicar el formulario con el que emites, y mantenerlo al día. Estás acreditando un hecho que ya tienes: Almena no añade conocimiento sobre tu gente, no te lo pide, y nunca se hace parte de lo que sabes.",
  },
  {
    tab: "Revocar",
    kind: "swap",
    headline: "Deja de valer en el momento en que deja de ser cierto",
    situation:
      "Alguien se va, causa baja, o un título se anula. Lo que emitiste tiene que dejar de contar ya — no en la próxima renovación.",
    blocks: [
      {
        label: "Hoy",
        lines: [
          "Reemites, o esperas a que algo caduque",
          "Quien ya tiene una copia la sigue teniendo",
          "A quien comprueba no le llega que algo cambió",
        ] as const,
      },
      {
        label: "Con Almena",
        lines: [
          "Revocas, y surte efecto hacia adelante desde ese instante",
          "Todo verificador que compruebe después recibe un no",
          "Lo que era válido cuando se firmó lo sigue siendo",
        ] as const,
      },
    ] as const,
    note: "El registro se corrige hacia adelante y nunca se borra. La revocación es un hecho sobre la credencial y no sobre la persona, y no dice nada del porqué — quien necesite el porqué tiene que preguntártelo a ti, que es donde esa pregunta corresponde.",
  },
  {
    tab: "Dar de alta",
    kind: "swap",
    headline: "Dar de alta a alguien sin quedarte sus documentos",
    situation:
      "Necesitas tres respuestas sobre un cliente nuevo, y hoy recibes la foto de un pasaporte para conseguirlas.",
    blocks: [
      {
        label: "Hoy",
        lines: [
          "Recibes el escaneo de un documento",
          "Lo guardas, lo cifras y lo borras en plazo",
          "Si se filtra, se filtra por ti",
        ] as const,
      },
      {
        label: "Con Almena",
        lines: [
          "Preguntas: persona real, mayor de edad, reside aquí",
          "Recibes tres respuestas, cada una comprobable por ti solo",
          "No te queda nada que proteger",
        ] as const,
      },
    ] as const,
    note: "Lo que no recibes no lo puedes filtrar. Lo que tu regulador te obliga a conservar es otra pregunta, y no una que un protocolo pueda contestar por ti.",
  },
  {
    tab: "Pedir menos",
    kind: "swap",
    headline: "Pedir menos, y que se vea",
    situation:
      "Lo que le pides a la gente es una decisión que hoy tomas en privado, y que pagas en almacenamiento, en riesgo y en confianza.",
    blocks: [
      {
        label: "Hoy",
        lines: [
          "Lo que pides no lo ve nadie",
          "Pedir más de lo que necesitas no cuesta nada",
          "Acabas guardando lo que nunca necesitaste",
        ] as const,
      },
      {
        label: "Con Almena",
        lines: [
          "Tu formulario está en un catálogo público",
          "Pedir de más pasa a ser una decisión visible",
          "Menos que guardar, menos que proteger, menos que explicar",
        ] as const,
      },
    ] as const,
    note: "El catálogo no prohíbe nada y sigues decidiendo tú qué pedir — hace legible la decisión. Eso no hace imposible el abuso; nada en un protocolo puede. Lleva el remedio a donde funciona: la reputación y la regulación.",
  },
  {
    tab: "Una integración",
    kind: "swap",
    headline: "Una sola forma de comprobar, firme quien firme",
    situation:
      "Aceptar credenciales de doce emisores son hoy doce integraciones, doce acuerdos y doce cosas que se rompen por separado.",
    blocks: [
      {
        label: "Hoy",
        lines: [
          "Una integración por emisor",
          "Un intercambio de claves por emisor",
          "Una llamada cada vez que algo pinta raro",
        ] as const,
      },
      {
        label: "Con Almena",
        lines: [
          "Una comprobación: la firma es buena, es de quien la enseña, responde al formulario, nadie la ha retirado",
          "Un emisor nuevo no necesita nada de ti",
          "La respuesta tiene la misma forma siempre",
        ] as const,
      },
    ] as const,
    note: "Almena te dice quién firmó y si sigue en pie. De qué emisores te fías sigue siendo decisión tuya, y el grado publicado que lleva un emisor es una entrada para tomarla, no la respuesta.",
  },
  {
    tab: "Firmar entre varios",
    kind: "swap",
    headline: "Actuar como organización, no como la contraseña de alguien",
    situation:
      "Lo que una organización hace y que importa no debería colgar de que una persona esté disponible, sea honesta y no la engañen.",
    blocks: [
      {
        label: "Hoy",
        lines: [
          "Una contraseña compartida",
          "Una clave que vive en un portátil",
          "Un acto que nadie puede atribuir",
        ] as const,
      },
      {
        label: "Con Almena",
        lines: [
          "Lo decidís vosotros: tres de cinco, o lo que acordéis",
          "Cada uno firma desde su propio dispositivo",
          "Todo acto lleva quién lo firmó",
        ] as const,
      },
    ] as const,
    note: "Que alguien se vaya no deja fuera al resto, y una firma pendiente que destruiría algo no se puede colar esperando a que la gente no esté: hay un suelo por debajo del cual no puede caducar.",
  },
] as const satisfies Widened<typeof organisationsEn>;

export const organisationCases = { en: organisationsEn, es: organisationsEs };
