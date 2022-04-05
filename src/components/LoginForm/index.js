import React, { useState } from 'react'

import { useAuthContext } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";

import './style.css'

export default () => {
  const { login } = useAuthContext()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({ username: "", password: "" })
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)

  const handleInput = (e) => {
    setError()
    return setFormData(prev => ({
      ...prev,
      [e.targte.name]: e.target.value
    }))
  }

  const formIncomplete = () => {
    Object.values(formData).some(value => !value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const loginResult = await login(formData)
      if (loginResult=="Login successful") {
        navigate("/home")
      } else {
        throw new Error(loginResult)
      }
    } catch (err) {
      setLoading(false)
      setError(err.message)
    }
  }

  return (
    <>
      <form id="login-form" role="form" >
      <div>
          <label htmlFor="username-log">Username:</label>
          <input
            type="text"
            name="username-log"
            value={formData.username}
            onChange={handleInput}
            placeholder="Enter username"
            required
          />
        </div>
        <div>
          <label htmlFor="password-log">Password:</label>
          <input
            type="password"
            name="password-log"
            value={formData.password}
            onChange={handleInput}
            placeholder="Password"
            required
          />
        </div>
        <input
          type="submit"
          disabled={formIncomplete()}
          value="Login"
        />
      </form>
      {error && (
        <div id="error">
          {error}
        </div>
      )}
      {loading && (
        <div id="loading">
          Logging in . . .
        </div>
      )}
    </>
  )
}
