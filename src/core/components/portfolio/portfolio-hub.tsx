"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DEMO_NICHES, PROMO_PRICE, REGULAR_PRICE, getWhatsAppLink } from "@/core/data/portfolio-demos";
import { 
  Sparkles, 
  ArrowRight, 
  MessageCircle, 
  CheckCircle2, 
  Eye, 
  ShieldCheck, 
  Zap, 
  Star,
  ExternalLink,
  ChevronRight,
  TrendingUp
} from "lucide-react";

export function PortfolioHub() {
  const [selectedTag, setSelectedTag] = useState<string>("Todos");

  const filterTabs = [
    { label: "Todos los Diseños", key: "Todos" },
    { label: "⚖️ Legal & Consultoría", key: "B2B / Legal" },
    { label: "🩺 Salud & Estética", key: "Salud" },
    { label: "🛠️ Servicios Técnicos", key: "Servicios Técnicos" },
    { label: "🎓 Academias & Negocios", key: "Educación & Locales" },
  ];

  const filteredDemos = selectedTag === "Todos" 
    ? DEMO_NICHES 
    : DEMO_NICHES.filter(demo => {
        if (selectedTag === "B2B / Legal") return demo.id === "servicios-profesionales";
        if (selectedTag === "Salud") return demo.id === "salud-estetica";
        if (selectedTag === "Servicios Técnicos") return demo.id === "servicios-tecnicos";
        if (selectedTag === "Educación & Locales") return demo.id === "negocio-local";
        return true;
      });

  const generalWaLink = getWhatsAppLink(
    `Hola, estuve revisando el portafolio de demos y quiero solicitar mi página web personalizada por ${PROMO_PRICE}.`
  );

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 font-sans selection:bg-emerald-500 selection:text-black pb-28 relative overflow-hidden">
      {/* Dynamic Ambient Mesh Glows (Dribbble Style) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-blue-600/15 via-emerald-500/10 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-emerald-600/10 blur-[130px] pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20">
        {/* Top Floating Badge */}
        <header className="text-center space-y-5 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-2xl">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold tracking-wide text-slate-300 uppercase">
              Showcase Interactivo • Quant Partners
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            Explora Demos Creadas para{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Convertir Visitas en Ventas
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Páginas web profesionales diseñadas a medida, ultra-rápidas y con botón directo a WhatsApp. Elige tu rubro para probar la experiencia en vivo.
          </p>

          {/* Dribbble Style Pricing Pill Card */}
          <div className="pt-2">
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 p-2 sm:p-2.5 sm:pr-6 rounded-3xl bg-slate-900/90 border border-emerald-500/30 backdrop-blur-xl shadow-2xl shadow-emerald-500/10">
              <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold text-xs sm:text-sm">
                <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span>OFERTA DE LANZAMIENTO</span>
              </div>
              
              <div className="flex items-center gap-3 text-center sm:text-left">
                <span className="text-xs sm:text-sm text-slate-500 line-through">
                  Antes {REGULAR_PRICE}
                </span>
                <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  {PROMO_PRICE}{" "}
                  <span className="text-xs font-normal text-emerald-400">/ Pago Único</span>
                </span>
              </div>

              <div className="hidden md:flex items-center gap-2 text-xs text-slate-400 pl-4 border-l border-slate-800">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Entrega en 5 días • Sin mensualidades</span>
              </div>
            </div>
          </div>
        </header>

        {/* Filter Navigation Tabs (Dribbble Glass Pill Style) */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto py-10 no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedTag(tab.key)}
              className={`px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap flex items-center gap-2 ${
                selectedTag === tab.key
                  ? "bg-white text-slate-950 shadow-lg shadow-white/10 scale-105"
                  : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800/90 border border-slate-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Demos Cards Grid - Dribbble High-End UI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredDemos.map((demo) => (
            <div
              key={demo.id}
              className="group relative rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1"
            >
              {/* Card Header & Mockup Preview Frame */}
              <div className="p-6 sm:p-7 space-y-4">
                {/* Browser-like Window Header Mockup */}
                <div className="rounded-2xl bg-slate-950/80 border border-slate-800 p-3.5 space-y-3 shadow-inner group-hover:border-slate-700 transition">
                  <div className="flex items-center justify-between border-b border-slate-850 pb-2.5">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 tracking-wider">
                      demo/{demo.slug}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-emerald-400 border border-slate-700">
                      LIVE
                    </span>
                  </div>

                  {/* Visual Content Teaser */}
                  <div className="py-4 px-3 rounded-xl bg-slate-900/90 border border-slate-800/50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl p-2 rounded-xl bg-slate-800/90 border border-slate-700/60 shadow-sm">
                        {demo.icon}
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block">
                          {demo.niche}
                        </span>
                        <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition line-clamp-1">
                          {demo.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {demo.shortDescription}
                </p>

                {/* Features Checkpoints */}
                <div className="space-y-2 pt-1 border-t border-slate-850">
                  {demo.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {demo.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-medium px-2.5 py-1 rounded-lg bg-slate-800/60 text-slate-300 border border-slate-700/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 sm:p-7 sm:pt-0 mt-auto flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href={`/demos/${demo.slug}`}
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/25 transition-all text-center group-hover:scale-[1.02]"
                >
                  <Eye className="w-4 h-4" />
                  <span>Ver Demo en Vivo</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-auto" />
                </Link>

                <a
                  href={getWhatsAppLink(demo.whatsAppMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl font-semibold text-xs text-emerald-300 hover:text-white bg-emerald-950/50 hover:bg-emerald-900/60 border border-emerald-500/30 transition text-center"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Pedir este ({PROMO_PRICE})</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Global Bottom High-Converting Banner */}
        <section className="mt-16 sm:mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-900 to-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Garantía de Satisfacción & Entrega en 5 Días</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight max-w-xl mx-auto">
            ¿Tu negocio pertenece a otro rubro o requieres funciones especiales?
          </h2>

          <p className="text-xs sm:text-base text-slate-400 max-w-lg mx-auto leading-relaxed">
            Diseñamos cualquier tipo de web para tu modelo de negocio manteniendo la tarifa plana de {PROMO_PRICE} en pago único.
          </p>

          <div className="pt-2">
            <a
              href={generalWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-sm sm:text-base text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-xl shadow-emerald-500/25 transition-all transform hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-slate-950" />
              <span>Chatear con un Especialista por WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
