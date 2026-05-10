import { DeckRow } from "@/components/molecules/DeckRow"
import { cn } from "@/lib/utils"

export type RecentDeck = {
  id: string
  name: string
  sub?: string
  due: number
}

type DeckRecentProps = {
  title?: string
  decks: RecentDeck[]
  onDeckSelect?: (id: string) => void
  className?: string
}

export function DeckRecent({
  title = "recent decks",
  decks,
  onDeckSelect,
  className,
}: DeckRecentProps) {
  return (
    <section className={cn("px-7 py-2", className)}>
      <div className="text-base text-muted-foreground mb-2">{title}</div>
      <div className="flex flex-col">
        {decks.map((deck) => (
          <DeckRow
            key={deck.id}
            name={deck.name}
            sub={deck.sub}
            due={deck.due}
            onSelect={() => onDeckSelect?.(deck.id)}
          />
        ))}
      </div>
    </section>
  )
}
