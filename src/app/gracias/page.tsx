import type { Metadata } from "next";
import { getProjectConfig } from "@/core/engine/get-project";
import { CheckCircle2, Laptop, Calendar, MessageSquare, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "¡Cita Confirmada con Éxito! | Quant Partners",
  description: "Tu sesión estratégica ha sido confirmada. Revisa las indicaciones previas para la reunión.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function GraciasPage() {
  const config = getProjectConfig();

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] font-sans selection:bg-indigo-500 selection:text-white flex flex-col justify-between">
      {/* Meta Pixel Schedule Event Trigger Script stub */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
              window.fbq('track', 'Schedule');
            }
          `,
        }}
      />

      {/* Top Header Bar */}
      <header className="w-full border-b border-zinc-800/80 bg-zinc-950/80 py-4 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl flex items-center justify-between">
          <Link href="/" className="flex items-center text-lg font-bold tracking-tight text-white">
            <span className="text-indigo-400 font-mono tracking-tighter">/</span>
            <span className="text-white ml-1">{config.branding.logoText}</span>
            {config.branding.logoSubtext && (
              <span className="text-zinc-400 ml-1 font-normal">{config.branding.logoSubtext}</span>
            )}
          </Link>
          <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Reserva confirmada</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16 w-full">
        {/* Success Hero Badge */}
        <div className="text-center mb-10">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-950/40 text-emerald-400 shadow-xl shadow-emerald-950/50">
            <CheckCircle2 className="h-9 w-9 stroke-[2.5]" />
          </div>

          <div className="inline-block rounded-full bg-indigo-950/60 border border-indigo-500/30 px-3 py-1 text-xs font-mono text-indigo-300 mb-3">
            PASO FINAL · INSTRUCCIONES DE CONEXIÓN
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            ¡Tu cita ha sido agendada con éxito!
          </h1>
          <p className="text-sm sm:text-base text-zinc-300 max-w-xl mx-auto">
            Hemos bloqueado el espacio en nuestro calendario oficial. Por favor, lee las siguientes indicaciones para aprovechar la llamada al 100%.
          </p>
        </div>

        {/* Pre-Meet Checklist Cards */}
        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8 shadow-2xl space-y-6 mb-8">
          <h2 className="font-mono text-xs text-indigo-400 uppercase tracking-wider font-semibold border-b border-zinc-800/80 pb-3">
            Protocolo de Preparación para la Sesión
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Card 1 */}
            <div className="rounded-2xl border border-zinc-800/90 bg-zinc-900/40 p-4 sm:p-5 flex items-start gap-3.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-950/80 border border-indigo-800/50 text-indigo-400 mt-0.5">
                <Laptop className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-1">
                  1. Conéctate desde un ordenador
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Mostraremos la arquitectura de la infraestructura y ejemplos en pantalla compartida. Es indispensable estar frente a una computadora.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-zinc-800/90 bg-zinc-900/40 p-4 sm:p-5 flex items-start gap-3.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-950/80 border border-indigo-800/50 text-indigo-400 mt-0.5">
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-1">
                  2. Puntualidad (Tolerancia 5 min)
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Las llamadas están programadas una tras otra. Si no te conectas en los primeros 5 minutos, el slot se liberará automáticamente.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-zinc-800/90 bg-zinc-900/40 p-4 sm:p-5 flex items-start gap-3.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-950/80 border border-indigo-800/50 text-indigo-400 mt-0.5">
                <Calendar className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-1">
                  3. Si tienes socios, invítalos
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Si tomas decisiones en conjunto, reenvíales la invitación para que todos puedan evaluar la infraestructura en vivo.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="rounded-2xl border border-zinc-800/90 bg-zinc-900/40 p-4 sm:p-5 flex items-start gap-3.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-950/80 border border-indigo-800/50 text-indigo-400 mt-0.5">
                <MessageSquare className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-1">
                  4. Atento a WhatsApp
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Te enviaremos los detalles de acceso y un recordatorio 2 horas antes desde nuestro número oficial (+51 924 464 410).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Support Callout */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 text-center">
          <p className="text-xs text-zinc-300 mb-3">
            ¿Necesitas reprogramar o tienes una consulta antes de la reunión?
          </p>
          <a
            href="https://wa.me/51924464410?text=Hola%20Quant%20Partners%2C%20acabo%20de%20agendar%20mi%20llamada%20y%20tengo%20una%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-semibold text-white hover:bg-emerald-500 transition-colors shadow-md shadow-emerald-950"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Contactar por WhatsApp (+51 924 464 410)</span>
          </a>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <ArrowRight className="h-3.5 w-3.5 rotate-180" />
            <span>Volver a la página principal</span>
          </Link>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="py-6 border-t border-zinc-900 text-center text-xs font-mono text-zinc-600">
        <div className="flex items-center justify-center gap-1.5">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
          <span>Quant Partners · Sesión Protegida y Confirmada</span>
        </div>
      </footer>
    </div>
  );
}
