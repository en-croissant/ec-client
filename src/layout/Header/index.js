import React from "react";
import { useAuthContext } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";
import "./style.css"

function Header() {
  const { logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <> 
      <span className = "header float"> 
        <a className="goBack float some-font" href="/">
          <span>Home</span>
        </a>
          <input className="logoutheader" type="submit" onClick={handleLogout} value="Logout" />
      </span>
    </>
  );
}

export default Header;
