import React from "react";

import "./style.css";

function PlayerName({playerName, isActive, isPlayer1}) {

  return (
    <h1  
    class={`player_name ${isActive ? "active" : ""} ${isPlayer1 ? "" : "top"}`}>{playerName}</h1>
  );
}

export default PlayerName;