import { Search, Settings } from "lucide-react"
import { Icon } from "@/components/atoms/Icon"
import { AppBar } from "@/components/organisms/AppBar"
import { BottomTabBar, type TabKey } from "@/components/organisms/BottomTabBar"
import { DeckHero } from "@/components/organisms/DeckHero"
import {
  DeckRecent,
  type RecentDeck,
} from "@/components/organisms/DeckRecent"
import { AppShell } from "@/components/templates/AppShell"
import { Button } from "@/components/ui/button"

type HomeViewProps = {
  totalDue: number
  newCount: number
  learningCount: number
  reviewCount: number
  etaMinutes?: number
  recentDecks: RecentDeck[]
  activeTab?: TabKey
  onStudyClick?: () => void
  onSearchClick?: () => void
  onSettingsClick?: () => void
  onDeckSelect?: (id: string) => void
  onTabChange?: (key: TabKey) => void
}

export function HomeView({
  totalDue,
  newCount,
  learningCount,
  reviewCount,
  etaMinutes,
  recentDecks,
  activeTab = "home",
  onStudyClick,
  onSearchClick,
  onSettingsClick,
  onDeckSelect,
  onTabChange,
}: HomeViewProps) {
  return (
    <AppShell
      header={
        <AppBar
          title="Synapse"
          actions={
            <>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Search"
                onClick={onSearchClick}
              >
                <Icon as={Search} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Settings"
                onClick={onSettingsClick}
              >
                <Icon as={Settings} />
              </Button>
            </>
          }
        />
      }
      bottomBar={<BottomTabBar active={activeTab} onTabChange={onTabChange} />}
    >
      <DeckHero
        totalDue={totalDue}
        newCount={newCount}
        learningCount={learningCount}
        reviewCount={reviewCount}
        etaMinutes={etaMinutes}
        onStudyClick={onStudyClick}
      />

      <div className="mx-7 border-t border-dashed border-border my-3" />

      <DeckRecent decks={recentDecks} onDeckSelect={onDeckSelect} />

      <div className="flex-1" />
    </AppShell>
  )
}
