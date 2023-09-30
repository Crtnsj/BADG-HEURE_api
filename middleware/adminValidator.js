//middleware qui renvoie si l'utilisateur est admin ou non
//grâce au contenu ajouté précédemment à la requête (req.isAdmin)
const adminValidator = async (req, res) => {
  res.status(200).json(req.isAdmin);
};

export default adminValidator;
