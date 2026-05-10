import type { Meta, StoryObj } from "@storybook/react-vite"
import { fn } from "storybook/test"
import { DeckRecent } from "./DeckRecent"

const meta = {
  title: "Organisms/DeckRecent",
  component: DeckRecent,
  tags: ["autodocs"],
  args: { onDeckSelect: fn() },
} satisfies Meta<typeof DeckRecent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    decks: [
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

export const Empty: Story = {
  args: {
    title: "no recent decks yet",
    decks: [],
  },
}

export const MixedDue: Story = {
  args: {
    decks: [
      { id: "cardio", name: "Cardiology", sub: "4 subdecks", due: 27 },
      { id: "vocab", name: "Portuguese vocab", sub: "412 cards", due: 0 },
      { id: "anatomy", name: "Anatomy", sub: "8 subdecks", due: 12 },
    ],
  },
}
