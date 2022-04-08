import { screen } from '@testing-library/react'

import { default as PlayerName } from '.'

describe("Create game page", () => {
  test("it renders the PlayerName component", () => {
    renderWithProviders(<PlayerName playerName="1" isActive={true} isPlayer1={true}/>)
    const heading = screen.getByText('Player 1')
    expect(heading.textContent).toMatch(/Player 1/i)
  })
  test("it renders the PlayerName without active or player1", () => {
    renderWithProviders(<PlayerName playerName="2" isActive={false} isPlayer1={false}/>)
    const heading = screen.getByText('Player 2')
    expect(heading.textContent).toMatch(/Player 2/i)
  })
})
