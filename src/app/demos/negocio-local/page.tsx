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
    meta_ads: "Hola Julian, vi su página y deseo solicitar el temario y asegurar mi cupo para el Taller de Marketing & Meta Ads Pro.",
    finanzas: "Hola Julian, vi su página y deseo solicitar el temario para el Taller de Gestión Financiera para Pymes.",
    ventas: "Hola Julian, vi su página y deseo inscribirme en el Taller de Ventas Consultivas & Cierre B2B.",
  };

  const dynamicWaLink = getWhatsAppLink(courseMessages[selectedCourse] || demoData.whatsAppMessage);

  return (
    <div className="min-h-screen bg-[#080410] text-slate-100 font-sans pb-36 relative selection:bg-purple-500 selection:text-white">
      
      {/* Top Demo Banner */}
      <div className="py-2 px-4 bg-black/90 border-b border-white/[0.08] backdrop-blur-xl text-center text-xs flex flex-wrap items-center justify-center gap-2 relative z-50">
        <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-bold border border-purple-500/40 text-[10px] uppercase tracking-wider">
          LANDING PAGE DEMO
        </span>
        <span className="text-slate-300">
          Diseño Editorial & Cinematográfico para <strong>Academias, Mentores Ejecutivos y Formación de Alto Nivel</strong>
        </span>
      </div>

      {/* 🏛️ CINEMATIC ACADEMY HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-between overflow-hidden bg-[#080410]">
        
        {/* Real Photographic Background Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/academy-hero.png"
            alt="Julian Cole - Executive Mentorship"
            className="w-full h-full object-cover object-center filter contrast-[1.05]"
          />
          {/* Gentle cinematic vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080410] via-black/30 to-black/60 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-black/60 pointer-events-none" />
        </div>

        {/* Minimalist Editorial Navigation */}
        <header className="w-full px-6 sm:px-12 py-5 sm:py-7 flex items-center justify-between relative z-20">
          <div className="flex flex-col">
            <span className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-white leading-none drop-shadow-md">
              Julian Cole
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-purple-400 font-sans mt-1 drop-shadow">
              Executive Mentorship & Growth Cohorts
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs sm:text-sm font-light text-slate-200 tracking-wide drop-shadow">
            <a href="#talleres" className="hover:text-white transition-colors">Programs</a>
            <a href="#metodologia" className="hover:text-white transition-colors">Methodology</a>
            <a href="#alumni" className="hover:text-white transition-colors">Alumni</a>
            <a href="#comunidad" className="hover:text-white transition-colors">Community</a>
          </nav>

          <a
            href={dynamicWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-sm text-xs sm:text-sm font-light text-white border border-white/40 hover:border-purple-400 hover:text-purple-300 bg-black/30 backdrop-blur-md transition-all duration-300 flex items-center gap-2 shadow-lg"
          >
            <span>Next Cohort Enrollment</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </header>

        {/* Hero Central / Bottom Grid Composition */}
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-6 sm:py-8 flex-1 flex flex-col justify-between relative z-20">
          
          {/* Top-Right Value Statement */}
          <div className="flex justify-end pt-2 sm:pt-0">
            <p className="max-w-md text-xs sm:text-sm md:text-base font-light text-slate-100 leading-relaxed text-right md:text-left drop-shadow-lg bg-black/25 md:bg-transparent p-2 rounded-md backdrop-blur-[2px]">
              Mastering high-leverage business skills through live project cohorts, 1-on-1 feedback reviews, and real market implementation frameworks.
            </p>
          </div>

          {/* Bottom Row: Headline on Left + Floating Stats & Purple CTA on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end pt-10 sm:pt-16 pb-4">
            
            {/* Left: Main Headline */}
            <div className="lg:col-span-7 space-y-3">
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.08] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                Master High-Impact <br />
                Business Skills with <br />
                Relentless Execution
              </h1>
              
              <p className="text-xs sm:text-sm text-purple-400 tracking-widest uppercase font-light drop-shadow">
                Live Cohorts & Executive Training • Since 2018
              </p>
            </div>

            {/* Right: Stats and Purple CTA */}
            <div className="lg:col-span-5 flex flex-wrap sm:flex-nowrap items-end justify-between lg:justify-end gap-6 sm:gap-8">
              
              {/* Stat 1 */}
              <div className="space-y-0.5">
                <span className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight block drop-shadow-lg">
                  94%
                </span>
                <span className="text-xs sm:text-sm text-slate-200 font-light block drop-shadow">
                  Career ROI & Growth
                </span>
              </div>

              {/* Stat 2 */}
              <div className="space-y-0.5">
                <span className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight block drop-shadow-lg">
                  2,100+
                </span>
                <span className="text-xs sm:text-sm text-slate-200 font-light block drop-shadow">
                  Alumni Certified
                </span>
              </div>

              {/* Satin Purple Button */}
              <div>
                <a
                  href={dynamicWaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-sm font-medium text-xs sm:text-sm bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 hover:from-purple-400 hover:to-pink-400 text-white shadow-[0_10px_30px_rgba(168,85,247,0.35)] transition-all duration-300 transform hover:scale-105 active:scale-95 whitespace-nowrap"
                >
                  <span className="font-semibold">Apply for Cohort</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* 🏛️ EDITORIAL PROGRAMS */}
      <section id="talleres" className="py-20 px-6 sm:px-12 max-w-7xl mx-auto space-y-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-2">
            <span className="text-[11px] font-mono text-purple-400 uppercase tracking-[0.2em] block">
              CURRICULUM & COHORTS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight">
              Executive Programs
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-light text-slate-400 max-w-md leading-relaxed">
            Direct feedback, downloadable frameworks, and verifiable certification designed for immediate commercial traction.
          </p>
        </div>

        <div className="space-y-0 divide-y divide-white/10">
          {[
            {
              num: "01",
              title: "Performance Marketing & Meta Ads Pro",
              desc: "Engineering high-converting direct response acquisition funnels on Facebook, Instagram & WhatsApp with scientific ROAS optimization.",
            },
            {
              num: "02",
              title: "SME Financial Architecture & Cashflow Control",
              desc: "Unit economics, operating margins, cash buffer formulas, and automated financial dashboards to scale profitably.",
            },
            {
              num: "03",
              title: "Consultative Selling & High-Ticket B2B Negotiation",
              desc: "Diagnostic sales psychology, objection-neutralizing scripts, and pitching frameworks for closing substantial multi-month retainer contracts.",
            },
            {
              num: "04",
              title: "Verifiable Cryptographic LinkedIn Certification",
              desc: "Digital verifiable credential with anti-tamper validation to substantiate your executive skills before clients and employers.",
            },
            {
              num: "05",
              title: "Private Lifetime Mastermind & Deal Room",
              desc: "Exclusive peer network for co-founder matchmaking, active deal flow, client referrals, and continuous weekly office hours.",
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-center group hover:bg-white/[0.02] transition-colors px-2 sm:px-4"
            >
              <div className="md:col-span-1 text-xs font-mono text-purple-400">
                {item.num}
              </div>

              <div className="md:col-span-4">
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-white group-hover:text-purple-300 transition-colors">
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
                  className="inline-flex items-center gap-2 text-xs font-light text-purple-400 group-hover:text-white transition-colors"
                >
                  <span>Syllabus</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Floating WhatsApp Widget */}
      <DemoFloatingWhatsApp
        businessName="Julian Cole Mentorship"
        badgeText="¿Deseas el temario completo del próximo inicio?"
        defaultMessage="Hola Julian, vi su página web y deseo postular al próximo grupo."
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
