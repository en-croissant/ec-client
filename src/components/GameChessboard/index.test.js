import { screen, act } from "@testing-library/react";
import MockedSocket from "socket.io-mock";

import React from 'react'
import { default as GameChessboard } from ".";

// delete global.window.location
// global.window.location = {
//   href: "http://localhost:3000/lobby/123",
//   pathname: "/lobby/123"
// }

describe("GameChessboard", () => {
  
  // const oldWindowLoc = window.location

  // beforeAll(() => {
  //   delete window.location
  //   window.location = Object.defineProperties( 
  //     {},
  //     {
  //       ...Object.getOwnPropertyDescriptors(oldWindowLoc),
  //       pathname: {
  //         value: "/lobby/123",
  //         writable: true
  //       }
  //     }
  //   )
  // })

  // beforeAll(() => {
  //   const location = window.location
  //   delete global.window.location
  //   global.window.location = Object.assign({}, location)
  // })

  beforeAll(() => {
    global.window.history.pushState({}, "", "lobby/123")
  })

  let socket;
  beforeEach(() => {
    socket = new MockedSocket()
    socket.onEmit("join",(board)=>{
      setGame(new Chess(board))
    })
  })

  // afterAll(() => {
  //   window.location = oldWindowLoc
  // })

  test("it successfully renders the chessboard", () => {
    renderWithProviders(<GameChessboard socket={socket}/>)
    const chessboard = screen.getByLabelText('chessboard')
    expect(chessboard).toBeInTheDocument()
  })

  xtest("if there is an outcome the MatchResults component renders", async () => {
    window.location.pathname = "/lobby/123"
    let actualUseState = React.useState
    const mockGameState = [{}]
    jest.spyOn(React, 'useState').mockImplementationOnce(() => actualUseState(mockGameState))
    actualUseState = React.useState
    const mockOutcomeState = ['Player 1 has won the match']
    jest.spyOn(React, 'useState').mockImplementationOnce(() => actualUseState(mockOutcomeState))
    await act(async () => {
      renderWithProviders(<GameChessboard socket={socket}/>)
    })
    const result = screen.getByText(/player 1 has won the match/i)
  })

  // it("successfully makes socket connections", () => {
  //   renderWithProviders(<GameChessboard socket={socket}/>)
  //   expect().toBeInTheDocument()
  // });
});
