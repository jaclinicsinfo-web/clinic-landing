"use client";

import React from "react";
import {
  Activity,
  ShieldCheck,
  Heart,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  ArrowUp,
} from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#07191f] text-slate-400 text-xs border-t border-teal-950 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0c3f4a] to-[#0d5c6b] flex items-center justify-center text-white shadow-md">
                <Activity className="w-5 h-5 text-teal-300" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white font-display">
                Clinic<span className="text-teal-400">Manager</span>
              </span>
            </a>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              O ecossistema completo para gestão clínica e consultórios médicos. Agenda inteligente, prontuário eletrônico em nuvem, controle financeiro TISS e Agente de IA.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-semibold">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Todos os sistemas operando normalmente (99.9% uptime)</span>
            </div>

            <div className="pt-2 text-[11px] text-slate-500">
              CNPJ: 00.000.000/0001-00 · São Paulo - SP, Brasil
            </div>
          </div>

          {/* Col 3: Módulos */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Módulos do Sistema
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#modulos" className="hover:text-white transition-colors">Agenda Inteligente</a></li>
              <li><a href="#modulos" className="hover:text-white transition-colors">Prontuário Eletrônico LGPD</a></li>
              <li><a href="#modulos" className="hover:text-white transition-colors">Financeiro & Fluxo de Caixa</a></li>
              <li><a href="#modulos" className="hover:text-white transition-colors">Lotes de Convênios (TISS)</a></li>
              <li><a href="#modulos" className="hover:text-white transition-colors">Estoque & Medicamentos</a></li>
              <li><a href="#modulos" className="hover:text-white transition-colors">Lembretes WhatsApp</a></li>
              <li><a href="#modulos" className="hover:text-white transition-colors">Agente Clinic AI</a></li>
            </ul>
          </div>

          {/* Col 4: Links Rápidos */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Navegação
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#preview" className="hover:text-white transition-colors">Preview Interativo</a></li>
              <li><a href="#calculadora" className="hover:text-white transition-colors">Calculadora de ROI</a></li>
              <li><a href="#planos" className="hover:text-white transition-colors">Tabela de Planos</a></li>
              <li><a href="#seguranca" className="hover:text-white transition-colors">Segurança & LGPD</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Col 5: Contato & Suporte */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Atendimento & Suporte
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <a href="https://wa.me/5516992792142" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  (16) 99279-2142 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-teal-400" />
                <a href="mailto:contato@clinicmanager.com.br" className="hover:text-white">
                  contato@clinicmanager.com.br
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>Atendimento em todo o território nacional</span>
              </li>
            </ul>

            <div className="pt-2">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-teal-200">
                🛡️ Suporte técnico humanizado com especialistas reais de Segunda a Sábado.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Clinic Manager — Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Política de Privacidade LGPD</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Segurança da Informação</a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors flex items-center gap-1"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Topo</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
