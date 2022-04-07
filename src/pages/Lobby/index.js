import React from "react";
import { JoinGame } from "../../components";
import { Header } from '../../layout'
import "./style.css";
function Lobby() {
  return (
    <>
      <Header />
      <a className="goBack" href="/main">
        <span>Go back</span>
      </a>
      <div id="cork_board"></div>
      <div id="poster">
        <div id="poster_border">
          <div id="inner_border">
            <h1> New and Upcoming! Join now!</h1>
            <JoinGame />
          </div>
        </div>
      </div>
    </>
  );
}

export default Lobby;
