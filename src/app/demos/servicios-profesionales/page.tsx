import React from "react";
import { Metadata } from "next";
import { DemoStickyBar } from "@/core/components/demos/demo-sticky-bar";
import { DEMO_NICHES, getWhatsAppLink } from "@/core/data/portfolio-demos";

export const metadata: Metadata = {
  title: "Demo en Vivo: Estudio Jurídico & Consultoría | Quant Partners",
  description: "Diseño web profesional para abogados, contadores y consultores de negocios.",
};

export default function DemoServiciosProfesionalesPage() {
  const demoData = DEMO_NICHES.find((d) => d.id === "servicios-profesionales")!;
  const directWa = getWhatsAppLink(demoData.whatsAppMessage);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-32">
      {/* Demo Top Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-xs py-2 px-4 text-center border-b border-blue-800/50 flex items-center justify-center gap-2">
        <span className="bg-blue-500/20 text-blue-300 font-bold px-2 py-0.5 rounded border border-blue-400/30">
          VISTA PREVIA EN VIVO
        </span>
        <span className="text-slate-300">
          Plantilla para <strong>Abogados, Contadores y Consultores</strong>
        </span>
      </div>

      {/* Header Mockup */}
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white shadow-md shadow-blue-500/20">
              VJ
            </div>
            <div>
              <span className="font-extrabold text-base tracking-tight text-white block">
                Valenzuela & Jiménez
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block">
                Abogados & Consultores
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <span className="hover:text-white cursor-pointer">Inicio</span>
            <span className="hover:text-white cursor-pointer">Especialidades</span>
            <span className="hover:text-white cursor-pointer">Nuestro Equipo</span>
            <span className="hover:text-white cursor-pointer">Resultados</span>
          </nav>

          <a
            href={directWa}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white transition shadow-md shadow-blue-600/30"
          >
            Consulta Inmediata
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 px-4 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/60 text-blue-300 text-xs font-semibold mb-6">
          <span>⚖️</span> Más de 12 años protegiendo el patrimonio de empresas
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Asesoría Jurídica y Tributaria de Alto Nivel para tu Empresa
        </h1>

        <p className="mt-5 text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Defendemos los intereses de tu negocio con estrategias legales sólidas, blindaje corporativo y optimización fiscal transparente.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={directWa}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-xl shadow-emerald-500/20 transition flex items-center justify-center gap-2"
          >
            <span>💬</span> Agendar Consulta por WhatsApp
          </a>
          <a
            href="#areas"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-850 border border-slate-800 transition"
          >
            Ver Áreas de Práctica ↓
          </a>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-y border-slate-800 py-6">
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">+500</p>
            <p className="text-xs text-slate-400 mt-1">Empresas Asesoradas</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-blue-400">98%</p>
            <p className="text-xs text-slate-400 mt-1">Casos Exitosos</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">S/ 4.5M</p>
            <p className="text-xs text-slate-400 mt-1">Ahorro Fiscal Generado</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400">24/7</p>
            <p className="text-xs text-slate-400 mt-1">Atención Corporativa</p>
          </div>
        </div>
      </section>

      {/* Services / Practice Areas */}
      <section id="areas" className="py-12 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Nuestras Especialidades Legales
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Soluciones jurídicas a la medida de tu sector y tamaño de empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Derecho Corporativo & Contratos",
              desc: "Elaboración, revisión y blindaje de acuerdos comerciales, fusiones y contratos mercantiles.",
              icon: "🏢"
            },
            {
              title: "Planificación Tributaria & SUNAT",
              desc: "Defensa contra reparos fiscales, auditorías y estructuración tributaria eficiente.",
              icon: "📊"
            },
            {
              title: "Derecho Laboral Empresarial",
              desc: "Prevención de contingencias con colaboradores, despidos justificados y compliance laboral.",
              icon: "👥"
            },
            {
              title: "Litigios & Arbitraje Comercial",
              desc: "Representación firme en resolución de disputas ante juzgados y tribunales arbitrales.",
              icon: "⚖️"
            },
            {
              title: "Registro de Marcas & Propiedad",
              desc: "Protección de tus marcas, patentes y propiedad intelectual ante INDECOPI.",
              icon: "🛡️"
            },
            {
              title: "Blindaje Patrimonial",
              desc: "Estructuras jurídicas seguras para proteger el patrimonio de accionistas y directores.",
              icon: "💼"
            }
          ].map((area, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 transition-all group"
            >
              <span className="text-3xl block mb-3">{area.icon}</span>
              <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition">
                {area.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                {area.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Testimonial */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <div className="p-8 rounded-3xl bg-gradient-to-b from-blue-950/40 to-slate-900 border border-blue-900/40 text-center space-y-4">
          <div className="flex justify-center text-amber-400 text-lg">
            ★★★★★
          </div>
          <blockquote className="text-sm sm:text-base text-slate-200 italic max-w-xl mx-auto">
            "Gracias a su asesoría tributaria y societaria, logramos evitar una contingencia millonaria con SUNAT. Respuestas rápidas y trato sumamente ejecutivo."
          </blockquote>
          <div className="pt-2">
            <p className="text-sm font-bold text-white">Carlos Mendoza</p>
            <p className="text-xs text-slate-400">Director General • Logística Andina SAC</p>
          </div>
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
