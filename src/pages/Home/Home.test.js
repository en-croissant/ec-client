import { screen } from '@testing-library/react'

import { default as Home } from '.'

describe("Home page", () => {
  test("it renders the TableObjects component", () => {
    renderWithProviders(<Home/>)
    const component = screen.getByRole('link')
    expect(component).toBeInTheDocument()
  })
})
