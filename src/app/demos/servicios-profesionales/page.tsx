"use client";

import React, { useState } from "react";
import Image from "next/image";
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
    tributario: "Hola Brian, vi su página y requiero asesoría estratégica en Defensa Tributaria y fiscalizaciones ante SUNAT.",
    corporativo: "Hola Brian, vi su página y requiero asesoría en Contratos y Derecho Corporativo para mi empresa.",
    laboral: "Hola Brian, vi su página y requiero blindaje laboral preventivo y resolución de contingencias.",
    marcas: "Hola Brian, vi su página y deseo registrar y proteger mi marca y patentes en INDECOPI.",
  };

  const dynamicWaLink = getWhatsAppLink(caseMessages[selectedCaseType] || demoData.whatsAppMessage);

  return (
    <div className="min-h-screen bg-[#070605] text-slate-100 font-sans pb-36 relative selection:bg-[#C5A880] selection:text-slate-950">
      
      {/* Top Demo Banner */}
      <div className="py-2 px-4 bg-black/80 border-b border-white/[0.08] backdrop-blur-xl text-center text-xs flex flex-wrap items-center justify-center gap-2 relative z-50">
        <span className="px-2.5 py-0.5 rounded-full bg-[#C5A880]/20 text-[#DFC39C] font-bold border border-[#C5A880]/40 text-[10px] uppercase tracking-wider">
          LANDING PAGE DEMO
        </span>
        <span className="text-slate-300">
          Diseño Editorial & Cinematográfico para <strong>Abogados, Firmas Legales y Consultoras de Prestigio</strong>
        </span>
      </div>

      {/* 🏛️ CINEMATIC HERO SECTION (Replica Exacta del Diseño de Referencia) */}
      <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between overflow-hidden">
        
        {/* Background Image Layer */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/lawyer-hero.png"
            alt="Brian Anderson - Legal Counsel"
            fill
            priority
            className="object-cover object-center sm:object-top brightness-90"
          />
          {/* Subtle Ambient Gradients for Perfect Typographic Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070605] via-black/30 to-black/60 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-black/60 pointer-events-none" />
        </div>

        {/* Minimalist Editorial Navigation */}
        <header className="w-full px-6 sm:px-12 py-6 sm:py-8 flex items-center justify-between relative z-20">
          {/* Brand Name */}
          <div className="flex flex-col">
            <span className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-white leading-none">
              Brian Anderson
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#C5A880] font-sans mt-1">
              Attorney & Legal Counsel
            </span>
          </div>

          {/* Center Nav Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 text-xs sm:text-sm font-light text-slate-300 tracking-wide">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#practice-areas" className="hover:text-white transition-colors">Practice Areas</a>
            <a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          {/* Right Action Button */}
          <a
            href={dynamicWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-sm text-xs sm:text-sm font-light text-slate-100 border border-white/30 hover:border-[#C5A880] hover:text-[#DFC39C] backdrop-blur-sm transition-all duration-300 flex items-center gap-2"
          >
            <span>Request a Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </header>

        {/* Hero Central / Bottom Grid Composition */}
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-8 sm:py-12 flex-1 flex flex-col justify-between relative z-20">
          
          {/* Top-Right Editorial Value Statement */}
          <div className="flex justify-end pt-4 sm:pt-0">
            <p className="max-w-md text-xs sm:text-sm md:text-base font-light text-slate-200 leading-relaxed text-left sm:text-left backdrop-blur-[2px] p-2 sm:p-0">
              Transforming complex legal challenges into clear strategies through experience, deep insight, and an unyielding commitment to achieving meaningful client outcomes.
            </p>
          </div>

          {/* Bottom Row: Massive Headline on Left + Floating Stats & Gold CTA on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end pt-12 sm:pt-20">
            
            {/* Left: Main Editorial Headline */}
            <div className="lg:col-span-7 space-y-4">
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[1.08] drop-shadow-2xl">
                Justice with <br />
                Clarity in a <br />
                Complex World
              </h1>
              
              <p className="text-xs sm:text-sm text-[#C5A880] tracking-widest uppercase font-light pt-2">
                Serving corporate & private clients since 2012
              </p>
            </div>

            {/* Right: Stats and Satin Gold CTA */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start sm:items-end justify-between lg:justify-end gap-6 sm:gap-8">
              
              {/* Stat 1 */}
              <div className="space-y-0.5">
                <span className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight block">
                  96%
                </span>
                <span className="text-xs sm:text-sm text-slate-300 font-light block">
                  Success Rate
                </span>
              </div>

              {/* Stat 2 */}
              <div className="space-y-0.5">
                <span className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight block">
                  150+
                </span>
                <span className="text-xs sm:text-sm text-slate-300 font-light block">
                  Successful Cases
                </span>
              </div>

              {/* Gold Button Accent */}
              <div>
                <a
                  href={dynamicWaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-sm font-medium text-xs sm:text-sm bg-gradient-to-r from-[#C5A880] via-[#DFC39C] to-[#C5A880] hover:from-[#d1b690] hover:to-[#DFC39C] text-slate-950 shadow-[0_10px_30px_rgba(197,168,128,0.3)] transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  <span className="font-semibold">Get Legal Guidance</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* 🏛️ EDITORIAL PRACTICE AREAS (Sin cajas cuadradas, tipografía refinada) */}
      <section id="practice-areas" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-2">
            <span className="text-[11px] font-mono text-[#C5A880] uppercase tracking-[0.2em] block">
              EXPERTISE & JURISDICTION
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight">
              Practice Areas
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-light text-slate-400 max-w-md leading-relaxed">
            Delivering high-stakes legal solutions with precision, strategic rigor, and total discretion for leading companies and high-net-worth individuals.
          </p>
        </div>

        {/* Editorial Practice Rows (Clean Line Separators) */}
        <div className="space-y-0 divide-y divide-white/10">
          {[
            {
              num: "01",
              title: "Corporate & Commercial Law",
              desc: "Mergers & acquisitions, cross-border contract structuring, shareholder agreements, and strategic corporate governance.",
              linkText: "Explore Corporate Practice"
            },
            {
              num: "02",
              title: "Tax Defense & Fiscal Litigation",
              desc: "Defending enterprises against unlawful audit determinations, SUNAT disputes, and designing fully compliant tax optimization strategies.",
              linkText: "Explore Tax Defense"
            },
            {
              num: "03",
              title: "Commercial Arbitration & High-Stakes Litigation",
              desc: "Unwavering advocacy before arbitration tribunals and commercial courts to protect mission-critical business assets.",
              linkText: "Explore Litigation"
            },
            {
              num: "04",
              title: "Intellectual Property & Brand Protection",
              desc: "Comprehensive trademark registration, patent litigation, and trade secret enforcement before INDECOPI and international bodies.",
              linkText: "Explore IP Law"
            },
            {
              num: "05",
              title: "Asset Protection & Fiduciary Trusts",
              desc: "Structuring bespoke private wealth trusts and generational succession frameworks to secure legacy and insulate from third-party liabilities.",
              linkText: "Explore Wealth Structuring"
            }
          ].map((area, idx) => (
            <div
              key={idx}
              className="py-10 sm:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-center group hover:bg-white/[0.01] transition-colors px-2 sm:px-4"
            >
              <div className="md:col-span-1 text-xs font-mono text-[#C5A880]">
                {area.num}
              </div>

              <div className="md:col-span-4">
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white group-hover:text-[#DFC39C] transition-colors">
                  {area.title}
                </h3>
              </div>

              <div className="md:col-span-5">
                <p className="text-xs sm:text-sm font-light text-slate-400 leading-relaxed">
                  {area.desc}
                </p>
              </div>

              <div className="md:col-span-2 flex justify-start md:justify-end">
                <a
                  href={dynamicWaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-light text-[#C5A880] group-hover:text-white transition-colors"
                >
                  <span>Consult</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 🏛️ PROVEN CASE OUTCOMES */}
      <section id="case-studies" className="py-20 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="p-8 sm:p-14 bg-gradient-to-b from-[#14100C] to-[#0A0806] border border-[#C5A880]/20 rounded-none space-y-10 relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="text-[10px] font-mono text-[#C5A880] uppercase tracking-[0.2em] block">
                NOTABLE VERDICTS & RESULTS
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl font-normal text-white">
                Recent Case Outcomes
              </h3>
            </div>
            <span className="text-xs font-light text-slate-400">
              Verified Legal Precedents (2024–2026)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#C5A880] block">Sector: Industrial Manufacturing</span>
              <p className="font-serif text-3xl font-normal text-white">S/ 2,400,000</p>
              <p className="text-xs font-light text-slate-400 leading-relaxed">
                Complete revocation of unlawful tax liabilities and penalties before the Fiscal Tribunal.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono text-[#C5A880] block">Sector: Commercial Real Estate</span>
              <p className="font-serif text-3xl font-normal text-white">S/ 1,850,000</p>
              <p className="text-xs font-light text-slate-400 leading-relaxed">
                Successful settlement and resolution of complex multi-party commercial breach of contract.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono text-[#C5A880] block">Sector: Private Wealth</span>
              <p className="font-serif text-3xl font-normal text-white">100% Insulated</p>
              <p className="text-xs font-light text-slate-400 leading-relaxed">
                Establishment of multi-tier private trust shielding corporate real estate assets.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Floating WhatsApp Widget */}
      <DemoFloatingWhatsApp
        businessName="Brian Anderson Legal"
        badgeText="¿Deseas una consulta legal confidencial?"
        defaultMessage="Hola Brian Anderson, vi su página web y deseo agendar una consulta confidencial."
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
