"use client";

import React from "react";
import { X, Shield } from "lucide-react";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
  brandName: string;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({
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
          <Shield className="h-4 w-4" />
          <span>Política de Privacidad</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
          Política de Privacidad y Tratamiento de Datos
        </h3>

        <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
          <p>
            En <strong>{brandName}</strong>, respetamos y protegemos la privacidad de nuestros usuarios y clientes. Esta política describe cómo recopilamos, utilizamos y protegemos la información proporcionada a través de este sitio web.
          </p>

          <h4 className="text-sm font-semibold text-white pt-2">1. Datos Recopilados</h4>
          <p>
            Recopilamos información proporcionada de manera voluntaria a través de nuestros formularios de calificación y agendamiento, incluyendo nombre, correo electrónico, número de teléfono (WhatsApp), modelo de negocio y respuestas sobre el estado operativo de su empresa.
          </p>

          <h4 className="text-sm font-semibold text-white pt-2">2. Finalidad del Tratamiento</h4>
          <p>
            Los datos recopilados se utilizan exclusivamente para:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-zinc-400">
            <li>Evaluar la cualificación y disponibilidad para la llamada de demostración estratégica.</li>
            <li>Sincronizar y confirmar la cita en el calendario oficial.</li>
            <li>Enviar recordatorios y enlaces de acceso mediante WhatsApp y correo electrónico.</li>
            <li>Brindar soporte y seguimiento personalizado sobre nuestros servicios de infraestructura.</li>
          </ul>

          <h4 className="text-sm font-semibold text-white pt-2">3. Confidencialidad y No Transferencia</h4>
          <p>
            No vendemos, alquilamos ni compartimos sus datos personales con terceros para fines publicitarios. Sus datos son tratados con estricta confidencialidad y alojados en servidores seguros con cifrado SSL de 256 bits.
          </p>

          <h4 className="text-sm font-semibold text-white pt-2">4. Derechos del Titular</h4>
          <p>
            Usted puede solicitar en cualquier momento la actualización, rectificación o eliminación definitiva de sus datos personales comunicándose directamente a través de nuestros canales oficiales de contacto o respondiendo a nuestros mensajes de WhatsApp.
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
