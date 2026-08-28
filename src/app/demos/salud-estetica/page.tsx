"use client";

import React, { useState } from "react";
import { DemoStickyBar } from "@/core/components/demos/demo-sticky-bar";
import { DemoFloatingWhatsApp } from "@/core/components/demos/demo-floating-whatsapp";
import { DEMO_NICHES, getWhatsAppLink, PROMO_PRICE } from "@/core/data/portfolio-demos";
import { 
  Sparkles, 
  ShieldCheck, 
  MapPin, 
  Clock, 
  Star, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  MessageCircle, 
  Stethoscope,
  Smile,
  Award,
  CalendarCheck,
  PhoneCall,
  Check
} from "lucide-react";

export default function DemoSaludEsteticaPage() {
  const demoData = DEMO_NICHES.find((d) => d.id === "salud-estetica")!;
  const [selectedTreatment, setSelectedTreatment] = useState("ortodoncia");

  const treatmentMessages: Record<string, string> = {
    ortodoncia: "Hola, vi su landing page y deseo consultar sobre Ortodoncia Invisible / Alineadores 3D.",
    implantes: "Hola, vi su landing page y deseo agendar una evaluación para Implantes Dentales.",
    diseno: "Hola, vi su landing page y deseo agendar una cita para Diseño de Sonrisa y Carillas.",
    blanqueamiento: "Hola, vi su landing page y deseo consultar por el Blanqueamiento Dental Láser LED.",
  };

  const dynamicWaLink = getWhatsAppLink(treatmentMessages[selectedTreatment] || demoData.whatsAppMessage);

  return (
    <div className="min-h-screen bg-[#031414] text-slate-100 font-sans pb-36 relative overflow-x-hidden selection:bg-emerald-400 selection:text-slate-950">
      {/* Ambient Radial Mesh Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-teal-500/15 via-emerald-500/10 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-emerald-600/10 blur-[150px] pointer-events-none -z-10" />

      {/* Demo Top Banner */}
      <div className="bg-slate-900/90 text-xs py-2.5 px-4 text-center border-b border-slate-800/80 backdrop-blur-md flex flex-wrap items-center justify-center gap-2">
        <span className="bg-emerald-500/20 text-emerald-300 font-bold px-2.5 py-0.5 rounded-full border border-emerald-400/30">
          LANDING PAGE DEMO
        </span>
        <span className="text-slate-300">
          Estructura de alta conversión para <strong>Clínicas Dentales, Médicos Especialistas y Centros de Estética</strong>
        </span>
      </div>

      {/* Modern Medical Header */}
      <header className="border-b border-teal-950/70 bg-[#051C1C]/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center font-bold text-slate-950 shadow-lg shadow-emerald-500/20 text-xl">
              ✨
            </div>
            <div>
              <span className="font-extrabold text-base tracking-tight text-white block">
                CLÍNICA DENTAL SONRÍE PLUS
              </span>
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block font-semibold">
                Odontología Digital & Estética 3D
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <a href="#tratamientos" className="hover:text-emerald-400 transition">Tratamientos</a>
            <a href="#especialistas" className="hover:text-emerald-400 transition">Especialistas</a>
            <a href="#garantias" className="hover:text-emerald-400 transition">Tecnología 3D</a>
            <a href="#sedes" className="hover:text-emerald-400 transition">Sedes & Horarios</a>
          </nav>

          <a
            href={dynamicWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-lg shadow-emerald-500/20 transition-all transform hover:scale-105"
          >
            Reservar Cita
          </a>
        </div>
      </header>

      {/* Hero Section (Dribbble Split 60/40 Layout) */}
      <section className="pt-12 sm:pt-20 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column (Trust & Value Prop) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-medium shadow-xl">
              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Diagnóstico Digital 3D • Procedimientos 100% Sin Dolor</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Transforma tu Sonrisa con{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                Especialistas Certificados.
              </span>
            </h1>

            <p className="text-sm sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Alineadores invisibles, implantes de carga inmediata y diseño de sonrisa personalizado. Tecnología de vanguardia y financiamiento en cuotas sin intereses.
            </p>

            {/* CTA & Social Proof */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href={dynamicWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl font-bold text-sm sm:text-base bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-xl shadow-emerald-500/25 transition-all transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950" />
                <span>Agendar Evaluación por WhatsApp</span>
              </a>

              <a
                href="#tratamientos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-semibold text-xs sm:text-sm text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 transition"
              >
                <span>Ver Tratamientos</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Verified Patient Trust */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400 border-t border-teal-950">
              <div className="flex items-center gap-1.5 text-amber-400">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-white ml-1">5.0 en Google Reviews</span>
              </div>
              <span>•</span>
              <span>+3,200 Pacientes Satisfechos</span>
              <span>•</span>
              <span className="text-emerald-400 font-semibold">✓ Registro COP Oficial</span>
            </div>
          </div>

          {/* Right Column: Interactive Smile Assessment Card */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#082424] to-[#041616] border border-emerald-500/30 shadow-2xl space-y-5 relative overflow-hidden backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-teal-900/80 pb-4">
                <div>
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
                    COTIZADOR EXPRESS
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Elige tu Tratamiento Deseado
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Smile className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-semibold text-slate-300 block">
                  1. Selecciona la especialidad de tu interés:
                </label>
                
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: "ortodoncia", label: "Alineadores 3D", icon: "✨" },
                    { id: "implantes", label: "Implantes Dentales", icon: "🦷" },
                    { id: "diseno", label: "Diseño de Sonrisa", icon: "💎" },
                    { id: "blanqueamiento", label: "Blanqueamiento", icon: "⚡" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setSelectedTreatment(tab.id)}
                      className={`p-3 rounded-xl text-left text-xs font-medium transition-all flex items-center gap-2 border ${
                        selectedTreatment === tab.id
                          ? "bg-emerald-400 text-slate-950 font-bold border-emerald-400 shadow-md shadow-emerald-400/20"
                          : "bg-slate-950/60 text-slate-300 border-teal-950 hover:border-emerald-500/30"
                      }`}
                    >
                      <span>{tab.icon}</span>
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-teal-950 space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Evaluación clínica inicial:</span>
                  <span className="font-bold text-emerald-400">100% Gratuita</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Disponibilidad de citas:</span>
                  <span className="font-bold text-white">Hoy o Mañana</span>
                </div>
              </div>

              <a
                href={dynamicWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-lg shadow-emerald-500/25 transition-all text-center"
              >
                <span>Consultar Disponibilidad por WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="text-[10px] text-center text-slate-400 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                <span>Atención personalizada por odontólogos especialistas.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid: Clinical Treatments */}
      <section id="tratamientos" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
            TRATAMIENTOS DE VANGUARDIA
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Especialidades Clínicas & Estéticas
          </h2>
          <p className="text-xs sm:text-base text-slate-400">
            Tratamientos indoloros respaldados por escaneo intraoral 3D y tecnología láser.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 (Large - Featured) */}
          <div className="md:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-[#082727] via-[#051A1A] to-[#031414] border border-teal-900/80 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl">✨</span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  Estética Premium
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition">
                Ortodoncia Invisible (Alineadores 3D Removibles)
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                Corrige la posición de tus dientes sin alambres ni brackets molestos. Alineadores transparentes personalizados que puedes quitarte para comer y cepillarte con total comodidad.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-teal-950 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-6 text-xs text-slate-400">
                <span>✓ Duración promedio: 6-9 meses</span>
                <span>✓ 100% Removible</span>
                <span>✓ Control digital</span>
              </div>
              <a
                href={dynamicWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
              >
                Solicitar Diagnóstico →
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#072020] to-[#041616] border border-teal-900/80 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl">🦷</span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300">
                  Carga Inmediata
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition">
                Implantes Dentales en 1 Día
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Recupera tus dientes fijos con titanio biocompatible y corona de circonio de máxima resistencia.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-teal-950">
              <span className="text-xs font-bold text-emerald-400">Garantía clínica de por vida</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#072020] to-[#041616] border border-teal-900/80 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl">💎</span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300">
                  Alta Armonía
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition">
                Diseño de Sonrisa & Carillas
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Carillas de porcelana ultrafinas para perfeccionar color, forma y alineación con aspecto 100% natural.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-teal-950">
              <span className="text-xs font-bold text-slate-400">Prueba digital 3D previa</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#072020] to-[#041616] border border-teal-900/80 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl">⚡</span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300">
                  45 Minutos
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition">
                Blanqueamiento Láser LED
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Aclara hasta 4 tonos en una sola sesión clínica sin dañar el esmalte ni provocar sensibilidad.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-teal-950">
              <span className="text-xs font-bold text-slate-400">Cero sensibilidad post-sesión</span>
            </div>
          </div>

          {/* Card 5 */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#072020] to-[#041616] border border-teal-900/80 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl">🛡️</span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300">
                  Salud Total
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition">
                Profilaxis & Limpieza Profunda
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Eliminación ultrasónica de sarro, pulido de manchas y fluorización preventiva para encías sanas.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-teal-950">
              <span className="text-xs font-bold text-slate-400">Recomendado cada 6 meses</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sedes & Location Banner */}
      <section id="sedes" className="py-10 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#062020] via-[#041818] to-[#062020] border border-teal-900/60 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="space-y-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">SEDES EN LIMA</span>
            <h4 className="text-lg font-bold text-white">San Borja & Miraflores</h4>
            <p className="text-xs text-slate-400">Estacionamiento privado gratuito y fácil acceso.</p>
          </div>

          <div className="space-y-2 border-y md:border-y-0 md:border-x border-teal-950 py-4 md:py-0 md:px-6">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">HORARIO EXTENDIDO</span>
            <h4 className="text-lg font-bold text-white">Lunes a Sábado: 8am - 8pm</h4>
            <p className="text-xs text-slate-400">Atención de emergencias dentales en el día.</p>
          </div>

          <div className="text-center md:text-right">
            <a
              href={dynamicWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-lg shadow-emerald-500/20 transition"
            >
              <span>Ubicación en Google Maps</span>
              <MapPin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Widget */}
      <DemoFloatingWhatsApp
        businessName="Clínica Sonríe Plus"
        badgeText="¿Deseas agendar tu cita dental?"
        defaultMessage="Hola, estuve viendo su landing page y deseo agendar una evaluación clínica."
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
