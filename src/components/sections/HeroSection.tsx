"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Calendar,
  Clock,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Zap,
  ArrowRight,
  Bot,
  Users,
  DollarSign,
  Activity,
  Play,
  HeartHandshake,
  MessageCircle,
  Award,
} from "lucide-react";

interface HeroSectionProps {
  onOpenDemo: () => void;
}

export function HeroSection({ onOpenDemo }: HeroSectionProps) {
  const [activeTab, setActiveTab] = useState<"agenda" | "financeiro" | "ia">("agenda");
  const [appointmentStatus, setAppointmentStatus] = useState<string>("Confirmado");

  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#e7f2f4]/60 via-[#f8fafc] to-[#f8fafc]">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-10 left-1/4 w-[500px] h-[350px] bg-gradient-to-tr from-[#0d5c6b]/15 to-[#2a9d8f]/10 rounded-full blur-3xl" />
        <div className="absolute top-32 right-1/4 w-[450px] h-[300px] bg-gradient-to-bl from-[#e9c46a]/15 to-[#0d5c6b]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Pill / Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-teal-200/80 text-xs font-semibold text-[#0d5c6b] mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 -ml-3" />
            <span className="font-bold">Clinic Manager 3.0</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600 font-medium flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-500" />
              Gestão Clínica com Agente de IA & WhatsApp Integrado
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] font-display"
          >
            A plataforma definitiva para clínicas que buscam{" "}
            <span className="bg-gradient-to-r from-[#0d5c6b] via-[#2a9d8f] to-[#147a8d] bg-clip-text text-transparent underline decoration-[#e9c46a]/60 decoration-wavy decoration-2">
              excelência operacional
            </span>{" "}
            e alta rentabilidade.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            Centralize <strong>agenda inteligente</strong>, <strong>prontuário eletrônico LGPD</strong>, <strong>faturamento de convênios TISS</strong>, <strong>fluxo financeiro</strong> e <strong>lembretes por WhatsApp</strong> em um único ecossistema fluido e sem complexidade.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#0d5c6b] to-[#0a4956] hover:from-[#094754] hover:to-[#07363f] text-white font-bold text-base flex items-center justify-center gap-3 shadow-xl shadow-teal-900/20 hover:shadow-2xl hover:scale-[1.02] transition-all group active:scale-95"
            >
              <span>Experimentar Grátis por 14 Dias</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 text-teal-300" />
            </button>

            <a
              href="#planos"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-base border border-slate-200 shadow-sm flex items-center justify-center gap-2 transition-all hover:border-slate-300"
            >
              <span>Ver Tabela de Planos</span>
            </a>
          </motion.div>

          {/* Trust Value Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs font-semibold text-slate-500"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Sem taxa de instalação
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#0d5c6b]" />
              Conformidade LGPD & CFM/CFP
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-500" />
              Setup rápido em menos de 24h
            </span>
            <span className="flex items-center gap-1.5">
              <HeartHandshake className="w-4 h-4 text-rose-500" />
              Suporte VIP humanizado
            </span>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* Interactive Dashboard Mockup & Live Experience Showcase */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="mt-14 relative max-w-5xl mx-auto"
        >
          {/* Decorative Backing Frame */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-[#0d5c6b] via-[#2a9d8f] to-[#e9c46a] rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 -z-10" />

          {/* Main Dashboard Window */}
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden">
            {/* Window Browser Header */}
            <div className="bg-slate-900 px-4 py-3 flex items-center justify-between text-slate-400 text-xs border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-3 font-mono text-[11px] text-slate-400 hidden sm:inline">
                  https://app.clinicmanager.com.br/dashboard
                </span>
              </div>

              {/* Live Interactive Tab Switcher in the browser bar */}
              <div className="flex items-center gap-1 bg-slate-800 p-0.5 rounded-lg">
                <button
                  onClick={() => setActiveTab("agenda")}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                    activeTab === "agenda"
                      ? "bg-[#0d5c6b] text-white"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Agenda ao Vivo
                </button>
                <button
                  onClick={() => setActiveTab("financeiro")}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                    activeTab === "financeiro"
                      ? "bg-[#0d5c6b] text-white"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Financeiro TISS
                </button>
                <button
                  onClick={() => setActiveTab("ia")}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-colors flex items-center gap-1 ${
                    activeTab === "ia"
                      ? "bg-indigo-600 text-white"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  Agente IA
                </button>
              </div>
            </div>

            {/* Dashboard Inner Body */}
            <div className="p-4 sm:p-6 bg-[#f8fafc]">
              {/* Top Quick Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-5">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-sm">
                  <div className="flex items-center justify-between text-slate-500 text-xs">
                    <span>Consultas Hoje</span>
                    <Calendar className="w-4 h-4 text-[#0d5c6b]" />
                  </div>
                  <div className="text-xl font-bold text-slate-900 mt-1 font-display">28 atendimentos</div>
                  <div className="text-[11px] text-emerald-600 font-semibold mt-0.5 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> 96% de presença confirmada
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-sm">
                  <div className="flex items-center justify-between text-slate-500 text-xs">
                    <span>Receita do Mês</span>
                    <DollarSign className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="text-xl font-bold text-slate-900 mt-1 font-display">R$ 54.890</div>
                  <div className="text-[11px] text-emerald-600 font-semibold mt-0.5">
                    +24% vs mês anterior
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-sm">
                  <div className="flex items-center justify-between text-slate-500 text-xs">
                    <span>No-Show (Faltas)</span>
                    <Activity className="w-4 h-4 text-amber-500" />
                  </div>
                  <div className="text-xl font-bold text-emerald-700 mt-1 font-display">3.8%</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    (Média nacional: 25%)
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-sm">
                  <div className="flex items-center justify-between text-slate-500 text-xs">
                    <span>Lembretes WhatsApp</span>
                    <MessageCircle className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="text-xl font-bold text-slate-900 mt-1 font-display">142 enviados</div>
                  <div className="text-[11px] text-teal-700 font-medium mt-0.5">
                    100% automatizados
                  </div>
                </div>
              </div>

              {/* Dynamic Tab Content */}
              {activeTab === "agenda" && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {/* Interactive Agenda Card */}
                  <div className="lg:col-span-2 bg-white rounded-xl p-4 sm:p-5 border border-slate-200 shadow-sm">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[#0d5c6b]" />
                          Grade de Atendimentos — Sala 02 (Dra. Helena Vaz)
                        </h4>
                        <p className="text-xs text-slate-500">
                          Horários sincronizados em tempo real com WhatsApp e Recepção
                        </p>
                      </div>
                      <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-semibold">
                        Ao Vivo
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {/* Item 1 - Interactive */}
                      <div className="p-3 rounded-xl bg-teal-50/50 border border-teal-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#0d5c6b] text-white flex items-center justify-center font-bold text-xs">
                            MC
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 flex items-center gap-2">
                              Marcos Castro
                              <span className="px-2 py-0.5 rounded-md bg-white text-teal-800 text-[10px] font-semibold border border-teal-200">
                                Unimed · Consulta Geral
                              </span>
                            </div>
                            <div className="text-[11px] text-slate-500 flex items-center gap-2 mt-0.5">
                              <span>🕒 14:00 - 14:45</span>
                              <span>•</span>
                              <span>Prontuário #4092</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="text-xs font-semibold text-slate-600">Status:</div>
                          <select
                            value={appointmentStatus}
                            onChange={(e) => setAppointmentStatus(e.target.value)}
                            aria-label="Status do atendimento de Marcos Castro"
                            className={`text-xs font-bold px-2.5 py-1 rounded-lg border focus:outline-none transition-colors ${
                              appointmentStatus === "Confirmado"
                                ? "bg-emerald-100 text-emerald-800 border-emerald-300"
                                : appointmentStatus === "Em Atendimento"
                                ? "bg-blue-100 text-blue-800 border-blue-300"
                                : appointmentStatus === "Finalizado"
                                ? "bg-slate-100 text-slate-700 border-slate-300"
                                : "bg-amber-100 text-amber-800 border-amber-300"
                            }`}
                          >
                            <option value="Confirmado">✅ Confirmado (Zap)</option>
                            <option value="Em Espera">⏳ Na Recepção</option>
                            <option value="Em Atendimento">🩺 Em Consulta</option>
                            <option value="Finalizado">🏁 Concluído</option>
                          </select>
                        </div>
                      </div>

                      {/* Item 2 */}
                      <div className="p-3 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 opacity-90">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xs">
                            AS
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 flex items-center gap-2">
                              Aline Silveira
                              <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-semibold">
                                Particular · PIX Pago
                              </span>
                            </div>
                            <div className="text-[11px] text-slate-500 flex items-center gap-2 mt-0.5">
                              <span>🕒 15:00 - 15:50</span>
                              <span>•</span>
                              <span>Sessão Terapia #12</span>
                            </div>
                          </div>
                        </div>

                        <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold self-start sm:self-auto">
                          ✅ Confirmado (WhatsApp)
                        </span>
                      </div>

                      {/* Item 3 */}
                      <div className="p-3 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 opacity-75">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-xs">
                            RF
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 flex items-center gap-2">
                              Rodrigo Ferreira
                              <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-semibold">
                                Bradesco Saúde · Retorno
                              </span>
                            </div>
                            <div className="text-[11px] text-slate-500 flex items-center gap-2 mt-0.5">
                              <span>🕒 16:00 - 16:30</span>
                              <span>•</span>
                              <span>Anamnese Atualizada</span>
                            </div>
                          </div>
                        </div>

                        <span className="px-2.5 py-1 rounded-lg bg-teal-50 text-[#0d5c6b] border border-teal-200 text-xs font-semibold self-start sm:self-auto">
                          💬 Lembrete Enviado
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Bot Real-time Feed Simulation */}
                  <div className="bg-gradient-to-b from-[#0c3f4a] to-[#07242b] rounded-xl p-4 text-white flex flex-col justify-between shadow-sm">
                    <div>
                      <div className="flex items-center justify-between border-b border-teal-800/80 pb-3 mb-3">
                        <div className="flex items-center gap-2">
                          <MessageCircle className="w-4 h-4 text-emerald-400" />
                          <span className="font-bold text-xs">Robô WhatsApp Ativo</span>
                        </div>
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      </div>

                      <div className="space-y-2.5 text-xs">
                        <div className="bg-teal-900/60 p-2.5 rounded-xl border border-teal-700/50">
                          <div className="text-[10px] text-emerald-300 font-semibold">
                            Lembrete automático · 13:42
                          </div>
                          <p className="text-teal-100 mt-1">
                            &quot;Olá Marcos! Confirmamos sua consulta hoje às 14h com Dra. Helena?&quot;
                          </p>
                        </div>

                        <div className="bg-emerald-950/70 p-2.5 rounded-xl border border-emerald-600/40 text-emerald-200">
                          <div className="text-[10px] text-emerald-400 font-semibold">
                            Resposta do Paciente · 13:45
                          </div>
                          <p className="mt-1 font-medium">&quot;Sim, já estou a caminho!&quot;</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-teal-800/80 flex items-center justify-between text-[11px] text-teal-200">
                      <span>Status da Recepção:</span>
                      <span className="font-bold text-emerald-300">Grade 100% Sincronizada</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "financeiro" && (
                <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-100">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">
                        Conciliação Financeira & Faturamento de Lotes TISS
                      </h4>
                      <p className="text-xs text-slate-500">
                        Zero glosas com validação prévia de carteirinhas e guias de autorização
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold rounded-lg">
                        Lote #08/2026 Aprovado
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs text-slate-500">Convênios a Faturar</div>
                      <div className="text-2xl font-bold text-slate-900 mt-1 font-display">R$ 38.450,00</div>
                      <div className="text-[11px] text-slate-600 mt-1">42 guias TISS prontas para envio XML</div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs text-slate-500">Particular & PIX Instantâneo</div>
                      <div className="text-2xl font-bold text-emerald-600 mt-1 font-display">R$ 16.440,00</div>
                      <div className="text-[11px] text-emerald-700 mt-1">100% conciliado automaticamente</div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs text-slate-500">Repasses Médicos Programados</div>
                      <div className="text-2xl font-bold text-[#0d5c6b] mt-1 font-display">R$ 27.180,00</div>
                      <div className="text-[11px] text-slate-600 mt-1">Cálculo de comissões por profissional</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "ia" && (
                <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-[#0c3f4a] rounded-xl p-5 text-white shadow-sm">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-indigo-800/60">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-300">
                        <Bot className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-white flex items-center gap-2">
                          Clinic AI Assistant
                          <span className="px-2 py-0.5 rounded-md bg-indigo-500/30 text-indigo-200 text-[10px] font-semibold border border-indigo-400/30">
                            Modelo Clínico Especializado
                          </span>
                        </h4>
                        <p className="text-xs text-indigo-200">
                          Sumarização de prontuários, transcrição de áudio e insights operacionais
                        </p>
                      </div>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-400/30">
                      Pronto para Análise
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-slate-800/80 border border-indigo-700/40 text-xs">
                      <div className="text-indigo-300 font-semibold mb-1 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        Sumarização de Evolução Clínica (Consulta de 45 min):
                      </div>
                      <p className="text-slate-200 leading-relaxed">
                        &quot;Paciente relata melhora de 60% nos episódios de ansiedade após introdução do protocolo comportamental. Sono regularizado. Prescrição de apoio mantida por mais 30 dias. Próximo retorno agendado em 4 semanas.&quot;
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-[11px] text-indigo-200">
                      <span className="px-3 py-1 rounded-lg bg-indigo-900/50 border border-indigo-700/50">
                        ⚡ Economia de 8 minutos por atendimento
                      </span>
                      <span className="px-3 py-1 rounded-lg bg-indigo-900/50 border border-indigo-700/50">
                        🔒 Sem compartilhamento externo de dados
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Floating Callout Badges with Dynamic Micro-animations */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -left-6 sm:-left-8 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-200/80 hidden md:flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">-85% Faltas e No-Show</div>
              <div className="text-[10px] text-slate-500">Confirmação automática no WhatsApp</div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -right-6 sm:-right-8 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-200/80 hidden md:flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0d5c6b]/10 text-[#0d5c6b] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">100% Seguro & LGPD</div>
              <div className="text-[10px] text-slate-500">Criptografia bancária de ponta a ponta</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
