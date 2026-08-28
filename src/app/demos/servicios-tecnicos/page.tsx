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
  Flame, 
  Wind, 
  Building, 
  ChevronRight, 
  MessageCircle, 
  ArrowRight, 
  Star 
} from "lucide-react";

export default function DemoServiciosTecnicosPage() {
  const demoData = DEMO_NICHES.find((d) => d.id === "servicios-tecnicos")!;
  const [selectedService, setSelectedService] = useState("mantenimiento");

  const serviceMessages: Record<string, string> = {
    mantenimiento: "Hola Marcus, vi su página y necesito Mantenimiento Preventivo y Limpieza de Aire Acondicionado.",
    instalacion: "Hola Marcus, vi su página y necesito la Instalación certificada de equipos de Climatización.",
    reparacion: "Hola Marcus, vi su página y tengo una Emergencia Técnica / Falla en mi sistema de Aire Acondicionado.",
    b2b: "Hola Marcus, vi su página y deseo cotizar un Contrato de Mantenimiento Corporativo para Empresas.",
  };

  const dynamicWaLink = getWhatsAppLink(serviceMessages[selectedService] || demoData.whatsAppMessage);

  return (
    <div className="min-h-screen bg-[#0A0703] text-slate-100 font-sans pb-36 relative selection:bg-amber-500 selection:text-slate-950">
      
      {/* Top Demo Banner */}
      <div className="py-2 px-4 bg-black/90 border-b border-white/[0.08] backdrop-blur-xl text-center text-xs flex flex-wrap items-center justify-center gap-2 relative z-50">
        <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40 text-[10px] uppercase tracking-wider">
          LANDING PAGE DEMO
        </span>
        <span className="text-slate-300">
          Diseño Editorial & Cinematográfico para <strong>Aire Acondicionado, Electricidad e Ingeniería de Climatización</strong>
        </span>
      </div>

      {/* 🏛️ CINEMATIC ENGINEERING HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-between overflow-hidden bg-[#0A0703]">
        
        {/* Real Photographic Background Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/hvac-hero.png"
            alt="Marcus Vance - HVAC Engineering"
            className="w-full h-full object-cover object-center filter contrast-[1.05]"
          />
          {/* Gentle cinematic vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0703] via-black/30 to-black/60 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-black/60 pointer-events-none" />
        </div>

        {/* Minimalist Editorial Navigation */}
        <header className="w-full px-6 sm:px-12 py-5 sm:py-7 flex items-center justify-between relative z-20">
          <div className="flex flex-col">
            <span className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-white leading-none drop-shadow-md">
              Marcus Vance
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-amber-400 font-sans mt-1 drop-shadow">
              HVAC & Technical Systems Engineering
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs sm:text-sm font-light text-slate-200 tracking-wide drop-shadow">
            <a href="#servicios" className="hover:text-white transition-colors">Services</a>
            <a href="#garantia" className="hover:text-white transition-colors">Warranty</a>
            <a href="#marcas" className="hover:text-white transition-colors">Brands</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <a
            href={dynamicWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-sm text-xs sm:text-sm font-light text-white border border-white/40 hover:border-amber-400 hover:text-amber-300 bg-black/30 backdrop-blur-md transition-all duration-300 flex items-center gap-2 shadow-lg"
          >
            <span>24/7 Rapid Dispatch</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </header>

        {/* Hero Central / Bottom Grid Composition */}
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-6 sm:py-8 flex-1 flex flex-col justify-between relative z-20">
          
          {/* Top-Right Value Statement */}
          <div className="flex justify-end pt-2 sm:pt-0">
            <p className="max-w-md text-xs sm:text-sm md:text-base font-light text-slate-100 leading-relaxed text-right md:text-left drop-shadow-lg bg-black/25 md:bg-transparent p-2 rounded-md backdrop-blur-[2px]">
              Deploying master-certified HVAC technicians with written 12-month warranties, guaranteed upfront quotes, and zero hidden dispatch fees.
            </p>
          </div>

          {/* Bottom Row: Headline on Left + Floating Stats & Amber CTA on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end pt-10 sm:pt-16 pb-4">
            
            {/* Left: Main Headline */}
            <div className="lg:col-span-7 space-y-3">
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.08] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                Precision Climate <br />
                & Technical Solutions <br />
                Under Pressure
              </h1>
              
              <p className="text-xs sm:text-sm text-amber-400 tracking-widest uppercase font-light drop-shadow">
                Residential & Industrial Engineering • Since 2014
              </p>
            </div>

            {/* Right: Stats and Amber CTA */}
            <div className="lg:col-span-5 flex flex-wrap sm:flex-nowrap items-end justify-between lg:justify-end gap-6 sm:gap-8">
              
              {/* Stat 1 */}
              <div className="space-y-0.5">
                <span className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight block drop-shadow-lg">
                  45m
                </span>
                <span className="text-xs sm:text-sm text-slate-200 font-light block drop-shadow">
                  Avg Arrival SLA
                </span>
              </div>

              {/* Stat 2 */}
              <div className="space-y-0.5">
                <span className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight block drop-shadow-lg">
                  4,500+
                </span>
                <span className="text-xs sm:text-sm text-slate-200 font-light block drop-shadow">
                  Units Serviced
                </span>
              </div>

              {/* Satin Amber Button */}
              <div>
                <a
                  href={dynamicWaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-sm font-medium text-xs sm:text-sm bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 hover:from-amber-300 hover:to-orange-300 text-slate-950 shadow-[0_10px_30px_rgba(245,158,11,0.35)] transition-all duration-300 transform hover:scale-105 active:scale-95 whitespace-nowrap"
                >
                  <span className="font-semibold">Request Technician</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* 🏛️ EDITORIAL SERVICES */}
      <section id="servicios" className="py-20 px-6 sm:px-12 max-w-7xl mx-auto space-y-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-2">
            <span className="text-[11px] font-mono text-amber-400 uppercase tracking-[0.2em] block">
              ENGINEERING DISCIPLINES
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight">
              Specialized Services
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-light text-slate-400 max-w-md leading-relaxed">
            Multi-brand certified technicians handling installation, emergency repairs, and B2B corporate maintenance contracts.
          </p>
        </div>

        <div className="space-y-0 divide-y divide-white/10">
          {[
            {
              num: "01",
              title: "Split, Duct & VRF Air Conditioning Installation",
              desc: "Certified installation with electronic vacuum calibration, high-density thermal insulation, and strict energy efficiency tuning.",
            },
            {
              num: "02",
              title: "Chemical Maintenance & Antibacterial Wash",
              desc: "High-pressure steam sterilization, mold eradication, ecological refrigerant recharge, and turbine balancing to reduce power draw by 30%.",
            },
            {
              num: "03",
              title: "24/7 Emergency Compressor & Inverter Board Repair",
              desc: "Rapid diagnostics on printed circuit boards, electronic expansion valves, and leak detection with on-site parts replacement.",
            },
            {
              num: "04",
              title: "B2B Preventive Facility Contracts",
              desc: "Scheduled maintenance programs for corporate offices, restaurant chains, and industrial server rooms with priority SLA response.",
            },
            {
              num: "05",
              title: "Electrical Panels & Grounding Systems",
              desc: "Certified electrical infrastructure balancing, dedicated circuit breakers, and certified ground resistivity testing.",
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-center group hover:bg-white/[0.02] transition-colors px-2 sm:px-4"
            >
              <div className="md:col-span-1 text-xs font-mono text-amber-400">
                {item.num}
              </div>

              <div className="md:col-span-4">
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
              </div>

              <div className="md:col-span-5">
                <p className="text-xs sm:text-sm font-light text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="md:col-span-2 flex justify-start md:justify-end">
                <a
                  href={dynamicWaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-light text-amber-400 group-hover:text-white transition-colors"
                >
                  <span>Dispatch</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Floating WhatsApp Widget */}
      <DemoFloatingWhatsApp
        businessName="Marcus Vance Engineering"
        badgeText="¿Necesitas un técnico en 45 min?"
        defaultMessage="Hola Marcus, vi su página web y requiero asistencia técnica urgente para mi equipo."
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
