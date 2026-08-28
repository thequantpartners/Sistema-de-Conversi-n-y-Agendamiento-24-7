"use client";

import React from "react";
import Link from "next/link";
import { ProjectConfig } from "@/core/types/project";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Sparkles, MessageCircle, Star } from "lucide-react";
import { getWhatsAppLink, PROMO_PRICE, REGULAR_PRICE } from "@/core/data/portfolio-demos";

interface HeroSectionProps {
  config: ProjectConfig;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ config }) => {
  const waLink = getWhatsAppLink("Hola, deseo solicitar mi página web profesional por S/ 700.");

  return (
    <section className="relative overflow-hidden pt-16 sm:pt-24 pb-20 md:pb-28">
      {/* 🔮 Multi-layered Atmospheric Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/20 via-teal-600/10 to-transparent blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-[50%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/10 blur-[180px] pointer-events-none -z-10" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center space-y-8">
        
        {/* Top Badge Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-4 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur-xl shadow-[0_0_25px_rgba(16,185,129,0.15)]">
          <Sparkles className="h-3.5 w-3.5 text-emerald-400 animate-pulse" />
          <span>{config.hero.badge}</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
          Tu Página Web Profesional Lista en{" "}
          <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(16,185,129,0.25)]">
            5 Días para Atraer Clientes Reales.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto max-w-2xl text-base sm:text-xl text-slate-300 leading-relaxed font-normal">
          {config.hero.subtitle}
        </p>

        {/* Floating Pricing Capsule */}
        <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-6 py-3 rounded-full bg-white/[0.02] border border-white/[0.08] backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <span className="text-xs text-slate-500 line-through">Precio Regular {REGULAR_PRICE}</span>
          <div className="flex items-center gap-1.5">
            <span className="text-2xl font-black text-white">{PROMO_PRICE}</span>
            <span className="text-xs font-bold text-emerald-400 px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20">
              PAGO ÚNICO
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-300 pl-4 border-l border-white/10">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Entrega en 5 Días • 100% de tu Propiedad</span>
          </div>
        </div>

        {/* Honest Confession / Lede (Glassmorphic Pod) */}
        <div className="mx-auto max-w-2xl rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-7 text-left text-sm sm:text-base text-slate-300 leading-relaxed backdrop-blur-xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-emerald-400 to-teal-400" />
          <p className="italic text-slate-200">
            &ldquo;{config.hero.honestLede}&rdquo;
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:from-emerald-300 hover:to-teal-200 px-8 py-4 text-sm sm:text-base font-extrabold text-slate-950 shadow-[0_0_35px_rgba(16,185,129,0.35)] transition-all transform hover:scale-105 active:scale-95"
          >
            <MessageCircle className="h-5 w-5 fill-slate-950" />
            <span>{config.hero.ctaPrimary}</span>
            <ArrowRight className="h-4 w-4" />
          </a>

          <Link
            href={config.hero.ctaSecondaryLink}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] px-6 py-4 text-sm font-semibold text-slate-200 hover:text-white backdrop-blur-xl transition"
          >
            <span>{config.hero.ctaSecondaryText}</span>
          </Link>
        </div>

        {/* Social Proof Badges */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-400 pt-4 border-t border-white/[0.06]">
          <div className="flex items-center gap-1.5 text-slate-300">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <span>{config.socialProof.verifiedMetric} {config.socialProof.verifiedLabel}</span>
          </div>
          <span className="text-slate-600 hidden sm:inline">·</span>
          <div className="flex items-center gap-1.5 text-amber-300">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              ))}
            </div>
            <span className="font-bold text-white ml-1">{config.socialProof.rating}</span>
          </div>
          <span className="text-slate-600 hidden sm:inline">·</span>
          <div className="flex items-center gap-1.5 text-slate-300">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>Garantía de Satisfacción Total</span>
          </div>
        </div>

      </div>
    </section>
  );
};
