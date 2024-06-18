import {
  mapPlayerFieldsForClient,
  mapPlayerFieldsForDatabase,
} from "../utils/player.js";

import { players } from "../../data/data.js";

const getAllPlayers = () =>
  players.map((player) => mapPlayerFieldsForClient(player));

const getPlayerById = (id) => {
  if (typeof id !== "number") {
    id = Number(id);
  }

  return mapPlayerFieldsForClient(players.find((player) => player.id === id));
};

const getPlayersByTeamId = (teamId) => {
  if (typeof teamId !== "number") {
    teamId = Number(teamId);
  }

  return players
    .filter((player) => player.team_id === teamId)
    .map((player) => mapPlayerFieldsForClient(player));
};

const getNextId = () => Math.max(...players.map((player) => player.id)) + 1;

const addPlayer = (playerData) => {
  playerData.id = getNextId();
  players.push(playerData);

  return getPlayerById(playerData.id);
};

const updatePlayer = (playerData) => {
  const playerIndex = players.findIndex(
    (player) => player.id === playerData.id
  );

  const updatedPlayer = {
    ...players[playerIndex],
    ...mapPlayerFieldsForDatabase(playerData),
  };

  players[playerIndex] = updatedPlayer;

  return getPlayerById(playerData.id);
};

export {
  getAllPlayers,
  getPlayerById,
  getPlayersByTeamId,
  addPlayer,
  updatePlayer,
};
