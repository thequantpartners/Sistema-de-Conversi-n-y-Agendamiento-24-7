import React from "react";
import { Metadata } from "next";
import { DemoStickyBar } from "@/core/components/demos/demo-sticky-bar";
import { DemoFloatingWhatsApp } from "@/core/components/demos/demo-floating-whatsapp";
import { DEMO_NICHES, getWhatsAppLink } from "@/core/data/portfolio-demos";
import { 
  Wrench, 
  Zap, 
  ShieldCheck, 
  Clock, 
  PhoneCall, 
  CheckCircle2, 
  Flame, 
  Wind, 
  Truck, 
  Building, 
  ChevronRight,
  MessageCircle,
  AlertCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Demo en Vivo: Servicios Técnicos & Climatización | Quant Partners",
  description: "Diseño web de alta respuesta y conversión para empresas de aire acondicionado, mantenimiento y contratistas.",
};

export default function DemoServiciosTecnicosPage() {
  const demoData = DEMO_NICHES.find((d) => d.id === "servicios-tecnicos")!;
  const directWa = getWhatsAppLink(demoData.whatsAppMessage);

  return (
    <div className="min-h-screen bg-[#0C0904] text-slate-100 font-sans pb-32 relative selection:bg-amber-500 selection:text-slate-950">
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-amber-600/15 via-orange-600/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      {/* Top Demo Bar */}
      <div className="bg-slate-900/90 text-xs py-2 px-4 text-center border-b border-slate-800 backdrop-blur flex items-center justify-center gap-2">
        <span className="bg-amber-500/20 text-amber-300 font-bold px-2.5 py-0.5 rounded-full border border-amber-400/30">
          DEMO EN VIVO
        </span>
        <span className="text-slate-300">
          Diseño para <strong>Aire Acondicionado, Electricidad, Contratistas y Mantenimiento</strong>
        </span>
      </div>

      {/* Technical Modern Header */}
      <header className="border-b border-amber-950/60 bg-[#140E06]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center font-black text-slate-950 shadow-lg shadow-amber-500/20 text-lg">
              ⚡
            </div>
            <div>
              <span className="font-extrabold text-base tracking-tight text-white block">
                CLIMA & SOLUCIONES PRO
              </span>
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block font-semibold">
                Ingeniería en Climatización & Obras
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <span className="hover:text-amber-400 cursor-pointer transition">Servicios</span>
            <span className="hover:text-amber-400 cursor-pointer transition">Mantenimiento B2B</span>
            <span className="hover:text-amber-400 cursor-pointer transition">Garantías</span>
            <span className="hover:text-amber-400 cursor-pointer transition">Cobertura</span>
          </nav>

          <a
            href={directWa}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 transition-all transform hover:scale-105 flex items-center gap-1.5"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Emergencias 24h</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 px-4 sm:px-6 max-w-6xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/30 text-amber-300 text-xs font-medium backdrop-blur shadow-xl">
          <Wrench className="w-4 h-4 text-amber-400" />
          <span>Técnicos Certificados a Domicilio y Empresas en Lima & Callao</span>
        </div>

        <h1 className="text-3xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.12] max-w-4xl mx-auto">
          Instalación, Reparación y Mantenimiento de Aire Acondicionado con Garantía Escrita
        </h1>

        <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Atención urgente para hogares, oficinas y centros comerciales. Presupuesto sin sorpresas en 10 minutos y visita técnica en el mismo día.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={directWa}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-sm sm:text-base bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-xl shadow-emerald-500/25 transition-all transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 fill-slate-950" />
            <span>Solicitar Técnico por WhatsApp</span>
          </a>
          <a
            href="#catalogo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-semibold text-sm text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 transition"
          >
            <span>Ver Servicios</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Live Dispatch Ticker */}
        <div className="mt-14 p-6 rounded-3xl bg-[#1A1208] border border-amber-900/60 backdrop-blur-xl max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-2xl bg-amber-950/70 border border-amber-500/30 text-amber-400">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Respuesta Rápida</p>
              <p className="text-sm font-bold text-white">Llegada en 45 min en urgencias</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-2xl bg-amber-950/70 border border-amber-500/30 text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Garantía por Contrato</p>
              <p className="text-sm font-bold text-amber-400">12 Meses en Mano de Obra</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-2xl bg-amber-950/70 border border-amber-500/30 text-amber-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Factura Electrónica</p>
              <p className="text-sm font-bold text-white">Para Empresas y Particulares</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="catalogo" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
            SOLUCIONES ESPECIALIZADAS
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Catálogo de Servicios Técnicos
          </h2>
          <p className="text-xs sm:text-base text-slate-400 max-w-lg mx-auto">
            Trabajamos con todas las marcas: LG, Daikin, Carrier, York, Samsung, Midea y más.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Instalación de Aire Acondicionado",
              desc: "Montaje técnico de equipos Split, Multi-split, Ducto y VRF con presurización de nitrógeno.",
              badge: "Residencial & Comercial"
            },
            {
              title: "Mantenimiento Preventivo & Químico",
              desc: "Lavado profundo con hidro-lavadora, desinfección antibacteriana de serpentines y recarga de gas ecológico.",
              badge: "Prolonga Vida Útil"
            },
            {
              title: "Reparación & Diagnóstico Electrónico",
              desc: "Corrección de goteos, cambio de compresores, reparación de tarjetas inverter y sensores.",
              badge: "Diagnóstico Rápido"
            },
            {
              title: "Planes de Mantenimiento para Empresas",
              desc: "Contratos mensuales con visitas periódicas, reportes técnicos y atención prioritaria para oficinas y locales.",
              badge: "Corporativo B2B"
            },
            {
              title: "Sistemas de Ventilación & Extracción",
              desc: "Campanas industriales, inyección de aire fresco para sótanos y ductería de acero galvanizado.",
              badge: "Industrial"
            },
            {
              title: "Tableros Eléctricos & Líneas de Poder",
              desc: "Dimensionamiento de llaves térmicas, cableado vulcanizado y pozos a tierra con certificación.",
              badge: "Seguridad Eléctrica"
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-gradient-to-b from-[#1C1408] to-[#120B04] border border-amber-950/80 hover:border-amber-500/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/5 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 inline-block">
                  {item.badge}
                </span>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-amber-950 flex items-center justify-between">
                <span className="text-xs font-semibold text-amber-400">Cotización Inmediata</span>
                <a
                  href={directWa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-white hover:text-amber-300 flex items-center gap-1"
                >
                  Pedir Técnico →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Floating WhatsApp Widget */}
      <DemoFloatingWhatsApp
        businessName="Clima & Soluciones Pro"
        badgeText="¿Necesitas un técnico urgente?"
        defaultMessage="Hola, necesito una cotización o visita técnica para aire acondicionado."
      />

      {/* Sticky Bottom Conversion Bar */}
      <DemoStickyBar
        demoTitle={demoData.title}
        niche={demoData.niche}
        whatsAppMessage={demoData.whatsAppMessage}
      />
    </div>
  );
}
