// import logo from "./logo.svg";
import * as Pages from "./pages";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { io } from "socket.io-client";

const socket = io("https://en-croissant.herokuapp.com/");

function App() {
  socket.on("hello world", () => {
    console.log("hello world");
  });
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Pages.Home />} />
      </Routes>
    </div>
  );
}

export default App;
