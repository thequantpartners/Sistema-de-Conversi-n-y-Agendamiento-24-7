import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#09090b",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://quantpartners.com"),
  title: {
    default: "Quant Partners | Sistema de Conversión y Ventas 24/7 para WordPress",
    template: "%s | Quant Partners",
  },
  description:
    "Convierte tu WordPress en una máquina de ventas 24/7: filtra curiosos sin presupuesto, sincroniza tu agenda en vivo y confirma citas por WhatsApp y CRM en segundos.",
  keywords: [
    "agendamiento 24/7 wordpress",
    "sistema de ventas wordpress",
    "embudo de conversion wordpress",
    "calificacion de prospectos wordpress",
    "automatizacion whatsapp crm",
    "cal.com wordpress",
    "reducir no shows",
    "quant partners",
  ],
  authors: [{ name: "Quant Partners" }],
  creator: "Quant Partners",
  publisher: "Quant Partners",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://quantpartners.com",
    siteName: "Quant Partners",
    title: "Quant Partners | Infraestructura de Conversión y Agendamiento 24/7",
    description:
      "Convierte tu tráfico existente en llamadas de venta cualificadas. Filtro en 4 pasos, sincronización de agenda en vivo y alertas automáticas por WhatsApp.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quant Partners | Infraestructura de Conversión y Agendamiento 24/7",
    description:
      "Convierte tu tráfico existente en llamadas de venta cualificadas. Filtro en 4 pasos y confirmación automática por WhatsApp.",
    creator: "@quantpartners",
  },
  alternates: {
    canonical: "https://quantpartners.com",
  },
};

import { MetaPixel } from "@/core/components/tracking/meta-pixel";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://quantpartners.com/#organization",
        name: "Quant Partners",
        url: "https://quantpartners.com",
        logo: "https://quantpartners.com/logo.png",
        description:
          "Proveedor de infraestructura de conversión, filtros de cualificación y agendamiento 24/7 para servicios B2B.",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+51924464410",
          contactType: "customer service",
          availableLanguage: ["Spanish", "English"],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://quantpartners.com/#website",
        url: "https://quantpartners.com",
        name: "Quant Partners",
        publisher: {
          "@id": "https://quantpartners.com/#organization",
        },
        inLanguage: "es",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Este sistema me genera tráfico o prospectos nuevos?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Este sistema asume que tu negocio ya tiene canales activos para atraer prospectos. Nuestra función es instalar la infraestructura técnica que recibe a esas personas, filtra a quienes no tienen presupuesto y las agenda en tu calendario con confirmación instantánea.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cómo ayuda a reducir el ausentismo (No-Shows)?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "El sistema incorpora una secuencia de 3 mensajes automáticos por WhatsApp: confirmación inmediata con el enlace de la sala, recordatorio 24 horas antes y un micro-compromiso 2 horas antes solicitando confirmación con un 'SÍ'.",
            },
          },
          {
            "@type": "Question",
            name: "¿Tengo que pagar mensualidades de agencia?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No trabajamos con mensualidades de retención. Se realiza una implementación única de la infraestructura en tus plataformas. Tú mantienes la propiedad de tus accesos, calendarios y bases de datos.",
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} dark`}>
      <head>
        <link rel="preconnect" href="https://connect.facebook.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#09090b] text-[#f4f4f5] antialiased">
        {children}
        <MetaPixel />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1481108957086201&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
