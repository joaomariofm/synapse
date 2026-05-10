import type { Meta, StoryObj } from "@storybook/react-vite"
import { fn } from "storybook/test"
import { HomeView } from "./HomeView"

const meta = {
  title: "Views/HomeView",
  component: HomeView,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
  args: {
    onStudyClick: fn(),
    onSearchClick: fn(),
    onSettingsClick: fn(),
    onDeckSelect: fn(),
    onTabChange: fn(),
  },
} satisfies Meta<typeof HomeView>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    totalDue: 47,
    newCount: 12,
    learningCount: 8,
    reviewCount: 27,
    etaMinutes: 18,
    recentDecks: [
      { id: "cardio", name: "Cardiology", sub: "4 subdecks", due: 27 },
      { id: "pharma", name: "Pharmacology", sub: "7 subdecks", due: 14 },
      {
        id: "anking",
        name: "AnKing — Step 1",
        sub: "32k cards · imported",
        due: 6,
      },
    ],
  },
}

export const HeavyLoad: Story = {
  args: {
    ...Default.args!,
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
    recentDecks: [
      { id: "vocab", name: "Portuguese vocab", sub: "412 cards", due: 5 },
    ],
  },
}

export const AllCaughtUp: Story = {
  args: {
    totalDue: 0,
    newCount: 0,
    learningCount: 0,
    reviewCount: 0,
    recentDecks: [
      { id: "cardio", name: "Cardiology", sub: "4 subdecks", due: 0 },
      { id: "vocab", name: "Portuguese vocab", sub: "412 cards", due: 0 },
    ],
  },
}

export const NoDecks: Story = {
  args: {
    totalDue: 0,
    newCount: 0,
    learningCount: 0,
    reviewCount: 0,
    recentDecks: [],
  },
}
