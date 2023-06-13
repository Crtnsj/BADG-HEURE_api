import express, { json } from "express";
import { connect } from "mongoose";
import LogInRoads from "./routes/logInRoads.js";
import BadgRoads from "./routes/badgRoads.js";
import AccountRoads from "./routes/accountRoads.js";
import NewsRoads from "./routes/newsRoads.js";
import CompanyRoads from "./routes/companyRoads.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(json());
app.use(cors());

//utilisation des routeurs
app.use("/logIn", LogInRoads);
app.use("/badg", BadgRoads);
app.use("/account", AccountRoads);
app.use("/news", NewsRoads);
app.use("/company", CompanyRoads);
app.use((err, req, res, next) => {
  if (req.xhr) {
    res.status(500).send({ error: "Something failed!" });
  } else {
    next(err);
  }
});

// TEST

//TEST

//connexion à la base de donnée
connect(
  `mongodb+srv://` +
    process.env.ACCESS_DB +
    `@cluster0.qh5wykm.mongodb.net/BADG-HEURE?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`Server started on port ${process.env.PORT}`)
    );
  })
  .catch(() => "Connexion à MongoDB échouée !");
