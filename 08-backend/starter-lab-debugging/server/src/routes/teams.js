import express from "express";
import { getAllTeams, getTeamById } from "../models/team.js";
import { getPlayersByTeamId } from "../models/player.js";

const router = express.Router();

router.get("/", (_req, res) => {
  res.json(getAllTeams());
});

router.get("/:id/players", (req, res) => {
  let team = getTeamById(req.params.id);

  if (!team) {
    return res.sendStatus(404);
  }

  team.players = getPlayersByTeamId(team.id);
  res.json(team);
});

export default router;
