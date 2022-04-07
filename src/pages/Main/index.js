import React from "react";

import { Header } from "../../layout";
import "./style.css";

function Main() {
  return (
    <>
      <Header />
      <div id="cork_board"></div>
      <div id="poster">
        <div id="poster_border">
          <div id="inner_border">
            <h1> This is the page after you log in</h1>
            <a href="/create">
              <div id="createGame">Create Game</div>
            </a>
            <a href="/lobby">
              <div id="joinGame">Join Game</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
