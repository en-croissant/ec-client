import logo from "./logo.svg";

import { io } from "socket.io-client";
const socket = io("https://en-croissant.herokuapp.com/");

import { useAuthContext } from "./contexts/auth";

import "./App.css";

function App() {
  socket.on("hello world", () => {
    console.log("hello world");
  });

  const { user } = useAuthContext()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
