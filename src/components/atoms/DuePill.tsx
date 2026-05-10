import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const duePillVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-1.5 text-[11px] font-medium leading-none tabular-nums min-w-[22px] h-[18px]",
  {
    variants: {
      variant: {
        new: "border-sky-500/40 bg-sky-500/10 text-sky-700 dark:text-sky-300",
        learning: "border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-300",
        review: "border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
        zero: "border-border bg-muted text-muted-foreground",
        suspended: "border-border bg-muted text-muted-foreground italic",
      },
    },
    defaultVariants: {
      variant: "review",
    },
  }
)

type DuePillProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof duePillVariants>

export function DuePill({ className, variant, children, ...props }: DuePillProps) {
  return (
    <span className={cn(duePillVariants({ variant }), className)} {...props}>
      {children}
    </span>
  )
}
