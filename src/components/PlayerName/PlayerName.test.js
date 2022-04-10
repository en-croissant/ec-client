import { screen } from '@testing-library/react'

import { default as PlayerName } from '.'

describe("Create game page", () => {
  test("it renders the PlayerName component", () => {
    renderWithProviders(<PlayerName playerName="Player 1" isActive={true} isPlayer1={true}/>)
    const heading = screen.getByText(/player 1/i)
    expect(heading).toBeInTheDocument()
  })
  test("it renders the PlayerName without active or player1", () => {
    renderWithProviders(<PlayerName playerName="Player 2" isActive={false} isPlayer1={false}/>)
    const heading = screen.getByText(/player 2/i)
    expect(heading).toBeInTheDocument()
  })
})
