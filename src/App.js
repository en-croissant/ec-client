import logo from "./logo.svg";
import "./App.css";
import { io } from "socket.io-client";

import Gameboard from "./Chessboard.js";

const socket = io("https://en-croissant.herokuapp.com/");
//const socket = io("localhost:5000");

function App() {
  socket.on("hello world", ({ data }) => console.log(data));

  return (
    <>
      <Gameboard socket={socket} />
    </>
  );
}

export default App;
