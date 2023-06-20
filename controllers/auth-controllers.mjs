import userModel from "../models/userModel.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

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
  return jwt.sign({ id }, process.env.SECRET_TOKEN, {
    expiresIn: maxAge,
  });
};

export const signIn = async (req, res) => {
  let data = req.body;
  try {
    const result = await compareUser(data.email, data.password);
    const token = createToken(result);
    res.status(200).json({
      user: result,
      token: token,
    });
  } catch (error) {
    res.status(401).send(error.message);
  }
};

export const signUp = (req, res) => {
  let data = req.body;
  bcrypt.hash(data.password, 10).then((hash) => {
    data.password = hash;
    const newUser = {
      name: data.nom,
      firstName: data.prenom,
      email: data.email,
      password: data.password,
    };

    userModel.create(newUser).catch((err) => console.error(err));
  });
};
