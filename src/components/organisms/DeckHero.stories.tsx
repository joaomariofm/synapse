import type { Meta, StoryObj } from "@storybook/react-vite"
import { fn } from "storybook/test"
import { DeckHero } from "./DeckHero"

const meta = {
  title: "Organisms/DeckHero",
  component: DeckHero,
  tags: ["autodocs"],
  args: { onStudyClick: fn() },
} satisfies Meta<typeof DeckHero>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    totalDue: 47,
    newCount: 12,
    learningCount: 8,
    reviewCount: 27,
    etaMinutes: 18,
  },
}

export const HeavyLoad: Story = {
  args: {
    totalDue: 312,
    newCount: 80,
    learningCount: 42,
    reviewCount: 190,
    etaMinutes: 95,
  },
}

export const LightLoad: Story = {
  args: {
    totalDue: 5,
    newCount: 2,
    learningCount: 0,
    reviewCount: 3,
    etaMinutes: 2,
  },
}

export const AllCaughtUp: Story = {
  args: {
    totalDue: 0,
    newCount: 0,
    learningCount: 0,
    reviewCount: 0,
    dueLabel: "you're caught up",
  },
}
