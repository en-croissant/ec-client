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
      <div className="gamebackground">
        <div id="chessboard_border">
          <GameChessboard socket={socket} />
        </div>
        <a href="/">
          <div class="backpieceplay">&#9820; Go Back</div>
        </a>
      </div>
    </>
  );
}

export default PlayGame;
