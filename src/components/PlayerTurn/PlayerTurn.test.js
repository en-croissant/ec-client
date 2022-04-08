import { screen } from '@testing-library/react'

import { default as PlayerTurn } from '.'

describe("Create game page", () => {
  test("it renders the PlayerTurn component", () => {
    renderWithProviders(<PlayerTurn turn={"1"}/>)
    const heading = screen.getByText('Player 1')
    expect(heading.textContent).toMatch(/Player 1/i)
  })
})
