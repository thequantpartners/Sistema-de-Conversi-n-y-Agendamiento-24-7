import React from "react";
import { ProjectConfig } from "@/core/types/project";
import { ArrowRight, Star } from "lucide-react";

interface HeaderProps {
  config: ProjectConfig;
}

export const Header: React.FC<HeaderProps> = ({ config }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center text-lg font-bold tracking-tight text-white">
            <span className="text-indigo-400 font-mono tracking-tighter">/</span>
            <span className="text-white ml-1">{config.branding.logoText}</span>
            {config.branding.logoSubtext && (
              <span className="text-zinc-300 ml-1 font-normal">
                {config.branding.logoSubtext}
              </span>
            )}
          </div>
        </div>

        {/* Social Proof Counter */}
        <div className="hidden items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-3.5 py-1 text-xs text-zinc-200 md:flex">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-semibold text-white">
            {config.socialProof.verifiedMetric}
          </span>{" "}
          {config.socialProof.verifiedLabel}
          <span className="text-zinc-500">·</span>
          <div className="flex items-center text-amber-300">
            <Star className="h-3 w-3 fill-amber-300 text-amber-300 mr-0.5" />
            <span className="font-semibold">{config.socialProof.rating}</span>
          </div>
        </div>

        {/* Navigation & Portfolio Link */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="/portfolio"
            className="text-xs sm:text-sm font-semibold text-zinc-300 hover:text-emerald-400 flex items-center gap-1.5 transition-colors"
          >
            <span>👀</span>
            <span>Ver Portafolio</span>
          </a>

          {/* CTA Button */}
          <a
            href="#agenda"
            aria-label="Ir a sección de agendamiento de cita"
            className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 px-3.5 sm:px-4 py-2 text-xs font-bold text-slate-950 shadow-sm transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            <span>Cotizar Web</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
};
