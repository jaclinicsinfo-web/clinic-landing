"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Dra. Renata Albuquerque",
      role: "Diretora Clínica · Instituto Viva Saúde (SP)",
      text: "Antes, tínhamos cerca de 20% de faltas todo mês. Com os lembretes automáticos no WhatsApp e no e-mail para pacientes e profissionais, nossa taxa de no-show caiu para menos de 4%.",
      rating: 5,
      specialty: "Multi-especialidades (12 médicos)",
      avatarInitials: "RA",
    },
    {
      name: "Dr. Marcelo Bittencourt",
      role: "Psicólogo Clínico & Gestor · Espaço Mente & Ação (RJ)",
      text: "O acompanhamento de evolução, com notas e histórico do paciente, agilizou meu atendimento. O recebimento em PIX, dinheiro ou cartão fica registrado na mesma ficha.",
      rating: 5,
      specialty: "Psicologia & Terapia",
      avatarInitials: "MB",
    },
    {
      name: "Dra. Camila Nogueira",
      role: "Sócia Proprietária · Clínica Odonto & Estética (MG)",
      text: "Fechar o lote do convênio e lançar a glosa no mesmo lugar tirou a planilha do fechamento. O financeiro da clínica passou a acompanhar o que foi apresentado e o que entrou.",
      rating: 5,
      specialty: "3 Unidades / 18 Profissionais",
      avatarInitials: "CN",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-ja-surface text-ja-ink relative overflow-hidden border-t border-ja-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ja-card text-ja-teal border border-ja-line text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-ja-teal text-ja-teal" />
            Experiência Comprovada
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ja-ink tracking-tight">
            Quem usa recomenda e não troca
          </h2>
          <p className="mt-3 text-base sm:text-lg text-ja-muted">
            Veja o que os profissionais e gestores de saúde relatam sobre a transformação da rotina em suas clínicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-ja-card rounded-2xl p-7 border border-ja-line shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-ja-teal">
                    {[...Array(item.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-ja-teal" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-ja-line" />
                </div>

                <p className="text-sm text-ja-ink/80 leading-relaxed">
                  &quot;{item.text}&quot;
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-ja-line flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-ja-teal text-white font-bold text-xs flex items-center justify-center shrink-0">
                  {item.avatarInitials}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-ja-ink">{item.name}</h4>
                  <p className="text-[11px] text-ja-muted">{item.role}</p>
                  <span className="inline-flex items-center gap-1 text-[10px] text-ja-teal font-semibold mt-0.5">
                    <CheckCircle2 className="w-3 h-3" />
                    {item.specialty}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
