import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

type MaterialIconProps = {
  name: string;
  className?: string;
  filled?: boolean;
  style?: CSSProperties;
};

export function MaterialIcon({ name, className, filled, style }: MaterialIconProps) {
  return (
    <span
      className={cn("material-symbols-outlined align-middle", className)}
      style={{
        fontFamily: '"Material Symbols Outlined", sans-serif',
        fontFeatureSettings: '"liga" 1',
        fontVariationSettings: filled
          ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"
          : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
        ...style
      }}
      aria-hidden
    >
      {name}
    </span>
  );
}
