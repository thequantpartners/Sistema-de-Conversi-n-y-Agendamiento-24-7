import { ProjectConfig } from "@/core/types/project";

export const templateBaseConfig: ProjectConfig = {
  id: "template-base",
  slug: "template-base",
  branding: {
    name: "[Nombre del Negocio]",
    tagline: "Agendamiento y Conversión 24/7",
    logoText: "tu",
    logoSubtext: "marca",
    primaryColor: "#3b82f6",
    accentColor: "#60a5fa",
  },
  socialProof: {
    verifiedMetric: "+100",
    verifiedLabel: "citas agendadas con éxito",
    rating: "4.9/5",
    reviewCount: "50+ clientes satisfechos",
  },
  hero: {
    badge: "AGENDAMIENTO DIRECTO · SIN MENSUALIDADES",
    title: "[Promesa Principal para tu Nicho Específico].\nSin esperas ni llamadas vacías.",
    subtitle: "Reserva tu sesión estratégica en vivo directamente en nuestro calendario oficial en menos de 2 minutos.",
    callout: "evaluación gratuita · cupos limitados por semana",
    honestLede: "Sabemos que tu tiempo es valioso. Hemos eliminado los formularios extensos y las cadenas de correos para que agendes directamente con nuestro equipo de especialistas.",
    ctaPrimary: "Agendar mi sesión ahora",
    ctaSecondaryLink: "#como-funciona",
    ctaSecondaryText: "Ver cómo funciona ↓",
  },
  howItWorks: {
    entryNumber: "Entry 01",
    title: "¿Cómo funciona este sistema?",
    subtitle: "Tres sencillos pasos para asegurar tu turno.",
    steps: [
      {
        number: "1",
        title: "COMPLETA 3 PREGUNTAS DE FILTRO",
        description: "Breves preguntas para entender tus requerimientos y preparar la sesión.",
      },
      {
        number: "2",
        title: "ELIGE DÍA Y HORA EN VIVO",
        description: "Selecciona el horario que mejor se acomode a tu agenda.",
      },
      {
        number: "3",
        title: "RECIBE CONFIRMACIÓN EN WHATSAPP",
        description: "Te enviamos el enlace de conexión y recordatorios directos.",
      },
    ],
    bridgeText: "Revisa los detalles técnicos y garantías ↓",
  },
  mathComparison: {
    entryNumber: "Entry 02",
    title: "Transparencia y claridad",
    subtitle: "Los números de nuestro servicio.",
    bigNumbers: [
      {
        value: "100%",
        label: "atención personalizada en cada llamada agendada.",
        tag: "Compromiso",
      },
      {
        value: "0 min",
        label: "de espera para coordinar tu cita.",
        tag: "Inmediato",
      },
      {
        value: "24/7",
        label: "disponibilidad del sistema para reservar en cualquier momento.",
        tag: "Siempre activo",
      },
    ],
    tableRows: [
      {
        concept: "Sesión Estratégica",
        detail: "30 a 45 minutos de asesoría 1 a 1 enfocada en tu caso particular.",
      },
      {
        concept: "Modalidad",
        detail: "Online vía Google Meet / Zoom con enlace directo a tu calendario.",
      },
    ],
    bridgeText: "Verifica si este servicio es el indicado para ti ↓",
  },
  whatItIs: {
    entryNumber: "Entry 03",
    title: "¿Para quién es este servicio?",
    items: [
      {
        isNot: "No es una charla de ventas genérica sin valor práctico.",
        is: "Es una sesión de diagnóstico profundo adaptada a tus objetivos reales.",
      },
      {
        isNot: "No te dejamos con dudas sin responder.",
        is: "Recibirás un plan de acción concreto y pasos a seguir.",
      },
    ],
    bridgeText: "Inicia tu proceso de agendamiento aquí ↓",
  },
  qualification: {
    entryNumber: "Entry 04",
    title: "Formulario de Reserva",
    subtitle: "Verifica disponibilidad completando los siguientes datos.",
    questions: [
      {
        id: "p1",
        stepNumber: 1,
        title: "¿Cuál es tu principal objetivo para esta sesión?",
        options: [
          { id: "o1", label: "Optimizar y escalar mi negocio actual", qualifies: true },
          { id: "o2", label: "Lanzar un nuevo servicio o producto", qualifies: true },
        ],
      },
      {
        id: "p2",
        stepNumber: 2,
        title: "¿En cuánto tiempo deseas comenzar?",
        options: [
          { id: "u1", label: "De inmediato (esta semana)", qualifies: true },
          { id: "u2", label: "En los próximos 30 días", qualifies: true },
        ],
      },
    ],
    disqualifiedScreen: {
      title: "Gracias por tu interés",
      description: "En este momento no disponemos de cupos que se ajusten a ese perfil. Te invitamos a comunicarte directamente por WhatsApp.",
      resourceCtaText: "Contactar por WhatsApp",
      whatsappCtaText: "Escribir por WhatsApp",
    },
  },
  faq: {
    entryNumber: "Entry 05",
    title: "Preguntas Frecuentes",
    items: [
      {
        question: "¿Cómo accedo a la reunión una vez confirmada?",
        answer: "Recibirás un mensaje automático por WhatsApp y un correo con el enlace directo de Google Meet / Zoom.",
      },
    ],
  },
  booking: {
    calendarType: "calendly",
    calendarUrl: "https://calendly.com/your-username/meeting",
    whatsappNumber: "+1234567890",
    currency: "USD",
  },
};
