import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { default as Home } from '.'
import * as AuthContext from '../../contexts/auth'

describe("Home page", () => {
  test("it renders the TableObjects component", () => {
    renderWithProviders(<Home/>)
    const component = screen.getByTestId('tableobj-component')
    expect(component).toHaveAttribute('href', '/Book')
    expect(component).toBeInTheDocument()
  })

  // test("if no user is logged in the link redirects to /auth", () => {
  //   renderWithProviders(<Home/>)
  //   const link = screen.getByTestId('login-link')
  //   expect(link).toBeInTheDocument()
  //   expect(link).toHaveAttribute('href', '/auth')
  // })

  // test("if user is logged in the link redirects to /main", () => {
  //   const mockLogout = jest.fn()
  //   const mockValues = {
  //     user: "tester",
  //     logout: mockLogout
  //   }
  //   jest.spyOn(AuthContext, 'useAuthContext').mockImplementation(() => mockValues)
  //   renderWithProviders(<Home/>)
  //   const link = screen.getByTestId('login-link')
  //   expect(link).toBeInTheDocument()
  //   expect(link).toHaveAttribute('href', '/main')
  // })
})
