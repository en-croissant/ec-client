import { default as GameChessboard } from ".";
import { screen } from "@testing-library/react";
import MockedSocket from "socket.io-mock";

import * as Stuff from 'react'

describe("GameChessboard", () => {
  it("successfully renders the chessboard", () => {
    // const mockSetState = jest.fn()
    // const mockUseState = jest.fn(() => ["tester", mockSetState])
    // const mockValues = {
    //   setState: mockUseState
    // }
    // jest.spyOn(Stuff, 'useState').mockImplementation(() => mockValues)
    renderWithProviders(<GameChessboard/>)
    // const chessboard = screen.getByLabelText('chessboard')
    expect(chessboard).toBeInTheDocument()
  })

  it("successfully makes socket connections", () => {
    let socket = new MockedSocket();
    socket.onEmit("join",(board)=>{
      setGame(new Chess(board))
    })
    renderWithProviders(<GameChessboard socket={socket}/>)
    expect().toBeInTheDocument()
  });
});
