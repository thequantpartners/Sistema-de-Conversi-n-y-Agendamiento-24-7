import { ProjectConfig } from "@/core/types/project";

export const quantPartnersConfig: ProjectConfig = {
  id: "quant-partners",
  slug: "quant-partners",
  branding: {
    name: "Quant Partners",
    tagline: "Diseño y Creación de Páginas Web Profesionales de Alta Conversión",
    logoText: "quant",
    logoSubtext: "partners",
    primaryColor: "#10b981",
    accentColor: "#34d399",
  },
  socialProof: {
    verifiedMetric: "+520",
    verifiedLabel: "páginas web y embudos entregados con éxito",
    rating: "4.9/5",
    reviewCount: "96 evaluaciones verificadas",
  },
  hero: {
    badge: "OFERTA ESPECIAL: S/ 700 PAGO ÚNICO (PRECIO REGULAR S/ 1,200)",
    title: "Tu Página Web Profesional Lista en 5 Días para Atraer Clientes Reales.",
    subtitle: "Diseñamos tu sitio web moderno, ultra-rápido y 100% adaptable a teléfonos celulares con botón directo a WhatsApp. Sin mensualidades obligatorias, sin procesos lentos y 100% de tu propiedad.",
    callout: "entrega en 5 días · botón directo a whatsapp · 100% de tu propiedad · sin mensualidades de permanencia",
    honestLede: "Un negocio sin página web oficial pierde confianza frente a sus clientes y le regala ventas a la competencia. Diseñamos tu web desde cero, optimizada para que cargue en menos de 2 segundos, transmita máxima autoridad y guíe a tus visitantes a escribirte directamente por WhatsApp.",
    ctaPrimary: "Solicitar mi Página Web por S/ 700",
    ctaSecondaryLink: "/portfolio",
    ctaSecondaryText: "Explorar Demos en Vivo 👀",
  },
  howItWorks: {
    entryNumber: "01 · EL PROCESO DE ENTREGA",
    title: "De la idea al lanzamiento de tu web, en 3 simples pasos.",
    subtitle: "Un proceso transparente, rápido y sin complicaciones técnicas para que tengas tu presencia digital operando.",
    steps: [
      {
        number: "1",
        title: "COORDINACIÓN Y ESTRUCTURACIÓN DE CONTENIDO",
        description: "Nos compartes la información básica de tu negocio: servicios, fotos, logotipo y número de WhatsApp comercial. Nosotros organizamos la arquitectura de persuasión.",
      },
      {
        number: "2",
        title: "DISEÑO A MEDIDA Y CONEXIÓN A WHATSAPP",
        description: "Construimos tu página web con diseño moderno, compatible al 100% con teléfonos celulares, carga veloz y botones estratégicos para captar consultas directas.",
      },
      {
        number: "3",
        title: "LANZAMIENTO Y ENTREGA TOTAL DE ACCESOS",
        description: "Publicamos tu web en tu propio dominio y hosting. Te entregamos todas las contraseñas y accesos de administración sin contratos ni cobros mensuales ocultos.",
      },
    ],
    bridgeText: "Revisa todo lo que incluye tu inversión de S/ 700 ↓",
  },
  mathComparison: {
    entryNumber: "02 · BENEFICIOS Y VALOR REAL",
    title: "Agencias tradicionales con cobros eternos vs. Tu web llave en mano.",
    subtitle: "Compara la diferencia entre pagar mensualidades innecesarias y tener una solución profesional de tu absoluta propiedad.",
    bigNumbers: [
      {
        value: "5 Días",
        label: "tiempo récord de diseño, configuración y publicación de tu página web.",
        tag: "Rapidez garantizada",
      },
      {
        value: "S/ 700",
        label: "tarifa plana en pago único con todo incluido (precio regular S/ 1,200).",
        tag: "Ahorro directo",
      },
      {
        value: "100%",
        label: "de tu propiedad: dominio, hosting, accesos y archivos bajo tu control.",
        tag: "Cero ataduras",
      },
    ],
    tableRows: [
      {
        concept: "Diseño 100% Mobile First",
        detail: "Estructura optimizada para que el 85% de usuarios que navegan desde teléfonos móviles tengan una experiencia fluida y rápida.",
      },
      {
        concept: "Captación Directa por WhatsApp",
        detail: "Botones flotantes y llamados a la acción estratégicamente ubicados para que los prospectos te escriban en un solo toque.",
      },
      {
        concept: "Panel Autoadministrable",
        detail: "Facilidad total para actualizar textos, fotos, productos o teléfonos cuando lo necesites, sin depender de programadores.",
      },
    ],
    bridgeText: "Conoce lo que incluye y lo que no incluye nuestro servicio ↓",
  },
  whatItIs: {
    entryNumber: "03 · TRANSPARENCIA TOTAL",
    title: "Lo que este servicio NO es (y lo que SÍ es):",
    items: [
      {
        isNot: "No es una plantilla barata y rota que tarda una eternidad en cargar en celulares.",
        is: "Es un diseño limpio, veloz y profesional adaptado a la identidad y colores de tu marca.",
      },
      {
        isNot: "No es un servicio con contratos de permanencia ni mensualidades forzosas de mantenimiento.",
        is: "Es una entrega llave en mano donde tú eres el único dueño de tu dominio, hosting y contenidos.",
      },
      {
        isNot: "No es un proyecto que tarde 2 o 3 meses en entregarse.",
        is: "Es un proceso ágil con entrega en 5 días hábiles listo para que empieces a promocionar tu negocio.",
      },
      {
        isNot: "No es un formulario de contacto frío que nadie responde a tiempo.",
        is: "Es una página pensada para generar acción inmediata conectada directo a tu WhatsApp.",
      },
    ],
    bridgeText: "Responde estas preguntas para coordinar tu página web ↓",
  },
  qualification: {
    entryNumber: "04 · COTIZACIÓN Y RESERVA",
    title: "Solicita tu Página Web Profesional",
    subtitle: "Completa estos datos para coordinar el inicio de tu web y asegurar la tarifa promocional de S/ 700.",
    questions: [
      {
        id: "business_type",
        stepNumber: 1,
        title: "¿De qué rubro o sector es tu negocio?",
        subtitle: "Selecciona la categoría que mejor representa lo que ofreces.",
        options: [
          {
            id: "servicios_profesionales",
            label: "Servicios Profesionales / Consultoría / Legal / B2B",
            description: "Abogados, contadores, agencias, consultores y asesores.",
            qualifies: true,
          },
          {
            id: "salud_estetica",
            label: "Salud, Clínicas, Dentistas o Estética",
            description: "Médicos especialistas, odontología, psicología o centros de belleza.",
            qualifies: true,
          },
          {
            id: "servicios_tecnicos",
            label: "Servicios Técnicos, Climatización o Mantenimiento",
            description: "Aire acondicionado, contratistas, electricistas y servicios a domicilio.",
            qualifies: true,
          },
          {
            id: "comercio_educacion",
            label: "Academias, Cursos, Eventos o Comercio Local",
            description: "Formación, gastronomía, eventos o venta de productos y servicios.",
            qualifies: true,
          },
        ],
      },
      {
        id: "has_domain",
        stepNumber: 2,
        title: "¿Cuentas actualmente con dominio web o hosting propio?",
        subtitle: "Si no tienes, nosotros te asesoramos para dejarlo 100% configurado a tu nombre.",
        options: [
          {
            id: "need_all",
            label: "No tengo nada, necesito que me asesoren desde cero",
            description: "Configuraremos tu dominio y hosting para tu nuevo proyecto.",
            qualifies: true,
          },
          {
            id: "have_domain_hosting",
            label: "Ya cuento con dominio y/o hosting activo",
            description: "Instalaremos y publicaremos la nueva web en tu propia cuenta.",
            qualifies: true,
          },
          {
            id: "redesign",
            label: "Tengo una web vieja y deseo renovarla por completo",
            description: "Reemplazaremos la página actual por un diseño moderno de alta conversión.",
            qualifies: true,
          },
        ],
      },
      {
        id: "urgency_timeline",
        stepNumber: 3,
        title: "¿En qué plazo buscas tener tu página web lista?",
        subtitle: "Nos permite programar los cupos de entrega del equipo de diseño.",
        options: [
          {
            id: "inmediato",
            label: "De inmediato (esta misma semana / 5 días)",
            description: "Quiero aprovechar la promoción de S/ 700 y lanzarla cuanto antes.",
            qualifies: true,
            badge: "Prioridad Alta",
          },
          {
            id: "proximas_semanas",
            label: "En los próximos 15 a 30 días",
            description: "Estoy reuniendo mi material y deseo asegurar el precio de oferta.",
            qualifies: true,
          },
          {
            id: "explorando",
            label: "Solo estoy consultando precios",
            description: "Buscando referencias para el futuro.",
            qualifies: true,
          },
        ],
      },
      {
        id: "decision_maker",
        stepNumber: 4,
        title: "¿Eres la persona encargada de tomar la decisión para la web?",
        subtitle: "Para comunicarnos directamente contigo por WhatsApp.",
        options: [
          {
            id: "solo_owner",
            label: "Sí, soy el dueño / fundador y tomo la decisión",
            description: "Coordinaremos contigo todos los detalles del diseño.",
            qualifies: true,
            badge: "Decisor Directo",
          },
          {
            id: "with_partners",
            label: "Tengo socio(s) y evaluamos la propuesta juntos",
            description: "Te enviaremos los detalles para presentárselos a tu equipo.",
            qualifies: true,
          },
        ],
      },
    ],
    disqualifiedScreen: {
      title: "¡Gracias por responder! 🙌",
      description: "Podemos iniciar el desarrollo de tu página web profesional en cualquier momento por la tarifa especial de S/ 700. Escríbenos directamente por WhatsApp para coordinar tu proyecto.",
      resourceCtaText: "Hablar por WhatsApp (+51 924 464 410)",
      whatsappCtaText: "Chatear por WhatsApp (+51 924 464 410)",
    },
  },
  faq: {
    entryNumber: "05 · PREGUNTAS FRECUENTES",
    title: "Preguntas Frecuentes:",
    items: [
      {
        question: "¿Qué incluye exactamente la oferta de S/ 700?",
        answer: "Incluye el diseño completo de tu página web profesional (secciones de inicio, servicios, nosotros, testimonios y contacto), adaptación 100% para teléfonos celulares, botón flotante de WhatsApp, vinculación a tu propio dominio y hosting, y entrega de accesos totales de administración.",
      },
      {
        question: "¿Tengo que pagar mensualidades obligatorias de mantenimiento?",
        answer: "No. Es un pago único de S/ 700. No cobramos mensualidades forzosas ni te atamos con contratos. La página web y todos sus archivos te pertenecen al 100%.",
      },
      {
        question: "¿En cuánto tiempo entregan la página web?",
        answer: "El tiempo estándar de entrega es de 5 días hábiles una vez que nos entregas el contenido inicial (logo, servicios e información de contacto).",
      },
      {
        question: "¿Puedo ver ejemplos o demos antes de contratar?",
        answer: "¡Por supuesto! Puedes ingresar a nuestra sección de Portafolio en thequantpartners.com/portfolio y probar en vivo diferentes modelos para servicios profesionales, salud, servicios técnicos y negocios locales.",
      },
      {
        question: "¿Cómo es la forma de pago?",
        answer: "Trabajamos con el 50% de adelanto para iniciar el desarrollo y el 50% restante contra entrega y conformidad de tu página web.",
      },
      {
        question: "¿Podré hacer cambios o agregar contenido en el futuro?",
        answer: "Sí. Te entregamos un panel autoadministrable muy fácil de usar para que puedas cambiar fotos, textos, teléfonos o servicios en cualquier momento.",
      },
    ],
  },
  booking: {
    calendarType: "calcom",
    calendarUrl: "https://cal.com/the-quant-partners/demo-qss",
    whatsappNumber: "+51924464410",
    webhookUrl: "/api/booking",
    currency: "PEN",
  },
};
