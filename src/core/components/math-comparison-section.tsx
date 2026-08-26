import React from "react";
import { ProjectConfig } from "@/core/types/project";

interface MathComparisonSectionProps {
  config: ProjectConfig;
}

export const MathComparisonSection: React.FC<MathComparisonSectionProps> = ({
  config,
}) => {
  return (
    <section id="numeros" className="py-20 border-b border-zinc-800/60 bg-zinc-900/30">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Section Tag */}
        <div className="mb-4 inline-flex items-center gap-2 font-mono text-xs text-indigo-400 tracking-wider uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
          <span>{config.mathComparison.entryNumber}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3">
          {config.mathComparison.title}
        </h2>
        <p className="text-zinc-300 text-sm sm:text-base mb-10 max-w-2xl">
          {config.mathComparison.subtitle}
        </p>

        {/* Big Numbers Grid */}
        <div className="grid gap-4 sm:grid-cols-3 mb-10">
          {config.mathComparison.bigNumbers.map((item, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
            >
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                  {item.value}
                </span>
                {item.unit && (
                  <span className="text-xs text-zinc-300 font-mono">
                    {item.unit}
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-zinc-200 mb-4 leading-relaxed">
                {item.label}
              </p>
              <div className="inline-block rounded-full bg-indigo-950/80 border border-indigo-500/40 px-2.5 py-0.5 text-[10px] font-mono text-indigo-200">
                {item.tag}
              </div>
            </div>
          ))}
        </div>

        {/* Breakdown Table */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden">
          <div className="border-b border-zinc-800/80 px-6 py-4 bg-zinc-900/80 flex items-center justify-between">
            <span className="font-mono text-xs text-zinc-200 uppercase tracking-wider font-semibold">
              Transparencia de Costes y Servicio
            </span>
            <span className="text-xs font-mono text-emerald-400">
              ✓ Cero sorpresas
            </span>
          </div>

          <div className="divide-y divide-zinc-800/60 text-sm">
            {config.mathComparison.tableRows.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 sm:grid-cols-3 gap-2 px-6 py-4 items-center"
              >
                <span className="font-mono text-xs font-semibold text-indigo-300">
                  {row.concept}
                </span>
                <span className="sm:col-span-2 text-zinc-200 text-xs sm:text-sm">
                  {row.detail}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bridge Link */}
        <div className="mt-14 text-center">
          <a
            href="#que-no-es"
            className="inline-flex items-center text-xs font-mono text-zinc-300 hover:text-indigo-400 transition-colors underline-offset-4 hover:underline"
          >
            {config.mathComparison.bridgeText}
          </a>
        </div>
      </div>
    </section>
  );
};
