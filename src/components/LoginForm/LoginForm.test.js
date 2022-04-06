import { screen, act } from '@testing-library/react'

import * as AuthContext from '../../contexts/auth'

import { default as LoginForm } from '.'

const mockNavigate = jest.fn();
import 'react-router-dom'
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe("LoginForm", () => {

  beforeEach(() => {
    jest.clearAllMocks()
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

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

    test("It calls navigate on successful login", async () => {
      const mockLogin = jest.fn()
      mockLogin.mockReturnValue('Login successful')
      const mockValues = {
        login: mockLogin
      }
      jest.spyOn(AuthContext, 'useAuthContext').mockImplementation(() => mockValues)
      renderWithProviders(<LoginForm/>)
      await act(async () => {
        userEvent.type(screen.getByLabelText('username-field'), 'te')
        userEvent.type(screen.getByLabelText('password-field'), 'st{enter}')
      })
      expect(mockNavigate).toHaveBeenCalled()
    })

    test("it renders an error message on unsuccessful login attempt", async () => {
      const mockLogin = jest.fn()
      mockLogin.mockReturnValue('Login unsuccessful')
      const mockValues = {
        login: mockLogin
      }
      jest.spyOn(AuthContext, 'useAuthContext').mockImplementation(() => mockValues)
      renderWithProviders(<LoginForm/>)
      await act(async () => {

        userEvent.type(screen.getByLabelText('username-field'), 'te')
        userEvent.type(screen.getByLabelText('password-field'), 'st{enter}')
      })
      const loading = screen.queryByTestId('loading')
      expect(loading).not.toBeInTheDocument()
      const error = screen.getByTestId('error')
      expect(error).toBeInTheDocument()
    })
  })
})

