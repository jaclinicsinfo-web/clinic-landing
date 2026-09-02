"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
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
  HeartHandshake,
  MessageCircle,
  ChevronRight,
  LayoutDashboard,
  UserCheck,
  Package,
  FileBarChart,
  Settings,
  Building2,
  Eye,
} from "lucide-react";

interface HeroSectionProps {
  onOpenDemo: () => void;
}

export function HeroSection({ onOpenDemo }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [viewMode, setViewMode] = useState<"interactive" | "real">("interactive");
  const [activeTab, setActiveTab] = useState<"agenda" | "financeiro" | "ia">("agenda");
  const [appointmentStatus, setAppointmentStatus] = useState<string>("Confirmado");

  // Scroll Parallax & 3D Transform
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.6], [12, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [0.93, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.9]);
  const yParallaxLeft = useTransform(scrollYProgress, [0, 0.8], [0, -50]);
  const yParallaxRight = useTransform(scrollYProgress, [0, 0.8], [0, 50]);

  return (
    <section
      ref={containerRef}
      className="relative pt-32 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#f0f6f8] via-[#f8fafc] to-[#f8fafc]"
    >
      {/* Subtle light grid and soft ambient glows */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-60" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-[#0d5c6b]/10 via-[#2a9d8f]/10 to-amber-200/20 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Pill / Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-xs border border-teal-200/80 text-xs font-semibold text-[#0d5c6b] mb-6 backdrop-blur-md"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 -ml-3" />
            <span className="font-bold">Clinic Manager 3.0</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600 font-medium flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              Gestão Clínica com Agente de IA & WhatsApp Integrado
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] font-display"
          >
            A plataforma definitiva para clínicas que buscam{" "}
            <span className="bg-gradient-to-r from-[#0d5c6b] via-[#107082] to-[#2a9d8f] bg-clip-text text-transparent">
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
            Centralize <strong>agenda inteligente</strong>, <strong>prontuário eletrônico LGPD</strong>, <strong>faturamento de convênios TISS</strong> e <strong>lembretes por WhatsApp</strong> em um único ecossistema fluido e sem complexidade.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#0d5c6b] to-[#094754] hover:from-[#094754] hover:to-[#07363f] text-white font-bold text-base flex items-center justify-center gap-3 shadow-xl shadow-teal-900/15 hover:shadow-2xl hover:scale-[1.02] transition-all group active:scale-95 cursor-pointer"
            >
              <span>Experimentar Grátis por 14 Dias</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 text-teal-300" />
            </button>

            <a
              href="#planos"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-base border border-slate-200 shadow-xs flex items-center justify-center gap-2 transition-all hover:border-slate-300 cursor-pointer"
            >
              <span>Ver Tabela de Planos</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          </motion.div>

          {/* Value Badges */}
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
              Setup rápido em 24h
            </span>
            <span className="flex items-center gap-1.5">
              <HeartHandshake className="w-4 h-4 text-rose-500" />
              Migração de dados gratuita
            </span>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* Scroll-Driven 3D Perspective Cockpit with Real App Preview Toggle */}
        {/* ========================================================================= */}
        <motion.div
          style={{
            rotateX,
            scale,
            opacity,
            transformPerspective: 1200,
          }}
          className="mt-14 relative max-w-5xl mx-auto perspective-1200"
        >
          {/* Subtle Ambient Backing Glow */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-[#0d5c6b]/30 via-[#2a9d8f]/20 to-[#e9c46a]/30 rounded-3xl blur-xl opacity-60 -z-10" />

          {/* Main Window Frame */}
          <div className="bg-[#0b242d] rounded-3xl border border-slate-700/60 shadow-2xl shadow-slate-950/25 overflow-hidden text-white">
            {/* Top Browser Bar */}
            <div className="bg-[#071a20] px-5 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-teal-900/60">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <span className="font-mono text-xs text-teal-300/80 bg-teal-950/60 px-3 py-1 rounded-lg border border-teal-800/40 hidden sm:inline">
                  https://app.clinicmanager.com.br/dashboard
                </span>
              </div>

              {/* View Mode Switcher (Interactive vs Real Screenshot) */}
              <div className="flex items-center gap-1 bg-teal-950/80 p-1 rounded-xl border border-teal-800/40">
                <button
                  onClick={() => setViewMode("interactive")}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    viewMode === "interactive"
                      ? "bg-[#0d5c6b] text-white shadow-md shadow-teal-900/60"
                      : "text-teal-300/80 hover:text-white"
                  }`}
                >
                  ⚡ Painel Interativo
                </button>
                <button
                  onClick={() => setViewMode("real")}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    viewMode === "real"
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-900/60"
                      : "text-teal-300/80 hover:text-white"
                  }`}
                >
                  <Eye className="w-3.5 h-3.5 text-emerald-300" />
                  📸 Print Real do Sistema
                </button>
              </div>
            </div>

            {/* Inner Content: Interactive vs Real App Screenshot */}
            {viewMode === "real" ? (
              <div className="relative bg-slate-950 p-2 sm:p-4 overflow-hidden group">
                <div className="relative aspect-[1920/929] w-full rounded-2xl overflow-hidden border border-teal-800/50 shadow-inner bg-slate-950">
                  <Image
                    src="/screenshots/dashboard.png"
                    alt="Print Real do Dashboard do Clinic Manager"
                    fill
                    className="object-contain object-top"
                    priority
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent flex items-center justify-between p-4">
                    <span className="px-3 py-1 bg-[#0c3f4a]/90 text-teal-200 border border-teal-400/30 text-xs font-bold rounded-lg backdrop-blur-md">
                      ✓ Captura Completa da Versão em Produção (Menu & Dashboard 100% Visíveis)
                    </span>
                    <a
                      href="#preview"
                      className="px-3.5 py-1.5 bg-white text-slate-900 text-xs font-bold rounded-lg shadow-md hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      Explorar Todos os Módulos ↓
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-5 sm:p-7 bg-gradient-to-b from-[#0a232b] to-[#071b22]">
                {/* Real KPI Stat Cards from clinic-web-app */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
                  <div className="p-4 rounded-2xl bg-teal-950/50 border border-teal-800/40">
                    <div className="flex items-center justify-between text-teal-300/80 text-xs">
                      <span>Atendimentos hoje</span>
                      <Calendar className="w-4 h-4 text-teal-400" />
                    </div>
                    <div className="text-2xl font-black text-white mt-1 font-display">12</div>
                    <div className="text-[11px] text-emerald-400 font-bold mt-1 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> 8 confirmados · 3 agendados
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-teal-950/50 border border-teal-800/40">
                    <div className="flex items-center justify-between text-teal-300/80 text-xs">
                      <span>Total a receber</span>
                      <DollarSign className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="text-2xl font-black text-white mt-1 font-display">R$ 48.920</div>
                    <div className="text-[11px] text-emerald-400 font-bold mt-1">
                      +18.4% vs mês anterior
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-teal-950/50 border border-teal-800/40">
                    <div className="flex items-center justify-between text-teal-300/80 text-xs">
                      <span>Taxa de ocupação</span>
                      <Activity className="w-4 h-4 text-amber-400" />
                    </div>
                    <div className="text-2xl font-black text-emerald-400 mt-1 font-display">87.5%</div>
                    <div className="text-[11px] text-teal-300/70 mt-1">
                      Capacidade no mês
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-teal-950/50 border border-teal-800/40">
                    <div className="flex items-center justify-between text-teal-300/80 text-xs">
                      <span>Taxa de faltas</span>
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="text-2xl font-black text-white mt-1 font-display">3.2%</div>
                    <div className="text-[11px] text-teal-300 font-medium mt-1">
                      -85% com WhatsApp
                    </div>
                  </div>
                </div>

                {/* Sub-Tabs for Mockup */}
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-teal-900/60">
                  <button
                    onClick={() => setActiveTab("agenda")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      activeTab === "agenda"
                        ? "bg-[#0d5c6b] text-white"
                        : "text-teal-300/80 hover:text-white"
                    }`}
                  >
                    📅 Agenda de Atendimentos
                  </button>
                  <button
                    onClick={() => setActiveTab("financeiro")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      activeTab === "financeiro"
                        ? "bg-[#0d5c6b] text-white"
                        : "text-teal-300/80 hover:text-white"
                    }`}
                  >
                    💰 Faturamento & TISS
                  </button>
                  <button
                    onClick={() => setActiveTab("ia")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                      activeTab === "ia"
                        ? "bg-indigo-600 text-white"
                        : "text-teal-300/80 hover:text-white"
                    }`}
                  >
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    Agente IA
                  </button>
                </div>

                {activeTab === "agenda" && (
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <div className="lg:col-span-2 p-5 rounded-2xl bg-teal-950/70 border border-teal-800/50">
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-teal-800/60">
                        <div>
                          <h4 className="font-bold text-white text-sm flex items-center gap-2">
                            <Clock className="w-4 h-4 text-teal-400" />
                            Grade Diária · Sala 01 (Dra. Helena Vaz - Psicologia)
                          </h4>
                          <p className="text-xs text-teal-300/70">
                            Sincronizado em tempo real com recepção e WhatsApp
                          </p>
                        </div>
                        <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold">
                          ● Ao Vivo
                        </span>
                      </div>

                      <div className="space-y-3">
                        <div className="p-3.5 rounded-xl bg-teal-900/60 border border-teal-600/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#0d5c6b] text-white flex items-center justify-center font-bold text-xs border border-teal-400/40">
                              MC
                            </div>
                            <div>
                              <div className="text-xs font-bold text-white flex items-center gap-2">
                                Marcos Castro
                                <span className="px-2 py-0.5 rounded-md bg-teal-800/80 text-teal-200 text-[10px] font-semibold">
                                  Unimed · Consulta de Retorno
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
                              Lembrete Automático · 13:42
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
            )}
          </div>

          {/* Floating Parallax Badges */}
          <motion.div
            style={{ y: yParallaxLeft }}
            className="absolute -top-6 -left-6 sm:-left-8 p-4 rounded-2xl bg-white/95 border border-slate-200 text-slate-800 shadow-xl backdrop-blur-xl hidden md:flex items-center gap-3 animate-float-subtle"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">-85% Faltas e No-Show</div>
              <div className="text-[10px] text-slate-500">Confirmação automática WhatsApp</div>
            </div>
          </motion.div>

          <motion.div
            style={{ y: yParallaxRight }}
            className="absolute -bottom-6 -right-6 sm:-right-8 p-4 rounded-2xl bg-white/95 border border-slate-200 text-slate-800 shadow-xl backdrop-blur-xl hidden md:flex items-center gap-3 animate-float-delayed"
          >
            <div className="w-10 h-10 rounded-xl bg-teal-100 text-[#0d5c6b] flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">IA Clínica Especializada</div>
              <div className="text-[10px] text-slate-500">Evoluções médicas em 1 clique</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
