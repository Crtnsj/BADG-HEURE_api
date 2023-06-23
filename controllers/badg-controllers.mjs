import badgModel from "../models/badgModel.mjs";

//middleware servant à la création d'un badgeage
export const badgIn = (req, res, next) => {
  let data = req.body;
  const newBadgeage = {
    heure: data.heure,
    date: data.date,
    userID: data.userID,
    valid: data.valid,
  };
  badgModel
    .create(newBadgeage)
    .then(() => {
      res.status(201).json({
        message: "badgeage pris en compte",
      });
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error.statusCode);
    });
};

//middleware servant à voir les badgeages
export const getViewBadg = async (req, res) => {
  const retrospective = async (userID) => {
    const finder = await badgModel.find({ userID: userID });
    return finder;
  };
  const data = await retrospective(req.body.userID);

  res.status(200).json({
    message: "voici vos badgeages",
    data: data,
  });
};
