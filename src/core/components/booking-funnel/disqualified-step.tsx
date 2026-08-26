"use client";

import React from "react";
import { ProjectConfig } from "@/core/types/project";
import { MessageCircle, ShieldAlert } from "lucide-react";

interface DisqualifiedStepProps {
  config: ProjectConfig;
}

export const DisqualifiedStep: React.FC<DisqualifiedStepProps> = ({
  config,
}) => {
  const { disqualifiedScreen } = config.qualification;
  const rawPhone = config.booking.whatsappNumber.replace(/[^0-9]/g, "");
  const defaultMsg = encodeURIComponent(
    "Hola Quant Partners, completé el formulario de filtro en su web y me gustaría recibir la guía práctica de estructuración."
  );
  const whatsappUrl = `https://wa.me/${rawPhone}?text=${defaultMsg}`;

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 sm:p-10 shadow-2xl text-center">
      <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/80">
        <MessageCircle className="h-7 w-7 text-emerald-400" />
      </div>

      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-4">
        {disqualifiedScreen.title}
      </h3>

      <p className="mx-auto max-w-lg text-sm text-zinc-200 leading-relaxed mb-8">
        {disqualifiedScreen.description}
      </p>

      {/* Action Button - Single high-converting WhatsApp link */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Pedir guía práctica por WhatsApp"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-emerald-500 shadow-lg shadow-emerald-950 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        >
          <MessageCircle className="h-4 w-4" />
          <span>{disqualifiedScreen.whatsappCtaText}</span>
        </a>
      </div>

      {/* Explanatory note */}
      <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-zinc-300">
        <ShieldAlert className="h-3.5 w-3.5 text-zinc-400" />
        <span>Agenda reservada exclusivamente para negocios calificados</span>
      </div>
    </div>
  );
};
