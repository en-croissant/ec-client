import { screen, act, fireEvent } from "@testing-library/react";
import MockedSocket from "socket.io-mock";

import React from 'react'
import { default as GameChessboard } from ".";
import { Chess } from "chess.js";

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
  })

  // afterAll(() => {
  //   window.location = oldWindowLoc
  // })

  test("it successfully renders the chessboard", () => {
    renderWithProviders(<GameChessboard socket={socket}/>)
    const chessboard = screen.getByLabelText('chessboard')
    expect(chessboard).toBeInTheDocument()
    
  })

  test("it can move a piece", () => {
    renderWithProviders(<GameChessboard socket={socket}/>)
    const foo = document.querySelector('[data-square="e2"]')
    const bar = document.querySelector('[data-square="e4"]')
    
    fireEvent.click(foo)
    fireEvent.click(bar)

    expect(foo.firstChild.firstChild).toBeNull()
    expect(bar.firstChild.firstChild).not.toBeNull()
  })

  test("it cannot make invalid moves", () => {
    renderWithProviders(<GameChessboard socket={socket}/>)
    const foo = document.querySelector('[data-square="e2"]')
    const bar = document.querySelector('[data-square="e5"]')
    
    fireEvent.click(foo)
    fireEvent.click(bar)

    expect(foo.firstChild.firstChild).not.toBeNull()
    expect(bar.firstChild.firstChild).toBeNull()
  })

  xtest("if there is an outcome the MatchResults component renders", async () => {
    socket.onEmit("join",()=>{
      setGame(new Chess("rnbqkbnr/ppppp2p/5p2/6p1/5P2/4P3/PPPP2PP/RNBQKBNR w KQkq - 0 3")
      )
    })
    renderWithProviders(<GameChessboard socket={socket}/>)

    const foo = document.querySelector('[data-square="d1"]')
    const bar = document.querySelector('[data-square="h5"]')
    
    fireEvent.click(foo)
    fireEvent.click(bar)

    expect(bar.firstChild.firstChild).not.toBeNull()
    // screen.getByRole('heading', {  name: /player 1 has won the match/i})
  })

  // it("successfully makes socket connections", () => {
  //   renderWithProviders(<GameChessboard socket={socket}/>)
  //   expect().toBeInTheDocument()
  // });
});
