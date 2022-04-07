import React from "react";
import {CreateGameForm } from "../../components";
import {Header} from "../../layout"

function CreateGame() {
  return (
    <>
      <Header />
      <CreateGameForm />
      <a className="goBack" href="/main">
        <span>Go back</span>
      </a>
    </>
  );
}

export default CreateGame;
