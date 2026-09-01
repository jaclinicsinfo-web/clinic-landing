"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Dra. Renata Albuquerque",
      role: "Diretora Clínica · Instituto Viva Saúde (SP)",
      text: "Antes do Clinic Manager, tínhamos cerca de 20% de faltas todo mês. Com o envio automático de lembretes no WhatsApp e a confirmação em 1 clique, nossa taxa de no-show caiu para menos de 4%. O sistema se pagou logo na primeira semana.",
      rating: 5,
      specialty: "Multi-especialidades (12 médicos)",
      avatarInitials: "RA",
      avatarBg: "bg-[#0d5c6b]",
    },
    {
      name: "Dr. Marcelo Bittencourt",
      role: "Psicólogo Clínico & Gestor · Espaço Mente & Ação (RJ)",
      text: "A facilidade do prontuário com controle de humor e notas de evolução agilizou meu atendimento. Além disso, a conciliação automática com PIX facilitou a vida dos meus pacientes e da minha contabilidade.",
      rating: 5,
      specialty: "Psicologia & Terapia",
      avatarInitials: "MB",
      avatarBg: "bg-emerald-800",
    },
    {
      name: "Dra. Camila Nogueira",
      role: "Sócia Proprietária · Clínica Odonto & Estética (MG)",
      text: "Faturar os lotes de convênios sem tomar glosas era nosso maior pesadelo. O módulo TISS do Clinic Manager valida tudo antes do envio. Reduzimos nosso retrabalho financeiro a zero.",
      rating: 5,
      specialty: "3 Unidades / 18 Profissionais",
      avatarInitials: "CN",
      avatarBg: "bg-indigo-800",
    },
  ];

  return (
    <section className="py-24 bg-[#06161c] text-white relative overflow-hidden border-t border-teal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-400/20 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            Experiência Comprovada
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Quem usa recomenda e não troca
          </h2>
          <p className="mt-3 text-base sm:text-lg text-teal-100/70">
            Veja o que os profissionais e gestores de saúde relatam sobre a transformação da rotina em suas clínicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-[#0b242d] rounded-3xl p-7 border border-teal-800/50 shadow-xl hover:border-teal-400/60 hover:shadow-teal-950/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-teal-700/60" />
                </div>

                <p className="text-xs sm:text-sm text-teal-100/90 leading-relaxed italic">
                  &quot;{item.text}&quot;
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-teal-900/60 flex items-center gap-3">
                <div className={`w-11 h-11 rounded-full ${item.avatarBg} text-white font-bold text-xs flex items-center justify-center shrink-0 border border-white/20`}>
                  {item.avatarInitials}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">{item.name}</h4>
                  <p className="text-[11px] text-teal-300/70">{item.role}</p>
                  <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-semibold mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
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
