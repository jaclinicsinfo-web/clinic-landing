"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgressBar } from "@/components/layout/ScrollProgressBar";
import { HeroSection } from "@/components/sections/HeroSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { ScrollJourneySection } from "@/components/sections/ScrollJourneySection";
import { ModulesBentoSection } from "@/components/sections/ModulesBentoSection";
import { InteractiveDemoSection } from "@/components/sections/InteractiveDemoSection";
import { RoiCalculatorSection } from "@/components/sections/RoiCalculatorSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBannerSection } from "@/components/sections/CtaBannerSection";
import { ScheduleDemoModal } from "@/components/modals/ScheduleDemoModal";
import { PlanSelectModal } from "@/components/modals/PlanSelectModal";
import { MessageCircle } from "lucide-react";

export default function Home() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [planModalOpen, setPlanModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{
    name: string;
    price: string;
    annualTotal?: string;
    limit: string;
    isAnnual: boolean;
  }>({
    name: "Plano Profissional",
    price: "R$ 700/mês",
    annualTotal: "R$ 6.960/ano",
    limit: "Até 20 contas · várias unidades",
    isAnnual: false,
  });

  const handleSelectPlan = (plan: {
    name: string;
    price: string;
    annualTotal?: string;
    limit: string;
    isAnnual: boolean;
  }) => {
    setSelectedPlan(plan);
    setPlanModalOpen(true);
  };

  return (
    <main className="min-h-screen relative flex flex-col bg-[#f8fafc] text-slate-900 selection:bg-[#0d5c6b] selection:text-white">
      {/* Top Scroll Indicator */}
      <ScrollProgressBar />

      {/* Navigation */}
      <Navbar onOpenDemo={() => setDemoModalOpen(true)} />

      {/* Page Sections */}
      <HeroSection onOpenDemo={() => setDemoModalOpen(true)} />
      <SocialProofSection />
      <ScrollJourneySection />
      <ModulesBentoSection />
      <InteractiveDemoSection />
      <RoiCalculatorSection onOpenDemo={() => setDemoModalOpen(true)} />
      <PricingSection onSelectPlan={handleSelectPlan} />
      <SecuritySection />
      <TestimonialsSection />
      <FaqSection />
      <CtaBannerSection onOpenDemo={() => setDemoModalOpen(true)} />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action */}
      <a
        href="https://wa.me/5516992792142?text=Ol%C3%A1%2C%20estou%20no%20site%20do%20Clinic%20Manager%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-30 w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group border-2 border-white"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-16 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Fale com um Especialista
        </span>
      </a>

      {/* Modals */}
      <ScheduleDemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />

      <PlanSelectModal
        isOpen={planModalOpen}
        onClose={() => setPlanModalOpen(false)}
        planName={selectedPlan.name}
        planPrice={selectedPlan.price}
        annualTotal={selectedPlan.annualTotal}
        planLimit={selectedPlan.limit}
        isAnnual={selectedPlan.isAnnual}
      />
    </main>
  );
}
