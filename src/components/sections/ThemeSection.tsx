"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme, type Theme } from "@/components/theme/ThemeProvider";

function LightPreview() {
  return (
    <div className="rounded-xl overflow-hidden border border-[#D4E0E3] bg-white h-36 sm:h-40">
      <div className="flex h-full">
        <div className="w-10 sm:w-12 shrink-0 bg-[#145C69] flex flex-col gap-1.5 p-2">
          <span className="h-1.5 w-6 rounded-full bg-white/80" />
          <span className="h-1.5 w-4 rounded-full bg-white/35" />
          <span className="h-1.5 w-5 rounded-full bg-white/35" />
        </div>
        <div className="flex-1 p-3 flex flex-col">
          <div className="flex gap-2 mb-3">
            <span className="h-2 w-16 rounded-full bg-[#D4E0E3]" />
            <span className="h-2 w-10 rounded-full bg-[#E8F1F3]" />
          </div>
          <div className="mt-auto flex items-end gap-1.5 h-16 sm:h-20">
            {[38, 52, 42, 70, 48, 64, 36].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm"
                style={{
                  height: `${h}%`,
                  backgroundColor: i % 2 === 0 ? "#145C69" : "#2A9B8F",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DarkPreview() {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 bg-[#152433] h-36 sm:h-40">
      <div className="flex h-full">
        <div className="w-10 sm:w-12 shrink-0 bg-[#0B1520] flex flex-col gap-1.5 p-2 border-r border-white/8">
          <span className="h-1.5 w-6 rounded-full bg-white/70" />
          <span className="h-1.5 w-4 rounded-full bg-white/25" />
          <span className="h-1.5 w-5 rounded-full bg-white/25" />
        </div>
        <div className="flex-1 p-3 flex flex-col">
          <div className="flex gap-2 mb-3">
            <span className="h-2 w-16 rounded-full bg-white/20" />
            <span className="h-2 w-10 rounded-full bg-white/10" />
          </div>
          <div className="mt-auto flex items-end gap-1.5 h-16 sm:h-20">
            {[40, 58, 46, 78, 52, 66, 38].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm"
                style={{
                  height: `${h}%`,
                  backgroundColor: i % 2 === 0 ? "#3B82F6" : "#22C55E",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ThemeSection() {
  const { theme, setTheme } = useTheme();

  const options: {
    id: Theme;
    label: string;
    description: string;
    icon: typeof Sun;
    preview: React.ReactNode;
  }[] = [
    {
      id: "light",
      label: "Claro",
      description: "O tema atual do sistema, com fundo claro e barra lateral em teal.",
      icon: Sun,
      preview: <LightPreview />,
    },
    {
      id: "dark",
      label: "Escuro",
      description:
        "Superfícies escuras no padrão TailAdmin, com cards elevados e gráficos em alto contraste.",
      icon: Moon,
      preview: <DarkPreview />,
    },
  ];

  return (
    <section
      id="estilizacao"
      className="py-12 md:py-16 lg:py-20 bg-ja-surface text-ja-ink relative overflow-hidden border-t border-ja-line"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ja-card text-ja-teal border border-ja-line text-xs font-bold uppercase tracking-wider mb-3">
            <Sun className="w-3.5 h-3.5" />
            Estilização
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ja-ink tracking-tight">
            Tema claro ou escuro — como a equipe preferir
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ja-muted">
            No sistema, a preferência é salva na conta e vale em qualquer dispositivo. Experimente agora nesta página: o visual muda na hora.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {options.map((option) => {
            const Icon = option.icon;
            const isActive = theme === option.id;

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setTheme(option.id)}
                className={`text-left rounded-2xl p-4 sm:p-5 border transition-all ${
                  isActive
                    ? "bg-ja-card border-ja-teal ring-2 ring-ja-teal/25 shadow-lg"
                    : "bg-ja-card border-ja-line hover:border-ja-teal/40"
                }`}
              >
                {option.preview}
                <div className="mt-4 flex items-start gap-3">
                  <span
                    className={`mt-0.5 w-8 h-8 rounded-lg inline-flex items-center justify-center shrink-0 ${
                      isActive
                        ? "bg-ja-teal text-white"
                        : "bg-ja-surface text-ja-teal border border-ja-line"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-ja-ink">{option.label}</span>
                      {isActive && (
                        <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full bg-ja-teal text-white">
                          Em uso
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-xs text-ja-muted leading-relaxed">
                      {option.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
