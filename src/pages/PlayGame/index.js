import React, { useEffect } from "react";
import {GameChessboard } from "../../components";
import { io } from "socket.io-client"


const socket = io("wss://en-croissant.herokuapp.com");

function PlayGame() {
    
    useEffect(() => {
        socket.on("hello world", ({ data }) => console.log(data));
    }, [])


    return (
        <>
            <div>
                <GameChessboard socket={socket} />
            </div>
        </>
  );
}

export default PlayGame;



