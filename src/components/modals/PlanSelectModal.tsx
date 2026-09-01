"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, ShieldCheck, Sparkles, ArrowRight, Phone, MessageSquare, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

interface PlanSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  planPrice: string;
  planLimit: string;
  isAnnual?: boolean;
}

export function PlanSelectModal({
  isOpen,
  onClose,
  planName,
  planPrice,
  planLimit,
  isAnnual = false,
}: PlanSelectModalProps) {
  const [step, setStep] = useState<"form" | "confirmed">("form");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    clinicName: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("confirmed");
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 },
      colors: ["#0d5c6b", "#2a9d8f", "#e9c46a", "#3b82f6"],
    });
  };

  const handleFinish = () => {
    setStep("form");
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

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10"
          >
            {/* Plan Header Accent */}
            <div className="bg-gradient-to-r from-[#0c3f4a] to-[#0d5c6b] p-6 text-white relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2">
                <span className="px-3 py-0.5 rounded-full bg-teal-400/20 text-teal-200 border border-teal-300/30 text-xs font-semibold uppercase tracking-wider">
                  Plano Selecionado
                </span>
                {isAnnual && (
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-200 border border-amber-300/30 text-xs font-semibold">
                    Economia Anual (2 meses off)
                  </span>
                )}
              </div>

              <div className="mt-3 flex items-baseline justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">{planName}</h3>
                  <p className="text-xs text-teal-200 mt-0.5">{planLimit}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-extrabold text-white">{planPrice}</div>
                  <div className="text-xs text-teal-200">sem taxa de adesão</div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              {step === "confirmed" ? (
                <div className="text-center py-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800">
                    Conta em processo de ativação!
                  </h4>
                  <p className="text-slate-600 text-sm mt-2 max-w-sm mx-auto">
                    Excelente escolha, <strong className="text-slate-800">{formData.name}</strong>! Preparamos seu ambiente para o <strong>{planName}</strong>.
                  </p>

                  <div className="mt-6 p-4 rounded-2xl bg-teal-50/70 border border-teal-100 text-xs text-teal-900 text-left space-y-2">
                    <div className="flex items-center gap-2 font-semibold text-[#0d5c6b]">
                      <ShieldCheck className="w-4 h-4" />
                      Garantia Incondicional de 14 dias
                    </div>
                    <p className="text-slate-600">
                      Você pode testar todos os recursos na prática. Se não se adaptar, devolvemos 100% do seu investimento sem burocracia.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <a
                      href={`https://wa.me/5511999999999?text=Ol%C3%A1%2C%20acabei%20de%20selecionar%20o%20${encodeURIComponent(planName)}%20no%20site%20para%20minha%20cl%C3%ADnica%20(${encodeURIComponent(formData.clinicName)})`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-md"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Falar com Consultor no WhatsApp
                    </a>
                    <button
                      onClick={handleFinish}
                      className="py-3 px-5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium text-sm transition-all"
                    >
                      Concluir
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Nome do Responsável
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. Carlos Eduardo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0d5c6b] focus:border-transparent text-sm bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Nome da Clínica ou Consultório
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Clínica Integra Saúde"
                      value={formData.clinicName}
                      onChange={(e) => setFormData({ ...formData, clinicName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0d5c6b] focus:border-transparent text-sm bg-slate-50/50"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        WhatsApp (para ativação rápida)
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(11) 98888-7777"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0d5c6b] focus:border-transparent text-sm bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        E-mail de Acesso
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="contato@clinicaintegra.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0d5c6b] focus:border-transparent text-sm bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-[#0d5c6b] hover:bg-[#094754] text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-teal-900/15 transition-all group text-sm"
                    >
                      <span>Continuar para Configuração da Clínica</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    <div className="mt-3 flex items-center justify-center gap-4 text-[11px] text-slate-400">
                      <span>✓ Setup guiado gratuito</span>
                      <span>✓ Migração de dados incluída</span>
                      <span>✓ Suporte VIP</span>
                    </div>
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
