import React, { useState } from "react";

import { useAuthContext } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";

import "./style.css";

function RegForm() {
  const { register, login } = useAuthContext();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    setPassword(formData.password);
    setError();
    const value = e.target.value;
    return setFormData((prev) => ({
      ...prev,
      [e.target.name]: value,
    }));
  };

  const formIncomplete = () => {
    return (
      Object.values(formData).some((value) => !value) || passwordNotMatch()
    );
  };

  const passwordNotMatch = () => {
    return formData.password !== formData.passwordConfirmation;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const regResult = await register(formData);
      console.log(regResult)
      if (regResult === "Registration successful") {
        await login(formData);
        navigate("/");
      } else {
        throw new Error("Unsuccessful registration");
      }
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  return (
    <>
      <div id="clipboard_back">
        <div id="clip"></div>
        <form aria-label="reg-form" id="reg_form" onSubmit={handleSubmit}>
          <div id="back_paper"></div>
          <div>
            <h1> Sign up here!</h1>
            <div id="user_icon" className="reg-username">
              <label htmlFor="username">Username:</label>
              <input
                aria-label="username-field"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInput}
                placeholder="Enter username"
                required
                // pattern={"([0-9]|[A-Z]|[a-z]){4,20}"}
              />
            </div>
          </div>
          <div className="reg-email">
            <label htmlFor="email">Email:</label>
            <input
              aria-label="email-field"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInput}
              placeholder="Enter email"
              required
              // pattern={"([0-9]|[A-Z]|[a-z]){1,30}@([0-9]|[A-Z]|[a-z]){1,10}.([0-9]|[A-Z]|[a-z]){1,10}(.([0-9]|[A-Z]|[a-z]){1,10})?"}
            />
          </div>
          <div className="reg-password">
            <label htmlFor="password">Password:</label>
            <input
              aria-label="password-field"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInput}
              placeholder="Password"
              // pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,30}$"
              required
            />
          </div>
          <div>
            <label htmlFor="passwordConfirmation">Confirm:</label>
            <input
              aria-label="passwordConfirmation-field"
              type="password"
              name="passwordConfirmation"
              value={formData.passwordConfirmation}
              onChange={handleInput}
              placeholder=" Confirm Password"
              required
              pattern={password}
            />
          </div>
          <div id="reg_btn_doodle">
            <input
              id="submit_btn_reg"
              type="submit"
              disabled={formIncomplete()}
              value="Create"
            />
            <svg viewBox="0 0 500 150" preserveAspectRatio="none">
              <path
                fill="none"
                d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"
              />
            </svg>
          </div>
        </form>
      </div>
      {error && (
        <div data-testid="error" id="error">
          {error}
        </div>
      )}
      {loading && (
        <div data-testid="loading" id="loading">
          Creating Account . . .
        </div>
      )}
    </>
  );
}

export default RegForm;
