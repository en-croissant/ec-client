import React from "react";

import "./style.css";

function MatchResult({outcome}) {

  return (
    <h1 id="box">{outcome}</h1>
  );
}

export default MatchResult;