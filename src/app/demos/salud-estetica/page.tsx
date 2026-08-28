import React from "react";
import { Metadata } from "next";
import { DemoStickyBar } from "@/core/components/demos/demo-sticky-bar";
import { DemoFloatingWhatsApp } from "@/core/components/demos/demo-floating-whatsapp";
import { DEMO_NICHES, getWhatsAppLink } from "@/core/data/portfolio-demos";
import { 
  Sparkles, 
  ShieldCheck, 
  Calendar, 
  MapPin, 
  Clock, 
  Star, 
  CheckCircle2, 
  ArrowRight, 
  HeartHandshake, 
  Award, 
  ChevronRight,
  MessageCircle,
  Stethoscope
} from "lucide-react";

export const metadata: Metadata = {
  title: "Demo en Vivo: Clínica Dental & Estética Médica | Quant Partners",
  description: "Diseño web moderno de alta conversión para odontólogos, clínicas médicas y centros de estética.",
};

export default function DemoSaludEsteticaPage() {
  const demoData = DEMO_NICHES.find((d) => d.id === "salud-estetica")!;
  const directWa = getWhatsAppLink(demoData.whatsAppMessage);

  return (
    <div className="min-h-screen bg-[#041212] text-slate-100 font-sans pb-32 relative selection:bg-emerald-400 selection:text-slate-950">
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-teal-500/15 via-emerald-600/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      {/* Top Demo Bar */}
      <div className="bg-slate-900/90 text-xs py-2 px-4 text-center border-b border-slate-800 backdrop-blur flex items-center justify-center gap-2">
        <span className="bg-emerald-500/20 text-emerald-300 font-bold px-2.5 py-0.5 rounded-full border border-emerald-400/30">
          DEMO EN VIVO
        </span>
        <span className="text-slate-300">
          Diseño para <strong>Dentistas, Clínicas Médicas, Psicólogos y Estética</strong>
        </span>
      </div>

      {/* Modern Medical Header */}
      <header className="border-b border-teal-950 bg-[#061818]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center font-bold text-slate-950 shadow-lg shadow-emerald-500/20 text-xl">
              ✨
            </div>
            <div>
              <span className="font-extrabold text-base tracking-tight text-white block">
                CLÍNICA DENTAL SONRÍE PLUS
              </span>
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block font-semibold">
                Odontología Digital & Estética Avanzada
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <span className="hover:text-emerald-400 cursor-pointer transition">Tratamientos</span>
            <span className="hover:text-emerald-400 cursor-pointer transition">Especialistas</span>
            <span className="hover:text-emerald-400 cursor-pointer transition">Antes y Después</span>
            <span className="hover:text-emerald-400 cursor-pointer transition">Sedes</span>
          </nav>

          <a
            href={directWa}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-lg shadow-emerald-500/20 transition-all transform hover:scale-105"
          >
            Reservar Cita
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 px-4 sm:px-6 max-w-6xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-medium backdrop-blur shadow-xl">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span>Tecnología Digital 3D • Procedimientos 100% Sin Dolor</span>
        </div>

        <h1 className="text-3xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.12] max-w-4xl mx-auto">
          Recupera la Belleza y Salud de tu Sonrisa con Expertos Certificados
        </h1>

        <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Especialistas en diseño de sonrisa, ortodoncia invisible e implantes de carga inmediata. Diagnóstico digital computarizado y facilidades de pago.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={directWa}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-sm sm:text-base bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-xl shadow-emerald-500/25 transition-all transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 fill-slate-950" />
            <span>Agendar Cita por WhatsApp</span>
          </a>
          <a
            href="#tratamientos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-semibold text-sm text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 transition"
          >
            <span>Ver Tratamientos</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Location & Hours Floating Banner */}
        <div className="mt-14 p-6 rounded-3xl bg-slate-900/70 border border-teal-900/50 backdrop-blur-xl max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-2xl bg-emerald-950/70 border border-emerald-500/30 text-emerald-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Sede Principal</p>
              <p className="text-sm font-bold text-white">Av. Javier Prado Este 2340, San Borja</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-2xl bg-emerald-950/70 border border-emerald-500/30 text-emerald-400">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Horario de Atención</p>
              <p className="text-sm font-bold text-white">Lun a Sáb: 8:00 am - 8:00 pm</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-2xl bg-emerald-950/70 border border-emerald-500/30 text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Garantía Clínica</p>
              <p className="text-sm font-bold text-emerald-400">Materiales Certificados ISO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section id="tratamientos" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
            TRATAMIENTOS DE VANGUARDIA
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Especialidades Clínicas & Estéticas
          </h2>
          <p className="text-xs sm:text-base text-slate-400 max-w-lg mx-auto">
            Diagnóstico 3D preciso y tratamientos mínimamente invasivos para toda la familia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Ortodoncia Invisible (Alineadores 3D)",
              desc: "Alinea tus dientes sin brackets visibles. Cómodo, removible y 100% estético.",
              badge: "Más Solicitado",
              highlight: "Sin dolor"
            },
            {
              title: "Implantes Dentales en 24 Horas",
              desc: "Reemplazo fijo de piezas perdidas con titanio biocompatible de alta durabilidad.",
              badge: "Carga Inmediata",
              highlight: "Garantía de por vida"
            },
            {
              title: "Diseño de Sonrisa & Carillas",
              desc: "Carillas de porcelana ultra-delgadas para máxima armonía, color y forma perfecta.",
              badge: "Estética Premium",
              highlight: "Personalizado"
            },
            {
              title: "Blanqueamiento Dental Láser LED",
              desc: "Hasta 4 tonos más claros en una sola sesión de 45 minutos sin generar sensibilidad.",
              badge: "1 Sola Sesión",
              highlight: "Rápido"
            },
            {
              title: "Limpieza Profunda & Profilaxis",
              desc: "Remoción ultrasónica de sarro, pulido de esmalte y tratamiento para encías sanas.",
              badge: "Preventivo",
              highlight: "Recomendado cada 6 meses"
            },
            {
              title: "Endodoncia & Restauración",
              desc: "Tratamiento de conducto con tecnología rotatoria indolora para salvar piezas naturales.",
              badge: "Cero Dolor",
              highlight: "Anestesia computarizada"
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-gradient-to-b from-[#082222] to-[#051616] border border-teal-900/60 hover:border-emerald-500/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/5 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    {item.badge}
                  </span>
                  <span className="text-[11px] font-medium text-slate-400">
                    ✓ {item.highlight}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-teal-950 flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-400">Evaluación inicial incluida</span>
                <a
                  href={directWa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-white hover:text-emerald-300 flex items-center gap-1"
                >
                  Consultar →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Floating WhatsApp Widget */}
      <DemoFloatingWhatsApp
        businessName="Clínica Sonríe Plus"
        badgeText="¿Deseas agendar tu cita?"
        defaultMessage="Hola, vi su web y deseo agendar una evaluación dental."
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
