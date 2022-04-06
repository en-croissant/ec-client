import { screen, render, act } from "@testing-library/react";

import * as AuthContext from '../../contexts/auth'

import { default as CreateGameForm } from ".";

import axios from 'axios'
jest.mock('axios')

const mockNavigate = jest.fn();
import 'react-router-dom'
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe("Create game form", () => {
  test("updates the field value on user typing", () => {
    renderWithProviders(<CreateGameForm />)
    const username = screen.getByLabelText('opponent-name')
    userEvent.type(username, 'y')
    expect(username).toHaveValue('y')
    userEvent.type(username, 'a')
    expect(username).toHaveValue('ya')
    userEvent.type(username, 'y')
    expect(username).toHaveValue('yay')
  })

  test('on button click navigate gets called', async () => {
    const mockUser = "testman"
    jest.spyOn(AuthContext, 'useAuthContext').mockImplementation(() => ({user: mockUser}))
    const mockData = {
      lobby_id: 1
    }
    await act(async () => {
      await axios.post.mockImplementationOnce(() => Promise.resolve({ data: mockData }));
      renderWithProviders(<CreateGameForm/>)
      userEvent.click(screen.getByLabelText('create-button'))
    })
    expect(mockNavigate).toHaveBeenCalled()
  })
});
