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
        <Route path={"/book"} element={<Pages.Book />} />
        {!user ? (
          <>
            <Route path={"/auth"} element={<Pages.Auth />} />
          </>
        ) : (
          <>
            <Route path={"/main"} element={<Pages.Main />} />
            <Route path={"/create"} element={<Pages.CreateGame />} />
            <Route path={"/play"} element={<Pages.PlayGame />} />
            <Route path={"/lobby/*"} element={<Pages.Lobby />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
