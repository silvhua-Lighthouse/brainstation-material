import express from "express";
import {
  getAllPlayers,
  getPlayerById,
  addPlayer,
  updatePlayer,
} from "../models/player.js";

const router = express.Router();

router
  .route("/")
  .get((_req, res) => {
    res.json(getAllPlayers());
  })
  .post((req, res) => {
    try {
      const player = addPlayer(req.body);
      res.status(201).json(player);
    } catch (error) {
      res.status(500).send(`Couldn't add player: ${error}`);
    }
  });

router
  .route("/:id")
  .get((req, res) => {
    const player = getPlayerById(req.params.id);

    if (!player) {
      return res.sendStatus(404);
    }

    res.json(player);
  })
  .patch((req, res) => {
    try {
      const player = updatePlayer(req.body);
      res.json(player);
    } catch (error) {
      res.status(400).send(`Couldn't update player: ${error}`);
    }
  });

export default router;
