import React from "react";
import { Metadata } from "next";
import { DemoStickyBar } from "@/core/components/demos/demo-sticky-bar";
import { DEMO_NICHES, getWhatsAppLink } from "@/core/data/portfolio-demos";

export const metadata: Metadata = {
  title: "Demo en Vivo: Academias & Negocios Locales | Quant Partners",
  description: "Diseño web dinámico para academias, talleres, cursos y comercios de servicios locales.",
};

export default function DemoNegocioLocalPage() {
  const demoData = DEMO_NICHES.find((d) => d.id === "negocio-local")!;
  const directWa = getWhatsAppLink(demoData.whatsAppMessage);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-32">
      {/* Demo Top Banner */}
      <div className="bg-gradient-to-r from-purple-900 via-pink-950 to-slate-900 text-xs py-2 px-4 text-center border-b border-purple-800/50 flex items-center justify-center gap-2">
        <span className="bg-purple-500/20 text-purple-300 font-bold px-2 py-0.5 rounded border border-purple-400/30">
          VISTA PREVIA EN VIVO
        </span>
        <span className="text-slate-300">
          Plantilla para <strong>Academias, Talleres, Eventos y Negocios Locales</strong>
        </span>
      </div>

      {/* Header Mockup */}
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-white shadow-md shadow-purple-500/20">
              🚀
            </div>
            <div>
              <span className="font-extrabold text-base tracking-tight text-white block">
                Academia Líder Digital
              </span>
              <span className="text-[10px] text-purple-400 uppercase tracking-widest block font-medium">
                Cursos Prácticos & Certificación Oficial
              </span>
            </div>
          </div>

          <a
            href={directWa}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg text-xs sm:text-sm font-bold bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white transition shadow-md shadow-purple-500/20"
          >
            Ver Próximos Inicios
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 px-4 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-800/60 text-purple-300 text-xs font-semibold mb-6">
          <span>🎓</span> Clases 100% Prácticas con Cupos Limitados
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Aprende Habilidades de Alta Demanda con Expertos en Vivo
        </h1>

        <p className="mt-5 text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Talleres intensivos, metodologías ágiles y proyectos reales que puedes aplicar de inmediato en tu trabajo o negocio.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={directWa}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-xl shadow-emerald-500/20 transition flex items-center justify-center gap-2"
          >
            <span>📲</span> Solicitar Temario por WhatsApp
          </a>
          <a
            href="#cursos"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-850 border border-slate-800 transition"
          >
            Explorar Talleres ↓
          </a>
        </div>

        {/* Benefits Grid */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-y border-slate-800 py-6">
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-purple-400">100%</p>
            <p className="text-xs text-slate-400 mt-1">Práctico y Aplicado</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">Certificado</p>
            <p className="text-xs text-slate-400 mt-1">Con Código de Validación</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-pink-400">En Vivo</p>
            <p className="text-xs text-slate-400 mt-1">Grupos Reducidos</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">Acceso 24/7</p>
            <p className="text-xs text-slate-400 mt-1">A Grabaciones y Recursos</p>
          </div>
        </div>
      </section>

      {/* Courses Catalog */}
      <section id="cursos" className="py-12 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Programas y Talleres Disponibles
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Inicios de clases todas las semanas con horarios flexibles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Marketing Digital & Meta Ads Pro",
              desc: "Aprende a captar clientes calificados todos los días usando Facebook, Instagram y WhatsApp.",
              duration: "4 Semanas",
              level: "Desde Cero",
              icon: "📱"
            },
            {
              title: "Gestión Financiera para Emprendedores",
              desc: "Control de flujo de caja, precios estratégicos y ordenamiento fiscal para pymes.",
              duration: "3 Semanas",
              level: "Intermedio",
              icon: "📈"
            },
            {
              title: "Ventas Consultivas & Cierre B2B",
              desc: "Técnicas modernas de negociación para vender servicios de alto valor sin regalar precios.",
              duration: "2 Semanas",
              level: "Avanzado",
              icon: "🤝"
            }
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/50 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-950 border border-purple-500/30 text-purple-300">
                    {item.level}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">⏱️ {item.duration}</span>
                <a
                  href={directWa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                >
                  Inscribirme →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sticky Bottom Conversion Bar */}
      <DemoStickyBar
        demoTitle={demoData.title}
        niche={demoData.niche}
        whatsAppMessage={demoData.whatsAppMessage}
      />
    </div>
  );
}
