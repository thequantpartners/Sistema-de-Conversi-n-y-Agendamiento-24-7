"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ProjectConfig } from "@/core/types/project";
import { ShieldCheck, MessageCircle, ArrowRight } from "lucide-react";
import { getWhatsAppLink } from "@/core/data/portfolio-demos";

const PrivacyModal = dynamic(
  () => import("./legal/privacy-modal").then((mod) => mod.PrivacyModal),
  { ssr: false }
);

const TermsModal = dynamic(
  () => import("./legal/terms-modal").then((mod) => mod.TermsModal),
  { ssr: false }
);

interface FooterProps {
  config: ProjectConfig;
}

export const Footer: React.FC<FooterProps> = ({ config }) => {
  const year = new Date().getFullYear();
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const waLink = getWhatsAppLink("Hola, deseo solicitar mi página web profesional por S/ 700.");

  return (
    <footer className="border-t border-white/[0.08] bg-[#05070A] text-slate-400 text-xs font-sans pt-14 pb-20 relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 space-y-10">
        
        {/* Top Brand and Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.08]">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-400 flex items-center justify-center font-black text-slate-950 text-[10px]">
              Q
            </div>
            <span className="text-white font-extrabold tracking-tight text-sm">
              {config.branding.name}
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-400 font-mono text-[11px]">
              {config.branding.tagline}
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-4 sm:gap-6 text-xs">
            <Link
              href="/portfolio"
              className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
            >
              Portafolio de Demos
            </Link>
            <span className="text-slate-700">·</span>
            <button
              type="button"
              onClick={() => setIsPrivacyOpen(true)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Privacidad
            </button>
            <span className="text-slate-700">·</span>
            <button
              type="button"
              onClick={() => setIsTermsOpen(true)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Términos
            </button>
          </div>
        </div>

        {/* Disclaimer Legal */}
        <div className="space-y-3 text-[11px] leading-relaxed text-slate-500 border-b border-white/[0.06] pb-8">
          <p>
            <strong className="text-slate-400">Aviso de exención de responsabilidad de Meta Platforms:</strong> Este sitio web no forma parte del sitio web de Facebook ni de Meta Platforms, Inc. Asimismo, este sitio no está respaldado ni certificado por Meta de ninguna manera. FACEBOOK es una marca comercial registrada de META PLATFORMS, INC.
          </p>
          <p>
            <strong className="text-slate-400">Descargo de responsabilidad de resultados:</strong> Los testimonios, métricas y casos de estudio presentados representan experiencias previas. Los resultados de captación de clientes y facturación pueden variar en función de la madurez del negocio, la calidad de la oferta, el tráfico existente y la capacidad de atención comercial de cada empresa.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            <span>© {year} {config.branding.name}. Todos los derechos reservados.</span>
          </div>
          <span className="text-slate-500">Garantía de Satisfacción 100% • SSL 256-bit</span>
        </div>
      </div>

      {/* Modals */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        brandName={config.branding.name}
      />
      <TermsModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
        brandName={config.branding.name}
      />
    </footer>
  );
};
