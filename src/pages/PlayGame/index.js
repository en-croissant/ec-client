import React from "react";
import {GameChessboard } from "../../components";
import { io } from "socket.io-client"

const socket = io("https://en-croissant.herokuapp.com");

function PlayGame() {

    socket.on("hello world", ({ data }) => console.log(data));


    return (
        <>
            <div>
                <GameChessboard socket={socket} />
            </div>
        </>
  );
}

export default PlayGame;



