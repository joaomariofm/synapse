import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const filterChipVariants = cva(
  "inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium transition-colors cursor-pointer select-none",
  {
    variants: {
      active: {
        true: "border-primary bg-primary text-primary-foreground hover:bg-primary/90",
        false: "border-border bg-background text-foreground hover:bg-muted",
      },
    },
    defaultVariants: {
      active: false,
    },
  }
)

type FilterChipProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof filterChipVariants>

export function FilterChip({
  className,
  active,
  children,
  type = "button",
  ...props
}: FilterChipProps) {
  return (
    <button
      type={type}
      aria-pressed={active ?? false}
      className={cn(filterChipVariants({ active }), className)}
      {...props}
    >
      {children}
    </button>
  )
}
