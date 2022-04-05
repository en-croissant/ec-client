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
    const value = e.target.value
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
      <form aria-label="login-form" id="login_form" onSubmit={handleSubmit}>
        <div id="back_paper"></div>
        <div>
          <h1> Login to compete again</h1>
          <label htmlFor="username">Username:</label>
          <input
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
            aria-label="password-field"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInput}
            placeholder="Password"
            required
          />
        </div>
        <input role="button" type="submit" disabled={formIncomplete()} value="Login" />
      </form>
      {error && <div data-testid="error" id="error">{error}</div>}
      {loading && <div data-testid="loading" id="loading">Logging in . . .</div>}
    </>
  );
}

export default LoginForm;
