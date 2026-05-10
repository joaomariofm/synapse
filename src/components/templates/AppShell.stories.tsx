import type { Meta, StoryObj } from "@storybook/react-vite"
import { AppBar } from "@/components/organisms/AppBar"
import { BottomTabBar } from "@/components/organisms/BottomTabBar"
import { AppShell } from "./AppShell"

const meta = {
  title: "Templates/AppShell",
  component: AppShell,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof AppShell>

export default meta
type Story = StoryObj<typeof meta>

const placeholderBody = (
  <div className="flex flex-1 items-center justify-center text-muted-foreground">
    body slot
  </div>
)

export const Empty: Story = {
  args: {
    children: placeholderBody,
  },
}

export const HeaderOnly: Story = {
  args: {
    header: <AppBar title="Synapse" />,
    children: placeholderBody,
  },
}

export const BottomBarOnly: Story = {
  args: {
    children: placeholderBody,
    bottomBar: <BottomTabBar active="home" />,
  },
}

export const HeaderAndBottomBar: Story = {
  args: {
    header: <AppBar title="Synapse" />,
    children: placeholderBody,
    bottomBar: <BottomTabBar active="home" />,
  },
}
