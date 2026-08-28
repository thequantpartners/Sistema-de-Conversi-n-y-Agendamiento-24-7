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
  ArrowRight, 
  ChevronRight, 
  MessageCircle, 
  Smile,
  CalendarCheck,
  Stethoscope,
  HeartHandshake
} from "lucide-react";

export default function DemoSaludEsteticaPage() {
  const demoData = DEMO_NICHES.find((d) => d.id === "salud-estetica")!;
  const [selectedTreatment, setSelectedTreatment] = useState("ortodoncia");

  const treatmentMessages: Record<string, string> = {
    ortodoncia: "Hola Dra. Vance, vi su página y deseo consultar sobre Ortodoncia Invisible / Alineadores 3D.",
    implantes: "Hola Dra. Vance, vi su página y deseo agendar una evaluación para Implantes Dentales en 1 Día.",
    diseno: "Hola Dra. Vance, vi su página y deseo agendar una cita para Diseño de Sonrisa y Carillas.",
    blanqueamiento: "Hola Dra. Vance, vi su página y deseo consultar por el Blanqueamiento Dental Láser LED.",
  };

  const dynamicWaLink = getWhatsAppLink(treatmentMessages[selectedTreatment] || demoData.whatsAppMessage);

  return (
    <div className="min-h-screen bg-[#030C0C] text-slate-100 font-sans pb-36 relative selection:bg-emerald-400 selection:text-slate-950">
      
      {/* Top Demo Banner */}
      <div className="py-2 px-4 bg-black/90 border-b border-white/[0.08] backdrop-blur-xl text-center text-xs flex flex-wrap items-center justify-center gap-2 relative z-50">
        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40 text-[10px] uppercase tracking-wider">
          LANDING PAGE DEMO
        </span>
        <span className="text-slate-300">
          Diseño Editorial & Cinematográfico para <strong>Dentistas, Clínicas Médicas y Centros de Estética</strong>
        </span>
      </div>

      {/* 🏛️ CINEMATIC MEDICAL HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-between overflow-hidden bg-[#030C0C]">
        
        {/* Dynamic Architectural Background Lighting & Medical Atmosphere */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-900/30 via-[#031515] to-[#020A0A]" />
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
        </div>

        {/* Minimalist Editorial Navigation */}
        <header className="w-full px-6 sm:px-12 py-5 sm:py-7 flex items-center justify-between relative z-20">
          <div className="flex flex-col">
            <span className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-white leading-none">
              Dra. Elena Vance
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-emerald-400 font-sans mt-1">
              Aesthetic Dentistry & 3D Smile Design
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs sm:text-sm font-light text-slate-200 tracking-wide">
            <a href="#tratamientos" className="hover:text-white transition-colors">Treatments</a>
            <a href="#experiencia" className="hover:text-white transition-colors">Technology</a>
            <a href="#casos" className="hover:text-white transition-colors">Results</a>
            <a href="#sedes" className="hover:text-white transition-colors">Clinic</a>
          </nav>

          <a
            href={dynamicWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-sm text-xs sm:text-sm font-light text-white border border-white/40 hover:border-emerald-400 hover:text-emerald-300 bg-black/30 backdrop-blur-md transition-all duration-300 flex items-center gap-2 shadow-lg"
          >
            <span>Book Appointment</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </header>

        {/* Hero Central / Bottom Grid Composition */}
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-6 sm:py-8 flex-1 flex flex-col justify-between relative z-20">
          
          {/* Top-Right Value Statement */}
          <div className="flex justify-end pt-2 sm:pt-0">
            <p className="max-w-md text-xs sm:text-sm md:text-base font-light text-slate-200 leading-relaxed text-right md:text-left drop-shadow-lg bg-black/25 md:bg-transparent p-2 rounded-md backdrop-blur-[2px]">
              Transforming oral wellness into lasting aesthetic confidence through 3D intraoral diagnostics, painless laser protocols, and bespoke porcelain craftsmanship.
            </p>
          </div>

          {/* Bottom Row: Headline on Left + Floating Stats & Emerald CTA on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end pt-10 sm:pt-16 pb-4">
            
            {/* Left: Main Headline */}
            <div className="lg:col-span-7 space-y-3">
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.08] drop-shadow-2xl">
                Artistic Precision <br />
                for Your Natural, <br />
                Confident Smile
              </h1>
              
              <p className="text-xs sm:text-sm text-emerald-400 tracking-widest uppercase font-light">
                Digital Cosmetic & Implant Clinic • Since 2015
              </p>
            </div>

            {/* Right: Stats and Emerald CTA */}
            <div className="lg:col-span-5 flex flex-wrap sm:flex-nowrap items-end justify-between lg:justify-end gap-6 sm:gap-8">
              
              {/* Stat 1 */}
              <div className="space-y-0.5">
                <span className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight block drop-shadow-lg">
                  99.4%
                </span>
                <span className="text-xs sm:text-sm text-slate-200 font-light block">
                  Satisfaction Rate
                </span>
              </div>

              {/* Stat 2 */}
              <div className="space-y-0.5">
                <span className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight block drop-shadow-lg">
                  3,200+
                </span>
                <span className="text-xs sm:text-sm text-slate-200 font-light block">
                  Smiles Restored
                </span>
              </div>

              {/* Satin Emerald Button */}
              <div>
                <a
                  href={dynamicWaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-sm font-medium text-xs sm:text-sm bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:from-emerald-300 hover:to-teal-200 text-slate-950 shadow-[0_10px_30px_rgba(16,185,129,0.35)] transition-all duration-300 transform hover:scale-105 active:scale-95 whitespace-nowrap"
                >
                  <span className="font-semibold">Book Free Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* 🏛️ EDITORIAL TREATMENTS */}
      <section id="tratamientos" className="py-20 px-6 sm:px-12 max-w-7xl mx-auto space-y-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-2">
            <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-[0.2em] block">
              CLINICAL SPECIALTIES
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight">
              Aesthetic Treatments
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-light text-slate-400 max-w-md leading-relaxed">
            State-of-the-art procedures engineered for complete patient comfort, rapid healing, and impeccable smile aesthetics.
          </p>
        </div>

        <div className="space-y-0 divide-y divide-white/10">
          {[
            {
              num: "01",
              title: "Invisible Orthodontics (3D Aligners)",
              desc: "Clear, removable aligners engineered through 3D intraoral simulation for comfortable teeth alignment without metal brackets.",
            },
            {
              num: "02",
              title: "Same-Day Titanium Implants",
              desc: "Immediate load biocompatible titanium implants restored with high-translucency zirconia crowns in a single clinical phase.",
            },
            {
              num: "03",
              title: "Digital Smile Design & Porcelain Veneers",
              desc: "Ultra-thin custom porcelain laminates restoring harmony, proportion, and natural tooth luster with zero enamel trauma.",
            },
            {
              num: "04",
              title: "Laser LED Teeth Whitening",
              desc: "Gentle 45-minute clinical photo-activation whitening brightening up to 4 shades with zero post-treatment sensitivity.",
            },
            {
              num: "05",
              title: "Comprehensive Prophylaxis & Periodontal Care",
              desc: "Ultrasonic biofilm removal, enamel remineralization, and preventive gum restoration for long-term oral vitality.",
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-center group hover:bg-white/[0.02] transition-colors px-2 sm:px-4"
            >
              <div className="md:col-span-1 text-xs font-mono text-emerald-400">
                {item.num}
              </div>

              <div className="md:col-span-4">
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-white group-hover:text-emerald-300 transition-colors">
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
                  className="inline-flex items-center gap-2 text-xs font-light text-emerald-400 group-hover:text-white transition-colors"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Floating WhatsApp Widget */}
      <DemoFloatingWhatsApp
        businessName="Dra. Elena Vance Dental"
        badgeText="¿Deseas una evaluación dental sin costo?"
        defaultMessage="Hola Dra. Vance, vi su página web y deseo agendar una evaluación clínica."
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
