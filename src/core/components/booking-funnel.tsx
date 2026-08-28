"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ProjectConfig } from "@/core/types/project";
import { 
  MessageCircle, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  Layers, 
  Sparkles,
  Eye
} from "lucide-react";
import { getWhatsAppLink, PROMO_PRICE, REGULAR_PRICE } from "@/core/data/portfolio-demos";

interface BookingFunnelProps {
  config: ProjectConfig;
}

export const BookingFunnel: React.FC<BookingFunnelProps> = ({ config }) => {
  const [selectedNiche, setSelectedNiche] = useState("servicios");

  const nicheOptions = [
    { id: "servicios", label: "Legal / Consultoría / B2B", icon: "⚖️", msg: "Hola, quiero solicitar mi página web para mi estudio/consultora por S/ 700." },
    { id: "salud", label: "Salud / Dental / Estética", icon: "🩺", msg: "Hola, quiero solicitar mi página web para mi clínica/centro médico por S/ 700." },
    { id: "tecnico", label: "Servicios Técnicos / Clima", icon: "🛠️", msg: "Hola, quiero solicitar mi página web para servicios técnicos/climatización por S/ 700." },
    { id: "educacion", label: "Academias / Cursos / Local", icon: "🎓", msg: "Hola, quiero solicitar mi página web para mi academia/negocio local por S/ 700." },
  ];

  const currentOption = nicheOptions.find(o => o.id === selectedNiche) || nicheOptions[0];
  const dynamicWaLink = getWhatsAppLink(currentOption.msg);

  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500/10 blur-[180px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        
        <div className="rounded-[3rem] bg-gradient-to-b from-white/[0.06] to-white/[0.01] border border-white/[0.1] p-8 sm:p-14 backdrop-blur-2xl shadow-[0_30px_100px_rgba(0,0,0,0.6)] space-y-10 relative overflow-hidden">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-300">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>{config.qualification.entryNumber}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {config.qualification.title}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              {config.qualification.subtitle}
            </p>
          </div>

          {/* Quick 1-Tap Category Selector */}
          <div className="space-y-4 max-w-2xl mx-auto">
            <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block text-center">
              1. Selecciona tu rubro para coordinar por WhatsApp:
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {nicheOptions.map((niche) => (
                <button
                  key={niche.id}
                  type="button"
                  onClick={() => setSelectedNiche(niche.id)}
                  className={`p-4 rounded-2xl text-left text-xs sm:text-sm font-medium transition-all flex items-center gap-3 border ${
                    selectedNiche === niche.id
                      ? "bg-emerald-400 text-slate-950 font-bold border-emerald-300 shadow-[0_0_25px_rgba(16,185,129,0.35)] scale-102"
                      : "bg-white/[0.02] text-slate-300 border-white/[0.06] hover:bg-white/[0.05]"
                  }`}
                >
                  <span className="text-xl">{niche.icon}</span>
                  <span>{niche.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Value Highlights Pill Stack */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-xs text-slate-300">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center space-y-1">
              <span className="text-slate-400 block">Tarifa Promocional</span>
              <span className="text-base font-black text-white">{PROMO_PRICE}</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center space-y-1">
              <span className="text-slate-400 block">Tiempo de Entrega</span>
              <span className="text-base font-black text-emerald-400">5 Días Hábiles</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center space-y-1">
              <span className="text-slate-400 block">Forma de Pago</span>
              <span className="text-base font-black text-white">50% / 50%</span>
            </div>
          </div>

          {/* Action Button Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href={dynamicWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-extrabold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:from-emerald-300 hover:to-teal-200 shadow-[0_0_35px_rgba(16,185,129,0.4)] transition-all transform hover:scale-105 active:scale-95 text-center"
            >
              <MessageCircle className="w-5 h-5 fill-slate-950" />
              <span>Chatear por WhatsApp (+51 924 464 410)</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="text-center pt-2">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-emerald-300 transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>¿Prefieres ver ejemplos antes? Ver todas las Demos en Vivo →</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};
