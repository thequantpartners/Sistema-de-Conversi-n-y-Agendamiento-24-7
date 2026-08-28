"use client";

import React from "react";
import { ProjectConfig } from "@/core/types/project";
import { Layers, Palette, Rocket, ArrowRight } from "lucide-react";

interface HowItWorksSectionProps {
  config: ProjectConfig;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ config }) => {
  const stepIcons = [
    <Layers key="1" className="h-6 w-6 text-emerald-400" />,
    <Palette key="2" className="h-6 w-6 text-teal-400" />,
    <Rocket key="3" className="h-6 w-6 text-cyan-400" />,
  ];

  return (
    <section id="proceso" className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-300 tracking-wider uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{config.howItWorks.entryNumber}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {config.howItWorks.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {config.howItWorks.subtitle}
          </p>
        </div>

        {/* 3 Connected Modern Steps */}
        <div className="grid gap-8 md:grid-cols-3 relative">
          {config.howItWorks.steps.map((step, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between rounded-[2.5rem] bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-emerald-500/30 p-8 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 shadow-xl group space-y-6"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {stepIcons[idx]}
                  </div>
                  <span className="font-mono text-3xl font-black text-white/20 group-hover:text-emerald-400/40 transition-colors">
                    0{step.number}
                  </span>
                </div>

                <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-300 group-hover:text-emerald-200 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                <span>Fase 0{step.number}</span>
                <span>•</span>
                <span className="text-emerald-400 font-semibold">100% Coordinado</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bridge Link */}
        <div className="text-center pt-4">
          <a
            href="#beneficios"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-emerald-300 transition-colors"
          >
            <span>{config.howItWorks.bridgeText}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
