import { DuePill } from "@/components/atoms/DuePill"
import { cn } from "@/lib/utils"

type CountItem = {
  variant: "new" | "learning" | "review"
  count: number
  label: string
}

type CountsInlineProps = {
  items: CountItem[]
  className?: string
}

export function CountsInline({ items, className }: CountsInlineProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-4 text-sm text-muted-foreground",
        className
      )}
    >
      {items.map((item) => (
        <span key={item.label} className="inline-flex items-center gap-1.5">
          <DuePill variant={item.variant}>{item.count}</DuePill>
          <span>{item.label}</span>
        </span>
      ))}
    </div>
  )
}
