import { default as JoinGame } from ".";
import { screen, render, act } from "@testing-library/react";

import axios from 'axios'
jest.mock('axios')

import * as AuthContext from '../../contexts/auth'

const mockNavigate = jest.fn();
import 'react-router-dom'
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe("JoinGame", () => {

  beforeEach(() => {
    jest.clearAllMocks()
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  // test("if user is not host then no button renders", async () => {
  //   const mockData = [{
  //     player_1_key: "testman",
  //     player_2_key: "tester",
  //     lobby_id: 1
  //   }]
  //   await act(async () => {
  //     await axios.get.mockImplementationOnce(() => Promise.resolve({ data: mockData }));
  //     await axios.get.mockImplementationOnce(() => Promise.resolve({ data: [{username: "testman1"}] }));
  //     await axios.get.mockImplementationOnce(() => Promise.resolve({ data: [{username: "testman2"}] }));
  //     renderWithProviders(<JoinGame/>)
  //   })
  //   const button = screen.queryByLabelText('play-button')
  //   expect(button).not.toBeInTheDocument()
  // })

  test("that on button click that navigate gets called", async () => {
    const mockUser = "testman"
    jest.spyOn(AuthContext, 'useAuthContext').mockImplementation(() => ({user: mockUser}))
    const mockData = [{
      player_1_username: "testman",
      player_2_username: "tester",
      lobby_id: 1
    }]
    await act(async () => {
      await axios.get.mockImplementationOnce(() => Promise.resolve({ data: mockData }));
      await axios.get.mockImplementationOnce(() => Promise.resolve({ data: [{username: "testman1"}] }));
      await axios.get.mockImplementationOnce(() => Promise.resolve({ data: [{username: "testman2"}] }));
      renderWithProviders(<JoinGame/>)
    })
    userEvent.click(screen.getByLabelText('play-button'))
    expect(mockNavigate).toHaveBeenCalled()
  })

});
