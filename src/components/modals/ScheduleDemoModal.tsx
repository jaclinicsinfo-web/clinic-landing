"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, CheckCircle2, Sparkles, Building2, User, Mail, Phone, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

interface ScheduleDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ScheduleDemoModal({ isOpen, onClose }: ScheduleDemoModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    clinicType: "Multi-especialidades",
    doctorsCount: "1 a 5 profissionais",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#0d5c6b", "#2a9d8f", "#e9c46a", "#10b981"],
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10"
          >
            {/* Header with gradient strip */}
            <div className="bg-gradient-to-r from-[#0c3f4a] via-[#0d5c6b] to-[#147a8d] p-6 text-white relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-medium text-teal-100 mb-2 border border-white/10">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                Demonstração Guiada & Gratuita
              </div>
              <h3 className="text-2xl font-bold font-display text-white">
                Veja o Clinic Manager em ação
              </h3>
              <p className="text-teal-100 text-sm mt-1">
                Apresentação personalizada de 15 minutos sem compromisso com nossos especialistas.
              </p>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800">
                    Solicitação Recebida com Sucesso!
                  </h4>
                  <p className="text-slate-600 text-sm mt-2 max-w-sm mx-auto">
                    Obrigado, <strong className="text-slate-800">{formData.name || "Doutor(a)"}</strong>! Um de nossos consultores entrará em contato via WhatsApp no número informado nos próximos minutos.
                  </p>

                  <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-500 text-left">
                    <div className="font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-[#0d5c6b]" />
                      O que esperar da demonstração:
                    </div>
                    <ul className="space-y-1 ml-5 list-disc">
                      <li>Tour pelos módulos que sua clínica mais precisa</li>
                      <li>Simulação de importação de pacientes sem perda de histórico</li>
                      <li>Tira-dúvidas sobre tabela TISS, PIX e Agente de IA</li>
                    </ul>
                  </div>

                  <button
                    onClick={handleReset}
                    className="mt-6 w-full py-3 bg-[#0d5c6b] hover:bg-[#094754] text-white font-medium rounded-xl transition-all shadow-md shadow-teal-900/10"
                  >
                    Concluir
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Seu Nome Completo
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="Ex: Dra. Juliana Santos"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0d5c6b] focus:border-transparent text-sm bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        WhatsApp de Contato
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="tel"
                          required
                          placeholder="(11) 99999-9999"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0d5c6b] focus:border-transparent text-sm bg-slate-50/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        E-mail Profissional
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="email"
                          required
                          placeholder="juliana@clinica.com.br"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0d5c6b] focus:border-transparent text-sm bg-slate-50/50"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Tipo de Clínica / Consultório
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <select
                          value={formData.clinicType}
                          onChange={(e) => setFormData({ ...formData, clinicType: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0d5c6b] focus:border-transparent text-sm bg-slate-50/50 text-slate-700"
                        >
                          <option>Multi-especialidades</option>
                          <option>Psicologia / Terapia</option>
                          <option>Medicina Geral / Especialista</option>
                          <option>Odontologia</option>
                          <option>Fisioterapia / Estética</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Número de Profissionais
                      </label>
                      <select
                        value={formData.doctorsCount}
                        onChange={(e) => setFormData({ ...formData, doctorsCount: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0d5c6b] focus:border-transparent text-sm bg-slate-50/50 text-slate-700"
                      >
                        <option>1 profissional (Consultório)</option>
                        <option>2 a 5 profissionais</option>
                        <option>6 a 15 profissionais</option>
                        <option>Mais de 15 (Rede/Hospital)</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-[#0d5c6b] hover:bg-[#0a4956] text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-teal-900/15 hover:shadow-xl transition-all group"
                    >
                      <span>Agendar Demonstração Gratuita</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    <p className="text-center text-[11px] text-slate-400 mt-2">
                      🔒 Seus dados estão 100% seguros de acordo com a LGPD.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
