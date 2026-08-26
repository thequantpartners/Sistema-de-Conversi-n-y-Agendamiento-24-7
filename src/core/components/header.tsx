import React from "react";
import { ProjectConfig } from "@/core/types/project";
import { ArrowRight, Star } from "lucide-react";

interface HeaderProps {
  config: ProjectConfig;
}

export const Header: React.FC<HeaderProps> = ({ config }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center text-lg font-bold tracking-tight text-white">
            <span className="text-brand-400 font-mono tracking-tighter">/</span>
            <span className="text-white ml-1">{config.branding.logoText}</span>
            {config.branding.logoSubtext && (
              <span className="text-zinc-400 ml-1 font-normal">
                {config.branding.logoSubtext}
              </span>
            )}
          </div>
        </div>

        {/* Social Proof Counter */}
        <div className="hidden items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-300 md:flex">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-semibold text-white">
            {config.socialProof.verifiedMetric}
          </span>{" "}
          {config.socialProof.verifiedLabel}
          <span className="text-zinc-600">·</span>
          <div className="flex items-center text-amber-400">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400 mr-0.5" />
            <span>{config.socialProof.rating}</span>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="#agenda"
          className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-indigo-500 active:scale-95"
        >
          <span>Agendar Cita</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
};
