"use client";

import React, { useState } from "react";
import { DemoStickyBar } from "@/core/components/demos/demo-sticky-bar";
import { DemoFloatingWhatsApp } from "@/core/components/demos/demo-floating-whatsapp";
import { DEMO_NICHES, getWhatsAppLink, PROMO_PRICE } from "@/core/data/portfolio-demos";
import { 
  ShieldCheck, 
  Scale, 
  TrendingUp, 
  Building2, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  Clock, 
  Briefcase, 
  ChevronRight, 
  MessageCircle,
  FileCheck2,
  Lock,
  Sparkles,
  PhoneCall
} from "lucide-react";

export default function DemoServiciosProfesionalesPage() {
  const demoData = DEMO_NICHES.find((d) => d.id === "servicios-profesionales")!;
  const [selectedCaseType, setSelectedCaseType] = useState("tributario");

  const caseMessages: Record<string, string> = {
    tributario: "Hola, vi su landing page y necesito asesoría en Defensa Tributaria y fiscalizaciones de SUNAT.",
    corporativo: "Hola, vi su landing page y necesito asesoría en Contratos y Derecho Corporativo para mi empresa.",
    laboral: "Hola, vi su landing page y necesito blindaje laboral y prevención de contingencias con colaboradores.",
    marcas: "Hola, vi su landing page y deseo registrar y proteger mi marca en INDECOPI.",
  };

  const dynamicWaLink = getWhatsAppLink(caseMessages[selectedCaseType] || demoData.whatsAppMessage);

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 font-sans pb-36 relative overflow-x-hidden selection:bg-amber-400 selection:text-slate-950">
      {/* Dynamic Ambient Mesh Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-blue-700/15 via-amber-600/10 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-[35%] right-[-10%] w-[600px] h-[600px] bg-indigo-700/10 blur-[150px] pointer-events-none -z-10" />

      {/* Demo Top Banner */}
      <div className="bg-slate-900/90 text-xs py-2.5 px-4 text-center border-b border-slate-800/80 backdrop-blur-md flex flex-wrap items-center justify-center gap-2">
        <span className="bg-blue-500/20 text-blue-300 font-bold px-2.5 py-0.5 rounded-full border border-blue-400/30">
          LANDING PAGE DEMO
        </span>
        <span className="text-slate-300">
          Estructura de alta conversión para <strong>Firmas de Abogados, Contadores y Consultoras B2B</strong>
        </span>
      </div>

      {/* Modern Floating Header */}
      <header className="border-b border-slate-800/70 bg-slate-950/75 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center font-serif font-black text-slate-950 shadow-lg shadow-amber-500/20 text-lg">
              VJ
            </div>
            <div>
              <span className="font-extrabold text-base tracking-tight text-white block">
                VALENZUELA & ASOCIADOS
              </span>
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block font-semibold">
                Firma Legal & Consultoría Corporativa
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <a href="#especialidades" className="hover:text-amber-400 transition">Especialidades</a>
            <a href="#resultados" className="hover:text-amber-400 transition">Casos de Éxito</a>
            <a href="#equipo" className="hover:text-amber-400 transition">Socios Principales</a>
            <a href="#cotizador" className="hover:text-amber-400 transition">Evaluación</a>
          </nav>

          <a
            href={dynamicWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 transition-all transform hover:scale-105"
          >
            Consulta Urgente
          </a>
        </div>
      </header>

      {/* Hero Section (Dribbble Split 60/40 Layout) */}
      <section className="pt-12 sm:pt-20 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Hero Column (Text + Value Prop) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-300 text-xs font-medium shadow-xl">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Protección y Blindaje Legal para más de 650 Empresas</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Defensa Legal y Tributaria de Alto Nivel para{" "}
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                Proteger tu Negocio.
              </span>
            </h1>

            <p className="text-sm sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Estrategias deterministas ante SUNAT, estructuración societaria sólida y resolución de controversias comerciales complejas. Respuestas en menos de 24 horas.
            </p>

            {/* CTAs & Social Proof */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href={dynamicWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl font-bold text-sm sm:text-base bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-xl shadow-emerald-500/25 transition-all transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950" />
                <span>Agendar Consulta por WhatsApp</span>
              </a>

              <a
                href="#especialidades"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-semibold text-xs sm:text-sm text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 transition"
              >
                <span>Ver Áreas de Práctica</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Ratings & Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400 border-t border-slate-850">
              <div className="flex items-center gap-1.5 text-amber-400">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-white ml-1">4.9 / 5.0</span>
              </div>
              <span>•</span>
              <span>Colegio de Abogados de Lima (CAL)</span>
              <span>•</span>
              <span className="text-emerald-400 font-semibold">✓ Confidencialidad 100% Garantizada</span>
            </div>
          </div>

          {/* Right Hero Column: Interactive Case Evaluation Card (Dribbble Signature) */}
          <div className="lg:col-span-5" id="cotizador">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900/95 to-slate-950 border border-slate-800/90 shadow-2xl space-y-5 relative overflow-hidden backdrop-blur-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                    CONSULTA EXPRESS
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Evaluación de Caso en 60 Segundos
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Scale className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-semibold text-slate-300 block">
                  1. Selecciona el área que requiere atención:
                </label>
                
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: "tributario", label: "Fiscal / SUNAT", icon: "📊" },
                    { id: "corporativo", label: "Contratos & Corp", icon: "🏢" },
                    { id: "laboral", label: "Laboral / SUNAFIL", icon: "👥" },
                    { id: "marcas", label: "Marcas INDECOPI", icon: "🛡️" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setSelectedCaseType(tab.id)}
                      className={`p-3 rounded-xl text-left text-xs font-medium transition-all flex items-center gap-2 border ${
                        selectedCaseType === tab.id
                          ? "bg-amber-400 text-slate-950 font-bold border-amber-400 shadow-md shadow-amber-400/20"
                          : "bg-slate-950/60 text-slate-300 border-slate-800 hover:border-slate-700"
                      }`}
                    >
                      <span>{tab.icon}</span>
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Tiempo de asignación de abogado:</span>
                  <span className="font-bold text-emerald-400">Inmediato</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Modalidad de atención:</span>
                  <span className="font-bold text-white">Presencial / Videollamada</span>
                </div>
              </div>

              <a
                href={dynamicWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 transition-all text-center"
              >
                <span>Solicitar Asesoría por WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="text-[10px] text-center text-slate-400 flex items-center justify-center gap-1">
                <Lock className="w-3 h-3 text-emerald-400" />
                <span>Tus datos están protegidos bajo secreto profesional.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid: Practice Areas (Dribbble Signature Bento Box) */}
      <section id="especialidades" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
            COBERTURA JURÍDICA INTEGRAL
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Áreas de Especialización Corporativa
          </h2>
          <p className="text-xs sm:text-base text-slate-400">
            Enfoque estratégico para mitigar riesgos legales y maximizar la rentabilidad de tu empresa.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 (Featured - Large) */}
          <div className="md:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3.5 rounded-2xl bg-amber-400/10 border border-amber-400/20 text-amber-400">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  Mayor Demanda
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition">
                Defensa Tributaria, Fiscalizaciones & Litigios SUNAT
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                Impugnación de resoluciones de determinación, defensa ante el Tribunal Fiscal y diseño de planeamiento tributario preventivo con estricto apego a la ley.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-6 text-xs text-slate-400">
                <span>✓ Reclamos y Apelaciones</span>
                <span>✓ Auditorías Preventivas</span>
                <span>✓ Fraccionamientos</span>
              </div>
              <a
                href={dynamicWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
              >
                Consultar Caso →
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 w-fit">
                <Building2 className="w-6 h-6" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition">
                Derecho Corporativo & Fusiones
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Elaboración y blindaje de contratos comerciales, acuerdos de socios y reorganizaciones societarias.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <span className="text-xs font-bold text-slate-400">Soporte continuo para directorios</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 w-fit">
                <Briefcase className="w-6 h-6" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition">
                Laboral Empresarial & SUNAFIL
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Prevención de contingencias, desvinculaciones seguras y cumplimiento estricto del régimen laboral.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <span className="text-xs font-bold text-slate-400">Auditoría preventiva incluida</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 w-fit">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition">
                Marcas & Patentes INDECOPI
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Registro de marcas, patentes de invención y defensa legal contra plagios o competencia desleal.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <span className="text-xs font-bold text-slate-400">Vigilancia de marca 24/7</span>
            </div>
          </div>

          {/* Card 5 */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 w-fit">
                <FileCheck2 className="w-6 h-6" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-rose-300 transition">
                Blindaje Patrimonial Sucesorio
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Vehículos fiduciarios y protocolos familiares para salvaguardar el patrimonio ante terceros.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <span className="text-xs font-bold text-slate-400">Estructuración a medida</span>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies & Metrics (Dribbble Social Proof Section) */}
      <section id="resultados" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-950 border border-slate-800 shadow-2xl space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
                CASOS REALES
              </span>
              <h3 className="text-xl sm:text-3xl font-extrabold text-white">
                Resultados Financieros & Jurídicos Recientes
              </h3>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/15 text-emerald-300 text-xs font-bold border border-emerald-500/30">
              <span>✓ Auditorías Verificadas</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-850 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Sector Industrial</span>
                <span className="text-xs font-bold text-emerald-400">Anulación Total</span>
              </div>
              <p className="text-2xl font-extrabold text-white">S/ 2,400,000</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Reparo tributario indebido de SUNAT por gastos no deducibles revocado ante el Tribunal Fiscal.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-850 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Sector Retail / B2B</span>
                <span className="text-xs font-bold text-emerald-400">Acuerdo Favorable</span>
              </div>
              <p className="text-2xl font-extrabold text-white">S/ 1,150,000</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Cobranza coactiva paralizada y reestructuración contractual con proveedores estratégicos.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-850 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Grupo Inmobiliario</span>
                <span className="text-xs font-bold text-amber-400">Protección Total</span>
              </div>
              <p className="text-2xl font-extrabold text-white">100% Blindado</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Constitución de fideicomiso inmobiliario para 3 proyectos de preventa sin riesgos societarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Widget */}
      <DemoFloatingWhatsApp
        businessName="Valenzuela & Asociados"
        badgeText="¿Deseas una consulta confidencial?"
        defaultMessage="Hola, estuve viendo su landing page y deseo agendar una consulta con un abogado especialista."
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
