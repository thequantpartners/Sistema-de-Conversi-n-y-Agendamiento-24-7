"use client";

import React, { useState } from "react";
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
  AlertCircle,
  FileCheck2,
  ArrowRight,
  Star
} from "lucide-react";

export default function DemoServiciosTecnicosPage() {
  const demoData = DEMO_NICHES.find((d) => d.id === "servicios-tecnicos")!;
  const [selectedService, setSelectedService] = useState("mantenimiento");

  const serviceMessages: Record<string, string> = {
    mantenimiento: "Hola, vi su landing page y necesito Mantenimiento Preventivo y Limpieza de Aire Acondicionado.",
    instalacion: "Hola, vi su landing page y necesito la Instalación de un equipo de Aire Acondicionado.",
    reparacion: "Hola, vi su landing page y tengo una Emergencia / Falla Técnica con mi Aire Acondicionado.",
    b2b: "Hola, vi su landing page y deseo cotizar un Contrato de Mantenimiento para Empresas.",
  };

  const dynamicWaLink = getWhatsAppLink(serviceMessages[selectedService] || demoData.whatsAppMessage);

  return (
    <div className="min-h-screen bg-[#0C0904] text-slate-100 font-sans pb-36 relative overflow-x-hidden selection:bg-amber-500 selection:text-slate-950">
      {/* Ambient Mesh Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-amber-600/15 via-orange-600/10 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-orange-600/10 blur-[150px] pointer-events-none -z-10" />

      {/* Top Demo Bar */}
      <div className="bg-slate-900/90 text-xs py-2.5 px-4 text-center border-b border-slate-800/80 backdrop-blur-md flex flex-wrap items-center justify-center gap-2">
        <span className="bg-amber-500/20 text-amber-300 font-bold px-2.5 py-0.5 rounded-full border border-amber-400/30">
          LANDING PAGE DEMO
        </span>
        <span className="text-slate-300">
          Estructura de alta conversión para <strong>Aire Acondicionado, Electricidad y Servicios a Domicilio</strong>
        </span>
      </div>

      {/* Urgent Dispatch Header */}
      <header className="border-b border-amber-950/70 bg-[#160E04]/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-orange-600 flex items-center justify-center font-black text-slate-950 shadow-lg shadow-amber-500/20 text-lg">
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

          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <a href="#servicios" className="hover:text-amber-400 transition">Servicios</a>
            <a href="#estimador" className="hover:text-amber-400 transition">Cotizador Express</a>
            <a href="#garantia" className="hover:text-amber-400 transition">Garantía Escrita</a>
            <a href="#marcas" className="hover:text-amber-400 transition">Marcas</a>
          </nav>

          <a
            href={dynamicWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 shadow-lg shadow-amber-500/20 transition-all transform hover:scale-105 flex items-center gap-1.5"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Emergencias 24h</span>
          </a>
        </div>
      </header>

      {/* Hero Section (Dribbble Split 60/40 Layout) */}
      <section className="pt-12 sm:pt-20 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/30 text-amber-300 text-xs font-medium shadow-xl">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Unidades Móviles Disponibles en Lima • Llegada en 45 Min</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Instalación y Reparación de Aire Acondicionado con{" "}
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                Garantía Escrita de 12 Meses.
              </span>
            </h1>

            <p className="text-sm sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Técnicos certificados para hogares, oficinas y plantas industriales. Cotización exacta sin sorpresas en menos de 10 minutos y visita en el mismo día.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href={dynamicWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl font-bold text-sm sm:text-base bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-xl shadow-emerald-500/25 transition-all transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950" />
                <span>Solicitar Técnico por WhatsApp</span>
              </a>

              <a
                href="#servicios"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-semibold text-xs sm:text-sm text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 transition"
              >
                <span>Ver Servicios</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400 border-t border-amber-950">
              <div className="flex items-center gap-1.5 text-amber-400">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-white ml-1">4.9 / 5.0</span>
              </div>
              <span>•</span>
              <span>+4,500 Equipos Reparados</span>
              <span>•</span>
              <span className="text-emerald-400 font-semibold">✓ Facturación Electrónica</span>
            </div>
          </div>

          {/* Right Hero Column: Instant Service Estimator Card */}
          <div className="lg:col-span-5" id="estimador">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#1C1408] to-[#100B04] border border-amber-500/30 shadow-2xl space-y-5 relative overflow-hidden backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-amber-950 pb-4">
                <div>
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                    DESPACHO INMEDIATO
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Cotizador de Servicio Técnico
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Wrench className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-semibold text-slate-300 block">
                  1. Selecciona el tipo de trabajo:
                </label>
                
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: "mantenimiento", label: "Mantenimiento", icon: "🧰" },
                    { id: "instalacion", label: "Instalación Split", icon: "❄️" },
                    { id: "reparacion", label: "Reparación Urgente", icon: "⚡" },
                    { id: "b2b", label: "Contrato B2B", icon: "🏢" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setSelectedService(tab.id)}
                      className={`p-3 rounded-xl text-left text-xs font-medium transition-all flex items-center gap-2 border ${
                        selectedService === tab.id
                          ? "bg-amber-400 text-slate-950 font-bold border-amber-400 shadow-md shadow-amber-400/20"
                          : "bg-slate-950/60 text-slate-300 border-amber-950 hover:border-amber-500/30"
                      }`}
                    >
                      <span>{tab.icon}</span>
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-amber-950 space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Diagnóstico y presupuesto:</span>
                  <span className="font-bold text-emerald-400">Sin Compromiso</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Tiempo de llegada estimado:</span>
                  <span className="font-bold text-white">45 a 60 minutos</span>
                </div>
              </div>

              <a
                href={dynamicWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 shadow-lg shadow-amber-500/20 transition-all text-center"
              >
                <span>Pedir Visita Técnica por WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="text-[10px] text-center text-slate-400 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3 h-3 text-amber-400" />
                <span>100% de repuestos y piezas originales garantizadas.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid: Technical Services */}
      <section id="servicios" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
            SOLUCIONES INTEGRALES
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Especialidades Técnicas & Climatización
          </h2>
          <p className="text-xs sm:text-base text-slate-400">
            Cobertura residencial, comercial e industrial para todas las marcas del mercado.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 (Large - Featured) */}
          <div className="md:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-[#1E1508] via-[#150E05] to-[#0D0803] border border-amber-950 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl">❄️</span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  Servicio Estrella
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition">
                Instalación de Aire Acondicionado Split, Ducto & VRF
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                Montaje certificado con sellado hermético, prueba de vacío computarizada y aislamiento térmico de alta densidad para máxima eficiencia y bajo consumo de luz.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-amber-950 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-6 text-xs text-slate-400">
                <span>✓ Mano de obra certificada</span>
                <span>✓ 12 meses de garantía</span>
                <span>✓ Prueba de carga</span>
              </div>
              <a
                href={dynamicWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
              >
                Solicitar Cotización →
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#1A1207] to-[#0F0A04] border border-amber-950 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl">🧰</span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300">
                  Preventivo
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition">
                Mantenimiento Químico & Limpieza
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Desinfección con vapor antibacteriano, eliminación de hongos, limpieza de turbinas y recarga de gas ecológico.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-amber-950">
              <span className="text-xs font-bold text-emerald-400">Ahorra hasta 30% en consumo eléctrico</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#1A1207] to-[#0F0A04] border border-amber-950 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl">⚡</span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300">
                  Urgencias 24h
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition">
                Reparación de Fugas & Compresores
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Diagnóstico de placas electrónicas inverter, goteos de agua y reemplazo de condensadores quemados.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-amber-950">
              <span className="text-xs font-bold text-slate-400">Llegada en 45 min</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#1A1207] to-[#0F0A04] border border-amber-950 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 w-fit">
                <Building className="w-6 h-6" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition">
                Contratos Mensuales B2B
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Planes corporativos para oficinas, restaurantes y cadenas comerciales con atención prioritaria 24/7.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-amber-950">
              <span className="text-xs font-bold text-slate-400">Facturación mensual y reportes</span>
            </div>
          </div>

          {/* Card 5 */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#1A1207] to-[#0F0A04] border border-amber-950 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 w-fit">
                <Zap className="w-6 h-6" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition">
                Instalaciones Eléctricas & Tableros
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Balanceo de cargas, llaves termomagnéticas independientes y pozos a tierra con protocolo de prueba.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-amber-950">
              <span className="text-xs font-bold text-slate-400">Certificación técnica oficial</span>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Widget */}
      <DemoFloatingWhatsApp
        businessName="Clima & Soluciones Pro"
        badgeText="¿Necesitas un técnico en 45 min?"
        defaultMessage="Hola, estuve viendo su landing page y requiero asistencia técnica para mi aire acondicionado."
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
