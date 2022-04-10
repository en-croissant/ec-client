import { screen, act } from '@testing-library/react'

import * as AuthContext from '../../contexts/auth'
import { default as Logout } from '.'

const mockNavigate = jest.fn();
import 'react-router-dom'
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe("Logout component", () => {
  test("it renders the Logout component", () => {
    renderWithProviders(<Logout/>)
    const logout = screen.getByRole('button')
    expect(logout).toHaveAttribute('value', 'Logout')
  })

  test('when logout button is clicked navigate is called', async () => {
    const mockLogout = jest.fn()
    const mockValues = {
      logout: mockLogout
    }
    jest.spyOn(AuthContext, 'useAuthContext').mockImplementation(() => mockValues)
    renderWithProviders(<Logout/>)
    const logout = screen.getByRole('button')
    await act(async () => {
      userEvent.click(logout)
    })
    expect(mockNavigate).toHaveBeenCalledWith('/')
  })
})


