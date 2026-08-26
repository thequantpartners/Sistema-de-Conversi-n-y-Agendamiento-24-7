import makeWASocket, {
  DisconnectReason,
  useMultiFileAuthState,
  WASocket,
  fetchLatestBaileysVersion,
} from "@whiskeysockets/baileys";
import { Boom } from "@hapi/boom";
import pino from "pino";
import qrcodeTerminal from "qrcode-terminal";
import QRCode from "qrcode";
import path from "path";
import fs from "fs";

export class WhatsAppClient {
  private sock: WASocket | null = null;
  private qrCodeString: string | null = null;
  private qrCodeBase64: string | null = null;
  private isConnected: boolean = false;
  private authDir: string;

  constructor(authDir = "./auth_info_baileys") {
    this.authDir = path.resolve(authDir);
    if (!fs.existsSync(this.authDir)) {
      fs.mkdirSync(this.authDir, { recursive: true });
    }
  }

  public async initialize(): Promise<void> {
    const { state, saveCreds } = await useMultiFileAuthState(this.authDir);
    const { version } = await fetchLatestBaileysVersion();

    const logger = pino({ level: "silent" });

    this.sock = makeWASocket({
      version,
      auth: state,
      logger,
      printQRInTerminal: false,
      browser: ["Quant Partners 24/7", "Chrome", "1.0.0"],
    });

    this.sock.ev.on("creds.update", saveCreds);

    this.sock.ev.on("connection.update", async (update) => {
      const { connection, lastDisconnect, qr } = update;

      if (qr) {
        this.qrCodeString = qr;
        try {
          this.qrCodeBase64 = await QRCode.toDataURL(qr);
        } catch (e) {
          console.error("Error generating QR base64:", e);
        }
        console.log("\n==============================");
        console.log("📲 ESCANEA ESTE CÓDIGO QR EN WHATSAPP:");
        qrcodeTerminal.generate(qr, { small: true });
        console.log("==============================\n");
      }

      if (connection === "close") {
        this.isConnected = false;
        const statusCode = (lastDisconnect?.error as Boom)?.output?.statusCode;
        const shouldReconnect = statusCode !== DisconnectReason.loggedOut;

        console.log(
          `[WhatsApp] Conexión cerrada. Razón: ${statusCode}. Reconectando: ${shouldReconnect}`
        );

        if (shouldReconnect) {
          setTimeout(() => this.initialize(), 3000);
        }
      } else if (connection === "open") {
        this.isConnected = true;
        this.qrCodeString = null;
        this.qrCodeBase64 = null;
        console.log("✅ [WhatsApp] Cliente Baileys CONECTADO con éxito a WhatsApp.");
      }
    });
  }

  public getStatus() {
    return {
      connected: this.isConnected,
      hasQR: !!this.qrCodeString,
      qrBase64: this.qrCodeBase64,
    };
  }

  public async sendTextMessage(phone: string, text: string): Promise<boolean> {
    if (!this.sock || !this.isConnected) {
      console.error("[WhatsApp] Error: El cliente no está conectado.");
      return false;
    }

    try {
      // Limpia el número telefónico y agrega sufijo @s.whatsapp.net
      const cleanPhone = phone.replace(/[^0-9]/g, "");
      const jid = `${cleanPhone}@s.whatsapp.net`;

      await this.sock.sendMessage(jid, { text });
      console.log(`[WhatsApp] Mensaje enviado exitosamente a ${jid}`);
      return true;
    } catch (error) {
      console.error("[WhatsApp] Error al enviar mensaje:", error);
      return false;
    }
  }
}

export const waClient = new WhatsAppClient();
