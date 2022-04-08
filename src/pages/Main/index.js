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
              <div onClick={createGame} id="createGame">Create Game</div>
              {/* <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                <path
                  fill="none"
                  d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"
                />
              </svg> */}
            </div>
            <div id="join_doodle">
            
              <div id="joinGame"
              onClick={joinGame}>Join Game</div>
              {/* <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                <path
                  fill="none"
                  d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"
                />
              </svg> */}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
