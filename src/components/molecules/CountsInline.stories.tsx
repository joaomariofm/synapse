import type { Meta, StoryObj } from "@storybook/react-vite"
import { CountsInline } from "./CountsInline"

const meta = {
  title: "Molecules/CountsInline",
  component: CountsInline,
  tags: ["autodocs"],
} satisfies Meta<typeof CountsInline>

export default meta
type Story = StoryObj<typeof meta>

const homeItems = [
  { variant: "new" as const, count: 12, label: "new" },
  { variant: "learning" as const, count: 8, label: "learning" },
  { variant: "review" as const, count: 27, label: "review" },
]

export const Default: Story = {
  args: { items: homeItems },
}

export const SingleType: Story = {
  args: {
    items: [{ variant: "review", count: 47, label: "due today" }],
  },
}

export const AllZero: Story = {
  args: {
    items: [
      { variant: "new", count: 0, label: "new" },
      { variant: "learning", count: 0, label: "learning" },
      { variant: "review", count: 0, label: "review" },
    ],
  },
}
