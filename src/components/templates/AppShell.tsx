import { cn } from "@/lib/utils"

type AppShellProps = {
  header?: React.ReactNode
  children: React.ReactNode
  bottomBar?: React.ReactNode
  className?: string
}

export function AppShell({
  header,
  children,
  bottomBar,
  className,
}: AppShellProps) {
  return (
    <div
      className={cn(
        "flex h-full min-h-screen flex-col bg-background text-foreground",
        className
      )}
    >
      {header}
      <main className="flex flex-1 flex-col min-h-0 overflow-y-auto">
        {children}
      </main>
      {bottomBar}
    </div>
  )
}
