import { screen } from '@testing-library/react'

import { default as MatchResult } from '.'

describe("Create game page", () => {
  test("it renders the MatchResult component", () => {
    renderWithProviders(<MatchResult outcome={"testing"}/>)
    const heading = screen.getByText(/testing/i)
    expect(heading).toBeInTheDocument()
  })
})
