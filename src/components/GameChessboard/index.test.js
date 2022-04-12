import { screen } from "@testing-library/react";
import MockedSocket from "socket.io-mock";

import * as React from 'react'
import { default as GameChessboard } from ".";

describe("GameChessboard", () => {

  let socket;
  beforeEach(() => {
    socket = new MockedSocket()
    socket.onEmit("join",(board)=>{
      setGame(new Chess(board))
    })
  })

  test("it successfully renders the chessboard", () => {
    renderWithProviders(<GameChessboard socket={socket}/>)
    const chessboard = screen.getByLabelText('chessboard')
    expect(chessboard).toBeInTheDocument()
  })

  xtest("if there is an outcome the MatchResults component renders", () => {
    jest.spyOn(React, 'useState').mockImplementation(() => [{}, jest.fn()])
    jest.spyOn(React, 'useState').mockImplementation(() => ["Player 1 has won the match", jest.fn()])
    renderWithProviders(<GameChessboard socket={socket}/>)
    const result = screen.getByText(/player 1 has won the match/)
  })

  // it("successfully makes socket connections", () => {
  //   renderWithProviders(<GameChessboard socket={socket}/>)
  //   expect().toBeInTheDocument()
  // });
});
