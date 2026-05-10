import type { Meta, StoryObj } from '@storybook/react-vite'
import { DuePill } from './DuePill'

const meta = {
  title: 'Atoms/DuePill',
  component: DuePill,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['new', 'learning', 'review', 'zero', 'suspended'],
    },
    children: { control: 'text' },
  },
} satisfies Meta<typeof DuePill>

export default meta
type Story = StoryObj<typeof meta>

export const New: Story = {
  args: { variant: 'new', children: '12' },
}

export const Learning: Story = {
  args: { variant: 'learning', children: '8' },
}

export const Review: Story = {
  args: { variant: 'review', children: '27' },
}

export const Zero: Story = {
  args: { variant: 'zero', children: '0' },
}

export const Suspended: Story = {
  args: { variant: 'suspended', children: '⏸' },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <DuePill variant="new">12</DuePill>
        <DuePill variant="learning">8</DuePill>
        <DuePill variant="review">27</DuePill>
        <DuePill variant="zero">0</DuePill>
        <DuePill variant="suspended">⏸</DuePill>
      </div>
      <div className="flex items-center gap-3">
        <DuePill variant="review">2d</DuePill>
        <DuePill variant="review">5d</DuePill>
        <DuePill variant="review">today</DuePill>
        <DuePill variant="new">new</DuePill>
      </div>
    </div>
  ),
}
