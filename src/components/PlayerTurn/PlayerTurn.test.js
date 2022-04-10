import { screen } from '@testing-library/react'

import { default as PlayerTurn } from '.'

describe("Create game page", () => {
  test("it renders the PlayerTurn component", () => {
    renderWithProviders(<PlayerTurn turn={"1"}/>)
    const heading = screen.getByText(/player 1/i)
    expect(heading).toBeInTheDocument()
  })

  test("it renders the correct player's turn", () => {
    renderWithProviders(<PlayerTurn turn={"1"}/>)
    const heading = screen.getByRole('heading')
    expect(heading.textContent).toMatch(/player 1/i)
  })
})
