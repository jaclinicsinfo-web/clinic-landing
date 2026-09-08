"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  Calendar,
  DollarSign,
  BarChart3,
  Boxes,
  MessageSquare,
  Sparkles,
  PieChart,
  BellRing,
  Bot,
} from "lucide-react";

export function ModulesBentoSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="modulos" className="py-24 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      {/* Background accents */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 text-[#0d5c6b] border border-teal-200 text-xs font-bold uppercase tracking-wider mb-3">
            <Boxes className="w-3.5 h-3.5" />
            Arquitetura Modular Completa
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Tudo o que sua clínica precisa para{" "}
            <span className="text-[#0d5c6b]">
              operar no piloto profissional
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Chega de sistemas lentos e planilhas desconexas. Conheça os módulos integrados que aceleram do agendamento ao fechamento.
          </p>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {/* Card 1 (Large - 2 cols) : Núcleo Operacional */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white to-teal-50/40 rounded-3xl p-7 sm:p-8 border border-teal-100 shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-[#0d5c6b] text-white flex items-center justify-center shadow-md shadow-teal-900/20">
                <Calendar className="w-6 h-6 text-teal-200" />
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-teal-100/70 text-[#0d5c6b]">
                Módulo Essencial
              </span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mt-5 font-display">
              Núcleo Operacional & Agenda Inteligente
            </h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Agenda visual com filtros por profissional, especialidade e sala. Prontuário eletrônico completo, anamnese personalizável, histórico de consultas e total conformidade com a LGPD.
            </p>

            {/* Interactive mini-preview */}
            <div className="mt-6 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-2">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100">
                <span className="font-bold text-slate-700">Agenda de Hoje · 8 Profissionais</span>
                <span className="text-emerald-600 font-semibold">100% Sincronizada</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2.5 rounded-xl bg-teal-50 text-[#0d5c6b] font-semibold">
                  <div className="text-base font-bold text-slate-900">24</div>
                  <div className="text-[10px] text-slate-500">Agendados</div>
                </div>
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 font-semibold">
                  <div className="text-base font-bold text-emerald-600">19</div>
                  <div className="text-[10px] text-slate-500">Confirmados</div>
                </div>
                <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700 font-semibold">
                  <div className="text-base font-bold text-slate-900">0</div>
                  <div className="text-[10px] text-slate-500">Faltas</div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600">
              <span className="px-2.5 py-1 rounded-lg bg-slate-100 font-medium">✓ Bloqueio de Feriados</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-100 font-medium">✓ Encaixes Inteligentes</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-100 font-medium">✓ Telemedicina Integrada</span>
            </div>
          </motion.div>

          {/* Card 2 (Large - 2 cols) : Financeiro & Lotes de Convênios */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-1 lg:col-span-2 bg-gradient-to-br from-white to-slate-50 rounded-3xl p-7 sm:p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shadow-md shadow-emerald-900/20">
                <DollarSign className="w-6 h-6 text-emerald-200" />
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
                TISS & Convênios
              </span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mt-5 font-display">
              Financeiro Completo & Faturamento de Lotes
            </h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Gestão rigorosa de fluxo de caixa, contas a pagar/receber, emissão de cobranças com QR Code PIX automático e envio de lotes TISS sem glosas.
            </p>

            {/* Financial Preview snippet */}
            <div className="mt-6 p-4 rounded-2xl bg-slate-900 text-white shadow-xs">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-slate-400">Fluxo de Caixa Mensal</span>
                <span className="text-emerald-400 font-bold">+18.4% de margem</span>
              </div>
              <div className="text-2xl font-black font-display text-white">R$ 148.920,00</div>
              <div className="mt-2 text-[11px] text-slate-300 flex items-center justify-between">
                <span>Guias TISS validadas: 100%</span>
                <span className="text-emerald-400 font-semibold">Repasses automatizados</span>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600">
              <span className="px-2.5 py-1 rounded-lg bg-slate-100 font-medium">✓ Conciliação Bancária</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-100 font-medium">✓ Tabela CBHPM / TUSS</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-100 font-medium">✓ DRE em Tempo Real</span>
            </div>
          </motion.div>

          {/* Card 3 (1 col) : Lembretes por WhatsApp */}
          <motion.div
            variants={cardVariants}
            className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 font-display">
                Lembretes no WhatsApp
              </h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Mensagens automáticas de confirmação com resposta direta. Se o paciente desmarcar, a vaga é liberada automaticamente na agenda.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-emerald-700 font-bold text-xs">
              <span>✓ Redução de 85% no no-show</span>
            </div>
          </motion.div>

          {/* Card 4 (1 col) : Estoque Clínico */}
          <motion.div
            variants={cardVariants}
            className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-11 h-11 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                <Boxes className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 font-display">
                Estoque & Suprimentos
              </h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Controle de medicamentos, descartáveis e insumos por lote e validade. Alertas automáticos antes do estoque crítico acabar.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-amber-700 font-bold text-xs">
              <BellRing className="w-4 h-4" />
              Alerta de mínimo inteligente
            </div>
          </motion.div>

          {/* Card 5 (1 col) : Relatórios & Analytics */}
          <motion.div
            variants={cardVariants}
            className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-11 h-11 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 font-display">
                Relatórios Gerenciais
              </h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Indicadores de produtividade médica, ticket médio por especialidade, taxa de retorno e índice de inadimplência em 1 clique.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-blue-700 font-bold text-xs">
              <PieChart className="w-4 h-4" />
              Exportação em PDF & Excel
            </div>
          </motion.div>

          {/* Card 6 (1 col - Highlight) : Agente de IA & Power BI */}
          <motion.div
            variants={cardVariants}
            className="bg-gradient-to-br from-indigo-950 to-slate-900 rounded-3xl p-6 text-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-11 h-11 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 flex items-center justify-center mb-4">
                <Bot className="w-5 h-5" />
              </div>
              <div className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-300/30 mb-2">
                <Sparkles className="w-3 h-3" /> Exclusivo Ilimitado
              </div>
              <h4 className="text-lg font-bold font-display text-white">
                Métricas da Clínica & Power BI
              </h4>
              <p className="text-xs text-indigo-200 mt-2 leading-relaxed">
                Dashboards executivos com indicadores vitais em tempo real: taxa de no-show, faturamento por convênio, ticket médio, ocupação de salas e DRE integrado.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-indigo-800/60 flex items-center gap-1.5 text-emerald-300 font-bold text-xs">
              <span>⚡ Inteligência Clínica Ativa</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
