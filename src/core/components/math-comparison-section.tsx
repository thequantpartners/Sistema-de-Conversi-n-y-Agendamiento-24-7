"use client";

import React from "react";
import { ProjectConfig } from "@/core/types/project";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

interface MathComparisonSectionProps {
  config: ProjectConfig;
}

export const MathComparisonSection: React.FC<MathComparisonSectionProps> = ({ config }) => {
  return (
    <section id="beneficios" className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-300 tracking-wider uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            <span>{config.mathComparison.entryNumber}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {config.mathComparison.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {config.mathComparison.subtitle}
          </p>
        </div>

        {/* Big Numbers Floating Cards */}
        <div className="grid gap-6 sm:grid-cols-3">
          {config.mathComparison.bigNumbers.map((item, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-emerald-500/30 p-8 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 shadow-xl space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight block">
                  {item.value}
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {item.label}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <span className="inline-block rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-[11px] font-semibold text-emerald-300">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Clean Concept Comparison Rows */}
        <div className="rounded-[2.5rem] border border-white/[0.08] bg-white/[0.02] backdrop-blur-2xl overflow-hidden shadow-2xl">
          <div className="border-b border-white/[0.08] px-8 py-5 flex items-center justify-between">
            <span className="text-xs font-mono text-slate-300 uppercase tracking-widest font-semibold">
              Transparencia de Costes y Beneficios Reales
            </span>
            <span className="text-xs font-mono text-emerald-400 font-bold">
              ✓ Cero Sorpresas
            </span>
          </div>

          <div className="divide-y divide-white/[0.06]">
            {config.mathComparison.tableRows.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 sm:grid-cols-12 gap-4 px-8 py-6 items-center hover:bg-white/[0.01] transition-colors"
              >
                <span className="sm:col-span-4 font-bold text-sm text-white">
                  {row.concept}
                </span>
                <span className="sm:col-span-8 text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                  {row.detail}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bridge Link */}
        <div className="text-center pt-4">
          <a
            href="#transparencia"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-emerald-300 transition-colors"
          >
            <span>{config.mathComparison.bridgeText}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
