import { notFound } from "next/navigation";

import { FormularioAssinatura } from "@/components/assinatura/formulario-assinatura";
import { MolduraAssinatura } from "@/components/assinatura/moldura";
import { listarPlanosPublicos } from "@/lib/planos-publicos";

export const dynamic = "force-dynamic";

export default async function AssinarPage({
  searchParams,
}: {
  searchParams: Promise<{ plano?: string; modo?: string }>;
}) {
  const params = await searchParams;
  const modo = params.modo === "pago" ? "pago" : params.modo === "gratuito" ? "gratuito" : null;
  const planos = await listarPlanosPublicos();
  const plano = planos?.find((item) => item.codigo === params.plano);
  if (!modo || !plano || plano.precoMensal <= 0) notFound();

  return (
    <MolduraAssinatura>
      <FormularioAssinatura plano={plano.codigo} nomePlano={plano.nome} preco={plano.precoMensal} modo={modo} />
    </MolduraAssinatura>
  );
}
