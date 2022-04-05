import React, { useState } from 'react'

import { useAuthContext } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";

import './style.css'

function RegForm() {
  const { register, login } = useAuthContext()
  const navigate = useNavigate()

  
  const [password, setPassword] = useState("")
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  });
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    setPassword(formData.password)
    setError()
    return setFormData(prev => ({
      ...prev, 
      [e.target.name]: e.target.value
    }))
  }

  const formIncomplete = () => {
    return (
      Object.values(formData).some(value => !value) || passwordNotMatch()
    )
  }

  const passwordNotMatch = () => {
    return formData.password !== formData.passwordConfirmation
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const regResult = await register(formData)
      if (regResult==="Registration successful") {
        await login(formData)
        navigate('/')
      } else {
        throw new Error('')
      }
    } catch (err) {
      setLoading(false)
      setError(err.message)
    }
  }

  return (
    <>
      <form aria-label="reg-form" onSubmit={handleSubmit} >
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInput}
            placeholder="Enter username"
            required
            // pattern={"([0-9]|[A-Z]|[a-z]){4,20}"}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInput}
            placeholder="Enter email"
            required
            // pattern={"([0-9]|[A-Z]|[a-z]){1,30}@([0-9]|[A-Z]|[a-z]){1,10}.([0-9]|[A-Z]|[a-z]){1,10}(.([0-9]|[A-Z]|[a-z]){1,10})?"}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
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
          <label htmlFor="passwordConfirmation">Confirm Password:</label>
          <input
            type="password"
            name="passwordConfirmation"
            value={formData.passwordConfirmation}
            onChange={handleInput}
            placeholder="Confirm Password"
            required
            pattern={password}
          />
        </div>
        <input
          type="submit"
          disabled={formIncomplete()}
          value="Create Account"
        />
      </form>
      {error && (
        <div id="error">
          {error}
        </div>
      )}
      {loading && (
        <div id="loading">
          Creating account . . .
        </div>
      )}
    </>
  )
}

export default RegForm
