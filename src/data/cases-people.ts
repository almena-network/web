/**
 * Six errands, told from the side of the person doing them.
 *
 * Five of the six are the same argument in a different coat — **you are asked a question, and the
 * answer is all that leaves** — so five of the six are drawn as the credential: rows that stay
 * shut, and one that opens. The sixth is about losing a phone, which is not a disclosure at all,
 * so it is drawn the other way.
 *
 * They are ordinary on purpose: an age check, a licence, a degree, a council certificate. A use
 * case nobody has ever had to do proves nothing. No organisation is named anywhere, because
 * naming one would be inventing a fact about it, and every slide ends on what it does *not* do —
 * a carousel is where a platform oversells itself, and that line is what stops this one.
 */

import type { Widened } from "./site";

const peopleEn = [
  {
    tab: "Age",
    kind: "card",
    headline: "“Are you of age?”",
    situation:
      "A shop, a site or a door has to know you are old enough. Today that means handing over a document that says far more than that.",
    blocks: [
      {
        label: "kept",
        lines: [
          "Your name",
          "Your date of birth",
          "Your document number",
          "Your address",
        ] as const,
      },
      { label: "shown", lines: ["Of age: yes"] as const },
    ] as const,
    note: "The question has to be one somebody wrote down in advance: over 18 works because it was declared, over 21 only if that was declared too. And the answer you give is stable, so two sites that both receive it can tell it came from the same person — this minimises what you show; it does not make you untraceable.",
  },
  {
    tab: "Licensed",
    kind: "card",
    headline: "“Registered, and in this speciality?”",
    situation:
      "A client, a hospital, a court or a marketplace has to know you are on the register and in good standing before letting you work.",
    blocks: [
      {
        label: "kept",
        lines: [
          "Your registration number",
          "Your address",
          "Your record",
        ] as const,
      },
      {
        label: "shown",
        lines: ["Registered: yes · Speciality"] as const,
      },
    ] as const,
    note: "If you are struck off it stops verifying from that moment, with nobody to ring and nothing to hand back. What Almena never does is judge whether your professional body was right to do it.",
  },
  {
    tab: "Degree",
    kind: "card",
    headline: "“This degree, from this university?”",
    situation:
      "An employer wants to know your degree is real. Today they either believe a PDF anybody could edit, or they ring the university and wait.",
    blocks: [
      {
        label: "kept",
        lines: ["Your marks", "Your record", "Your date of birth"] as const,
      },
      { label: "shown", lines: ["Graduated: yes"] as const },
    ] as const,
    note: "The university signs it once instead of answering verifications forever, which is the half of this that pays for itself. It stays the university's fact: Almena carries it and does not check it.",
  },
  {
    tab: "Paperwork",
    kind: "card",
    headline: "“Registered as resident here?”",
    situation:
      "Residence, student status, a recognised degree of disability. Today you queue at one counter for a certificate in order to hand it in at another.",
    blocks: [
      {
        label: "kept",
        lines: [
          "Your file",
          "Your exact address",
          "Everything else the register holds",
        ] as const,
      },
      { label: "shown", lines: ["Resident: yes"] as const },
    ] as const,
    note: "Almena changes what has to travel for you to prove something. It changes nothing about what an administration knows, how it came to know it, or whether it is right.",
  },
  {
    tab: "New account",
    kind: "card",
    headline: "“A real person, of age, resident here?”",
    situation:
      "Opening an account somewhere that has to check who you are. Today you photograph a passport and hand over everything on it to get past three questions.",
    blocks: [
      {
        label: "kept",
        lines: [
          "The photograph of your document",
          "Your document number",
          "Your full address",
        ] as const,
      },
      {
        label: "shown",
        lines: ["A person: yes", "Of age: yes", "Resident: yes"] as const,
      },
    ] as const,
    note: "Three answers instead of a document, which is less for them to hold and less for you to have handed over. What a regulator obliges them to keep is a separate question, and not one a protocol answers.",
  },
  {
    tab: "Lost phone",
    kind: "swap",
    headline: "You lose it, and it is still yours",
    situation:
      "The question everybody asks about holding your own keys, answered before you are in a position to have to ask it.",
    blocks: [
      {
        label: "What never happens",
        lines: [
          "Somebody else holding your identity for you",
          "A guardian able to use it",
          "Us able to reach it",
        ] as const,
      },
      {
        label: "What you do",
        lines: [
          "From any other device, throw the lost one out at once",
          "If everything is gone, the guardians you chose bring you back",
          "Your recovery words sit under both",
        ] as const,
      },
    ] as const,
    note: "Guardians are a way back and never a way in. They can help you return; they can never act as you, and neither can we. Choosing them is something you do before you need them, not after.",
  },
] as const;

/**
 * Spanish, typed against English so that the compiler is the catalogue check.
 *
 * A key English has and this lacks is an error; a key this has and English lacks is an excess
 * property, also an error — and because every list here is fixed-length, a slide missing from one
 * language, or a row of the picture, is an error too. A carousel with five cases in one language
 * and six in the other is exactly the half language this check exists to stop.
 *
 * Written with `satisfies` rather than as an annotation, because an annotation would widen `kind`
 * to `string` along with the prose, and a language could then ask for a picture that does not
 * exist. This way the catalogue check still runs in both directions and the two pictures stay a
 * closed set.
 */
