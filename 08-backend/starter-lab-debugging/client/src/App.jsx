import "./App.scss";
import Team from "./components/Team/Team";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";

const API_URL = import.meta.env.VITE_APP_API_URL;

function App() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/teams`);
        setTeams(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTeams();
  }, []);

  return (
    <>
      <Router>
        <div className="layout">
          <Nav teams={teams} />
          <main className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/teams/:id" element={<Team />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
