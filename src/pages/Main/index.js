import React from "react";
import { useAuthContext } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";

function Main() {
    const { user, logout } = useAuthContext();
    const navigate = useNavigate()

    const handleLogout = async () => {
      await logout();
      navigate("/");
    };

  return (
    <>
      <h1> This is the page after you log in</h1>
      <input type="submit" onClick={handleLogout} value="Logout" />
    </>
  );
}

export default Main;
