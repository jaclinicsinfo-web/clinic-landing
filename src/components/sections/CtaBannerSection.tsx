"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { CONTACT_CONFIG } from "@/lib/constants";
import { BRAND } from "@/lib/brand";

interface CtaBannerSectionProps {
  onOpenDemo: () => void;
}

export function CtaBannerSection({ onOpenDemo }: CtaBannerSectionProps) {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-ja-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-ja-brand rounded-2xl p-8 sm:p-14 text-white relative overflow-hidden text-center max-w-5xl mx-auto"
        >
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/8 text-white/75 text-xs font-medium border border-white/12">
              Comece a transformar sua clínica hoje mesmo
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Pronto para ter uma clínica mais organizada, lucrativa e sem faltas?
            </h2>

            <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
              Junte-se a mais de 1.500 clínicas e consultórios que simplificaram a agenda, automatizaram lembretes e zeraram o retrabalho de faturamento.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onOpenDemo}
                className="w-full sm:w-auto min-h-11 px-7 rounded-xl bg-ja-teal hover:bg-ja-teal-hover text-white font-semibold text-sm inline-flex items-center justify-center gap-2 transition-colors"
              >
                <span>Experimentar 14 dias</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={CONTACT_CONFIG.getWhatsAppUrl(
                  `Olá, gostaria de tirar dúvidas sobre a ${BRAND.name}`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-11 px-7 rounded-xl border border-white/25 hover:border-white/50 text-white font-semibold text-sm inline-flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Tirar dúvidas no WhatsApp</span>
              </a>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-white/60 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-white/70" />
                Teste grátis por 14 dias
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-white/70" />
                Sem necessidade de cartão de crédito
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-white/70" />
                Migração de dados 100% gratuita
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
