import type { Meta, StoryObj } from "@storybook/react-vite"
import { fn } from "storybook/test"
import { DeckRow } from "./DeckRow"

const meta = {
  title: "Molecules/DeckRow",
  component: DeckRow,
  tags: ["autodocs"],
  args: { onSelect: fn() },
  argTypes: {
    name: { control: "text" },
    sub: { control: "text" },
    due: { control: { type: "number", min: 0 } },
  },
} satisfies Meta<typeof DeckRow>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { name: "Cardiology", sub: "4 subdecks", due: 27 },
}

export const ImportedDeck: Story = {
  args: { name: "AnKing — Step 1", sub: "32k cards · imported", due: 6 },
}

export const ZeroDue: Story = {
  args: { name: "Portuguese vocab", sub: "412 cards", due: 0 },
}

export const NoSub: Story = {
  args: { name: "Quick Notes", due: 4 },
}

export const Group: Story = {
  args: { name: "Cardiology", due: 0 },
  render: () => (
    <div className="w-full max-w-md flex flex-col">
      <DeckRow name="Cardiology" sub="4 subdecks" due={27} />
      <DeckRow name="Pharmacology" sub="7 subdecks" due={14} />
      <DeckRow name="AnKing — Step 1" sub="32k cards · imported" due={6} />
      <DeckRow name="Portuguese vocab" sub="412 cards" due={0} />
    </div>
  ),
}
