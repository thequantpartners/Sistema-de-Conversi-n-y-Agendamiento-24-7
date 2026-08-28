import { Metadata } from "next";
import { PortfolioHub } from "@/core/components/portfolio/portfolio-hub";

export const metadata: Metadata = {
  title: "Demos en Vivo & Portafolio | Quant Partners",
  description: "Explora nuestras páginas web en vivo para servicios profesionales, clínicas, servicios técnicos y negocios locales.",
};

export default function PortfolioPage() {
  return <PortfolioHub />;
}
