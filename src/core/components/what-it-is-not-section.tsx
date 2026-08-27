import React from "react";
import { ProjectConfig } from "@/core/types/project";
import { X, Check } from "lucide-react";

interface WhatItIsNotSectionProps {
  config: ProjectConfig;
}

export const WhatItIsNotSection: React.FC<WhatItIsNotSectionProps> = ({
  config,
}) => {
  return (
    <section id="que-no-es" className="py-20 border-b border-zinc-800/60 bg-zinc-950 optimize-render">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Section Tag */}
        <div className="mb-4 inline-flex items-center gap-2 font-mono text-xs text-indigo-400 tracking-wider uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
          <span>{config.whatItIs.entryNumber}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-10">
          {config.whatItIs.title}
        </h2>

        {/* List of items */}
        <div className="space-y-4">
          {config.whatItIs.items.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-zinc-700"
            >
              {/* What it is NOT */}
              <div className="flex items-start gap-3 mb-3 text-red-400">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-950/90 border border-red-700/60 mt-0.5">
                  <X className="h-3 w-3 text-red-300 stroke-[3]" />
                </div>
                <p className="text-xs sm:text-sm font-medium line-through decoration-red-400/80 text-zinc-300">
                  {item.isNot}
                </p>
              </div>

              {/* What it IS */}
              <div className="flex items-start gap-3 text-emerald-400 pl-8">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-950/90 border border-emerald-700/60 mt-0.5">
                  <Check className="h-3 w-3 text-emerald-300 stroke-[3]" />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-white">
                  {item.is}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bridge Link */}
        <div className="mt-14 text-center">
          <a
            href="#agenda"
            className="inline-flex items-center text-xs font-mono text-zinc-300 hover:text-indigo-400 transition-colors underline-offset-4 hover:underline"
          >
            {config.whatItIs.bridgeText}
          </a>
        </div>
      </div>
    </section>
  );
};
