# Quant WhatsApp Worker (Baileys Microservice)

Microservicio ligero en Node.js + TypeScript con **Baileys** para la automatización de WhatsApp del **Sistema de Conversión y Agendamiento 24/7 (Quant Partners)**.

---

## 🚀 Endpoints Disponibles

1. **`GET /health`**: Healthcheck y estado de conexión de WhatsApp.
2. **`GET /qr`**: Visor web interactivo para escanear el código QR desde tu teléfono.
3. **`POST /webhook/booking`**: Receptor de eventos de reserva (dispara la confirmación al prospecto y la alerta a Quant Partners).

---

## 🛠️ Ejecución Local

```bash
cd server
npm install
npm run dev
```

1. Abre en tu navegador `http://localhost:3001/qr`.
2. Escanea el código QR con tu WhatsApp (Menú > Dispositivos Vinculados > Vincular).
3. ¡Listo! El cliente quedará autenticado y enviará mensajes automáticamente.

---

## 🚂 Despliegue en Railway

1. Crea un nuevo servicio en tu proyecto de **Railway** apuntando a la carpeta `/server` (o sube este repositorio y selecciona el Dockerfile).
2. Añade un **Volume persistente** en `/app/auth_info_baileys` para que la sesión de WhatsApp no se pierda al reiniciar.
3. Configura las variables de entorno:
   - `ADMIN_PHONE`: `51924464410`
   - `API_SECRET`: `quant_secret_247`
4. Abre la URL pública asignada por Railway en `/qr` y escanea el código desde tu celular.
