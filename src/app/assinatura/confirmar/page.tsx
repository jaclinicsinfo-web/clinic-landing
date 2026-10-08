"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import * as React from "react";
import { Suspense } from "react";

import { MolduraAssinatura } from "@/components/assinatura/moldura";
import { linkDoSistema, urlApi } from "@/lib/planos-publicos";

function ConfirmarPagamento() {
  const params = useSearchParams();
  const pedido = params.get("pedido") ?? "";
  const [erro, setErro] = React.useState("");
  const [enviando, setEnviando] = React.useState(false);
  const [pronto, setPronto] = React.useState<{ mensagem: string; email: string; senhaTemporaria?: string } | null>(null);
  const login = linkDoSistema("/login");

  async function confirmar() {
    setErro("");
    setEnviando(true);
    const url = urlApi("/assinatura/confirmar");
    try {
      if (!url) throw new Error("O endereço da API não está configurado.");
      const resposta = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pedidoId: pedido }),
      });
      const json = (await resposta.json().catch(() => null)) as {
        message?: string;
        mensagem?: string;
        email?: string;
        senhaTemporaria?: string;
      } | null;
      if (!resposta.ok) throw new Error(json?.message || "Não foi possível confirmar o pagamento.");
      setPronto({
        mensagem: json?.mensagem || "Pagamento confirmado.",
        email: json?.email || "",
        senhaTemporaria: json?.senhaTemporaria,
      });
    } catch (err) {
      setErro(err instanceof Error ? err.message : "Não foi possível confirmar o pagamento.");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <MolduraAssinatura>
      <div className="rounded-2xl border border-ja-line bg-ja-card p-6 sm:p-8">
        {pronto ? (
          <>
            <h1 className="text-2xl font-bold tracking-tight">{pronto.mensagem}</h1>
            {pronto.email ? <p className="mt-3 text-sm text-ja-muted">Enviado para {pronto.email}.</p> : null}
            {pronto.senhaTemporaria ? (
              <p className="mt-4 rounded-xl bg-ja-surface px-3 py-2 text-sm text-ja-ink">
                Senha temporária deste ambiente: <span className="font-semibold">{pronto.senhaTemporaria}</span>
              </p>
            ) : null}
            {login ? (
              <a
                href={login}
                className="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl bg-ja-teal px-5 text-sm font-semibold text-white hover:bg-ja-teal-hover"
              >
                Ir para o sistema
              </a>
            ) : null}
          </>
        ) : (
          <>
            <p className="text-xs font-bold uppercase tracking-wider text-ja-teal">Pagamento local</p>
            <h1 className="mt-2 text-2xl font-bold tracking-tight">Confirmar a assinatura</h1>
            <p className="mt-3 text-sm leading-relaxed text-ja-muted">
              Este passo existe só no ambiente de desenvolvimento, enquanto o Mercado Pago não está configurado. Ao confirmar, a clínica é aberta como paga e o acesso segue por e-mail.
            </p>
            {erro ? <p className="mt-4 text-sm text-ja-ink">{erro}</p> : null}
            <button
              type="button"
              disabled={!pedido || enviando}
              onClick={confirmar}
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl bg-ja-teal px-5 text-sm font-semibold text-white hover:bg-ja-teal-hover disabled:opacity-60"
            >
              {enviando ? "Confirmando…" : "Confirmar pagamento"}
            </button>
            <p className="mt-4">
              <Link href="/#planos" className="text-sm font-medium text-ja-muted hover:text-ja-ink">
                Voltar aos planos
              </Link>
            </p>
          </>
        )}
      </div>
    </MolduraAssinatura>
  );
}

export default function ConfirmarPage() {
  return (
    <Suspense fallback={<p className="px-4 py-16 text-sm text-ja-muted">Carregando…</p>}>
      <ConfirmarPagamento />
    </Suspense>
  );
}
