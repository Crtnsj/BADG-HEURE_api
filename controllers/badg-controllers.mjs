import badgModel from "../models/badgeage.mjs";

export const badgIn = (req, res) => {
  let data = req.body;
  const newBadgeage = {
    heure: data.hour,
    date: data.date,
    userID: data.userID,
    valid: data.valid,
  };
  badgModel.create(newBadgeage).catch((err) => console.error(err));
  res.status(201).json({
    message: "badgeage pris en compte",
  });
};

export const viewBadg = (req, res) => {
  let data = req.body;
  const retrospective = badgModel.findOne({ userID: data.userID });
  res.status(200).json({
    message: "voici vos badgeages",
    data: { retrospective },
  });
};
