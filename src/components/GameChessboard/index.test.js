import { default as GameChessboard } from ".";
import { screen } from "@testing-library/react";
import MockedSocket from "socket.io-mock";

describe("GameChessboard", () => {
  it("successfully makes socket connections", () => {
    let socket = new MockedSocket();
    socket.onEmit("join",(board)=>{
      setGame(new Chess(board))
    })
    renderWithProviders(<GameChessboard socket={socket}/>)
    expect().toBeInTheDocument()
  });
});
