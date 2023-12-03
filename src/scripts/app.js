import express from "express";
import cors from "cors";
import * as championRoutes from "../routes/championRoutes.js";
import Syncing from "./update_table.js";

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

Syncing();

app.get("/champions", championRoutes.getChampions);
app.get("/champions/:id", championRoutes.getChampionById);
app.post("/champions", championRoutes.addNewChampion);
app.put("/champions/:id", championRoutes.uppdateChampion);
