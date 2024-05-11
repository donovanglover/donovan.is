import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import Card from '@/components/Card'

describe('Card', () => {
  beforeEach(() => {
    render(
      <Card
        project={{
          name: 'new-tab-identity',
          stars: 0,
          pushed: 2024,
          created: 2024,
          language: 'typescript',
          description: 'Browse the web from multiple locations at once with Mullvad VPN.'
        }}
      />
    )
  })

  it('should render', () => {
    expect(screen.getByText(/new-tab-identity/)).toBeDefined()
  })
})
