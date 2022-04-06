import React, { useState } from "react";

import { useAuthContext } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";

import "./style.css";

function LoginForm() {
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    setError();
    const value = e.target.value;
    return setFormData((prev) => ({
      ...prev,
      [e.target.name]: value,
    }));
  };

  const formIncomplete = () => {
    Object.values(formData).some((value) => !value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const loginResult = await login(formData);
      if (loginResult === "Login successful") {
        navigate("/");
      } else {
        throw new Error(loginResult);
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
        <form aria-label="login-form" id="login_form" onSubmit={handleSubmit}>
          <div id="back_paper"></div>
          <div>
            <h1> Login to compete again</h1>
            <div id="user_icon"></div>
            <label htmlFor="username">Username:</label>
            <input
              id="cb pristine"
              className="password-field"
              aria-label="username-field"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInput}
              placeholder="Enter username"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              id="cb pristine"
              aria-label="password-field"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInput}
              placeholder="Password"
              required
            />
          </div>

          <div id="btn_doodle">
            <input
              id="submit_btn"
              role="button"
              type="submit"
              disabled={formIncomplete()}
              value="Login"
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
          Logging in . . .
        </div>
      )}
    </>
  );
}

export default LoginForm;
