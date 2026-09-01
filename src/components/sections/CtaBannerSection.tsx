"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Phone } from "lucide-react";

interface CtaBannerSectionProps {
  onOpenDemo: () => void;
}

export function CtaBannerSection({ onOpenDemo }: CtaBannerSectionProps) {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#0c3f4a] via-[#0d5c6b] to-[#147a8d] rounded-3xl p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden text-center max-w-5xl mx-auto"
        >
          {/* Subtle lighting overlay */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-amber-400/15 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-teal-100 text-xs font-semibold border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Comece a transformar sua clínica hoje mesmo
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
              Pronto para ter uma clínica mais organizada, lucrativa e sem faltas?
            </h2>

            <p className="text-sm sm:text-base text-teal-100 max-w-2xl mx-auto leading-relaxed">
              Junte-se a mais de 1.500 clínicas e consultórios que simplificaram a agenda, automatizaram lembretes e zeraram o retrabalho de faturamento.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenDemo}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-slate-50 text-[#0d5c6b] font-extrabold text-base flex items-center justify-center gap-3 shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                <span>Agendar Demonstração Gratuita</span>
                <ArrowRight className="w-5 h-5 text-[#0d5c6b]" />
              </button>

              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20o%20Clinic%20Manager"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-teal-900/60 hover:bg-teal-900/80 text-white font-bold text-base border border-white/20 flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Tirar Dúvidas no WhatsApp</span>
              </a>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-teal-100 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                Teste grátis por 14 dias
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                Sem necessidade de cartão de crédito
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                Migração de dados 100% gratuita
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
