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

  xit("renders lobby", () => {
    render(<JoinGame />);
    let content = screen;
    expect(content).toBeTruthy();
  });

  test("if user is not host then no button renders", async () => {
    const mockData = {
      player_1_username: "testman",
      player_2_username: "tester",
      lobby_id: 1
    }
    await act(async () => {
      await axios.get.mockImplementationOnce(() => Promise.resolve({ data: mockData }));
      renderWithProviders(<JoinGame/>)
    })
    const button = screen.queryByLabelText('play-button')
    expect(button).not.toBeInTheDocument()
  })

  test("on button click that navigate gets called", async () => {
    const mockUser = "testman"
    jest.spyOn(AuthContext, 'useAuthContext').mockImplementation(() => ({user: mockUser}))
    const mockData = {
      player_1_username: "testman",
      player_2_username: "tester",
      lobby_id: 1
    }
    await act(async () => {
      await axios.get.mockImplementationOnce(() => Promise.resolve({ data: mockData }));
      renderWithProviders(<JoinGame/>)
    })
    userEvent.click(screen.getByLabelText('play-button'))
    expect(mockNavigate).toHaveBeenCalled()
  })

});
