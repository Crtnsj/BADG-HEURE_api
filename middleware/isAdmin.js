import userModel from "../models/userModel.mjs";

// fonction qui rends les informations de l'utilisateurs en fonction de son ID
const findAccount = async (userID) => {
  const finder = await userModel.findById(userID);
  return finder;
};

// middleware qui ajoute à la requête si l'utilisateur est admin ou non
const isAdmin = async (req, res, next) => {
  const data = await findAccount(req.userId);
  req.isAdmin = data.isAdmin;
  next();
};

export default isAdmin;
