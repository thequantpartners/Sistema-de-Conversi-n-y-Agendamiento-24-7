import { ProjectConfig } from "@/core/types/project";

export const quantPartnersConfig: ProjectConfig = {
  id: "quant-partners",
  slug: "quant-partners",
  branding: {
    name: "Quant Partners",
    tagline: "Infraestructura de Conversión y Agendamiento 24/7",
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
    badge: "INFRAESTRUCTURA DE CONVERSIÓN & AGENDAMIENTO 24/7",
    title: "Si ya tienes tráfico o prospectos:\nDeja de perder llamadas con curiosos.",
    subtitle: "No somos una agencia de generación de leads ni prometemos fórmulas mágicas. Implementamos la infraestructura técnica que filtra a prospectos sin presupuesto antes de tu calendario y confirma citas 24/7 vía WhatsApp.",
    callout: "infraestructura propia · sin cuotas mensuales de agencia · control total de tu agenda",
    honestLede: "Si ya inviertes en anuncios, contenido o prospección, tu mayor fuga de dinero no suele ser la falta de personas interesadas, sino la lentitud para responder por WhatsApp y las horas perdidas en videollamadas con curiosos. Este sistema filtra en 4 pasos, sincroniza tu calendario real y envía alertas inmediatas.",
    ctaPrimary: "Verificar si tu negocio califica",
    ctaSecondaryLink: "#como-funciona",
    ctaSecondaryText: "Ver cómo funciona el flujo ↓",
  },
  howItWorks: {
    entryNumber: "01 · EL MECANISMO",
    title: "De visitante interesado a reunión cualificada, en 3 pasos.",
    subtitle: "Un flujo técnico directo sin fricción y sin intermediarios que inflen tus costes.",
    steps: [
      {
        number: "1",
        title: "FILTRO DE CUALIFICACIÓN PREVIO",
        description: "El prospecto responde 4 preguntas sobre su modelo, nivel de facturación, urgencia y necesidad. Si no cumple tus criterios mínimos, el sistema le entrega un recurso alternativo y evita que bloquee tu tiempo.",
      },
      {
        number: "2",
        title: "SINCRONIZACIÓN DIRECTA CON TU AGENDA",
        description: "Solo los prospectos que cumplen tus requisitos acceden a tu disponibilidad en vivo (Cal.com / Google Calendar), eliminando los mensajes manuales para cuadrar horas.",
      },
      {
        number: "3",
        title: "CONFIRMACIÓN POR WHATSAPP Y SINCRONIZACIÓN CRM",
        description: "En segundos, el prospecto recibe los datos de acceso y tú una alerta por WhatsApp con sus respuestas de filtro, registrando automáticamente el lead en tu CRM (HubSpot, Odoo o Zoho CRM).",
      },
    ],
    bridgeText: "Revisa la comparativa de costes y modelo operativo ↓",
  },
  mathComparison: {
    entryNumber: "02 · COMPARATIVA DE COSTES",
    title: "Transparencia técnica: Costes reales y sin letra pequeña.",
    subtitle: "Compara el coste de mantener infraestructura propia frente a contratos mensuales de agencias tradicionales.",
    bigNumbers: [
      {
        value: "< 30s",
        label: "tiempo de respuesta automática desde que agendan hasta recibir los datos de acceso.",
        tag: "Inmediatez",
      },
      {
        value: "100%",
        label: "de prospectos que llegan a tu agenda con respuestas de cualificación registradas.",
        tag: "Contexto previo",
      },
      {
        value: "$0",
        unit: "/mes",
        label: "en comisiones de agencias de marketing o costes ocultos por cita agendada.",
        tag: "Tu sistema es tuyo",
      },
    ],
    tableRows: [
      {
        concept: "Implementación Inicial",
        detail: "Infraestructura completa configurada y conectada a tu dominio y calendario.",
      },
      {
        concept: "Mantenimiento Técnico",
        detail: "Sin cuotas fijas infladas. Solo los consumos técnicos directos si utilizas proveedores de API.",
      },
      {
        concept: "Propiedad de Datos",
        detail: "La base de datos de leads, tu calendario, sincronización con tu CRM (HubSpot, Odoo, Zoho) y las automatizaciones quedan bajo tu control.",
      },
    ],
    bridgeText: "Alineación de expectativas: Lo que es y lo que no es este sistema ↓",
  },
  whatItIs: {
    entryNumber: "03 · ALINEACIÓN DE EXPECTATIVAS",
    title: "Lo que este sistema NO es (y lo que SÍ es):",
    items: [
      {
        isNot: "No es un servicio de generación de tráfico o compra de anuncios publicitarios.",
        is: "Es la infraestructura técnica que convierte y filtra el tráfico que tu negocio ya genera hacia tu agenda.",
      },
      {
        isNot: "No es un chatbot invasivo que envía respuestas genéricas o molestas a tus clientes.",
        is: "Es un embudo web rápido y limpio con formulario de 4 pasos y agenda sincronizada.",
      },
      {
        isNot: "No es una suscripción mensual obligatoria donde dependes de una agencia para hacer cambios.",
        is: "Es un sistema productizado implementado para tu negocio, conectado directamente a tus cuentas.",
      },
      {
        isNot: "No es una promesa de ingresos irreales o ventas automáticas sin esfuerzo comercial.",
        is: "Es una herramienta de optimización operativa: asegura que solo atiendas a prospectos que cumplen tus criterios.",
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
            id: "coach_consultor",
            label: "Coach, Mentor o Consultor High-Ticket",
            description: "Ofrezco programas, mentorías o asesoría especializada.",
            qualifies: true,
          },
          {
            id: "agencia_b2b",
            label: "Agencia B2B / Empresa de Servicios",
            description: "Desarrollo, marketing, consultoría legal/financiera o servicios B2B.",
            qualifies: true,
          },
          {
            id: "infoproductor",
            label: "Creador de Cursos / Formaciones",
            description: "Comercializo programas formativos y capacitaciones.",
            qualifies: true,
          },
          {
            id: "otro",
            label: "Otro modelo de servicio profesional",
            description: "Busco filtrar y agendar reuniones con prospectos cualificados.",
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
            label: "Menos de $1,000 USD / mes",
            description: "Aún estoy en fase inicial de validación de oferta.",
            qualifies: false,
          },
          {
            id: "rev_1k_3k",
            label: "De $1,000 a $3,000 USD / mes",
            description: "Cuento con clientes activos y flujo recurrente de consultas.",
            qualifies: true,
          },
          {
            id: "rev_3k_10k",
            label: "De $3,000 a $10,000 USD / mes",
            description: "Flujo constante de prospectos, requiero optimizar tiempo y calidad de llamadas.",
            qualifies: true,
          },
          {
            id: "rev_over_10k",
            label: "Más de $10,000 USD / mes",
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
            label: "Demasiado tiempo coordinando horarios manualmente por chat.",
            description: "Los prospectos se enfrían durante el intercambio de mensajes.",
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
            label: "Requiero una solución integral para filtro, agenda y recordatorios.",
            description: "Busco unificar todo el proceso de conversión en un solo sistema.",
            qualifies: true,
          },
        ],
      },
    ],
    disqualifiedScreen: {
      title: "Gracias por responder con sinceridad 🙌",
      description: "Nuestra infraestructura de conversión y agendamiento 24/7 genera su mayor impacto en negocios que ya cuentan con flujo de prospectos, facturan al menos $1,000 USD/mes y buscan implementar en el corto plazo. Para etapas iniciales o de exploración, te compartimos nuestra guía práctica de estructuración de oferta directamente por WhatsApp.",
      resourceCtaText: "Solicitar Guía Gratuita por WhatsApp",
      whatsappCtaText: "Pedir Guía Práctica por WhatsApp (+51 924 464 410)",
    },
  },
  faq: {
    entryNumber: "05 · PREGUNTAS FRECUENTES",
    title: "Preguntas Frecuentes:",
    items: [
      {
        question: "¿Este sistema me genera tráfico o prospectos nuevos?",
        answer: "No. Este sistema asume que tu negocio ya tiene canales activos para atraer prospectos (anuncios, contenido en redes, base de datos o prospección). Nuestra función es instalar la infraestructura técnica que recibe a esas personas, filtra a quienes no tienen presupuesto y las agenda en tu calendario con confirmación instantánea.",
      },
      {
        question: "¿Cómo ayuda a reducir el ausentismo (No-Shows)?",
        answer: "El sistema incorpora una secuencia de 3 mensajes automáticos por WhatsApp: confirmación inmediata con el enlace de la sala, recordatorio 24 horas antes y un micro-compromiso 2 horas antes solicitando confirmación con un 'SÍ'. Esto elimina el olvido común y te permite saber con anticipación quién asistirá, liberando tu agenda si alguien cancela a tiempo.",
      },
      {
        question: "¿Tengo que pagar mensualidades de agencia?",
        answer: "No trabajamos con mensualidades de retención. Se realiza una implementación única de la infraestructura en tus plataformas. Tú mantienes la propiedad de tus accesos, calendarios y bases de datos.",
      },
      {
        question: "¿Se conecta automáticamente con mi CRM actual?",
        answer: "Sí. El sistema dispara webhooks en tiempo real compatibles con los CRM más utilizados del mercado peruano (HubSpot, Odoo y Zoho CRM) o Google Sheets. Toda la información del prospecto, sus respuestas de filtro y la fecha agendada se sincronizan automáticamente en tu base de datos.",
      },
      {
        question: "¿Puedo adaptar las preguntas de filtro a los requisitos de mi nicho?",
        answer: "Sí. Las preguntas de cualificación se configuran con las variables clave de tu servicio (ej. presupuesto mínimo, modelo de negocio, plazo de contratación o rubro).",
      },
      {
        question: "¿Qué integraciones técnicas se requieren?",
        answer: "Solo tu cuenta de calendario (Cal.com o Google Calendar), el número de WhatsApp para las alertas y las credenciales de tu CRM o Google Sheets si deseas sincronizar los leads en automático.",
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
