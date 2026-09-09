"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Como funciona o período de teste grátis de 14 dias?",
      answer:
        "Você terá acesso completo e irrestrito a todos os recursos do plano escolhido por 14 dias. Não cobramos taxa de adesão e você só decide assinar se o sistema realmente transformar a rotina da sua clínica.",
    },
    {
      question: "Vocês ajudam a migrar os dados do meu sistema antigo?",
      answer:
        "Sim! Nossa equipe de implantação realiza a importação completa do cadastro de pacientes, contatos, históricos e prontuários antigos a partir de planilhas Excel ou backups de outros softwares do mercado, sem custo adicional.",
    },
    {
      question: "É difícil treinar a recepção e os médicos da clínica?",
      answer:
        "O Clinic Manager foi desenvolvido com foco total em usabilidade intuitiva (Zero Curva de Aprendizado). Em menos de 20 minutos de treinamento guiado, secretárias e profissionais de saúde já dominam a agenda e o prontuário com total facilidade.",
    },
    {
      question: "Como funcionam os lembretes automáticos no WhatsApp?",
      answer:
        "Utilizamos a API Oficial do WhatsApp Business. O sistema envia a confirmação automática no horário configurado (ex: 24h ou 48h antes da consulta). Quando o paciente clica em 'Confirmar' ou 'Remarcar', o status na agenda muda em tempo real.",
    },
    {
      question: "O módulo de faturamento de convênios suporta o padrão TISS e XML?",
      answer:
        "Sim, 100% compatível com as normas da ANS e padrão TISS 4.01. Você pode gerar guias de consulta, SADT, faturar lotes, gerar arquivos XML para envio nas operadoras (Unimed, Bradesco, Amil, SulAmérica, etc.) e conciliar glosas com rapidez.",
    },
    {
      question: "Posso mudar de plano ou cancelar a qualquer momento?",
      answer:
        "Sim, sem multas contratuais e sem pegadinhas. No plano mensal você pode cancelar quando quiser. Se sua clínica crescer e precisar de mais contas ou do módulo financeiro, o upgrade é instantâneo.",
    },
    {
      question: "Como funciona o suporte técnico e atendimento aos planos?",
      answer:
        "Nos planos Profissional (Intermediário) e Ilimitado (Avançado), o atendimento é 100% humanizado: você e sua equipe conversam diretamente no WhatsApp com uma pessoa real da nossa equipe de especialistas para tirar dúvidas e auxiliar na rotina, sem chatbots ou robôs engessados.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white text-slate-900 relative border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 text-[#0d5c6b] border border-teal-200 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Tire Suas Dúvidas
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Tudo o que você precisa saber para começar a usar o Clinic Manager hoje mesmo.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-200/90 overflow-hidden bg-slate-50/50 transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 font-display">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "bg-[#0d5c6b] text-white rotate-180" : "bg-slate-200/70 text-slate-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* WhatsApp support callout */}
        <div className="mt-12 p-6 rounded-2xl bg-teal-50/80 border border-teal-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-slate-900">Ainda tem alguma dúvida específica?</h4>
            <p className="text-xs text-slate-600 mt-0.5">Nossa equipe de consultores responde em menos de 5 minutos.</p>
          </div>
          <a
            href="https://wa.me/5516992792142?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20sobre%20o%20Clinic%20Manager"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-[#0d5c6b] hover:bg-[#094754] text-white font-bold text-xs flex items-center gap-2 shadow-md transition-all shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
