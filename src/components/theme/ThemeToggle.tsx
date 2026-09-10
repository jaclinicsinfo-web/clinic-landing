"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
  variant?: "onDark" | "onSurface";
};

export function ThemeToggle({ className, variant = "onDark" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
      title={isDark ? "Mudar para tema claro" : "Mudar para tema escuro"}
      className={cn(
        "min-h-11 min-w-11 rounded-xl inline-flex items-center justify-center transition-colors",
        variant === "onDark"
          ? "text-white/80 hover:text-white hover:bg-white/10"
          : "text-ja-ink hover:bg-ja-subtle border border-ja-line",
        className,
      )}
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}
