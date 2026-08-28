import React from "react";
import { Metadata } from "next";
import { DemoStickyBar } from "@/core/components/demos/demo-sticky-bar";
import { DEMO_NICHES, getWhatsAppLink } from "@/core/data/portfolio-demos";

export const metadata: Metadata = {
  title: "Demo en Vivo: Servicios Técnicos & Mantenimiento | Quant Partners",
  description: "Diseño web de alta respuesta para técnicos, climatización, electricistas y contratistas.",
};

export default function DemoServiciosTecnicosPage() {
  const demoData = DEMO_NICHES.find((d) => d.id === "servicios-tecnicos")!;
  const directWa = getWhatsAppLink(demoData.whatsAppMessage);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-32">
      {/* Demo Top Banner */}
      <div className="bg-gradient-to-r from-amber-900 via-orange-950 to-slate-900 text-xs py-2 px-4 text-center border-b border-amber-800/50 flex items-center justify-center gap-2">
        <span className="bg-amber-500/20 text-amber-300 font-bold px-2 py-0.5 rounded border border-amber-400/30">
          VISTA PREVIA EN VIVO
        </span>
        <span className="text-slate-300">
          Plantilla para <strong>Aire Acondicionado, Electricidad, Obras y Mantenimiento</strong>
        </span>
      </div>

      {/* Header Mockup */}
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center font-bold text-slate-950 shadow-md shadow-amber-500/20">
              ⚡
            </div>
            <div>
              <span className="font-extrabold text-base tracking-tight text-white block">
                Clima & Soluciones Pro
              </span>
              <span className="text-[10px] text-amber-400 uppercase tracking-widest block font-medium">
                Mantenimiento, Climatización & Obras
              </span>
            </div>
          </div>

          <a
            href={directWa}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg text-xs sm:text-sm font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition shadow-md shadow-amber-500/20"
          >
            Emergencias 24h
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 px-4 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/60 border border-amber-800/60 text-amber-300 text-xs font-semibold mb-6">
          <span>🛠️</span> Atención Inmediata a Domicilio y Empresas
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Instalación y Mantenimiento de Aire Acondicionado con Garantía Escrita
        </h1>

        <p className="mt-5 text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Técnicos certificados para hogares, oficinas y plantas industriales. Cotización en menos de 10 minutos y visita técnica en el día.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={directWa}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-xl shadow-emerald-500/20 transition flex items-center justify-center gap-2"
          >
            <span>💬</span> Solicitar Técnico por WhatsApp
          </a>
          <a
            href="#servicios"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-850 border border-slate-800 transition"
          >
            Ver Catálogo de Servicios ↓
          </a>
        </div>

        {/* Badges Guarantee */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center">
            <span className="text-2xl block mb-1">⏱️</span>
            <p className="text-sm font-bold text-white">Llegada en 45 min</p>
            <p className="text-xs text-slate-400">En casos de urgencia técnica</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center">
            <span className="text-2xl block mb-1">🛡️</span>
            <p className="text-sm font-bold text-amber-400">Garantía de 12 Meses</p>
            <p className="text-xs text-slate-400">Repuestos 100% originales</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center">
            <span className="text-2xl block mb-1">🧾</span>
            <p className="text-sm font-bold text-white">Facturación Electrónica</p>
            <p className="text-xs text-slate-400">Para empresas y particulares</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="servicios" className="py-12 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Servicios Técnicos Especializados
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Cubrimos todas las marcas y tipos de sistemas residenciales y comerciales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Instalación de Aire Acondicionado",
              desc: "Montaje profesional Split, Ducto y VRF con sellado hermético y prueba de carga.",
              icon: "❄️"
            },
            {
              title: "Mantenimiento Preventivo & Limpieza",
              desc: "Desinfección con vapor a presión, eliminación de hongos, recarga de gas y filtros.",
              icon: "🧰"
            },
            {
              title: "Reparación & Diagnóstico Eléctrico",
              desc: "Detección de fugas, cambio de compresores, tarjetas electrónicas y ventiladores.",
              icon: "⚡"
            },
            {
              title: "Contratos de Mantenimiento B2B",
              desc: "Planes mensuales y trimestrales para oficinas, comercios, hoteles e industrias.",
              icon: "🏢"
            },
            {
              title: "Sistemas de Ventilación Forzada",
              desc: "Inyección y extracción de aire para sótanos, cocinas industriales y almacenes.",
              icon: "🌪️"
            },
            {
              title: "Tableros Eléctricos & Cableado",
              desc: "Instalaciones eléctricas industriales, balanceo de cargas y pozos a tierra.",
              icon: "🔌"
            }
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 transition-all group"
            >
              <span className="text-3xl block mb-3">{item.icon}</span>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition">
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
