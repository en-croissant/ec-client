import { screen } from '@testing-library/react'

import { default as Lobby } from '.'

describe("Lobby page", () => {
  test("it renders the JoinGame component", () => {
    renderWithProviders(<Lobby/>)
    const lobbyTitle = screen.getByRole('heading', {level: 2})
    expect(lobbyTitle).toBeInTheDocument()
    expect(lobbyTitle.textContent).toMatch(/game settings/i)
  })

  test("it renders the PlayGameButton component", () => {
    renderWithProviders(<Lobby/>)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button.textContent).toMatch(/play game/i)
  })
})
