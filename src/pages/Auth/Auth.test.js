import { screen } from '@testing-library/react'

import Auth from '.'

describe('Auth page', () => {

  test('it renders a login form', () => {
    renderWithProviders(<Auth/>)
    const loginForm = screen.getByRole('form', {id: 'login-form'})
    expect(loginForm).toBeInTheDocument()
  })

  test('it renders a registration form', () => {
    renderWithProviders(<Auth/>)
    const regForm = screen.getByRole('form', {id: 'reg-form'})
    expect(regForm).toBeInTheDocument()
  })

})
