"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Calendar,
  CheckCircle2,
  Sparkles,
  Building2,
  User,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";
import confetti from "canvas-confetti";
import { CONTACT_CONFIG } from "@/lib/constants";
import { BRAND } from "@/lib/brand";

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
    doctorsCount: "2 a 5 profissionais",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = [
      `Olá! Quero agendar uma demonstração da ${BRAND.name} e conhecer o teste de 14 dias.`,
      "",
      `Nome: ${formData.name}`,
      `WhatsApp: ${formData.phone}`,
      `E-mail: ${formData.email}`,
      `Tipo de clínica: ${formData.clinicType}`,
      `Profissionais: ${formData.doctorsCount}`,
    ].join("\n");

    window.open(CONTACT_CONFIG.getWhatsAppUrl(message), "_blank", "noopener,noreferrer");

    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#0D3B44", "#145C69", "#FFFFFF", "#D4E0E3"],
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      clinicType: "Multi-especialidades",
      doctorsCount: "2 a 5 profissionais",
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
            className="relative w-full max-w-lg bg-ja-card rounded-3xl shadow-2xl border border-ja-line overflow-hidden z-10"
          >
            <div className="bg-ja-brand p-6 text-white relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-white/80 mb-2 border border-white/10">
                <Sparkles className="w-3.5 h-3.5" />
                Demonstração gratuita · 14 dias de teste
              </div>
              <h3 className="text-2xl font-bold text-white font-display">
                Veja a {BRAND.name} em ação
              </h3>
              <p className="text-white/70 text-sm mt-1">
                Apresentação de 15 minutos sem compromisso. Depois, se fizer sentido, você testa a plataforma por 14 dias.
              </p>
            </div>

            <div className="p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-ja-ink font-display">
                    Abrimos o WhatsApp para você
                  </h4>
                  <p className="text-ja-muted text-sm mt-2 max-w-sm mx-auto">
                    Obrigado, <strong className="text-ja-ink">{formData.name || "Doutor(a)"}</strong>!
                    Envie a mensagem no WhatsApp que abriu — respondemos no {CONTACT_CONFIG.phoneFormatted}.
                  </p>

                  <div className="mt-6 p-4 rounded-xl bg-ja-surface border border-ja-line text-xs text-ja-muted text-left">
                    <div className="font-semibold text-ja-ink mb-1 flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-ja-teal" />
                      O que esperar da demonstração:
                    </div>
                    <ul className="space-y-1 ml-5 list-disc">
                      <li>Tour pelos módulos que sua clínica mais precisa</li>
                      <li>Como funciona a migração de pacientes</li>
                      <li>Comparação dos planos Essencial, Profissional e Ilimitado</li>
                    </ul>
                  </div>

                  <a
                    href={CONTACT_CONFIG.getWhatsAppUrl(
                      `Olá! Sou ${formData.name || "um interessado"} e quero agendar a demonstração da ${BRAND.name}.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full min-h-11 py-3 bg-ja-surface border border-ja-line text-ja-ink font-medium rounded-xl transition-colors inline-flex items-center justify-center gap-2 hover:bg-ja-subtle"
                  >
                    <Phone className="w-4 h-4 text-ja-teal" />
                    Reabrir WhatsApp
                  </a>

                  <button
                    onClick={handleReset}
                    className="mt-3 w-full min-h-11 py-3 bg-ja-teal hover:bg-ja-dark text-white font-medium rounded-xl transition-colors"
                  >
                    Concluir
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-ja-ink uppercase tracking-wider mb-1.5">
                      Seu Nome Completo
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-ja-muted absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="Ex: Dra. Juliana Santos"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-ja-line focus:outline-none focus:ring-2 focus:ring-ja-teal focus:border-transparent text-sm bg-ja-surface text-ja-ink"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-ja-ink uppercase tracking-wider mb-1.5">
                        WhatsApp de Contato
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-ja-muted absolute left-3.5 top-3.5" />
                        <input
                          type="tel"
                          required
                          placeholder="(16) 99999-9999"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-ja-line focus:outline-none focus:ring-2 focus:ring-ja-teal focus:border-transparent text-sm bg-ja-surface text-ja-ink"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-ja-ink uppercase tracking-wider mb-1.5">
                        E-mail Profissional
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-ja-muted absolute left-3.5 top-3.5" />
                        <input
                          type="email"
                          required
                          placeholder="juliana@clinica.com.br"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-ja-line focus:outline-none focus:ring-2 focus:ring-ja-teal focus:border-transparent text-sm bg-ja-surface text-ja-ink"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-ja-ink uppercase tracking-wider mb-1.5">
                        Tipo de Clínica / Consultório
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-ja-muted absolute left-3.5 top-3.5" />
                        <select
                          value={formData.clinicType}
                          onChange={(e) => setFormData({ ...formData, clinicType: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-ja-line focus:outline-none focus:ring-2 focus:ring-ja-teal focus:border-transparent text-sm bg-ja-surface text-ja-ink"
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
                      <label className="block text-xs font-semibold text-ja-ink uppercase tracking-wider mb-1.5">
                        Número de Profissionais
                      </label>
                      <select
                        value={formData.doctorsCount}
                        onChange={(e) => setFormData({ ...formData, doctorsCount: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-ja-line focus:outline-none focus:ring-2 focus:ring-ja-teal focus:border-transparent text-sm bg-ja-surface text-ja-ink"
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
                      className="w-full min-h-11 py-3.5 px-6 rounded-xl bg-ja-teal hover:bg-ja-dark text-white font-semibold flex items-center justify-center gap-2 transition-colors group"
                    >
                      <span>Continuar no WhatsApp</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    <p className="text-center text-[11px] text-ja-muted mt-2">
                      Seus dados seguem para o comercial no WhatsApp {CONTACT_CONFIG.phoneFormatted}. Também pelo e-mail {CONTACT_CONFIG.email}.
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