const peopleEs = [
  {
    tab: "Mayor de edad",
    kind: "card",
    headline: "«¿Eres mayor de edad?»",
    situation:
      "Una tienda, un sitio o una puerta tiene que saber que tienes la edad. Hoy eso significa entregar un documento que dice mucho más que eso.",
    blocks: [
      {
        label: "se queda",
        lines: [
          "Tu nombre",
          "Tu fecha de nacimiento",
          "Tu número de documento",
          "Tu dirección",
        ] as const,
      },
      { label: "se enseña", lines: ["Mayor de edad: sí"] as const },
    ] as const,
    note: "La pregunta tiene que ser una que alguien escribió por adelantado: «mayor de 18» funciona porque se declaró, «mayor de 21» solo si también se declaró. Y la respuesta que das es estable, así que dos sitios que la reciban pueden saber que viene de la misma persona — esto minimiza lo que enseñas; no te hace ilocalizable.",
  },
  {
    tab: "Colegiado",
    kind: "card",
    headline: "«¿Colegiado, y en esta especialidad?»",
    situation:
      "Un cliente, un hospital, un juzgado o un marketplace tiene que saber que estás en el registro y en alta antes de dejarte trabajar.",
    blocks: [
      {
        label: "se queda",
        lines: [
          "Tu número de colegiado",
          "Tu dirección",
          "Tu historial",
        ] as const,
      },
      {
        label: "se enseña",
        lines: ["Colegiado: sí · Especialidad"] as const,
      },
    ] as const,
    note: "Si causas baja deja de verificar desde ese momento, sin nadie a quien llamar y sin nada que devolver. Lo que Almena no hace nunca es juzgar si tu colegio hizo bien en darte de baja.",
  },
  {
    tab: "Título",
    kind: "card",
    headline: "«¿Este título, de esta universidad?»",
    situation:
      "Un empleador quiere saber que tu título es real. Hoy o se cree un PDF que cualquiera puede retocar, o llama a la universidad y espera.",
    blocks: [
      {
        label: "se queda",
        lines: [
          "Tus notas",
          "Tu expediente",
          "Tu fecha de nacimiento",
        ] as const,
      },
      { label: "se enseña", lines: ["Titulado: sí"] as const },
    ] as const,
    note: "La universidad lo firma una vez en lugar de contestar verificaciones para siempre, que es la mitad de esto que se paga sola. Sigue siendo un hecho suyo: Almena lo transporta y no lo comprueba.",
  },
  {
    tab: "Trámite",
    kind: "card",
    headline: "«¿Consta como residente aquí?»",
    situation:
      "Residencia, condición de estudiante, un grado de discapacidad reconocido. Hoy haces cola en una ventanilla para un certificado y así entregarlo en otra.",
    blocks: [
      {
        label: "se queda",
        lines: [
          "Tu expediente",
          "Tu dirección exacta",
          "Todo lo demás que consta en el registro",
        ] as const,
      },
      { label: "se enseña", lines: ["Residente: sí"] as const },
    ] as const,
    note: "Almena cambia lo que tiene que viajar para que demuestres algo. No cambia nada de lo que una administración sabe, de cómo llegó a saberlo, ni de si acierta.",
  },
  {
    tab: "Abrir una cuenta",
    kind: "card",
    headline: "«¿Persona real, mayor de edad, reside aquí?»",
    situation:
      "Abrir una cuenta donde tienen que comprobar quién eres. Hoy fotografías un pasaporte y entregas todo lo que pone en él para pasar tres preguntas.",
    blocks: [
      {
        label: "se queda",
        lines: [
          "La foto de tu documento",
          "Tu número de documento",
          "Tu dirección completa",
        ] as const,
      },
      {
        label: "se enseña",
        lines: ["Persona: sí", "Mayor de edad: sí", "Residente: sí"] as const,
      },
    ] as const,
    note: "Tres respuestas en lugar de un documento, que es menos para que ellos lo guarden y menos que hayas entregado tú. Lo que un regulador les obliga a conservar es otra pregunta, y no una que conteste un protocolo.",
  },
  {
    tab: "Perder el móvil",
    kind: "swap",
    headline: "Lo pierdes, y sigue siendo tuya",
    situation:
      "La pregunta que todo el mundo hace sobre custodiar tus propias claves, respondida antes de que estés en situación de tener que hacerla.",
    blocks: [
      {
        label: "Qué no pasa nunca",
        lines: [
          "Que otro custodie tu identidad por ti",
          "Que un guardián pueda usarla",
          "Que nosotros podamos alcanzarla",
        ] as const,
      },
      {
        label: "Qué haces",
        lines: [
          "Desde cualquier otro dispositivo, echas al perdido en el momento",
          "Si lo has perdido todo, los guardianes que elegiste te devuelven la entrada",
          "Tus palabras de recuperación están debajo de las dos",
        ] as const,
      },
    ] as const,
    note: "Los guardianes son una vuelta y nunca una entrada. Pueden ayudarte a volver; nunca pueden actuar como tú, y nosotros tampoco. Elegirlos es algo que haces antes de necesitarlos, no después.",
  },
] as const satisfies Widened<typeof peopleEn>;

export const peopleCases = { en: peopleEn, es: peopleEs };
