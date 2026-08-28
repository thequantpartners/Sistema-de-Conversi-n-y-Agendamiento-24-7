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
    <div className="min-h-screen bg-[#0A0516] text-slate-100 font-sans pb-36 relative overflow-x-hidden selection:bg-purple-500 selection:text-white">
      {/* Ambient Mesh Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-purple-600/20 via-pink-600/10 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-pink-600/10 blur-[150px] pointer-events-none -z-10" />

      {/* Top Demo Bar */}
      <div className="bg-slate-900/90 text-xs py-2.5 px-4 text-center border-b border-slate-800/80 backdrop-blur-md flex flex-wrap items-center justify-center gap-2">
        <span className="bg-purple-500/20 text-purple-300 font-bold px-2.5 py-0.5 rounded-full border border-purple-400/30">
          LANDING PAGE DEMO
        </span>
        <span className="text-slate-300">
          Estructura de alta conversión para <strong>Academias, Cursos en Vivo, Talleres y Marcas de Formación</strong>
        </span>
      </div>

      {/* Modern EdTech Header */}
      <header className="border-b border-purple-950/70 bg-[#120824]/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-black text-white shadow-lg shadow-purple-500/30 text-lg">
              🚀
            </div>
            <div>
              <span className="font-extrabold text-base tracking-tight text-white block">
                ACADEMIA LÍDER DIGITAL
              </span>
              <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest block font-semibold">
                Formación Ejecutiva & Práctica
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <a href="#cursos" className="hover:text-purple-400 transition">Talleres</a>
            <a href="#inscripcion" className="hover:text-purple-400 transition">Inscripción</a>
            <a href="#metodologia" className="hover:text-purple-400 transition">Metodología</a>
            <a href="#comunidad" className="hover:text-purple-400 transition">Comunidad</a>
          </nav>

          <a
            href={dynamicWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white shadow-lg shadow-purple-500/20 transition-all transform hover:scale-105"
          >
            Próximos Inicios
          </a>
        </div>
      </header>

      {/* Hero Section (Dribbble Split 60/40 Layout) */}
      <section className="pt-12 sm:pt-20 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-medium shadow-xl">
              <Flame className="w-4 h-4 text-pink-400 shrink-0 animate-pulse" />
              <span>Inicios Todas las Semanas • Grupos Reducidos de Máx. 15 Alumnos</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Aprende Habilidades de Alto Impacto con{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
                Expertos en Vivo.
              </span>
            </h1>

            <p className="text-sm sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Talleres prácticos aplicados a proyectos reales. Metodologías ágiles, retroalimentación personalizada y certificado oficial con código de validación.
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
                <span>Solicitar Temario por WhatsApp</span>
              </a>

              <a
                href="#cursos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-semibold text-xs sm:text-sm text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 transition"
              >
                <span>Explorar Talleres</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400 border-t border-purple-950">
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
              <span className="text-emerald-400 font-semibold">✓ Certificado con Código QR</span>
            </div>
          </div>

          {/* Right Hero Column: Interactive Course Selector Card */}
          <div className="lg:col-span-5" id="inscripcion">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#1C0F32] to-[#120822] border border-purple-500/30 shadow-2xl space-y-5 relative overflow-hidden backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-purple-950 pb-4">
                <div>
                  <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider block">
                    CUPOS LIMITADOS
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Consulta Disponibilidad de Talleres
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
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
                      className={`w-full p-3 rounded-xl text-left text-xs font-medium transition-all flex items-center justify-between border ${
                        selectedCourse === tab.id
                          ? "bg-purple-600 text-white font-bold border-purple-400 shadow-md shadow-purple-500/30"
                          : "bg-slate-950/60 text-slate-300 border-purple-950 hover:border-purple-500/30"
                      }`}
                    >
                      <span>{tab.label}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-purple-950/80 text-purple-300">
                        {tab.badge}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-purple-950 space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Modalidad:</span>
                  <span className="font-bold text-white">Clases en Vivo vía Zoom</span>
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
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white shadow-lg shadow-purple-500/25 transition-all text-center"
              >
                <span>Solicitar Temario Completo por WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="text-[10px] text-center text-slate-400 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3 h-3 text-purple-400" />
                <span>Garantía de satisfacción con devolución en los primeros 7 días.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid: Courses & Perks */}
      <section id="cursos" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">
            METODOLOGÍA PRÁCTICA
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Programas Diseñados para Dar Resultados
          </h2>
          <p className="text-xs sm:text-base text-slate-400">
            Sin teoría de relleno: proyectos aplicados que puedes implementar de inmediato.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 (Large - Featured) */}
          <div className="md:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-[#1E0F36] via-[#150928] to-[#0D051A] border border-purple-950 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl">📱</span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  Más Vendido
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition">
                Marketing Digital & Meta Ads Pro (Facebook, Instagram & WhatsApp)
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                Aprende la configuración profesional de campañas para captar clientes calificados todos los días: segmentación avanzada, copys persuasivos, creativos y optimización de presupuesto.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-purple-950 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-6 text-xs text-slate-400">
                <span>✓ 4 Semanas en vivo</span>
                <span>✓ Plantillas listas</span>
                <span>✓ Asesoría 1 a 1</span>
              </div>
              <a
                href={dynamicWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-purple-400 hover:text-purple-300 flex items-center gap-1"
              >
                Inscribirme Ahora →
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#1A0C30] to-[#100620] border border-purple-950 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl">📈</span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300">
                  Pymes
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition">
                Gestión Financiera para Pymes
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Control de flujo de caja, estructura de costos y cálculo de punto de equilibrio para negocios en crecimiento.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-purple-950">
              <span className="text-xs font-bold text-purple-300">Incluye plantillas Excel automáticas</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#1A0C30] to-[#100620] border border-purple-950 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl">🤝</span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300">
                  Cierre Alto Valor
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition">
                Ventas Consultivas & Cierre B2B
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Técnicas modernas para presentar propuestas y cerrar contratos de alto valor sin regalar descuentos.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-purple-950">
              <span className="text-xs font-bold text-slate-400">Simulaciones de rol en vivo</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#1A0C30] to-[#100620] border border-purple-950 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 w-fit">
                <Award className="w-6 h-6" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition">
                Certificado Oficial Verificable
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Diploma digital con código QR de validación que puedes adjuntar directamente a tu perfil de LinkedIn y CV.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-purple-950">
              <span className="text-xs font-bold text-emerald-400">Reconocido en la industria</span>
            </div>
          </div>

          {/* Card 5 */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#1A0C30] to-[#100620] border border-purple-950 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 w-fit">
                <Users className="w-6 h-6" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition">
                Comunidad Privada de Alumnos
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Acceso a grupo exclusivo de WhatsApp para resolver dudas, hacer networking y compartir oportunidades laborales.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-purple-950">
              <span className="text-xs font-bold text-slate-400">Acceso vitalicio sin pagos extra</span>
            </div>
          </div>
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
