import React from "react"; 
import { useState, useEffect } from "react";
import { io } from "socket.io-client"



const CreateGameForm = () => {
    
    // const [roomName, setRoomName] = useState("");
    const [difficultyAI, setDifficultyAI] = useState("");
    const [gameMode, setGameMode] = useState("");
    const [timeLimit, setTimeLimit] = useState("");
    const [saveGame, setSaveGame] = useState("");
    // const [redirect, setRedirect] = useState(false);
    
    
    const socket = io("https://en-croissant.herokuapp.com");
    const settings = { difficultyAI, gameMode, timeLimit, saveGame }

    // socket.emit("lobby", { roomName });
    function createGameFunc () {
        socket.emit("create board", { settings })

    }
    socket.on("new game", ({chessboard}) => { console.log(chessboard)})
  
    return (
      <>
        <h2>Create Lobby</h2>

        <form role="form">
            {/* <label for="room-name" >Room name: </label>
            <input 
            type="text"
            name="room-name"
            id="room-name"
            placeholder="name of the room"
            onChange={(e) => setRoomName(e.target.value)}
            value={roomName}
            isRequired /> */}


            <label for="AI-difficulty" >AI Difficulty: </label>
            <select 
            name="AI-difficulty" 
            id="AI-difficulty"
            isRequired
            onChange={(e) => setDifficultyAI(e.target.value)} 
            >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>

            <label for="game-mode" >Game Mode: </label>
            <select 
            name="game-mode" 
            id="game-mode" 
            isRequired
            onChange={(e) => setGameMode(e.target.value)}
            >
                <option value="game-mode1">game-mode1</option>
                <option value="game-mode2">game-mode2</option>
                <option value="game-mode3">game-mode3</option>
            </select>
            
            <label for="time-limit" >Time Limit: </label>
            <select 
            name="time-limit" 
            id="time-limit" 
            isRequired
            onChange={(e) => setTimeLimit(e.target.value)}
            >
                <option value="1-minute">1 minute</option>
                <option value="3-minutes">3 minutes</option>
                <option value="5-minutes">5 minutes</option>
                <option value="10-minutes">10 minutes</option>
                <option value="20-minutes">20 minutes</option>
                <option value="unlimited">unlimited</option>
            </select>
            
            <label for="save-game" >Savable Game: </label>
            <select
             name="save-game" 
             id="save-game" 
             isRequired
             onChange={(e) => setSaveGame(e.target.value)}
             >
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>

        </form>

            <button
            onClick={createGameFunc}
            >
            Create Game
            </button>
        
      </>
    );
  };
  export default CreateGameForm;
