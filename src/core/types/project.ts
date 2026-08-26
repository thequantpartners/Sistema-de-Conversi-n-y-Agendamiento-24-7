export interface ProjectBranding {
  name: string;
  tagline: string;
  logoText: string;
  logoSubtext?: string;
  primaryColor?: string;
  accentColor?: string;
}

export interface QuestionOption {
  id: string;
  label: string;
  description?: string;
  qualifies: boolean; // Si false, conduce al descarte amable
  badge?: string;
}

export interface QualificationQuestion {
  id: string;
  stepNumber: number;
  title: string;
  subtitle?: string;
  options: QuestionOption[];
}

export interface SocialProofStats {
  verifiedMetric: string;
  verifiedLabel: string;
  rating: string;
  reviewCount: string;
}

export interface MathComparisonItem {
  label: string;
  traditionalCost: string;
  ourSystemCost: string;
  note: string;
}

export interface WhatItIsItem {
  isNot: string;
  is: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BookingConfig {
  calendarType: "calendly" | "calcom" | "custom_webhook";
  calendarUrl: string; // URL de Calendly o Cal.com
  webhookUrl?: string; // Webhook para n8n / Railway / Supabase
  whatsappNumber: string; // Número de WhatsApp para alertas o contacto alternativo
  currency?: string;
}

export interface ProjectConfig {
  id: string;
  slug: string;
  branding: ProjectBranding;
  socialProof: SocialProofStats;
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    callout: string;
    honestLede: string;
    ctaPrimary: string;
    ctaSecondaryLink: string;
    ctaSecondaryText: string;
  };
  howItWorks: {
    entryNumber: string;
    title: string;
    subtitle: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
    }>;
    bridgeText: string;
  };
  mathComparison: {
    entryNumber: string;
    title: string;
    subtitle: string;
    bigNumbers: Array<{
      value: string;
      unit?: string;
      label: string;
      tag: string;
    }>;
    tableRows: Array<{
      concept: string;
      detail: string;
    }>;
    bridgeText: string;
  };
  whatItIs: {
    entryNumber: string;
    title: string;
    items: WhatItIsItem[];
    bridgeText: string;
  };
  qualification: {
    entryNumber: string;
    title: string;
    subtitle: string;
    questions: QualificationQuestion[];
    disqualifiedScreen: {
      title: string;
      description: string;
      resourceCtaText: string;
      resourceCtaUrl?: string;
      whatsappCtaText: string;
    };
  };
  faq: {
    entryNumber: string;
    title: string;
    items: FAQItem[];
  };
  booking: BookingConfig;
}
