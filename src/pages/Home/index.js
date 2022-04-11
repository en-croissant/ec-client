import React, { useState } from "react";
import "./style.css";
import { TableObjects, TextScroller } from "../../components";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { useAuthContext } from "../../contexts/auth";
import { LoginForm, RegForm, Logout } from "../../components";
import { useNavigate } from "react-router-dom";

const styles = {
  fadeIn: {
    animation: "x 5s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
};

function Home() {
  const { user } = useAuthContext();
  const navigate = useNavigate()
  const [showReg, setShowReg] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const onClick = () => {
    if (!user) {
      if (showLogin || showReg) {
        setShowLogin(false);
        setShowReg(false);
      } else {
        setShowLogin(true);
      }
    } else {
      navigate('/main');
    }
  };

  const onClickbutton = () => {
    if (showLogin) {
      setShowReg(true);
      setShowLogin(false);
    } else {
      setShowReg(false);
      setShowLogin(true);
    }
  };

  return (
    <>
      <div className="wrapper">
        <div id="homeDiv"></div>
        <StyleRoot>
          <div className="HomeTitle" style={styles.fadeIn}>
            En Croissant
          </div>
        </StyleRoot>
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
        <div data-testid="clipboard" onClick={onClick} id="home_clip_board">
          <div id="home_clip_board_paper">
            <h6>{!user ? "Sign in" : "Join Game"}</h6>
          </div>
          <div id="home-clip"></div>
        </div>
        <div className="homesignup">
          {showLogin ? (
            <span
              id="login_authbtn"
              data-testid="loginform-button"
              className="authbutton"
              onClick={onClickbutton}
            >
              Don't have an account? Click here to sign up!
            </span>
          ) : showReg ? (
            <span
              data-testid="regform-button"
              id="reg_authbtn"
              className="authbutton"
              onClick={onClickbutton}
            >
              Already have an account? Click here to login in!
            </span>
          ) : null}

          {showLogin ? <LoginForm /> : showReg ? <RegForm /> : null}
        </div>
        <TextScroller />
        {!!user ? <Logout /> : <></>}
      </div>
    </>
  );
}

export default Home;
