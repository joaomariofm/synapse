import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const tagChipVariants = cva(
  "inline-flex items-center rounded-md border border-border bg-muted/50 font-mono text-muted-foreground leading-none",
  {
    variants: {
      size: {
        sm: "px-1.5 py-0.5 text-[10px]",
        md: "px-2 py-1 text-xs",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

type TagChipProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof tagChipVariants> & {
    tag: string
  }

export function TagChip({ className, size, tag, ...props }: TagChipProps) {
  const display = tag.startsWith("#") ? tag : `#${tag}`
  return (
    <span className={cn(tagChipVariants({ size }), className)} {...props}>
      {display}
    </span>
  )
}
