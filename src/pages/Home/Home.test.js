import { screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { default as Home } from '.'
import * as AuthContext from '../../contexts/auth'

const mockNavigate = jest.fn();
import 'react-router-dom'
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe("Home page", () => {
  test("it renders the TableObjects component", () => {
    renderWithProviders(<Home/>)
    const component = screen.getByTestId('tableobj-component')
    expect(component).toBeInTheDocument()
  })

  test("if no user on button click the login form appears", async () => {
    const mockUser = null
    const mockValues = {
      user: mockUser
    }
    jest.spyOn(AuthContext, 'useAuthContext').mockImplementation(() => mockValues)
    renderWithProviders(<Home/>)
    const clipboard = screen.getByTestId('clipboard')
    await act(async () => {
      userEvent.click(clipboard)
    })
    const form = screen.getByTestId('loginform-button')
    expect(form).toBeInTheDocument()
  })

  test("if no user on successive button click the login form disappears", async () => {
    const mockUser = null
    const mockValues = {
      user: mockUser
    }
    jest.spyOn(AuthContext, 'useAuthContext').mockImplementation(() => mockValues)
    renderWithProviders(<Home/>)
    const clipboard = screen.getByTestId('clipboard')
    await act(async () => {
      userEvent.click(clipboard)
    })
    let form = screen.getByTestId('loginform-button')
    expect(form).toBeInTheDocument()
    await act(async () => {
      userEvent.click(clipboard)
    })
    form = screen.queryByTestId('loginform-button')
    expect(form).not.toBeInTheDocument()
  })

  test("if user logged in, button click redirects to /main", async () => {
    const mockUser = "tester"
    const mockValues = {
      user: mockUser
    }
    jest.spyOn(AuthContext, 'useAuthContext').mockImplementation(() => mockValues)
    renderWithProviders(<Home/>)
    const clipboard = screen.getByTestId('clipboard')
    await act(async () => {
      userEvent.click(clipboard)
    })
    expect(mockNavigate).toHaveBeenCalled()
  })

  test("if form is open clicking sign up button swaps to register form", async () => {
    const mockUser = null
    const mockValues = {
      user: mockUser
    }
    jest.spyOn(AuthContext, 'useAuthContext').mockImplementation(() => mockValues)
    renderWithProviders(<Home/>)
    const clipboard = screen.getByTestId('clipboard')
    await act(async () => {
      userEvent.click(clipboard)
    })
    const loginform = screen.getByTestId('loginform-button')
    await act(async () => {
      userEvent.click(loginform)
    })
    const regform = screen.getByTestId('regform-button')
    expect(regform).toBeInTheDocument()
  })

  test("if form is open clicking sign in button swaps to login form", async () => {
    const mockUser = null
    const mockValues = {
      user: mockUser
    }
    jest.spyOn(AuthContext, 'useAuthContext').mockImplementation(() => mockValues)
    renderWithProviders(<Home/>)
    const clipboard = screen.getByTestId('clipboard')
    await act(async () => {
      userEvent.click(clipboard)
    })
    const loginform = screen.getByTestId('loginform-button')
    await act(async () => {
      userEvent.click(loginform)
    })
    let regform = screen.getByTestId('regform-button')
    expect(regform).toBeInTheDocument()
    await act(async () => {
      userEvent.click(regform)
    })
    regform = screen.queryByTestId('regform-button')
    expect(regform).not.toBeInTheDocument()
    expect(loginform).toBeInTheDocument()
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
