import type { Meta, StoryObj } from "@storybook/react-vite"
import { Search, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/atoms/Icon"
import { AppBar } from "./AppBar"

const meta = {
  title: "Organisms/AppBar",
  component: AppBar,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
  },
} satisfies Meta<typeof AppBar>

export default meta
type Story = StoryObj<typeof meta>

export const TitleOnly: Story = {
  args: { title: "Synapse" },
}

export const WithActions: Story = {
  args: {
    title: "Synapse",
    actions: (
      <>
        <Button variant="ghost" size="icon" aria-label="Search">
          <Icon as={Search} />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Settings">
          <Icon as={Settings} />
        </Button>
      </>
    ),
  },
}
