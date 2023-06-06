import { Router } from "express";
import bcrypt from "bcrypt";
import user from "../models/user.mjs";
import jwt from "jsonwebtoken";

const router = Router();
const compareUser = async function (email, pswd) {
  const ficheUser = await user.findOne({ email: email });
  if (ficheUser) {
    const auth = await bcrypt.compare(pswd, ficheUser.password);
    if (auth) {
      return ficheUser._id;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};

const maxAge = 3 * 24 * 60 * 60 * 1000;

const createToken = (id) => {
  return jwt.sign({ id }, "4X3rzTTDatg6BgjCCa7hh18Vlmwe6f", {
    expiresIn: maxAge,
  });
};

router.post("/", async (req, res) => {
  let data = req.body;
  try {
    const result = await compareUser(data.email, data.pswd);
    const token = createToken(result);
    res.cookie("jwt", token, { maxAge });
    res.status(200).json({ user: result });
  } catch (error) {
    res.status(401).send(error.message);
  }
});

export default router;
