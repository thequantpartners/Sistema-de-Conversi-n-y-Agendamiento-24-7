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
  ChevronRight,
  Flame,
  Layers,
  ArrowUpRight
} from "lucide-react";

export function PortfolioHub() {
  const [selectedTag, setSelectedTag] = useState<string>("Todos");

  const filterTabs = [
    { label: "Todos los Diseños", key: "Todos", icon: "✨" },
    { label: "Legal & B2B", key: "B2B / Legal", icon: "⚖️" },
    { label: "Salud & Estética", key: "Salud", icon: "🩺" },
    { label: "Servicios Técnicos", key: "Servicios Técnicos", icon: "🛠️" },
    { label: "Academias & Cursos", key: "Educación & Locales", icon: "🎓" },
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
    `Hola, estuve revisando el portafolio de landing pages y quiero solicitar mi diseño personalizado por ${PROMO_PRICE}.`
  );

  return (
    <div className="min-h-screen bg-[#05070B] text-slate-100 font-sans selection:bg-emerald-400 selection:text-slate-950 pb-36 relative overflow-hidden">
      
      {/* 🔮 Atmospheric Multi-Layered Mesh & Conic Glows */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[650px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/20 via-indigo-600/15 to-transparent blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-[35%] -left-40 w-[600px] h-[600px] bg-purple-600/10 blur-[180px] pointer-events-none -z-10" />
      <div className="absolute top-[60%] -right-40 w-[600px] h-[600px] bg-emerald-500/10 blur-[180px] pointer-events-none -z-10" />

      {/* Floating Modern Header Pill */}
      <nav className="sticky top-5 z-40 max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between px-5 py-3 rounded-full bg-slate-950/60 border border-white/[0.08] backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-400 flex items-center justify-center font-black text-slate-950 text-xs shadow-[0_0_15px_rgba(16,185,129,0.4)]">
              Q
            </div>
            <span className="font-extrabold text-sm tracking-tight text-white">
              QUANT<span className="text-emerald-400 font-light ml-1">PARTNERS</span>
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[11px] text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>4 Demos Interactivas en Vivo</span>
          </div>

          <a
            href={generalWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all transform hover:scale-105 active:scale-95"
          >
            <span>Cotizar ({PROMO_PRICE})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 space-y-16">
        
        {/* ✨ Modern Non-Block Hero Section */}
        <section className="text-center space-y-6 max-w-3xl mx-auto relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/10 via-white/[0.04] to-blue-500/10 border border-emerald-500/30 backdrop-blur-xl shadow-2xl">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold text-emerald-300 tracking-wide">
              Landing Pages de Alta Conversión • Sin Plantillas Rellenas
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            Tu Próxima Landing Page Diseñada para{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(16,185,129,0.25)]">
              Vender Todos los Días.
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Eliminamos webs lentas y folletos estáticos. Construimos páginas de aterrizaje con conexión instantánea a WhatsApp, 100% autoadministrables y llave en mano.
          </p>

          {/* Floating Price Capsule (Linear Design Style) */}
          <div className="pt-2">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-6 py-3 rounded-full bg-white/[0.02] border border-white/[0.08] backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-white/[0.05]">
              <span className="text-xs text-slate-500 line-through">Precio Regular {REGULAR_PRICE}</span>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black text-white">{PROMO_PRICE}</span>
                <span className="text-xs font-bold text-emerald-400 px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                  PAGO ÚNICO
                </span>
              </div>
              <div className="hidden md:flex items-center gap-2 text-xs text-slate-400 pl-4 border-l border-white/10">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Lista en 5 Días • Sin mensualidades</span>
              </div>
            </div>
          </div>
        </section>

        {/* 🎛️ Organic Filter Pills */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto py-2 no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedTag(tab.key)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap flex items-center gap-2 border ${
                selectedTag === tab.key
                  ? "bg-white text-slate-950 border-white shadow-[0_0_25px_rgba(255,255,255,0.25)] scale-105"
                  : "bg-white/[0.02] text-slate-400 hover:text-white hover:bg-white/[0.05] border-white/[0.06] backdrop-blur-lg"
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* 🚀 Dynamic Floating Showcase Cards (Zero Boring Blocks) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredDemos.map((demo) => (
            <div
              key={demo.id}
              className="group relative rounded-[2.5rem] bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-emerald-500/40 backdrop-blur-2xl p-7 sm:p-9 transition-all duration-500 flex flex-col justify-between hover:shadow-[0_20px_60px_-15px_rgba(16,185,129,0.15)] hover:-translate-y-1.5 overflow-hidden"
            >
              {/* Inner ambient light orb on card */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/15 transition-all duration-500" />

              <div className="space-y-6 relative z-10">
                
                {/* Floating Capsule Badge Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] shadow-inner">
                      {demo.icon}
                    </span>
                    <div>
                      <span className="text-[10px] font-bold text-emerald-400 tracking-widest uppercase block">
                        {demo.niche}
                      </span>
                      <h2 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                        {demo.title}
                      </h2>
                    </div>
                  </div>

                  <span className="hidden sm:inline-flex text-[10px] font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    {demo.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {demo.shortDescription}
                </p>

                {/* Micro Features Flow (Non-block Pills) */}
                <div className="space-y-2.5 pt-2">
                  {demo.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-slate-400 group-hover:text-slate-200 transition">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/15 flex items-center justify-center shrink-0 border border-emerald-500/30">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Sub-niche Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {demo.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-medium px-3 py-1 rounded-full bg-white/[0.03] text-slate-400 border border-white/[0.05]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-8 mt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center gap-3 relative z-10">
                <Link
                  href={`/demos/${demo.slug}`}
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all group-hover:scale-[1.02] text-center"
                >
                  <Eye className="w-4 h-4" />
                  <span>Probar Landing en Vivo</span>
                  <ArrowUpRight className="w-4 h-4 ml-auto" />
                </Link>

                <a
                  href={getWhatsAppLink(demo.whatsAppMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-semibold text-xs text-emerald-300 hover:text-white bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/30 transition text-center"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Pedir ({PROMO_PRICE})</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 🌟 Atmospheric Footer Conversion Pod */}
        <section className="rounded-[3rem] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/[0.08] p-8 sm:p-14 backdrop-blur-2xl text-center space-y-6 relative overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.6)]">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Garantía de Satisfacción Total • Pago en 2 Partes (50/50)</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-xl mx-auto leading-tight">
            ¿Necesitas una Landing Page para un rubro diferente?
          </h2>

          <p className="text-xs sm:text-base text-slate-400 max-w-lg mx-auto leading-relaxed">
            Personalizamos la estructura, textos y colores de tu negocio para que empieces a captar clientes esta misma semana por solo {PROMO_PRICE}.
          </p>

          <div className="pt-2">
            <a
              href={generalWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-extrabold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 hover:from-emerald-300 hover:to-cyan-200 shadow-[0_0_35px_rgba(16,185,129,0.4)] transition-all transform hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-slate-950" />
              <span>Chatear Directo por WhatsApp con un Especialista</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}
