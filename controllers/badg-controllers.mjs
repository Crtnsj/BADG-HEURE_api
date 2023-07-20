import badgModel from "../models/badgModel.mjs";

//middleware servant à la création d'un badgeage
export const badgIn = (req, res, next) => {
  let data = req.body;
  const newBadgeage = {
    date: data.date,
    userID: req.userId,
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

const retrospective = async (userID) => {
  const finder = await badgModel.find({ userID: userID });
  return finder;
};

//middleware servant à voir les badgeages
export const getViewBadg = async (req, res) => {
  const data = await retrospective(req.userId);
  const dates = data.map((item) => item.date);
  res.status(200).json(dates);
};

export const getBadgByID = async (req, res) => {
  const data = await retrospective(req.params.id);
  const dates = data.map((item) => item.date);
  res.status(200).json(dates);
};
