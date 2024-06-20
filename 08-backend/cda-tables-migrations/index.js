import "dotenv/config";
import express from "express";
const app = express();

const PORT = process.env.PORT || 5050;

import userRoutes from "./routes/user-routes.js";
import postRoutes from "./routes/post-routes.js";

app.use(express.json());

// all users routes
app.use("/users", userRoutes);
app.use('/posts', postRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});