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
    lead: "Prove what you need to prove, and nothing else. An organisation you already deal with confirms something it knows about you. You keep it on your phone. When somebody asks, you send an answer they can check themselves — not a copy of your papers.",
    claims: [
      "Open source",
      "Decentralised",
      "Everything travels encrypted",
      "Everything leaves a record",
      "Your data is not in the network",
    ] as const,
    note: "There is not one piece of your data in the network. Not your name, not your address, not your date of birth.",
    ctaPrimary: "See how it works",
    ctaSecondary: "Read the code",
  },
  how: {
    num: "01",
    kicker: "How it works",
    title: "Three parties, and nobody in the middle",
    lead: "A university stands behind its graduates. A professional body behind its members. A council behind what its register says. Each of them carries a public note saying how far it has been checked itself. You keep what they signed, and you show it when somebody asks.",
    points: [
      {
        title: "Whoever already knows signs it",
        body: "They sign something they knew about you anyway: that you graduated, that you are on the register, that you are old enough. They learn nothing new by doing it.",
      },
      {
        title: "You keep it",
        body: "On your phone, your tablet or your computer, behind the security chip the device already has. Nobody keeps it for you, and nobody can open it.",
      },
      {
        title: "Whoever needs it asks",
        body: "They ask — “are you old enough?” — and your device answers with a proof made from what you keep. They check it themselves: that the signature is good, that it is yours, and that nobody has withdrawn it. They never see your papers.",
      },
    ],
  },
  different: {
    num: "03",
    kicker: "What is different",
    title: "The asking is public. Your answers never are",
    lead: "Nothing you answer is ever published — not one piece of it, not once. What gets published is the question. Every request is made with a form written down beforehand, and every form sits in a list anybody can read and compare.",
    body: "So a shop that asks for your whole date of birth just to check your age is not doing it in secret. What it asks for is there for anybody to look up, next to everybody else who asks for less. What you answered stays between the two of you.",
    honest:
      "This does not make abuse impossible. Nothing in software can. It makes it visible, and the remedy is outside: reputation, and the law.",
  },
  keys: {
    num: "04",
    kicker: "Your keys",
    title: "It really is yours, and there is a way back",
    lead: "If your identity is yours, nobody can take it away. It also means nobody can hand it back. Almena is built so that the second half has an answer — and so that everything the device keeps is encrypted, with keys made inside its own chip that never leave it.",
    points: [
      {
        title: "Several devices",
        body: "Your account works on all of them at once, and from any one of them you can throw out the one you lost, right then. Nothing to type in, nothing to wait for.",
      },
      {
        title: "Guardians",
        body: "People you choose who can help you back in if you lose everything. They never hold your identity, and they can never take it.",
      },
      {
        title: "Words as the floor",
        body: "A handful of words you keep. It is the last resort, and the app tells you straight what it can and cannot do without them.",
      },
    ],
    honest:
      "Not every computer has that chip. Where it is missing the protection is a step lower, and the app tells you so instead of letting you assume.",
  },
  network: {
    num: "05",
    kicker: "The network",
    title: "Open, traceable, and answerable",
    lead: "Anybody can run a node: no permission, no sign-up, no money down. The program it runs is public, so what a node does can be read instead of taken on trust. Everything that happens is written down and signed, and anybody can go back over it. None of what is written down is data about you.",
    points: [
      {
        title: "A hostile node can refuse, never lie",
        body: "Everything you get is signed by whoever had the right to say it. Whoever passed it to you is only the messenger, and it does not matter who they are.",
      },
      {
        title: "Every act leaves a trace",
        body: "Issuing something, withdrawing it, trusting somebody: each one is written down and signed, and none of it is ever rewritten. A mistake is fixed by adding the correction after it, never by covering it up.",
      },
      {
        title: "What travels is encrypted",
        body: "Messages between an organisation, you and whoever is asking are encrypted the whole way. The node carrying one cannot read it, and neither can anybody watching the wire.",
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
        body: "Whoever issued it keeps what they know. The network keeps who is who, who is trusted and what has been withdrawn — and not every node keeps the same part of that.",
      },
      {
        title: "It is not a place where transactions happen",
        body: "No payments, no exchange of value, no tokens.",
      },
      {
        title: "It is not a vault, a loyalty scheme or a messenger",
        body: "A credential stands behind one fact about a person. It is not a coupon, a receipt or a file.",
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
    body: "Almena is open source and belongs to nobody. There is no master key over the rules and no privileged reader of the network. Anybody can run a node, the program it runs is public, what travels between people is encrypted, and every answer can be checked by whoever gets it.",
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
    lead: "Demuestra lo que necesitas demostrar, y nada más. Una organización con la que ya tratas confirma algo que sabe de ti. Tú lo guardas en el móvil. Cuando alguien te lo pide, le mandas una respuesta que puede comprobar él mismo, no una copia de tus papeles.",
    claims: [
      "Código abierto",
      "Descentralizada",
      "Todo viaja cifrado",
      "De todo queda constancia",
      "Tus datos no están en la red",
    ] as const,
    note: "En la red no hay ni un dato tuyo. Ni tu nombre, ni tu dirección, ni tu fecha de nacimiento.",
    ctaPrimary: "Ver cómo funciona",
    ctaSecondary: "Leer el código",
  },
  how: {
    num: "01",
    kicker: "Cómo funciona",
    title: "Tres partes, y nadie en medio",
    lead: "Una universidad responde por sus titulados. Un colegio profesional, por sus colegiados. Un ayuntamiento, por lo que dice su padrón. Cada uno lleva una nota pública que dice hasta dónde se le ha comprobado a él. Tú guardas lo que firmaron, y lo enseñas cuando te lo piden.",
    points: [
      {
        title: "Lo firma quien ya lo sabía",
        body: "Firma algo que sabía de ti de todas formas: que te licenciaste, que estás colegiado, que tienes la edad. No se entera de nada nuevo por hacerlo.",
      },
      {
        title: "Tú lo guardas",
        body: "En tu móvil, tu tableta o tu ordenador, detrás del chip de seguridad que el aparato ya trae. Nadie te lo guarda, y nadie puede abrirlo.",
      },
      {
        title: "Pregunta quien lo necesita",
        body: "Pregunta — «¿tienes la edad?» — y tu dispositivo responde con una prueba hecha con lo que guardas. Él la comprueba solo: que la firma es buena, que es tuya y que nadie la ha retirado. Nunca ve tus papeles.",
      },
    ],
  },
  different: {
    num: "03",
    kicker: "Qué es distinto",
    title: "Lo público es la petición, nunca tus respuestas",
    lead: "Nada de lo que respondes se publica nunca: ni un dato, ni una vez. Lo que se publica es la pregunta. Cada petición se hace con un formulario escrito de antemano, y cada formulario está en una lista que cualquiera puede leer y comparar.",
    body: "Así, una tienda que te pide la fecha de nacimiento entera solo para comprobar la edad no lo hace a escondidas. Lo que pide está ahí para que cualquiera lo consulte, al lado de todos los que piden menos. Lo que tú respondiste se queda entre los dos.",
    honest:
      "Esto no hace imposible el abuso. Ningún programa puede. Lo hace visible, y el remedio está fuera: la reputación y la ley.",
  },
  keys: {
    num: "04",
    kicker: "Tus claves",
    title: "Es tuya de verdad, y hay forma de volver",
    lead: "Si la identidad es tuya, nadie te la puede quitar. También quiere decir que nadie te la puede devolver. Almena está hecha para que esa segunda mitad tenga solución — y para que todo lo que guarda el aparato vaya cifrado, con claves que nacen dentro de su propio chip y no salen de ahí.",
    points: [
      {
        title: "Varios dispositivos",
        body: "Tu cuenta funciona en todos a la vez, y desde cualquiera puedes echar al que has perdido, en ese momento. Nada que teclear y nada que esperar.",
      },
      {
        title: "Guardianes",
        body: "Personas que eliges y que pueden ayudarte a volver si lo pierdes todo. Nunca custodian tu identidad, y nunca pueden quedársela.",
      },
      {
        title: "Las palabras como suelo",
        body: "Unas palabras que guardas tú. Es el último recurso, y la aplicación te dice claro qué puede y qué no puede hacer sin ellas.",
      },
    ],
    honest:
      "No todos los ordenadores llevan ese chip. Donde falta, la protección baja un escalón, y la aplicación te lo dice en vez de dejar que lo supongas.",
  },
  network: {
    num: "05",
    kicker: "La red",
    title: "Abierta, trazable, y que responde",
    lead: "Cualquiera puede montar un nodo: sin permiso, sin darse de alta y sin poner dinero. El programa que corre es público, así que lo que hace se puede leer en vez de creérselo. Todo lo que pasa queda escrito y firmado, y cualquiera puede repasarlo. Nada de lo que queda escrito es un dato tuyo.",
    points: [
      {
        title: "Un nodo hostil puede negarse, nunca mentir",
        body: "Todo lo que recibes va firmado por quien tenía derecho a decirlo. Quien te lo pasa es solo el mensajero, y da igual quién sea.",
      },
      {
        title: "Todo acto deja rastro",
        body: "Emitir algo, retirarlo, confiar en alguien: cada cosa queda escrita y firmada, y nada de eso se reescribe nunca. Un error se arregla añadiendo la corrección detrás, nunca tapándolo.",
      },
      {
        title: "Lo que viaja va cifrado",
        body: "Los mensajes entre una organización, tú y quien pregunta van cifrados todo el camino. El nodo que los lleva no puede leerlos, y quien mire el cable tampoco.",
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
        body: "Quien lo emitió tiene lo que sabe. La red guarda quién es quién, en quién se confía y qué se ha retirado — y no todos los nodos guardan la misma parte.",
      },
      {
        title: "No es un sitio donde ocurran transacciones",
        body: "Ni pagos, ni intercambio de valor, ni tokens.",
      },
      {
        title: "No es un almacén, ni fidelización, ni mensajería",
        body: "Una credencial responde por un hecho sobre una persona. No es un cupón, ni un recibo, ni un fichero.",
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
    body: "Almena es de código abierto y no es de nadie. No hay una llave maestra sobre las reglas ni un lector privilegiado de la red. Cualquiera puede montar un nodo, el programa que corre es público, lo que viaja entre personas va cifrado, y cada respuesta la puede comprobar quien la recibe.",
    cta: "Leer el código en GitHub",
  },
};

export const content = {
  en: contentEn,
  es: contentEs,
};
