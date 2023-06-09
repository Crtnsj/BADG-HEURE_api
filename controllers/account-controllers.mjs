import userModel from "../models/userModel.mjs";

const changeAccount = async (userID, champs, value) => {
  const someObject = {};
  someObject[champs] = value;
  const changer = await userModel.findByIdAndUpdate(userID, someObject);
  return changer;
};

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

const findAccount = async (userID) => {
  const finder = await userModel.findById(userID);
  return finder;
};

export const view = async (req, res) => {
  const data = await findAccount(req.params.id);
  res.status(200).json({
    message: "voici vos information personnelles",
    data: data,
  });
};

const removeAccount = async (userID) => {
  const finder = await userModel.findByIdAndRemove(userID);
  return finder;
};

export const remove = async (req, res) => {
  await removeAccount(req.params.id);
  res.status(200).json({
    message: "compte supprimé",
  });
};
