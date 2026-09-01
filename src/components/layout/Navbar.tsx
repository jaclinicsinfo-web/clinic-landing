"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  Menu,
  X,
  Phone,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  CalendarCheck,
} from "lucide-react";

interface NavbarProps {
  onOpenDemo: () => void;
}

export function Navbar({ onOpenDemo }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Módulos", href: "#modulos" },
    { label: "Preview Interativo", href: "#preview" },
    { label: "Calculadora de ROI", href: "#calculadora" },
    { label: "Planos & Preços", href: "#planos" },
    { label: "Segurança LGPD", href: "#seguranca" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#06161c]/85 backdrop-blur-xl border-b border-teal-900/60 py-3 shadow-lg shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0c3f4a] to-[#2a9d8f] flex items-center justify-center text-white shadow-lg shadow-teal-950/50 group-hover:scale-105 transition-transform border border-teal-400/30">
              <Activity className="w-6 h-6 text-teal-200" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-white font-display">
                  Clinic<span className="text-teal-400">Manager</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 hidden sm:inline-flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5 text-amber-400" /> v3.0 IA
                </span>
              </div>
              <span className="text-[11px] text-teal-300/70 font-medium hidden md:block">
                Software de Gestão Clínica Integrada
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-teal-950/70 p-1.5 rounded-full border border-teal-800/60 backdrop-blur-xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-1.5 text-xs font-semibold text-teal-100 hover:text-white hover:bg-[#0d5c6b]/60 rounded-full transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Clinic%20Manager"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs font-semibold text-teal-200 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>(11) 99999-9999</span>
            </a>

            <button
              onClick={onOpenDemo}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0d5c6b] to-[#2a9d8f] hover:brightness-110 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-teal-950/60 hover:shadow-teal-500/20 transition-all active:scale-95 border border-teal-400/30"
            >
              <CalendarCheck className="w-3.5 h-3.5 text-teal-200" />
              <span>Agendar Demonstração</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenDemo}
              className="px-3 py-1.5 rounded-full bg-[#0d5c6b] text-white text-xs font-bold sm:hidden"
            >
              Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-teal-200 hover:bg-teal-900/60 transition-colors"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#071d24]/95 backdrop-blur-2xl border-b border-teal-800/80 px-6 py-5 shadow-2xl overflow-hidden text-white"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 text-sm font-medium text-teal-100 hover:text-white border-b border-teal-900/60 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-teal-500" />
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDemo();
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0d5c6b] to-[#2a9d8f] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Agendar Demonstração Gratuita</span>
                </button>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl border border-teal-700/60 text-teal-200 font-medium text-sm flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Falar no WhatsApp: (11) 99999-9999</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
