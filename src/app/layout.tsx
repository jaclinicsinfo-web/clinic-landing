import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BRAND } from "@/lib/brand";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const themeInitScript = `(function(){try{var t=localStorage.getItem('ja-theme');if(t==='dark'){document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark'}}catch(e){}})();`;

export const metadata: Metadata = {
  title: `${BRAND.name} | Gestão clínica completa. Menos faltas. Mais controle.`,
  description:
    "Gestão clínica completa com agenda, acompanhamento de evolução, faturamento TISS, lembretes por WhatsApp e e-mail e assistente de IA para tirar dúvidas. Experimente 14 dias.",
  keywords: [
    "J.A. Clinics",
    "gestão de clínicas",
    "software médico",
    "acompanhamento de evolução",
    "agenda médica online",
    "faturamento TISS",
    "sistema para consultório",
    "Clinic Manager",
  ],
  authors: [{ name: BRAND.name }],
  icons: {
    icon: "/icon-squircle.png",
    apple: "/icon-squircle.png",
  },
  openGraph: {
    title: `${BRAND.name} | Gestão clínica completa`,
    description:
      "Menos faltas. Mais controle. Agenda, acompanhamento de evolução, TISS, lembretes por WhatsApp e e-mail, e IA para tirar dúvidas.",
    type: "website",
    locale: "pt_BR",
    siteName: BRAND.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen bg-ja-surface text-ja-ink antialiased selection:bg-ja-teal selection:text-white flex flex-col font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
