import { cn } from "@/lib/utils"

type AppBarProps = {
  title: string
  actions?: React.ReactNode
  className?: string
}

export function AppBar({ title, actions, className }: AppBarProps) {
  return (
    <header
      className={cn(
        "flex items-center justify-between px-6 py-4 border-b border-border",
        className
      )}
    >
      <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
      {actions && <div className="flex items-center gap-3">{actions}</div>}
    </header>
  )
}
