// import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import * as Pages from "./pages";
import { useAuthContext } from "./contexts/auth";

import "./App.css";

function App() {

  const { user } = useAuthContext();

  return (
    <div className="App">
      <Routes>
        <Route exact path={"/"} element={<Pages.Home />} />
        <Route path={"/lobby"} element={<Pages.Lobby />} />
        <Route path={"/book"} element={<Pages.Book />} />
      </Routes>
    </div>
  );
}

export default App;
