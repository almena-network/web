/**
 * What the platform will let somebody do, and how far each part has got.
 *
 * **The list is functional and names nothing internal.** A reader arriving here has no plan, no
 * section numbers and no repositories, so a line that says *"the app that holds your identity"*
 * tells them something and a line that says *"phase three"* tells them only that they are not the
 * audience.
 *
 * Nothing is counted before it runs: a capability whose exit criterion does not pass yet is
 * *under way*, never *built* with a caveat beside it. The totals the page shows are derived from
 * this list, so they cannot drift from it.
 */

import type { Widened } from "./site";

/** How far along a capability is. */
export type RoadmapState = "built" | "under" | "planned" | "later";

const roadmapEn = {
  num: "06",
  kicker: "Where the work is",
  title: "What is built, and what is coming",
  lead: "Almena is open source and is being built in the open, in the order its dependencies allow. This is what the platform will let somebody do, and how far each part has got.",
  states: {
    built: "Built",
    under: "Under way",
    planned: "Planned",
    later: "Later",
  },
  /**
   * The capabilities, in the order they can be built rather than the order they matter.
   *
   * Fixed-length on purpose: the states below are held to this length by the compiler, so a
   * capability cannot be added without saying how far along it is, and the other language cannot
   * quietly carry one fewer.
   */
  items: [
    {
      title: "The record everything is written in",
      body: "One way of writing and signing an entry that two independent programs agree on, byte for byte.",
    },
    {
      title: "A node anybody can run",
      body: "Starting a node, creating an identity on it, and having anybody resolve that identity without asking permission.",
    },
    {
      title: "A network that agrees without trusting itself",
      body: "Several nodes serving the same answers, where what is settled stays settled, what the record says exists can be shown to still exist, and a new node can start from nothing without believing whoever serves it.",
    },
    {
      title: "The app that holds your identity",
      body: "One account across your phone, your tablet and your computer, and any of them able to throw out one you have lost.",
    },
    {
      title: "Delivery while your phone is shut",
      body: "An encrypted mailbox, so an issuer can hand you something when you are not there and you collect it later.",
    },
    {
      title: "Organisations, and who signs for them",
      body: "A university, a professional body or an administration operating as itself, with more than one person having to agree on what matters.",
    },
    {
      title: "Vouching for an organisation",
      body: "A published grade saying how far an organisation has been checked, and a withdrawal that takes effect the moment it is decided.",
    },
    {
      title: "The public catalogue of what is asked for",
      body: "Every request form published where anybody can read it, next to everybody else asking for the same thing.",
    },
    {
      title: "Issuing, proving and revoking",
      body: "The whole errand end to end: a credential issued against a published form, answered as a proof, checked, and revoked when it stops being true.",
    },
    {
      title: "Getting back in when you lose everything",
      body: "Guardians you chose, a recovery that empties the devices you lost, and an identity that is yours again.",
    },
    {
      title: "Open beyond the pilot",
      body: "The platform open to anyone, with a real credential from a real issuer accepted by a real verifier.",
    },
    {
      title: "Voting on the network itself",
      body: "Proposals and votes with a frozen roll of who may take part, so decisions about Almena are taken the way Almena works.",
    },
    {
      title: "Working with wallets that already exist",
      body: "Speaking the protocols other identity systems already use, so a credential does not need Almena at both ends.",
    },
  ] as const,
  note: "“Later” is not a longer queue. Those two wait on something happening — a first public vote to hold, an integrator asking — and not on a date.",
};

/**
 * Spanish, typed against English so that the compiler is the catalogue check.
 *
 * A key English has and this lacks is an error; a key this has and English lacks is an excess
 * property, also an error; and because the capabilities are a fixed-length list, one language
 * listing fewer of them is an error too. That last one is the whole point: a roadmap that exists
 * in one language is a roadmap somebody reads and believes complete.
 */
