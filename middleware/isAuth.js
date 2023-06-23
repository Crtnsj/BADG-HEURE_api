import jwt from "jsonwebtoken";

//middleware qui verifie l'autenticité du token et qui ajoute l'user ID dans la requête
export default async (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    res.status(403).json({ message: "No token" });
  } else {
    const token = authHeader.split(" ")[1];
    let decodedToken;
    try {
      decodedToken = jwt.verify(token, process.env.SECRET_TOKEN);
    } catch (err) {
      console.error(err);
    }
    if (!decodedToken) {
      res.status(401).json({ message: "Invalid token" });
    } else {
      req.userId = decodedToken.id;
      next();
    }
  }
};
