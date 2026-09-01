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
      color: "text-teal-300",
      bg: "bg-teal-500/20 border border-teal-400/30",
    },
    {
      value: "+3.2M",
      label: "Atendimentos Gerenciados",
      sub: "com prontuários criptografados",
      icon: Users,
      color: "text-emerald-400",
      bg: "bg-emerald-500/20 border border-emerald-400/30",
    },
    {
      value: "-85%",
      label: "Redução de Faltas",
      sub: "com confirmação no WhatsApp",
      icon: TrendingUp,
      color: "text-amber-400",
      bg: "bg-amber-500/20 border border-amber-400/30",
    },
    {
      value: "99.9%",
      label: "Disponibilidade em Nuvem",
      sub: "backups diários automáticos",
      icon: ShieldCheck,
      color: "text-indigo-400",
      bg: "bg-indigo-500/20 border border-indigo-400/30",
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
    <section className="py-16 bg-[#071920] border-y border-teal-900/60 text-white relative">
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
                className="p-6 rounded-3xl bg-[#0b242c]/90 border border-teal-800/50 hover:border-teal-400/50 hover:bg-[#0e2d37] hover:shadow-xl hover:shadow-teal-950/40 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center font-bold transition-transform group-hover:scale-110`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold text-white tracking-tight font-display">
                      {stat.value}
                    </div>
                    <div className="text-xs font-bold text-teal-200 mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-teal-300/70 mt-3 pt-3 border-t border-teal-900/60">
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
          className="mt-12 pt-8 border-t border-teal-900/60 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-teal-200"
        >
          {badges.map((b) => (
            <div key={b.label} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <span className="text-xs font-bold text-white">{b.label}</span>
                <span className="text-[10px] text-teal-300/70 block sm:inline sm:ml-1.5">
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
