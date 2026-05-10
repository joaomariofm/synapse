import { Button } from "@/components/ui/button"
import { CountsInline } from "@/components/molecules/CountsInline"
import { cn } from "@/lib/utils"

type DeckHeroProps = {
  dueLabel?: string
  totalDue: number
  newCount: number
  learningCount: number
  reviewCount: number
  etaMinutes?: number
  studyLabel?: string
  onStudyClick?: () => void
  disabled?: boolean
  className?: string
}

export function DeckHero({
  dueLabel = "due today",
  totalDue,
  newCount,
  learningCount,
  reviewCount,
  etaMinutes,
  studyLabel = "Study now",
  onStudyClick,
  disabled = false,
  className,
}: DeckHeroProps) {
  const nothingDue = totalDue === 0
  return (
    <section
      className={cn(
        "flex flex-col items-center px-7 pt-10 pb-6 text-center",
        className
      )}
    >
      <div className="text-base text-muted-foreground mb-1">{dueLabel}</div>
      <div
        className={cn(
          "text-[8rem] leading-none font-bold tabular-nums",
          nothingDue ? "text-muted-foreground" : "text-primary"
        )}
      >
        {totalDue}
      </div>

      <CountsInline
        className="mt-4"
        items={[
          { variant: "new", count: newCount, label: "new" },
          { variant: "learning", count: learningCount, label: "learning" },
          { variant: "review", count: reviewCount, label: "review" },
        ]}
      />

      <Button
        size="lg"
        className="mt-7 px-9 text-base"
        onClick={onStudyClick}
        disabled={disabled || nothingDue}
      >
        {studyLabel} →
      </Button>

      {typeof etaMinutes === "number" && !nothingDue && (
        <div className="mt-2 text-sm text-muted-foreground">
          ≈ {etaMinutes} min
        </div>
      )}
    </section>
  )
}
