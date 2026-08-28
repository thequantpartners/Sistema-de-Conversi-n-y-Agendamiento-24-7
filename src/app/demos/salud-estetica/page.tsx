"use client";

import React, { useState } from "react";
import { DemoStickyBar } from "@/core/components/demos/demo-sticky-bar";
import { DemoFloatingWhatsApp } from "@/core/components/demos/demo-floating-whatsapp";
import { DEMO_NICHES, getWhatsAppLink } from "@/core/data/portfolio-demos";
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
  Smile,
  CalendarCheck,
  PhoneCall,
  Check,
  Stethoscope,
  HeartHandshake
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
    <div className="min-h-screen bg-[#030E0E] text-slate-100 font-sans pb-36 relative overflow-x-hidden selection:bg-emerald-400 selection:text-slate-950">
      
      {/* 🌿 Serene Medical Mesh Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[650px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-500/20 via-emerald-600/10 to-transparent blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-teal-600/10 blur-[180px] pointer-events-none -z-10" />

      {/* Demo Pill Bar */}
      <div className="py-2.5 px-4 bg-white/[0.02] border-b border-white/[0.06] backdrop-blur-xl text-center text-xs flex items-center justify-center gap-2">
        <span className="px-2.5 py-0.5 rounded-full bg-emerald-400/15 text-emerald-300 font-bold border border-emerald-400/30 text-[10px]">
          LANDING PAGE DEMO
        </span>
        <span className="text-slate-300">
          Diseño para <strong>Dentistas, Clínicas Médicas, Psicólogos y Centros de Estética</strong>
        </span>
      </div>

      {/* Floating Capsule Header */}
      <header className="sticky top-4 z-40 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between px-6 py-3.5 rounded-full bg-[#051818]/70 border border-white/[0.08] backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-500 flex items-center justify-center font-bold text-slate-950 text-base shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              ✨
            </div>
            <div>
              <span className="font-extrabold text-sm tracking-tight text-white block">
                SONRÍE PLUS
              </span>
              <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest block font-semibold">
                Odontología Digital & Estética 3D
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <a href="#tratamientos" className="hover:text-emerald-300 transition-colors">Especialidades</a>
            <a href="#cotizador" className="hover:text-emerald-300 transition-colors">Evaluación 3D</a>
            <a href="#sedes" className="hover:text-emerald-300 transition-colors">Sedes</a>
          </nav>

          <a
            href={dynamicWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all transform hover:scale-105"
          >
            Reservar Cita
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-12 sm:pt-20 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-emerald-500/30 backdrop-blur-xl text-emerald-300 text-xs font-medium shadow-xl">
              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Tecnología Digital 3D • Procedimientos 100% Sin Dolor</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Transforma tu Sonrisa con{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(16,185,129,0.25)]">
                Especialistas Certificados.
              </span>
            </h1>

            <p className="text-sm sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Alineadores invisibles, implantes de carga inmediata y diseño de sonrisa 3D. Diagnóstico digital computarizado y facilidades de pago en cuotas.
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
                <span>Agendar Cita por WhatsApp</span>
              </a>

              <a
                href="#tratamientos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold text-xs sm:text-sm text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 backdrop-blur-xl transition"
              >
                <span>Ver Tratamientos</span>
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
                <span className="font-bold text-white ml-1">5.0 Google Reviews</span>
              </div>
              <span>•</span>
              <span>+3,200 Pacientes Atendidos</span>
              <span>•</span>
              <span className="text-emerald-400 font-semibold">✓ Registro COP Oficial</span>
            </div>
          </div>

          {/* Right Column: Floating Smile Assessment Pod */}
          <div className="lg:col-span-5" id="cotizador">
            <div className="p-7 sm:p-9 rounded-[2.5rem] bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/[0.1] shadow-[0_30px_90px_rgba(0,0,0,0.6)] backdrop-blur-2xl space-y-6 relative overflow-hidden ring-1 ring-white/[0.05]">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div>
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block">
                    CONSULTA RÁPIDA
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    Elige tu Tratamiento Deseado
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
                  <Smile className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-semibold text-slate-300 block">
                  1. Selecciona la especialidad médica:
                </label>
                
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { id: "ortodoncia", label: "Alineadores 3D", icon: "✨" },
                    { id: "implantes", label: "Implantes", icon: "🦷" },
                    { id: "diseno", label: "Diseño Sonrisa", icon: "💎" },
                    { id: "blanqueamiento", label: "Blanqueamiento", icon: "⚡" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setSelectedTreatment(tab.id)}
                      className={`p-3.5 rounded-2xl text-left text-xs font-medium transition-all flex items-center gap-2.5 border ${
                        selectedTreatment === tab.id
                          ? "bg-emerald-400 text-slate-950 font-bold border-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.4)] scale-102"
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
                  <span>Evaluación clínica inicial:</span>
                  <span className="font-bold text-emerald-400">100% Gratuita</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Turnos disponibles:</span>
                  <span className="font-bold text-white">Hoy o Mañana</span>
                </div>
              </div>

              <a
                href={dynamicWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-xs sm:text-sm bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all text-center transform hover:scale-102"
              >
                <span>Consultar Turno por WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="text-[10px] text-center text-slate-400 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                <span>Atención cálida por odontólogos especialistas.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Treatments Grid */}
      <section id="tratamientos" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
            TRATAMIENTOS DE ALTA ESTÉTICA
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Especialidades Clínicas
          </h2>
          <p className="text-xs sm:text-base text-slate-400">
            Escaneo intraoral computarizado en 3D para una experiencia confortable y resultados predecibles.
          </p>
        </div>

        {/* Dynamic Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "✨",
              title: "Ortodoncia Invisible (Alineadores 3D)",
              desc: "Alinea tus dientes con férulas transparentes y removibles. Cero brackets metálicos ni molestias.",
              badge: "Más Solicitado"
            },
            {
              icon: "🦷",
              title: "Implantes Dentales en 1 Día",
              desc: "Recupera piezas perdidas con titanio biocompatible de alta integración y coronas de porcelana.",
              badge: "Carga Inmediata"
            },
            {
              icon: "💎",
              title: "Diseño de Sonrisa & Carillas",
              desc: "Carillas ultra-delgadas que mejoran la simetría y blancura con una armonía 100% natural.",
              badge: "Estética Premium"
            },
            {
              icon: "⚡",
              title: "Blanqueamiento Láser LED",
              desc: "Hasta 4 tonos más blancos en 1 sola sesión de 45 minutos sin generar dolor ni sensibilidad.",
              badge: "1 Sesión"
            },
            {
              icon: "🌿",
              title: "Profilaxis & Limpieza Profunda",
              desc: "Remoción ultrasónica de placa bacteriana, pulido dental y sellado protector de encías.",
              badge: "Preventivo"
            },
            {
              icon: "🛡️",
              title: "Endodoncia & Restauración",
              desc: "Tecnología rotatoria computarizada para salvar piezas dentales con cero molestias.",
              badge: "Sin Dolor"
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-[2rem] bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-emerald-500/40 backdrop-blur-xl transition-all duration-300 group hover:-translate-y-1 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                    {item.icon}
                  </span>
                  <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-white/[0.03] text-emerald-300 border border-white/[0.06]">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[11px] text-emerald-400/90 font-medium">Evaluación sin costo</span>
                <a
                  href={dynamicWaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-white hover:text-emerald-300 flex items-center gap-1"
                >
                  Consultar →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Sedes Pod */}
      <section id="sedes" className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent border border-white/[0.08] backdrop-blur-2xl grid grid-cols-1 md:grid-cols-3 gap-8 items-center shadow-[0_30px_90px_rgba(0,0,0,0.5)]">
          <div className="space-y-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">SEDE PRINCIPAL</span>
            <h4 className="text-xl font-bold text-white">San Borja & Miraflores</h4>
            <p className="text-xs text-slate-400">Av. Javier Prado Este 2340 • Estacionamiento privado.</p>
          </div>

          <div className="space-y-2 border-y md:border-y-0 md:border-x border-white/[0.06] py-4 md:py-0 md:px-6">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">HORARIOS</span>
            <h4 className="text-xl font-bold text-white">Lun a Sáb: 8am - 8pm</h4>
            <p className="text-xs text-slate-400">Citas programadas y urgencias en el mismo día.</p>
          </div>

          <div className="text-center md:text-right">
            <a
              href={dynamicWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition"
            >
              <MapPin className="w-4 h-4" />
              <span>Ver Ubicación en Maps</span>
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
