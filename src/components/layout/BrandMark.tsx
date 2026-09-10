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
  if (size === "hero") {
    return (
      <Image
        src={BRAND.logoSrc}
        alt={BRAND.name}
        width={315}
        height={261}
        className={cn("h-24 w-auto sm:h-28 object-contain", className)}
        priority
      />
    );
  }

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src={BRAND.iconSrc}
        alt=""
        width={40}
        height={40}
        className="h-9 w-9 sm:h-10 sm:w-10 object-contain"
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
