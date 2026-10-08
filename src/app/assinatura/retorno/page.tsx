"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import * as React from "react";
import { Suspense } from "react";

import { MolduraAssinatura } from "@/components/assinatura/moldura";
import { linkDoSistema, urlApi } from "@/lib/planos-publicos";

function RetornoPagamento() {
  const params = useSearchParams();
  const pedido = params.get("pedido") ?? "";
  const resultado = params.get("resultado");
  const [estado, setEstado] = React.useState<"aguardando" | "pago" | "pendente" | "erro">("aguardando");
  const [mensagem, setMensagem] = React.useState("Confirmando o pagamento…");
  const [email, setEmail] = React.useState("");
  const login = linkDoSistema("/login");

  React.useEffect(() => {
    if (!pedido || resultado === "recusado") {
      setEstado(resultado === "recusado" ? "erro" : "pendente");
      setMensagem(resultado === "recusado" ? "O pagamento não foi concluído." : "Não encontramos este pedido.");
      return;
    }

    const url = urlApi("/assinatura/sincronizar");
    if (!url) {
      setEstado("erro");
      setMensagem("O endereço da API não está configurado.");
      return;
    }

    let ativo = true;
    void fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pedidoId: pedido }),
    })
      .then(async (resposta) => {
        const json = (await resposta.json().catch(() => null)) as {
          message?: string;
          mensagem?: string;
          email?: string;
          status?: string;
        } | null;
        if (!ativo) return;
        if (!resposta.ok) {
          setEstado("erro");
          setMensagem(json?.message || "Não foi possível confirmar o pagamento.");
          return;
        }
        setMensagem(json?.mensagem || "Pagamento recebido.");
        setEmail(json?.email || "");
        setEstado(json?.status === "pago" ? "pago" : "pendente");
      })
      .catch(() => {
        if (!ativo) return;
        setEstado("erro");
        setMensagem("Não foi possível confirmar o pagamento.");
      });

    return () => {
      ativo = false;
    };
  }, [pedido, resultado]);

  return (
    <MolduraAssinatura>
      <div className="rounded-2xl border border-ja-line bg-ja-card p-6 sm:p-8">
        <h1 className="text-2xl font-bold tracking-tight">{mensagem}</h1>
        {email ? <p className="mt-3 text-sm text-ja-muted">O acesso foi enviado para {email}.</p> : null}
        <div className="mt-6">
          {estado === "pago" && login ? (
            <a
              href={login}
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-ja-teal px-5 text-sm font-semibold text-white hover:bg-ja-teal-hover"
            >
              Ir para o sistema
            </a>
          ) : (
            <Link
              href="/#planos"
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-ja-line px-5 text-sm font-semibold text-ja-ink hover:bg-ja-surface"
            >
              Voltar aos planos
            </Link>
          )}
        </div>
      </div>
    </MolduraAssinatura>
  );
}

export default function RetornoPage() {
  return (
    <Suspense fallback={<p className="px-4 py-16 text-sm text-ja-muted">Confirmando o pagamento…</p>}>
      <RetornoPagamento />
    </Suspense>
  );
}
