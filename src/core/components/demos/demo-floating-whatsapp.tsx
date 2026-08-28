"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { getWhatsAppLink } from "@/core/data/portfolio-demos";

interface DemoFloatingWhatsAppProps {
  businessName: string;
  defaultMessage?: string;
  badgeText?: string;
}

export function DemoFloatingWhatsApp({
  businessName,
  defaultMessage = "Hola, vi su página web y deseo consultar sobre sus servicios.",
  badgeText = "¿Tienes consultas? Escríbenos"
}: DemoFloatingWhatsAppProps) {
  const [isOpen, setIsOpen] = useState(true);
  const waLink = getWhatsAppLink(defaultMessage);

  return (
    <div className="fixed bottom-20 right-4 sm:right-6 z-40 flex flex-col items-end gap-2 group">
      {/* Speech Bubble / Tooltip */}
      {isOpen && (
        <div className="flex items-center gap-2 p-2.5 sm:p-3 rounded-2xl bg-white text-slate-900 shadow-2xl border border-slate-200 text-xs sm:text-sm font-medium animate-bounce duration-1000 max-w-[240px]">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <p className="leading-tight">
            <span className="font-bold block text-slate-950">{businessName}</span>
            <span className="text-slate-600 text-[11px]">{badgeText}</span>
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsOpen(false);
            }}
            className="text-slate-400 hover:text-slate-700 p-0.5 rounded-full"
            aria-label="Cerrar tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Circular WhatsApp Button */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl shadow-emerald-600/40 transition-all duration-300 transform hover:scale-110 active:scale-95 border-2 border-white/20"
        aria-label="Contactar por WhatsApp"
      >
        {/* Glow Waves */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" />
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366] relative z-10" />
      </a>
    </div>
  );
}