const roadmapEs: Widened<typeof roadmapEn> = {
  num: "06",
  kicker: "Dónde está el trabajo",
  title: "Qué está hecho, y qué viene",
  lead: "Almena es de código abierto y se construye a la vista, en el orden que permiten sus dependencias. Esto es lo que la plataforma va a dejar hacer, y hasta dónde ha llegado cada parte.",
  states: {
    built: "Hecho",
    under: "En curso",
    planned: "Previsto",
    later: "Más adelante",
  },
  items: [
    {
      title: "El registro en el que se escribe todo",
      body: "Una única forma de escribir y firmar una entrada en la que dos programas independientes coinciden byte a byte.",
    },
    {
      title: "Un nodo que puede levantar cualquiera",
      body: "Arrancar un nodo, crear en él una identidad, y que cualquiera la resuelva sin pedir permiso.",
    },
    {
      title: "Una red que se pone de acuerdo sin fiarse de sí misma",
      body: "Varios nodos sirviendo las mismas respuestas, donde lo firme sigue firme, lo que el registro dice que existe se puede demostrar que sigue existiendo, y un nodo nuevo puede arrancar desde cero sin creerse a quien le sirve.",
    },
    {
      title: "La aplicación que guarda tu identidad",
      body: "Una cuenta en tu móvil, tu tableta y tu ordenador a la vez, y desde cualquiera echar al que has perdido.",
    },
    {
      title: "Entrega con el móvil apagado",
      body: "Un buzón cifrado, para que un emisor pueda entregarte algo cuando no estás y lo recojas más tarde.",
    },
    {
      title: "Entidades, y quién firma por ellas",
      body: "Una universidad, un colegio profesional o una administración operando como tal, con más de una persona teniendo que estar de acuerdo en lo que importa.",
    },
    {
      title: "Acreditar a una entidad",
      body: "Un grado publicado que dice hasta dónde se ha comprobado a una entidad, y una retirada que surte efecto en el momento en que se decide.",
    },
    {
      title: "El catálogo público de lo que se pide",
      body: "Cada formulario de petición publicado donde cualquiera puede leerlo, al lado de todos los demás que piden lo mismo.",
    },
    {
      title: "Emitir, probar y revocar",
      body: "El trámite entero de punta a punta: una credencial emitida contra un formulario publicado, respondida como prueba, comprobada, y revocada cuando deja de ser cierta.",
    },
    {
      title: "Volver a entrar cuando lo pierdes todo",
      body: "Guardianes que elegiste, una recuperación que vacía los dispositivos perdidos, y una identidad que vuelve a ser tuya.",
    },
    {
      title: "Abierta más allá del piloto",
      body: "La plataforma abierta a cualquiera, con una credencial real de un emisor real aceptada por un verificador real.",
    },
    {
      title: "Votación sobre la propia red",
      body: "Propuestas y votos con un censo congelado de quién puede participar, para que las decisiones sobre Almena se tomen como funciona Almena.",
    },
    {
      title: "Funcionar con las carteras que ya existen",
      body: "Hablar los protocolos que otros sistemas de identidad ya usan, para que una credencial no necesite Almena en los dos extremos.",
    },
  ] as const,
  note: "«Más adelante» no es una cola más larga. Esas dos esperan a que pase algo — una primera votación pública que celebrar, un integrador que lo pida — y no a una fecha.",
};

/**
 * How far each capability has got, in the same order.
 *
 * **A state is a fact and not a word**, so it lives here once rather than in each language, where
 * it would be something to translate and therefore something to get wrong.
 *
 * The type is a mapped type over the capability list — written through a type parameter so that
 * it stays homomorphic and keeps the tuple's length — which is what makes adding a capability
 * without saying how far along it is fail to compile.
 */
type StateForEach<T extends readonly unknown[]> = {
  [K in keyof T]: RoadmapState;
};

export const roadmapStates: StateForEach<(typeof roadmapEn)["items"]> = [
  "built",
  "built",
  "built",
  "planned",
  "planned",
  "planned",
  "planned",
  "planned",
  "planned",
  "planned",
  "planned",
  "later",
  "later",
];

export const roadmap = {
  en: roadmapEn,
  es: roadmapEs,
};
