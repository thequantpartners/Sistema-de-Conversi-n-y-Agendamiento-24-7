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
  Building, 
  ChevronRight, 
  MessageCircle, 
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
    <div className="min-h-screen bg-[#0A0703] text-slate-100 font-sans pb-36 relative overflow-x-hidden selection:bg-amber-500 selection:text-slate-950">
      
      {/* 🔥 High-Urgency Ambient Amber/Flame Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[650px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-600/20 via-orange-600/10 to-transparent blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-orange-600/10 blur-[180px] pointer-events-none -z-10" />

      {/* Demo Pill Bar */}
      <div className="py-2.5 px-4 bg-white/[0.02] border-b border-white/[0.06] backdrop-blur-xl text-center text-xs flex items-center justify-center gap-2">
        <span className="px-2.5 py-0.5 rounded-full bg-amber-400/15 text-amber-300 font-bold border border-amber-400/30 text-[10px]">
          LANDING PAGE DEMO
        </span>
        <span className="text-slate-300">
          Diseño para <strong>Aire Acondicionado, Electricidad, Contratistas y Mantenimiento</strong>
        </span>
      </div>

      {/* Floating Capsule Header */}
      <header className="sticky top-4 z-40 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between px-6 py-3.5 rounded-full bg-[#140D04]/70 border border-white/[0.08] backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-400 via-orange-500 to-amber-300 flex items-center justify-center font-black text-slate-950 text-base shadow-[0_0_20px_rgba(245,158,11,0.3)]">
              ⚡
            </div>
            <div>
              <span className="font-extrabold text-sm tracking-tight text-white block">
                CLIMA & SOLUCIONES PRO
              </span>
              <span className="text-[9px] font-mono text-amber-400 uppercase tracking-widest block font-semibold">
                Ingeniería en Climatización & Obras
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <a href="#servicios" className="hover:text-amber-300 transition-colors">Servicios</a>
            <a href="#cotizador" className="hover:text-amber-300 transition-colors">Cotizador Express</a>
            <a href="#garantias" className="hover:text-amber-300 transition-colors">Garantía Escrita</a>
          </nav>

          <a
            href={dynamicWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all transform hover:scale-105 flex items-center gap-1.5"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Emergencias 24h</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-12 sm:pt-20 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-amber-500/30 backdrop-blur-xl text-amber-300 text-xs font-medium shadow-xl">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Unidades Móviles en Lima • Llegada en 45 Minutos</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Instalación y Reparación de Aire Acondicionado con{" "}
              <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(245,158,11,0.25)]">
                Garantía de 12 Meses.
              </span>
            </h1>

            <p className="text-sm sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Técnicos certificados para residencias, oficinas e industrias. Presupuesto transparente sin costos ocultos y visita técnica en el mismo día.
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
                <span>Solicitar Técnico por WhatsApp</span>
              </a>

              <a
                href="#servicios"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold text-xs sm:text-sm text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 backdrop-blur-xl transition"
              >
                <span>Ver Servicios</span>
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
              <span>+4,500 Equipos Atendidos</span>
              <span>•</span>
              <span className="text-emerald-400 font-semibold">✓ Factura Electrónica</span>
            </div>
          </div>

          {/* Right Column: Floating Service Dispatch Pod */}
          <div className="lg:col-span-5" id="cotizador">
            <div className="p-7 sm:p-9 rounded-[2.5rem] bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/[0.1] shadow-[0_30px_90px_rgba(0,0,0,0.6)] backdrop-blur-2xl space-y-6 relative overflow-hidden ring-1 ring-white/[0.05]">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div>
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                    DESPACHO INMEDIATO
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    Cotizador de Asistencia Técnica
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                  <Wrench className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-semibold text-slate-300 block">
                  1. ¿Qué servicio técnico necesitas?
                </label>
                
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { id: "mantenimiento", label: "Mantenimiento", icon: "🧰" },
                    { id: "instalacion", label: "Instalación", icon: "❄️" },
                    { id: "reparacion", label: "Reparación 24h", icon: "⚡" },
                    { id: "b2b", label: "Contrato B2B", icon: "🏢" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setSelectedService(tab.id)}
                      className={`p-3.5 rounded-2xl text-left text-xs font-medium transition-all flex items-center gap-2.5 border ${
                        selectedService === tab.id
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
                  <span>Diagnóstico técnico:</span>
                  <span className="font-bold text-emerald-400">Sin Compromiso</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Tiempo de llegada:</span>
                  <span className="font-bold text-white">45 a 60 min</span>
                </div>
              </div>

              <a
                href={dynamicWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-xs sm:text-sm bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 shadow-[0_0_25px_rgba(245,158,11,0.3)] transition-all text-center transform hover:scale-102"
              >
                <span>Pedir Visita Técnica por WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="text-[10px] text-center text-slate-400 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3 h-3 text-amber-400" />
                <span>Repuestos originales y técnicos calificados.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Technical Services Showcase */}
      <section id="servicios" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
            SOLUCIONES ESPECIALIZADAS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Servicios de Climatización & Obras
          </h2>
          <p className="text-xs sm:text-base text-slate-400">
            Trabajamos con todas las marcas: LG, Daikin, Carrier, York, Samsung, Midea y más.
          </p>
        </div>

        {/* Dynamic Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "❄️",
              title: "Instalación de Aire Acondicionado",
              desc: "Montaje Split, Ducto y VRF con sellado hermético y prueba de vacío computarizada.",
              badge: "Servicio Estrella"
            },
            {
              icon: "🧰",
              title: "Mantenimiento Químico & Limpieza",
              desc: "Lavado con vapor a presión, eliminación de bacterias, recarga de gas ecológico y turbinas.",
              badge: "Ahorra 30% Luz"
            },
            {
              icon: "⚡",
              title: "Reparación de Fugas & Placas",
              desc: "Diagnóstico de errores en tarjetas inverter, cambio de compresores y corrección de goteos.",
              badge: "Urgencias 24h"
            },
            {
              icon: "🏢",
              title: "Planes Mensuales B2B",
              desc: "Contratos de mantenimiento preventivo para oficinas, restaurantes y locales comerciales.",
              badge: "Corporativo"
            },
            {
              icon: "🌪️",
              title: "Ventilación & Extracción de Aire",
              desc: "Inyección de aire limpio y campanas extractoras industriales de acero inoxidable.",
              badge: "Industrial"
            },
            {
              icon: "🔌",
              title: "Tableros Eléctricos & Pozos a Tierra",
              desc: "Instalaciones eléctricas seguras con certificación de pozo a tierra y llaves independientes.",
              badge: "Seguridad"
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-[2rem] bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-amber-500/40 backdrop-blur-xl transition-all duration-300 group hover:-translate-y-1 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                    {item.icon}
                  </span>
                  <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-white/[0.03] text-amber-300 border border-white/[0.06]">
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
                <span className="text-[11px] text-amber-400/90 font-medium">Cotización en el acto</span>
                <a
                  href={dynamicWaLink}
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
