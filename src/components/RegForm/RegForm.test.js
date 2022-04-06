import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'


import { default as RegForm } from '.'

describe("RegForm", () => {
  describe("rendering", () => {
    test("it renders a username field", () => {
      renderWithProviders(<RegForm/>)
      const username = screen.getByLabelText('username-field')
      expect(username).toBeInTheDocument()
    })

    test("it renders an email field", () => {
      renderWithProviders(<RegForm/>)
      const email = screen.getByLabelText('email-field')
      expect(email).toBeInTheDocument()
    })

    test("it renders a password field", () => {
      renderWithProviders(<RegForm/>)
      const password = screen.getByLabelText('password-field')
      expect(password).toBeInTheDocument()
    })

    test("it renders a password confirmation field", () => {
      renderWithProviders(<RegForm/>)
      const passwordConf = screen.getByLabelText('passwordConfirmation-field')
      expect(passwordConf).toBeInTheDocument()
    })

    test("it renders a submit button", () => {
      renderWithProviders(<RegForm/>)
      const submit = screen.getByRole('button')
      expect(submit).toBeInTheDocument()
      expect(submit).toHaveAttribute('type', 'submit')
    })
  })

  describe("functionality", () => {
    test("updates the field value (username) on user typing", () => {
      renderWithProviders(<RegForm />)
      const username = screen.getByLabelText('username-field')
      userEvent.type(username, 'y')
      expect(username).toHaveValue('y')
      userEvent.type(username, 'a')
      expect(username).toHaveValue('ya')
      userEvent.type(username, 'y')
      expect(username).toHaveValue('yay')
    })

    test("updates the field value (email) on user typing", () => {
      renderWithProviders(<RegForm />)
      const email = screen.getByLabelText('email-field')
      userEvent.type(email, 'y')
      expect(email).toHaveValue('y')
      userEvent.type(email, 'a')
      expect(email).toHaveValue('ya')
      userEvent.type(email, 'y')
      expect(email).toHaveValue('yay')
    })

    test("updates the form state (password) on user typing", () => {
      renderWithProviders(<RegForm />)
      const password = screen.getByLabelText('password-field')
      userEvent.type(password, 'w')
      expect(password).toHaveValue('w')
      userEvent.type(password, 'o')
      expect(password).toHaveValue('wo')
      userEvent.type(password, 'o')
      expect(password).toHaveValue('woo')
    })

    test("updates the form state (password confirmation) on user typing", () => {
      renderWithProviders(<RegForm />)
      const passwordConf = screen.getByLabelText('passwordConfirmation-field')
      userEvent.type(passwordConf, 'w')
      expect(passwordConf).toHaveValue('w')
      userEvent.type(passwordConf, 'o')
      expect(passwordConf).toHaveValue('wo')
      userEvent.type(passwordConf, 'o')
      expect(passwordConf).toHaveValue('woo')
    })

    test("if passwords dont match the button is disabled", () => {
      renderWithProviders(<RegForm/>)
      const password = screen.getByLabelText('password-field')
      const passwordConf = screen.getByLabelText('passwordConfirmation-field')
      userEvent.type(password, 'password')
      userEvent.type(passwordConf, 'differentpassword')
      const button = screen.getByRole('button')
      expect(button).toBeDisabled()
    })

    test("on form submit render loading message", () => {
      renderWithProviders(<RegForm/>)
      userEvent.type(screen.getByLabelText('username-field'), 't')
      userEvent.type(screen.getByLabelText('email-field'), 'e')
      userEvent.type(screen.getByLabelText('password-field'), 's')
      userEvent.type(screen.getByLabelText('passwordConfirmation-field'), 't{enter}')
      const loading = screen.getByTestId('loading')
      expect(loading).toBeInTheDocument()
    })

    // test("On form submit navigate to the home page", () => {
    //   renderWithProviders(<RegForm/>)
    //   userEvent.submit(screen.getByRole('button'), )
    // })
  })
})
