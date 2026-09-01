"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  TrendingUp,
  Clock,
  DollarSign,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  CheckCircle2,
} from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface RoiCalculatorSectionProps {
  onOpenDemo: () => void;
}

export function RoiCalculatorSection({ onOpenDemo }: RoiCalculatorSectionProps) {
  const [doctorsCount, setDoctorsCount] = useState<number>(4);
  const [appointmentsPerDay, setAppointmentsPerDay] = useState<number>(10);
  const [averagePrice, setAveragePrice] = useState<number>(220);

  const totalMonthlyAppointments = doctorsCount * appointmentsPerDay * 22;
  const recoveredAppointments = Math.round(totalMonthlyAppointments * 0.16);
  const monthlyRevenueRecovered = recoveredAppointments * averagePrice;
  const monthlyHoursSaved = Math.round(totalMonthlyAppointments * (6 / 60));

  return (
    <section id="calculadora" className="py-24 bg-[#06161c] text-white relative overflow-hidden border-t border-teal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-400/20 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            Calculadora de Retorno (ROI)
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Quanto sua clínica deixa na mesa com faltas e processos manuais?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-teal-100/70">
            Simule o impacto financeiro imediato ao reduzir o no-show e automatizar a comunicação com pacientes.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Sliders Side */}
          <div className="lg:col-span-7 bg-[#0b242d] p-6 sm:p-8 rounded-3xl border border-teal-800/60 shadow-xl space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-teal-300 uppercase tracking-wider">
                  Número de Profissionais na Clínica
                </label>
                <span className="text-sm font-extrabold text-white bg-teal-950 px-3 py-0.5 rounded-full border border-teal-700/50">
                  {doctorsCount} {doctorsCount === 1 ? "profissional" : "profissionais"}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="25"
                step="1"
                value={doctorsCount}
                onChange={(e) => setDoctorsCount(Number(e.target.value))}
                aria-label="Número de profissionais na clínica"
                className="w-full h-2.5 bg-teal-950 rounded-lg appearance-none cursor-pointer accent-[#2a9d8f]"
              />
              <div className="flex justify-between text-[11px] text-teal-400/60 mt-1">
                <span>1 consultório</span>
                <span>12 clínica média</span>
                <span>25+ rede</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-teal-300 uppercase tracking-wider">
                  Consultas por dia por profissional
                </label>
                <span className="text-sm font-extrabold text-white bg-teal-950 px-3 py-0.5 rounded-full border border-teal-700/50">
                  {appointmentsPerDay} atendimentos/dia
                </span>
              </div>
              <input
                type="range"
                min="4"
                max="25"
                step="1"
                value={appointmentsPerDay}
                onChange={(e) => setAppointmentsPerDay(Number(e.target.value))}
                aria-label="Consultas por dia por profissional"
                className="w-full h-2.5 bg-teal-950 rounded-lg appearance-none cursor-pointer accent-[#2a9d8f]"
              />
              <div className="flex justify-between text-[11px] text-teal-400/60 mt-1">
                <span>4/dia</span>
                <span>15/dia</span>
                <span>25/dia</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-teal-300 uppercase tracking-wider">
                  Valor Médio por Atendimento / Sessão
                </label>
                <span className="text-sm font-extrabold text-emerald-400 bg-teal-950 px-3 py-0.5 rounded-full border border-teal-700/50">
                  {formatCurrency(averagePrice)}
                </span>
              </div>
              <input
                type="range"
                min="80"
                max="600"
                step="10"
                value={averagePrice}
                onChange={(e) => setAveragePrice(Number(e.target.value))}
                aria-label="Valor médio por atendimento ou sessão"
                className="w-full h-2.5 bg-teal-950 rounded-lg appearance-none cursor-pointer accent-[#2a9d8f]"
              />
              <div className="flex justify-between text-[11px] text-teal-400/60 mt-1">
                <span>R$ 80</span>
                <span>R$ 300</span>
                <span>R$ 600</span>
              </div>
            </div>
          </div>

          {/* Result Card Side */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0c3f4a] to-[#072127] text-white p-7 sm:p-8 rounded-3xl shadow-2xl border border-teal-500/40 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-teal-400/15 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-400/20 text-teal-200 text-xs font-semibold mb-4 border border-teal-300/30">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                Economia Estimada por Mês
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
                {formatCurrency(monthlyRevenueRecovered)}
              </div>
              <p className="text-xs text-teal-200/80 mt-1">
                em consultas resgatadas que seriam perdidas por no-show
              </p>

              <div className="mt-6 pt-5 border-t border-teal-800/80 space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-teal-200 flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    Consultas Salvas / Mês:
                  </span>
                  <span className="font-bold text-white text-sm">+{recoveredAppointments} pacientes</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-teal-200 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-amber-400" />
                    Tempo Poupado na Recepção:
                  </span>
                  <span className="font-bold text-white text-sm">{monthlyHoursSaved} horas/mês</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <button
                onClick={onOpenDemo}
                className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/60 transition-all group"
              >
                <span>Recuperar Esse Faturamento</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <div className="text-center text-[11px] text-teal-300/70 mt-2">
                O sistema se paga logo nos primeiros dias de uso.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
