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
  PhoneCall,
  Award,
  ArrowUpRight
} from "lucide-react";

export default function DemoServiciosProfesionalesPage() {
  const demoData = DEMO_NICHES.find((d) => d.id === "servicios-profesionales")!;
  const [selectedCaseType, setSelectedCaseType] = useState("tributario");

  const caseMessages: Record<string, string> = {
    tributario: "Hola, vi su landing page y necesito asesoría urgente en Defensa Tributaria y fiscalizaciones de SUNAT.",
    corporativo: "Hola, vi su landing page y necesito asesoría en Contratos y Derecho Corporativo para mi empresa.",
    laboral: "Hola, vi su landing page y necesito blindaje laboral y prevención de contingencias con colaboradores.",
    marcas: "Hola, vi su landing page y deseo registrar y proteger mi marca en INDECOPI.",
  };

  const dynamicWaLink = getWhatsAppLink(caseMessages[selectedCaseType] || demoData.whatsAppMessage);

  return (
    <div className="min-h-screen bg-[#06080F] text-slate-100 font-sans pb-36 relative overflow-x-hidden selection:bg-amber-400 selection:text-slate-950">
      
      {/* 🌌 High-End Ambient Mesh & Warm Golden Auras */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[650px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/15 via-blue-900/15 to-transparent blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-amber-600/10 blur-[180px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-indigo-700/10 blur-[180px] pointer-events-none -z-10" />

      {/* Floating Capsule Demo Bar */}
      <div className="py-2.5 px-4 bg-white/[0.02] border-b border-white/[0.06] backdrop-blur-xl text-center text-xs flex items-center justify-center gap-2">
        <span className="px-2.5 py-0.5 rounded-full bg-amber-400/15 text-amber-300 font-bold border border-amber-400/30 text-[10px]">
          LANDING PAGE DEMO
        </span>
        <span className="text-slate-300">
          Diseño Premium para <strong>Abogados, Contadores, Consultores y Agencias B2B</strong>
        </span>
      </div>

      {/* Modern Floating Capsule Header */}
      <header className="sticky top-4 z-40 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between px-6 py-3.5 rounded-full bg-slate-950/70 border border-white/[0.08] backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-400 via-amber-500 to-yellow-300 flex items-center justify-center font-serif font-black text-slate-950 text-base shadow-[0_0_20px_rgba(245,158,11,0.3)]">
              VJ
            </div>
            <div>
              <span className="font-extrabold text-sm tracking-tight text-white block">
                VALENZUELA & ASOCIADOS
              </span>
              <span className="text-[9px] font-mono text-amber-400/90 uppercase tracking-widest block font-semibold">
                Firma Legal & Tributaria Corporativa
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <a href="#especialidades" className="hover:text-amber-300 transition-colors">Especialidades</a>
            <a href="#resultados" className="hover:text-amber-300 transition-colors">Casos de Éxito</a>
            <a href="#evaluacion" className="hover:text-amber-300 transition-colors">Evaluación Express</a>
          </nav>

          <a
            href={dynamicWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all transform hover:scale-105"
          >
            Consulta Confidencial
          </a>
        </div>
      </header>

      {/* Hero Section (Atmospheric Fluid 60/40 Split) */}
      <section className="pt-12 sm:pt-20 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-amber-500/30 backdrop-blur-xl text-amber-300 text-xs font-medium shadow-xl">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Blindaje Legal Corporativo con +15 Años de Trayectoria</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Defensa Legal y Tributaria Estratégica para{" "}
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(245,158,11,0.25)]">
                Blindar tu Empresa.
              </span>
            </h1>

            <p className="text-sm sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Especialistas en fiscalizaciones de SUNAT, reorganización societaria y resolución de litigios comerciales complejos. Tu tranquilidad jurídica garantizada.
            </p>

            {/* CTAs & Social Proof */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={dynamicWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm sm:text-base bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-[0_0_30px_rgba(16,185,129,0.35)] transition-all transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950" />
                <span>Agendar Asesoría por WhatsApp</span>
              </a>

              <a
                href="#especialidades"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold text-xs sm:text-sm text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 backdrop-blur-xl transition"
              >
                <span>Explorar Áreas</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Credibility Seals */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400 border-t border-white/[0.06]">
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
              <span className="text-emerald-400 font-semibold">✓ Secreto Profesional 100%</span>
            </div>
          </div>

          {/* Right Column: Floating Interactive Evaluation Glass Pod */}
          <div className="lg:col-span-5" id="evaluacion">
            <div className="p-7 sm:p-9 rounded-[2.5rem] bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/[0.1] shadow-[0_30px_90px_rgba(0,0,0,0.6)] backdrop-blur-2xl space-y-6 relative overflow-hidden ring-1 ring-white/[0.05]">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div>
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                    ATENCIÓN DIRECTA
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    Evaluación de Caso en 60s
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                  <Scale className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-semibold text-slate-300 block">
                  1. ¿Qué materia legal requiere tu empresa?
                </label>
                
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { id: "tributario", label: "Fiscal SUNAT", icon: "📊" },
                    { id: "corporativo", label: "Contratos Corp", icon: "🏢" },
                    { id: "laboral", label: "Laboral SUNAFIL", icon: "👥" },
                    { id: "marcas", label: "Marcas INDECOPI", icon: "🛡️" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setSelectedCaseType(tab.id)}
                      className={`p-3.5 rounded-2xl text-left text-xs font-medium transition-all flex items-center gap-2.5 border ${
                        selectedCaseType === tab.id
                          ? "bg-amber-400 text-slate-950 font-bold border-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.4)] scale-102"
                          : "bg-white/[0.02] text-slate-300 border-white/[0.06] hover:bg-white/[0.05]"
                      }`}
                    >
                      <span className="text-base">{tab.icon}</span>
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Asignación de socio legal:</span>
                  <span className="font-bold text-emerald-400">Prioridad Inmediata</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Formato de sesión:</span>
                  <span className="font-bold text-white">Presencial o Zoom</span>
                </div>
              </div>

              <a
                href={dynamicWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-xs sm:text-sm bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-[0_0_25px_rgba(245,158,11,0.3)] transition-all text-center transform hover:scale-102"
              >
                <span>Solicitar Asesoría por WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="text-[10px] text-center text-slate-400 flex items-center justify-center gap-1">
                <Lock className="w-3 h-3 text-amber-400" />
                <span>Conversación encriptada bajo estricta confidencialidad.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Floating Practice Areas Showcase */}
      <section id="especialidades" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
            SOLUCIONES JURÍDICAS A MEDIDA
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Especialidades de Práctica Legal
          </h2>
          <p className="text-xs sm:text-base text-slate-400">
            Estructuras sólidas para proteger tus operaciones y maximizar tu rentabilidad tributaria.
          </p>
        </div>

        {/* Dynamic Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <TrendingUp className="w-6 h-6 text-amber-400" />,
              title: "Defensa Tributaria & SUNAT",
              desc: "Impugnación de reparos, auditorías preventivas y planeamiento tributario legal de alta eficiencia.",
              badge: "Mayor Demanda"
            },
            {
              icon: <Building2 className="w-6 h-6 text-blue-400" />,
              title: "Derecho Corporativo & Contratos",
              desc: "Elaboración de acuerdos de accionistas, fusiones, adquisiciones y blindaje contractual mercantil.",
              badge: "Empresarial"
            },
            {
              icon: <Briefcase className="w-6 h-6 text-purple-400" />,
              title: "Laboral Corporativo & SUNAFIL",
              desc: "Prevención de contingencias con colaboradores, despidos justificados y compliance normativo.",
              badge: "Preventivo"
            },
            {
              icon: <Scale className="w-6 h-6 text-emerald-400" />,
              title: "Litigios & Arbitraje Comercial",
              desc: "Representación firme en resolución de disputas ante juzgados comerciales y centros de arbitraje.",
              badge: "Resolución"
            },
            {
              icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
              title: "Marcas & Patentes INDECOPI",
              desc: "Registro, defensa de marca y propiedad intelectual contra imitaciones y competencia desleal.",
              badge: "Propiedad"
            },
            {
              icon: <FileCheck2 className="w-6 h-6 text-rose-400" />,
              title: "Blindaje Patrimonial",
              desc: "Constitución de fideicomisos familiares y empresariales para resguardo seguro de activos.",
              badge: "Patrimonio"
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-[2rem] bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-amber-500/40 backdrop-blur-xl transition-all duration-300 group hover:-translate-y-1 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] shadow-inner">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-white/[0.03] text-slate-300 border border-white/[0.06]">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[11px] text-amber-400/90 font-medium">Asesoría disponible</span>
                <a
                  href={dynamicWaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-white hover:text-amber-300 flex items-center gap-1"
                >
                  Consultar →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Verified Results Pod */}
      <section id="resultados" className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent border border-white/[0.08] backdrop-blur-2xl space-y-8 shadow-[0_30px_90px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/[0.06] pb-6">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
                IMPACTO MEDIBLE
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Casos de Éxito Corporativo
              </h3>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-bold border border-emerald-500/30">
              ✓ Dictámenes Favorables 99.2%
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Sector Industrial</span>
                <span className="text-emerald-400 font-bold">Revocación SUNAT</span>
              </div>
              <p className="text-2xl font-black text-white">S/ 2,400,000</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Reparo tributario indebido revocado con éxito ante el Tribunal Fiscal.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Sector Minería & B2B</span>
                <span className="text-emerald-400 font-bold">Blindaje Total</span>
              </div>
              <p className="text-2xl font-black text-white">S/ 1,850,000</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Estructuración de contratos y mitigación de contingencias laborales.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Grupo Inmobiliario</span>
                <span className="text-amber-400 font-bold">Fideicomiso</span>
              </div>
              <p className="text-2xl font-black text-white">100% Protegido</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Blindaje fiduciario de activos para 3 proyectos residenciales en preventa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Widget */}
      <DemoFloatingWhatsApp
        businessName="Valenzuela & Asociados"
        badgeText="¿Deseas una consulta legal?"
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
