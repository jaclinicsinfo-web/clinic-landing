"use client";

import Link from "next/link";

import { BrandMark } from "@/components/layout/BrandMark";

export function MolduraAssinatura({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-ja-surface text-ja-ink">
      <header className="bg-ja-brand text-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" aria-label="J.A. Clinics — início">
            <BrandMark variant="onDark" size="nav" />
          </Link>
          <Link href="/#planos" className="text-sm font-medium text-white/80 hover:text-white">
            Planos
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">{children}</main>
    </div>
  );
}
