"use client";

import React, { useState } from "react";
import { ProjectConfig } from "@/core/types/project";
import { ChevronDown } from "lucide-react";

interface FAQSectionProps {
  config: ProjectConfig;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ config }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 border-b border-zinc-800/60 bg-zinc-900/30">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Section Tag */}
        <div className="mb-4 inline-flex items-center gap-2 font-mono text-xs text-indigo-400 tracking-wider uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
          <span>{config.faq.entryNumber}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-10">
          {config.faq.title}
        </h2>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {config.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-zinc-100 hover:text-white transition-colors"
                >
                  <span className="pr-4">{item.question}</span>
                  <div
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-indigo-400" : "text-zinc-400"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-zinc-800/80 px-5 pt-3 pb-5 text-xs sm:text-sm text-zinc-300 leading-relaxed bg-zinc-900/20">
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
