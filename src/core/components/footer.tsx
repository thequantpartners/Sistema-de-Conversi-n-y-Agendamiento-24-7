"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { ProjectConfig } from "@/core/types/project";
import { ShieldCheck } from "lucide-react";

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

  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950 text-zinc-300 text-xs font-sans pt-12 pb-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Top Brand and Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-800/80">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold tracking-tight text-sm">
              {config.branding.name}
            </span>
            <span className="text-zinc-500">·</span>
            <span className="text-zinc-300 font-mono text-xs">
              {config.branding.tagline}
            </span>
          </div>

          {/* Legal Navigation Buttons & Portfolio */}
          <div className="flex items-center gap-4 sm:gap-6 font-mono text-xs">
            <a
              href="/portfolio"
              className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors underline-offset-4 hover:underline"
            >
              Portafolio de Demos
            </a>
            <span className="text-zinc-600">·</span>
            <button
              type="button"
              onClick={() => setIsPrivacyOpen(true)}
              className="text-zinc-300 hover:text-indigo-400 transition-colors underline-offset-4 hover:underline"
            >
              Políticas de Privacidad
            </button>
            <span className="text-zinc-600">·</span>
            <button
              type="button"
              onClick={() => setIsTermsOpen(true)}
              className="text-zinc-300 hover:text-indigo-400 transition-colors underline-offset-4 hover:underline"
            >
              Términos del Servicio
            </button>
          </div>
        </div>

        {/* Meta / Facebook Ads Disclaimer & Earnings Disclaimer */}
        <div className="py-8 space-y-3 text-xs leading-relaxed text-zinc-300 border-b border-zinc-800/80">
          <p>
            <strong className="text-white">Aviso de exención de responsabilidad de Meta Platforms:</strong> Este sitio web no forma parte del sitio web de Facebook ni de Meta Platforms, Inc. Asimismo, este sitio no está respaldado ni certificado por Meta de ninguna manera. FACEBOOK es una marca comercial registrada de META PLATFORMS, INC.
          </p>
          <p>
            <strong className="text-white">Descargo de responsabilidad de resultados:</strong> Los testimonios, métricas y casos de estudio presentados representan experiencias previas. Los resultados de agendamiento y facturación pueden variar en función de la madurez del negocio, la calidad de la oferta, el tráfico existente y la capacidad de cierre comercial de cada empresa. No garantizamos resultados económicos específicos sin la ejecución adecuada del proceso comercial.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-300">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            <span>© {year} {config.branding.name}. Todos los derechos reservados.</span>
          </div>
          <span className="text-zinc-300">Infraestructura Segura SSL 256-bit</span>
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
