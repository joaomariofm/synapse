import type { Meta, StoryObj } from "@storybook/react-vite"
import { LayoutGrid, Search, Plus, BarChart3 } from "lucide-react"
import { fn } from "storybook/test"
import { TabBarItem } from "./TabBarItem"

const meta = {
  title: "Molecules/TabBarItem",
  component: TabBarItem,
  tags: ["autodocs"],
  args: { onClick: fn() },
  argTypes: {
    label: { control: "text" },
    active: { control: "boolean" },
  },
} satisfies Meta<typeof TabBarItem>

export default meta
type Story = StoryObj<typeof meta>

export const Inactive: Story = {
  args: { icon: LayoutGrid, label: "home", active: false },
}

export const Active: Story = {
  args: { icon: LayoutGrid, label: "home", active: true },
}

export const Row: Story = {
  args: { icon: LayoutGrid, label: "home" },
  render: () => (
    <div className="flex w-full max-w-md border-t border-border">
      <TabBarItem icon={LayoutGrid} label="home" active />
      <TabBarItem icon={Search} label="browse" />
      <TabBarItem icon={Plus} label="add" />
      <TabBarItem icon={BarChart3} label="stats" />
    </div>
  ),
}
