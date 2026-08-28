"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DEMO_NICHES, PROMO_PRICE, REGULAR_PRICE, getWhatsAppLink } from "@/core/data/portfolio-demos";

export function PortfolioHub() {
  const [selectedTag, setSelectedTag] = useState<string>("Todos");

  const allTags = ["Todos", "B2B / Legal", "Salud", "Servicios Técnicos", "Educación & Locales"];

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
    `Hola, estuve revisando el portafolio de demos y quiero cotizar una página web para mi negocio por ${PROMO_PRICE}.`
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-slate-950 font-sans pb-24">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-blue-600/20 via-emerald-600/10 to-transparent blur-3xl opacity-60 rounded-full" />
      </div>

      <main className="max-w-3xl mx-auto px-4 pt-10 sm:pt-16">
        {/* Profile / Header Section */}
        <header className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold text-slate-300 tracking-wide uppercase">
              Quant Partners • Demos Interactivas
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Explora Nuestras Demos en Vivo
          </h1>

          <p className="text-sm sm:text-base text-slate-400 max-w-lg mx-auto leading-relaxed">
            Elige tu rubro para probar cómo lucirá y funcionará tu próxima página web profesional conectada a WhatsApp.
          </p>

          {/* Promo Offer Card */}
          <div className="inline-block p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-emerald-500/30 shadow-xl shadow-emerald-500/5 my-2">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
              <span className="text-xs sm:text-sm font-medium text-slate-400 line-through">
                Precio regular: {REGULAR_PRICE}
              </span>
              <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                OFERTA ESPECIAL
              </span>
              <span className="text-lg sm:text-xl font-extrabold text-emerald-400">
                {PROMO_PRICE} <span className="text-xs font-normal text-slate-300">(Pago Único)</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1.5">
              ⚡ Entrega rápida en 5 días • Sin mensualidades • 100% de tu propiedad
            </p>
          </div>
        </header>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto py-6 no-scrollbar">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                selectedTag === tag
                  ? "bg-white text-slate-950 shadow-md shadow-white/10 scale-105"
                  : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-850 border border-slate-800"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Demos Cards Grid */}
        <div className="space-y-4 sm:space-y-5">
          {filteredDemos.map((demo) => (
            <div
              key={demo.id}
              className="group relative rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-slate-700 transition-all overflow-hidden p-5 sm:p-6 hover:shadow-2xl hover:shadow-blue-500/5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                {/* Left Info */}
                <div className="space-y-2 max-w-xl">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl p-2 rounded-xl bg-slate-800/80 border border-slate-700/60">
                      {demo.icon}
                    </span>
                    <div>
                      <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
                        {demo.niche}
                      </span>
                      <h2 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition">
                        {demo.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
                    {demo.shortDescription}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {demo.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] sm:text-xs font-medium px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Action */}
                <div className="flex flex-col sm:flex-col items-stretch gap-2.5 sm:min-w-[170px] pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-800/80">
                  <Link
                    href={`/demos/${demo.slug}`}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/20 transition-all text-center"
                  >
                    <span>👀 Ver Demo en Vivo</span>
                  </Link>

                  <a
                    href={getWhatsAppLink(demo.whatsAppMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl font-semibold text-xs text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 hover:bg-emerald-950/70 border border-emerald-500/30 transition text-center"
                  >
                    <span>💬 Pedir este diseño</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* General WhatsApp Banner Footer */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 text-center space-y-3">
          <p className="text-sm font-semibold text-white">
            ¿Tienes otro rubro o necesitas un diseño personalizado?
          </p>
          <p className="text-xs text-slate-400">
            Diseñamos cualquier tipo de web para tu negocio con la tarifa especial de {PROMO_PRICE}.
          </p>
          <a
            href={generalWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-lg shadow-emerald-500/20 transition-all transform hover:scale-105 active:scale-95"
          >
            <span>💬 Chatear con un asesor por WhatsApp</span>
          </a>
        </div>
      </main>
    </div>
  );
}
