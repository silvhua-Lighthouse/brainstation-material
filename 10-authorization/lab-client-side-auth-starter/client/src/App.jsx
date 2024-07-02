import { useState } from "react";
import Profile from "./pages/Profile";
import "./App.css";
import axios from "axios";

const baseUrl = "http://localhost:8080";
const signupUrl = `${baseUrl}/signup`;
const loginUrl = `${baseUrl}/login`;

function App() {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    const body = {
      username: e.target.username.value,
      name: e.target.name.value,
      password: e.target.password.value
    }
    // Here send a POST request to signupUrl with username, name and password data

    try {
      const response = await axios.post(signupUrl, body);
      console.log(response);
      if (response.data.success === "true") {
        setIsSignedUp(true);
      }
    } catch (error) {
      console.log(error)
      setErrorMessage(true);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const body = {
      username: e.target.username.value,
      password: e.target.password.value
    }

    // Here send a POST request to loginUrl with username and password data
    try {
      const response = await axios.post(loginUrl, body);
      if (response.data.token) {
        const token = response.data.token
        sessionStorage.setItem('token', token);
        setIsLoggedIn(true);
        setIsLoginError(false);
        setErrorMessage('');
      }
    } catch (error) {
      const errorMessage = error.response.data.error.message;
      console.log(errorMessage)
      setErrorMessage(errorMessage);
    }

  };

  const renderSignUp = () => (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup}>
        <div className="form-group">
          Username: <input type="text" name="username" />
        </div>
        <div className="form-group">
          Name: <input type="text" name="name" />
        </div>
        <div className="form-group">
          Password: <input type="password" name="password" />
        </div>
        <button type="submit" className="btn btn-primary">
          Signup
        </button>
      </form>
    </div>
  );

  const renderLogin = () => (
    <div>
      <h1>Login</h1>
      {isLoginError && <label className="error">{errorMessage}</label>}
      <form onSubmit={handleLogin}>
        <div className="form-group">
          Username: <input type="text" name="username" />
        </div>
        <div className="form-group">
          Password: <input type="password" name="password" />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );

  // Handle the Signup/Login
  if (!isSignedUp) return renderSignUp();
  if (!isLoggedIn) return renderLogin();

  return (
    <div className="App">
      <Profile />
    </div>
  );
}

export default App;
