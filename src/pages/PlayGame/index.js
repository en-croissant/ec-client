import React, { useEffect } from "react";
import { GameChessboard } from "../../components";
import { io } from "socket.io-client";
import "./style.css";

const socket = io("wss://en-croissant.herokuapp.com");

function PlayGame() {
  useEffect(() => {
    socket.on("hello world", ({ data }) => console.log(data));
  }, []);

  return (
    <>
      <div id="chessboard_border">
        <div id="chessboard_inner_border">
          <GameChessboard socket={socket} />
        </div>
      </div>
    </>
  );
}

export default PlayGame;
