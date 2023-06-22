import userModel from "../models/userModel.mjs";
const findAccount = async (userID) => {
  const finder = await userModel.findById(userID);
  return finder;
};
const isAdmin = async (req, res, next) => {
  const data = await findAccount(req.userId);

  req.isAdmin = data.isAdmin;
  next();
};

export default isAdmin;
