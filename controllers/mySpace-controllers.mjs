import badgModel from "../models/badgeage.mjs";

export const view = (req, res) => {
  let data = req.body;
  const account = badgModel.findOne({ userID: data.userID });
  res.status(200).json({
    data: { account },
  });
};

export const change = (req, res) => {
  let data = req.body;
  badgModel.updateOne({ data: data });
  res.status(201).json({
    message: "Informations modifées !",
  });
};
