import { useEffect, useState } from "react";
import axios from "axios";
import PlayerList from "../PlayerList/PlayerList";
import { useParams } from "react-router";
import { getLogo } from "../../utils/format";
import "./Team.scss";

const API_URL = import.meta.env.VITE_APP_API_URL;

function Team() {
  const [team, setTeam] = useState(null);

  const { id } = useParams();

  const fetchTeam = async (id) => {
    try {
      const { data } = await axios.get(`${API_URL}/teams/${id}/players`);
      setTeam(data);
    } catch (error) {
      console.error(error);
    }
  };

  const updatePlayer = async (player) => {
    try {
      await axios.post(`${API_URL}/players/${player.id}`, player);
      fetchTeam(id);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTeam(id);
  }, []);

  if (!team) {
    return <>Loading...</>;
  }

  const { players } = team;

  const activePlayers = players.filter((p) => p.isActive);
  const inactivePlayers = players.filter((p) => !p.isActive);

  return (
    <>
      <h2 className="team__title">
        <span className="team__logo">{getLogo(team.mascot)}</span>
        {team.name}
      </h2>

      <PlayerList
        status="active"
        players={activePlayers}
        theme={team.abbreviation}
        updatePlayer={updatePlayer}
      />

      <PlayerList
        status="inactive"
        players={inactivePlayers}
        theme={team.abbreviation}
        updatePlayer={updatePlayer}
      />
    </>
  );
}

export default Team;
