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
      desc: "Termos de consentimento digitais, gestão de privacidade dos pacientes e proteção dos registros de evolução.",
    },
    {
      icon: Database,
      title: "Backups Diários e Redundantes",
      desc: "Cópias de segurança automáticas em servidores isolados e geograficamente distribuídos, prevenindo perda acidental de dados.",
    },
    {
      icon: History,
      title: "Trilha de Auditoria Completa",
      desc: "Registro detalhado com data, hora e IP de qualquer visualização, edição ou download da evolução na clínica.",
    },
  ];

  return (
    <section id="seguranca" className="py-12 md:py-16 lg:py-20 bg-ja-card relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-ja-brand rounded-2xl p-8 sm:p-14 text-white relative overflow-hidden">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Text Side */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ja-teal text-white text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                Máxima Segurança & Sigilo
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                O acompanhamento de evolução e os dados financeiros da sua clínica blindados 24/7
              </h2>

              <p className="text-sm text-white/70 leading-relaxed">
                A segurança em saúde não é opcional. A plataforma foi construída seguindo rigorosamente as diretrizes da LGPD e as normas dos conselhos de medicina e psicologia.
              </p>

              <div className="pt-2 flex flex-wrap gap-3 text-xs text-white/75">
                <span className="flex items-center gap-1.5 bg-white/8 px-3 py-1.5 rounded-lg border border-white/10">
                  <Server className="w-3.5 h-3.5" /> Servidores no Brasil (ISO 27001)
                </span>
                <span className="flex items-center gap-1.5 bg-white/8 px-3 py-1.5 rounded-lg border border-white/10">
                  <KeyRound className="w-3.5 h-3.5" /> Autenticação 2FA
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
                    className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/25 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-ja-teal text-white flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/65 leading-relaxed">
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
