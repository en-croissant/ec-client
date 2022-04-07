import { screen } from '@testing-library/react'

import * as AuthContext from '../../contexts/auth'

import { default as Header } from '.'

describe("Header", () => { 
  // test("if no user logged in the logout button doesnt show", () => {
  //   renderWithProviders(<Home/>)
  //   const logout = screen.queryByRole('button')
  //   expect(logout).not.toBeInTheDocument()
  // })

  test("on button click the logout function gets called", () => {
    const mockLogout = jest.fn()
    const mockValues = {
      logout: mockLogout
    }
    jest.spyOn(AuthContext, 'useAuthContext').mockImplementation(() => mockValues)
    renderWithProviders(<Header/>)
    userEvent.click(screen.getByRole('button'))
    expect(mockLogout).toHaveBeenCalled()
  })
})
