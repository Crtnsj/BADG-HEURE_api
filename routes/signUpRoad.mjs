import { Router } from "express";
import user from "../models/user.mjs";
import bcrypt from "bcrypt";

const router = Router();

router.post("/", (req, res) => {
  let data = req.body;
  bcrypt.hash(data.pswd, 10).then((hash) => {
    data.pswd = hash;
    const newUser = {
      name: data.nom,
      firstName: data.prenom,
      email: data.email,
      password: data.pswd,
    };

    user.create(newUser).catch((err) => console.error(err));
  });
});

export default router;
