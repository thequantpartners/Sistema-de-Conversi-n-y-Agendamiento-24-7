import { ProjectConfig } from "@/core/types/project";

export const quantPartnersConfig: ProjectConfig = {
  id: "quant-partners",
  slug: "quant-partners",
  branding: {
    name: "Quant Partners",
    tagline: "Infraestructura de Conversión y Ventas 24/7 para WordPress",
    logoText: "quant",
    logoSubtext: "partners",
    primaryColor: "#6366f1",
    accentColor: "#818cf8",
  },
  socialProof: {
    verifiedMetric: "+480",
    verifiedLabel: "citas cualificadas gestionadas con éxito",
    rating: "4.9/5",
    reviewCount: "84 evaluaciones verificadas",
  },
  hero: {
    badge: "SISTEMA DE CONVERSIÓN & AGENDAMIENTO 24/7 EN WORDPRESS",
    title: "Convierte tu WordPress en una máquina de agendamiento y ventas 24/7.",
    subtitle: "Eliminamos los formularios tradicionales de WordPress que nadie responde a tiempo. Implementamos la infraestructura que filtra a curiosos sin presupuesto, agenda reuniones en vivo y confirma por WhatsApp y CRM en menos de 30 segundos.",
    callout: "integrado en tu propio wordpress · sin cuotas infladas de agencia · control total de tus datos",
    honestLede: "Si ya tienes una web en WordPress o inviertes en anuncios, tu mayor fuga de dinero no suele ser la falta de personas interesadas: son los formularios de contacto tradicionales que se pierden en correos no leídos y la lentitud para cuadrar horarios por WhatsApp. Instalamos un motor de conversión de 4 pasos que califica en vivo, sincroniza tu calendario real y alerta a tu equipo al instante.",
    ctaPrimary: "Verificar si tu negocio califica",
    ctaSecondaryLink: "#como-funciona",
    ctaSecondaryText: "Ver cómo funciona el flujo ↓",
  },
  howItWorks: {
    entryNumber: "01 · EL MECANISMO",
    title: "De visitante en tu WordPress a reunión cualificada, en 3 pasos.",
    subtitle: "Un flujo técnico directo integrado en tu web, sin fricción y sin intermediarios que inflen tus costes.",
    steps: [
      {
        number: "1",
        title: "FILTRO DE CUALIFICACIÓN EN TU WORDPRESS",
        description: "El prospecto responde 4 preguntas clave sobre su modelo, facturación, urgencia y necesidad. Si no cumple tus criterios mínimos, el sistema le entrega un recurso alternativo y evita que bloquee tu tiempo.",
      },
      {
        number: "2",
        title: "SINCRONIZACIÓN DIRECTA CON TU AGENDA",
        description: "Solo los prospectos cualificados acceden a tu disponibilidad en vivo (Cal.com / Google Calendar) embebida en tu web, eliminando los mensajes manuales de chat para cuadrar horarios.",
      },
      {
        number: "3",
        title: "CONFIRMACIÓN POR WHATSAPP Y SINCRONIZACIÓN CRM",
        description: "En segundos, el prospecto recibe los datos de acceso en su WhatsApp y tú una alerta con todas sus respuestas, registrando automáticamente el contacto y trato en tu CRM (HubSpot, Odoo o Zoho CRM).",
      },
    ],
    bridgeText: "Revisa la comparativa entre una web tradicional y este sistema ↓",
  },
  mathComparison: {
    entryNumber: "02 · COMPARATIVA DE RENDIMIENTO",
    title: "Web tradicional en WordPress vs. Sistema de Ventas 24/7.",
    subtitle: "Compara la diferencia entre un folleto digital estático y una infraestructura técnica activa orientada a conversión.",
    bigNumbers: [
      {
        value: "< 30s",
        label: "tiempo de respuesta automática por WhatsApp desde que el prospecto agenda en tu WordPress.",
        tag: "Inmediatez",
      },
      {
        value: "100%",
        label: "de prospectos que llegan a tu agenda con respuestas de cualificación y CRM sincronizado.",
        tag: "Contexto previo",
      },
      {
        value: "$0",
        unit: "/mes",
        label: "en comisiones de agencias de marketing o mensualidades forzosas de retención.",
        tag: "Tu sistema es tuyo",
      },
    ],
    tableRows: [
      {
        concept: "Implementación en WordPress",
        detail: "Infraestructura completa instalada en tu propio hosting y dominio de WordPress, sin romper tu diseño actual.",
      },
      {
        concept: "Motor de Conversión Activo",
        detail: "Reemplazo total de formularios muertos por filtro interactivo en 4 pasos, agenda en vivo y WhatsApp API oficial.",
      },
      {
        concept: "Propiedad Total de Datos",
        detail: "Tu web en WordPress, la base de leads, tu calendario y la sincronización con tu CRM (HubSpot, Odoo, Zoho) bajo tu control.",
      },
    ],
    bridgeText: "Alineación de expectativas: Lo que es y lo que no es este sistema ↓",
  },
  whatItIs: {
    entryNumber: "03 · ALINEACIÓN DE EXPECTATIVAS",
    title: "Lo que este sistema NO es (y lo que SÍ es):",
    items: [
      {
        isNot: "No es un rediseño web decorativo en WordPress que solo sirve como folleto digital sin generar citas.",
        is: "Es un motor de conversión de alta velocidad integrado en tu WordPress orientado 100% a filtrar y agendar prospectos cualificados.",
      },
      {
        isNot: "No es un plugin genérico ni un chatbot invasivo que frustra a tus clientes con respuestas automáticas torpes.",
        is: "Es un embudo determinista, limpio y rápido con formulario de 4 pasos, agenda en vivo y confirmación real por WhatsApp.",
      },
      {
        isNot: "No es una suscripción mensual obligatoria donde dependes de una agencia para hacer cualquier cambio.",
        is: "Es un sistema productizado implementado directamente en tu WordPress y tus plataformas comerciales.",
      },
      {
        isNot: "No es una promesa de ingresos irreales o ventas automáticas sin esfuerzo comercial.",
        is: "Es una herramienta de optimización operativa: asegura que tu equipo solo atienda a prospectos que cumplen tus criterios.",
      },
    ],
    bridgeText: "Comprueba en 30 segundos si tu negocio califica para este sistema ↓",
  },
  qualification: {
    entryNumber: "04 · FILTRO Y DISPONIBILIDAD",
    title: "Verificación de Perfil y Agendamiento",
    subtitle: "Responde estas breves preguntas para confirmar disponibilidad y acceder a la agenda en vivo.",
    questions: [
      {
        id: "business_type",
        stepNumber: 1,
        title: "¿Qué tipo de negocio o servicio lideras?",
        subtitle: "Selecciona el modelo que mejor describe tu actividad principal.",
        options: [
          {
            id: "agencia_b2b",
            label: "Agencia B2B / Empresa de Servicios / Consultoría",
            description: "Desarrollo, marketing, consultoría legal/financiera o servicios B2B.",
            qualifies: true,
          },
          {
            id: "salud_clinicas",
            label: "Clínicas, Salud Estética o Bienestar",
            description: "Odontología, estética, salud o consultas médicas especializadas.",
            qualifies: true,
          },
          {
            id: "inmobiliaria_servicios",
            label: "Inmobiliarias, Lotes o Bienes Raíces",
            description: "Venta de lotes, preventas inmobiliarias o proyectos de alto valor.",
            qualifies: true,
          },
          {
            id: "coach_consultor",
            label: "Coach, Mentor, Formaciones o Servicios Profesionales",
            description: "Programas de formación, asesoría o servicios que requieren agendamiento.",
            qualifies: true,
          },
        ],
      },
      {
        id: "monthly_revenue",
        stepNumber: 2,
        title: "¿Cuál es el nivel actual de facturación mensual de tu negocio?",
        subtitle: "Este dato nos permite verificar si el volumen actual justifica esta infraestructura.",
        options: [
          {
            id: "rev_under_1k",
            label: "Menos de $1,000 USD / mes (menos de S/ 3,750 PEN)",
            description: "Aún estoy en fase inicial de validación de oferta.",
            qualifies: false,
          },
          {
            id: "rev_1k_3k",
            label: "De $1,000 a $3,000 USD / mes (~S/ 3,750 a S/ 11,000 PEN)",
            description: "Cuento con clientes activos y flujo recurrente de consultas.",
            qualifies: true,
          },
          {
            id: "rev_3k_10k",
            label: "De $3,000 a $10,000 USD / mes (~S/ 11,000 a S/ 37,500 PEN)",
            description: "Flujo constante de prospectos, requiero optimizar tiempo y calidad de llamadas.",
            qualifies: true,
          },
          {
            id: "rev_over_10k",
            label: "Más de $10,000 USD / mes (> S/ 37,500 PEN)",
            description: "Negocio consolidado, requiero automatización 24/7 y control estricto de agenda.",
            qualifies: true,
          },
        ],
      },
      {
        id: "decision_maker",
        stepNumber: 3,
        title: "Al momento de evaluar e implementar soluciones en tu negocio, ¿quién toma la decisión final?",
        subtitle: "Nos permite asegurar que la sesión sea 100% productiva y resolver dudas directamente.",
        options: [
          {
            id: "solo_owner",
            label: "Tomo la decisión 100% por mi cuenta (Soy fundador / dueño único)",
            description: "Tengo autonomía total para decidir si avanzamos con la infraestructura.",
            qualifies: true,
            badge: "Decisor Directo",
          },
          {
            id: "with_partners",
            label: "Tengo socio(s) o equipo directivo y tomamos decisiones en conjunto",
            description: "Participo activamente en la evaluación y decisión estratégica.",
            qualifies: true,
          },
          {
            id: "not_decision_maker",
            label: "No tengo capacidad de decisión sobre contrataciones o presupuestos",
            description: "Solo recopilo información general para presentársela a otra persona.",
            qualifies: false, // Filtro: Descarte amable hacia guía/video
          },
        ],
      },
      {
        id: "urgency_timeline",
        stepNumber: 4,
        title: "Si vemos que la infraestructura encaja con tu negocio, ¿en qué plazo buscas implementarla?",
        subtitle: "Nos permite dimensionar la capacidad de despliegue de nuestro equipo técnico.",
        options: [
          {
            id: "inmediato",
            label: "De inmediato (esta semana o próximos 15 días)",
            description: "Cuento con tráfico/prospectos y necesito optimizar mi conversión cuanto antes.",
            qualifies: true,
            badge: "Prioridad Alta",
          },
          {
            id: "mes_actual",
            label: "En los próximos 30 días",
            description: "Planificando el lanzamiento de mi embudo para el próximo mes.",
            qualifies: true,
          },
          {
            id: "curiosidad",
            label: "Solo estoy explorando / no planeo implementar en el corto plazo",
            description: "Buscando referencias o ideas generales sobre sistemas de agendamiento.",
            qualifies: false, // Filtro: Descarte amable hacia guía
          },
        ],
      },
      {
        id: "main_friction",
        stepNumber: 5,
        title: "¿Cuál es tu principal cuello de botella al gestionar citas?",
        subtitle: "Nos ayuda a entender qué aspecto técnico tiene mayor prioridad para tu caso.",
        options: [
          {
            id: "curiosos",
            label: "Atiendo videollamadas con personas que no tienen presupuesto.",
            description: "Se pierde tiempo con prospectos que no cumplen el perfil económico.",
            qualifies: true,
          },
          {
            id: "lento_whatsapp",
            label: "Los formularios de mi WordPress tardan en responderse y los prospectos se enfrían.",
            description: "Falta de inmediatez para coordinar horarios y enviar accesos por WhatsApp.",
            qualifies: true,
          },
          {
            id: "no_shows",
            label: "Ausentismo o cancelaciones de última hora sin previo aviso.",
            description: "Falta de recordatorios efectivos para confirmar asistencia.",
            qualifies: true,
          },
          {
            id: "todas",
            label: "Requiero una solución integral en WordPress: filtro, agenda, WhatsApp y CRM.",
            description: "Busco unificar todo el proceso de conversión en un solo sistema.",
            qualifies: true,
          },
        ],
      },
    ],
    disqualifiedScreen: {
      title: "Gracias por responder con sinceridad 🙌",
      description: "Nuestra infraestructura de conversión y agendamiento 24/7 genera su mayor impacto en negocios que ya cuentan con flujo de prospectos, facturan al menos $1,000 USD / S/ 3,750 PEN al mes y buscan implementar en el corto plazo. Para etapas iniciales o de exploración, te compartimos nuestra guía práctica de estructuración de oferta directamente por WhatsApp.",
      resourceCtaText: "Solicitar Guía Gratuita por WhatsApp",
      whatsappCtaText: "Pedir Guía Práctica por WhatsApp (+51 924 464 410)",
    },
  },
  faq: {
    entryNumber: "05 · PREGUNTAS FRECUENTES",
    title: "Preguntas Frecuentes:",
    items: [
      {
        question: "¿Funciona si ya tengo mi página web en WordPress?",
        answer: "Sí, absolutamente. Nos integramos directamente en tu WordPress actual (compatible con Elementor, Divi, Gutenberg, Bricks, Astra, etc.) o configuramos una página de agendamiento optimizada sin tocar ni alterar el resto de tu web corporativa.",
      },
      {
        question: "¿Y si todavía no tengo una web en WordPress?",
        answer: "Podemos entregarte la web completa en WordPress lista para operar, con el diseño, filtro de cualificación, agenda sincronizada y automatizaciones ya instaladas desde el primer día.",
      },
      {
        question: "¿Cómo ayuda a reducir el ausentismo (No-Shows)?",
        answer: "El sistema incorpora una secuencia de 3 mensajes automáticos por WhatsApp: confirmación inmediata con el enlace de la sala, recordatorio 24 horas antes y un micro-compromiso 2 horas antes solicitando confirmación con un 'SÍ'. Esto elimina el olvido común y te permite saber con anticipación quién asistirá, liberando tu agenda si alguien cancela a tiempo.",
      },
      {
        question: "¿Tengo que pagar mensualidades obligatorias de agencia?",
        answer: "No trabajamos con mensualidades forzosas de retención. Se realiza una implementación única de la infraestructura en tu WordPress y plataformas. Tú mantienes la propiedad total de tus accesos, calendarios y bases de datos.",
      },
      {
        question: "¿Se conecta automáticamente con mi CRM (HubSpot, Odoo, Zoho CRM)?",
        answer: "Sí. El sistema dispara webhooks en tiempo real desde tu WordPress compatibles con los CRM más utilizados del mercado peruano (HubSpot, Odoo y Zoho CRM) o Google Sheets. Toda la información del prospecto, sus respuestas de filtro y la fecha agendada se sincronizan automáticamente.",
      },
      {
        question: "¿Qué accesos técnicos se requieren para implementarlo?",
        answer: "Solo un acceso de administrador a tu WordPress (o cPanel/hosting), tu cuenta de calendario (Cal.com o Google Calendar) y el número de WhatsApp comercial donde desees recibir las alertas.",
      },
    ],
  },
  booking: {
    calendarType: "calcom",
    calendarUrl: "https://cal.com/the-quant-partners/demo-qss",
    whatsappNumber: "+51924464410",
    webhookUrl: "/api/booking",
    currency: "USD",
  },
};
