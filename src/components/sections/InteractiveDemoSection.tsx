"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  FileText,
  DollarSign,
  Bot,
  CheckCircle2,
  Clock,
  Sparkles,
  QrCode,
  Download,
  Plus,
  Search,
  UserCheck,
  ShieldCheck,
  Send,
  Stethoscope,
  Activity,
} from "lucide-react";

export function InteractiveDemoSection() {
  const [activeModule, setActiveModule] = useState<"agenda" | "prontuario" | "tiss" | "ia">("agenda");
  
  // Interactive State for Agenda demo
  const [appointments, setAppointments] = useState([
    { id: 1, name: "Mariana Oliveira", time: "09:00", type: "Consulta Inicial", conv: "Particular", status: "Confirmado", value: "R$ 280,00" },
    { id: 2, name: "Lucas Mendes", time: "10:00", type: "Retorno Clínico", conv: "Unimed", status: "Na Recepção", value: "R$ 150,00" },
    { id: 3, name: "Beatriz Costa", time: "11:00", type: "Sessão Terapia", conv: "Bradesco Saúde", status: "Em Atendimento", value: "R$ 180,00" },
    { id: 4, name: "Gabriel Sampaio", time: "14:00", type: "Avaliação Exames", conv: "Particular", status: "Agendado", value: "R$ 250,00" },
  ]);

  // Interactive AI Assistant chat state
  const [aiPrompt, setAiPrompt] = useState("Paciente retornou relatando diminuição de crises após nova rotina.");
  const [aiGenerating, setAiGenerating] = useState(false);
  const [aiResult, setAiResult] = useState<string | null>(
    "Evolução Clínica Gerada:\n• Paciente refere melhora clínica evidente com adesão terapêutica.\n• Sem queixas de efeitos adversos.\n• Conduta: Manutenção do protocolo por 30 dias. Retorno agendado para reavaliação periódica."
  );

  const handleGenerateAI = () => {
    setAiGenerating(true);
    setTimeout(() => {
      setAiResult(
        `Evolução Clínica Gerada (${new Date().toLocaleTimeString()}):\n• Relato: "${aiPrompt}"\n• Avaliação: Quadro clínico estável com evolução positiva.\n• Plano Terapêutico: Manter orientações anteriores e monitorar registros no app do paciente.`
      );
      setAiGenerating(false);
    }, 600);
  };

  return (
    <section id="preview" className="py-24 bg-gradient-to-b from-[#0c2f38] via-[#071d23] to-[#0a262e] text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#0d5c6b]/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-400/10 text-teal-300 border border-teal-400/20 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Experiência Ao Vivo
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Experimente a interface antes mesmo de assinar
          </h2>
          <p className="mt-4 text-base sm:text-lg text-teal-100/80">
            Interface limpa, rápida e pensada nos mínimos detalhes para não roubar tempo do profissional de saúde.
          </p>

          {/* Module Selector Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md max-w-2xl mx-auto">
            <button
              onClick={() => setActiveModule("agenda")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeModule === "agenda"
                  ? "bg-[#0d5c6b] text-white shadow-lg shadow-teal-950/50"
                  : "text-teal-200 hover:text-white hover:bg-white/5"
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>1. Agenda Inteligente</span>
            </button>

            <button
              onClick={() => setActiveModule("prontuario")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeModule === "prontuario"
                  ? "bg-[#0d5c6b] text-white shadow-lg shadow-teal-950/50"
                  : "text-teal-200 hover:text-white hover:bg-white/5"
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>2. Prontuário & LGPD</span>
            </button>

            <button
              onClick={() => setActiveModule("tiss")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeModule === "tiss"
                  ? "bg-[#0d5c6b] text-white shadow-lg shadow-teal-950/50"
                  : "text-teal-200 hover:text-white hover:bg-white/5"
              }`}
            >
              <DollarSign className="w-4 h-4" />
              <span>3. Lotes & PIX</span>
            </button>

            <button
              onClick={() => setActiveModule("ia")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeModule === "ia"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-950/50"
                  : "text-indigo-200 hover:text-white hover:bg-white/5"
              }`}
            >
              <Bot className="w-4 h-4 text-amber-300" />
              <span>4. Clinic AI</span>
            </button>
          </div>
        </div>

        {/* Interactive App Window */}
        <div className="bg-[#0b242c] rounded-3xl border border-teal-500/20 shadow-2xl overflow-hidden backdrop-blur-xl">
          {/* Top Window Bar */}
          <div className="bg-[#081c22] px-6 py-4 border-b border-teal-900/60 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/70" />
                <span className="w-3 h-3 rounded-full bg-amber-500/70" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
              </div>
              <span className="text-xs font-mono text-teal-300/70">
                ClinicManager / {activeModule.toUpperCase()} / v3.0
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs text-teal-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Conectado · Sincronização em Nuvem</span>
            </div>
          </div>

          {/* Module Views */}
          <div className="p-6 sm:p-8 min-h-[420px]">
            <AnimatePresence mode="wait">
              {activeModule === "agenda" && (
                <motion.div
                  key="agenda"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-teal-400" />
                        Grade Diária de Consultas — Segunda-feira
                      </h3>
                      <p className="text-xs text-teal-200/70 mt-0.5">
                        Clique nos status para simular a mudança de estado na recepção
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button className="px-3.5 py-1.5 bg-[#0d5c6b] hover:bg-[#10525f] text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors">
                        <Plus className="w-3.5 h-3.5" /> Novo Agendamento
                      </button>
                      <button className="px-3.5 py-1.5 bg-white/10 hover:bg-white/15 text-teal-100 text-xs font-medium rounded-lg transition-colors">
                        Sincronizar Google Agenda
                      </button>
                    </div>
                  </div>

                  {/* Appointments Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-teal-800/60 text-teal-300">
                          <th className="pb-3 font-semibold">Horário</th>
                          <th className="pb-3 font-semibold">Paciente</th>
                          <th className="pb-3 font-semibold">Procedimento / Tipo</th>
                          <th className="pb-3 font-semibold">Convênio / Pagamento</th>
                          <th className="pb-3 font-semibold">Status do Atendimento</th>
                          <th className="pb-3 font-semibold text-right">Ação</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-teal-900/40">
                        {appointments.map((apt) => (
                          <tr key={apt.id} className="hover:bg-teal-950/40 transition-colors">
                            <td className="py-3.5 font-bold text-teal-200 flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-teal-400" />
                              {apt.time}
                            </td>
                            <td className="py-3.5 font-semibold text-white">
                              {apt.name}
                            </td>
                            <td className="py-3.5 text-teal-100/90">{apt.type}</td>
                            <td className="py-3.5">
                              <span className="px-2.5 py-1 rounded-md bg-teal-900/50 text-teal-200 border border-teal-700/50 font-medium">
                                {apt.conv} ({apt.value})
                              </span>
                            </td>
                            <td className="py-3.5">
                              <button
                                onClick={() => {
                                  const nextStatus: Record<string, string> = {
                                    "Agendado": "Confirmado",
                                    "Confirmado": "Na Recepção",
                                    "Na Recepção": "Em Atendimento",
                                    "Em Atendimento": "Finalizado",
                                    "Finalizado": "Agendado",
                                  };
                                  setAppointments(
                                    appointments.map((item) =>
                                      item.id === apt.id
                                        ? { ...item, status: nextStatus[item.status] || "Confirmado" }
                                        : item
                                    )
                                  );
                                }}
                                className={`px-3 py-1 rounded-full font-bold text-[11px] border transition-all ${
                                  apt.status === "Em Atendimento"
                                    ? "bg-blue-500/20 text-blue-300 border-blue-400/40 animate-pulse"
                                    : apt.status === "Na Recepção"
                                    ? "bg-amber-500/20 text-amber-300 border-amber-400/40"
                                    : apt.status === "Finalizado"
                                    ? "bg-slate-500/20 text-slate-300 border-slate-400/40"
                                    : "bg-emerald-500/20 text-emerald-300 border-emerald-400/40"
                                }`}
                              >
                                {apt.status} ↻
                              </button>
                            </td>
                            <td className="py-3.5 text-right">
                              <button className="text-teal-300 hover:text-white underline font-semibold text-[11px]">
                                Abrir Prontuário
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}

              {activeModule === "prontuario" && (
                <motion.div
                  key="prontuario"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between border-b border-teal-800/60 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-teal-800 text-teal-100 flex items-center justify-center font-bold text-sm">
                        MO
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">Mariana Oliveira da Silva</h4>
                        <div className="text-xs text-teal-300 flex items-center gap-2 mt-0.5">
                          <span>34 anos · Feminino</span>
                          <span>•</span>
                          <span>CPF: ***.492.188-**</span>
                          <span>•</span>
                          <span className="text-emerald-400 font-semibold">LGPD: Termo Assinado</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button className="px-3.5 py-1.5 rounded-lg bg-teal-900 text-teal-200 text-xs font-semibold hover:bg-teal-800 transition-colors">
                        Emitir Atestado
                      </button>
                      <button className="px-3.5 py-1.5 rounded-lg bg-[#0d5c6b] text-white text-xs font-semibold hover:bg-[#10525f] transition-colors">
                        Prescrição Digital Memed
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div className="bg-teal-950/60 p-4 rounded-2xl border border-teal-800/40 space-y-2">
                      <div className="font-bold text-teal-300 uppercase tracking-wider text-[10px]">
                        Histórico Clínico & Anamnese
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        Paciente em acompanhamento há 6 meses. Sem histórico de alergias medicamentosas relatadas.
                      </p>
                    </div>

                    <div className="bg-teal-950/60 p-4 rounded-2xl border border-teal-800/40 space-y-2">
                      <div className="font-bold text-teal-300 uppercase tracking-wider text-[10px]">
                        Últimos Exames Anexados
                      </div>
                      <div className="space-y-1">
                        <div className="p-2 rounded-lg bg-teal-900/40 flex items-center justify-between text-teal-100">
                          <span>Hemograma_Completo.pdf</span>
                          <Download className="w-3.5 h-3.5 text-teal-300 cursor-pointer" />
                        </div>
                        <div className="p-2 rounded-lg bg-teal-900/40 flex items-center justify-between text-teal-100">
                          <span>Eletrocardiograma_2026.pdf</span>
                          <Download className="w-3.5 h-3.5 text-teal-300 cursor-pointer" />
                        </div>
                      </div>
                    </div>

                    <div className="bg-teal-950/60 p-4 rounded-2xl border border-teal-800/40 space-y-2">
                      <div className="font-bold text-emerald-300 uppercase tracking-wider text-[10px]">
                        Assinatura Digital CFM
                      </div>
                      <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-200">
                        <ShieldCheck className="w-5 h-5 text-emerald-400 mb-1" />
                        Certificado ICP-Brasil ativo com carimbo do tempo.
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeModule === "tiss" && (
                <motion.div
                  key="tiss"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between border-b border-teal-800/60 pb-4">
                    <div>
                      <h4 className="text-lg font-bold text-white">
                        Painel de Faturamento de Lotes & Pagamento PIX
                      </h4>
                      <p className="text-xs text-teal-200/70 mt-0.5">
                        Validação de guias antes do envio da fatura para as operadoras de saúde
                      </p>
                    </div>

                    <button className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md">
                      Exportar XML Padrão TISS 4.01
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-2xl bg-teal-950/60 border border-teal-800/50">
                      <div className="text-xs text-teal-300">Unimed Nacional</div>
                      <div className="text-xl font-bold text-white mt-1">R$ 21.340,00</div>
                      <div className="text-[11px] text-emerald-400 font-semibold mt-1">36 guias validadas (0 glosas)</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-teal-950/60 border border-teal-800/50">
                      <div className="text-xs text-teal-300">Bradesco Saúde</div>
                      <div className="text-xl font-bold text-white mt-1">R$ 14.890,00</div>
                      <div className="text-[11px] text-emerald-400 font-semibold mt-1">22 guias prontas</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-teal-950/60 border border-teal-800/50">
                      <div className="text-xs text-teal-300">Particular (PIX Instantâneo)</div>
                      <div className="text-xl font-bold text-emerald-300 mt-1">R$ 18.250,00</div>
                      <div className="text-[11px] text-emerald-400 font-semibold mt-1">Taxa de recebimento 0%</div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeModule === "ia" && (
                <motion.div
                  key="ia"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  <div className="flex items-center justify-between border-b border-indigo-900/60 pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-indigo-600/30 text-indigo-300 flex items-center justify-center border border-indigo-400/40">
                        <Sparkles className="w-5 h-5 text-amber-300" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">
                          Clinic AI — Copiloto Clínico & Sumarizador
                        </h4>
                        <p className="text-xs text-indigo-200/80">
                          Digite notas rápidas da consulta para gerar evolução clínica padronizada
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={aiPrompt}
                        onChange={(e) => setAiPrompt(e.target.value)}
                        placeholder="Ex: Paciente com cefaleia há 3 dias, pressão 12/8, prescrito analgésico..."
                        className="flex-1 px-4 py-3 rounded-xl bg-slate-900/90 border border-indigo-700/50 text-white text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                      <button
                        onClick={handleGenerateAI}
                        disabled={aiGenerating}
                        className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-xs font-bold flex items-center gap-2 transition-all"
                      >
                        {aiGenerating ? (
                          <>
                            <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Gerando...
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                            Gerar Evolução
                          </>
                        )}
                      </button>
                    </div>

                    {aiResult && (
                      <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 font-mono text-xs text-indigo-100 whitespace-pre-line leading-relaxed">
                        {aiResult}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
