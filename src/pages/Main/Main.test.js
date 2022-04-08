import { screen } from '@testing-library/react'

import { default as Main } from '.'

const mockNavigate = jest.fn();
import 'react-router-dom'
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe("Main page", () => {

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

  test("if join game button is clicked navigate is called", () => {
    renderWithProviders(<Main/>)
    const joinGame = screen.getByText(/join game/i)
    userEvent.click(joinGame)
    expect(mockNavigate).toHaveBeenCalled()
  })

  test("if create game button is clicked navigate is called", () => {
    renderWithProviders(<Main/>)
    const createGame = screen.getByText(/create game/i)
    userEvent.click(createGame)
    expect(mockNavigate).toHaveBeenCalled()
  })
})
