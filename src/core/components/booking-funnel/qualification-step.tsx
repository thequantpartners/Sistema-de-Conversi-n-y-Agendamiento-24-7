"use client";

import React, { useState } from "react";
import { ProjectConfig, QualificationQuestion } from "@/core/types/project";
import { ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react";

interface QualificationStepProps {
  config: ProjectConfig;
  onQualify: (answers: Record<string, string>) => void;
  onDisqualify: (answers: Record<string, string>) => void;
}

export const QualificationStep: React.FC<QualificationStepProps> = ({
  config,
  onQualify,
  onDisqualify,
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  const questions = config.qualification.questions;
  const currentQuestion: QualificationQuestion = questions[currentStepIndex];

  const handleSelectOption = (optionId: string) => {
    setSelectedOptionId(optionId);
  };

  const handleContinue = () => {
    if (!selectedOptionId) return;

    const chosenOption = currentQuestion.options.find(
      (opt) => opt.id === selectedOptionId
    );
    const updatedAnswers = {
      ...answers,
      [currentQuestion.id]: selectedOptionId,
    };
    setAnswers(updatedAnswers);

    if (chosenOption && !chosenOption.qualifies) {
      onDisqualify(updatedAnswers);
      return;
    }

    if (currentStepIndex + 1 < questions.length) {
      setCurrentStepIndex((prev) => prev + 1);
      const nextQuestion = questions[currentStepIndex + 1];
      setSelectedOptionId(answers[nextQuestion.id] || null);
    } else {
      onQualify(updatedAnswers);
    }
  };

  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
      const prevQuestion = questions[currentStepIndex - 1];
      setSelectedOptionId(answers[prevQuestion.id] || null);
    }
  };

  const progressPercentage = Math.round(
    ((currentStepIndex + 1) / questions.length) * 100
  );

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 sm:p-10 shadow-2xl shadow-black/50">
      {/* Progress Bar & Back Navigation */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-mono text-zinc-300 mb-2">
          <div className="flex items-center gap-2">
            {currentStepIndex > 0 && (
              <button
                type="button"
                onClick={handlePrevious}
                aria-label="Volver al paso anterior"
                className="inline-flex items-center gap-1 text-zinc-300 hover:text-white transition-colors mr-2 pr-2 border-r border-zinc-800"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Paso anterior</span>
              </button>
            )}
            <span className="flex items-center gap-1 text-indigo-400 font-semibold">
              <Sparkles className="h-3.5 w-3.5" />
              <span>
                Paso {currentStepIndex + 1} de {questions.length}
              </span>
            </span>
          </div>
          <span>{progressPercentage}% Completado</span>
        </div>

        <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-900 border border-zinc-800">
          <div
            className="h-full bg-indigo-500 transition-all duration-300 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Question Header */}
      <div className="mb-8">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
          {currentQuestion.title}
        </h3>
        {currentQuestion.subtitle && (
          <p className="text-xs sm:text-sm text-zinc-300">
            {currentQuestion.subtitle}
          </p>
        )}
      </div>

      {/* Options List */}
      <div className="space-y-3 mb-8">
        {currentQuestion.options.map((option) => {
          const isSelected = selectedOptionId === option.id;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => handleSelectOption(option.id)}
              className={`group relative flex w-full items-start justify-between rounded-xl border p-4 sm:p-5 text-left transition-all active:scale-[0.99] ${
                isSelected
                  ? "border-indigo-500 bg-indigo-950/50 shadow-md shadow-indigo-950"
                  : "border-zinc-800/90 bg-zinc-900/50 hover:border-zinc-700 hover:bg-zinc-900/90"
              }`}
            >
              <div className="pr-4">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`text-sm sm:text-base font-semibold ${
                      isSelected ? "text-white" : "text-zinc-100"
                    }`}
                  >
                    {option.label}
                  </span>
                  {option.badge && (
                    <span className="rounded-full bg-indigo-500/30 border border-indigo-400/50 px-2 py-0.5 text-[10px] font-mono font-medium text-indigo-200">
                      {option.badge}
                    </span>
                  )}
                </div>
                {option.description && (
                  <p className="text-xs text-zinc-300">{option.description}</p>
                )}
              </div>

              <div
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-all mt-0.5 ${
                  isSelected
                    ? "border-indigo-500 bg-indigo-600 text-white"
                    : "border-zinc-600 bg-zinc-950 group-hover:border-zinc-400"
                }`}
              >
                {isSelected && <Check className="h-3 w-3 stroke-[3]" />}
              </div>
            </button>
          );
        })}
      </div>

      {/* Confirm and Continue CTA */}
      <div className="pt-2">
        <button
          type="button"
          disabled={!selectedOptionId}
          onClick={handleContinue}
          className={`w-full inline-flex items-center justify-center gap-2 rounded-xl py-3.5 px-6 font-semibold text-sm transition-all shadow-lg active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
            selectedOptionId
              ? "bg-indigo-600 text-white hover:bg-indigo-500 shadow-indigo-950 cursor-pointer"
              : "bg-zinc-900 text-zinc-300 border border-zinc-800/80 cursor-not-allowed opacity-75"
          }`}
        >
          <span>
            {currentStepIndex + 1 === questions.length
              ? "Verificar disponibilidad y agendar"
              : "Continuar al siguiente paso"}
          </span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between border-t border-zinc-800/80 mt-6 pt-4 text-xs font-mono text-zinc-300">
        <span>🔒 Selección obligatoria para avanzar</span>
        <span>Acceso a agenda en vivo</span>
      </div>
    </div>
  );
};
