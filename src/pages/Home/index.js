import React from "react";
import "./style.css";
import { TableObjects, TextScroller } from "../../components";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";

import { useAuthContext } from "../../contexts/auth";
// import { useNavigate } from "react-router-dom";
const styles = {
  fadeIn: {
    animation: "x 5s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
};
function Home() {
  const { user, logout } = useAuthContext();
  // const navigate = useNavigate()

  const handleLogout = async () => {
    await logout();
    // navigate('/')
    window.location.reload(false);
  };

  return (
    <>
      <div className="wrapper">
        {!!user && (
          <input type="submit" onClick={handleLogout} value="Logout" />
        )}
        <div id="homeDiv"></div>
        <StyleRoot>
          <div className="HomeTitle" style={styles.fadeIn}>
            En Croissant
          </div>
        </StyleRoot>
        {/* <LightSwitch /> */}
        <div id="table">
          <TableObjects />
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
        <div id="home_clip_board">
          {/* <FlyingPaper /> */}
          <div id="home-clip"></div>
        </div>
        <TextScroller/>
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
