import { NextRequest, NextResponse } from "next/server";
import { getProjectConfig } from "@/core/engine/get-project";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { eventType, projectId, answers, contact, timestamp } = body;

    const config = getProjectConfig(projectId);

    // Payload normalizado para n8n / Railway / Supabase
    const payload = {
      event: eventType || "lead_event",
      project: {
        id: config.id,
        name: config.branding.name,
      },
      data: {
        answers: answers || {},
        contact: contact || null,
        timestamp: timestamp || new Date().toISOString(),
      },
    };

    console.log("[Booking API] Event received:", JSON.stringify(payload, null, 2));

    // Si existe webhook externo configurado (n8n / Railway worker), lo despacha de forma no bloqueante
    const externalWebhook = config.booking.webhookUrl;
    if (externalWebhook && externalWebhook.startsWith("http")) {
      fetch(externalWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch((err) => {
        console.error("[Booking API] Webhook dispatch error:", err);
      });
    }

    return NextResponse.json({
      success: true,
      message: "Lead processed successfully",
      receivedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("[Booking API] Error handling request:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
