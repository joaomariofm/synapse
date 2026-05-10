import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { FilterChip } from './FilterChip'

const meta = {
  title: 'Atoms/FilterChip',
  component: FilterChip,
  tags: ['autodocs'],
  argTypes: {
    active: { control: 'boolean' },
    children: { control: 'text' },
  },
} satisfies Meta<typeof FilterChip>

export default meta
type Story = StoryObj<typeof meta>

export const Inactive: Story = {
  args: { active: false, children: 'due only' },
}

export const Active: Story = {
  args: { active: true, children: 'all decks' },
}

export const Toggleable: Story = {
  args: { children: "due only" },
  render: () => {
    const [on, setOn] = useState(false)
    return (
      <FilterChip active={on} onClick={() => setOn((v) => !v)}>
        {on ? 'due only — ON' : 'due only'}
      </FilterChip>
    )
  },
}

export const Row: Story = {
  args: { children: "all decks" },
  render: () => {
    const [active, setActive] = useState('all decks')
    const filters = ['all decks', 'due only', 'flagged', 'by tag']
    return (
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <FilterChip
            key={f}
            active={active === f}
            onClick={() => setActive(f)}
          >
            {f}
          </FilterChip>
        ))}
      </div>
    )
  },
}
