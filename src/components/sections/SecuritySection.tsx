"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Database,
  History,
  FileCheck2,
  Server,
  UserCheck,
  KeyRound,
} from "lucide-react";

export function SecuritySection() {
  const securityItems = [
    {
      icon: Lock,
      title: "Criptografia de Nível Bancário",
      desc: "Todos os dados são transmitidos com SSL/TLS 256 bits e armazenados com criptografia AES-256 em repouso.",
    },
    {
      icon: FileCheck2,
      title: "100% Conforme LGPD e CFM",
      desc: "Termos de consentimento digitais, gestão de privacidade dos pacientes e validade jurídica para prontuários eletrônicos.",
    },
    {
      icon: Database,
      title: "Backups Diários e Redundantes",
      desc: "Cópias de segurança automáticas em servidores isolados e geograficamente distribuídos, prevenindo perda acidental de dados.",
    },
    {
      icon: History,
      title: "Trilha de Auditoria Completa",
      desc: "Registro detalhado com data, hora e IP de qualquer visualização, edição ou download de prontuário na clínica.",
    },
  ];

  return (
    <section id="seguranca" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0c3f4a] to-[#071f25] rounded-3xl p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Text Side */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Máxima Segurança & Sigilo
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight leading-tight">
                Os prontuários e dados financeiros da sua clínica blindados 24/7
              </h2>

              <p className="text-sm text-teal-100/80 leading-relaxed">
                A segurança em saúde não é opcional. O Clinic Manager foi construído seguindo rigorosamente as diretrizes da LGPD e as normas dos conselhos de medicina e psicologia.
              </p>

              <div className="pt-2 flex flex-wrap gap-3 text-xs text-teal-200">
                <span className="flex items-center gap-1.5 bg-teal-900/60 px-3 py-1.5 rounded-lg border border-teal-700/50">
                  <Server className="w-3.5 h-3.5 text-teal-300" /> Servidores no Brasil (ISO 27001)
                </span>
                <span className="flex items-center gap-1.5 bg-teal-900/60 px-3 py-1.5 rounded-lg border border-teal-700/50">
                  <KeyRound className="w-3.5 h-3.5 text-amber-300" /> Autenticação 2FA
                </span>
              </div>
            </div>

            {/* Grid of Security Highlights */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {securityItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="p-5 rounded-2xl bg-teal-950/50 border border-teal-700/40 hover:border-teal-500/60 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-teal-800/80 text-teal-200 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-teal-100/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
