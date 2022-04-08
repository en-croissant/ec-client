import { screen } from '@testing-library/react'

import { default as Book } from '.'

describe("Book page", () => {
  test("it renders the flip book", () => {
    renderWithProviders(<Book/>)
    const flipbook = screen.getByTestId(/flipbook/i)
    expect(flipbook).toBeInTheDocument()
  })
})
