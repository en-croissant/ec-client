import React from "react";
import "./style.css";
import { useAuthContext } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";

const TableObjects = () => {
  const navigate = useNavigate()
  const { user } = useAuthContext();
  
  function goToBook() {
    navigate("/book")
  }
  return (
    <>
      <a data-testid="tableobj-component" onClick={goToBook}>
        <div id="top_book">
          <h7>How to play</h7>
        </div>
        <div id="top_page"></div>
        <div id="side_book"></div>
        <div id="pages"></div>
      </a>

      <a href={user ? "/main" : null}>
        <div id="chess_base"></div>
        <div id="chess_base_inner"></div>
        <div id="chess_left"></div>
        <div id="chess_front"></div>
      </a>
    </>
  );
};
export default TableObjects;




