import React from "react";
import {GameChessboard } from "../../components";
import { io } from "socket.io-client"

function PlayGame() {


    const socket = io("https://en-croissant.herokuapp.com");
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

// getting session id and  user id (for both from the JWT) that is all the info we need to start a game
// get that and have it ready to send to the sockets, rich can help connecting it to the sockets

// 
// 
// dont want make random move but have savegamemutate from github 

