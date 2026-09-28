import type { Metadata } from "next";
import Script from "next/script";
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
    "Gestão clínica com agenda, pacientes, financeiro, estoque, relatórios e lembretes por WhatsApp e e-mail. Planos Essencial, Profissional e Ilimitado. Experimente 14 dias.",
  keywords: [
    "J.A. Clinics",
    "gestão de clínicas",
    "software médico",
    "acompanhamento de evolução",
    "agenda médica online",
    "sistema para consultório",
    "Clinic Manager",
  ],
  authors: [{ name: BRAND.name }],
  icons: {
    icon: "/brand/marca-ja-clinics.png",
    apple: "/brand/marca-ja-clinics.png",
  },
  openGraph: {
    title: `${BRAND.name} | Gestão clínica completa`,
    description:
      "Menos faltas. Mais controle. Agenda, pacientes, financeiro e lembretes por WhatsApp e e-mail.",
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
      <body className="min-h-screen bg-ja-surface text-ja-ink antialiased selection:bg-ja-teal selection:text-white flex flex-col font-sans">
        <Script id="ja-theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
