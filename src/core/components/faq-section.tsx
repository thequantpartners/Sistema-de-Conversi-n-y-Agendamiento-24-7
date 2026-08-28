"use client";

import React, { useState } from "react";
import { ProjectConfig } from "@/core/types/project";
import { ChevronDown, Sparkles } from "lucide-react";

interface FAQSectionProps {
  config: ProjectConfig;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ config }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-300 tracking-wider uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            <span>{config.faq.entryNumber}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {config.faq.title}
          </h2>
        </div>

        {/* FAQ Accordion (Glassmorphic) */}
        <div className="space-y-3">
          {config.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.02] backdrop-blur-2xl transition-all duration-300 shadow-md"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between p-6 text-left text-sm sm:text-base font-bold text-white hover:text-emerald-300 transition-colors"
                >
                  <span className="pr-4 leading-snug">{item.question}</span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.04] border border-white/[0.08] transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-emerald-400 border-emerald-500/40 bg-emerald-500/10" : "text-slate-400"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-white/[0.06] px-6 pt-4 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed font-light bg-white/[0.01]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
