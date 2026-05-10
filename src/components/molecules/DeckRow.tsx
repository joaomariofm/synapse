import { ChevronRight, Folder } from "lucide-react"
import { DuePill } from "@/components/atoms/DuePill"
import { Icon } from "@/components/atoms/Icon"
import { cn } from "@/lib/utils"

type DeckRowProps = {
  name: string
  sub?: string
  due: number
  onSelect?: () => void
  className?: string
}

export function DeckRow({
  name,
  sub,
  due,
  onSelect,
  className,
}: DeckRowProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "flex w-full items-center gap-3 border-b border-dashed border-border py-3 text-left",
        "hover:bg-muted/40 transition-colors",
        "focus-visible:outline-none focus-visible:bg-muted/60",
        className
      )}
    >
      <Icon as={Folder} size="lg" className="text-muted-foreground" />
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-foreground truncate">
          {name}
        </div>
        {sub && (
          <div className="text-xs text-muted-foreground font-mono truncate">
            {sub}
          </div>
        )}
      </div>
      {due > 0 ? (
        <DuePill variant="review">{due}</DuePill>
      ) : (
        <DuePill variant="zero">0</DuePill>
      )}
      <Icon as={ChevronRight} className="text-muted-foreground" />
    </button>
  )
}
