import { BarChart3, LayoutGrid, Plus, Search } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { TabBarItem } from "@/components/molecules/TabBarItem"
import { cn } from "@/lib/utils"

export type TabKey = "home" | "browse" | "add" | "stats"

type Tab = {
  key: TabKey
  icon: LucideIcon
  label: string
}

const DEFAULT_TABS: Tab[] = [
  { key: "home", icon: LayoutGrid, label: "home" },
  { key: "browse", icon: Search, label: "browse" },
  { key: "add", icon: Plus, label: "add" },
  { key: "stats", icon: BarChart3, label: "stats" },
]

type BottomTabBarProps = {
  active: TabKey
  tabs?: Tab[]
  onTabChange?: (key: TabKey) => void
  className?: string
}

export function BottomTabBar({
  active,
  tabs = DEFAULT_TABS,
  onTabChange,
  className,
}: BottomTabBarProps) {
  return (
    <nav
      className={cn(
        "flex border-t border-border bg-background",
        className
      )}
    >
      {tabs.map((tab) => (
        <TabBarItem
          key={tab.key}
          icon={tab.icon}
          label={tab.label}
          active={tab.key === active}
          onClick={() => onTabChange?.(tab.key)}
        />
      ))}
    </nav>
  )
}
