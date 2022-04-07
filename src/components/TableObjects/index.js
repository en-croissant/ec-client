import React from "react";
import "./style.css";

const TableObjects = () => {
  return (
    <>
      <a data-testid="tableobj-component" href="/Book">
        <div id="top_book">
          <h7>How to play</h7>
        </div>
        <div id="top_page"></div>
        <div id="side_book"></div>
        <div id="pages"></div>
      </a>

      <div id="chess_base"></div>
      <div id="chess_base_inner"></div>
      <div id="chess_left"></div>
      <div id="chess_front"></div>
    </>
  );
};
export default TableObjects;
