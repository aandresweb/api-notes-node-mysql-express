import express from "express";
import notesRoutes from "./routes/notes.routes.js";
import "./config.js";
import { PORT } from "./config.js";
const app = express();

app.use(express.json());
app.use("/api", notesRoutes);
app.use((req, res, next) => {
  res.status(404).json({
    message: "Endpoint not found",
  });
});

app.listen(PORT);

console.log("SERVER RUNNING ON PORT " + PORT);
