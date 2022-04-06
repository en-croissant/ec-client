import React, { useEffect } from "react";
import {GameChessboard } from "../../components";
import { io } from "socket.io-client"

// const socket = io("https://en-croissant.herokuapp.com");

const socket = io("http://localhost:5000");

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



