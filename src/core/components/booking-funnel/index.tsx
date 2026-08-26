"use client";

import React, { useState } from "react";
import { ProjectConfig } from "@/core/types/project";
import { QualificationStep } from "./qualification-step";
import { CalendarStep } from "./calendar-step";
import { DisqualifiedStep } from "./disqualified-step";

interface BookingFunnelProps {
  config: ProjectConfig;
}

type FunnelState = "qualifying" | "qualified" | "disqualified";

export const BookingFunnel: React.FC<BookingFunnelProps> = ({ config }) => {
  const [state, setState] = useState<FunnelState>("qualifying");
  const [capturedAnswers, setCapturedAnswers] = useState<Record<string, string>>(
    {}
  );

  const handleQualify = (answers: Record<string, string>) => {
    setCapturedAnswers(answers);
    setState("qualified");
  };

  const handleDisqualify = (answers: Record<string, string>) => {
    setCapturedAnswers(answers);
    setState("disqualified");
  };

  return (
    <section id="agenda" className="py-20 border-b border-zinc-800/60 bg-zinc-950">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="mb-3 inline-flex items-center gap-2 font-mono text-xs text-indigo-400 tracking-wider uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
            <span>{config.qualification.entryNumber}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            {config.qualification.title}
          </h2>
          <p className="mx-auto max-w-xl text-zinc-400 text-xs sm:text-sm">
            {config.qualification.subtitle}
          </p>
        </div>

        {/* Funnel Container */}
        {state === "qualifying" && (
          <QualificationStep
            config={config}
            onQualify={handleQualify}
            onDisqualify={handleDisqualify}
          />
        )}

        {state === "qualified" && (
          <CalendarStep config={config} answers={capturedAnswers} />
        )}

        {state === "disqualified" && <DisqualifiedStep config={config} />}
      </div>
    </section>
  );
};
