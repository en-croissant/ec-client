import React from "react";
import { useAuthContext } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";

import './style.css'

function Logout() {
  const { logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <> 
      <input className="logout-btn" type="submit" onClick={handleLogout} value="Logout" />
    </>
  );
}

export default Logout;
