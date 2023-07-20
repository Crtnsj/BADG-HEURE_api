import userModel from "../models/userModel.mjs";

//fonction pour changer les infos d'un compte
const changeAccount = async (userID, champs, value) => {
  const someObject = {};
  someObject[champs] = value;
  const changer = await userModel.findByIdAndUpdate(userID, someObject);
  return changer;
};

//middleware pour changer les informations d'un compte
export const change = async (req, res) => {
  const data = await changeAccount(
    req.params.id,
    req.body.champs,
    req.body.value
  );
  res.status(200).json({
    data: data,
  });
};

//fonction pour trouver un compte via son ID
const findAccount = async (userID) => {
  const finder = await userModel.findById(userID);
  return finder;
};

//middleware pour rendre les informations d'un compte via son ID
export const view = async (req, res) => {
  const accountData = await findAccount(req.userId);
  res.status(200).json(accountData);
};

//fonction pour supprimer un compte via son ID
const removeAccount = async (userID) => {
  const finder = await userModel.findByIdAndRemove(userID);
  return finder;
};

//middleware pour supprimer un compte via son ID
export const remove = async (req, res) => {
  await removeAccount(req.params.id);
  res.status(200).json({
    message: "compte supprimé",
  });
};
const findAll = async () => {
  const finder = await userModel.find({});
  return finder;
};
export const viewAll = async (req, res) => {
  const result = await findAll();
  if (req.isAdmin === true) {
    res.status(200).json({ result });
  } else {
    res.status(401);
  }
};
