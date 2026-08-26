"use client";

import React from "react";
import { X, FileText } from "lucide-react";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  brandName: string;
}

export const TermsModal: React.FC<TermsModalProps> = ({
  isOpen,
  onClose,
  brandName,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8 text-zinc-300 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors"
          aria-label="Cerrar"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2.5 text-indigo-400 mb-6 font-mono text-xs uppercase tracking-wider">
          <FileText className="h-4 w-4" />
          <span>Términos y Condiciones</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
          Términos del Servicio
        </h3>

        <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
          <p>
            Bienvenido a <strong>{brandName}</strong>. Al acceder a este sitio web y utilizar nuestro sistema de calificación y agendamiento, usted acepta los siguientes términos y condiciones:
          </p>

          <h4 className="text-sm font-semibold text-white pt-2">1. Naturaleza del Servicio</h4>
          <p>
            {brandName} provee infraestructura técnica, diseño de embudos y automatizaciones de agendamiento para empresas y profesionales de servicios. No somos una agencia de generación de tráfico garantizado ni intermediarios financieros.
          </p>

          <h4 className="text-sm font-semibold text-white pt-2">2. Criterios de Agendamiento</h4>
          <p>
            El agendamiento de una sesión estratégica está sujeto a la disponibilidad de nuestro equipo y al cumplimiento de los criterios de cualificación establecidos en el formulario. Nos reservamos el derecho de reprogramar o cancelar citas si los datos provistos resultan falsos o incompletos.
          </p>

          <h4 className="text-sm font-semibold text-white pt-2">3. Exención de Garantías de Resultados</h4>
          <p>
            Cualquier testimonio, métrica o caso de estudio presentado en este sitio refleja experiencias previas de clientes y proyectos implementados. Los resultados comerciales varían en función de la oferta del cliente, su capacidad de cierre comercial y el tráfico existente.
          </p>

          <h4 className="text-sm font-semibold text-white pt-2">4. Propiedad Intelectual</h4>
          <p>
            Todos los elementos de diseño, marcas, arquitectura de software y contenidos de este sitio web son propiedad exclusiva de {brandName} y están protegidos por las leyes de propiedad intelectual aplicables.
          </p>
        </div>

        <div className="mt-8 border-t border-zinc-800 pt-4 text-right">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-zinc-900 border border-zinc-800 px-5 py-2 text-xs font-semibold text-white hover:bg-zinc-800 transition-colors"
          >
            Entendido y cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
