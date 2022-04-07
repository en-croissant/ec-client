import React from "react";
import {JoinGame} from "../../components";
import {Header} from "../../layout"

function Lobby() {
  return (
    <>
      <Header />
      <h1> test for join game page</h1>
      <JoinGame />
      <a className="goBack" href="/main">
        <span>Go back</span>
      </a>
    </>
  );
}

export default Lobby;
