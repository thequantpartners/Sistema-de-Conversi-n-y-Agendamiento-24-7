import React from "react";
import { ProjectConfig } from "@/core/types/project";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

interface HeroSectionProps {
  config: ProjectConfig;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ config }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-zinc-800/60 bg-gradient-to-b from-zinc-950 via-zinc-900/40 to-zinc-950">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-950/40 px-3.5 py-1.5 text-xs font-mono text-indigo-300 mb-8 backdrop-blur-sm">
          <Zap className="h-3.5 w-3.5 text-indigo-400" />
          <span>{config.hero.badge}</span>
        </div>

        {/* Main Direct Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
          {config.hero.title.split("\n").map((line, idx) => (
            <span key={idx} className="block">
              {idx === 0 ? (
                line
              ) : (
                <span className="text-zinc-400 font-medium">{line}</span>
              )}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p className="mx-auto max-w-2xl text-base sm:text-lg text-zinc-300 leading-relaxed mb-6 font-normal">
          {config.hero.subtitle}
        </p>

        {/* Chip / Callout */}
        <div className="inline-block rounded-md border border-zinc-800 bg-zinc-900/90 px-3 py-1 text-xs font-mono text-zinc-400 mb-8">
          {config.hero.callout}
        </div>

        {/* Honest Confession / Lede */}
        <div className="mx-auto max-w-2xl rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5 text-left text-sm sm:text-base text-zinc-300 mb-10 leading-relaxed backdrop-blur-sm">
          <p className="italic text-zinc-300">
            &ldquo;{config.hero.honestLede}&rdquo;
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="#agenda"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all hover:bg-indigo-500 hover:shadow-indigo-600/30 active:scale-95"
          >
            <span>{config.hero.ctaPrimary}</span>
            <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href={config.hero.ctaSecondaryLink}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-medium text-zinc-400 hover:text-white transition-colors py-2"
          >
            <span>{config.hero.ctaSecondaryText}</span>
          </a>
        </div>

        {/* Proof Row */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-zinc-400 font-mono">
          <div className="flex items-center gap-1.5 text-zinc-300">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <span>Filtro de 3 preguntas en vivo</span>
          </div>
          <span className="text-zinc-700 hidden sm:inline">·</span>
          <div className="flex items-center gap-1.5 text-zinc-300">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <span>Alertas instantáneas a WhatsApp</span>
          </div>
          <span className="text-zinc-700 hidden sm:inline">·</span>
          <div className="flex items-center gap-1.5 text-zinc-300">
            <ShieldCheck className="h-4 w-4 text-indigo-400" />
            <span>Secuencia anti no-show</span>
          </div>
        </div>
      </div>
    </section>
  );
};
