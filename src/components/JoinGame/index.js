import React from "react"; 
import { useState, useEffect} from "react";
// import { io } from "socket.io-client"
import axios from "axios";
import { useNavigate } from "react-router-dom";


const JoinGame = () => {

  const navigate = useNavigate()
  
  const [username1, setUsername1] = useState("");
  const [username2, setUsername2] = useState("");
  const [roomName, setRoomName] = useState("");
  // const [difficultyAI, setDifficultyAI] = useState("");
  // const [gameMode, setGameMode] = useState("");
  // const [timeLimit, setTimeLimit] = useState("");
  // const [saveGame, setSaveGame] = useState("");
  // const [redirect, setRedirect] = useState(false);
  const [isHost, setIsHost] = useState(false)

  // const socket = io("https://en-croissant.herokuapp.com");

  // const settings = { difficultyAI, gameMode, timeLimit, saveGame }
  
  useEffect(() => {
    const lobby_id = window.location.pathname.split('/')[2]
    const fetchLobbyData = async () => {
      const { data } = await axios.get(`https://en-croissant.herokuapp.com/lobby/${lobby_id}`);
      setUsername1(data.player_1_username)
      setUsername2(data.player_2_username)
      setRoomName(data.lobby_id)
      if (user===data.player_1_username) {
        setIsHost(true)
      }
    }
    fetchLobbyData()
  }, []);


  const handleClick = (e) => {
    e.preventDefault();
    navigate('/play')
  };

  return (
    <>
      <div>
        <h2>Game settings</h2>
        <ul>
          <li>Room name: {roomName}</li>
          <li>Player 1: {username1}</li>
          <li>Player 2: {username2}</li>
          {/* <li>AI difficulty: {difficultyAI}</li>
          <li>Game mode: {gameMode}</li>
          <li>Time limit: {timeLimit}</li>
          <li>Save game: {saveGame}</li> */}
        </ul>
      </div>

      {isHost ? (
      <button
      onClick={handleClick}
      >Play Game</button>
      ) : (
        <></>
      )}
    </>
  );
};
export default JoinGame;
