import "dotenv/config";
import express from "express";
import cors from "cors";
import players from "./routes/players.js";
import teams from "./routes/teams.js";

const app = express();
const PORT = process.env.PORT ?? 8080;

app.use(cors());
app.use(express.json());

app.use("/players", players);
app.use("/teams", teams);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
