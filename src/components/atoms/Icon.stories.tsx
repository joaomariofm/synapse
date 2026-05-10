import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Search,
  Settings,
  Folder,
  ChevronRight,
  Plus,
  LayoutGrid,
} from "lucide-react"
import { Icon } from "./Icon"

const meta = {
  title: "Atoms/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg", "xl", "2xl"],
    },
    strokeWidth: {
      control: { type: "number", min: 0.5, max: 3, step: 0.5 },
    },
  },
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { as: Search, size: "md" },
}

export const Sizes: Story = {
  args: { as: Search },
  render: () => (
    <div className="flex items-center gap-4">
      <Icon as={Search} size="sm" />
      <Icon as={Search} size="md" />
      <Icon as={Search} size="lg" />
      <Icon as={Search} size="xl" />
      <Icon as={Search} size="2xl" />
    </div>
  ),
}

export const HomePageIcons: Story = {
  args: { as: Search },
  render: () => (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-4 text-sm">
        <Icon as={Search} />
        <span>Search</span>
      </div>
      <div className="flex items-center gap-4 text-sm">
        <Icon as={Settings} />
        <span>Settings (gear)</span>
      </div>
      <div className="flex items-center gap-4 text-sm">
        <Icon as={Folder} />
        <span>Folder (deck)</span>
      </div>
      <div className="flex items-center gap-4 text-sm">
        <Icon as={ChevronRight} />
        <span>ChevronRight</span>
      </div>
      <div className="flex items-center gap-4 text-sm">
        <Icon as={Plus} />
        <span>Plus (add)</span>
      </div>
      <div className="flex items-center gap-4 text-sm">
        <Icon as={LayoutGrid} />
        <span>LayoutGrid (home/decks)</span>
      </div>
    </div>
  ),
}

export const ColorViaClassName: Story = {
  args: { as: Folder },
  render: () => (
    <div className="flex items-center gap-4">
      <Icon as={Folder} className="text-primary" />
      <Icon as={Folder} className="text-muted-foreground" />
      <Icon as={Folder} className="text-destructive" />
    </div>
  ),
}

export const StrokeWidth: Story = {
  args: { as: Settings },
  render: () => (
    <div className="flex items-center gap-4">
      <Icon as={Settings} size="xl" strokeWidth={1} />
      <Icon as={Settings} size="xl" strokeWidth={1.5} />
      <Icon as={Settings} size="xl" strokeWidth={2} />
      <Icon as={Settings} size="xl" strokeWidth={2.5} />
    </div>
  ),
}
