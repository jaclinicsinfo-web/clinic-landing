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
          ? "bg-white/85 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0c3f4a] to-[#0d5c6b] flex items-center justify-center text-white shadow-md shadow-teal-900/15 group-hover:scale-105 transition-transform">
              <Activity className="w-5 h-5 text-teal-200" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-slate-900 font-display">
                  Clinic<span className="text-[#0d5c6b]">Manager</span>
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium hidden md:block">
                Software de Gestão Clínica Integrada
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/70 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-1.5 text-xs font-semibold text-slate-600 hover:text-[#0d5c6b] hover:bg-white rounded-full transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/5516992792142?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Clinic%20Manager"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-[#0d5c6b] flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>(16) 99279-2142</span>
            </a>

            <button
              onClick={onOpenDemo}
              className="px-5 py-2.5 rounded-full bg-[#0d5c6b] hover:bg-[#0a4956] text-white text-xs font-bold flex items-center gap-2 shadow-md shadow-teal-900/15 hover:shadow-lg transition-all active:scale-95"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
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
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
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
            className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-5 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 text-sm font-medium text-slate-700 hover:text-[#0d5c6b] border-b border-slate-100 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDemo();
                  }}
                  className="w-full py-3 rounded-xl bg-[#0d5c6b] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Agendar Demonstração Gratuita</span>
                </button>
                <a
                  href="https://wa.me/5516992792142"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-700 font-medium text-sm flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>Falar no WhatsApp: (16) 99279-2142</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
