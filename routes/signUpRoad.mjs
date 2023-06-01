import { Router } from "express";
import user from "../models/user.mjs";

const router = Router();

router.post("/", (req, res) => {
  let data = req.body;
  const newUser = {
    name: data.nom,
    firstName: data.prenom,
    email: data.email,
    password: data.pswd,
  };

  user
    .create(newUser)
    .then((utilisateur) => console.log(utilisateur))
    .catch((err) => console.error(err));
});

export default router;
