import React, { useState } from "react";
// import { io } from "socket.io-client"
import { useAuthContext } from '../../contexts/auth'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CreateGameForm = () => {

    const { user } = useAuthContext()
    const navigate = useNavigate()
    
    const [player2Name, setPlayer2Name] = useState("")
    // const [difficultyAI, setDifficultyAI] = useState("");
    // const [gameMode, setGameMode] = useState("");
    // const [timeLimit, setTimeLimit] = useState("");
    // const [saveGame, setSaveGame] = useState("");
    // const [redirect, setRedirect] = useState(false);
    
    
    // const settings = { difficultyAI, gameMode, timeLimit, saveGame }

    // const socket = io("https://en-croissant.herokuapp.com");

    // // socket.emit("lobby", { roomName });

    // function createGameFunc () {
    //     socket.emit("create board", { settings })
    // }

    const handleSubmit = async () => {
        const lobbyData = {
            player_1_username: user,
            player_2_username: player2Name,
            history: ""
        }
        const headers = {
            "Content-Type": "application/json"
        }
        const { lobby_id } = await axios.post('https://en-croissant.herokuapp.com/lobby', lobbyData, headers)
        navigate(`/lobby/${lobby_id}`)
    }
    
    // socket.on("new game", ({chessboard}) => { console.log(chessboard)})
  
    return (
      <>
        <h2>Create Lobby</h2>
        <form aria-label="create-game-form">
            <label htmlFor="user2-name" >Room name: </label>
            <input 
            type="text"
            name="user2-name"
            id="user2-name"
            placeholder="Opponents username"
            onChange={(e) => setPlayer2Name(e.target.value)}
            value={player2Name}
            isRequired />


            {/* <label for="AI-difficulty" >AI Difficulty: </label>
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
            </select> */}
        </form>

        <button
        onClick={handleSubmit}
        >
        Create Game
        </button>

      </>
    );
  };
  export default CreateGameForm;
