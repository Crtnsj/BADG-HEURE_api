import jwt from "jsonwebtoken";

//middleware verifie l'authenticté du token et rends le résultat
const tokenValidator = async (req, res) => {
  const authHeader = req.get("Authorization");
  //si il n'y a aucun token -> renvoie "No token"
  if (!authHeader) {
    res.status(403).json({ message: "No token" });
  } else {
    const token = authHeader.split(" ")[1];
    let decodedToken;
    //tente de décoder le token grâce à la chaine de caractères
    //contenu dans la variable dotenv SECRET_TOKEN
    try {
      decodedToken = jwt.verify(token, process.env.SECRET_TOKEN);
    } catch (err) {
      console.error(err);
    }
    //Renvoyer le résultat du décodage
    if (!decodedToken) {
      res.status(200).json({ valid: false });
    } else {
      res.status(200).json({ valid: true });
    }
  }
};

export default tokenValidator;
