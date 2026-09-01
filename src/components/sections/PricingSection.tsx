"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Minus,
  Sparkles,
  Building2,
  Zap,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface PricingSectionProps {
  onSelectPlan: (plan: { name: string; price: string; limit: string; isAnnual: boolean }) => void;
}

export function PricingSection({ onSelectPlan }: PricingSectionProps) {
  const [isAnnual, setIsAnnual] = useState(false);
  const [showMatrix, setShowMatrix] = useState(false);

  const plans = [
    {
      id: "essencial",
      name: "Plano Essencial",
      tagline: "Para consultórios de uma unidade que estão organizando a rotina.",
      limit: "Até 5 contas · 1 unidade",
      monthlyPrice: "R$ 300",
      annualPrice: "R$ 250",
      period: "/mês",
      buttonText: "Começar com o Essencial",
      highlight: false,
      badge: "Início Rápido",
      cardStyle: "bg-[#0b242d] border-teal-800/50 hover:border-teal-600/60",
      buttonStyle: "bg-teal-950 hover:bg-teal-900 text-teal-200 border border-teal-700/50",
      features: [
        { name: "Núcleo operacional", desc: "Agenda, prontuário, profissionais e LGPD", included: true },
        { name: "Financeiro completo", desc: "Contas a pagar, fluxo de caixa, lotes de convênio", included: false },
        { name: "Relatórios", desc: "Faturamento, inadimplência, produtividade", included: false },
        { name: "Estoque", desc: "Produtos, movimentação, alerta de mínimo", included: false },
        { name: "Integrações e lembretes", desc: "WhatsApp, e-mail, calendário", included: false },
        { name: "Power BI", desc: "Conector de inteligência de dados", included: false },
        { name: "Agente de IA", desc: "Copiloto clínico e sumarizador", included: false },
      ],
    },
    {
      id: "profissional",
      name: "Plano Profissional",
      tagline: "Para clínicas em crescimento, com várias unidades e convênios.",
      limit: "Até 20 contas · várias unidades",
      monthlyPrice: "R$ 700",
      annualPrice: "R$ 580",
      period: "/mês",
      buttonText: "Avançar para o Profissional",
      highlight: true,
      badge: "Mais Escolhido",
      cardStyle: "bg-gradient-to-b from-[#0d343f] to-[#0a2730] border-teal-400 shadow-2xl shadow-teal-950/80 ring-2 ring-teal-400/40",
      buttonStyle: "bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-black shadow-lg shadow-teal-950/60",
      features: [
        { name: "Núcleo operacional", desc: "Agenda, prontuário, profissionais e LGPD", included: true },
        { name: "Financeiro completo", desc: "Contas a pagar, fluxo de caixa, lotes de convênio", included: true },
        { name: "Relatórios", desc: "Faturamento, inadimplência, produtividade", included: true },
        { name: "Estoque", desc: "Produtos, movimentação, alerta de mínimo", included: true },
        { name: "Integrações e lembretes", desc: "WhatsApp, e-mail, calendário", included: false },
        { name: "Power BI", desc: "Conector de inteligência de dados", included: false },
        { name: "Agente de IA", desc: "Copiloto clínico e sumarizador", included: false },
      ],
    },
    {
      id: "ilimitado",
      name: "Plano Ilimitado",
      tagline: "Para redes de clínicas que precisam do sistema completo.",
      limit: "Contas sem teto · unidades sem teto",
      monthlyPrice: "R$ 1.200",
      annualPrice: "R$ 990",
      period: "/mês",
      buttonText: "Ir para o Ilimitado",
      highlight: false,
      badge: "Recursos Totais + IA",
      cardStyle: "bg-gradient-to-b from-[#0b242d] to-[#071920] border-indigo-500/40 hover:border-indigo-400/60",
      buttonStyle: "bg-indigo-600 hover:bg-indigo-500 text-white font-bold border border-indigo-400/40",
      features: [
        { name: "Núcleo operacional", desc: "Agenda, prontuário, profissionais e LGPD", included: true },
        { name: "Financeiro completo", desc: "Contas a pagar, fluxo de caixa, lotes de convênio", included: true },
        { name: "Relatórios", desc: "Faturamento, inadimplência, produtividade", included: true },
        { name: "Estoque", desc: "Produtos, movimentação, alerta de mínimo", included: true },
        { name: "Integrações e lembretes", desc: "WhatsApp, e-mail, calendário", included: true },
        { name: "Power BI", desc: "Conector de inteligência de dados", included: true },
        { name: "Agente de IA", desc: "Copiloto clínico e sumarizador", included: true },
      ],
    },
  ];

  return (
    <section id="planos" className="py-24 bg-gradient-to-b from-[#06161c] via-[#09222b] to-[#06161c] text-white relative border-t border-teal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-400/20 text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" />
            Transparência Sem Letras Miúdas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Planos sob medida para a sua clínica crescer
          </h2>
          <p className="mt-3 text-base sm:text-lg text-teal-100/70">
            Escolha o pacote ideal para a sua equipe. Todos os planos contam com suporte VIP e migração de dados assistida.
          </p>

          {/* Billing Cycle Toggle Switch */}
          <div className="mt-8 inline-flex items-center gap-2 p-1.5 rounded-full bg-teal-950/80 border border-teal-800/60 backdrop-blur-xl">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                !isAnnual
                  ? "bg-[#0d5c6b] text-white shadow-md shadow-teal-950/50"
                  : "text-teal-300/80 hover:text-white"
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                isAnnual
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-md shadow-emerald-950/50"
                  : "text-teal-300/80 hover:text-white"
              }`}
            >
              <span>Anual</span>
              <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-amber-400 text-slate-950">
                20% OFF
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
          {plans.map((plan, i) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`rounded-3xl p-7 sm:p-8 border flex flex-col justify-between relative transition-all duration-300 ${
                  plan.cardStyle
                } ${plan.highlight ? "scale-100 lg:-translate-y-3 z-10" : "hover:scale-[1.02]"}`}
              >
                {/* Highlight Badge */}
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    {plan.badge}
                  </div>
                )}

                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white font-display">
                      {plan.name}
                    </h3>
                    {!plan.highlight && (
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-teal-950 border border-teal-800/40 text-teal-300">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-teal-100/70 mt-2 min-h-[36px]">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="mt-5 pb-5 border-b border-teal-900/60">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
                        {price}
                      </span>
                      <span className="text-xs text-teal-300/70 font-medium">{plan.period}</span>
                    </div>
                    {isAnnual && (
                      <div className="text-[11px] text-emerald-400 font-semibold mt-1">
                        Cobrado anualmente (2 meses grátis)
                      </div>
                    )}
                  </div>

                  {/* Capacity Limit Box */}
                  <div className="mt-5 p-3 rounded-xl bg-teal-950/90 border border-teal-700/50 text-xs font-bold text-teal-200 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Limite: {plan.limit}</span>
                  </div>

                  {/* Features Checklist */}
                  <div className="mt-6 space-y-3.5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-teal-400/80">
                      Recursos Inclusos:
                    </div>

                    {plan.features.map((feat) => (
                      <div
                        key={feat.name}
                        className={`flex items-start gap-3 text-xs ${
                          feat.included ? "text-white" : "text-slate-500 opacity-50"
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            feat.included
                              ? "bg-emerald-500/20 text-emerald-400 border border-emerald-400/30"
                              : "bg-slate-900 text-slate-600"
                          }`}
                        >
                          {feat.included ? (
                            <Check className="w-3.5 h-3.5" />
                          ) : (
                            <Minus className="w-3.5 h-3.5" />
                          )}
                        </div>
                        <div>
                          <strong className={feat.included ? "text-white" : "text-slate-500 line-through font-normal"}>
                            {feat.name}
                          </strong>
                          <p className="text-[11px] text-teal-200/60">{feat.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Action */}
                <div className="mt-8 pt-4">
                  <button
                    onClick={() =>
                      onSelectPlan({
                        name: plan.name,
                        price: `${price}${plan.period}`,
                        limit: plan.limit,
                        isAnnual,
                      })
                    }
                    className={`w-full py-4 px-6 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-95 ${plan.buttonStyle}`}
                  >
                    <span>{plan.buttonText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-center text-[11px] text-teal-300/60 mt-2.5">
                    14 dias de teste · Cancele quando quiser
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Feature Comparison Matrix Toggle */}
        <div className="mt-14 text-center">
          <button
            onClick={() => setShowMatrix(!showMatrix)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-950/80 hover:bg-teal-900 text-teal-200 border border-teal-800/60 text-xs font-bold shadow-md transition-all"
          >
            <span>{showMatrix ? "Ocultar comparativo detalhado" : "Ver comparativo detalhado de recursos"}</span>
            {showMatrix ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Detailed Table Matrix */}
        <AnimatePresence>
          {showMatrix && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-8 bg-[#0b242d] rounded-3xl p-6 sm:p-8 border border-teal-800/60 shadow-2xl overflow-x-auto"
            >
              <table className="w-full text-left text-xs min-w-[600px]">
                <thead>
                  <tr className="border-b-2 border-teal-800 text-white text-sm">
                    <th className="pb-4 font-bold">Recurso / Módulo</th>
                    <th className="pb-4 font-bold text-center">Essencial (R$ 300)</th>
                    <th className="pb-4 font-bold text-center text-teal-300">Profissional (R$ 700)</th>
                    <th className="pb-4 font-bold text-center">Ilimitado (R$ 1.200)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-teal-900/40 text-teal-100/90">
                  <tr>
                    <td className="py-3.5 font-semibold">Limite de Contas / Usuários</td>
                    <td className="py-3.5 text-center">Até 5</td>
                    <td className="py-3.5 text-center font-bold text-teal-300">Até 20</td>
                    <td className="py-3.5 text-center font-bold text-emerald-400">Sem teto (Ilimitado)</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 font-semibold">Unidades / Filiais</td>
                    <td className="py-3.5 text-center">1 unidade</td>
                    <td className="py-3.5 text-center font-bold text-teal-300">Várias unidades</td>
                    <td className="py-3.5 text-center font-bold text-emerald-400">Ilimitadas</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 font-semibold">Agenda Médica & Prontuário LGPD</td>
                    <td className="py-3.5 text-center text-emerald-400 font-bold">✓ Incluso</td>
                    <td className="py-3.5 text-center text-emerald-400 font-bold">✓ Incluso</td>
                    <td className="py-3.5 text-center text-emerald-400 font-bold">✓ Incluso</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 font-semibold">Contas a Pagar / Receber e Fluxo de Caixa</td>
                    <td className="py-3.5 text-center text-slate-600">—</td>
                    <td className="py-3.5 text-center text-emerald-400 font-bold">✓ Incluso</td>
                    <td className="py-3.5 text-center text-emerald-400 font-bold">✓ Incluso</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 font-semibold">Faturamento de Lotes de Convênio (TISS)</td>
                    <td className="py-3.5 text-center text-slate-600">—</td>
                    <td className="py-3.5 text-center text-emerald-400 font-bold">✓ Incluso</td>
                    <td className="py-3.5 text-center text-emerald-400 font-bold">✓ Incluso</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 font-semibold">Relatórios de Faturamento & Inadimplência</td>
                    <td className="py-3.5 text-center text-slate-600">—</td>
                    <td className="py-3.5 text-center text-emerald-400 font-bold">✓ Incluso</td>
                    <td className="py-3.5 text-center text-emerald-400 font-bold">✓ Incluso</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 font-semibold">Estoque Clínico com Alerta de Mínimo</td>
                    <td className="py-3.5 text-center text-slate-600">—</td>
                    <td className="py-3.5 text-center text-emerald-400 font-bold">✓ Incluso</td>
                    <td className="py-3.5 text-center text-emerald-400 font-bold">✓ Incluso</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 font-semibold">Lembretes Automáticos WhatsApp</td>
                    <td className="py-3.5 text-center text-slate-600">—</td>
                    <td className="py-3.5 text-center text-slate-600">—</td>
                    <td className="py-3.5 text-center text-emerald-400 font-bold">✓ Incluso</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 font-semibold">Conector Power BI</td>
                    <td className="py-3.5 text-center text-slate-600">—</td>
                    <td className="py-3.5 text-center text-slate-600">—</td>
                    <td className="py-3.5 text-center text-emerald-400 font-bold">✓ Incluso</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 font-semibold">Agente de IA (Copiloto Clínico)</td>
                    <td className="py-3.5 text-center text-slate-600">—</td>
                    <td className="py-3.5 text-center text-slate-600">—</td>
                    <td className="py-3.5 text-center text-indigo-400 font-bold">✓ Incluso</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
