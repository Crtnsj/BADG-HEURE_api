const adminValidator = async (req, res, next) => {
  res.status(200).json(req.isAdmin);
};

export default adminValidator;
