import React from "react";
import { useAuthContext } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";

function Header() {
  const { logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <>
      <span className = "header"> 
        <input type="submit" onClick={handleLogout} value="Logout" />
      </span>
    </>
  );
}

export default Header;
