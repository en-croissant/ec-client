import React from "react";

import { Header } from "../../layout";
import "./style.css";

function Main() {
  return (
    <>
      <Header />
      <div id="main_clipboard_back">
        <div id="main_clip"></div>
        <div id="main_back_paper">
          <h1> This is the page after you log in</h1>
          <a href="/create">
            <div id="createGame">Create Game</div>
          </a>
          <a href="/lobby">
            <div id="joinGame">Join Game</div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Main;
