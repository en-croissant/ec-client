// import logo from "./logo.svg";
import { Home } from "./pages";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { io } from "socket.io-client";

const socket = io("https://en-croissant.herokuapp.com/");

function App() {
  socket.on("hello world", () => {
    console.log("hello world");
  });
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
