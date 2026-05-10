import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { fn } from "storybook/test"
import { BottomTabBar, type TabKey } from "./BottomTabBar"

const meta = {
  title: "Organisms/BottomTabBar",
  component: BottomTabBar,
  tags: ["autodocs"],
  args: { onTabChange: fn() },
  argTypes: {
    active: {
      control: "inline-radio",
      options: ["home", "browse", "add", "stats"],
    },
  },
} satisfies Meta<typeof BottomTabBar>

export default meta
type Story = StoryObj<typeof meta>

export const HomeActive: Story = {
  args: { active: "home" },
}

export const BrowseActive: Story = {
  args: { active: "browse" },
}

export const Interactive: Story = {
  args: { active: "home" },
  render: () => {
    const [active, setActive] = useState<TabKey>("home")
    return <BottomTabBar active={active} onTabChange={setActive} />
  },
}
