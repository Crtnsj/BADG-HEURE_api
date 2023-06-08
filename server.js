import express, { json } from "express";
import { connect } from "mongoose";
import LogInRoads from "./routes/logInRoads.js";
import BadgRoads from "./routes/badgRoads.js";
import cors from "cors";

const app = express();

app.use(json());
app.use(cors());

//utilisation des routeurs
app.use("/logIn", LogInRoads);
app.use("/badg", BadgRoads);
// TEST

//TEST

//connexion à la base de donnée
connect(
  "mongodb+srv://badg-api:RizARWktwEqBB7hT@cluster0.qh5wykm.mongodb.net/BADG-HEURE?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .then((result) => {
    app.listen(3001, () => console.log("Server started on port 3001"));
  })
  .catch(() => console.log("Connexion à MongoDB échouée !"));
