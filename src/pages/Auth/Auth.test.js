import { screen } from '@testing-library/react'

import Auth from '.'

describe('Auth page', () => {

  test('it renders a login form', () => {
    renderWithProviders(<Auth/>)
    const loginForm = screen.getByLabelText('login-form')
    expect(loginForm).toBeInTheDocument()
  })

  test('it renders a registration form after button click', () => {
    renderWithProviders(<Auth/>)
    userEvent.click(screen.getByTestId('form-button'))
    const regForm = screen.getByLabelText('reg-form')
    expect(regForm).toBeInTheDocument()
  })

  test("on second click it rerenders the login form", () => {
    renderWithProviders(<Auth/>)
    userEvent.click(screen.getByTestId('form-button'))
    const regForm = screen.getByLabelText('reg-form')
    expect(regForm).toBeInTheDocument()
    userEvent.click(screen.getByTestId('form-button'))
    const loginForm = screen.getByLabelText('login-form')
    expect(loginForm).toBeInTheDocument()
  })

  test('it doesnt render both forms at once', () => {
    renderWithProviders(<Auth/>)
    const regForm = screen.getAllByRole('form')
    expect(regForm).not.toHaveLength(2)
  })

})
