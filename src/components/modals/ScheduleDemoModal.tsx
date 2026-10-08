"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Sparkles,
  Building2,
  User,
  Mail,
  Phone,
  ArrowRight,
  Layers,
} from "lucide-react";
import { BRAND } from "@/lib/brand";
import { PLANOS, type PlanoComercial } from "@/lib/planos";

interface ScheduleDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function planoPeloPorte(quantidade: string): PlanoComercial["codigo"] {
  if (quantidade.startsWith("1 ")) return "essencial";
  if (quantidade.startsWith("6") || quantidade.startsWith("Mais")) return "ilimitado";
  return "profissional";
}

export function ScheduleDemoModal({ isOpen, onClose }: ScheduleDemoModalProps) {
  const router = useRouter();
  const [planoManual, setPlanoManual] = useState(false);
  const [plano, setPlano] = useState<PlanoComercial["codigo"]>("profissional");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    clinicType: "Multi-especialidades",
    doctorsCount: "2 a 5 profissionais",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({ plano, modo: "gratuito" });
    if (formData.name.trim()) params.set("nome", formData.name.trim());
    if (formData.email.trim()) params.set("email", formData.email.trim());
    if (formData.phone.trim()) params.set("telefone", formData.phone.trim());
    onClose();
    router.push(`/assinar?${params.toString()}`);
  };

  function mudarPorte(quantidade: string) {
    setFormData((atual) => ({ ...atual, doctorsCount: quantidade }));
    if (!planoManual) setPlano(planoPeloPorte(quantidade));
  }

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
                Demonstração gratuita · 7 dias de teste
              </div>
              <h3 className="text-2xl font-bold text-white font-display">
                Veja a {BRAND.name} em ação
              </h3>
              <p className="text-white/70 text-sm mt-1">
                São 7 dias no plano escolhido, sem cartão. A senha do administrador chega por e-mail.
              </p>
            </div>

            <div className="p-6 sm:p-8">
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
                        onChange={(e) => mudarPorte(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-ja-line focus:outline-none focus:ring-2 focus:ring-ja-teal focus:border-transparent text-sm bg-ja-surface text-ja-ink"
                      >
                        <option>1 profissional (Consultório)</option>
                        <option>2 a 5 profissionais</option>
                        <option>6 a 15 profissionais</option>
                        <option>Mais de 15 (Rede/Hospital)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-ja-ink uppercase tracking-wider mb-1.5">
                      Plano do teste
                    </label>
                    <div className="relative">
                      <Layers className="w-4 h-4 text-ja-muted absolute left-3.5 top-3.5" />
                      <select
                        value={plano}
                        onChange={(e) => {
                          setPlanoManual(true);
                          setPlano(e.target.value as PlanoComercial["codigo"]);
                        }}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-ja-line focus:outline-none focus:ring-2 focus:ring-ja-teal focus:border-transparent text-sm bg-ja-surface text-ja-ink"
                      >
                        {PLANOS.map((item) => (
                          <option key={item.codigo} value={item.codigo}>
                            {item.nome}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full min-h-11 py-3.5 px-6 rounded-xl bg-ja-teal hover:bg-ja-dark text-white font-semibold flex items-center justify-center gap-2 transition-colors group"
                    >
                      <span>Começar 7 dias grátis</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    <p className="text-center text-[11px] text-ja-muted mt-2">
                      O próximo passo abre a clínica no teste. Sem cartão.
                    </p>
                  </div>
                </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
