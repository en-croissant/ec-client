import React, {useState} from "react";
import "./style.css";
import { TableObjects, TextScroller } from "../../components";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
// import {Header} from "../../layout"
import { useAuthContext } from "../../contexts/auth";
import { LoginForm, RegForm } from "../../components";

const styles = {
  fadeIn: {
    animation: "x 5s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
};
function Home() {
     const [showReg, setShowReg] = useState(false);
     const [showLogin, setShowLogin] = useState(false);

     const onClick = () => {
         setShowLogin(true);
     };

     const onClickbutton = () => {
       if (showLogin ==true) {
         setShowReg(true)
         setShowLogin(false)
       } else {
         setShowReg(false)
         setShowLogin(true)
       }
     }

  return (
    <>
      <div className="wrapper">
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
        {/* <a data-testid="login-link" href={!user ? "/auth" : "/main"}> */}
        <div onClick={onClick} id="home_clip_board">
          <div id="home_clip_board_paper">
            <h6>Sign in</h6>
          </div>
          {/* <FlyingPaper /> */}
          <div id="home-clip"></div>
        </div>
        {/* </a> */}
        <div className="homesignup">
          {showLogin ? (
            <span
              data-testid="form-button"
              className="authbutton"
              onClick={onClickbutton}
            >
              Sign up
            </span>
          ) : showReg ? (
            <span
              data-testid="form-button"
              className="authbutton"
              onClick={onClickbutton}
            >
              Login
            </span>
          ) : null}

          {showLogin ? <LoginForm /> : showReg ? <RegForm /> : null}
        </div>
        <TextScroller />
        {/* <Header/> */}
      </div>
    </>
  );
  };

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

