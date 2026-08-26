"use client";

import React, { useEffect } from "react";
import { ProjectConfig } from "@/core/types/project";
import Cal, { getCalApi } from "@calcom/embed-react";
import { CheckCircle2, ShieldCheck } from "lucide-react";

interface CalendarStepProps {
  config: ProjectConfig;
  answers: Record<string, string>;
}

export const CalendarStep: React.FC<CalendarStepProps> = ({
  config,
  answers,
}) => {
  const calLink = config.booking.calendarUrl.replace("https://cal.com/", "").replace("https://app.cal.com/", "");

  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi();
        cal("ui", {
          theme: "dark",
          styles: { branding: { brandColor: config.branding.primaryColor || "#6366f1" } },
          hideEventTypeDetails: false,
          layout: "month_view",
        });

        // Escucha cuando la reserva se completa con éxito
        cal("on", {
          action: "bookingSuccessful",
          callback: (e: any) => {
            console.log("[Cal.com] Booking Successful Event:", e);
            fetch("/api/booking", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                eventType: "booking_confirmed",
                projectId: config.id,
                answers,
                bookingData: e?.detail?.data || e?.data || null,
                timestamp: new Date().toISOString(),
              }),
            }).catch((err) => console.error("Error sending booking webhook:", err));

            // Redirección inmediata a la página de gracias para registrar la conversión en Meta Pixel
            setTimeout(() => {
              window.location.href = "/gracias";
            }, 800);
          },
        });
      } catch (err) {
        console.error("[Cal.com] Embed API init error:", err);
      }
    })();
  }, [config.id, config.branding.primaryColor, answers]);

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-4 sm:p-8 shadow-2xl">
      {/* Qualification Badge */}
      <div className="mb-6 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-4 sm:p-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-900/40 border border-emerald-500/30">
            <CheckCircle2 className="h-5 w-5 text-emerald-400" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white">
              ¡Tu perfil ha sido aprobado!
            </h4>
            <p className="text-xs text-zinc-300">
              Selecciona tu día y hora en la agenda oficial en vivo abajo.
            </p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-1 text-[11px] font-mono text-emerald-400">
          <ShieldCheck className="h-3.5 w-3.5" />
          <span>Acceso desbloqueado</span>
        </div>
      </div>

      {/* Cal.com Official Embed Container */}
      <div className="relative min-h-[600px] w-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950">
        <Cal
          calLink={calLink}
          style={{ width: "100%", height: "100%", minHeight: "650px", overflow: "scroll" }}
          config={{ layout: "month_view", theme: "dark" }}
        />
      </div>

      {/* WhatsApp Fallback Link */}
      <div className="mt-6 rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4 text-center">
        <p className="text-xs text-zinc-300 mb-2">
          ¿No encuentras un horario que se ajuste a tu disponibilidad?
        </p>
        <a
          href={`https://wa.me/${config.booking.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hola Quant Partners, completé el filtro pero no encontré un horario disponible en la agenda. Me gustaría coordinar una fecha especial para la llamada.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          <span>Escríbenos por WhatsApp para coordinar una fecha especial →</span>
        </a>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs font-mono text-zinc-500 px-2">
        <span>🔒 Conexión cifrada SSL 256-bit</span>
        <span>Confirmación automática por WhatsApp</span>
      </div>
    </div>
  );
};
