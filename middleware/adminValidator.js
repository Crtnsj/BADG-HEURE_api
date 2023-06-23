//middleware qui renvoie si l'utilisateur est admin ou non
const adminValidator = async (req, res) => {
  res.status(200).json(req.isAdmin);
};

export default adminValidator;
