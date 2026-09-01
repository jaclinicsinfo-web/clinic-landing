import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clinic Manager | Sistema Completo de Gestão para Clínicas e Consultórios",
  description:
    "O ERP mais completo e intuitivo para clínicas médicas, psicologia e odontologia. Agenda inteligente, prontuário eletrônico LGPD, faturamento de convênios, financeiro e Agente de IA.",
  keywords: [
    "gestão de clínicas",
    "software médico",
    "prontuário eletrônico",
    "agenda médica online",
    "faturamento TISS",
    "sistema para consultório",
    "Clinic Manager",
    "ERP para psicologia",
  ],
  authors: [{ name: "Clinic Manager Team" }],
  openGraph: {
    title: "Clinic Manager | Gestão Clínica de Alta Performance",
    description:
      "Aumente o faturamento da sua clínica, reduza faltas em até 85% e automatize a rotina com IA integrada.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#f8fafc] text-[#0f1a24] antialiased selection:bg-[#0d5c6b] selection:text-white flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
