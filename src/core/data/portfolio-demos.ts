export interface DemoNiche {
  id: string;
  slug: string;
  title: string;
  niche: string;
  shortDescription: string;
  icon: string;
  badge: string;
  color: {
    primary: string;
    text: string;
    bgLight: string;
    border: string;
  };
  tags: string[];
  features: string[];
  whatsAppMessage: string;
}

export const PORTFOLIO_PHONE_NUMBER = "51924464410";
export const PROMO_PRICE = "Desde S/ 700";
export const REGULAR_PRICE = "S/ 1,200";

export const DEMO_NICHES: DemoNiche[] = [
  {
    id: "servicios-profesionales",
    slug: "servicios-profesionales",
    title: "Estudio Jurídico & Consultoría Empresarial",
    niche: "Servicios Profesionales",
    shortDescription: "Diseño sobrio, elegante y de alta autoridad para abogados, contadores, asesores y consultores B2B.",
    icon: "⚖️",
    badge: "Alta Autoridad B2B",
    color: {
      primary: "from-blue-600 to-indigo-700",
      text: "text-blue-600",
      bgLight: "bg-blue-50 dark:bg-blue-950/30",
      border: "border-blue-200 dark:border-blue-800",
    },
    tags: ["Abogados", "Contadores", "Consultores", "Agencias"],
    features: [
      "Sección de Áreas de Práctica / Servicios",
      "Calculadora / Formulario de Consulta Rápida",
      "Botón Directo a WhatsApp para Asesoría",
      "Testimonios y Respaldo Corporativo"
    ],
    whatsAppMessage: "Hola, estuve viendo la demo de Servicios Profesionales / Consultoría y quiero este diseño desde S/ 700 para mi negocio."
  },
  {
    id: "salud-estetica",
    slug: "salud-estetica",
    title: "Clínica Dental, Médica & Estética",
    niche: "Salud & Bienestar",
    shortDescription: "Diseño impecable, moderno y confiable para dentistas, psicólogos, médicos especialistas y centros de estética.",
    icon: "🩺",
    badge: "Más Solicitado",
    color: {
      primary: "from-emerald-500 to-teal-700",
      text: "text-emerald-600",
      bgLight: "bg-emerald-50 dark:bg-emerald-950/30",
      border: "border-emerald-200 dark:border-emerald-800",
    },
    tags: ["Dentistas", "Médicos", "Psicólogos", "Estética", "Spa"],
    features: [
      "Catálogo de Tratamientos y Especialidades",
      "Galería Antes / Después y Testimonios",
      "Botón de Agendamiento Directo por WhatsApp",
      "Ubicación y Horarios de Atención Claros"
    ],
    whatsAppMessage: "Hola, estuve viendo la demo de Salud & Estética y quiero este diseño desde S/ 700 para mi negocio."
  },
  {
    id: "servicios-tecnicos",
    slug: "servicios-tecnicos",
    title: "Servicios Técnicos, Mantenimiento & Hogar",
    niche: "Servicios Técnicos & Construcción",
    shortDescription: "Diseño dinámico de alta conversión para empresas de aire acondicionado, instalaciones, contratistas y mantenimiento.",
    icon: "🛠️",
    badge: "Respuesta Rápida",
    color: {
      primary: "from-amber-500 to-orange-600",
      text: "text-amber-600",
      bgLight: "bg-amber-50 dark:bg-amber-950/30",
      border: "border-amber-200 dark:border-amber-800",
    },
    tags: ["Climatización", "Electricistas", "Contratistas", "Mantenimiento"],
    features: [
      "Cotización en 1 Clic vía WhatsApp",
      "Zonas de Cobertura y Atención de Emergencias",
      "Galería de Trabajos Realizados",
      "Garantía de Servicio Visible"
    ],
    whatsAppMessage: "Hola, estuve viendo la demo de Servicios Técnicos & Mantenimiento y quiero este diseño desde S/ 700 para mi negocio."
  },
  {
    id: "negocio-local",
    slug: "negocio-local",
    title: "Academias, Cursos & Negocios Locales",
    niche: "Educación & Negocios",
    shortDescription: "Diseño visual, atractivo y directo para centros de formación, eventos, servicios gastronómicos y locales comerciales.",
    icon: "🎓",
    badge: "Interactivo & Visual",
    color: {
      primary: "from-purple-600 to-pink-600",
      text: "text-purple-600",
      bgLight: "bg-purple-50 dark:bg-purple-950/30",
      border: "border-purple-200 dark:border-purple-800",
    },
    tags: ["Academias", "Talleres", "Eventos", "Comercio Local"],
    features: [
      "Presentación de Programas y Talleres",
      "Preguntas Frecuentes y Precios Claros",
      "Botón de Inscripción Inmediata por WhatsApp",
      "Diseño 100% Mobile First"
    ],
    whatsAppMessage: "Hola, estuve viendo la demo de Academias & Negocios Locales y quiero este diseño desde S/ 700 para mi negocio."
  }
];

export function getWhatsAppLink(message: string, phone: string = PORTFOLIO_PHONE_NUMBER): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}
