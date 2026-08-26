import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { waClient } from "./whatsapp.js";
import {
  getAdminAlertMessage,
  getLeadConfirmationMessage,
  BookingPayload,
} from "./templates.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const ADMIN_PHONE = process.env.ADMIN_PHONE || "51924464410";
const API_SECRET = process.env.API_SECRET || "quant_secret_247";

app.use(cors());
app.use(express.json());

// Iniciar cliente de WhatsApp
waClient.initialize();

// 1. Healthcheck
app.get("/health", (_req: Request, res: Response) => {
  const status = waClient.getStatus();
  res.json({
    status: "ok",
    service: "quant-whatsapp-worker",
    whatsapp: {
      connected: status.connected,
      ready: status.connected,
    },
    timestamp: new Date().toISOString(),
  });
});

// 2. Visor de Código QR en el navegador
app.get("/qr", (_req: Request, res: Response) => {
  const status = waClient.getStatus();

  if (status.connected) {
    res.send(`
      <!DOCTYPE html>
      <html>
        <head><title>WhatsApp Conectado</title></head>
        <body style="background:#09090b;color:#22c55e;font-family:sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;">
          <div style="text-align:center;border:1px solid #27272a;padding:40px;border-radius:20px;background:#18181b;">
            <h2>✅ WhatsApp Conectado con Éxito</h2>
            <p style="color:#a1a1aa;">El microservicio de Quant Partners está activo y listo para enviar mensajes.</p>
          </div>
        </body>
      </html>
    `);
    return;
  }

  if (status.qrBase64) {
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Escanear QR WhatsApp</title>
          <meta http-equiv="refresh" content="5">
        </head>
        <body style="background:#09090b;color:#f4f4f5;font-family:sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;">
          <div style="text-align:center;border:1px solid #27272a;padding:30px;border-radius:20px;background:#18181b;max-width:400px;">
            <h2 style="margin-top:0;">📲 Vincula tu WhatsApp</h2>
            <p style="color:#a1a1aa;font-size:13px;">Abre WhatsApp en tu teléfono > Dispositivos vinculados > Vincular un dispositivo.</p>
            <img src="${status.qrBase64}" alt="Código QR WhatsApp" style="margin:20px 0;border-radius:12px;width:250px;height:250px;background:white;padding:10px;" />
            <p style="color:#71717a;font-size:11px;">Esta página se actualiza automáticamente cada 5 segundos.</p>
          </div>
        </body>
      </html>
    `);
    return;
  }

  res.send(`
    <!DOCTYPE html>
    <html>
      <head><title>Generando QR...</title><meta http-equiv="refresh" content="3"></head>
      <body style="background:#09090b;color:#f4f4f5;font-family:sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;">
        <div style="text-align:center;">
          <p>⏳ Iniciando cliente Baileys y generando código QR...</p>
        </div>
      </body>
    </html>
  `);
});

// 3. Webhook de Recepción de Citas (Desde Vercel API / Cal.com)
app.post("/webhook/booking", async (req: Request, res: Response) => {
  try {
    const authHeader = req.headers["x-api-secret"] || req.query.secret;
    if (API_SECRET && authHeader !== API_SECRET) {
      // Si se envía secret, se valida. Si no está configurado, permite en test.
      console.warn("[Webhook] Petición sin secret válido o en modo abierto.");
    }

    const payload = req.body;
    console.log("[Webhook] Payload recibido:", JSON.stringify(payload, null, 2));

    // Normalizar datos de Cal.com y Webhooks
    const bookingData: BookingPayload = {
      leadName:
        payload.leadName ||
        payload.data?.contact?.name ||
        payload.bookingData?.name ||
        payload.bookingData?.attendeeName ||
        payload.bookingData?.responses?.name ||
        "Prospecto",
      leadPhone:
        payload.leadPhone ||
        payload.data?.contact?.phone ||
        payload.bookingData?.phone ||
        payload.bookingData?.attendeePhoneNumber ||
        payload.bookingData?.responses?.attendeePhoneNumber?.value ||
        payload.bookingData?.responses?.attendeePhoneNumber ||
        payload.bookingData?.responses?.phone ||
        payload.bookingData?.attendees?.[0]?.phoneNumber ||
        null,
      leadEmail:
        payload.leadEmail ||
        payload.data?.contact?.email ||
        payload.bookingData?.email ||
        payload.bookingData?.attendeeEmail ||
        payload.bookingData?.responses?.email ||
        payload.bookingData?.attendees?.[0]?.email ||
        null,
      bookingDate:
        payload.bookingDate ||
        payload.bookingData?.date ||
        payload.bookingData?.startTime ||
        null,
      bookingTime:
        payload.bookingTime ||
        payload.bookingData?.time ||
        null,
      meetingLink:
        payload.meetingLink ||
        payload.bookingData?.meetingUrl ||
        payload.bookingData?.location ||
        "https://cal.com/the-quant-partners/demo-qss",
      answers: payload.answers || payload.data?.answers || {},
    };

    // Trigger 1: WhatsApp Inmediato al Lead (si tiene número registrado)
    if (bookingData.leadPhone) {
      const leadMsg = getLeadConfirmationMessage(bookingData);
      await waClient.sendTextMessage(bookingData.leadPhone, leadMsg);
    }

    // Trigger 2: Alerta Inmediata a Quant Partners (+51 924 464 410)
    const adminMsg = getAdminAlertMessage(bookingData);
    await waClient.sendTextMessage(ADMIN_PHONE, adminMsg);

    res.json({
      success: true,
      message: "Notificaciones de WhatsApp procesadas exitosamente",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("[Webhook] Error procesando webhook:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 [Worker] Servidor de WhatsApp corriendo en puerto ${PORT}`);
  console.log(`🔗 Visita http://localhost:${PORT}/qr para escanear el código QR`);
});
