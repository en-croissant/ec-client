import { screen } from '@testing-library/react'


import { default as LoginForm } from '.'

describe("LoginForm", () => {
  describe("rendering", () => {
    test("it renders a username field", () => {
      renderWithProviders(<LoginForm/>)
      const username = screen.getByLabelText('username-field')
      expect(username).toBeInTheDocument()
    })

    test("it renders a password field", () => {
      renderWithProviders(<LoginForm/>)
      const password = screen.getByLabelText('password-field')
      expect(password).toBeInTheDocument()
    })

    test("it renders a submit button", () => {
      renderWithProviders(<LoginForm/>)
      const submit = screen.getByRole('button')
      expect(submit).toBeInTheDocument()
      expect(submit).toHaveAttribute('type', 'submit')
    })
  })

  describe("functionality", () => {
    test("updates the field value (username) on user typing", () => {
      renderWithProviders(<LoginForm />)
      const username = screen.getByLabelText('username-field')
      userEvent.type(username, 'y')
      expect(username).toHaveValue('y')
      userEvent.type(username, 'a')
      expect(username).toHaveValue('ya')
      userEvent.type(username, 'y')
      expect(username).toHaveValue('yay')
    })

    test("updates the form state (password) on user typing", () => {
      renderWithProviders(<LoginForm />)
      const password = screen.getByLabelText('password-field')
      userEvent.type(password, 'w')
      expect(password).toHaveValue('w')
      userEvent.type(password, 'o')
      expect(password).toHaveValue('wo')
      userEvent.type(password, 'o')
      expect(password).toHaveValue('woo')
    })

    test("on form submit render loading message", () => {
      renderWithProviders(<LoginForm/>)
      userEvent.type(screen.getByLabelText('username-field'), 'te')
      userEvent.type(screen.getByLabelText('password-field'), 'st{enter}')
      const loading = screen.getByTestId('loading')
      expect(loading).toBeInTheDocument()
    })

    // test("On form submit navigate to the home page", () => {
    //   renderWithProviders(<LoginForm/>)
    //   userEvent.submit(screen.getByRole('button'), )
    // })
  })
})

