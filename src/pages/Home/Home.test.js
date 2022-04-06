import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { default as Home } from '.'
import * as AuthContext from '../../contexts/auth'

describe("Home page", () => {
  test("it renders the TableObjects component", () => {
    renderWithProviders(<Home/>)
    const component = screen.getByRole('link')
    expect(component).toBeInTheDocument()
  })

  test("if no user logged in the logout button doesnt show", () => {
    renderWithProviders(<Home/>)
    const logout = screen.queryByRole('button')
    expect(logout).not.toBeInTheDocument()
  })

  test("on button click the logout function gets called", () => {
    const mockLogout = jest.fn()
    const mockValues = {
      user: "tester",
      logout: mockLogout
    }
    jest.spyOn(AuthContext, 'useAuthContext').mockImplementation(() => mockValues)
    renderWithProviders(<Home/>)
    userEvent.click(screen.getByRole('button'))
    expect(mockLogout).toHaveBeenCalled()
  })
})
