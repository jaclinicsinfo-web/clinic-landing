import Image from "next/image";
import { BRAND } from "@/lib/brand";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  variant?: "onDark" | "onLight";
  size?: "nav" | "hero" | "footer";
  className?: string;
};

export function BrandMark({
  variant = "onDark",
  size = "nav",
  className,
}: BrandMarkProps) {
  const onDark = variant === "onDark";

  if (size === "hero") {
    return (
      <Image
        src={BRAND.logoSrc}
        alt={BRAND.name}
        width={890}
        height={520}
        className={cn(
          "h-28 w-auto sm:h-36 object-contain",
          onDark && "brightness-0 invert",
          className,
        )}
        priority
      />
    );
  }

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src={BRAND.iconSrc}
        alt=""
        width={560}
        height={560}
        className={cn(
          "h-9 w-9 sm:h-10 sm:w-10 object-contain",
          onDark && "brightness-0 invert",
        )}
        priority={size === "nav"}
      />
      <span
        className={cn(
          "font-bold text-[17px] sm:text-lg tracking-tight leading-none",
          variant === "onDark" ? "text-white" : "text-ja-ink",
        )}
      >
        {BRAND.name}
      </span>
    </span>
  );
}
