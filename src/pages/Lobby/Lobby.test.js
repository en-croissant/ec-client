import { screen } from '@testing-library/react'

import { default as Lobby } from '.'

describe("Lobby page", () => {
  test("it renders the JoinGame component", () => {
    renderWithProviders(<Lobby/>)
    const lobbyTitle = screen.getByRole('heading', {level: 1})
    expect(lobbyTitle).toBeInTheDocument()
    expect(lobbyTitle.textContent).toMatch(/join now/i)
  })

  test("it renders a button to return to home", () => {
    renderWithProviders(<Lobby/>)
    const goBack = screen.getByRole('link')
    expect(goBack).toHaveAttribute('href', '/main')
  })
})
