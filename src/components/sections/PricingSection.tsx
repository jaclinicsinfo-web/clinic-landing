"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Minus,
  Sparkles,
  ShieldCheck,
  Zap,
  Building,
  Building2,
  Layers,
  HelpCircle,
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
      accentColor: "border-slate-200",
      buttonStyle: "bg-slate-900 hover:bg-slate-800 text-white",
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
      accentColor: "border-[#0d5c6b] ring-2 ring-[#0d5c6b]/30 shadow-2xl",
      buttonStyle: "bg-gradient-to-r from-[#0d5c6b] to-[#094754] hover:from-[#094754] hover:to-[#07363f] text-white shadow-lg shadow-teal-900/25",
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
      accentColor: "border-slate-800 bg-gradient-to-b from-white to-teal-50/20",
      buttonStyle: "bg-[#0c3f4a] hover:bg-[#07242b] text-white shadow-md shadow-teal-950/20",
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
    <section id="planos" className="py-24 bg-gradient-to-b from-[#f8fafc] to-[#eef5f6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 text-[#0d5c6b] border border-teal-200 text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" />
            Transparência Sem Letras Miúdas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Planos sob medida para a sua clínica crescer
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Escolha o pacote ideal para a estrutura da sua equipe. Todos os planos contam com suporte especializado e migração assistida.
          </p>

          {/* Billing Cycle Toggle Switch */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-full bg-slate-200/80 border border-slate-300/80 backdrop-blur-md">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                !isAnnual
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                isAnnual
                  ? "bg-[#0d5c6b] text-white shadow-md shadow-teal-900/20"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>Anual</span>
              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-400 text-slate-900">
                Economize 20%
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
                className={`bg-white rounded-3xl p-7 sm:p-8 border flex flex-col justify-between relative transition-all duration-300 ${
                  plan.accentColor
                } ${plan.highlight ? "scale-100 lg:-translate-y-3 z-10" : "hover:shadow-lg"}`}
              >
                {/* Highlight Badge */}
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-xs font-black uppercase tracking-wider shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-slate-950" />
                    {plan.badge}
                  </div>
                )}

                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-900 font-display">
                      {plan.name}
                    </h3>
                    {!plan.highlight && (
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-600 mt-2 min-h-[36px]">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="mt-5 pb-5 border-b border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
                        {price}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">{plan.period}</span>
                    </div>
                    {isAnnual && (
                      <div className="text-[11px] text-emerald-600 font-semibold mt-1">
                        Cobrado anualmente (2 meses grátis)
                      </div>
                    )}
                  </div>

                  {/* Capacity Limit Box */}
                  <div className="mt-5 p-3 rounded-xl bg-teal-50/70 border border-teal-100/80 text-xs font-bold text-[#0d5c6b] flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#0d5c6b] shrink-0" />
                    <span>Limite: {plan.limit}</span>
                  </div>

                  {/* Features Checklist */}
                  <div className="mt-6 space-y-3.5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Recursos Inclusos:
                    </div>

                    {plan.features.map((feat) => (
                      <div
                        key={feat.name}
                        className={`flex items-start gap-3 text-xs ${
                          feat.included ? "text-slate-800" : "text-slate-400 opacity-60"
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            feat.included
                              ? "bg-emerald-100 text-emerald-700 font-bold"
                              : "bg-slate-100 text-slate-400"
                          }`}
                        >
                          {feat.included ? (
                            <Check className="w-3.5 h-3.5" />
                          ) : (
                            <Minus className="w-3.5 h-3.5" />
                          )}
                        </div>
                        <div>
                          <strong className={feat.included ? "text-slate-900" : "text-slate-400 line-through font-normal"}>
                            {feat.name}
                          </strong>
                          <p className="text-[11px] text-slate-500">{feat.desc}</p>
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
                  <p className="text-center text-[11px] text-slate-400 mt-2.5">
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs font-bold shadow-sm transition-all"
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
              className="mt-8 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl overflow-x-auto"
            >
              <table className="w-full text-left text-xs min-w-[600px]">
                <thead>
                  <tr className="border-b-2 border-slate-200 text-slate-900 text-sm">
                    <th className="pb-4 font-bold">Recurso / Módulo</th>
                    <th className="pb-4 font-bold text-center">Essencial (R$ 300)</th>
                    <th className="pb-4 font-bold text-center text-[#0d5c6b]">Profissional (R$ 700)</th>
                    <th className="pb-4 font-bold text-center">Ilimitado (R$ 1.200)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr>
                    <td className="py-3 font-semibold">Limite de Contas / Usuários</td>
                    <td className="py-3 text-center">Até 5</td>
                    <td className="py-3 text-center font-bold text-[#0d5c6b]">Até 20</td>
                    <td className="py-3 text-center font-bold text-emerald-600">Sem teto (Ilimitado)</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold">Unidades / Filiais</td>
                    <td className="py-3 text-center">1 unidade</td>
                    <td className="py-3 text-center font-bold text-[#0d5c6b]">Várias unidades</td>
                    <td className="py-3 text-center font-bold text-emerald-600">Ilimitadas</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold">Agenda Médica & Prontuário LGPD</td>
                    <td className="py-3 text-center text-emerald-600 font-bold">✓ Incluso</td>
                    <td className="py-3 text-center text-emerald-600 font-bold">✓ Incluso</td>
                    <td className="py-3 text-center text-emerald-600 font-bold">✓ Incluso</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold">Contas a Pagar / Receber e Fluxo de Caixa</td>
                    <td className="py-3 text-center text-slate-300">—</td>
                    <td className="py-3 text-center text-emerald-600 font-bold">✓ Incluso</td>
                    <td className="py-3 text-center text-emerald-600 font-bold">✓ Incluso</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold">Faturamento de Lotes de Convênio (TISS)</td>
                    <td className="py-3 text-center text-slate-300">—</td>
                    <td className="py-3 text-center text-emerald-600 font-bold">✓ Incluso</td>
                    <td className="py-3 text-center text-emerald-600 font-bold">✓ Incluso</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold">Relatórios de Faturamento & Inadimplência</td>
                    <td className="py-3 text-center text-slate-300">—</td>
                    <td className="py-3 text-center text-emerald-600 font-bold">✓ Incluso</td>
                    <td className="py-3 text-center text-emerald-600 font-bold">✓ Incluso</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold">Estoque Clínico com Alerta de Mínimo</td>
                    <td className="py-3 text-center text-slate-300">—</td>
                    <td className="py-3 text-center text-emerald-600 font-bold">✓ Incluso</td>
                    <td className="py-3 text-center text-emerald-600 font-bold">✓ Incluso</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold">Lembretes Automáticos WhatsApp</td>
                    <td className="py-3 text-center text-slate-300">—</td>
                    <td className="py-3 text-center text-slate-300">—</td>
                    <td className="py-3 text-center text-emerald-600 font-bold">✓ Incluso</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold">Conector Power BI</td>
                    <td className="py-3 text-center text-slate-300">—</td>
                    <td className="py-3 text-center text-slate-300">—</td>
                    <td className="py-3 text-center text-emerald-600 font-bold">✓ Incluso</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold">Agente de IA (Copiloto Clínico)</td>
                    <td className="py-3 text-center text-slate-300">—</td>
                    <td className="py-3 text-center text-slate-300">—</td>
                    <td className="py-3 text-center text-indigo-600 font-bold">✓ Incluso</td>
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
