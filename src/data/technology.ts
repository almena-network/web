/**
 * Why the platform belongs to nobody, and what that buys the person reading.
 *
 * *Decentralised* is a word that gets used as a slogan, and a slogan is exactly what somebody
 * should not have to accept. So this section does not explain the shape — it lists what the shape
 * **does**: four things that can and cannot happen to you because there is no company holding this
 * up and no server everything passes through.
 *
 * And then the half that keeps it honest, because the four above are the easy part to say. Almena
 * does decide some things, they are named, and naming them is the difference between a claim and
 * a description.
 */

import type { Widened } from "./site";

const technologyEn = {
  num: "07",
  kicker: "Technology",
  title: "Nobody owns it, and that is the point",
  lead: "There is no company holding this up, and no server everything passes through. That is not a slogan: it changes what can happen to you, and it is worth being exact about what it does and does not mean.",

  why: [
    {
      title: "Nobody can switch it off",
      body: "There is no company holding it up. If a node goes down the others carry on, and if whoever started it walked away tomorrow the network would not notice.",
    },
    {
      title: "Nobody sits in the middle watching",
      body: "There is no server everything passes through. What you show goes from your device to whoever asked, and nobody else sees it go by.",
    },
    {
      title: "You are not tied to whoever gave it to you",
      body: "Your identity does not live in anybody's account. Stop liking the node you use and you change node, not identity — and nothing you hold stops working.",
    },
    {
      title: "The rules cannot be changed quietly",
      body: "There is no master key over them. A change is proposed in the open, and until it is agreed what counts is what is already written down.",
    },
  ] as const,
  whyNote:
    "Decentralised does not mean nobody decides anything. Almena decides who carries the trust grade, who may hold a public name, and who may define the forms everybody asks with — and it is Almena that calls the network's votes. That is a decision on the record, not an oversight, and it is the part of this that is not neutral.",

  aheadTitle: "What it is aiming at",
  ahead: [
    {
      name: "EUDI ARF",
      body: "The framework behind the European identity wallet.",
    },
    {
      name: "ISO 18013-5",
      body: "The driving licence on a phone, and one of the places the platform's own choices come from.",
    },
    {
      name: "OpenID4VP",
      body: "A way of asking for a credential that other systems already speak.",
    },
  ] as const,
  aheadNote:
    "These three are not built. They are why the platform was designed the way it was: the gaps a bridge to them would need are held open, so that reaching them is an extension rather than starting again.",
};

/**
 * Spanish, typed against English so that the compiler is the catalogue check.
 *
 * A key English has and this lacks is an error; a key this has and English lacks is an excess
 * property, also an error — and every list here is fixed-length, so an advantage claimed in one
 * language and missing from the other does not build.
 */
const technologyEs: Widened<typeof technologyEn> = {
  num: "07",
  kicker: "Tecnología",
  title: "No es de nadie, y eso es lo importante",
  lead: "No hay una empresa sosteniendo esto, ni un servidor por el que pase todo. No es un eslogan: cambia lo que te puede pasar, y merece la pena ser exacto sobre lo que quiere decir y lo que no.",

  why: [
    {
      title: "Nadie la puede apagar",
      body: "No hay una empresa sosteniéndola. Si un nodo se cae, los demás siguen; y si quien la empezó se fuera mañana, la red ni se entera.",
    },
    {
      title: "Nadie está en medio mirando",
      body: "No hay un servidor por el que pase todo. Lo que enseñas va de tu dispositivo a quien lo pidió, y nadie más lo ve pasar.",
    },
    {
      title: "No dependes de quien te la dio",
      body: "Tu identidad no vive en la cuenta de nadie. Si deja de gustarte el nodo que usas, cambias de nodo y no de identidad — y nada de lo que tienes deja de funcionar.",
    },
    {
      title: "Las reglas no se cambian a escondidas",
      body: "No hay una llave maestra sobre ellas. Un cambio se propone a la vista, y hasta que se acuerde lo que vale es lo que ya está escrito.",
    },
  ] as const,
  whyNote:
    "Descentralizada no quiere decir que no decida nadie. Almena decide quién lleva el sello de confianza, quién puede tener un nombre público y quién puede definir los formularios con los que todos preguntan — y es Almena quien convoca las votaciones de la red. Eso está decidido y escrito, no es un descuido, y es la parte de esto que no es neutral.",

  aheadTitle: "Hacia dónde mira",
  ahead: [
    {
      name: "EUDI ARF",
      body: "El marco que hay detrás de la cartera de identidad europea.",
    },
    {
      name: "ISO 18013-5",
      body: "El carné de conducir en el móvil, y uno de los sitios de donde vienen las decisiones de la plataforma.",
    },
    {
      name: "OpenID4VP",
      body: "Una forma de pedir una credencial que otros sistemas ya hablan.",
    },
  ] as const,
  aheadNote:
    "Estas tres no están hechas. Son la razón de que la plataforma se diseñara como se diseñó: los huecos que haría falta rellenar para llegar hasta ellas están reservados, para que sea una extensión y no empezar de nuevo.",
};

export const technology = {
  en: technologyEn,
  es: technologyEs,
};
