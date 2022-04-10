import { screen } from '@testing-library/react'
import MockedSocket from "socket.io-mock";

import { default as PlayGame } from '.'

describe("PlayGame page", () => {

  let socket;
  beforeEach(() => {
    socket = new MockedSocket()
    socket.onEmit("join",(board)=>{
      setGame(new Chess(board))
    })
  })

  test("it renders the chess board", () => {
    renderWithProviders(<PlayGame/>)
    const chessboard = screen.getByLabelText('chessboard')
    expect(chessboard).toBeInTheDocument()
  })
})
