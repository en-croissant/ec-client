import React from "react";
import { useState, useEffect } from "react";
// import { io } from "socket.io-client"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/auth";

import "./style.css";

const JoinGame = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const [username1, setUsername1] = useState("");
  const [username2, setUsername2] = useState("");
  const [roomName, setRoomName] = useState("");
  // const [difficultyAI, setDifficultyAI] = useState("");
  // const [gameMode, setGameMode] = useState("");
  // const [timeLimit, setTimeLimit] = useState("");
  const [isHost, setIsHost] = useState(false);

  // const socket = io("https://en-croissant.herokuapp.com");

  // const settings = { difficultyAI, gameMode, timeLimit, saveGame }

  useEffect(async () => {
    const lobby_id = window.location.pathname.split("/")[2];
    let hostName;
    const fetchLobbyData = async () => {
      const url = "https://en-croissant.herokuapp.com"
      const { data } = await  axios.get(
        `${url}/lobby/${lobby_id}`
      );
      const user1 = await axios.get(`${url}/users/${data[0].player_1_key}`);
      setUsername1(user1.data[0].username);
      const user2 = await axios.get(`${url}/users/${data[0].player_2_key}`)
      setUsername2(user2.data[0].username);
      setRoomName(data[0].lobby_id);
      hostName = user1.data[0].username;
    };
    fetchLobbyData();
    if (user === hostName) {
      setIsHost(true);
    }
  }, []);

  const onClickEvent = (e) => {
    e.preventDefault();
    navigate(`/play/${roomName}`);
  };

  return (
    <>
      <div>
        <h3>Game settings</h3>
        <h3>Room name: {roomName}</h3>
        <h3>Player 1: {username1}</h3>
        <h3>Player 2: {username2}</h3>
        {/* <li>AI difficulty: {difficultyAI}</li>
            <li>Game mode: {gameMode}</li>
            <li>Time limit: {timeLimit}</li> */}
      </div>

      {/* {isHost ? ( */}
        <button aria-label="play-button" onClick={onClickEvent}>
          Start Game
        </button>
      {/* ) : (
        <></>
      )} */}
    </>
  );
};
export default JoinGame;
