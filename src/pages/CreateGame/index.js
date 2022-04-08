import React from "react";
import {CreateGameForm } from "../../components";
import {Header} from "../../layout"

import "./style.css"


function CreateGame() {
  return (
    <>
      <Header />
      <div id="cork_board"></div>
      <div id="poster">
        <div id="poster_border">
          <div id="inner_border">
            <CreateGameForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateGame;
