"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Building,
  Users,
  CheckCircle,
  TrendingUp,
} from "lucide-react";

export function SocialProofSection() {
  const stats = [
    {
      value: "+1.500",
      label: "Clínicas & Consultórios",
      sub: "em todos os estados do Brasil",
      icon: Building,
      color: "text-[#0d5c6b]",
      bg: "bg-teal-50 border border-teal-100",
    },
    {
      value: "+3.2M",
      label: "Atendimentos Gerenciados",
      sub: "com prontuários criptografados",
      icon: Users,
      color: "text-emerald-600",
      bg: "bg-emerald-50 border border-emerald-100",
    },
    {
      value: "-85%",
      label: "Redução de Faltas",
      sub: "com confirmação no WhatsApp",
      icon: TrendingUp,
      color: "text-amber-600",
      bg: "bg-amber-50 border border-amber-100",
    },
    {
      value: "99.9%",
      label: "Disponibilidade em Nuvem",
      sub: "backups diários automáticos",
      icon: ShieldCheck,
      color: "text-indigo-600",
      bg: "bg-indigo-50 border border-indigo-100",
    },
  ];

  const badges = [
    { label: "Padrão TISS / ANS", desc: "Lotes e guias sem glosas" },
    { label: "100% Conforme LGPD", desc: "Dados de saúde blindados" },
    { label: "CFM, CFP & CFO", desc: "Prontuário com validade jurídica" },
    { label: "PIX Banco Central", desc: "Conciliação em tempo real" },
    { label: "WhatsApp Oficial API", desc: "Zero risco de bloqueio" },
  ];

  return (
    <section className="py-16 bg-white border-y border-slate-200/80 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200/70 hover:border-[#0d5c6b]/40 hover:bg-white hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center font-bold transition-transform group-hover:scale-110`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold text-slate-900 tracking-tight font-display">
                      {stat.value}
                    </div>
                    <div className="text-xs font-bold text-slate-700 mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 mt-3 pt-3 border-t border-slate-200/60">
                  {stat.sub}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Compliance Badges Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-slate-600"
        >
          {badges.map((b) => (
            <div key={b.label} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
              <div>
                <span className="text-xs font-bold text-slate-800">{b.label}</span>
                <span className="text-[10px] text-slate-400 block sm:inline sm:ml-1.5">
                  ({b.desc})
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
