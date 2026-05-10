import type { LucideIcon } from "lucide-react"
import { Icon } from "@/components/atoms/Icon"
import { cn } from "@/lib/utils"

type TabBarItemProps = {
  icon: LucideIcon
  label: string
  active?: boolean
  onClick?: () => void
  className?: string
}

export function TabBarItem({
  icon,
  label,
  active = false,
  onClick,
  className,
}: TabBarItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "flex flex-1 flex-col items-center justify-center gap-1 py-1.5 transition-colors",
        active
          ? "text-primary"
          : "text-muted-foreground hover:text-foreground",
        "focus-visible:outline-none",
        className
      )}
    >
      <Icon as={icon} size="xl" aria-label={label} />
      <span className="text-xs font-medium">{label}</span>
    </button>
  )
}
