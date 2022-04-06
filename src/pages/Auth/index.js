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
      <span className="authbutton" onClick={onClick}>
        hehehe
      </span>
      {showLogin ? <LoginForm /> : <RegForm />}

    </>
  );
};

export default Auth
