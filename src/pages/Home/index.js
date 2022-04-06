import React from "react";
import "./style.css";
import { TableObjects } from "../../components";
import { useAuthContext } from "../../contexts/auth";
// import { useNavigate } from "react-router-dom";

function Home() {
  const { logout } = useAuthContext()
  // const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    // navigate('/')
    window.location.reload(false)
  }

  return (
    <>
      <div className ="wrapper">
        <input type="submit" onClick={handleLogout} value="Logout" />
        <div id="homeDiv">
        </div>
        <TableObjects />
        <div id="table">
        <div id="table_top"></div>
        <div id="table_top_front"></div>
        <div id="table_top_side"></div>
        <div id="l_back_leg_a"></div>
        <div id="l_back_leg_b"></div>
        <div id="l_front_leg_a"></div>
        <div id="l_front_leg_b"></div>
        <div id="r_front_leg_a"></div>
        <div id="r_front_leg_b"></div>
        <div id="r_back_leg_a"></div>
        <div id="r_back_leg_b"></div>
      </div>
      </div>
    </>
  );
}

export default Home;






          {
            /* <div id="black_l">
            <div id="black_dgnl"></div>
          </div>
          <div id="white_l">
            <div id="white_dgnl"></div>
          </div>
          <div id="white_r">
            <div id="whiteR_dgnl"></div>
          </div> */
          }
