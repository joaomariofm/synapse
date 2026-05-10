import type { Meta, StoryObj } from '@storybook/react-vite'
import { TagChip } from './TagChip'

const meta = {
  title: 'Atoms/TagChip',
  component: TagChip,
  tags: ['autodocs'],
  argTypes: {
    tag: { control: 'text' },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md'],
    },
  },
} satisfies Meta<typeof TagChip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { tag: 'cardio' },
}

export const NestedTag: Story = {
  args: { tag: 'anking::step1::pharm' },
}

export const Small: Story = {
  args: { tag: 'high-yield', size: 'sm' },
}

export const Group: Story = {
  render: () => (
    <div className="flex flex-wrap gap-1.5">
      <TagChip tag="cardio" />
      <TagChip tag="pharm" />
      <TagChip tag="anking::step1" />
      <TagChip tag="high-yield" />
      <TagChip tag="anatomy::heart" />
    </div>
  ),
}
