"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Clock3, Layers } from "lucide-react";
import { CONTACT_CONFIG } from "@/lib/constants";
import { PLANOS } from "@/lib/planos";
import { BRAND } from "@/lib/brand";

export function PlansSection() {
  return (
    <section id="planos" className="py-12 md:py-16 lg:py-20 bg-ja-surface text-ja-ink relative border-t border-ja-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ja-card text-ja-teal border border-ja-line text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            Planos
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ja-ink tracking-tight">
            Escolha o plano pelo que a clínica usa hoje
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ja-muted">
            Compare os módulos e solicite um orçamento sob medida. Valores sob consulta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {PLANOS.map((plano, index) => (
            <motion.article
              key={plano.codigo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={`flex flex-col rounded-2xl border p-6 sm:p-7 ${
                plano.destaque
                  ? "bg-ja-brand text-white border-ja-brand shadow-lg lg:-translate-y-2"
                  : "bg-ja-card text-ja-ink border-ja-line shadow-sm"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-bold font-display">{plano.nome}</h3>
                {plano.destaque && (
                  <span className="text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-ja-teal text-white">
                    Mais escolhido
                  </span>
                )}
              </div>

              <p className={`mt-2 text-sm leading-relaxed ${plano.destaque ? "text-white/75" : "text-ja-muted"}`}>
                {plano.resumo}
              </p>

              <div className={`mt-5 rounded-xl border px-4 py-3 ${
                plano.destaque ? "border-white/15 bg-white/8" : "border-ja-line bg-ja-surface"
              }`}>
                <p className={`text-sm font-semibold ${plano.destaque ? "text-white" : "text-ja-ink"}`}>
                  Orçamento sob consulta
                </p>
                <p className={`mt-0.5 text-xs ${plano.destaque ? "text-white/65" : "text-ja-muted"}`}>
                  Fale conosco e receba a proposta do plano {plano.nome}.
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {plano.limites.map((limite) => (
                  <span
                    key={limite}
                    className={`text-xs font-semibold px-2.5 py-1 rounded-lg border ${
                      plano.destaque
                        ? "border-white/15 bg-white/8 text-white/85"
                        : "border-ja-line bg-ja-surface text-ja-ink"
                    }`}
                  >
                    {limite}
                  </span>
                ))}
              </div>

              <ul className={`mt-6 space-y-3 text-sm flex-1 border-t pt-5 ${plano.destaque ? "border-white/10" : "border-ja-line"}`}>
                {plano.itens.map((item) => {
                  const emDesenvolvimento = item.status === "desenvolvimento";
                  return (
                    <li key={item.texto} className="flex items-start gap-2.5">
                      {emDesenvolvimento ? (
                        <Clock3 className={`w-4 h-4 shrink-0 mt-0.5 ${plano.destaque ? "text-white/70" : "text-ja-muted"}`} />
                      ) : (
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plano.destaque ? "text-white" : "text-ja-teal"}`} />
                      )}
                      <span className={plano.destaque ? "text-white/85" : "text-ja-ink"}>
                        {item.texto}
                        {emDesenvolvimento && (
                          <span
                            className={`ml-2 inline-flex align-middle text-[10px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-md ${
                              plano.destaque
                                ? "bg-white/10 text-white"
                                : "bg-ja-surface text-ja-muted border border-ja-line"
                            }`}
                          >
                            Em desenvolvimento
                          </span>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <a
                href={CONTACT_CONFIG.getWhatsAppUrl(
                  `Olá! Gostaria de solicitar um orçamento do plano ${plano.nome} da ${BRAND.name}.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-7 min-h-11 w-full rounded-xl font-semibold text-sm inline-flex items-center justify-center gap-2 transition-colors ${
                  plano.destaque
                    ? "bg-ja-teal hover:bg-ja-teal-hover text-white"
                    : "bg-ja-brand hover:bg-ja-dark text-white"
                }`}
              >
                Solicite seu orçamento
                <ArrowRight className="w-4 h-4" />
              </a>
              <p
                className={`mt-3 text-center text-xs ${
                  plano.destaque ? "text-white/65" : "text-ja-muted"
                }`}
              >
                WhatsApp {CONTACT_CONFIG.phoneFormatted}
              </p>
            </motion.article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-ja-muted max-w-2xl mx-auto">
          Power BI e o agente de IA entram no plano Ilimitado e seguem em desenvolvimento: a área aparece no menu, mas ainda não opera no dia a dia.
        </p>
      </div>
    </section>
  );
}
