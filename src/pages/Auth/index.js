import React, {useState} from "react";

import { LoginForm, RegForm } from '../../components'

import "./style.css";

function Auth() {
   const [showReg, setShowReg] = useState(false);
   const [showLogin, setShowLogin] = useState(true);

      const onClick = () => {
        if (showLogin == true) {
          setShowLogin(false)
          setShowReg(true)
        } else {
          setShowLogin(true);
          setShowReg(false);
        }
      };

  return (
    <>
      <div className="wrapper">
        <span
          data-testid="form-button"
          className="authbutton"
          onClick={onClick}
        >
          {showLogin ? "Sign Up" : "Login"}
        </span>
        {showLogin ? <LoginForm /> : <RegForm />}
      </div>
      <a className="goBack" href="/">
        <span>Go back</span>
      </a>
    </>
  );
};

export default Auth
