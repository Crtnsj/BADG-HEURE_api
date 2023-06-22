import newsModel from "../models/newsModel.mjs";

export const viewNews = async (req, res) => {
  const news = await newsModel.find();
  const isAdmin = req.isAdmin;

  res.status(200).json({ news, isAdmin });
};

export const addNews = (req, res, next) => {
  let data = req.body;
  const newPost = {
    type: data.type,
    important: data.important,
    content: data.content,
  };

  newsModel
    .create(newPost)
    .then(() => {
      res.status(201).json({
        message: "News crée",
      });
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
};
