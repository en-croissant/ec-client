import { screen } from '@testing-library/react'

import { default as Main } from '.'

describe("Main page", () => {
  test("it should render 2 links", () => {
    renderWithProviders(<Main/>)
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(2)
  })

  test("it should render the create game link", () => {
    renderWithProviders(<Main/>)
    const create = screen.getByText(/create game/i)
    expect(create).toBeInTheDocument()
  })

  test("it should render the join game link", () => {
    renderWithProviders(<Main/>)
    const join = screen.getByText(/join game/i)
    expect(join).toBeInTheDocument()
  })
})
