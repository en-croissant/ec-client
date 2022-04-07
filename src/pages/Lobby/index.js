import React from "react";
import { JoinGame } from "../../components";
import { Header } from '../../layout'
import "./style.css";
function Lobby() {
  return (
    <>
      <Header />
      <div id="cork_board"></div>
      <div id="poster">
        <div id="poster_border">
          <div id="inner_border">
            <h1 className='lobby-header'> New and Upcoming!</h1>
            <h2 className="lobby-header">Join now!</h2>
            <JoinGame />
          </div>
        </div>
      </div>
    </>
  );
}

export default Lobby;
