import express, { json } from "express";
import { connect } from "mongoose";
import signupRoad from "./routes/signUpRoad.mjs";
import cors from "cors";

const app = express();

app.use(json());
app.use(cors());

// import des logiques de routage

//connexion à la base de donnée
connect(
  "mongodb+srv://badg-api:RizARWktwEqBB7hT@cluster0.qh5wykm.mongodb.net/BADG-HEURE?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

//utilisation des routeurs

app.use("/signup", signupRoad);

// TEST
app.post("/", (req, res) => {
  res.send("requete reçu");
});
//TEST

app.listen(3001, () => console.log("Server started on port 3001"));
