import { useState } from "react";
import Profile from "./pages/Profile";
import "./App.css";
import axios from "axios";

const baseUrl = "http://localhost:8080";
const loginUrl = `${baseUrl}/login`;
const signupUrl = `${baseUrl}/signup`;

function App() {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await axios.post(signupUrl, {
        username: e.target.username.value,
        name: e.target.name.value,
        password: e.target.password.value,
      });
      setIsSignedUp(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(loginUrl, {
        username: e.target.username.value,
        password: e.target.password.value,
      });
      sessionStorage.setItem("JWTtoken", response.data.token);

      setIsLoggedIn(true);
      setIsLoginError(false);
      setErrorMessage("");
    } catch (error) {
      setIsLoginError(true);
      setErrorMessage(error.response.data.error.message);
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
        <button className="btn btn-primary" type="submit">
          Signup
        </button>
      </form>
    </div>
  );

  const renderLogin = () => (
    <div>
      <h1>Login</h1>
      {isLoginError && <label style={{ color: "red" }}>{errorMessage}</label>}
      <form onSubmit={handleLogin}>
        <div className="form-group">
          Username: <input type="text" name="username" />
        </div>
        <div className="form-group">
          Password: <input type="password" name="password" />
        </div>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
    </div>
  );

  if (!isSignedUp) {
    return renderSignUp();
  }

  if (!isLoggedIn) {
    return renderLogin();
  }

  return (
    <div className="App">
      <Profile />
    </div>
  );
}

export default App;
