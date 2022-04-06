import { screen } from '@testing-library/react'

import { default as CreateGame } from '.'

describe("Create game page", () => {
  test("it renders the CreateGameForm component", () => {
    renderWithProviders(<CreateGame/>)
    const form = screen.getByRole('form')
    expect(form).toBeInTheDocument()
    const heading = screen.getByRole('heading', {level: 2})
    expect(heading.textContent).toMatch(/create/i)
  })
})