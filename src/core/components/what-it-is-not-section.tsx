"use client";

import React from "react";
import { ProjectConfig } from "@/core/types/project";
import { X, Check, ArrowRight, ShieldCheck } from "lucide-react";

interface WhatItIsNotSectionProps {
  config: ProjectConfig;
}

export const WhatItIsNotSection: React.FC<WhatItIsNotSectionProps> = ({ config }) => {
  return (
    <section id="transparencia" className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-300 tracking-wider uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            <span>{config.whatItIs.entryNumber}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {config.whatItIs.title}
          </h2>
        </div>

        {/* List of items (Glassmorphic Comparison Pods) */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {config.whatItIs.items.map((item, idx) => (
            <div
              key={idx}
              className="rounded-[2rem] bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-emerald-500/30 p-6 sm:p-7 backdrop-blur-2xl transition-all duration-300 space-y-4 shadow-lg"
            >
              {/* What it is NOT */}
              <div className="flex items-start gap-3.5 text-rose-400/90">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-500/15 border border-rose-500/30 mt-0.5">
                  <X className="h-3.5 w-3.5 text-rose-400 stroke-[3]" />
                </div>
                <p className="text-xs sm:text-sm font-light text-slate-400 line-through decoration-rose-500/50">
                  {item.isNot}
                </p>
              </div>

              {/* What it IS */}
              <div className="flex items-start gap-3.5 text-emerald-400 pl-4 sm:pl-9 border-l-2 border-emerald-500/30 sm:border-l-0">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-500/30 mt-0.5">
                  <Check className="h-3.5 w-3.5 text-emerald-400 stroke-[3]" />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-white leading-relaxed">
                  {item.is}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bridge Link */}
        <div className="text-center pt-4">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-emerald-300 transition-colors"
          >
            <span>{config.whatItIs.bridgeText}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
