import React from "react";

import { Header } from "../../layout";
import "./style.css";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate()

  function createGame() {
    navigate("/create")
  }

  function joinGame() {
    navigate("/lobby")
  }
  return (
    <>
      <Header />
      <div id="cork_board"></div>
      <div id="poster">
        <div id="poster_border">
          <div id="inner_border">
            <h1 id="main_text"> Where the game begins...</h1>
            <div id="create_doodle">
              <div role="button" onClick={createGame} id="createGame">Create Game</div>
            </div>
            <div id="join_doodle">
              <div role="button" id="joinGame"
              onClick={joinGame}>Join Game</div>      
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
