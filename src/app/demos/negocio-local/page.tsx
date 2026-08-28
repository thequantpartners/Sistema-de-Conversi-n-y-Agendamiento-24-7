"use client";

import React, { useState } from "react";
import { DemoStickyBar } from "@/core/components/demos/demo-sticky-bar";
import { DemoFloatingWhatsApp } from "@/core/components/demos/demo-floating-whatsapp";
import { DEMO_NICHES, getWhatsAppLink } from "@/core/data/portfolio-demos";
import { 
  GraduationCap, 
  Sparkles, 
  Users, 
  Clock, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  Video, 
  Star, 
  ChevronRight, 
  MessageCircle, 
  TrendingUp, 
  ShieldCheck, 
  Flame 
} from "lucide-react";

export default function DemoNegocioLocalPage() {
  const demoData = DEMO_NICHES.find((d) => d.id === "negocio-local")!;
  const [selectedCourse, setSelectedCourse] = useState("meta_ads");

  const courseMessages: Record<string, string> = {
    meta_ads: "Hola, vi su landing page y deseo solicitar el temario y asegurar mi cupo para Marketing Digital & Meta Ads.",
    finanzas: "Hola, vi su landing page y deseo solicitar el temario para el Taller de Gestión Financiera de Pymes.",
    ventas: "Hola, vi su landing page y deseo inscribirme en el Taller de Ventas Consultivas & Cierre B2B.",
  };

  const dynamicWaLink = getWhatsAppLink(courseMessages[selectedCourse] || demoData.whatsAppMessage);

  return (
    <div className="min-h-screen bg-[#080412] text-slate-100 font-sans pb-36 relative overflow-x-hidden selection:bg-purple-500 selection:text-white">
      
      {/* 🔮 Electric Violet Mesh & Neon Auras */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[650px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-600/20 via-pink-600/10 to-transparent blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-pink-600/10 blur-[180px] pointer-events-none -z-10" />

      {/* Demo Pill Bar */}
      <div className="py-2.5 px-4 bg-white/[0.02] border-b border-white/[0.06] backdrop-blur-xl text-center text-xs flex items-center justify-center gap-2">
        <span className="px-2.5 py-0.5 rounded-full bg-purple-400/15 text-purple-300 font-bold border border-purple-400/30 text-[10px]">
          LANDING PAGE DEMO
        </span>
        <span className="text-slate-300">
          Diseño para <strong>Academias, Cursos en Vivo, Talleres y Marcas de Formación</strong>
        </span>
      </div>

      {/* Floating Capsule Header */}
      <header className="sticky top-4 z-40 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between px-6 py-3.5 rounded-full bg-[#100720]/70 border border-white/[0.08] backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-amber-300 flex items-center justify-center font-black text-white text-base shadow-[0_0_20px_rgba(168,85,247,0.3)]">
              🚀
            </div>
            <div>
              <span className="font-extrabold text-sm tracking-tight text-white block">
                ACADEMIA LÍDER DIGITAL
              </span>
              <span className="text-[9px] font-mono text-purple-400 uppercase tracking-widest block font-semibold">
                Formación Ejecutiva & Práctica
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <a href="#cursos" className="hover:text-purple-300 transition-colors">Talleres</a>
            <a href="#inscripcion" className="hover:text-purple-300 transition-colors">Inscripción</a>
            <a href="#comunidad" className="hover:text-purple-300 transition-colors">Comunidad</a>
          </nav>

          <a
            href={dynamicWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all transform hover:scale-105"
          >
            Próximos Inicios
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-12 sm:pt-20 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-purple-500/30 backdrop-blur-xl text-purple-300 text-xs font-medium shadow-xl">
              <Flame className="w-4 h-4 text-pink-400 shrink-0 animate-pulse" />
              <span>Inicios Semanales • Grupos Reducidos de Máximo 15 Personas</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Aprende Habilidades de Alto Impacto con{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(168,85,247,0.25)]">
                Especialistas en Vivo.
              </span>
            </h1>

            <p className="text-sm sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Talleres prácticos aplicados a proyectos reales. Metodologías ágiles, retroalimentación personalizada y certificado oficial con código de validación.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={dynamicWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm sm:text-base bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-[0_0_30px_rgba(16,185,129,0.35)] transition-all transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950" />
                <span>Solicitar Temario por WhatsApp</span>
              </a>

              <a
                href="#cursos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold text-xs sm:text-sm text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 backdrop-blur-xl transition"
              >
                <span>Explorar Talleres</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Trust Seals */}
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
              <span>+2,100 Alumnos Graduados</span>
              <span>•</span>
              <span className="text-emerald-400 font-semibold">✓ Certificado Oficial</span>
            </div>
          </div>

          {/* Right Column: Floating Course Selector Pod */}
          <div className="lg:col-span-5" id="inscripcion">
            <div className="p-7 sm:p-9 rounded-[2.5rem] bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/[0.1] shadow-[0_30px_90px_rgba(0,0,0,0.6)] backdrop-blur-2xl space-y-6 relative overflow-hidden ring-1 ring-white/[0.05]">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div>
                  <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest block">
                    CUPOS LIMITADOS
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    Consulta Disponibilidad de Talleres
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-full bg-purple-400/10 border border-purple-400/30 flex items-center justify-center text-purple-400">
                  <GraduationCap className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-semibold text-slate-300 block">
                  1. Selecciona el taller de tu interés:
                </label>
                
                <div className="space-y-2">
                  {[
                    { id: "meta_ads", label: "Marketing & Meta Ads Pro", badge: "4 Semanas" },
                    { id: "finanzas", label: "Gestión Financiera para Pymes", badge: "3 Semanas" },
                    { id: "ventas", label: "Ventas Consultivas & Cierre B2B", badge: "2 Semanas" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setSelectedCourse(tab.id)}
                      className={`w-full p-3.5 rounded-2xl text-left text-xs font-medium transition-all flex items-center justify-between border ${
                        selectedCourse === tab.id
                          ? "bg-purple-600 text-white font-bold border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.4)] scale-102"
                          : "bg-white/[0.02] text-slate-300 border-white/[0.06] hover:bg-white/[0.05]"
                      }`}
                    >
                      <span>{tab.label}</span>
                      <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-purple-950/80 text-purple-300 border border-purple-500/30">
                        {tab.badge}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Modalidad de clases:</span>
                  <span className="font-bold text-white">En Vivo vía Zoom</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Acceso a grabaciones:</span>
                  <span className="font-bold text-emerald-400">De por vida 24/7</span>
                </div>
              </div>

              <a
                href={dynamicWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-xs sm:text-sm bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all text-center transform hover:scale-102"
              >
                <span>Solicitar Temario Completo por WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="text-[10px] text-center text-slate-400 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3 h-3 text-purple-400" />
                <span>Garantía de satisfacción con devolución en 7 días.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Courses Showcase */}
      <section id="cursos" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">
            METODOLOGÍA 100% PRÁCTICA
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Programas y Talleres
          </h2>
          <p className="text-xs sm:text-base text-slate-400">
            Aprende construyendo soluciones reales para tu carrera o empresa.
          </p>
        </div>

        {/* Dynamic Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "📱",
              title: "Marketing Digital & Meta Ads Pro",
              desc: "Estrategias de anuncios en Facebook, Instagram y WhatsApp para generar prospectos todos los días.",
              badge: "Más Vendido",
              duration: "4 Semanas"
            },
            {
              icon: "📈",
              title: "Gestión Financiera para Pymes",
              desc: "Flujo de caja, cálculo de precios rentables y ordenamiento tributario para evitar pérdidas.",
              badge: "Pymes",
              duration: "3 Semanas"
            },
            {
              icon: "🤝",
              title: "Ventas Consultivas & Cierre B2B",
              desc: "Psicología de ventas para cerrar contratos de alto valor sin regalar descuentos innecesarios.",
              badge: "Cierre Rápido",
              duration: "2 Semanas"
            },
            {
              icon: "🎓",
              title: "Certificado Oficial con QR",
              desc: "Diploma digital verificable para adjuntar a tu perfil de LinkedIn y respaldar tus conocimientos.",
              badge: "Oficial",
              duration: "Incluido"
            },
            {
              icon: "👥",
              title: "Comunidad Privada de Alumnos",
              desc: "Acceso a grupo de networking en WhatsApp para resolver dudas y compartir oportunidades de negocio.",
              badge: "Comunidad",
              duration: "Acceso Vitalicio"
            },
            {
              icon: "🎥",
              title: "Campus Virtual 24/7",
              desc: "Plataforma con todas las grabaciones en HD, plantillas descargables y guías paso a paso.",
              badge: "Recursos",
              duration: "Acceso Total"
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-[2rem] bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-purple-500/40 backdrop-blur-xl transition-all duration-300 group hover:-translate-y-1 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                    {item.icon}
                  </span>
                  <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-white/[0.03] text-purple-300 border border-white/[0.06]">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[11px] text-purple-400/90 font-medium">⏱️ {item.duration}</span>
                <a
                  href={dynamicWaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-white hover:text-purple-300 flex items-center gap-1"
                >
                  Inscribirme →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Floating WhatsApp Widget */}
      <DemoFloatingWhatsApp
        businessName="Academia Líder Digital"
        badgeText="¿Quieres inscribirte o pedir el temario?"
        defaultMessage="Hola, estuve viendo su landing page y deseo solicitar información de inscripción a los cursos."
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
