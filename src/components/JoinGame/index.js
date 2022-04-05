import React from "react"; 
import { useState, useEffect} from "react";
import { io } from "socket.io-client"
import axios from "axios";
import { Redirect } from "react-router-dom";

const JoinGame = () => {
  
  const [username1, setUsername1] = useState("");
  const [username2, setUsername2] = useState("");
  const [roomName, setRoomName] = useState("");
  const [difficultyAI, setDifficultyAI] = useState("");
  const [gameMode, setGameMode] = useState("");
  const [timeLimit, setTimeLimit] = useState("");
  const [saveGame, setSaveGame] = useState("");
  const [redirect, setRedirect] = useState(false);

  const socket = io("https://en-croissant.herokuapp.com");

  const settings = { difficultyAI, gameMode, timeLimit, saveGame }

  const fetchGameLobby = async () => {
    const { settings } = await axios.post("https://en-croissant.herokuapp.com/lobby/");
    set(settings);
  };

  useEffect(fetchGameLobby, []);


  const onClickEvent = (e) => {
    e.preventDefault();
    setRedirect(true);
  };

    return (
      <>

        {redirect ? <Redirect to="/play" /> : undefined}

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

        <button
        onClick={(e)=> onClickEvent(e)}
        >Play Game</button>
      </>
    );
  };
  export default JoinGame;