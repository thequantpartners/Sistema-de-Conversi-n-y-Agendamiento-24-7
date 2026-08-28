import React from "react";
import { Metadata } from "next";
import { DemoStickyBar } from "@/core/components/demos/demo-sticky-bar";
import { DemoFloatingWhatsApp } from "@/core/components/demos/demo-floating-whatsapp";
import { DEMO_NICHES, getWhatsAppLink } from "@/core/data/portfolio-demos";
import { 
  GraduationCap, 
  Sparkles, 
  Users, 
  Clock, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  Video, 
  Star, 
  ChevronRight,
  MessageCircle,
  TrendingUp
} from "lucide-react";

export const metadata: Metadata = {
  title: "Demo en Vivo: Academia Digital & Negocios Locales | Quant Partners",
  description: "Diseño web vibrante y moderno para academias, cursos en vivo, eventos y marcas de servicio.",
};

export default function DemoNegocioLocalPage() {
  const demoData = DEMO_NICHES.find((d) => d.id === "negocio-local")!;
  const directWa = getWhatsAppLink(demoData.whatsAppMessage);

  return (
    <div className="min-h-screen bg-[#0C0618] text-slate-100 font-sans pb-32 relative selection:bg-purple-500 selection:text-white">
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-purple-600/20 via-pink-600/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      {/* Top Demo Bar */}
      <div className="bg-slate-900/90 text-xs py-2 px-4 text-center border-b border-slate-800 backdrop-blur flex items-center justify-center gap-2">
        <span className="bg-purple-500/20 text-purple-300 font-bold px-2.5 py-0.5 rounded-full border border-purple-400/30">
          DEMO EN VIVO
        </span>
        <span className="text-slate-300">
          Diseño para <strong>Academias, Cursos, Talleres, Eventos y Negocios Locales</strong>
        </span>
      </div>

      {/* Modern EdTech Header */}
      <header className="border-b border-purple-950/70 bg-[#120924]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-black text-white shadow-lg shadow-purple-500/30 text-lg">
              🚀
            </div>
            <div>
              <span className="font-extrabold text-base tracking-tight text-white block">
                ACADEMIA LÍDER DIGITAL
              </span>
              <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest block font-semibold">
                Formación Ejecutiva & Práctica
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <span className="hover:text-purple-400 cursor-pointer transition">Talleres</span>
            <span className="hover:text-purple-400 cursor-pointer transition">Metodología</span>
            <span className="hover:text-purple-400 cursor-pointer transition">Certificación</span>
            <span className="hover:text-purple-400 cursor-pointer transition">Comunidad</span>
          </nav>

          <a
            href={directWa}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white shadow-lg shadow-purple-500/20 transition-all transform hover:scale-105"
          >
            Próximos Inicios
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 px-4 sm:px-6 max-w-6xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-medium backdrop-blur shadow-xl">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span>Clases 100% Prácticas en Vivo con Grupos Reducidos</span>
        </div>

        <h1 className="text-3xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.12] max-w-4xl mx-auto">
          Domina las Habilidades Más Demandadas con Especialistas de la Industria
        </h1>

        <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Talleres intensivos aplicados a casos reales. Aprende con metodologías ágiles, feedback personalizado y certificado oficial con código de validación.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={directWa}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-sm sm:text-base bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-xl shadow-emerald-500/25 transition-all transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 fill-slate-950" />
            <span>Solicitar Temarios por WhatsApp</span>
          </a>
          <a
            href="#programas"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-semibold text-sm text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 transition"
          >
            <span>Ver Programas</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Highlight Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto p-6 rounded-3xl bg-slate-900/60 border border-purple-950/80 backdrop-blur-xl">
          <div className="p-3 text-center border-r border-slate-800/80 last:border-none">
            <p className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">+1,800</p>
            <p className="text-xs text-slate-400 mt-1 font-medium">Alumnos Graduados</p>
          </div>
          <div className="p-3 text-center border-r border-slate-800/80 last:border-none">
            <p className="text-2xl sm:text-4xl font-extrabold text-purple-400 tracking-tight">4.9/5</p>
            <p className="text-xs text-slate-400 mt-1 font-medium">Satisfacción Promedio</p>
          </div>
          <div className="p-3 text-center border-r border-slate-800/80 last:border-none">
            <p className="text-2xl sm:text-4xl font-extrabold text-pink-400 tracking-tight">100%</p>
            <p className="text-xs text-slate-400 mt-1 font-medium">Casos Prácticos</p>
          </div>
          <div className="p-3 text-center">
            <p className="text-2xl sm:text-4xl font-extrabold text-emerald-400 tracking-tight">24/7</p>
            <p className="text-xs text-slate-400 mt-1 font-medium">Acceso a Grabaciones</p>
          </div>
        </div>
      </section>

      {/* Programs Catalog */}
      <section id="programas" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">
            FORMACIÓN DE ALTO IMPACTO
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Programas y Talleres Disponibles
          </h2>
          <p className="text-xs sm:text-base text-slate-400 max-w-lg mx-auto">
            Inicios de clases todas las semanas con horarios nocturnos y fines de semana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Marketing Digital & Meta Ads Pro",
              desc: "Aprende a captar clientes calificados todos los días usando Facebook, Instagram y WhatsApp con embudos de alta conversión.",
              duration: "4 Semanas",
              level: "Desde Cero",
              badge: "Más Vendido"
            },
            {
              title: "Gestión Financiera para Pymes",
              desc: "Estructuración de flujo de caja, fijación de precios rentables y ordenamiento tributario para emprendedores y negocios.",
              duration: "3 Semanas",
              level: "Intermedio",
              badge: "Empresarial"
            },
            {
              title: "Ventas Consultivas & Cierre B2B",
              desc: "Estrategias modernas de negociación y psicología de ventas para cerrar contratos de alto valor sin regalar precios.",
              duration: "2 Semanas",
              level: "Avanzado",
              badge: "Cierre Rápido"
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-gradient-to-b from-[#1C0F32] to-[#120822] border border-purple-950 hover:border-purple-500/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    {item.badge}
                  </span>
                  <span className="text-[11px] font-medium text-slate-400">
                    Nivel: {item.level}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-purple-950/80 flex items-center justify-between">
                <span className="text-xs font-semibold text-purple-300">⏱️ {item.duration}</span>
                <a
                  href={directWa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-white hover:text-purple-300 flex items-center gap-1"
                >
                  Inscribirme →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Floating WhatsApp Widget */}
      <DemoFloatingWhatsApp
        businessName="Academia Líder Digital"
        badgeText="¿Tienes dudas sobre los cursos?"
        defaultMessage="Hola, me gustaría solicitar el temario y precios de los talleres."
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
