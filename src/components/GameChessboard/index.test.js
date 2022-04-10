import { default as GameChessboard } from ".";
import { screen } from "@testing-library/react";
import MockedSocket from "socket.io-mock";

import * as Stuff from 'react'

describe("GameChessboard", () => {

  let socket;
  beforeEach(() => {
    socket = new MockedSocket()
    socket.onEmit("join",(board)=>{
      setGame(new Chess(board))
    })
  })

  it("successfully renders the chessboard", () => {
    // const mockSetState = jest.fn()
    // const mockUseState = jest.fn(() => ["tester", mockSetState])
    // const mockValues = {
    //   setState: mockUseState
    // }
    // jest.spyOn(Stuff, 'useState').mockImplementation(() => mockValues)
    renderWithProviders(<GameChessboard socket={socket}/>)
    const chessboard = screen.getByLabelText('chessboard')
    expect(chessboard).toBeInTheDocument()
  })

  // it("successfully makes socket connections", () => {
  //   renderWithProviders(<GameChessboard socket={socket}/>)
  //   expect().toBeInTheDocument()
  // });
});
