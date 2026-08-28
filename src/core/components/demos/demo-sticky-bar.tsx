"use client";

import React from "react";
import Link from "next/link";
import { getWhatsAppLink, PROMO_PRICE, REGULAR_PRICE } from "@/core/data/portfolio-demos";

interface DemoStickyBarProps {
  demoTitle: string;
  niche: string;
  whatsAppMessage: string;
}

export function DemoStickyBar({ demoTitle, niche, whatsAppMessage }: DemoStickyBarProps) {
  const waLink = getWhatsAppLink(whatsAppMessage);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 bg-slate-950/90 backdrop-blur-md border-t border-slate-800 shadow-2xl transition-all">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Info Left */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
          <Link
            href="/portafolio"
            className="text-xs sm:text-sm text-slate-300 hover:text-white flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 transition"
          >
            <span>←</span>
            <span>Ver más demos</span>
          </Link>
          <div className="text-right sm:text-left">
            <span className="inline-block text-[11px] font-medium text-emerald-400 uppercase tracking-wider">
              Demo: {niche}
            </span>
            <p className="text-xs sm:text-sm font-semibold text-white truncate max-w-[200px] sm:max-w-xs">
              {demoTitle}
            </p>
          </div>
        </div>

        {/* Pricing & CTA Right */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <div className="hidden md:flex flex-col text-right">
            <span className="text-[11px] text-slate-400 line-through">Antes {REGULAR_PRICE}</span>
            <span className="text-sm font-bold text-white">Oferta {PROMO_PRICE}</span>
          </div>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm sm:text-base text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-lg shadow-emerald-500/25 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>💬</span>
            <span>Quiero este diseño ({PROMO_PRICE})</span>
          </a>
        </div>
      </div>
    </div>
  );
}
