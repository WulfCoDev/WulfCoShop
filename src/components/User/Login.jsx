import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    
    if (data.token) {
      // Save token to localStorage for persistent authorization
      localStorage.setItem("authToken", data.token);

      // Navigate to the home page or dashboard
      navigate("/");
    } else {
      console.error("Authentication failed");
    }
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
      </form>
      <button onClick={() => navigate("/register")}>Create an Account</button>
    </div>
  );
};

export default LoginForm;
