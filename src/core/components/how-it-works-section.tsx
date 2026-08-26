import React from "react";
import { ProjectConfig } from "@/core/types/project";
import { Filter, Calendar, MessageSquare } from "lucide-react";

interface HowItWorksSectionProps {
  config: ProjectConfig;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({
  config,
}) => {
  const stepIcons = [
    <Filter key="1" className="h-5 w-5 text-indigo-400" />,
    <Calendar key="2" className="h-5 w-5 text-indigo-400" />,
    <MessageSquare key="3" className="h-5 w-5 text-indigo-400" />,
  ];

  return (
    <section id="como-funciona" className="py-20 border-b border-zinc-800/60 bg-zinc-950">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Section Tag */}
        <div className="mb-4 inline-flex items-center gap-2 font-mono text-xs text-indigo-400 tracking-wider uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
          <span>{config.howItWorks.entryNumber}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3">
          {config.howItWorks.title}
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base mb-12 max-w-2xl">
          {config.howItWorks.subtitle}
        </p>

        {/* 3 Step Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {config.howItWorks.steps.map((step, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition-all hover:border-zinc-700 hover:bg-zinc-900/70"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950">
                    {stepIcons[idx] || (
                      <span className="font-mono text-sm text-indigo-400">
                        {step.number}
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-2xl font-bold text-zinc-700">
                    0{step.number}
                  </span>
                </div>

                <h3 className="font-mono text-xs uppercase tracking-wider text-indigo-300 font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bridge Link */}
        <div className="mt-14 text-center">
          <a
            href="#numeros"
            className="inline-flex items-center text-xs font-mono text-zinc-400 hover:text-indigo-400 transition-colors"
          >
            {config.howItWorks.bridgeText}
          </a>
        </div>
      </div>
    </section>
  );
};
