import React from "react";
import { ProjectConfig } from "@/core/types/project";
import { Header } from "./header";
import { HeroSection } from "./hero-section";
import { HowItWorksSection } from "./how-it-works-section";
import { MathComparisonSection } from "./math-comparison-section";
import { WhatItIsNotSection } from "./what-it-is-not-section";
import { BookingFunnel } from "./booking-funnel";
import { FAQSection } from "./faq-section";
import { Footer } from "./footer";

interface LandingPageProps {
  config: ProjectConfig;
}

export const LandingPage: React.FC<LandingPageProps> = ({ config }) => {
  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] selection:bg-indigo-500 selection:text-white antialiased font-sans">
      <Header config={config} />
      <main>
        <HeroSection config={config} />
        <HowItWorksSection config={config} />
        <MathComparisonSection config={config} />
        <WhatItIsNotSection config={config} />
        <BookingFunnel config={config} />
        <FAQSection config={config} />
      </main>
      <Footer config={config} />
    </div>
  );
};
