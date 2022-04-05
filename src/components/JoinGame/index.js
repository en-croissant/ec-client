import React from "react"; 
import { useState } from "react";

const JoinGame = () => {
  
  const [username1, setUsername1] = useState("");
  const [username2, setUsername2] = useState("");
  const [roomName, setRoomName] = useState("");
  const [difficultyAI, setDifficultyAI] = useState("");
  const [gameMode, setGameMode] = useState("");
  const [timeLimit, setTimeLimit] = useState("");
  const [saveGame, setSaveGame] = useState("");

    return (
      <>
        <div>
          <h2>Game settings</h2>
          <ul>
            <li>Room name: {roomName}</li>
            <li>Player 1: {username1}</li>
            <li>Player 2: {username2}</li>
            <li>AI difficulty: {difficultyAI}</li>
            <li>Game mode: {gameMode}</li>
            <li>Time limit: {timeLimit}</li>
            <li>Save game: {saveGame}</li>
          </ul>
        </div>
      </>
    );
  };
  export default JoinGame;