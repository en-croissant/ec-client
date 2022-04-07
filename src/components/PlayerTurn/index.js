import React from "react";

import "./style.css";

function PlayerTurn({turn}) {

  return (
    <h1 id="tracker">It is Player {turn}'s Turn</h1>
  );
}

export default PlayerTurn;