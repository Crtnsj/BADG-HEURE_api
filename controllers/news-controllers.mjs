import newsModel from "../models/newsModel.mjs";

export const viewNews = (req, res) => {
  const news = newsModel.find();
  res.status(200).json(news);
};

export const addNews = (req, res) => {};
