import { HomeClient } from "@/components/HomeClient";
import { listarPlanosPublicos } from "@/lib/planos-publicos";

export const dynamic = "force-dynamic";

// ..

export default async function Home() {
  const planos = await listarPlanosPublicos();
  const precos = planos
    ? Object.fromEntries(planos.map((plano) => [plano.codigo, plano.precoMensal]))
    : null;
  const precosAnuais = planos
    ? Object.fromEntries(planos.map((plano) => [plano.codigo, plano.precoAnual]))
    : null;

  return <HomeClient precos={precos} precosAnuais={precosAnuais} />;
}
