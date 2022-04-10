import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import * as AuthContext from './contexts/auth'
import App from "./App";
import * as Pages from "./pages";

describe("App.js", () => {
  test("when user is logged in they can access /create", () => {
    const mockValues = {
      user: "tester"
    }
    jest.spyOn(AuthContext, 'useAuthContext').mockImplementation(() => mockValues)
    render(
      <MemoryRouter initialEntries={['/create']}>
        <App/>
      </MemoryRouter>
    )
    expect(screen.getByLabelText('create-button')).toBeInTheDocument()
  })

  test("when user is logged in they can access /main", () => {
    const mockValues = {
      user: "tester"
    }
    jest.spyOn(AuthContext, 'useAuthContext').mockImplementation(() => mockValues)
    render(
      <MemoryRouter initialEntries={['/main']}>
        <App/>
      </MemoryRouter>
    )
    expect(screen.getByText(/where the game begins/i)).toBeInTheDocument()
  })

  xtest("when user is logged in they can access /play", () => {
    const mockValues = {
      user: "tester"
    }
    jest.spyOn(AuthContext, 'useAuthContext').mockImplementation(() => mockValues)
    render(
      <MemoryRouter initialEntries={['/play']}>
        <App/>
      </MemoryRouter>
    )
    expect(screen.getByLabelText('chessboard')).toBeInTheDocument()
  })

  test("when user is logged in they can access /lobby", () => {
    const mockValues = {
      user: "tester"
    }
    jest.spyOn(AuthContext, 'useAuthContext').mockImplementation(() => mockValues)
    render(
      <MemoryRouter initialEntries={['/lobby']}>
        <App/>
      </MemoryRouter>
    )
    expect(screen.getByText(/new and Upcoming/i)).toBeInTheDocument()
  })

  test("when user is logged in they can't access /auth", () => {
    const mockValues = {
      user: "tester"
    }
    jest.spyOn(AuthContext, 'useAuthContext').mockImplementation(() => mockValues)
    render(
      <MemoryRouter initialEntries={['/auth']}>
        <App/>
      </MemoryRouter>
    )
    expect(screen.getByText(/sorry, we can't find the page you're looking for/i)).toBeInTheDocument()
  })

  test("when no user logged in they can't access /create", () => {
    const mockValues = {
      user: null
    }
    jest.spyOn(AuthContext, 'useAuthContext').mockImplementation(() => mockValues)
    render(
      <MemoryRouter initialEntries={['/create']}>
        <App/>
      </MemoryRouter>
    )
    expect(screen.getByText(/sorry, we can't find the page you're looking for/i)).toBeInTheDocument()
  })

  test("when no user logged in they can't access /main", () => {
    const mockValues = {
      user: null
    }
    jest.spyOn(AuthContext, 'useAuthContext').mockImplementation(() => mockValues)
    render(
      <MemoryRouter initialEntries={['/main']}>
        <App/>
      </MemoryRouter>
    )
    expect(screen.getByText(/sorry, we can't find the page you're looking for/i)).toBeInTheDocument()
  })

  test("when no user logged in they can't access /play", () => {
    const mockValues = {
      user: null
    }
    jest.spyOn(AuthContext, 'useAuthContext').mockImplementation(() => mockValues)
    render(
      <MemoryRouter initialEntries={['/play']}>
        <App/>
      </MemoryRouter>
    )
    expect(screen.getByText(/sorry, we can't find the page you're looking for/i)).toBeInTheDocument()
  })

  test("when no user logged in they can't access /lobby", () => {
    const mockValues = {
      user: null
    }
    jest.spyOn(AuthContext, 'useAuthContext').mockImplementation(() => mockValues)
    render(
      <MemoryRouter initialEntries={['/lobby']}>
        <App/>
      </MemoryRouter>
    )
    expect(screen.getByText(/sorry, we can't find the page you're looking for/i)).toBeInTheDocument()
  })

  test("when user is not logged in they can access /auth", () => {
    const mockValues = {
      user: null
    }
    jest.spyOn(AuthContext, 'useAuthContext').mockImplementation(() => mockValues)
    render(
      <MemoryRouter initialEntries={['/auth']}>
        <App/>
      </MemoryRouter>
    )
    expect(screen.getByText(/sign up/i)).toBeInTheDocument()
  })
})
