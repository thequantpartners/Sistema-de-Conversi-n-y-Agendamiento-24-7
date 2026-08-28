"use client";

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
import { DemoFloatingWhatsApp } from "./demos/demo-floating-whatsapp";

interface LandingPageProps {
  config: ProjectConfig;
}

export const LandingPage: React.FC<LandingPageProps> = ({ config }) => {
  return (
    <div className="min-h-screen bg-[#05070B] text-slate-100 selection:bg-emerald-400 selection:text-slate-950 antialiased font-sans relative overflow-x-hidden">
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

      {/* Floating WhatsApp Widget */}
      <DemoFloatingWhatsApp
        businessName="Quant Partners"
        badgeText="¿Deseas tu página web por S/ 700?"
        defaultMessage="Hola, vi la oferta en su página web y deseo solicitar mi página por S/ 700."
      />
    </div>
  );
};
