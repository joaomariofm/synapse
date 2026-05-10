import { cva, type VariantProps } from "class-variance-authority"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const iconVariants = cva("inline-block shrink-0", {
  variants: {
    size: {
      sm: "size-3.5",
      md: "size-4",
      lg: "size-5",
      xl: "size-6",
      "2xl": "size-8",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

type IconProps = VariantProps<typeof iconVariants> & {
  as: LucideIcon
  className?: string
  strokeWidth?: number
  "aria-label"?: string
}

export function Icon({
  as: Component,
  size,
  strokeWidth,
  className,
  "aria-label": ariaLabel,
}: IconProps) {
  return (
    <Component
      className={cn(iconVariants({ size }), className)}
      strokeWidth={strokeWidth}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
    />
  )
}
