import { screen } from '@testing-library/react'

import { default as Logout } from '.'

describe("Create game page", () => {
  test("it renders the Logout component", () => {
    renderWithProviders(<Logout/>)
    const form = screen.getByLabelText('create-game-form')
    expect(form).toBeInTheDocument()
    const heading = screen.text('Logout')
    expect(heading.textContent).toMatch(/Logout/i)
  })
})


