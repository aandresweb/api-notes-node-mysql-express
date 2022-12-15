import express from "express";
import notesRoutes from "./routes/notes.routes.js";

const app = express();

app.use(express.json());
app.use("/api", notesRoutes);

app.listen(3000);
