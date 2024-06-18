import { teams } from "../../data/data.js";

const getAllTeams = () => teams.filter((team) => team.abbreviation !== "ccs");

const getTeamById = (id) => {
  if (typeof id !== "number") {
    id = Number(id);
  }

  return teams.find((team) => team.id === id);
};

export { getAllTeams, getTeamById };
