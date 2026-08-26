export interface BookingPayload {
  leadName?: string;
  leadPhone?: string;
  leadEmail?: string;
  bookingDate?: string;
  bookingTime?: string;
  meetingLink?: string;
  answers?: Record<string, string>;
}

export function getLeadConfirmationMessage(data: BookingPayload): string {
  const name = data.leadName || "Hola";
  const date = data.bookingDate || "la fecha seleccionada";
  const time = data.bookingTime || "la hora acordada";
  const link = data.meetingLink || "https://cal.com/the-quant-partners/demo-qss";

  return `👋 *Hola ${name}, tu sesión con Quant Partners está confirmada.*

📅 *Fecha:* ${date}
⏰ *Hora:* ${time}
💻 *Enlace de conexión:* ${link}

*Recomendaciones para la llamada:*
1. Conéctate desde un *ordenador/computadora* (compartiremos pantalla para revisar la arquitectura técnica).
2. Te agradecemos máxima puntualidad (tolerancia de 5 minutos).
3. Si tomas decisiones en conjunto con socios o directivos, reenvíales este enlace para que asistan juntos.

Si necesitas reprogramar o tienes alguna consulta previa, responde a este mismo mensaje.

_Quant Partners · Infraestructura de Conversión 24/7_`;
}

export function getAdminAlertMessage(data: BookingPayload): string {
  const name = data.leadName || "Prospecto";
  const phone = data.leadPhone || "No especificado";
  const email = data.leadEmail || "No especificado";
  const date = data.bookingDate || "Pendiente";
  const time = data.bookingTime || "Pendiente";
  const answers = data.answers || {};

  const businessType = answers.business_type || "No especificado";
  const revenue = answers.monthly_revenue || "No especificado";
  const decisionMaker = answers.decision_maker || "No especificado";
  const timeline = answers.urgency_timeline || "No especificado";
  const friction = answers.main_friction || "No especificado";

  return `🚨 *NUEVA CITA AGENDADA EN CAL.COM*

👤 *Lead:* ${name}
📱 *WhatsApp:* ${phone}
📧 *Email:* ${email}
📅 *Fecha:* ${date} a las ${time}

📊 *Respuestas de Cualificación:*
• *Modelo de Negocio:* ${businessType}
• *Facturación Mensual:* ${revenue}
• *Tomador de Decisión:* ${decisionMaker}
• *Plazo de Implementación:* ${timeline}
• *Principal Fricción:* ${friction}

_Accede a Cal.com o Google Calendar para ver los detalles completos._`;
}

export function getReminderMessage(data: BookingPayload): string {
  const name = data.leadName || "Hola";
  const time = data.bookingTime || "en 2 horas";
  const link = data.meetingLink || "https://cal.com/the-quant-partners/demo-qss";

  return `👋 *Hola ${name}, te recordamos tu sesión estratégica de hoy a las ${time}.*

💻 *Enlace de sala:* ${link}

¿Nos confirmas que todo sigue en pie respondiendo a este mensaje con un *SÍ*?`;
}
