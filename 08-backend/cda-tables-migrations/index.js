import "dotenv/config";
import express from "express";
const app = express();

const PORT = process.env.PORT || 5050;

import userRoutes from "./routes/user-routes.js";

// all users routes
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});