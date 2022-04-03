// import logo from "./logo.svg";
import { Home } from "./pages";
import "./App.css";
import { io } from "socket.io-client";

const socket = io("https://en-croissant.herokuapp.com/");

function App() {
  socket.on("hello world", () => {
    console.log("hello world");
  });
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
