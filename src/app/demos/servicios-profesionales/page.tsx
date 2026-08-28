import React from "react";
import { Metadata } from "next";
import { DemoStickyBar } from "@/core/components/demos/demo-sticky-bar";
import { DemoFloatingWhatsApp } from "@/core/components/demos/demo-floating-whatsapp";
import { DEMO_NICHES, getWhatsAppLink, PROMO_PRICE } from "@/core/data/portfolio-demos";
import { 
  ShieldCheck, 
  Scale, 
  FileText, 
  TrendingUp, 
  Building2, 
  Award, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  Clock, 
  PhoneCall, 
  Briefcase,
  ChevronRight,
  MessageCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Demo en Vivo: Estudio Jurídico & Consultoría B2B | Quant Partners",
  description: "Diseño web de alta autoridad y elegancia para firmas legales, contables y consultoras.",
};

export default function DemoServiciosProfesionalesPage() {
  const demoData = DEMO_NICHES.find((d) => d.id === "servicios-profesionales")!;
  const directWa = getWhatsAppLink(demoData.whatsAppMessage);

  return (
    <div className="min-h-screen bg-[#070A12] text-slate-100 font-sans pb-32 relative selection:bg-amber-400 selection:text-slate-950">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-blue-700/15 via-indigo-700/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      {/* Top Demo Bar */}
      <div className="bg-slate-900/90 text-xs py-2 px-4 text-center border-b border-slate-800 backdrop-blur flex items-center justify-center gap-2">
        <span className="bg-blue-500/20 text-blue-300 font-bold px-2.5 py-0.5 rounded-full border border-blue-400/30">
          DEMO EN VIVO
        </span>
        <span className="text-slate-300">
          Diseño Premium para <strong>Abogados, Contadores, Consultores y Agencias B2B</strong>
        </span>
      </div>

      {/* Luxury Header */}
      <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-serif font-black text-slate-950 shadow-lg shadow-amber-500/20 text-lg">
              VJ
            </div>
            <div>
              <span className="font-extrabold text-base tracking-tight text-white block">
                VALENZUELA & ASOCIADOS
              </span>
              <span className="text-[10px] font-mono text-amber-400/90 uppercase tracking-widest block">
                Firma Legal & Consultoría Corporativa
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <span className="hover:text-amber-400 cursor-pointer transition">Áreas de Práctica</span>
            <span className="hover:text-amber-400 cursor-pointer transition">Socios</span>
            <span className="hover:text-amber-400 cursor-pointer transition">Casos de Éxito</span>
            <span className="hover:text-amber-400 cursor-pointer transition">Publicaciones</span>
          </nav>

          <a
            href={directWa}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 transition-all transform hover:scale-105"
          >
            Consulta Directa
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 px-4 sm:px-6 max-w-6xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-300 text-xs font-medium backdrop-blur shadow-xl">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>Blindaje Legal & Tributario con más de 15 años de trayectoria</span>
        </div>

        <h1 className="text-3xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.12] max-w-4xl mx-auto">
          Protegemos y Maximizamos el Patrimonio de tu Empresa
        </h1>

        <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Estrategias legales deterministas, defensa tributaria ante SUNAT y estructuración corporativa sólida para empresas que buscan crecer con tranquilidad.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={directWa}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-sm sm:text-base bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-xl shadow-emerald-500/20 transition-all transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 fill-slate-950" />
            <span>Agendar Consulta por WhatsApp</span>
          </a>
          <a
            href="#areas"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-semibold text-sm text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 transition"
          >
            <span>Explorar Especialidades</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Verified Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto p-6 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl">
          <div className="p-3 text-center border-r border-slate-800/80 last:border-none">
            <p className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">+600</p>
            <p className="text-xs text-slate-400 mt-1 font-medium">Empresas Asesoradas</p>
          </div>
          <div className="p-3 text-center border-r border-slate-800/80 last:border-none">
            <p className="text-2xl sm:text-4xl font-extrabold text-amber-400 tracking-tight">99.2%</p>
            <p className="text-xs text-slate-400 mt-1 font-medium">Dictámenes Favorables</p>
          </div>
          <div className="p-3 text-center border-r border-slate-800/80 last:border-none">
            <p className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">S/ 8.4M</p>
            <p className="text-xs text-slate-400 mt-1 font-medium">Contingencias Mitigadas</p>
          </div>
          <div className="p-3 text-center">
            <p className="text-2xl sm:text-4xl font-extrabold text-emerald-400 tracking-tight">24h</p>
            <p className="text-xs text-slate-400 mt-1 font-medium">Tiempo de Respuesta</p>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section id="areas" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
            EXPERIENCIA COMPROBADA
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Nuestras Áreas de Práctica
          </h2>
          <p className="text-xs sm:text-base text-slate-400 max-w-lg mx-auto">
            Soluciones jurídicas y corporativas adaptadas a las exigencias de cada sector económico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Building2 className="w-6 h-6 text-amber-400" />,
              title: "Derecho Corporativo & Fusiones",
              desc: "Estructuración de contratos comerciales de alta complejidad, constitución de sociedades y gobierno corporativo.",
              badge: "Corporativo"
            },
            {
              icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
              title: "Defensa Tributaria & SUNAT",
              desc: "Representación ante fiscalizaciones, litigios en el Tribunal Fiscal y diseño de planeamiento tributario legal eficiente.",
              badge: "Fiscal"
            },
            {
              icon: <Briefcase className="w-6 h-6 text-blue-400" />,
              title: "Laboral Empresarial & Compliance",
              desc: "Auditorías laborales preventivas, resolución de controversias con personal clave y cumplimiento normativo ante SUNAFIL.",
              badge: "Laboral"
            },
            {
              icon: <Scale className="w-6 h-6 text-purple-400" />,
              title: "Litigios & Arbitraje Comercial",
              desc: "Defensa estratégica en procesos judiciales mercantiles y tribunales arbitrales nacionales e internacionales.",
              badge: "Arbitraje"
            },
            {
              icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
              title: "Protección de Marcas & Patentes",
              desc: "Registro y defensa activa de propiedad intelectual, marcas registradas y secretos comerciales ante INDECOPI.",
              badge: "Propiedad"
            },
            {
              icon: <FileText className="w-6 h-6 text-rose-400" />,
              title: "Blindaje Patrimonial & Sucesorio",
              desc: "Constitución de fideicomisos y vehículos de inversión seguros para resguardar el patrimonio familiar y de accionistas.",
              badge: "Patrimonio"
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/5 space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/60 shadow-inner">
                  {item.icon}
                </div>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  {item.badge}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Quote Card */}
      <section className="py-10 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-amber-500/20 shadow-2xl relative text-center space-y-5">
          <div className="flex justify-center text-amber-400 gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>

          <blockquote className="text-base sm:text-xl font-medium text-slate-200 italic leading-relaxed max-w-2xl mx-auto">
            "Valenzuela & Asociados nos brindó una defensa impecable frente a una auditoría fiscal de SUNAT. Su rapidez de respuesta y solidez técnica son incomparables."
          </blockquote>

          <div className="pt-2">
            <p className="text-sm sm:text-base font-bold text-white">Ing. Roberto Carranza</p>
            <p className="text-xs text-amber-400 font-mono">Gerente General • Corporación Minera del Sur</p>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Widget */}
      <DemoFloatingWhatsApp
        businessName="Valenzuela & Asociados"
        badgeText="¿Deseas una consulta legal?"
        defaultMessage="Hola, estuve viendo su web de servicios legales y quiero agendar una consulta."
      />

      {/* Sticky Bottom Conversion Bar */}
      <DemoStickyBar
        demoTitle={demoData.title}
        niche={demoData.niche}
        whatsAppMessage={demoData.whatsAppMessage}
      />
    </div>
  );
}
