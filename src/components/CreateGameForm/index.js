import React, { useState } from "react";
import { useAuthContext } from '../../contexts/auth'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import "./style.css"

const CreateGameForm = () => {

    const { user } = useAuthContext()
    const navigate = useNavigate()
    
    const [player2Name, setPlayer2Name] = useState("")

    const handleChange = (e) => {
        setPlayer2Name(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const lobbyData = {
            player_1_username: user,
            player_2_username: player2Name,
            history: ""
        }
        const headers = {
            "Content-Type": "application/json"
        }
        const {data} = await axios.post('https://en-croissant.herokuapp.com/lobby', lobbyData, headers)       
        navigate(`/lobby/${data}`)
    }
  
    return (
      <>
        <h1 id="create_text">Create Lobby</h1>
        <form aria-label="create-game-form" onSubmit={handleSubmit}>
            <label htmlFor="user2-name" >Opponent name:</label>
            <input 
            aria-label="opponent-name"
            type="text"
            name="user2-name"
            id="user2-name"
            placeholder="Opponent's username"
            onChange={handleChange}
            value={player2Name}
            required />

        <button
        id="create_game"
        aria-label="create-button"
        type="submit"
        >
        Create Game
        </button>
        </form>
      </>
    );
  };
  export default CreateGameForm;
