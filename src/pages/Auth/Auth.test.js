import { screen } from '@testing-library/react'

import Auth from '.'

describe('Auth page', () => {

  test('it renders a login form', () => {
    renderWithProviders(<Auth/>)
    const loginForm = screen.getByLabelText('login-form')
    expect(loginForm).toBeInTheDocument()
  })

  test('it renders a registration form', () => {
    renderWithProviders(<Auth/>)
    const regForm = screen.getByLabelText('reg-form')
    expect(regForm).toBeInTheDocument()
  })

  test('it renders both forms at once', () => {
    renderWithProviders(<Auth/>)
    const regForm = screen.getAllByRole('form')
    expect(regForm).toHaveLength(2)
  })

})
