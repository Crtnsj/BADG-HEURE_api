import userModel from "../models/user.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const compareUser = async function (email, pswd) {
  const ficheUser = await userModel.findOne({ email: email });
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

export const signIn = async (req, res) => {
  let data = req.body;
  try {
    const result = await compareUser(data.email, data.pswd);
    const token = createToken(result);
    res.cookie("jwt", token, { httpOnly: true, maxAge });
    res.status(200).json({ user: result });
  } catch (error) {
    res.status(401).send(error.message);
  }
};

export const signUp = (req, res) => {
  let data = req.body;
  bcrypt.hash(data.pswd, 10).then((hash) => {
    data.pswd = hash;
    const newUser = {
      name: data.nom,
      firstName: data.prenom,
      email: data.email,
      password: data.pswd,
    };

    userModel.create(newUser).catch((err) => console.error(err));
  });
};
