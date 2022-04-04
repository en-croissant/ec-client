// import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import * as Pages from "./pages";
import { useAuthContext } from "./contexts/auth";

import "./App.css";

// import { io } from "socket.io-client";
// const socket = io("https://en-croissant.herokuapp.com/");

function App() {
  // socket.on("hello world", () => {
  //   console.log("hello world");
  // });

  const { user } = useAuthContext();

  return (
    <div className="App">
      <Routes>
        <Route exact path={"/"} element={<Pages.Home />} />
        <Route path={"/book"} element={<Pages.Book />} />
      </Routes>
    </div>
  );
}

export default App;
