import React from "react";
import { Metadata } from "next";
import { DemoStickyBar } from "@/core/components/demos/demo-sticky-bar";
import { DEMO_NICHES, getWhatsAppLink } from "@/core/data/portfolio-demos";

export const metadata: Metadata = {
  title: "Demo en Vivo: Clínica Dental & Estética | Quant Partners",
  description: "Diseño web moderno para dentistas, clínicas médicas, psicología y centros de estética.",
};

export default function DemoSaludEsteticaPage() {
  const demoData = DEMO_NICHES.find((d) => d.id === "salud-estetica")!;
  const directWa = getWhatsAppLink(demoData.whatsAppMessage);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-32">
      {/* Demo Top Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-xs py-2 px-4 text-center border-b border-emerald-800/50 flex items-center justify-center gap-2">
        <span className="bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded border border-emerald-400/30">
          VISTA PREVIA EN VIVO
        </span>
        <span className="text-slate-300">
          Plantilla para <strong>Dentistas, Médicos, Psicología y Estética</strong>
        </span>
      </div>

      {/* Header Mockup */}
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500 flex items-center justify-center font-bold text-slate-950 shadow-md shadow-emerald-500/20">
              ✨
            </div>
            <div>
              <span className="font-extrabold text-base tracking-tight text-white block">
                Clínica Dental Sonríe Plus
              </span>
              <span className="text-[10px] text-emerald-400 uppercase tracking-widest block font-medium">
                Odontología Especializada & Estética
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <span className="hover:text-white cursor-pointer">Inicio</span>
            <span className="hover:text-white cursor-pointer">Tratamientos</span>
            <span className="hover:text-white cursor-pointer">Antes & Después</span>
            <span className="hover:text-white cursor-pointer">Ubicación</span>
          </nav>

          <a
            href={directWa}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg text-xs sm:text-sm font-bold bg-emerald-400 hover:bg-emerald-300 text-slate-950 transition shadow-md shadow-emerald-500/20"
          >
            Reservar Cita
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 px-4 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-emerald-300 text-xs font-semibold mb-6">
          <span>🩺</span> Tecnología Digital 3D & Atención Sin Dolor
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Recupera la Confianza de tu Sonrisa con Especialistas Certificados
        </h1>

        <p className="mt-5 text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Diseño de sonrisa, ortodoncia invisible e implantes dentales con tecnología de vanguardia y facilidades de pago.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={directWa}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-xl shadow-emerald-500/20 transition flex items-center justify-center gap-2"
          >
            <span>📅</span> Agendar Evaluación por WhatsApp
          </a>
          <a
            href="#tratamientos"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-850 border border-slate-800 transition"
          >
            Ver Tratamientos ↓
          </a>
        </div>

        {/* Highlight Banner */}
        <div className="mt-14 p-6 rounded-3xl bg-slate-900/80 border border-slate-800 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-around gap-4 text-left">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📍</span>
            <div>
              <p className="text-xs text-slate-400">Sede Principal</p>
              <p className="text-sm font-bold text-white">Av. Javier Prado Este 2340, San Borja</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">⏰</span>
            <div>
              <p className="text-xs text-slate-400">Horario Continuo</p>
              <p className="text-sm font-bold text-white">Lun - Sáb: 8:00 am a 8:00 pm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section id="tratamientos" className="py-12 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Nuestros Tratamientos Destacados
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Resultados garantizados con diagnóstico digital de alta precisión.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Ortodoncia Invisible (Alineadores)",
              desc: "Corrige la posición de tus dientes sin brackets metálicos, cómodo y 100% estético.",
              icon: "✨",
              tag: "Más Popular"
            },
            {
              title: "Implantes Dentales en 1 Día",
              desc: "Recupera piezas dentales perdidas con titanio biocompatible y corona de circonio.",
              icon: "🦷",
              tag: "Alta Durabilidad"
            },
            {
              title: "Diseño de Sonrisa & Carillas",
              desc: "Carillas de porcelana y resina de alta estética para una sonrisa blanca y natural.",
              icon: "💎",
              tag: "Estética Premium"
            },
            {
              title: "Blanqueamiento Láser LED",
              desc: "Aclara hasta 4 tonos en una sola sesión clínica sin sensibilidad molesta.",
              icon: "⚡",
              tag: "Resultados en 45 min"
            },
            {
              title: "Limpieza Profunda & Profilaxis",
              desc: "Ultrasonido para remoción de sarro y pulido dental para encías 100% sanas.",
              icon: "🌿",
              tag: "Preventivo"
            },
            {
              title: "Endodoncia y Restauraciones",
              desc: "Salvamos piezas dentales con tecnología rotatoria indolora y anestesia computarizada.",
              icon: "🛡️",
              tag: "Cero Dolor"
            }
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 transition-all group relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">{item.icon}</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/30 text-emerald-300">
                  {item.tag}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Sticky Bottom Conversion Bar */}
      <DemoStickyBar
        demoTitle={demoData.title}
        niche={demoData.niche}
        whatsAppMessage={demoData.whatsAppMessage}
      />
    </div>
  );
}
