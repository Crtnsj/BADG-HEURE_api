import userModel from "../models/userModel.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

//fonction qui compare les informations d'un utilisateur
const compareUser = async (email, pswd) => {
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

//constante qui définit la durée de vie d'un JWT
const maxAge = 2592000000; //30 jours;

//fonction pour créer un JWT
const createToken = async (id) => {
  return jwt.sign({ id }, process.env.SECRET_TOKEN, {
    expiresIn: maxAge,
  });
};

//middleware servant à la connexion
export const signIn = async (req, res) => {
  let data = req.body;
  try {
    const result = await compareUser(data.email, data.password);
    const token = await createToken(result);
    res.status(200).json({
      user: result,
      token: token,
    });
  } catch (error) {
    res.status(401).send(error.message);
  }
};

//middleware servant à la création d'un compte
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
