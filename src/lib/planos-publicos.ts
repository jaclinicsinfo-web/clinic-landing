export interface PlanoPublico {
  codigo: string;
  nome: string;
  precoMensal: number;
}

export function reais(valor: number) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function urlApi(caminho: string) {
  const base = (process.env.NEXT_PUBLIC_API_URL ?? "").replace(/\/$/, "");
  if (!base) return "";
  return `${base}${caminho.startsWith("/") ? caminho : `/${caminho}`}`;
}

export function linkDoSistema(caminho = "/login") {
  const base = (process.env.NEXT_PUBLIC_APP_URL ?? "").replace(/\/$/, "");
  if (!base) return "";
  return `${base}${caminho.startsWith("/") ? caminho : `/${caminho}`}`;
}

export async function listarPlanosPublicos(): Promise<PlanoPublico[] | null> {
  const url = urlApi("/planos");
  if (!url) return null;

  try {
    const resposta = await fetch(url, { cache: "no-store" });
    if (!resposta.ok) return null;
    const corpo = (await resposta.json()) as { planos?: PlanoPublico[] };
    return corpo.planos ?? null;
  } catch {
    return null;
  }
}
