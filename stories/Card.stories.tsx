import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/test'
import Card from '@/components/Card'

const meta = {
  title: 'Card',
  component: Card,
  args: {
  }
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const SameYear: Story = {
  args: {
    href: 'https://www.example.com',
    project: {
      name: 'new-tab-identity',
      stars: 0,
      pushed: 2024,
      created: 2024,
      language: 'typescript',
      description: 'Browse the web from multiple locations at once with Mullvad VPN.'
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const element = canvas.getByText('new-tab-identity')

    await userEvent.click(element)
  }
}
