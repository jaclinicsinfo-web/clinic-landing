"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  ChevronRight,
  Stethoscope,
  FileText,
  BadgeCheck,
} from "lucide-react";

interface HeroSectionProps {
  onOpenDemo: () => void;
}

export function HeroSection({ onOpenDemo }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"agenda" | "financeiro" | "ia">("agenda");
  const [appointmentStatus, setAppointmentStatus] = useState<string>("Confirmado");

  // Scroll Parallax & 3D Transform
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.6], [12, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.85]);
  const yParallaxLeft = useTransform(scrollYProgress, [0, 0.8], [0, -60]);
  const yParallaxRight = useTransform(scrollYProgress, [0, 0.8], [0, 60]);

  return (
    <section
      ref={containerRef}
      className="relative pt-28 pb-24 lg:pt-36 lg:pb-36 overflow-hidden bg-gradient-to-b from-[#06161c] via-[#09222b] to-[#06161c] text-white"
    >
      {/* Cinematic Ambient Mesh & Aurora Background */}
      <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-40" />
      
      {/* Glowing light cones */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-[#0d5c6b]/40 via-[#2a9d8f]/20 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-[#0d5c6b]/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-10 w-[450px] h-[450px] bg-[#2a9d8f]/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Pill / Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-950/80 border border-teal-500/30 text-xs font-semibold text-teal-200 mb-8 backdrop-blur-xl shadow-lg shadow-teal-950/50"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 -ml-3" />
            <span className="font-bold text-white">Clinic Manager 3.0</span>
            <span className="text-teal-700">|</span>
            <span className="text-teal-200 font-medium flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              IA Integrada & Lembretes WhatsApp sem Bloqueio
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] font-display"
          >
            A gestão da sua clínica no{" "}
            <span className="bg-gradient-to-r from-teal-300 via-emerald-400 to-[#e9c46a] bg-clip-text text-transparent underline decoration-[#2a9d8f]/50 decoration-wavy decoration-2">
              piloto inteligente.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-lg sm:text-xl text-teal-100/80 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            Elimine 85% das faltas com confirmações no WhatsApp, atenda com prontuário eletrônico unificado e fature convênios TISS sem glosas em uma interface ultra-rápida.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#0d5c6b] via-[#2a9d8f] to-[#147a8d] hover:brightness-110 text-white font-bold text-base flex items-center justify-center gap-3 shadow-xl shadow-teal-900/40 hover:shadow-teal-500/20 hover:scale-[1.02] transition-all group active:scale-95 border border-teal-300/30"
            >
              <span>Começar Teste Gratuito de 14 Dias</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 text-teal-200" />
            </button>

            <a
              href="#planos"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-bold text-base border border-white/15 backdrop-blur-md shadow-sm flex items-center justify-center gap-2 transition-all"
            >
              <span>Ver Tabela de Planos</span>
              <ChevronRight className="w-4 h-4 text-teal-300" />
            </a>
          </motion.div>

          {/* Value Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs font-semibold text-teal-200/70"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Sem taxa de adesão
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-teal-300" />
              100% Conforme LGPD & CFM
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400" />
              Setup imediato em 24h
            </span>
            <span className="flex items-center gap-1.5">
              <HeartHandshake className="w-4 h-4 text-rose-400" />
              Migração de dados gratuita
            </span>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* Scroll-Driven 3D Perspective Interactive Dashboard Cockpit */}
        {/* ========================================================================= */}
        <motion.div
          style={{
            rotateX,
            scale,
            opacity,
            transformPerspective: 1200,
          }}
          className="mt-16 relative max-w-5xl mx-auto perspective-1200"
        >
          {/* Ambient Glow behind Cockpit */}
          <div className="absolute -inset-2 bg-gradient-to-r from-[#0d5c6b] via-[#2a9d8f] to-[#e9c46a] rounded-3xl blur-2xl opacity-40 -z-10" />

          {/* Main Dashboard Window */}
          <div className="bg-[#0b242d]/95 backdrop-blur-2xl rounded-3xl border border-teal-500/30 shadow-2xl shadow-black/80 overflow-hidden">
            {/* Top Browser Bar */}
            <div className="bg-[#071a20] px-5 py-3.5 flex items-center justify-between border-b border-teal-900/70">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <span className="font-mono text-xs text-teal-300/80 bg-teal-950/60 px-3 py-1 rounded-lg border border-teal-800/40 hidden sm:inline">
                  https://app.clinicmanager.com.br/painel-clinico
                </span>
              </div>

              {/* Interactive Module Tabs */}
              <div className="flex items-center gap-1 bg-teal-950/80 p-1 rounded-xl border border-teal-800/40">
                <button
                  onClick={() => setActiveTab("agenda")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeTab === "agenda"
                      ? "bg-[#0d5c6b] text-white shadow-md shadow-teal-900/60"
                      : "text-teal-300/80 hover:text-white"
                  }`}
                >
                  ⚡ Agenda ao Vivo
                </button>
                <button
                  onClick={() => setActiveTab("financeiro")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeTab === "financeiro"
                      ? "bg-[#0d5c6b] text-white shadow-md shadow-teal-900/60"
                      : "text-teal-300/80 hover:text-white"
                  }`}
                >
                  💰 Financeiro TISS
                </button>
                <button
                  onClick={() => setActiveTab("ia")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                    activeTab === "ia"
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-900/60"
                      : "text-teal-300/80 hover:text-white"
                  }`}
                >
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  🤖 Agente IA
                </button>
              </div>
            </div>

            {/* Inner Dashboard Body */}
            <div className="p-5 sm:p-7 bg-gradient-to-b from-[#0a232b] to-[#071b22]">
              {/* Metrics Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-teal-950/50 border border-teal-800/40">
                  <div className="flex items-center justify-between text-teal-300/80 text-xs">
                    <span>Consultas Hoje</span>
                    <Calendar className="w-4 h-4 text-teal-400" />
                  </div>
                  <div className="text-2xl font-black text-white mt-1 font-display">28 agendadas</div>
                  <div className="text-[11px] text-emerald-400 font-bold mt-1 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> 96% confirmadas
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-teal-950/50 border border-teal-800/40">
                  <div className="flex items-center justify-between text-teal-300/80 text-xs">
                    <span>Faturamento do Mês</span>
                    <DollarSign className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-2xl font-black text-white mt-1 font-display">R$ 54.890</div>
                  <div className="text-[11px] text-emerald-400 font-bold mt-1">
                    +24% vs mês anterior
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-teal-950/50 border border-teal-800/40">
                  <div className="flex items-center justify-between text-teal-300/80 text-xs">
                    <span>Taxa de No-Show</span>
                    <Activity className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="text-2xl font-black text-emerald-400 mt-1 font-display">3.8%</div>
                  <div className="text-[11px] text-teal-300/70 mt-1">
                    Média Brasil: 25%
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-teal-950/50 border border-teal-800/40">
                  <div className="flex items-center justify-between text-teal-300/80 text-xs">
                    <span>WhatsApp Automático</span>
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-2xl font-black text-white mt-1 font-display">142 enviados</div>
                  <div className="text-[11px] text-teal-300 font-medium mt-1">
                    0 bloqueios (API Oficial)
                  </div>
                </div>
              </div>

              {/* Dynamic Tab Body */}
              {activeTab === "agenda" && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                  <div className="lg:col-span-2 p-5 rounded-2xl bg-teal-950/70 border border-teal-800/50">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-teal-800/60">
                      <div>
                        <h4 className="font-bold text-white text-sm flex items-center gap-2">
                          <Clock className="w-4 h-4 text-teal-400" />
                          Consultas da Tarde · Sala 02 (Dra. Helena Vaz)
                        </h4>
                        <p className="text-xs text-teal-300/70">
                          Clique no status para simular a chegada do paciente na recepção
                        </p>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold">
                        ● Ao Vivo
                      </span>
                    </div>

                    <div className="space-y-3">
                      {/* Interactive Item 1 */}
                      <div className="p-3.5 rounded-xl bg-teal-900/60 border border-teal-600/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#0d5c6b] text-white flex items-center justify-center font-bold text-xs border border-teal-400/40">
                            MC
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white flex items-center gap-2">
                              Marcos Castro
                              <span className="px-2 py-0.5 rounded-md bg-teal-800/80 text-teal-200 text-[10px] font-semibold">
                                Unimed · Retorno
                              </span>
                            </div>
                            <div className="text-[11px] text-teal-300/80 flex items-center gap-2 mt-0.5">
                              <span>🕒 14:00 - 14:45</span>
                              <span>•</span>
                              <span>Prontuário #4092</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-xs text-teal-300 font-semibold">Status:</span>
                          <select
                            value={appointmentStatus}
                            onChange={(e) => setAppointmentStatus(e.target.value)}
                            aria-label="Status do atendimento de Marcos Castro"
                            className="text-xs font-bold px-3 py-1.5 rounded-lg bg-[#071f26] text-emerald-300 border border-teal-500/50 focus:outline-none cursor-pointer"
                          >
                            <option value="Confirmado">✅ Confirmado (Zap)</option>
                            <option value="Na Recepção">⏳ Na Recepção</option>
                            <option value="Em Atendimento">🩺 Em Consulta</option>
                            <option value="Finalizado">🏁 Concluído</option>
                          </select>
                        </div>
                      </div>

                      {/* Item 2 */}
                      <div className="p-3.5 rounded-xl bg-teal-950/40 border border-teal-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 opacity-90">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-purple-900/80 text-purple-200 flex items-center justify-center font-bold text-xs border border-purple-500/40">
                            AS
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white flex items-center gap-2">
                              Aline Silveira
                              <span className="px-2 py-0.5 rounded-md bg-emerald-950/80 text-emerald-300 text-[10px] font-semibold border border-emerald-500/30">
                                Particular · PIX Pago R$ 280
                              </span>
                            </div>
                            <div className="text-[11px] text-teal-300/80 flex items-center gap-2 mt-0.5">
                              <span>🕒 15:00 - 15:50</span>
                              <span>•</span>
                              <span>Sessão Terapia #12</span>
                            </div>
                          </div>
                        </div>

                        <span className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold self-start sm:self-auto">
                          ✅ Confirmado (WhatsApp)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Live Feed Card */}
                  <div className="p-5 rounded-2xl bg-gradient-to-b from-[#09303a] to-[#061e24] border border-teal-700/50 flex flex-col justify-between shadow-lg">
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-teal-800/80">
                        <div className="flex items-center gap-2">
                          <MessageCircle className="w-4 h-4 text-emerald-400" />
                          <span className="font-bold text-xs text-white">Robô WhatsApp Ativo</span>
                        </div>
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      </div>

                      <div className="space-y-2.5 text-xs">
                        <div className="bg-teal-950/80 p-3 rounded-xl border border-teal-700/40">
                          <div className="text-[10px] text-emerald-300 font-semibold">
                            Disparo Automático · 13:42
                          </div>
                          <p className="text-teal-100 mt-1">
                            &quot;Olá Marcos! Confirmamos sua consulta hoje às 14h com Dra. Helena?&quot;
                          </p>
                        </div>

                        <div className="bg-emerald-950/90 p-3 rounded-xl border border-emerald-600/50 text-emerald-200">
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
                <div className="p-6 rounded-2xl bg-teal-950/70 border border-teal-800/50">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-teal-800/60">
                    <div>
                      <h4 className="font-bold text-white text-base">
                        Faturamento de Lotes TISS & Conciliação PIX
                      </h4>
                      <p className="text-xs text-teal-300/80">
                        Zero glosas com validação de carteirinhas e guias de autorização
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold rounded-lg self-start sm:self-auto">
                      Lote #08/2026 Aprovado
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-[#08222b] border border-teal-800/50">
                      <div className="text-xs text-teal-300">Convênios a Faturar</div>
                      <div className="text-2xl font-black text-white mt-1">R$ 38.450,00</div>
                      <div className="text-[11px] text-emerald-400 mt-1 font-semibold">42 guias TISS prontas para XML</div>
                    </div>
                    <div className="p-4 rounded-xl bg-[#08222b] border border-teal-800/50">
                      <div className="text-xs text-teal-300">Particular & PIX</div>
                      <div className="text-2xl font-black text-emerald-400 mt-1">R$ 16.440,00</div>
                      <div className="text-[11px] text-emerald-400 mt-1 font-semibold">100% conciliado instantaneamente</div>
                    </div>
                    <div className="p-4 rounded-xl bg-[#08222b] border border-teal-800/50">
                      <div className="text-xs text-teal-300">Repasses Médicos</div>
                      <div className="text-2xl font-black text-teal-300 mt-1">R$ 27.180,00</div>
                      <div className="text-[11px] text-teal-200 mt-1 font-semibold">Cálculo de comissões por profissional</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "ia" && (
                <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/80 via-[#0a232b] to-[#071b22] border border-indigo-500/40">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-indigo-800/60">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-indigo-600/30 text-indigo-300 border border-indigo-400/40">
                        <Bot className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-base">
                          Clinic AI Copilot — Assistente Clínico
                        </h4>
                        <p className="text-xs text-indigo-200/80">
                          Sumarização de prontuários, transcrição de voz e insights preditivos
                        </p>
                      </div>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-400/30">
                      Pronto para Análise
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/70 border border-indigo-700/40 text-xs space-y-2">
                    <div className="text-indigo-300 font-bold flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-amber-300" />
                      Evolução Clínica Estruturada com 1 Clique:
                    </div>
                    <p className="text-slate-200 leading-relaxed font-mono">
                      &quot;Paciente relata melhora de 60% nos episódios de ansiedade após adesão ao protocolo comportamental. Sono regularizado. Prescrição de apoio mantida por 30 dias. Retorno agendado.&quot;
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Floating Parallax Badges */}
          <motion.div
            style={{ y: yParallaxLeft }}
            className="absolute -top-6 -left-6 sm:-left-10 p-4 rounded-2xl bg-[#0d343f]/90 border border-teal-400/40 text-white shadow-2xl backdrop-blur-xl hidden md:flex items-center gap-3 animate-float-subtle"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-400/30">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">-85% Faltas e No-Show</div>
              <div className="text-[10px] text-teal-300">Confirmação automática WhatsApp</div>
            </div>
          </motion.div>

          <motion.div
            style={{ y: yParallaxRight }}
            className="absolute -bottom-6 -right-6 sm:-right-10 p-4 rounded-2xl bg-[#0d343f]/90 border border-teal-400/40 text-white shadow-2xl backdrop-blur-xl hidden md:flex items-center gap-3 animate-float-delayed"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center border border-amber-400/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">IA Clínica Especializada</div>
              <div className="text-[10px] text-teal-300">Evoluções médicas em 1 clique</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
