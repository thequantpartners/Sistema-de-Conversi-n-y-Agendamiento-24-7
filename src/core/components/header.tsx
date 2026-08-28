"use client";

import React from "react";
import Link from "next/link";
import { ProjectConfig } from "@/core/types/project";
import { ArrowRight, Star, Sparkles } from "lucide-react";
import { getWhatsAppLink } from "@/core/data/portfolio-demos";

interface HeaderProps {
  config: ProjectConfig;
}

export const Header: React.FC<HeaderProps> = ({ config }) => {
  const waLink = getWhatsAppLink("Hola, quiero solicitar mi página web profesional por S/ 700.");

  return (
    <header className="sticky top-4 z-50 w-full max-w-5xl mx-auto px-4 sm:px-6">
      <div className="flex items-center justify-between px-5 sm:px-7 py-3.5 rounded-full bg-slate-950/70 border border-white/[0.08] backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-400 flex items-center justify-center font-black text-slate-950 text-xs shadow-[0_0_15px_rgba(16,185,129,0.4)]">
            Q
          </div>
          <div className="flex items-center text-sm font-extrabold tracking-tight text-white">
            <span>{config.branding.logoText.toUpperCase()}</span>
            {config.branding.logoSubtext && (
              <span className="text-emerald-400 font-light ml-1">
                {config.branding.logoSubtext.toUpperCase()}
              </span>
            )}
          </div>
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-slate-300 tracking-wide">
          <a href="#proceso" className="hover:text-emerald-400 transition-colors">Proceso</a>
          <a href="#beneficios" className="hover:text-emerald-400 transition-colors">Beneficios</a>
          <a href="#transparencia" className="hover:text-emerald-400 transition-colors">Garantía</a>
          <Link href="/portfolio" className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 transition-colors">
            <span>✨ Portafolio</span>
          </Link>
          <a href="#faq" className="hover:text-emerald-400 transition-colors">Preguntas</a>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <Link
            href="/portfolio"
            className="md:hidden text-xs font-semibold text-emerald-400 hover:text-emerald-300"
          >
            Demos
          </Link>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all transform hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            <span>Pedir Web (S/ 700)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </header>
  );
};
