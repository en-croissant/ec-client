import React from "react";
import { JoinGame } from "../../components";
import "./style.css";
function Lobby() {
  return (
    <>
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
